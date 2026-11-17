import assert from "node:assert/strict";
import test from "node:test";

import { formatJsonText } from "../src/json-text";

test("美化不改变超出安全整数的数字字面量", () => {
  const text = '{"customerOrderId":1234567890123456789,"total":9007199254740993}';
  const pretty = formatJsonText(text, "pretty");
  assert.ok(pretty.includes("1234567890123456789"));
  assert.ok(pretty.includes("9007199254740993"));
  assert.equal(formatJsonText(text, "compact"), text);
});

test("压缩只移除字符串外的空白", () => {
  const text = '{ "a" : " x y " , "b" : 1 }';
  assert.equal(formatJsonText(text, "compact"), '{"a":" x y ","b":1}');
});

test("嵌套结构美化", () => {
  const pretty = formatJsonText('{"a":[1,{"b":[]}],"c":{}}', "pretty");
  assert.equal(
    pretty,
    [
      "{",
      '  "a": [',
      "    1,",
      "    {",
      '      "b": []',
      "    }",
      "  ],",
      '  "c": {}',
      "}",
    ].join("\n"),
  );
});

test("保留字符串中的转义与空白", () => {
  const text = '{"a":"line\\n\\"quoted\\"","b":"嘉立创"}';
  assert.equal(formatJsonText(text, "compact"), text);
});

test("非法 JSON 抛错", () => {
  assert.throws(() => formatJsonText("{oops", "pretty"), SyntaxError);
});
