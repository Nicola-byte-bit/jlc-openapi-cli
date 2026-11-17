import assert from "node:assert/strict";
import test from "node:test";

import { getEndpoint } from "../src/endpoints";
import { buildPayload, stringifyPayload, RawNumber } from "../src/payload";

test("点号路径构造嵌套对象", () => {
  const endpoint = getEndpoint("/pcb/order/create");
  assert.ok(endpoint);
  const { payload } = buildPayload(
    endpoint,
    {
      "orderTechnical.plateType": "1",
      "orderTechnical.stencilLayer": "2",
      "orderLinkMan.man": "张三",
    },
    { strict: false },
  );

  assert.deepEqual(payload, {
    orderTechnical: { plateType: 1, stencilLayer: 2 },
    orderLinkMan: { man: "张三" },
  });
});

test("重复 flag 聚合成数组", () => {
  const endpoint = getEndpoint("/lcsc/openapi/bom/search");
  assert.ok(endpoint);
  const { payload } = buildPayload(endpoint, { querys: ["smt", "未知"] }, { strict: false });
  assert.deepEqual(payload, { querys: ["smt", "未知"] });
});

test("JSON 数组作为数组参数", () => {
  const endpoint = getEndpoint("/lcsc/openapi/bom/search");
  assert.ok(endpoint);
  const { payload } = buildPayload(endpoint, { querys: '["a","b"]' }, { strict: false });
  assert.deepEqual(payload, { querys: ["a", "b"] });
});

test("对象数组用 JSON 传入", () => {
  const endpoint = getEndpoint("/3dp-open/order/submitOrder");
  assert.ok(endpoint);
  const { payload } = buildPayload(
    endpoint,
    {
      deliveryType: "1",
      "modelPriceParamList": '[{"modelAccessId":"m1","modelCount":2}]',
    },
    { strict: false },
  );
  assert.deepEqual(payload.modelPriceParamList, [{ modelAccessId: "m1", modelCount: 2 }]);
});

test("Long 大整数不丢精度", () => {
  const endpoint = getEndpoint("/pcb/order/getList");
  assert.ok(endpoint);
  const { payload } = buildPayload(
    endpoint,
    { customerOrderIdList: "1234567890123456789", orderType: "examples" },
    { strict: false },
  );
  const json = stringifyPayload(payload);
  assert.ok(json.includes("1234567890123456789"));
  assert.equal(json.includes('"1234567890123456789"'), false);
});

test("RawNumber 可直接序列化", () => {
  assert.equal(stringifyPayload({ id: new RawNumber("9007199254740993") }), '{"id":9007199254740993}');
});

test("未知参数默认透传并告警", () => {
  const endpoint = getEndpoint("/3dp-open/order/getOrderInfoListByPage");
  assert.ok(endpoint);
  const warnings: string[] = [];
  const { payload } = buildPayload(
    endpoint,
    { someUndocumentedField: "x" },
    { strict: false, warn: (message) => warnings.push(message) },
  );
  assert.equal(payload.someUndocumentedField, "x");
  assert.equal(warnings.length, 1);
});

test("strict 下未知参数报错", () => {
  const endpoint = getEndpoint("/pcb/order/getOrderPageList");
  assert.ok(endpoint);
  assert.throws(
    () => buildPayload(endpoint, { orderType: "examples", foo: "bar" }, { strict: true }),
    /未知参数 --foo/,
  );
});

test("数组下标路径", () => {
  const endpoint = getEndpoint("/3dp-open/order/checkMaterialSizeLimit");
  assert.ok(endpoint);
  const { payload } = buildPayload(
    endpoint,
    {
      "requests.0.modelAccessId": "m1",
      "requests.0.materialTypeId": "1",
    },
    { strict: false },
  );
  assert.deepEqual(payload.requests, [{ modelAccessId: "m1", materialTypeId: 1 }]);
});
