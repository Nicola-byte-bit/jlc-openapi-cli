import assert from "node:assert/strict";
import test from "node:test";

import {
  buildAuthorization,
  buildStringToSign,
  computeSignature,
  createNonce,
} from "../src/sign";

test("官方文档签名示例可复现", () => {
  const input = {
    method: "POST",
    canonicalUri: "/order/v1/createOrder",
    timestamp: 1625208260,
    nonce: "IZHEJYNIHYZIE8S0LLC0VWTPJVRRTO50",
    body: '{"goodsId":100,"quantity":52,"createdTime":"2024-03-21 10:03:20"}',
  };

  assert.equal(
    buildStringToSign(input),
    'POST\n/order/v1/createOrder\n1625208260\nIZHEJYNIHYZIE8S0LLC0VWTPJVRRTO50\n' +
      '{"goodsId":100,"quantity":52,"createdTime":"2024-03-21 10:03:20"}\n',
  );
  assert.equal(
    computeSignature("z0BWlikshimuyiwBsH1i2qwnzMb3j3kA", buildStringToSign(input)),
    "sygwKhKBkLwHVv0c7D+a/A7JTEJjGH/kLugFKh16918=",
  );
});

test("RFC 4231 HMAC-SHA256 测试向量", () => {
  const signature = computeSignature("Jefe", "what do ya want for nothing?");
  const hex = Buffer.from(signature, "base64").toString("hex");
  assert.equal(
    hex,
    "5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843",
  );
});

test("待签名串最后一行也以换行结束", () => {
  const result = buildStringToSign({
    method: "GET",
    canonicalUri: "/a/b?x=1",
    timestamp: 1,
    nonce: "n",
    body: "",
  });
  assert.equal(result, "GET\n/a/b?x=1\n1\nn\n\n");
  assert.ok(result.endsWith("\n"));
});

test("Authorization 头格式", () => {
  assert.equal(
    buildAuthorization({
      appId: "app1",
      accessKey: "ak1",
      timestamp: 1625208260,
      nonce: "nonce1",
      signature: "sig1",
    }),
    'JOP appid="app1",accesskey="ak1",timestamp="1625208260",nonce="nonce1",signature="sig1"',
  );
});

test("nonce 长度与字符集", () => {
  for (let i = 0; i < 50; i += 1) {
    const nonce = createNonce();
    assert.equal(nonce.length, 32);
    assert.match(nonce, /^[0-9a-zA-Z]{32}$/);
  }
});

test("中文与转义字符按 UTF-8 参与签名", () => {
  const body = '{"produceCode":"样板\\"A\\"","note":"嘉立创"}';
  const stringToSign = buildStringToSign({
    method: "POST",
    canonicalUri: "/pcb/order/getOrderPageList",
    timestamp: 1700000000,
    nonce: "A".repeat(32),
    body,
  });
  const signature = computeSignature("secret", stringToSign);
  const again = computeSignature("secret", stringToSign);
  assert.equal(signature, again);
  assert.match(signature, /^[A-Za-z0-9+/]+=*$/);
});
