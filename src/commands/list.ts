import { getBooleanFlag, type Flags } from "../args";
import { ENDPOINTS, getEndpoint, type EndpointDef } from "../endpoints";
import { formatJson, writeOut, type WritableLike } from "../output";
import { getVersion } from "../version";

export interface ListDeps {
  stdout?: WritableLike;
}

/** 兼容 Git Bash / MSYS 把 `/pcb/...` 改写成本地路径的情况。 */
export function matchEndpointPath(input: string): EndpointDef | undefined {
  const direct = getEndpoint(input);
  if (direct) return direct;

  const normalized = input.startsWith("/") ? input : `/${input}`;
  const normalizedMatch = getEndpoint(normalized);
  if (normalizedMatch) return normalizedMatch;

  for (const endpoint of Object.values(ENDPOINTS)) {
    if (input.endsWith(endpoint.path)) return endpoint;
  }
  return undefined;
}

function renderHuman(endpoint: EndpointDef): string {
  const lines: string[] = [];
  lines.push(`${endpoint.method} ${endpoint.path}`);
  lines.push(`  ${endpoint.description}`);
  lines.push("  参数：");
  for (const field of endpoint.fields) {
    const baseType = field.enum ? field.enum.join("|") : field.type;
    const range =
      field.min !== undefined || field.max !== undefined
        ? ` ${field.min ?? "..."}~${field.max ?? "..."}`
        : "";
    const required = field.required ? "必填" : "可选";
    lines.push(`    --${field.name} <${baseType}${range}>  ${required}，${field.description}`);
  }
  lines.push("  示例：");
  lines.push(`    ${endpoint.example}`);
  return lines.join("\n");
}

export function runList(flags: Flags, deps: ListDeps = {}): number {
  const stdout = deps.stdout ?? process.stdout;
  const endpoints = Object.values(ENDPOINTS);

  if (getBooleanFlag(flags, "json")) {
    const payload = {
      version: getVersion(),
      commands: endpoints.map((endpoint) => ({
        path: endpoint.path,
        method: endpoint.method,
        description: endpoint.description,
        example: endpoint.example,
        params: endpoint.fields.map((field) => ({
          name: field.name,
          flag: `--${field.name}`,
          type: field.type,
          required: field.required,
          description: field.description,
          ...(field.enum ? { enum: field.enum } : {}),
          ...(field.min !== undefined ? { min: field.min } : {}),
          ...(field.max !== undefined ? { max: field.max } : {}),
          ...(field.format ? { format: field.format } : {}),
        })),
      })),
    };
    writeOut(stdout, formatJson(payload, getBooleanFlag(flags, "compact")));
    return 0;
  }

  const blocks: string[] = [
    `jlc-openapi-cli ${getVersion()} — 可用接口 ${endpoints.length} 个：`,
    "",
    ...endpoints.map(renderHuman),
    "",
    "其他命令：",
    "  jlc-openapi-cli init                 配置 appId / ak / sk / endpoint",
    "  jlc-openapi-cli call <path> --json '<body>'   调用未注册接口（通用兜底）",
  ];
  writeOut(stdout, blocks.join("\n"));
  return 0;
}
