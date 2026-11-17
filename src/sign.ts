import { createHmac, randomInt } from "node:crypto";

export const AUTH_SCHEMA = "JOP";
const NONCE_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export interface StringToSignInput {
  method: string;
  /** 参与签名的绝对路径，包含查询串（形如 `/a/b?x=1`）。 */
  canonicalUri: string;
  /** 秒级时间戳。 */
  timestamp: number;
  nonce: string;
  /** 实际发送的请求体；GET 请求为空字符串。 */
  body: string;
}

/**
 * 构造待签名串。固定五行，每行（包括最后一行）以 `\n` 结尾。
 */
export function buildStringToSign(input: StringToSignInput): string {
  return `${input.method}\n${input.canonicalUri}\n${input.timestamp}\n${input.nonce}\n${input.body}\n`;
}

/**
 * HmacSHA256 签名并 Base64 编码。
 */
export function computeSignature(secretKey: string, stringToSign: string): string {
  return createHmac("sha256", secretKey).update(stringToSign, "utf8").digest("base64");
}

/**
 * 生成 32 位随机串（大小写字母 + 数字），与 SDK 的 NonceKit 一致。
 */
export function createNonce(length = 32): string {
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += NONCE_ALPHABET[randomInt(NONCE_ALPHABET.length)];
  }
  return result;
}

export interface AuthorizationInput {
  appId: string;
  accessKey: string;
  timestamp: number;
  nonce: string;
  signature: string;
}

/**
 * 生成 `Authorization` 头：`JOP appid="...",accesskey="..."...`。
 */
export function buildAuthorization(input: AuthorizationInput): string {
  return (
    `${AUTH_SCHEMA} appid="${input.appId}"` +
    `,accesskey="${input.accessKey}"` +
    `,timestamp="${input.timestamp}"` +
    `,nonce="${input.nonce}"` +
    `,signature="${input.signature}"`
  );
}
