import type { EndpointDef, FieldDef } from "./types";

export interface EndpointOverride {
  fields?: FieldDef[];
  /** true 时 fields 完整替换生成结果；默认按 path 合并。 */
  replaceFields?: boolean;
  /** 删除指定 path 及其子路径。 */
  removeFields?: string[];
  strict?: boolean;
  method?: "POST" | "GET";
  contentType?: "json" | "multipart";
  fileFields?: string[];
  title?: string;
  description?: string;
  category?: string;
  legacy?: boolean;
  example?: string;
}

function field(
  path: string,
  type: FieldDef["type"],
  required = false,
  description = "",
  extra: Partial<FieldDef> = {},
): FieldDef {
  return { path, type, required, description, confidence: "high", ...extra };
}

const SURFACE_TREATMENT_FIELDS: ReadonlyArray<
  readonly [string, FieldDef["type"], boolean, string]
> = [
  ["craftAccessId", "string", true, "工艺业务id"],
  ["craftCode", "string", true, "工艺编码"],
  ["craftName", "string", true, "工艺名称"],
  ["craftOptionAccessId", "string", true, "表面选项业务id"],
  ["parameterName", "string", true, "属性名称"],
  ["craftAttributeAccessId", "string", true, "工艺属性业务id"],
  ["parameterCode", "string", true, "属性编码"],
  ["parameterValue", "string", true, "属性值"],
  ["fatherAttributeAccessId", "string", false, "父工艺属性业务id"],
  ["enterType", "integer", true, "录入方式 0:默认 1:用户上传 2:用户输入"],
  ["customerCraft", "string", false, "客户输入字段，enterType=2 时作为镶嵌螺母数量"],
  ["fileSystemAccessId", "string", false, "镶嵌螺母文件id"],
];

function surfaceTreatmentFields(prefix: string): FieldDef[] {
  return SURFACE_TREATMENT_FIELDS.map(([name, type, required, description]) =>
    field(`${prefix}.${name}`, type, required, description),
  );
}

/**
 * 不在 110 份文档中的既有接口。
 * 文档已改为 /pcb/order/getList（按订单 ID 批量查询），但旧路径仍可用。
 */
export const BUILTIN_ENDPOINTS: EndpointDef[] = [
  {
    path: "/pcb/order/getOrderPageList",
    method: "POST",
    title: "分页查询订单（兼容）",
    category: "PCB业务",
    description: "分页查询 PCB 订单（旧版路径，新文档对应 /pcb/order/getList）",
    contentType: "json",
    strict: true,
    legacy: true,
    example:
      'jlc-openapi-cli /pcb/order/getOrderPageList --orderType examples --produceCode Y50504 ' +
      '--orderByFlag true --orderDateBegin "2026-11-11 00:00:00" --orderDateEnd "2026-11-16 18:00:00" ' +
      "--pageSize 10 --pageNum 1 --queryFilterFlag true",
    fields: [
      field("orderType", "string", true, "订单类别：样板 examples，小批量 batch", {
        enum: ["examples", "batch"],
      }),
      field("produceCode", "string", false, "生产订单编号，例如 Y50504"),
      field("orderByFlag", "boolean", false, "是否按下单时间降序排序：true 降序，false 升序"),
      field("orderDateBegin", "string", true, "下单开始时间，格式 yyyy-MM-dd HH:mm:ss", {
        format: "datetime",
      }),
      field("orderDateEnd", "string", true, "下单结束时间，格式 yyyy-MM-dd HH:mm:ss", {
        format: "datetime",
      }),
      field("pageSize", "integer", true, "每页数据量，1-100", { min: 1, max: 100 }),
      field("pageNum", "integer", true, "页码，从 1 开始", { min: 1 }),
      field("queryFilterFlag", "boolean", false, "是否过滤已取消订单：true 过滤，false 不过滤"),
    ],
  },
];

export const OVERRIDES: Record<string, EndpointOverride> = {
  // 3DP 提交订单：文档里 List 丢了泛型，且部分子表被分页拆断，手工补全。
  "/3dp-open/order/submitOrder": {
    removeFields: [
      "modelCount",
      "customerPersonalizeCode",
      "productionBaseCode",
      "productionBaseMismatchHandleType",
      "surfaceTreatmentList",
      ...SURFACE_TREATMENT_FIELDS.map(([name]) => `surfaceTreatmentList.${name}`),
    ],
    fields: [
      field("modelPriceParamList", "array", true, "商品集合", { items: "object" }),
      field("modelPriceParamList.modelCount", "integer", true, "商品数量"),
      field(
        "modelPriceParamList.customerPersonalizeCode",
        "string",
        false,
        "客户自定义编号，仅允许字母、数字、短横线、下划线及英文句点",
      ),
      field(
        "modelPriceParamList.productionBaseCode",
        "string",
        false,
        "自选生产基地 code（sg_3dp:广东韶关 / js_3dp:江苏淮安）",
      ),
      field(
        "modelPriceParamList.productionBaseMismatchHandleType",
        "integer",
        false,
        "生产基地不匹配处理方式",
      ),
      field("modelPriceParamList.surfaceTreatmentList", "array", false, "表面处理信息", {
        items: "object",
      }),
      ...surfaceTreatmentFields("modelPriceParamList.surfaceTreatmentList"),
    ],
  },

  // 3DP 获取模型交期价格：文档的嵌套类型名与字段名对不上，手工补全。
  "/3dp-open/order/getModelDeliveryPrice": {
    removeFields: [
      "materialAccessId",
      "contrastColorAccessId",
      "materialDeliveryAccessId",
      "modelAccessId",
      "modelCount",
      "surfaceTreatmentList",
      "surfaceTreatmentList.craftAccessId",
      "surfaceTreatmentList.craftCode",
      "surfaceTreatmentList.craftName",
      "surfaceTreatmentList.craftOptionAccessId",
      "surfaceTreatmentList.parameterName",
      "surfaceTreatmentList.craftAttributeAccessId",
      "surfaceTreatmentList.parameterCode",
      "surfaceTreatmentList.parameterValue",
      "surfaceTreatmentList.fatherAttributeAccessId",
      "surfaceTreatmentList.enterType",
      "surfaceTreatmentList.customerCraft",
      "surfaceTreatmentList.fileSystemAccessId",
    ],
    fields: [
      field("modelPriceParamList", "array", true, "计算材料价格参数", { items: "object" }),
      field("modelPriceParamList.materialAccessId", "string", true, "材料业务id"),
      field("modelPriceParamList.contrastColorAccessId", "string", true, "材料对应颜色 accessId"),
      field("modelPriceParamList.materialDeliveryAccessId", "string", true, "交期业务id"),
      field("modelPriceParamList.modelAccessId", "string", true, "模型业务id"),
      field("modelPriceParamList.modelCount", "integer", true, "商品数量"),
      field("modelPriceParamList.surfaceTreatmentList", "array", true, "表处参数", {
        items: "object",
      }),
      ...([
        ["craftAccessId", "string", true, "工艺业务id"],
        ["craftCode", "string", true, "工艺编码"],
        ["craftName", "string", true, "工艺名称"],
        ["craftOptionAccessId", "string", true, "表面选项业务id"],
        ["parameterName", "string", true, "属性名称"],
        ["craftAttributeAccessId", "string", true, "工艺属性业务id"],
        ["parameterCode", "string", true, "属性编码"],
        ["parameterValue", "string", true, "属性值"],
        ["fatherAttributeAccessId", "string", false, "父工艺属性业务id"],
        ["enterType", "integer", true, "录入方式 0:默认 1:用户上传 2:用户输入"],
        ["customerCraft", "string", false, "客户输入字段，enterType=2 时作为镶嵌螺母数量"],
        ["fileSystemAccessId", "string", false, "镶嵌螺母文件id"],
      ] as const).map(([name, type, required, description]) =>
        field(
          `modelPriceParamList.surfaceTreatmentList.${name}`,
          type,
          required,
          description,
        ),
      ),
    ],
  },

  // 3DP 检查材料尺寸限制
  "/3dp-open/order/checkMaterialSizeLimit": {
    removeFields: ["modelAccessId", "materialTypeId", "materialAccessId", "deliveryType"],
    fields: [
      field("requests", "array", true, "材料尺寸限制校验请求参数", { items: "object" }),
      field("requests.modelAccessId", "string", true, "模型业务id"),
      field("requests.materialTypeId", "integer", true, "材料类型id"),
      field("requests.materialAccessId", "string", true, "材料业务id"),
      field("requests.deliveryType", "integer", true, "交期类型"),
    ],
  },

  // PCB 创建订单：补回 PDF 合并行/断行丢失的字段。
  "/pcb/order/create": {
    removeFields: ["orderTechnical.gongEdgeShapeTole"],
    fields: [
      field("orderTechnical.gongEdgeShapeTolerance", "integer", false, "过孔边缘形状公差"),
      field("orderTechnical.testCodeOutside", "string", false, "生产条码外放 yes/no"),
      field("orderTechnical.acheiveTimeType", "string", false, "发货时间类型"),
      field("orderTechnical.notAcceptCrossPlates", "integer", false, "是否接收打叉板 1:不接受 2:接受"),
      field("orderTechnical.metalBind", "integer", false, "是否需要金属包边 0:不需要 1:需要"),
      field("orderPcbSubmitSteelMeshRequestVO.ladderSteelMeshFlag", "boolean", false, "是否阶梯钢网"),
      field("orderPcbSubmitSteelMeshRequestVO.ladderPanelPly", "number", false, "阶梯面厚度"),
      field("orderPcbSubmitSteelMeshRequestVO.ladderMaterialNumber", "string", false, "阶梯物料位号"),
      field("orderPcbSubmitSteelMeshRequestVO.noFrameSteelPieceFlag", "boolean", false, "是否无铝框钢片"),
    ],
  },

  // 3DP 查询订单详情：参数被包在损坏的 Header 表里。
  "/3dp-open/order/getOrderDetailByOrderAccessId": {
    replaceFields: true,
    fields: [field("orderAccessId", "string", true, "订单业务id")],
  },

  // 立创商城订单详情/物流：参数表损坏。
  "/lcsc/openapi/order/detail": {
    replaceFields: true,
    fields: [field("orderCode", "string", true, "订单编号")],
  },
  "/lcsc/openapi/order/progress": {
    replaceFields: true,
    fields: [field("orderCode", "string", true, "订单编号")],
  },

  // 创建询价单：文档把响应字段混进了请求表。
  "/lcsc/openapi/enquiry/create": {
    removeFields: ["OK", "schema", "code", "message", "data", "beforeEnquiryCode", "successful"],
  },
  "/lcsc/openapi/enquiry/info": {
    replaceFields: true,
    fields: [field("beforeEnquiryCode", "string", true, "询价单编号")],
  },
  "/lcsc/openapi/enquiry/pre/order": {
    replaceFields: true,
    fields: [field("beforeEnquiryCode", "string", true, "询价单编号")],
  },
  "/lcsc/openapi/order/pre/order": {
    replaceFields: true,
    fields: [
      field("productList", "array", true, "商品列表", { items: "object" }),
      field("productList.productId", "integer", true, "商品ID（与 productCode 二选一）"),
      field("productList.productCode", "string", false, "商品编号（仅传 productCode 时后端转换为 productId）"),
      field("productList.purchaseNumber", "integer", true, "购买数量"),
    ],
  },
};
