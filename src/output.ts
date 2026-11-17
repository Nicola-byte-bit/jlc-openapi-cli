/** 统一退出码与输出格式。 */

export const EXIT_OK = 0;
/** 服务端返回了响应，但业务失败（code !== 200 / success === false）。 */
export const EXIT_API = 1;
/** 用法错误、配置错误、用户取消。 */
export const EXIT_USAGE = 2;
/** 网络错误、超时、HTTP 非 2xx。 */
export const EXIT_NETWORK = 3;
/** 未预期的内部错误。 */
export const EXIT_INTERNAL = 4;

export type ErrorType = "usage" | "config" | "network" | "http" | "internal";

export class CliError extends Error {
  readonly type: ErrorType;
  readonly exitCode: number;
  readonly details?: unknown;

  constructor(type: ErrorType, message: string, exitCode: number, details?: unknown) {
    super(message);
    this.name = "CliError";
    this.type = type;
    this.exitCode = exitCode;
    this.details = details;
  }
}

export function usageError(message: string): never {
  throw new CliError("usage", message, EXIT_USAGE);
}

export function configError(message: string): never {
  throw new CliError("config", message, EXIT_USAGE);
}

export interface WritableLike {
  write(chunk: string): boolean | unknown;
}

export function formatJson(value: unknown, compact: boolean): string {
  return compact ? JSON.stringify(value) : JSON.stringify(value, null, 2);
}

export function writeOut(stream: WritableLike, text: string): void {
  stream.write(text.endsWith("\n") ? text : `${text}\n`);
}

export function writeErr(stream: WritableLike, text: string): void {
  stream.write(text.endsWith("\n") ? text : `${text}\n`);
}

export function printCliError(stream: WritableLike, error: CliError): void {
  const payload: Record<string, unknown> = {
    error: {
      type: error.type,
      message: error.message,
    },
  };
  if (error.details !== undefined) {
    (payload.error as Record<string, unknown>).details = error.details;
  }
  writeErr(stream, JSON.stringify(payload));
}
