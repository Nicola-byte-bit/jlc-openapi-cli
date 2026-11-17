import fs from "node:fs";
import path from "node:path";

import { getFlagValues, type FlagValue, type Flags } from "./args";
import { GLOBAL_FLAG_NAMES, type EndpointDef, type FieldDef } from "./endpoints";
import { usageError } from "./output";

/** 超过 JS 安全整数范围的整数，保留原始字面量。 */
export class RawNumber {
  constructor(readonly raw: string) {}
}

/** 序列化 payload，同时把 RawNumber 还原成未加引号的数字字面量。 */
export function stringifyPayload(value: unknown): string {
  const json = JSON.stringify(value, (_key, item) =>
    item instanceof RawNumber ? `\u0000RAW:${item.raw}` : item,
  );
  return json.replace(/"\\u0000RAW:(-?\d+(?:\.\d+)?)"/g, "$1");
}

export interface BuildOptions {
  /** CLI --strict：未声明参数报错。 */
  strict?: boolean;
  /** CLI --no-validate：跳过必填校验。 */
  validate?: boolean;
  warn?: (message: string) => void;
}

export interface BuildResult {
  payload: Record<string, unknown>;
  /** 文件字段 → 绝对路径。 */
  fileValues: Record<string, string>;
  warnings: string[];
  /** multipart 的签名报文（meta）。 */
  signBody: string;
}

function parseBoolean(value: string, key: string): boolean {
  const normalized = value.trim().toLowerCase();
  if (["true", "1", "yes", "y", "on"].includes(normalized)) return true;
  if (["false", "0", "no", "n", "off"].includes(normalized)) return false;
  usageError(`参数 --${key} 需要布尔值（true/false），实际为 "${value}"`);
}

function parseInteger(value: string, key: string): number | RawNumber {
  if (!/^-?\d+$/.test(value.trim())) {
    usageError(`参数 --${key} 需要整数，实际为 "${value}"`);
  }
  const raw = value.trim();
  const num = Number(raw);
  if (!Number.isSafeInteger(num)) return new RawNumber(raw);
  return num;
}

function parseNumber(value: string, key: string): number {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    usageError(`参数 --${key} 需要数字，实际为 "${value}"`);
  }
  return num;
}

function parseJson(value: string, key: string): unknown {
  try {
    return JSON.parse(value);
  } catch (error) {
    usageError(`参数 --${key} 需要合法 JSON：${(error as Error).message}`);
  }
}

function isValidDateTime(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(value)) return false;
  const [datePart, timePart] = value.split(" ");
  const [year, month, day] = (datePart as string).split("-").map(Number);
  const [hour, minute, second] = (timePart as string).split(":").map(Number);
  if (
    month! < 1 ||
    month! > 12 ||
    day! < 1 ||
    day! > 31 ||
    hour! < 0 ||
    hour! > 23 ||
    minute! < 0 ||
    minute! > 59 ||
    second! < 0 ||
    second! > 59
  ) {
    return false;
  }
  const date = new Date(year!, month! - 1, day!, hour!, minute!, second!);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month! - 1 &&
    date.getDate() === day
  );
}

function inferValue(value: FlagValue): unknown {
  if (typeof value === "boolean") return value;
  const raw = value.trim();
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (/^-?\d+$/.test(raw) && !/^-?0\d/.test(raw)) {
    const num = Number(raw);
    return Number.isSafeInteger(num) ? num : new RawNumber(raw);
  }
  if ((raw.startsWith("{") && raw.endsWith("}")) || (raw.startsWith("[") && raw.endsWith("]"))) {
    try {
      return JSON.parse(raw);
    } catch {
      return value;
    }
  }
  return value;
}

function coerceValue(
  value: FlagValue,
  field: FieldDef | undefined,
  key: string,
): unknown {
  if (!field) return inferValue(value);
  if (typeof value === "boolean") {
    if (field.type === "boolean") return value;
    if (value === true) usageError(`参数 --${key} 缺少值`);
    return String(value);
  }
  switch (field.type) {
    case "boolean":
      return parseBoolean(value, key);
    case "integer": {
      const parsed = parseInteger(value, key);
      if (typeof parsed === "number") {
        if (field.min !== undefined && parsed < field.min) {
          usageError(`参数 --${key} 不能小于 ${field.min}`);
        }
        if (field.max !== undefined && parsed > field.max) {
          usageError(`参数 --${key} 不能大于 ${field.max}`);
        }
      }
      return parsed;
    }
    case "number": {
      const parsed = parseNumber(value, key);
      if (field.min !== undefined && parsed < field.min) {
        usageError(`参数 --${key} 不能小于 ${field.min}`);
      }
      if (field.max !== undefined && parsed > field.max) {
        usageError(`参数 --${key} 不能大于 ${field.max}`);
      }
      return parsed;
    }
    case "object":
      return parseJson(value, key);
    case "file":
      return value;
    case "array": {
      const trimmed = value.trim();
      if (trimmed.startsWith("[")) {
        const parsed = parseJson(trimmed, key);
        if (!Array.isArray(parsed)) usageError(`参数 --${key} 需要 JSON 数组`);
        return parsed;
      }
      const itemType = field.items && field.items !== "unknown" ? field.items : undefined;
      return [
        coerceValue(
          value,
          itemType ? { ...field, type: itemType, path: field.path } : undefined,
          key,
        ),
      ];
    }
    default:
      if (field.enum && !field.enum.includes(value)) {
        usageError(`参数 --${key} 只能是 ${field.enum.join(" / ")}，实际为 "${value}"`);
      }
      if (field.format === "datetime" && !isValidDateTime(value)) {
        usageError(`参数 --${key} 需要格式为 "yyyy-MM-dd HH:mm:ss" 的合法时间，实际为 "${value}"`);
      }
      return value;
  }
}

function coerceValues(
  values: FlagValue[],
  field: FieldDef | undefined,
  key: string,
): unknown {
  if (field?.type === "array") {
    const itemType = field.items && field.items !== "unknown" ? field.items : undefined;
    const itemField = itemType ? { ...field, type: itemType } : undefined;
    if (values.length > 1) {
      return values.map((value) => coerceValue(value, itemField, key));
    }
    const single = values[0] as FlagValue;
    if (typeof single === "string") {
      const trimmed = single.trim();
      if (trimmed.startsWith("[")) {
        const parsed = parseJson(trimmed, key);
        if (!Array.isArray(parsed)) usageError(`参数 --${key} 需要 JSON 数组`);
        return parsed;
      }
      if (field.items === "integer" || field.items === "number") {
        return trimmed.split(",").map((item) =>
          coerceValue(item.trim(), { ...field, type: field.items as "integer" | "number" }, key),
        );
      }
    }
    return [coerceValue(single, itemField, key)];
  }

  if (values.length > 1) {
    return values.map((value) => coerceValue(value, field, key));
  }
  return coerceValue(values[0] as FlagValue, field, key);
}

function setPath(
  root: Record<string, unknown>,
  segments: string[],
  value: unknown,
  resolveField: (path: string) => FieldDef | undefined,
  prefix = "",
): void {
  const head = segments[0] as string;
  const rest = segments.slice(1);
  const currentPath = prefix ? `${prefix}.${head}` : head;

  if (rest.length === 0) {
    if (root[head] !== undefined && root[head] !== value) {
      const existing = root[head];
      if (existing === null || typeof existing !== "object") {
        usageError(`参数冲突：--${currentPath} 与子路径参数同时出现`);
      }
    }
    root[head] = value;
    return;
  }

  const field = resolveField(currentPath);
  const next = rest[0] as string;
  const nextIsIndex = /^\d+$/.test(next);

  if (field?.type === "array" || nextIsIndex) {
    let container = root[head];
    if (container === undefined) {
      container = [];
      root[head] = container;
    }
    if (!Array.isArray(container)) {
      usageError(`参数冲突：--${currentPath} 已被指定为普通值，不能再使用子路径`);
    }
    if (field?.type === "array" && !nextIsIndex) {
      if (container.length === 0) container.push({});
      setPath(container[0] as Record<string, unknown>, rest, value, resolveField, currentPath);
      return;
    }
    const index = Number(next);
    if (!Number.isInteger(index) || index < 0) {
      usageError(`参数 --${currentPath} 的数组下标非法：${next}`);
    }
    while (container.length <= index) container.push({});
    setPath(
      container[index] as Record<string, unknown>,
      rest.slice(1),
      value,
      resolveField,
      currentPath,
    );
    return;
  }

  let container = root[head];
  if (container === undefined) {
    container = {};
    root[head] = container;
  }
  if (container === null || typeof container !== "object" || Array.isArray(container)) {
    usageError(`参数冲突：--${currentPath} 已被指定为普通值，不能再使用子路径`);
  }
  setPath(container as Record<string, unknown>, rest, value, resolveField, currentPath);
}

function getPath(value: unknown, segments: string[]): unknown {
  if (segments.length === 0) return value;
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = getPath(item, segments);
      if (found !== undefined) return found;
    }
    return undefined;
  }
  if (value === null || typeof value !== "object") return undefined;
  const [head, ...rest] = segments;
  return getPath((value as Record<string, unknown>)[head as string], rest);
}

function extractFieldFlags(flags: Flags): Array<[string, FlagValue[]]> {
  const result: Array<[string, FlagValue[]]> = [];
  for (const key of Object.keys(flags)) {
    if (GLOBAL_FLAG_NAMES.has(key)) continue;
    result.push([key, getFlagValues(flags, key)]);
  }
  return result;
}

function buildFieldIndex(endpoint: EndpointDef): {
  byPath: Map<string, FieldDef>;
  byLeaf: Map<string, FieldDef[]>;
} {
  const byPath = new Map<string, FieldDef>();
  const byLeaf = new Map<string, FieldDef[]>();
  for (const field of endpoint.fields) {
    byPath.set(field.path, field);
    const leaf = field.path.split(".").pop() as string;
    const list = byLeaf.get(leaf) ?? [];
    list.push(field);
    byLeaf.set(leaf, list);
  }
  return { byPath, byLeaf };
}

function resolveFieldFactory(endpoint: EndpointDef) {
  const { byPath, byLeaf } = buildFieldIndex(endpoint);
  return (rawPath: string): FieldDef | undefined => {
    const normalized = rawPath.replace(/\.\d+/g, "");
    const exact = byPath.get(normalized);
    if (exact) return exact;
    const leaf = normalized.split(".").pop() as string;
    const candidates = byLeaf.get(leaf);
    if (candidates && candidates.length === 1) return candidates[0];
    return undefined;
  };
}

export function buildPayload(
  endpoint: EndpointDef,
  flags: Flags,
  options: BuildOptions = {},
): BuildResult {
  const warnings: string[] = [];
  const warn = options.warn ?? (() => undefined);
  const resolveField = resolveFieldFactory(endpoint);
  const payload: Record<string, unknown> = {};
  const fileValues: Record<string, string> = {};

  // 文件字段单独处理：--file 映射到第一个文件字段。
  const fileFields = endpoint.fileFields ?? [];
  for (const [index, fileField] of fileFields.entries()) {
    let raw = flags[fileField];
    if (raw === undefined && index === 0) raw = flags.file;
    if (raw === undefined) continue;
    if (typeof raw !== "string") usageError(`参数 --${fileField} 缺少文件路径`);
    const absolute = path.resolve(raw);
    let stat: fs.Stats;
    try {
      stat = fs.statSync(absolute);
    } catch {
      usageError(`文件不存在：${absolute}`);
    }
    if (!stat.isFile()) usageError(`不是文件：${absolute}`);
    fileValues[fileField] = absolute;
  }

  if (Object.keys(fileValues).length === 0 && flags.file !== undefined && fileFields.length === 0) {
    usageError(`接口 ${endpoint.path} 不支持文件上传参数 --file`);
  }

  for (const [key, values] of extractFieldFlags(flags)) {
    if (fileFields.includes(key)) continue;

    const field = resolveField(key);
    if (!field) {
      if (options.strict) {
        const suggestions = endpoint.fields
          .map((item) => item.path)
          .filter((item) => item.toLowerCase().includes(key.toLowerCase()))
          .slice(0, 5);
        usageError(
          `未知参数 --${key}` +
            (suggestions.length > 0 ? `。相近参数：${suggestions.join(", ")}` : "") +
            "。使用 --json 可直接透传完整 body。",
        );
      }
      warnings.push(`未知参数 --${key}，已透传。使用 --strict 可禁止未声明参数。`);
    }

    const value = coerceValues(values, field, key);
    setPath(payload, key.split("."), value, resolveField);
  }

  if (options.strict && options.validate !== false) {
    const missing = endpoint.fields
      .filter((field) => field.required)
      .filter((field) => getPath(payload, field.path.split(".")) === undefined)
      .map((field) => field.path);
    if (missing.length > 0) {
      usageError(`缺少必填参数：${missing.map((item) => `--${item}`).join(", ")}`);
    }
  }

  const begin = payload.orderDateBegin;
  const end = payload.orderDateEnd;
  if (typeof begin === "string" && typeof end === "string") {
    const days = Math.abs(Date.parse(end.replace(" ", "T")) - Date.parse(begin.replace(" ", "T"))) /
      86_400_000;
    if (days > 365) {
      warnings.push("orderDateBegin 与 orderDateEnd 相差超过 365 天，服务端可能拒绝该请求。");
    }
  }

  for (const field of fileFields) {
    // 文档声明为必填的文件字段（当前文档均为必须）缺失时直接报错。
    const schema = resolveField(field);
    if (schema?.required && fileValues[field] === undefined) {
      usageError(`缺少必填文件参数 --${field}`);
    }
  }

  for (const message of warnings) warn(message);

  let signBody = "";
  if (endpoint.contentType === "multipart") {
    const explicit = flags.signBody;
    if (typeof explicit === "string") {
      signBody = explicit;
    } else if (payload.meta !== undefined) {
      signBody =
        typeof payload.meta === "string" ? payload.meta : stringifyPayload(payload.meta);
    } else {
      const metaString =
        Object.keys(payload).length > 0 ? stringifyPayload(payload) : "{}";
      payload.meta = metaString;
      signBody = metaString;
    }
  }

  return { payload, fileValues, warnings, signBody };
}

/** 把 payload 展开成 GET 查询串。 */
export function toQueryString(value: unknown, prefix = ""): string[] {
  const pairs: string[] = [];
  if (value === null || value === undefined) return pairs;
  if (Array.isArray(value)) {
    for (const item of value) {
      if (item !== null && typeof item === "object") {
        pairs.push(...toQueryString(item, prefix));
      } else if (item !== undefined) {
        pairs.push(`${encodeURIComponent(prefix)}=${encodeURIComponent(String(item))}`);
      }
    }
    return pairs;
  }
  if (value instanceof RawNumber) {
    if (prefix) {
      pairs.push(`${encodeURIComponent(prefix)}=${encodeURIComponent(value.raw)}`);
    }
    return pairs;
  }
  if (typeof value === "object") {
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      const next = prefix ? `${prefix}.${key}` : key;
      pairs.push(...toQueryString(item, next));
    }
    return pairs;
  }
  if (prefix) {
    pairs.push(`${encodeURIComponent(prefix)}=${encodeURIComponent(String(value))}`);
  }
  return pairs;
}
