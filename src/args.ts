export type FlagValue = string | boolean;
export type Flags = Record<string, FlagValue>;

export interface ParsedArgs {
  /** 第一个位置参数，可能是子命令、接口路径或空。 */
  command: string | undefined;
  positionals: string[];
  flags: Flags;
}

function camelize(name: string): string {
  return name.replace(/-([a-zA-Z0-9])/g, (_match, ch: string) => ch.toUpperCase());
}

/**
 * 手写参数解析。
 *
 * 支持：
 * - `--key value`
 * - `--key=value`
 * - 裸 `--flag`（值为 true）
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
        flags[camelize(token.slice(2, eq))] = token.slice(eq + 1);
        continue;
      }
      const name = camelize(token.slice(2));
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        flags[name] = next;
        i += 1;
      } else {
        flags[name] = true;
      }
      continue;
    }

    if (token.startsWith("-") && token.length > 1) {
      const short = token.slice(1);
      if (short === "h") flags.help = true;
      else if (short === "V") flags.version = true;
      else flags[camelize(short)] = true;
      continue;
    }

    positionals.push(token);
  }

  return { command: positionals[0], positionals, flags };
}

export function getStringFlag(flags: Flags, name: string): string | undefined {
  const value = flags[name];
  if (value === undefined) return undefined;
  if (typeof value !== "string") return "";
  return value;
}

export function getBooleanFlag(flags: Flags, name: string): boolean {
  return flags[name] === true || flags[name] === "true";
}

export function hasFlag(flags: Flags, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(flags, name);
}
