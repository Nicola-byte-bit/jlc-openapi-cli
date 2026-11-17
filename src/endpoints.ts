import type { Flags } from "./args";
import { usageError } from "./output";

export interface FieldDef {
  name: string;
  type: "string" | "integer" | "boolean";
  required: boolean;
  description: string;
  enum?: string[];
  min?: number;
  max?: number;
  /** 目前仅支持 `datetime`（`yyyy-MM-dd HH:mm:ss`）。 */
  format?: "datetime";
}

export interface EndpointDef {
  path: string;
  description: string;
  method: "POST" | "GET";
  fields: FieldDef[];
  example: string;
}

export const DATE_TIME_PATTERN = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

export const ENDPOINTS: Record<string, EndpointDef> = {
  "/pcb/order/getOrderPageList": {
    path: "/pcb/order/getOrderPageList",
    description: "分页查询 PCB 订单",
    method: "POST",
    fields: [
      {
        name: "orderType",
        type: "string",
        required: true,
        enum: ["examples", "batch"],
        description: "订单类别：样板 examples，小批量 batch",
      },
      {
        name: "produceCode",
        type: "string",
        required: false,
        description: "生产订单编号，例如 Y50504",
      },
      {
        name: "orderByFlag",
        type: "boolean",
        required: false,
        description: "是否按下单时间降序排序：true 降序，false 升序",
      },
      {
        name: "orderDateBegin",
        type: "string",
        required: true,
        format: "datetime",
        description: "下单开始时间，格式 yyyy-MM-dd HH:mm:ss",
      },
      {
        name: "orderDateEnd",
        type: "string",
        required: true,
        format: "datetime",
        description: "下单结束时间，格式 yyyy-MM-dd HH:mm:ss",
      },
      {
        name: "pageSize",
        type: "integer",
        required: true,
        min: 1,
        max: 100,
        description: "每页数据量，1-100",
      },
      {
        name: "pageNum",
        type: "integer",
        required: true,
        min: 1,
        description: "页码，从 1 开始",
      },
      {
        name: "queryFilterFlag",
        type: "boolean",
        required: false,
        description: "是否过滤已取消订单：true 过滤，false 不过滤",
      },
    ],
    example:
      'jlc-openapi-cli /pcb/order/getOrderPageList --orderType examples --produceCode Y50504 ' +
      '--orderByFlag true --orderDateBegin "2026-11-11 00:00:00" --orderDateEnd "2026-11-16 18:00:00" ' +
      "--pageSize 10 --pageNum 1 --queryFilterFlag true",
  },
};

/** 调用接口时不应被当作业务字段的全局选项。 */
export const GLOBAL_FLAG_NAMES = new Set([
  "config",
  "endpoint",
  "raw",
  "compact",
  "debug",
  "timeout",
  "json",
  "jsonFile",
  "method",
  "force",
  "allowHttp",
  "help",
  "version",
]);

export function getEndpoint(apiPath: string): EndpointDef | undefined {
  return ENDPOINTS[apiPath];
}

export function extractEndpointFlags(flags: Flags): Flags {
  const result: Flags = {};
  for (const [key, value] of Object.entries(flags)) {
    if (!GLOBAL_FLAG_NAMES.has(key)) result[key] = value;
  }
  return result;
}

function parseBoolean(value: string, fieldName: string): boolean {
  const normalized = value.trim().toLowerCase();
  if (["true", "1", "yes", "y", "on"].includes(normalized)) return true;
  if (["false", "0", "no", "n", "off"].includes(normalized)) return false;
  throw usageError(`参数 --${fieldName} 需要布尔值（true/false），实际为 "${value}"`);
}

function isValidDateTime(value: string): boolean {
  if (!DATE_TIME_PATTERN.test(value)) return false;
  const [datePart, timePart] = value.split(" ");
  const [year, month, day] = (datePart as string).split("-").map(Number);
  const [hour, minute, second] = (timePart as string).split(":").map(Number);
  if (
    month! < 1 || month! > 12 ||
    day! < 1 || day! > 31 ||
    hour! < 0 || hour! > 23 ||
    minute! < 0 || minute! > 59 ||
    second! < 0 || second! > 59
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

export interface ValidationResult {
  payload: Record<string, unknown>;
  warnings: string[];
}

/**
 * 把命令行 flag 转成接口 body，并校验必填、枚举、日期格式与数值范围。
 * 未提供的可选字段不会出现在 payload 中。
 */
export function validatePayload(endpoint: EndpointDef, raw: Flags): ValidationResult {
  const errors: string[] = [];
  const fieldNames = new Set(endpoint.fields.map((field) => field.name));

  for (const key of Object.keys(raw)) {
    if (!fieldNames.has(key)) {
      errors.push(
        `未知参数 --${key}。可用参数：${endpoint.fields.map((field) => field.name).join(", ")}`,
      );
    }
  }

  const payload: Record<string, unknown> = {};
  for (const field of endpoint.fields) {
    const value = raw[field.name];
    if (value === undefined) {
      if (field.required) errors.push(`缺少必填参数 --${field.name}`);
      continue;
    }

    if (field.type === "boolean") {
      if (value === true) {
        payload[field.name] = true;
        continue;
      }
      try {
        payload[field.name] = parseBoolean(String(value), field.name);
      } catch (error) {
        errors.push((error as Error).message);
      }
      continue;
    }

    if (typeof value !== "string") {
      errors.push(`参数 --${field.name} 缺少值`);
      continue;
    }

    if (field.type === "integer") {
      const num = Number(value);
      if (!Number.isInteger(num)) {
        errors.push(`参数 --${field.name} 需要整数，实际为 "${value}"`);
        continue;
      }
      if (field.min !== undefined && num < field.min) {
        errors.push(`参数 --${field.name} 不能小于 ${field.min}`);
        continue;
      }
      if (field.max !== undefined && num > field.max) {
        errors.push(`参数 --${field.name} 不能大于 ${field.max}`);
        continue;
      }
      payload[field.name] = num;
      continue;
    }

    if (field.enum && !field.enum.includes(value)) {
      errors.push(`参数 --${field.name} 只能是 ${field.enum.join(" / ")}，实际为 "${value}"`);
      continue;
    }
    if (field.format === "datetime" && !isValidDateTime(value)) {
      errors.push(
        `参数 --${field.name} 需要格式为 "yyyy-MM-dd HH:mm:ss" 的合法时间，实际为 "${value}"`,
      );
      continue;
    }

    payload[field.name] = value;
  }

  if (errors.length > 0) {
    throw usageError(errors.join("；"));
  }

  const warnings: string[] = [];
  const begin = payload.orderDateBegin;
  const end = payload.orderDateEnd;
  if (typeof begin === "string" && typeof end === "string") {
    const beginTime = Date.parse(begin.replace(" ", "T"));
    const endTime = Date.parse(end.replace(" ", "T"));
    const days = Math.abs(endTime - beginTime) / 86_400_000;
    if (days > 365) {
      warnings.push("orderDateBegin 与 orderDateEnd 相差超过 365 天，服务端可能拒绝该请求。");
    }
  }

  return { payload, warnings };
}
