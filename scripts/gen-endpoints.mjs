#!/usr/bin/env node
/**
 * 从 api-docs/ 下的 Markdown 接口文档生成 src/endpoints.generated.ts。
 *
 * 用法：
 *   npm run gen:endpoints
 *   node scripts/gen-endpoints.mjs --check   # 只校验生成结果是否最新
 *
 * 文档由 PDF 转换而来，表格存在断行、合并行、响应表混入等问题。
 * 本脚本只做尽力解析：解析不确定的字段保留原始信息并标记 low confidence，
 * 重点接口由 src/endpoints.overrides.ts 人工校正。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "api-docs");
const OUT_FILE = path.join(ROOT, "src", "endpoints.generated.ts");

const CATEGORY_ORDER = [
  "PCB业务",
  "SMT业务",
  "3DP业务",
  "元器件&MRO",
  "嘉立创云ERP",
  "CNC业务",
];

const SKIP_FIELD_NAMES = new Set(["Authorization", "Content-Type", "Accept"]);
const TYPE_TOKENS = [
  "boolean",
  "string",
  "integer",
  "int",
  "long",
  "number",
  "bigdecimal",
  "double",
  "float",
  "object",
  "list",
  "array",
  "date",
];

const warnings = [];

function stripTags(value) {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?(?:mark|u|b|i|strong|em|span|p|div)[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "");
}

function cleanText(value) {
  return stripTags(value)
    .replace(/ /g, " ")
    .replace(/[*`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanKey(value) {
  return cleanText(value).replace(/\s+/g, "");
}

function cleanName(value) {
  const hadArtifact = /<br\s*\/?>\s*i\s*$/i.test(value);
  let name = stripTags(value)
    .replace(/\s+/g, "")
    .replace(/[*`]/g, "")
    .trim();
  if (hadArtifact) name = name.replace(/i$/, "");
  return name;
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { meta: {}, rest: text };
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[m[1]] = value;
  }
  return { meta, rest: text.slice(match[0].length) };
}

function detectMethod(text) {
  const patterns = [
    /请求方式\s*\**\s*[:：]\s*\**\s*(GET|POST|PUT|DELETE|PATCH)/i,
    /\|\s*\**\s*请求方式\s*\**\s*\|\s*(GET|POST|PUT|DELETE|PATCH)\s*\|/i,
    /请求方式[^A-Za-z\n]{0,15}(GET|POST|PUT|DELETE|PATCH)/i,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1].toUpperCase();
  }
  return null;
}

function classifySection(title, previous) {
  const lower = title.toLowerCase();
  if (lower.includes("header")) return "header";
  if (
    lower.includes("响应") ||
    lower.includes("错误码") ||
    lower.includes("返回参数") ||
    lower.includes("response")
  ) {
    return "response";
  }
  if (
    lower.includes("请求参数") ||
    lower.includes("请求体") ||
    lower.includes("body") ||
    lower.includes("formdata") ||
    lower.includes("form data") ||
    lower.includes("query参数") ||
    lower === "query"
  ) {
    return "request";
  }
  return previous;
}

function isSeparatorRow(line) {
  const value = line.trim();
  return /^[\s:|-]+$/.test(value) && value.includes("-") && value.includes("|");
}

function looksLikeHeader(cells) {
  const head = cells.slice(0, 5).map((cell) => cleanKey(cell));
  const joined = head.join("");
  return (joined.includes("名称") || joined.includes("参数名")) &&
    (joined.includes("类型") || joined.includes("数据类型"));
}

function isTableStart(lines, index) {
  const line = lines[index].trim();
  if (!line.startsWith("|")) return false;
  const next = (lines[index + 1] || "").trim();
  if (!next.startsWith("|")) return false;
  if (isSeparatorRow(next)) return true;
  // PDF 转换偶尔丢失分隔线，用“下一行是数据行 + 本行像表头”兜底。
  return looksLikeHeader(splitRow(line));
}

function splitRow(line) {
  let value = line.trim();
  if (value.startsWith("|")) value = value.slice(1);
  if (value.endsWith("|")) value = value.slice(0, -1);
  return value.split("|").map((cell) => cleanText(cell));
}

function readTable(lines, start) {
  const rows = [];
  let index = start;
  while (index < lines.length && lines[index].trim().startsWith("|")) {
    rows.push(lines[index]);
    index += 1;
  }
  return { rows, end: index };
}

function findLabel(lines, tableStart) {
  for (let i = tableStart - 1; i >= 0 && i >= tableStart - 8; i -= 1) {
    const line = lines[i].trim();
    if (!line) continue;
    if (/^#{1,6}\s+/.test(line)) {
      return cleanText(line.replace(/^#+\s*/, ""));
    }
    if (line.startsWith("|")) {
      const cells = splitRow(line).filter((cell) => cell !== "");
      if (cells.length === 1 && /参数|元素|信息|实体类/.test(cells[0])) {
        return cells[0];
      }
      return "";
    }
    if (/参数|元素|信息|实体类|（|\(/.test(line) && line.length < 90) {
      return cleanText(line);
    }
    return "";
  }
  return "";
}

function mapColumns(header) {
  const cells = header.map((cell) => cleanKey(cell));
  const find = (predicate) => cells.findIndex(predicate);
  let name = find((c) => c === "参数名称" || c === "参数名" || c === "名称");
  if (name < 0) name = find((c) => c.includes("参数名") || c.includes("名称"));
  let type = find((c) => c === "数据类型");
  if (type < 0) type = find((c) => c === "类型");
  if (type < 0) type = find((c) => c.includes("数据类型") || c.includes("类型"));
  let required = find((c) => c.includes("必须") || c.includes("必填"));
  let desc = find((c) => c === "参数说明" || c === "说明" || c === "描述");
  if (desc < 0) desc = find((c) => c.includes("说明") || c.includes("描述"));
  const requestType = find((c) => c.includes("请求类型"));
  const schema = find((c) => c.includes("schema"));
  return { name, type, required, desc, requestType, schema };
}

function baseType(raw) {
  const text = cleanText(raw);
  const lower = text.toLowerCase();
  const head = (lower.match(/^([a-z]+)/) || [])[1] || lower;

  if (head === "file" || head === "multipartfile") return "file";
  if (head === "boolean" || head === "bool") return "boolean";
  if (["int", "integer", "int32", "int64", "long", "short", "byte"].includes(head)) {
    return "integer";
  }
  if (["number", "double", "float", "bigdecimal", "decimal"].includes(head)) {
    return "number";
  }
  if (["object", "map", "jsonobject", "json", "pojo"].includes(head)) return "object";
  if (
    ["string", "str", "date", "datetime", "timestamp", "char", "varchar", "text", ""].includes(
      head,
    )
  ) {
    return head === "" ? "unknown" : "string";
  }
  if (/^[A-Z]/.test(text)) return "object";
  if (head.includes("array") || head.startsWith("list")) return "array";
  return "unknown";
}

function mapType(raw, schemaRaw = "") {
  const text = cleanText(raw).replace(/\s+/g, "");
  const schema = cleanText(schemaRaw).replace(/\s+/g, "");
  if (!text) {
    if (!schema) return { type: "unknown" };
    return { type: baseType(schema) };
  }
  const generic = text.match(/^(?:List|Set|Array|list|set|array)<(.+)>$/);
  if (generic) return { type: "array", items: baseType(generic[1]) };
  if (/^(list|set|array)$/i.test(text)) {
    const items = schema ? baseType(schema) : "unknown";
    return { type: "array", items };
  }
  const mapped = baseType(text);
  if (mapped === "unknown" && schema) {
    return { type: baseType(schema) };
  }
  return { type: mapped };
}

function isTypeCell(raw) {
  const text = cleanText(raw).replace(/\s+/g, "");
  if (!text) return false;
  if (/^(List|Set|Array)<.+>$/i.test(text)) return true;
  const head = text.replace(/\(.*\)$/, "");
  return /^(string|str|integer|int|int32|int64|long|short|byte|number|double|float|bigdecimal|decimal|boolean|bool|object|map|jsonobject|json|pojo|date|datetime|timestamp|char|varchar|text|file|multipartfile|list|set|array)$/i.test(
    head,
  );
}

function isMergedType(raw) {
  const lower = cleanKey(raw).toLowerCase();
  for (const first of TYPE_TOKENS) {
    for (const second of TYPE_TOKENS) {
      if (lower === first + second) return true;
    }
  }
  return false;
}

function isRequired(raw) {
  const text = cleanText(raw).replace(/\s+/g, "").toLowerCase();
  if (text.includes("非必须") || text.includes("非必填")) return false;
  return (
    text.includes("必须") ||
    text.includes("必填") ||
    text === "是" ||
    text === "true" ||
    text === "y" ||
    text === "1"
  );
}

function isTopLabel(label) {
  const lower = cleanText(label).toLowerCase();
  if (!lower) return true;
  return (
    lower.includes("请求参数") ||
    lower.includes("body") ||
    lower.includes("formdata") ||
    lower.includes("form data") ||
    lower.includes("请求体") ||
    lower === "query" ||
    lower.includes("query参数")
  );
}

function resolveParent(label, fields) {
  const text = cleanText(label);
  if (!text) return undefined;
  const lower = text.toLowerCase();
  const candidates = fields.filter((field) => field.type === "object" || field.type === "array");
  if (candidates.length === 0) return undefined;

  const aliases = [
    [/序列码|二维码/, /qrcode|二维码|serial/i],
    [/工艺信息/, /technical|工艺/i],
    [/钢网/, /steelmesh|钢网/i],
    [/收货/, /receive|consignee/i],
    [/联系人/, /linkman|联系人/i],
  ];
  for (const [labelPattern, fieldPattern] of aliases) {
    if (!labelPattern.test(text)) continue;
    const hit = candidates.find(
      (field) => fieldPattern.test(field.name) || fieldPattern.test(field.description || ""),
    );
    if (hit) return hit;
  }

  const element = text.match(/([A-Za-z][A-Za-z0-9_]*)\s*(?:List)?\s*元素/i);
  if (element) {
    const token = element[1].toLowerCase();
    const withoutList = token.replace(/list$/, "");
    const hit = candidates.find(
      (field) =>
        field.name.toLowerCase() === token ||
        field.name.toLowerCase() === withoutList ||
        (field.rawType || "").toLowerCase().includes(token),
    );
    if (hit) return hit;
  }

  const tokens = text.match(/[A-Z][A-Za-z0-9_]+/g) || [];
  for (const token of tokens) {
    const tokenLower = token.toLowerCase();
    const hit = candidates.find(
      (field) =>
        (field.rawType || "").toLowerCase() === tokenLower ||
        (field.rawType || "").toLowerCase().includes(tokenLower) ||
        field.name.toLowerCase() === tokenLower,
    );
    if (hit) return hit;
  }

  for (const field of candidates) {
    if (field.name.length >= 3 && lower.includes(field.name.toLowerCase())) return field;
  }

  const base = lower
    .replace(/参数|信息|实体类|对象|元素|（.*?）|\(.*?\)/g, "")
    .replace(/\s+/g, "");
  if (base.length >= 2) {
    for (const field of candidates) {
      const desc = (field.description || "").toLowerCase().replace(/\s+/g, "");
      if (!desc) continue;
      if (desc === base || desc.includes(base) || base.includes(desc)) return field;
    }
  }

  const objects = candidates.filter((field) => field.type === "object");
  if (objects.length === 1) return objects[0];
  return undefined;
}

function parseDocument(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, rest: rawRest } = parseFrontmatter(raw);
  if (!meta.api_uri) {
    warnings.push(`缺少 api_uri：${filePath}`);
    return null;
  }
  // PDF 转换会产生兼容汉字（如 ⽅）、全角冒号等，NFKC 统一后再解析。
  const rest = rawRest
    .normalize("NFKC")
    .replace(/[​‌‍﻿]/g, "");

  const lines = rest.split(/\r?\n/);
  const tables = [];
  const headings = [];
  let section = "";
  let kind = "pre";
  let lastTable = null;

  for (let i = 0; i < lines.length; i += 1) {
    const trimmed = lines[i].trim();
    const heading = trimmed.match(/^#{1,6}\s+(.*)$/);
    if (heading) {
      section = cleanText(heading[1]);
      kind = classifySection(section, kind);
      headings.push(`${kind}: ${section}`);
      continue;
    }

    // Format B 常用 `**请求参数:**` 这类非 Markdown 标题作为区块标记。
    const pseudo = trimmed.replace(/^[*`\s]+|[*`\s]+$/g, "");
    if (!trimmed.startsWith("|") && pseudo.length > 0 && pseudo.length < 40) {
      if (/^(请求参数|请求体|body\s*参数|form\s*data|query\s*参数)[:：]?$/i.test(pseudo)) {
        section = cleanText(pseudo);
        kind = "request";
        headings.push(`request(pseudo): ${section}`);
        continue;
      }
      if (/^(响应参数|响应状态|响应示例|返回参数|错误码)[:：]?$/i.test(pseudo)) {
        section = cleanText(pseudo);
        kind = "response";
        headings.push(`response(pseudo): ${section}`);
        continue;
      }
    }

    if (trimmed.startsWith("|")) {
      if (isTableStart(lines, i)) {
        const { rows, end } = readTable(lines, i);
        if (kind === "request" && rows.length >= 2) {
          const label = findLabel(lines, i) || section;
          const dataStart = rows.length > 1 && isSeparatorRow(rows[1]) ? 2 : 1;
          const table = { label, section, rows, dataStart };
          tables.push(table);
          lastTable = table;
        }
        i = end - 1;
        continue;
      }
      // 分页导致同一张表在空行后继续，且没有重复表头。
      if (kind === "request" && lastTable && lastTable.section === section) {
        const cells = splitRow(trimmed);
        if (cells.length >= 3 && cells.filter((cell) => cell !== "").length >= 2) {
          lastTable.rows.push(trimmed);
        }
      }
      continue;
    }
  }

  const isMultipart =
    /multipart\/form-data/i.test(rest) ||
    tables.some((table) => /form data/i.test(table.section));

  const debugFilter = process.env.DEBUG_GEN || "";
  if (debugFilter && meta.api_uri.includes(debugFilter)) {
    console.log(`\n[debug] ${meta.api_uri} — ${tables.length} tables`);
    console.log("  headings:", JSON.stringify(headings));
    for (const table of tables) {
      const header = splitRow(table.rows[0]);
      console.log(`  TABLE label=${JSON.stringify(table.label)} section=${JSON.stringify(table.section)} rows=${table.rows.length}`);
      console.log(`    header=${JSON.stringify(header)}`);
      for (const row of table.rows.slice(table.dataStart || 2)) {
        console.log(`    ROW ${JSON.stringify(splitRow(row))}`);
      }
    }
  }

  const fields = [];
  const seenPaths = new Set();
  let previousSection = "";
  let sectionParent = "";

  for (const table of tables) {
    const header = splitRow(table.rows[0]);
    const columns = mapColumns(header);
    if (columns.name < 0) continue;

    if (table.section !== previousSection) {
      previousSection = table.section;
      sectionParent = "";
    }

    const label = table.label || table.section;
    let parentPath = sectionParent;
    if (isTopLabel(label)) {
      parentPath = "";
    } else {
      const parent = resolveParent(label, fields);
      parentPath = parent ? parent.path : "";
    }
    sectionParent = parentPath;

    for (const row of table.rows.slice(table.dataStart || 2)) {
      const cells = splitRow(row);

      let name = cleanName(cells[columns.name] || "");
      let nameIndex = columns.name;
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
        // 部分 ERP 表格整体错位一列，按值驱动寻找真正的字段名。
        const found = cells.findIndex((cell, index) => {
          if (index === columns.type || index === columns.required) return false;
          const candidate = cleanName(cell);
          return (
            /^[A-Za-z_][A-Za-z0-9_]*$/.test(candidate) &&
            candidate.length >= 2 &&
            !/^(body|query|formdata|header|true|false)$/i.test(candidate)
          );
        });
        if (found >= 0) {
          name = cleanName(cells[found]);
          nameIndex = found;
        }
      }
      if (!name) continue;
      if (SKIP_FIELD_NAMES.has(name)) continue;
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
        if (/^[0-9]+$/.test(name)) continue;
        warnings.push(`${meta.api_uri}: 跳过非法字段名 ${JSON.stringify(name)}`);
        continue;
      }

      let typeRaw = columns.type >= 0 ? cells[columns.type] || "" : "";
      if (!isTypeCell(typeRaw)) {
        const foundType = cells.find(
          (cell, index) =>
            index !== nameIndex &&
            index !== columns.required &&
            isTypeCell(cell),
        );
        if (foundType) typeRaw = foundType;
      }

      const requestType =
        columns.requestType >= 0 ? cleanKey(cells[columns.requestType] || "").toLowerCase() : "";
      if (requestType === "body" && /(ReqVO|Request|DTO)$/i.test(name)) {
        continue; // schema 包装行，不是真实字段
      }

      if (isMergedType(typeRaw)) {
        warnings.push(
          `${meta.api_uri}: 跳过疑似合并行 ${name} / ${cleanText(typeRaw)}`,
        );
        continue;
      }

      const mapped = mapType(
        typeRaw,
        columns.schema >= 0 ? cells[columns.schema] || "" : "",
      );
      const fullPath = parentPath ? `${parentPath}.${name}` : name;
      if (seenPaths.has(fullPath)) {
        warnings.push(`${meta.api_uri}: 重复字段 ${fullPath}（保留第一次出现）`);
        continue;
      }
      seenPaths.add(fullPath);

      let description = columns.desc >= 0 ? cells[columns.desc] || "" : "";
      if (!description) {
        description = cells
          .filter((cell, index) => index !== nameIndex && cell !== "")
          .filter((cell) => !isTypeCell(cell))
          .join(" ");
      }

      let requiredRaw = columns.required >= 0 ? cells[columns.required] || "" : "";
      if (!/必须|必填|是|否|true|false|y|n/i.test(cleanText(requiredRaw))) {
        const foundRequired = cells.find(
          (cell, index) =>
            index !== nameIndex &&
            !isTypeCell(cell) &&
            /^(非?必须|非?必填|是|否|true|false|y|n)$/i.test(cleanText(cell).replace(/\s+/g, "")),
        );
        if (foundRequired) requiredRaw = foundRequired;
      }

      // 跨行拆断产生的残片，例如 `|rance||||1 :普锣...`。
      if (
        mapped.type === "unknown" &&
        !isRequired(requiredRaw) &&
        /^[a-z]{2,8}$/.test(name) &&
        /^[0-9]/.test(description)
      ) {
        warnings.push(`${meta.api_uri}: 跳过疑似跨行残片 ${name}`);
        continue;
      }

      fields.push({
        path: fullPath,
        type: mapped.type,
        ...(mapped.items ? { items: mapped.items } : {}),
        required: isRequired(requiredRaw),
        description,
        confidence: mapped.type === "unknown" ? "low" : "high",
        // 运行时解析用，输出前删除
        rawType: cleanText(typeRaw),
        name,
      });
    }
  }

  const cleanedFields = fields.map((field) => {
    const { rawType, name, ...restField } = field;
    return restField;
  });

  const requiredFields = cleanedFields.filter((field) => field.required);
  const exampleParts = [`jlc-openapi-cli ${meta.api_uri}`];
  for (const field of requiredFields.slice(0, 6)) {
    const flag = field.type === "file" ? path.basename(field.path) : field.path;
    exampleParts.push(`--${flag} <${field.type === "file" ? "path" : field.type}>`);
  }
  if (isMultipart && !cleanedFields.some((field) => field.type === "file")) {
    exampleParts.push("--file <path>");
  }

  return {
    path: meta.api_uri,
    method: detectMethod(rest) === "GET" ? "GET" : "POST",
    title: meta.title || meta.api_uri,
    category: meta.category || "未分类",
    description: meta.description || meta.title || "",
    contentType: isMultipart ? "multipart" : "json",
    ...(isMultipart
      ? {
          fileFields: cleanedFields
            .filter((field) => field.type === "file")
            .map((field) => field.path),
        }
      : {}),
    fields: cleanedFields,
    strict: false,
    source: path.relative(ROOT, filePath).split(path.sep).join("/"),
    example: exampleParts.join(" "),
  };
}

function walk(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".md")) result.push(full);
  }
  return result;
}

function categoryRank(category) {
  const index = CATEGORY_ORDER.indexOf(category);
  return index < 0 ? CATEGORY_ORDER.length : index;
}

function main() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`找不到文档目录：${DOCS_DIR}`);
    process.exit(1);
  }

  const files = walk(DOCS_DIR).sort();
  const endpoints = [];
  for (const file of files) {
    try {
      const endpoint = parseDocument(file);
      if (endpoint) endpoints.push(endpoint);
    } catch (error) {
      warnings.push(`${file}: 解析失败 ${error.message}`);
    }
  }

  endpoints.sort((a, b) => {
    const rank = categoryRank(a.category) - categoryRank(b.category);
    if (rank !== 0) return rank;
    return a.path.localeCompare(b.path);
  });

  const output = [
    "/**",
    " * 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手工修改。",
    " * 重新生成：npm run gen:endpoints",
    " */",
    'import type { EndpointDef } from "./types";',
    "",
    `export const GENERATED_ENDPOINTS: EndpointDef[] = ${JSON.stringify(endpoints, null, 2)};`,
    "",
  ].join("\n");

  if (process.argv.includes("--check")) {
    const current = fs.existsSync(OUT_FILE) ? fs.readFileSync(OUT_FILE, "utf8") : "";
    if (current !== output) {
      console.error("endpoints.generated.ts 不是最新，请运行 npm run gen:endpoints");
      process.exit(1);
    }
    console.log("endpoints.generated.ts 已是最新");
    return;
  }

  fs.writeFileSync(OUT_FILE, output, "utf8");

  const totalFields = endpoints.reduce((sum, endpoint) => sum + endpoint.fields.length, 0);
  const zero = endpoints.filter((endpoint) => endpoint.fields.length === 0);
  const lowConfidence = endpoints.reduce(
    (sum, endpoint) => sum + endpoint.fields.filter((field) => field.confidence === "low").length,
    0,
  );
  const multipart = endpoints.filter((endpoint) => endpoint.contentType === "multipart");
  const methods = endpoints.reduce((acc, endpoint) => {
    acc[endpoint.method] = (acc[endpoint.method] || 0) + 1;
    return acc;
  }, {});

  console.log(`生成 ${endpoints.length} 个接口，${totalFields} 个字段`);
  console.log("方法分布：", methods);
  console.log(`multipart：${multipart.length} 个`);
  for (const endpoint of multipart) {
    console.log(`  - ${endpoint.path}  fileFields=${JSON.stringify(endpoint.fileFields || [])}`);
  }
  console.log(`零字段接口：${zero.length} 个`);
  for (const endpoint of zero) console.log(`  - ${endpoint.path}`);
  console.log(`低置信度字段：${lowConfidence} 个`);
  console.log(`警告：${warnings.length} 条`);
  const uniqueWarnings = [...new Set(warnings)];
  for (const warning of uniqueWarnings.slice(0, 80)) console.log(`  ! ${warning}`);
  if (uniqueWarnings.length > 80) {
    console.log(`  ... 其余 ${uniqueWarnings.length - 80} 条省略`);
  }
  console.log(`输出：${path.relative(ROOT, OUT_FILE)}`);
}

main();
