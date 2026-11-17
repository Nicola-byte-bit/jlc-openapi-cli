import { CliError, EXIT_NETWORK } from "./output";

export type FetchLike = (url: string, init: RequestInit) => Promise<ResponseLike>;

export interface ResponseLike {
  status: number;
  text(): Promise<string>;
}

export interface HttpRequestOptions {
  method: string;
  url: string;
  body?: string | FormData;
  headers: Record<string, string>;
  timeoutMs: number;
  fetchImpl?: FetchLike;
}

export interface HttpResponseData {
  status: number;
  text: string;
}

function describeError(error: unknown): string {
  if (error instanceof Error) {
    const cause = (error as Error & { cause?: unknown }).cause;
    if (cause instanceof Error) return `${error.message}: ${cause.message}`;
    return error.message;
  }
  return String(error);
}

export async function requestHttp(options: HttpRequestOptions): Promise<HttpResponseData> {
  const fetchImpl = options.fetchImpl ?? (fetch as unknown as FetchLike);

  let response: ResponseLike;
  try {
    response = await fetchImpl(options.url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
      signal: AbortSignal.timeout(options.timeoutMs),
      // 签名绑定路径，跟随重定向会导致签名失效，3xx 直接按错误处理。
      redirect: "manual",
    });
  } catch (error) {
    const name = error instanceof Error ? error.name : "";
    if (name === "TimeoutError" || name === "AbortError") {
      throw new CliError("network", `请求超时（${options.timeoutMs}ms）`, EXIT_NETWORK);
    }
    throw new CliError(
      "network",
      `网络请求失败：${describeError(error)}`,
      EXIT_NETWORK,
    );
  }

  let text: string;
  try {
    text = await response.text();
  } catch (error) {
    throw new CliError("network", `读取响应失败：${describeError(error)}`, EXIT_NETWORK);
  }

  return { status: response.status, text };
}
