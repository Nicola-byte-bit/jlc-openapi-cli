import { getBooleanFlag, getStringFlag, type Flags } from "../args";
import {
  allEndpoints,
  findSimilarPaths,
  matchEndpointPath,
  type EndpointDef,
} from "../endpoints";
import { formatJson, usageError, writeOut, type WritableLike } from "../output";
import { getVersion } from "../version";

export interface ListDeps {
  stdout?: WritableLike;
}

const CATEGORY_ORDER = [
  "PCB业务",
  "SMT业务",
  "3DP业务",
  "元器件&MRO",
  "嘉立创云ERP",
  "CNC业务",
];

function categoryRank(category: string): number {
  const index = CATEGORY_ORDER.indexOf(category);
  return index < 0 ? CATEGORY_ORDER.length : index;
}

function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length - 1)}…`;
}

function endpointTags(endpoint: EndpointDef): string {
  const tags: string[] = [];
  if (endpoint.contentType === "multipart") tags.push("multipart");
  if (endpoint.strict) tags.push("strict");
  if (endpoint.legacy) tags.push("legacy");
  return tags.length > 0 ? `  [${tags.join(", ")}]` : "";
}

function renderSummaryLine(endpoint: EndpointDef): string {
  return `${endpoint.method.padEnd(4)} ${endpoint.path}  ${endpoint.title}${endpointTags(endpoint)}`;
}

function renderDetail(endpoint: EndpointDef, verbose: boolean): string {
  const descriptionLimit = verbose ? 1000 : 120;
  const lines: string[] = [];
  lines.push(`${endpoint.method} ${endpoint.path} — ${endpoint.title}`);
  lines.push(`  分类：${endpoint.category}`);
  if (endpoint.description) lines.push(`  说明：${truncate(endpoint.description, 300)}`);
  if (endpoint.source) lines.push(`  文档：${endpoint.source}`);
  if (endpoint.contentType === "multipart") {
    lines.push(`  上传字段：${(endpoint.fileFields ?? []).join(", ") || "未识别"}`);
  }
  lines.push(`  参数（${endpoint.fields.length}）：`);
  for (const field of endpoint.fields) {
    const depth = field.path.split(".").length - 1;
    const indent = "  ".repeat(depth + 2);
    const type = field.items ? `${field.type}<${field.items}>` : field.type;
    const required = field.required ? "必填" : "可选";
    const description = field.description
      ? `  ${truncate(field.description, descriptionLimit)}`
      : "";
    lines.push(`${indent}--${field.path} <${type}> ${required}${description}`);
  }
  if (endpoint.fields.length === 0) {
    lines.push("    （无请求参数）");
  }
  if (endpoint.example) {
    lines.push("  示例：");
    lines.push(`    ${endpoint.example}`);
  }
  return lines.join("\n");
}

function endpointJson(endpoint: EndpointDef, includeFields: boolean): Record<string, unknown> {
  const base: Record<string, unknown> = {
    path: endpoint.path,
    method: endpoint.method,
    category: endpoint.category,
    title: endpoint.title,
    description: endpoint.description,
    contentType: endpoint.contentType,
    fieldCount: endpoint.fields.length,
    strict: endpoint.strict,
    ...(endpoint.legacy ? { legacy: true } : {}),
    ...(endpoint.fileFields ? { fileFields: endpoint.fileFields } : {}),
    ...(endpoint.source ? { source: endpoint.source } : {}),
    ...(endpoint.example ? { example: endpoint.example } : {}),
  };
  if (includeFields) {
    base.fields = endpoint.fields;
  }
  return base;
}

export function runList(flags: Flags, target?: string, deps: ListDeps = {}): number {
  const stdout = deps.stdout ?? process.stdout;
  const compact = getBooleanFlag(flags, "compact");
  const json = getBooleanFlag(flags, "json");
  const summaryOnly = getBooleanFlag(flags, "summary");
  const verbose = getBooleanFlag(flags, "detail");

  if (target) {
    const endpoint = matchEndpointPath(target);
    if (!endpoint) {
      const similar = findSimilarPaths(target);
      usageError(
        `未找到接口：${target}` +
          (similar.length > 0 ? `。相近接口：${similar.join(", ")}` : ""),
      );
    }
    if (json) {
      writeOut(stdout, formatJson(endpointJson(endpoint, true), compact));
    } else {
      writeOut(stdout, renderDetail(endpoint, verbose));
    }
    return 0;
  }

  let endpoints = allEndpoints();
  const total = endpoints.length;

  const category = getStringFlag(flags, "category");
  if (category) {
    const needle = category.toLowerCase();
    endpoints = endpoints.filter(
      (endpoint) =>
        endpoint.category.toLowerCase().includes(needle) ||
        endpoint.path.toLowerCase().startsWith(`/${needle}`),
    );
  }

  const search = getStringFlag(flags, "search");
  if (search) {
    const terms = search.toLowerCase().split(/\s+/).filter(Boolean);
    endpoints = endpoints.filter((endpoint) => {
      const haystack =
        `${endpoint.path} ${endpoint.title} ${endpoint.description} ${endpoint.category}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }

  const limitRaw = getStringFlag(flags, "limit");
  if (limitRaw !== undefined) {
    const limit = Number(limitRaw);
    if (!Number.isInteger(limit) || limit <= 0) {
      usageError(`参数 --limit 需要正整数，实际为 "${limitRaw}"`);
    }
    endpoints = endpoints.slice(0, limit);
  }

  endpoints = endpoints.slice().sort((a, b) => {
    const rank = categoryRank(a.category) - categoryRank(b.category);
    if (rank !== 0) return rank;
    return a.path < b.path ? -1 : a.path > b.path ? 1 : 0;
  });

  if (json) {
    const payload = {
      version: getVersion(),
      total,
      filtered: endpoints.length,
      endpoints: endpoints.map((endpoint) => endpointJson(endpoint, verbose && !summaryOnly)),
    };
    writeOut(stdout, formatJson(payload, compact));
    return 0;
  }

  if (endpoints.length === 0) {
    writeOut(stdout, "未找到匹配接口。可去掉 --category/--search 后重试。");
    return 0;
  }

  const groups = new Map<string, EndpointDef[]>();
  for (const endpoint of endpoints) {
    const list = groups.get(endpoint.category) ?? [];
    list.push(endpoint);
    groups.set(endpoint.category, list);
  }

  const blocks: string[] = [
    `jlc-openapi-cli ${getVersion()} — 接口 ${endpoints.length}/${total} 个`,
  ];
  for (const [groupName, list] of groups) {
    blocks.push("", `${groupName} (${list.length})`);
    for (const endpoint of list) blocks.push(`  ${renderSummaryLine(endpoint)}`);
  }
  blocks.push(
    "",
    "查看参数：jlc-openapi-cli list <接口路径>",
    "搜索接口：jlc-openapi-cli list --search <关键词>",
    "机器可读：jlc-openapi-cli list --json --summary --compact",
  );
  writeOut(stdout, blocks.join("\n"));
  return 0;
}
