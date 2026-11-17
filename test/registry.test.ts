import assert from "node:assert/strict";
import test from "node:test";

import { allEndpoints, getEndpoint } from "../src/endpoints";

test("registry 包含 110 个文档接口 + 1 个兼容接口", () => {
  const endpoints = allEndpoints();
  assert.equal(endpoints.length, 111);

  const paths = endpoints.map((endpoint) => endpoint.path);
  assert.equal(new Set(paths).size, paths.length, "接口路径必须唯一");

  const documented = endpoints.filter(
    (endpoint) => endpoint.source && endpoint.source.startsWith("api-docs/"),
  );
  assert.equal(documented.length, 110);

  const getEndpoints = endpoints.filter((endpoint) => endpoint.method === "GET");
  assert.equal(getEndpoints.length, 1);
  assert.equal(getEndpoints[0]?.path, "/3dp-open/order/getAllEnableMaterialInfo");

  const multipart = endpoints.filter((endpoint) => endpoint.contentType === "multipart");
  assert.equal(multipart.length, 8);
  for (const endpoint of multipart) {
    assert.ok((endpoint.fileFields?.length ?? 0) > 0, `${endpoint.path} 缺少文件字段`);
  }

  assert.ok(getEndpoint("/pcb/order/getOrderPageList")?.legacy);
});

test("每个接口的字段 path 唯一", () => {
  for (const endpoint of allEndpoints()) {
    const paths = endpoint.fields.map((field) => field.path);
    assert.equal(
      new Set(paths).size,
      paths.length,
      `${endpoint.path} 存在重复字段 path`,
    );
  }
});

test("关键接口的嵌套结构", () => {
  const createOrder = getEndpoint("/pcb/order/create");
  assert.ok(createOrder);
  const paths = new Set(createOrder.fields.map((field) => field.path));
  assert.ok(paths.has("orderTechnical.plateType"));
  assert.ok(paths.has("orderLinkMan.man"));
  assert.ok(paths.has("orderReceive.address"));
  assert.ok(paths.has("orderPcbSubmitSteelMeshRequestVO.makeRequirement"));
  assert.ok(paths.has("qrCodeReqVO.printMethod"));

  const submitOrder = getEndpoint("/3dp-open/order/submitOrder");
  assert.ok(submitOrder);
  const submitPaths = new Set(submitOrder.fields.map((field) => field.path));
  assert.ok(submitPaths.has("modelPriceParamList.materialAccessId"));
  assert.ok(submitPaths.has("modelPriceParamList.surfaceTreatmentList.craftAccessId"));

  const pricing = getEndpoint("/3dp-open/order/getModelDeliveryPrice");
  assert.ok(pricing);
  const pricingPaths = new Set(pricing.fields.map((field) => field.path));
  assert.ok(pricingPaths.has("modelPriceParamList.modelAccessId"));
  assert.ok(pricingPaths.has("modelPriceParamList.surfaceTreatmentList.craftCode"));
});

test("解析困难的接口已由 override 修正", () => {
  const detail = getEndpoint("/3dp-open/order/getOrderDetailByOrderAccessId");
  assert.deepEqual(detail?.fields.map((field) => field.path), ["orderAccessId"]);

  const lcscDetail = getEndpoint("/lcsc/openapi/order/detail");
  assert.deepEqual(lcscDetail?.fields.map((field) => field.path), ["orderCode"]);

  const lcscProgress = getEndpoint("/lcsc/openapi/order/progress");
  assert.deepEqual(lcscProgress?.fields.map((field) => field.path), ["orderCode"]);
});
