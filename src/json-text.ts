/**
 * 无损 JSON 格式化。
 *
 * 不能 JSON.parse 后再 JSON.stringify：返回值里可能有 Java Long
 * （如 customerOrderId），超出 JS 安全整数范围会静默丢失精度。
 * 这里只在字符串外增删空白，字符串字面量和数字字面量原样保留。
 */

type TokenType = "punct" | "string" | "number" | "literal";

interface Token {
  type: TokenType;
  value: string;
}

const PUNCT = new Set(["{", "}", "[", "]", ",", ":"]);

function isWhitespace(ch: string): boolean {
  return ch === " " || ch === "\t" || ch === "\n" || ch === "\r";
}

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < text.length) {
    const ch = text[i] as string;

    if (isWhitespace(ch)) {
      i += 1;
      continue;
    }
    if (PUNCT.has(ch)) {
      tokens.push({ type: "punct", value: ch });
      i += 1;
      continue;
    }
    if (ch === '"') {
      let j = i + 1;
      let escaped = false;
      for (; j < text.length; j += 1) {
        const current = text[j] as string;
        if (escaped) {
          escaped = false;
        } else if (current === "\\") {
          escaped = true;
        } else if (current === '"') {
          break;
        }
      }
      tokens.push({ type: "string", value: text.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    let j = i;
    while (j < text.length) {
      const current = text[j] as string;
      if (isWhitespace(current) || PUNCT.has(current) || current === '"') break;
      j += 1;
    }
    const raw = text.slice(i, j);
    const type: TokenType = raw === "true" || raw === "false" || raw === "null" ? "literal" : "number";
    tokens.push({ type, value: raw });
    i = j;
  }

  return tokens;
}

function pretty(tokens: readonly Token[], indent: number): string {
  let out = "";
  let depth = 0;

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index] as Token;

    if (token.value === "{" || token.value === "[") {
      const close = token.value === "{" ? "}" : "]";
      const next = tokens[index + 1];
      if (next && next.value === close) {
        out += token.value + close;
        index += 1;
        continue;
      }
      out += token.value + "\n" + " ".repeat((depth + 1) * indent);
      depth += 1;
      continue;
    }

    if (token.value === "}" || token.value === "]") {
      depth -= 1;
      out += "\n" + " ".repeat(Math.max(depth, 0) * indent) + token.value;
      continue;
    }

    if (token.value === ",") {
      out += ",\n" + " ".repeat(Math.max(depth, 0) * indent);
      continue;
    }

    if (token.value === ":") {
      out += ": ";
      continue;
    }

    out += token.value;
  }

  return out;
}

/**
 * 校验并格式化 JSON 文本。
 * @throws SyntaxError 当文本不是合法 JSON。
 */
export function formatJsonText(text: string, mode: "pretty" | "compact", indent = 2): string {
  const normalized = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  JSON.parse(normalized);
  const tokens = tokenize(normalized);
  return mode === "compact" ? tokens.map((token) => token.value).join("") : pretty(tokens, indent);
}
