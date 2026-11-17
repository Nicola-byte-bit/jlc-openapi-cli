import assert from "node:assert/strict";
import test from "node:test";

import { getBooleanFlag, getStringFlag, parseArgs } from "../src/args";

test("空格分隔与等号分隔", () => {
  const { flags } = parseArgs(["--a", "1", "--b=2"]);
  assert.equal(flags.a, "1");
  assert.equal(flags.b, "2");
});

test("裸布尔 flag 为 true", () => {
  const { flags } = parseArgs(["--orderByFlag", "--queryFilterFlag=false"]);
  assert.equal(flags.orderByFlag, true);
  assert.equal(flags.queryFilterFlag, "false");
});

test("kebab-case 转 camelCase", () => {
  const { flags } = parseArgs(["--json-file", "body.json", "--order-type", "examples"]);
  assert.equal(flags.jsonFile, "body.json");
  assert.equal(flags.orderType, "examples");
});

test("位置参数与接口路径", () => {
  const { command, positionals } = parseArgs([
    "/pcb/order/getOrderPageList",
    "--orderType",
    "examples",
  ]);
  assert.equal(command, "/pcb/order/getOrderPageList");
  assert.deepEqual(positionals, ["/pcb/order/getOrderPageList"]);
});

test("-- 之后全部视为位置参数", () => {
  const { positionals, flags } = parseArgs(["call", "--", "--not-a-flag"]);
  assert.deepEqual(positionals, ["call", "--not-a-flag"]);
  assert.equal(flags["not-a-flag"], undefined);
});

test("短选项", () => {
  assert.equal(parseArgs(["-h"]).flags.help, true);
  assert.equal(parseArgs(["-V"]).flags.version, true);
});

test("取值辅助函数", () => {
  const { flags } = parseArgs(["--a", "1", "--b", "--c=false"]);
  assert.equal(getStringFlag(flags, "a"), "1");
  assert.equal(getStringFlag(flags, "b"), "");
  assert.equal(getBooleanFlag(flags, "b"), true);
  assert.equal(getBooleanFlag(flags, "c"), false);
});
