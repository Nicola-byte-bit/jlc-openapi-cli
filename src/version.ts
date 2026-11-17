import fs from "node:fs";
import path from "node:path";

let cached: string | undefined;

/** 从包根目录的 package.json 读取版本号（dist/index.js → ../package.json）。 */
export function getVersion(): string {
  if (cached) return cached;
  try {
    const pkgPath = path.join(__dirname, "..", "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8")) as { version?: unknown };
    cached = typeof pkg.version === "string" ? pkg.version : "0.0.0";
  } catch {
    cached = "0.0.0";
  }
  return cached;
}
