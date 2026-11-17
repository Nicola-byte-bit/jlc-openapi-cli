import assert from "node:assert/strict";
import test from "node:test";

import { getEndpoint } from "../src/endpoints";
import { buildPayload } from "../src/payload";

const endpoint = getEndpoint("/pcb/order/getOrderPageList");
assert.ok(endpoint);

const base = {
  orderType: "examples",
  orderDateBegin: "2026-11-11 00:00:00",
  orderDateEnd: "2026-11-16 18:00:00",
  pageSize: "10",
  pageNum: "1",
};

function build(flags: Record<string, string | boolean>) {
  return buildPayload(endpoint!, flags, { strict: true, validate: true });
}

test("合法参数转换类型并保持字段", () => {
  const { payload, warnings } = build({
    ...base,
    produceCode: "Y50504",
    orderByFlag: "true",
    queryFilterFlag: false,
  });

  assert.deepEqual(payload, {
    orderType: "examples",
    orderDateBegin: "2026-11-11 00:00:00",
    orderDateEnd: "2026-11-16 18:00:00",
    pageSize: 10,
    pageNum: 1,
    produceCode: "Y50504",
    orderByFlag: true,
    queryFilterFlag: false,
  });
  assert.deepEqual(warnings, []);
});

test("可选字段未提供时不出现在 payload 中", () => {
  const { payload } = build(base);
  assert.equal("produceCode" in payload, false);
  assert.equal("orderByFlag" in payload, false);
  assert.equal("queryFilterFlag" in payload, false);
});

test("缺少必填参数", () => {
  assert.throws(() => build({ orderType: "examples" }), /缺少必填参数/);
});

test("枚举校验", () => {
  assert.throws(() => build({ ...base, orderType: "sample" }), /只能是 examples \/ batch/);
});

test("pageSize 范围", () => {
  assert.throws(() => build({ ...base, pageSize: "0" }), /不能小于 1/);
  assert.throws(() => build({ ...base, pageSize: "101" }), /不能大于 100/);
  assert.throws(() => build({ ...base, pageSize: "1.5" }), /需要整数/);
});

test("日期格式与真实日历", () => {
  assert.throws(
    () => build({ ...base, orderDateBegin: "2026/11/11 00:00:00" }),
    /yyyy-MM-dd HH:mm:ss/,
  );
  assert.throws(
    () => build({ ...base, orderDateBegin: "2026-02-30 00:00:00" }),
    /yyyy-MM-dd HH:mm:ss/,
  );
});

test("未知参数在 strict 下报错", () => {
  assert.throws(() => build({ ...base, foo: "bar" }), /未知参数 --foo/);
});

test("布尔参数接受多种写法，非法值报错", () => {
  const { payload } = build({ ...base, orderByFlag: "yes" });
  assert.equal(payload.orderByFlag, true);
  assert.throws(() => build({ ...base, orderByFlag: "maybe" }), /需要布尔值/);
});

test("时间跨度超过 365 天给出警告", () => {
  const { warnings } = build({
    ...base,
    orderDateBegin: "2024-01-01 00:00:00",
    orderDateEnd: "2026-01-02 00:00:00",
  });
  assert.equal(warnings.length, 1);
});

test("非 strict 接口的未知参数透传并告警", () => {
  const other = getEndpoint("/3dp-open/order/getAllEnableMaterialInfo");
  assert.ok(other);
  const { payload, warnings } = buildPayload(other!, { foo: "bar" }, { strict: false });
  assert.equal(payload.foo, "bar");
  assert.equal(warnings.length, 1);
});
