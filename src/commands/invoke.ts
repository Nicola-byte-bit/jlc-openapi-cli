import fs from "node:fs";
import path from "node:path";

import { getBooleanFlag, hasFlag, type Flags } from "../args";
import { loadConfig, validateEndpoint } from "../config";
import { extractEndpointFlags, getEndpoint, validatePayload } from "../endpoints";
import { requestHttp, type FetchLike } from "../http";
import { formatJsonText } from "../json-text";
import {
  CliError,
  EXIT_API,
  EXIT_NETWORK,
  usageError,
  writeErr,
  writeOut,
  type WritableLike,
} from "../output";
import { buildAuthorization, buildStringToSign, computeSignature, createNonce } from "../sign";
import { getVersion } from "../version";

export interface InvokeDeps {
  fetchImpl?: FetchLike;
  env?: NodeJS.ProcessEnv;
  cwd?: string;
  homeDir?: string;
  now?: () => number;
  nonce?: string;
  stdout?: WritableLike;
  stderr?: WritableLike;
}

const DEFAULT_TIMEOUT_MS = 30_000;

function stringValue(flags: Flags, name: string): string | undefined {
  const value = flags[name];
  if (value === undefined) return undefined;
  if (value === true) usageError(`参数 --${name} 缺少值`);
  return value as string;
}

function parseTimeout(flags: Flags): number {
  const raw = stringValue(flags, "timeout");
  if (raw === undefined) return DEFAULT_TIMEOUT_MS;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 600_000) {
    usageError(`参数 --timeout 需要 1-600000 之间的整数（毫秒），实际为 "${raw}"`);
  }
  return value;
}

function readJsonBody(flags: Flags, cwd: string): string | undefined {
  const inline = hasFlag(flags, "json");
  const fromFile = hasFlag(flags, "jsonFile");

  if (inline && fromFile) usageError("--json 与 --json-file 不能同时使用");

  let content: string | undefined;
  if (inline) {
    content = stringValue(flags, "json");
  } else if (fromFile) {
    const rawPath = stringValue(flags, "jsonFile");
    if (!rawPath) usageError("参数 --json-file 缺少路径");
    const filePath = path.resolve(cwd, rawPath);
    try {
      content = fs.readFileSync(filePath, "utf8");
    } catch (error) {
      usageError(`读取 JSON 文件失败：${filePath}（${(error as Error).message}）`);
    }
  }

  if (content === undefined) return undefined;

  const normalized = content.charCodeAt(0) === 0xfeff ? content.slice(1) : content;
  try {
    JSON.parse(normalized);
  } catch (error) {
    usageError(`请求 body 不是合法 JSON：${(error as Error).message}`);
  }
  return normalized;
}

function buildQuery(payload: Record<string, unknown>): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null) continue;
    params.append(key, String(value));
  }
  return params.toString();
}

function splitPath(apiPath: string): { path: string; query: string } {
  const index = apiPath.indexOf("?");
  if (index < 0) return { path: apiPath, query: "" };
  return { path: apiPath.slice(0, index), query: apiPath.slice(index + 1) };
}

interface PreparedRequest {
  method: string;
  apiPath: string;
  body: string;
  query: string;
}

function prepareRegistered(
  apiPath: string,
  flags: Flags,
  cwd: string,
  stderr: WritableLike,
): PreparedRequest {
  const def = getEndpoint(apiPath);
  if (!def) {
    usageError(
      `未注册的接口：${apiPath}。可使用 \`jlc-openapi-cli list\` 查看，` +
        `或用 \`jlc-openapi-cli call ${apiPath} --json '<body>'\` 通用调用。`,
    );
  }
  const rawBody = readJsonBody(flags, cwd);
  const fieldFlags = extractEndpointFlags(flags);

  if (rawBody !== undefined) {
    if (Object.keys(fieldFlags).length > 0) {
      usageError("--json / --json-file 不能与逐字段参数同时使用");
    }
    return {
      method: def.method,
      apiPath: def.path,
      body: def.method === "GET" ? "" : rawBody,
      query: def.method === "GET" ? buildQuery(JSON.parse(rawBody) as Record<string, unknown>) : "",
    };
  }

  const { payload, warnings } = validatePayload(def, fieldFlags);
  for (const warning of warnings) writeErr(stderr, `警告：${warning}`);

  if (def.method === "GET") {
    return { method: "GET", apiPath: def.path, body: "", query: buildQuery(payload) };
  }
  return { method: "POST", apiPath: def.path, body: JSON.stringify(payload), query: "" };
}

function prepareGeneric(
  apiPath: string,
  flags: Flags,
  cwd: string,
): PreparedRequest {
  const leftover = Object.keys(extractEndpointFlags(flags));
  if (leftover.length > 0) {
    usageError(
      `call 不接受逐字段参数（${leftover.map((key) => `--${key}`).join(", ")}）。` +
        `请使用 --json '<body>' 或 --json-file <path>。`,
    );
  }

  const method = (stringValue(flags, "method") ?? "POST").toUpperCase();
  if (method !== "POST" && method !== "GET") {
    usageError(`参数 --method 只支持 POST 或 GET，实际为 "${method}"`);
  }

  const { path: barePath, query: pathQuery } = splitPath(apiPath);
  const rawBody = readJsonBody(flags, cwd);

  if (method === "GET") {
    const parsed = rawBody && rawBody.trim() !== "" ? (JSON.parse(rawBody) as unknown) : {};
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      usageError("GET 请求的 --json 必须是 JSON 对象");
    }
    const query = [pathQuery, buildQuery(parsed as Record<string, unknown>)]
      .filter((part) => part !== "")
      .join("&");
    return { method: "GET", apiPath: barePath, body: "", query };
  }

  return {
    method: "POST",
    apiPath: barePath,
    body: rawBody ?? "{}",
    query: pathQuery,
  };
}

function asObject(value: unknown): Record<string, unknown> | undefined {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return undefined;
  return value as Record<string, unknown>;
}

function classifyBusinessResult(parsed: unknown): { failed: boolean; summary?: string } {
  const obj = asObject(parsed);
  if (!obj) return { failed: false };

  const messages: string[] = [];
  let failed = false;

  const code = obj.code;
  if (typeof code === "number" && code !== 200) {
    failed = true;
    messages.push(`code=${code}`);
  } else if (typeof code === "string" && code !== "200") {
    failed = true;
    messages.push(`code=${code}`);
  }

  if (obj.success === false) {
    failed = true;
    if (typeof obj.message === "string" && obj.message !== "") {
      messages.push(`message=${obj.message}`);
    }
  }

  return { failed, summary: messages.join(", ") };
}

async function execute(
  prepared: PreparedRequest,
  flags: Flags,
  deps: InvokeDeps,
): Promise<number> {
  const stdout = deps.stdout ?? process.stdout;
  const stderr = deps.stderr ?? process.stderr;
  const cwd = deps.cwd ?? process.cwd();
  const env = deps.env ?? process.env;
  const compact = getBooleanFlag(flags, "compact");
  const raw = getBooleanFlag(flags, "raw");
  const debug = getBooleanFlag(flags, "debug");
  const timeoutMs = parseTimeout(flags);

  if (raw && compact) usageError("--raw 与 --compact 不能同时使用");

  const allowHttp = flags.allowHttp === true;
  const config = loadConfig({
    configPath: stringValue(flags, "config"),
    cwd,
    homeDir: deps.homeDir,
    env,
    allowHttp,
  });

  const endpointOverride = stringValue(flags, "endpoint");
  if (endpointOverride) {
    validateEndpoint(endpointOverride, allowHttp);
    config.endpoint = endpointOverride.replace(/\/+$/, "");
  }

  if (!prepared.apiPath.startsWith("/")) {
    usageError(`接口路径必须以 / 开头：${prepared.apiPath}`);
  }

  const canonicalUri = prepared.query
    ? `${prepared.apiPath}?${prepared.query}`
    : prepared.apiPath;
  const url = `${config.endpoint}${canonicalUri}`;

  const timestamp = Math.floor((deps.now ? deps.now() : Date.now()) / 1000);
  const nonce = deps.nonce ?? createNonce();
  const stringToSign = buildStringToSign({
    method: prepared.method,
    canonicalUri,
    timestamp,
    nonce,
    body: prepared.body,
  });
  const signature = computeSignature(config.sk, stringToSign);
  const authorization = buildAuthorization({
    appId: config.appId,
    accessKey: config.ak,
    timestamp,
    nonce,
    signature,
  });

  const headers: Record<string, string> = {
    Authorization: authorization,
    "Content-Type": "application/json",
    Accept: "application/json",
    "User-Agent": `jlc-openapi-cli/${getVersion()}`,
  };

  if (debug) {
    writeErr(stderr, `[debug] ${prepared.method} ${url}`);
    writeErr(stderr, `[debug] stringToSign=${JSON.stringify(stringToSign)}`);
    writeErr(stderr, `[debug] Authorization=${authorization}`);
    writeErr(stderr, `[debug] body=${JSON.stringify(prepared.body)}`);
  }

  const response = await requestHttp({
    method: prepared.method,
    url,
    body: prepared.method === "GET" ? undefined : prepared.body,
    headers,
    timeoutMs,
    fetchImpl: deps.fetchImpl,
  });

  if (response.status < 200 || response.status >= 300) {
    throw new CliError(
      "http",
      `HTTP ${response.status}`,
      EXIT_NETWORK,
      { status: response.status, body: response.text.slice(0, 4000) },
    );
  }

  const text = response.text;
  const trimmed = text.trim();

  if (trimmed === "") {
    throw new CliError("http", "服务端返回了空响应", EXIT_NETWORK);
  }

  let parsed: unknown;
  let parseOk = false;
  try {
    parsed = JSON.parse(trimmed);
    parseOk = true;
  } catch {
    parseOk = false;
  }

  if (raw) {
    writeOut(stdout, text);
  } else if (parseOk) {
    writeOut(stdout, formatJsonText(trimmed, compact ? "compact" : "pretty"));
  } else {
    writeOut(stdout, text);
  }

  if (parseOk) {
    const { failed, summary } = classifyBusinessResult(parsed);
    if (failed) {
      writeErr(stderr, `接口返回失败：${summary || "success=false"}`);
      return EXIT_API;
    }
  }

  return 0;
}

/** 调用已注册接口。 */
export async function runInvoke(
  apiPath: string,
  flags: Flags,
  deps: InvokeDeps = {},
): Promise<number> {
  const stderr = deps.stderr ?? process.stderr;
  const cwd = deps.cwd ?? process.cwd();
  const prepared = prepareRegistered(apiPath, flags, cwd, stderr);
  return execute(prepared, flags, deps);
}

/** 通用兜底调用，用于未注册接口。 */
export async function runCall(
  apiPath: string,
  flags: Flags,
  deps: InvokeDeps = {},
): Promise<number> {
  const cwd = deps.cwd ?? process.cwd();
  const prepared = prepareGeneric(apiPath, flags, cwd);
  return execute(prepared, flags, deps);
}

export type { FetchLike };
