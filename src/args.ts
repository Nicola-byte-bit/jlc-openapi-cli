export type FlagValue = string | boolean;
export type FlagInput = FlagValue | FlagValue[];
export type Flags = Record<string, FlagInput>;

export interface ParsedArgs {
  /** 第一个位置参数，可能是子命令、接口路径或空。 */
  command: string | undefined;
  positionals: string[];
  flags: Flags;
}

function camelize(name: string): string {
  return name.replace(/-([a-zA-Z0-9])/g, (_match, ch: string) => ch.toUpperCase());
}

function assign(flags: Flags, key: string, value: FlagValue): void {
  const existing = flags[key];
  if (existing === undefined) {
    flags[key] = value;
  } else if (Array.isArray(existing)) {
    existing.push(value);
  } else {
    flags[key] = [existing, value];
  }
}

/**
 * 手写参数解析。
 *
 * 支持：
 * - `--key value`
 * - `--key=value`
 * - 裸 `--flag`（值为 true）
 * - 重复 flag（聚合为数组，用于数组参数）
 * - `-h` / `-V`
 * - `--` 之后全部视为位置参数
 *
 * 参数名中的 kebab-case 会统一转换成 camelCase（`--json-file` → `jsonFile`）。
 */
export function parseArgs(argv: readonly string[]): ParsedArgs {
  const positionals: string[] = [];
  const flags: Flags = {};
  let endOfFlags = false;

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i] as string;

    if (endOfFlags) {
      positionals.push(token);
      continue;
    }
    if (token === "--") {
      endOfFlags = true;
      continue;
    }

    if (token.startsWith("--")) {
      const eq = token.indexOf("=");
      if (eq > 2) {
        assign(flags, camelize(token.slice(2, eq)), token.slice(eq + 1));
        continue;
      }
      const name = camelize(token.slice(2));
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        assign(flags, name, next);
        i += 1;
      } else {
        assign(flags, name, true);
      }
      continue;
    }

    if (token.startsWith("-") && token.length > 1) {
      const short = token.slice(1);
      if (short === "h") assign(flags, "help", true);
      else if (short === "V") assign(flags, "version", true);
      else assign(flags, camelize(short), true);
      continue;
    }

    positionals.push(token);
  }

  return { command: positionals[0], positionals, flags };
}

export function hasFlag(flags: Flags, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(flags, name);
}

export function getFlagValues(flags: Flags, name: string): FlagValue[] {
  const value = flags[name];
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

/** 取最后一个字符串值，兼容原先的单值语义。 */
export function getStringFlag(flags: Flags, name: string): string | undefined {
  const values = getFlagValues(flags, name);
  for (let i = values.length - 1; i >= 0; i -= 1) {
    const value = values[i];
    if (typeof value === "string") return value;
  }
  return values.length > 0 ? "" : undefined;
}

export function getBooleanFlag(flags: Flags, name: string): boolean {
  return getFlagValues(flags, name).some(
    (value) => value === true || value === "true",
  );
}
