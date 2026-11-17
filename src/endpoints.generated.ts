/**
 * 本文件由 scripts/gen-endpoints.mjs 自动生成，请勿手工修改。
 * 重新生成：npm run gen:endpoints
 */
import type { EndpointDef } from "./types";

export const GENERATED_ENDPOINTS: EndpointDef[] = [
  {
    "path": "/pcb/onlinePrice/get",
    "method": "POST",
    "title": "在线计价",
    "category": "PCB业务",
    "description": "PCB在线计价",
    "contentType": "json",
    "fields": [
      {
        "path": "invoice",
        "type": "string",
        "required": false,
        "description": "发票\"增值税发票\" \"已预开增值税 专用发票\" \"个人电子发票普票\" 默 认为”增值税发票”",
        "confidence": "high"
      },
      {
        "path": "receiptDelivery",
        "type": "string",
        "required": false,
        "description": "可选择收据/送货单、纸质收据/送货 单、电子收据/送货单默认为”电 子收据/送货单”",
        "confidence": "high"
      },
      {
        "path": "orderTechnical",
        "type": "object",
        "required": true,
        "description": "工艺信息",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.plateType",
        "type": "integer",
        "required": true,
        "description": "板材类型 1:FR-4 2:铝基板 4:热电分离铜基板 5:罗杰斯高频板 6:铁氟龙高频板 7:FPC软板",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilLayer",
        "type": "integer",
        "required": true,
        "description": "板层可选值1、2、4、6、8、10、12、 14、16、18、20、22、24、26、28、30、32",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilLength",
        "type": "number",
        "required": true,
        "description": "板子长度(单位cm),最多2位小数",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilWidth",
        "type": "number",
        "required": true,
        "description": "板子宽度(单位cm),最多2位小数",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilCounts",
        "type": "integer",
        "required": true,
        "description": "板子数量",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilPly",
        "type": "number",
        "required": true,
        "description": "板厚(单位mm), 可选值0.4、0.6、0.8、 1.0 、1.2、1.6、1.8、2.0、2.5、3.0",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.cuprumThickness",
        "type": "number",
        "required": true,
        "description": "外层铜厚可选择1盎司、2盎司",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.insideCuprumThickness",
        "type": "number",
        "required": false,
        "description": "内层铜厚可选择0.5盎司、1盎司、2盎司",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilNumber",
        "type": "integer",
        "required": false,
        "description": "拼版个数: 拼板款数指在同一个文件中有不 同的板。",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilType",
        "type": "string",
        "required": false,
        "description": "拼板方式 单片出货:stencilOne 按客户拼版资料出货:stencilTwo 嘉立创拼版出货:stencilThree 阻焊颜色可选择",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornColor",
        "type": "string",
        "required": false,
        "description": "绿色,红色,黄色,蓝色,白色,黑色, 紫色",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.charFontColor",
        "type": "string",
        "required": false,
        "description": "字符颜色可选择白色、黑色",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornPut",
        "type": "string",
        "required": false,
        "description": "焊盘喷镀:可选择有铅喷锡、无铅喷锡、沉 金",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornPutGoldThick",
        "type": "unknown",
        "required": false,
        "description": "沉金厚度",
        "confidence": "low"
      },
      {
        "path": "orderTechnical.ness",
        "type": "integer",
        "required": false,
        "description": "1 :1U” 2 :2U” 最小孔径/外径",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.minHoleServiceCode",
        "type": "integer",
        "required": false,
        "description": "1 :0.3mm(免费)(外径0.4/0.45) 2 :0.25mm(外径0.35/0.4) 3 :0.2mm(外径0.3/0.35) 4 :0.15mm(外径0.25/0.3)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornBestrow",
        "type": "string",
        "required": false,
        "description": "阻焊覆盖可选择过孔盖油、过孔开窗、过 孔塞油、过孔塞树脂、过孔塞铜浆",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.testProduct",
        "type": "string",
        "required": true,
        "description": "飞针测试可选择不测试、抽测、全部测试、 测试一半、 随机抽测 包装类型",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.packType",
        "type": "string",
        "required": false,
        "description": "嘉立创标识盒子: jlc_pack 空白盒子:white_pack",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.testCodeOutside",
        "type": "string",
        "required": false,
        "description": "生产条码外放 是:yes ,否:no",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.acheiveTimeType",
        "type": "string",
        "required": false,
        "description": "发货时间(该选项只针对样板有效,若不填写, 则默认为normal_one。小批量无效)样板1、 2层板可选normal_one(正常3-4天)、n ormal_three(正常5-6天)、fast_one(24 小时加急)、fast_two(48小时加急)样板 4层板可选normal_two(正常4-5天)、fa st_two(48小时加急)、fast_three(72小时 加急)样板6层板可选normal_four(正常 7-8天)、fast_four(96小时加急)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.notAcceptCrossPlates",
        "type": "integer",
        "required": false,
        "description": "是否接收打叉板 1:不接受 2:接受",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.metalBind",
        "type": "integer",
        "required": false,
        "description": "是否需要金属包边 0:不需要 1:需要",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.pthCopperMethod",
        "type": "integer",
        "required": false,
        "description": "过孔沉铜方式 1 : 不指定 2 : 导电胶 3 : 沉铜",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.gongEdgeShapeTolerance",
        "type": "integer",
        "required": false,
        "description": "过孔沉铜方式(过孔边缘形状公差) 1 : 普锣±0.2mm 2 : 精锣±0.1mm",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.printMethod",
        "type": "integer",
        "required": false,
        "description": "字符工艺 1 :字符打印或网版印刷(无要求) 2 :高清字符 3 :高精字符 4 :嘉立创EDA彩色丝印",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.partitionWhitePaper",
        "type": "integer",
        "required": false,
        "description": "隔白纸服务 1 : 隔纸 2 : 不隔纸",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.appearanceRequirement",
        "type": "integer",
        "required": false,
        "description": "板面外观要求 1:极致外观要求 2:按IPC二级标准",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.assignProduceBase",
        "type": "integer",
        "required": false,
        "description": "指定生产基地 1, \"无要求\", 2, \"惠州聚真\", 3, \"惠州聚真工厂\", 4, \"珠海新兆丰\", 5, \"江苏嘉立创\", 6, \"珠海先进\", 7, \"韶关金悦通\", 8, \"先进二厂\", 9, \"先进三厂\", 10, \"按原单工厂生产\";",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.ulType",
        "type": "integer",
        "required": false,
        "description": "UL标识 0:不需要 1:无要求 2:指定位置添加(立即添加)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.goodsTestReport",
        "type": "integer",
        "required": false,
        "description": "出货报告类型 1, \"不需要\", 2, \"成品检验报告\", 3, \"可靠性测试报告\", 4, \"E-TEST REPORT\", 5, \"微切片检测报告\", 6, \"ROHS测试报告\", 7, \"镍腐蚀报告\", 8, \"SEM镀层结构分析报告\", 9, \"离子污染测试报告\";",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.withstandVoltage",
        "type": "integer",
        "required": false,
        "description": "耐压值 1:3000V 2:4000V",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.heatConduction",
        "type": "integer",
        "required": false,
        "description": "导热系数 1:1W 2:2W 3:380W",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.specifyBoard",
        "type": "boolean",
        "required": false,
        "description": "是否指定板材供应商",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.specifyBoardCode",
        "type": "string",
        "required": false,
        "description": "是否指定板材code(在指定板材供应商时 需要传,才会正常算指定板材费)无要求、K B、台湾南亚、生益",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.printHDChar",
        "type": "boolean",
        "required": false,
        "description": "打印高清字符",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.madeSteel",
        "type": "boolean",
        "required": false,
        "description": "是否需钢网",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.lowResistanceTest",
        "type": "boolean",
        "required": false,
        "description": "四线低阻测试",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.intialMadeSmtFlag",
        "type": "boolean",
        "required": false,
        "description": "初始是否需要SMT",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.madeSmt",
        "type": "boolean",
        "required": false,
        "description": "是否需要SMT",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.halfHole",
        "type": "boolean",
        "required": false,
        "description": "是否需要半孔板",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.halfHoleNumber",
        "type": "integer",
        "required": false,
        "description": "半孔板数量",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.guaranteeService",
        "type": "boolean",
        "required": false,
        "description": "是否选择保障服务",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.guaranteeCount",
        "type": "integer",
        "required": false,
        "description": "保障服务数量",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.confirmProductionFile",
        "type": "boolean",
        "required": false,
        "description": "是否需要确认生产稿",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.uploadFileAfterProcess",
        "type": "boolean",
        "required": false,
        "description": "是否先选工艺后传文件",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.goldFingerBevel",
        "type": "boolean",
        "required": false,
        "description": "是否需要金手指斜边",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.edgeGrinding",
        "type": "boolean",
        "required": false,
        "description": "是否需要磨边",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.IsStencilType",
        "type": "string",
        "required": false,
        "description": "是否拼板",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.IsNeedBook",
        "type": "string",
        "required": false,
        "description": "是否需要购书",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.IsBackOrder",
        "type": "string",
        "required": false,
        "description": "是否返单",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.guaranteeUnitPrice",
        "type": "number",
        "required": false,
        "description": "客户填写保障单价",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.confirmProductionF",
        "type": "string",
        "required": false,
        "description": "确认生产稿类型:",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.ileType",
        "type": "unknown",
        "required": false,
        "description": "不需要,确认二次,确认多次",
        "confidence": "low"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/在线计价.md",
    "example": "jlc-openapi-cli /pcb/onlinePrice/get --orderTechnical <object> --orderTechnical.plateType <integer> --orderTechnical.stencilLayer <integer> --orderTechnical.stencilLength <number> --orderTechnical.stencilWidth <number> --orderTechnical.stencilCounts <integer>"
  },
  {
    "path": "/pcb/order/backOrder/create",
    "method": "POST",
    "title": "创建返单",
    "category": "PCB业务",
    "description": "创建返单",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "原单客户订单编号",
        "confidence": "high"
      },
      {
        "path": "orderType",
        "type": "string",
        "required": true,
        "description": "原单订单类别",
        "confidence": "high"
      },
      {
        "path": "invoice",
        "type": "string",
        "required": true,
        "description": "发票\"增值税发票\" \"已预开增值 税专用发票\" \"个人电子发票普票\"",
        "confidence": "high"
      },
      {
        "path": "invoiceTitle",
        "type": "string",
        "required": true,
        "description": "发票抬头",
        "confidence": "high"
      },
      {
        "path": "receiptDelivery",
        "type": "string",
        "required": false,
        "description": "收据/送货单纸质收据/送货单电 子收据/送货单",
        "confidence": "high"
      },
      {
        "path": "isAdvancePayment",
        "type": "boolean",
        "required": false,
        "description": "是否系统自动扣款",
        "confidence": "high"
      },
      {
        "path": "useCouponFlag",
        "type": "boolean",
        "required": false,
        "description": "是否允许自动使用优惠券 true:允许,false:不允许。",
        "confidence": "high"
      },
      {
        "path": "orderRemark",
        "type": "string",
        "required": false,
        "description": "订单备注",
        "confidence": "high"
      },
      {
        "path": "expressType",
        "type": "string",
        "required": true,
        "description": "快递公司加运美: JYM 德邦货运: DEBANG EMS经济快递: EMS 顺丰经济快递sf_special_offers 顺 丰标准快递(寄付) sf_send_payme nt 顺丰电商标快SF_DSBZ_JF 速 尔快递SR 优速快递YS 自提ZT 德邦货运寄付(自提) DEBANG_ZT 德邦货运寄付(送货) DEBANG_S H 德邦快递DEBANG_KD 跨越标 准速运(寄付) KYBZJF 京东特惠快 递JDTH 京东航空快递JDTK",
        "confidence": "high"
      },
      {
        "path": "orderTechnical",
        "type": "object",
        "required": true,
        "description": "必须 工艺信息",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan",
        "type": "object",
        "required": true,
        "description": "必须 订单联系人信息",
        "confidence": "high"
      },
      {
        "path": "orderReceive",
        "type": "object",
        "required": true,
        "description": "必须 收货信息",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.plateType",
        "type": "integer",
        "required": true,
        "description": "板材类型 1:FR-4 2:铝基板 4:热电分离铜基板 5:罗杰斯高频板 6:铁氟龙高频板 7:FPC软板 板层可选值1、2、4、6、8、10、12、",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilLayer",
        "type": "integer",
        "required": true,
        "description": "14、16、18、20、22、24、26、28、30、 32",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilLength",
        "type": "number",
        "required": true,
        "description": "板子长度(单位cm),最多2位小数",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilWidth",
        "type": "number",
        "required": true,
        "description": "板子宽度(单位cm),最多2位小数",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilCounts",
        "type": "integer",
        "required": true,
        "description": "板子数量 板厚(单位mm), 可选值0.4、0.6、0.",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilPly",
        "type": "number",
        "required": true,
        "description": "8、 1.0 、1.2、1.6、1.8、2.0、2.5、3.0",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.cuprumThickness",
        "type": "number",
        "required": true,
        "description": "外层铜厚可选择1盎司、2盎司",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilNumber",
        "type": "integer",
        "required": false,
        "description": "拼版个数: 拼板款数指在同一个文件中 有不同的板。",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilType",
        "type": "string",
        "required": false,
        "description": "拼板方式 单片出货:stencilOne 按客户拼版资料出货:stencilTwo 嘉立创拼版出货:stencilThree 阻焊颜色可选择",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornColor",
        "type": "string",
        "required": false,
        "description": "绿色,红色,黄色,蓝色,白色, 黑色,紫色",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.charFontColor",
        "type": "string",
        "required": false,
        "description": "字符颜色可选择白色、黑色",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornPut",
        "type": "string",
        "required": false,
        "description": "焊盘喷镀:可选择有铅喷锡、无铅喷锡 、沉金",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornPutGoldThickness",
        "type": "integer",
        "required": false,
        "description": "沉金厚度 1 :1U” 2 :2U”",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.minHoleServiceCode",
        "type": "integer",
        "required": false,
        "description": "最小孔径/外径 1 :0.3mm(免费)(外径0.4/0.45) 2 :0.25mm(外径0.35/0.4) 3 :0.2mm(外径0.3/0.35) 4 :0.15mm(外径0.25/0.3)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornBestrow",
        "type": "string",
        "required": false,
        "description": "阻焊覆盖可选择过孔盖油、过孔开窗 、过孔塞油、过孔塞树脂、过孔塞铜 浆",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.acheiveTimeType",
        "type": "string",
        "required": false,
        "description": "发货时间(该选项只针对样板有效,若 不填写,则默认为normal_one。小批量 无效)样板1、2层板可选normal_on e(正常3-4天)、normal_three(正常 5-6天)、fast_one(24小时加急)、fa st_two(48小时加急)样板4层板可 选normal_two(正常4-5天)、fast_t wo(48小时加急)、fast_three(72小 时加急)样板6层板可选normal_fou r(正常7-8天)、fast_four(96小时加 急)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.lowResistanceTestFlag",
        "type": "boolean",
        "required": false,
        "description": "是否需要四线低阻测试 true:需要,false:不需要。",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.orderProductType",
        "type": "integer",
        "required": false,
        "description": "订单产品类型",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.goldFingerBevel",
        "type": "boolean",
        "required": false,
        "description": "是否需要金手指斜边 保障服务类型",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.guaranteeServiceType",
        "type": "integer",
        "required": false,
        "description": "1: 工业/消费/其他类电子产品 2: 军工/航空 3: 医疗",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.halfHole",
        "type": "boolean",
        "required": false,
        "description": "是否为半孔板",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.halfHoleNumber",
        "type": "integer",
        "required": false,
        "description": "半孔边数量",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.edgeGrinding",
        "type": "boolean",
        "required": false,
        "description": "是否需要磨边",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.produceDatePCS",
        "type": "boolean",
        "required": false,
        "description": "在每个单片内增加生产日期",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.madeSmt",
        "type": "boolean",
        "required": false,
        "description": "是否开SMT",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.notAcceptCrossPlates",
        "type": "integer",
        "required": false,
        "description": "是否接收打叉板 1:不接受 2:接受",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.metalBind",
        "type": "integer",
        "required": false,
        "description": "是否需要金属包边 0:不需要 1:需要",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.pthCopperMethod",
        "type": "integer",
        "required": false,
        "description": "过孔沉铜方式 1 : 不指定 2 : 导电胶 3 : 沉铜",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.gongEdgeShapeTolerance",
        "type": "integer",
        "required": false,
        "description": "过孔沉铜方式(过孔边缘形状公差) 1 : 普锣±0.2mm 2 : 精锣±0.1mm",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.printMethod",
        "type": "integer",
        "required": false,
        "description": "字符工艺 1 :字符打印或网版印刷(无要求) 2 :高清字符 3 :高精字符 4 :嘉立创EDA彩色丝印",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.partitionWhitePaper",
        "type": "integer",
        "required": false,
        "description": "隔白纸服务 1 : 隔纸 2 : 不隔纸",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.ulType",
        "type": "integer",
        "required": false,
        "description": "UL标识 0:不需要 1:无要求 2:指定位置添加(立即添加)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.goodsTestReport",
        "type": "integer",
        "required": false,
        "description": "出货报告类型 1, \"不需要\", 2, \"成品检验报告\", 3, \"可靠性测试报告\", 4, \"E-TEST REPORT\", 5, \"微切片检测报告\", 6, \"ROHS测试报告\", 7, \"镍腐蚀报告\", 8, \"SEM镀层结构分析报告\", 9, \"离子污染测试报告\";",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.withstandVoltage",
        "type": "integer",
        "required": false,
        "description": "耐压值 1:3000V 2:4000V 导热系数",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.heatConduction",
        "type": "integer",
        "required": false,
        "description": "非必须 1 1:1W 2:2W 3:380W",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.man",
        "type": "string",
        "required": true,
        "description": "下单联系人",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.phone",
        "type": "string",
        "required": true,
        "description": "下单联系人手机",
        "confidence": "high"
      },
      {
        "path": "orderReceive.consignee",
        "type": "string",
        "required": true,
        "description": "收货人",
        "confidence": "high"
      },
      {
        "path": "orderReceive.phone",
        "type": "string",
        "required": true,
        "description": "收货人手机号码",
        "confidence": "high"
      },
      {
        "path": "orderReceive.province",
        "type": "string",
        "required": true,
        "description": "收货省份",
        "confidence": "high"
      },
      {
        "path": "orderReceive.city",
        "type": "string",
        "required": true,
        "description": "收货城市",
        "confidence": "high"
      },
      {
        "path": "orderReceive.area",
        "type": "string",
        "required": true,
        "description": "收货区",
        "confidence": "high"
      },
      {
        "path": "orderReceive.address",
        "type": "string",
        "required": true,
        "description": "收货人地址",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/创建返单.md",
    "example": "jlc-openapi-cli /pcb/order/backOrder/create --customerOrderId <integer> --orderType <string> --invoice <string> --invoiceTitle <string> --expressType <string> --orderTechnical <object>"
  },
  {
    "path": "/pcb/order/create",
    "method": "POST",
    "title": "创建订单",
    "category": "PCB业务",
    "description": "创建订单",
    "contentType": "json",
    "fields": [
      {
        "path": "pcbFileUrl",
        "type": "string",
        "required": true,
        "description": "pcb文件URL地址,远 程访问文件地址",
        "confidence": "high"
      },
      {
        "path": "fileName",
        "type": "string",
        "required": true,
        "description": "pcb文件名称",
        "confidence": "high"
      },
      {
        "path": "invoice",
        "type": "string",
        "required": true,
        "description": "发票\"增值税发票\" \"已预开增值税专用发 票\" \"个人电子发票普 票\"",
        "confidence": "high"
      },
      {
        "path": "invoiceTitle",
        "type": "string",
        "required": true,
        "description": "发票抬头",
        "confidence": "high"
      },
      {
        "path": "receiptDelivery",
        "type": "string",
        "required": false,
        "description": "收据/送货单 纸质收 据/送货单 电子收据/ 送货单",
        "confidence": "high"
      },
      {
        "path": "isAdvancePayment",
        "type": "boolean",
        "required": false,
        "description": "是否系统自动扣款",
        "confidence": "high"
      },
      {
        "path": "orderRemark",
        "type": "string",
        "required": false,
        "description": "订单备注",
        "confidence": "high"
      },
      {
        "path": "expressType",
        "type": "string",
        "required": true,
        "description": "快递公司 加运美: JY M德邦货运: DEBAN G EMS经济快递: EM S顺丰经济快递sf_s pecial_offers顺丰标 准快递(寄付) SF顺丰 标准快递(到付) sf_se nd_payment顺丰电 商标快SF_DSBZ_JF 速尔快递SR优速快 递YS自提ZT德邦 货运寄付(自提) DEBA NG_ZT德邦货运寄付 (送货) DEBANG_SH 德邦快递DEBANG_K D跨越标准速运(寄 付) KYBZJF京东特惠 快递JDTH京东航空 快递JDTK",
        "confidence": "high"
      },
      {
        "path": "orderTechnical",
        "type": "object",
        "required": true,
        "description": "工艺信息",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan",
        "type": "object",
        "required": true,
        "description": "订单联系人信息",
        "confidence": "high"
      },
      {
        "path": "orderReceive",
        "type": "object",
        "required": true,
        "description": "收货信息",
        "confidence": "high"
      },
      {
        "path": "bindDelivery",
        "type": "boolean",
        "required": false,
        "description": "是否绑定发货:true:",
        "confidence": "high"
      },
      {
        "path": "invoiceType",
        "type": "string",
        "required": false,
        "description": "发票类型:个人类型: personal,公司类型: company。 默认公司类型",
        "confidence": "high"
      },
      {
        "path": "autoConfirmProductionFileFlag",
        "type": "boolean",
        "required": false,
        "description": "是否允许自动确认 生产稿。 true:允许,false:不 允许。",
        "confidence": "high"
      },
      {
        "path": "confirmProductionFileType",
        "type": "string",
        "required": false,
        "description": "确认生产稿类型: 不需要,确认二次, 确认多次",
        "confidence": "high"
      },
      {
        "path": "useCouponFlag",
        "type": "boolean",
        "required": false,
        "description": "是否允许自动使用 优惠券 true:允许,false:不 允许。",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO",
        "type": "object",
        "required": false,
        "description": "钢网下单信息实体 类",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO",
        "type": "object",
        "required": false,
        "description": "二维码下单信息实 体类",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.plateType",
        "type": "integer",
        "required": true,
        "description": "板材类型 1:FR-4 2:铝基板 4:热电分离铜基板 5:罗杰斯高频板 6:铁氟龙高频板 7:FPC软板 板层 可选值1、2、4、6、8、10、12、",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilLayer",
        "type": "integer",
        "required": true,
        "description": "14、16、18、20、22、24、26、28、3 0、32",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilLength",
        "type": "number",
        "required": true,
        "description": "板子长度(单位cm),最多2位小数",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilWidth",
        "type": "number",
        "required": true,
        "description": "板子宽度(单位cm),最多2位小数",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilCounts",
        "type": "integer",
        "required": true,
        "description": "板子数量",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilPly",
        "type": "number",
        "required": true,
        "description": "板厚(单位mm),可选值0.4、0.6、0. 8、 1.0、1.2、1.6、1.8、2.0、2.5、3.0",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.cuprumThickness",
        "type": "number",
        "required": true,
        "description": "外层铜厚 可选择1盎司、2盎司",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.insideCuprumThickness",
        "type": "number",
        "required": false,
        "description": "内层铜厚 可选择0.5盎司、1盎司、2 盎司",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilNumber",
        "type": "integer",
        "required": false,
        "description": "拼版个数:拼板款数指在同一个文件中 有不同的板。",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.stencilType",
        "type": "string",
        "required": false,
        "description": "拼板方式 单片出货:stencilOne 按客户拼版资料出货:stencilTwo 嘉立创拼版出货:stencilThree",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.plateletCount",
        "type": "integer",
        "required": false,
        "description": "小板数量(拼板方式“按客户拼版资料 出货”填写) 阻焊颜色可选择",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornColor",
        "type": "string",
        "required": false,
        "description": "绿色, 红色, 黄色, 蓝色, 白色, 黑色, 紫色",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.charFontColor",
        "type": "string",
        "required": false,
        "description": "字符颜色可选择白色、黑色",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornPut",
        "type": "string",
        "required": false,
        "description": "焊盘喷镀:可选择有铅喷锡 、无铅喷锡 、沉金",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornPutGoldThickness",
        "type": "integer",
        "required": false,
        "description": "沉金厚度 1:1U” 2:2U”",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.minHoleServiceCode",
        "type": "integer",
        "required": false,
        "description": "最小孔径/外径 1:0.3mm(免费)(外径0.4/0.45) 2:0.25mm(外径0.35/0.4) 3:0.2mm(外径0.3/0.35) 4:0.15mm(外径0.25/0.3)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.adornBestrow",
        "type": "string",
        "required": true,
        "description": "阻焊覆盖可选择 过孔盖油 、过孔开窗 、过孔塞油 、过孔塞树脂 、过孔塞铜 浆",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.testProduct",
        "type": "string",
        "required": true,
        "description": "飞针测试可选择 不测试 、抽测 、全部 测试、 测试一半 、 随机抽测",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.packType",
        "type": "string",
        "required": false,
        "description": "包装类型 嘉立创标识盒子: jlc_pack 空白盒子:white_pack",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.lowResistanceTestFlag",
        "type": "boolean",
        "required": false,
        "description": "是否需要四线低阻测试 true:需要,false:不需要。",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.orderProductType",
        "type": "integer",
        "required": false,
        "description": "订单产品类型",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.goldFingerBevel",
        "type": "boolean",
        "required": false,
        "description": "是否需要金手指斜边 保障服务类型",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.guaranteeServiceType",
        "type": "integer",
        "required": false,
        "description": "1:工业/消费/其他类电子产品 2:军工/航空 3:医疗",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.halfHole",
        "type": "boolean",
        "required": false,
        "description": "是否为半孔板",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.halfHoleNumber",
        "type": "integer",
        "required": false,
        "description": "半孔边数量",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.edgeGrinding",
        "type": "boolean",
        "required": false,
        "description": "是否需要磨边",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.produceDatePCS",
        "type": "boolean",
        "required": false,
        "description": "在每个单片内增加生产日期",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.madeSmt",
        "type": "boolean",
        "required": false,
        "description": "是否开SMT",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.pthCopperMethod",
        "type": "integer",
        "required": false,
        "description": "1 :不指定 2 :导电胶 3 :沉铜",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.gongEdgeShapeTole",
        "type": "integer",
        "required": false,
        "description": "过孔沉铜方式(过孔边缘形状公差)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.printMethod",
        "type": "integer",
        "required": false,
        "description": "字符工艺 1 :字符打印或网版印刷(无要求) 2 :高清字符 3 :高精字符 4 :嘉立创EDA彩色丝印",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.partitionWhitePaper",
        "type": "integer",
        "required": false,
        "description": "隔白纸服务 1 :隔纸 2 :不隔纸",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.appearanceRequirement",
        "type": "integer",
        "required": false,
        "description": "板面外观要求 1:极致外观要求 2:按IPC二级标准",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.assignProduceBase",
        "type": "integer",
        "required": false,
        "description": "指定生产基地 1, \"无要求\", 2, \"惠州聚真\", 3, \"惠州聚真工厂\", 4, \"珠海新兆丰\", 5, \"江苏嘉立创\", 6, \"珠海先进\", 7, \"韶关金悦通\", 8, \"先进二厂\", 9, \"先进三厂\", 10, \"按原单工厂生产\";",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.ulType",
        "type": "integer",
        "required": false,
        "description": "UL标识 0:不需要 1:无要求 2:指定位置添加(立即添加)",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.goodsTestReport",
        "type": "integer",
        "required": false,
        "description": "出货报告类型 1, \"不需要\", 2, \"成品检验报告\", 3, \"可靠性测试报告\", 4, \"E-TEST REPORT\", 5, \"微切片检测报告\", 6, \"ROHS测试报告\", 7, \"镍腐蚀报告\", 8, \"SEM镀层结构分析报告\", 9, \"离子污染测试报告\";",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.withstandVoltage",
        "type": "integer",
        "required": false,
        "description": "耐压值 1:3000V 2:4000V",
        "confidence": "high"
      },
      {
        "path": "orderTechnical.heatConduction",
        "type": "integer",
        "required": false,
        "description": "导热系数 1:1W 2:2W 3:380W",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.man",
        "type": "string",
        "required": true,
        "description": "下单联系人",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.phone",
        "type": "string",
        "required": true,
        "description": "下单联系人手机",
        "confidence": "high"
      },
      {
        "path": "orderReceive.consignee",
        "type": "string",
        "required": true,
        "description": "收货人",
        "confidence": "high"
      },
      {
        "path": "orderReceive.phone",
        "type": "string",
        "required": true,
        "description": "收货人手机号码",
        "confidence": "high"
      },
      {
        "path": "orderReceive.province",
        "type": "string",
        "required": true,
        "description": "收货省份",
        "confidence": "high"
      },
      {
        "path": "orderReceive.city",
        "type": "string",
        "required": true,
        "description": "收货城市",
        "confidence": "high"
      },
      {
        "path": "orderReceive.area",
        "type": "string",
        "required": true,
        "description": "收货区",
        "confidence": "high"
      },
      {
        "path": "orderReceive.address",
        "type": "string",
        "required": true,
        "description": "收货人地址",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.steelMeshSellingPriceAccessId",
        "type": "string",
        "required": true,
        "description": "钢网规格AccessId",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.makeRequirement",
        "type": "integer",
        "required": true,
        "description": "制作要求: 1-只开顶层(1张钢网) 2-只开底层(1张钢网) 3-顶层和底层合开(合开1张钢网) 4-顶层和底层分开(分开2张钢网) 5-无要求",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.steelMeshNum",
        "type": "integer",
        "required": true,
        "description": "钢网数量",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.steelPurpose",
        "type": "integer",
        "required": true,
        "description": "钢网用途:0-锡膏网1-红胶网",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.polishingProcess",
        "type": "integer",
        "required": true,
        "description": "抛光工艺: 0-打磨抛光 1-电解抛光 2-蚀刻线抛光",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.affirmPdfStatus",
        "type": "integer",
        "required": true,
        "description": "是否需要确认PDF状态: 0-按照常规的处理方式制作 1-需要确认pdf文档才能制作 2-完全按照钢网层制作",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.electricPrint",
        "type": "boolean",
        "required": true,
        "description": "是否电印",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.packingType",
        "type": "integer",
        "required": true,
        "description": "包装类型:0-空白盒子 1-嘉立创标识盒子",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.deliverBillFlag",
        "type": "boolean",
        "required": true,
        "description": "是否需要送货单及收据",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.needMark",
        "type": "boolean",
        "required": true,
        "description": "是否需要MARK",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.steelMarkKey",
        "type": "integer",
        "required": false,
        "description": "钢网MARK-KEY(needMark 字段为 true 时必填):0-MARK 点通孔 1-MARK 点半刻",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.ladderBoardPly",
        "type": "number",
        "required": false,
        "description": "阶梯钢片厚度(ladderSteelMeshFl ag 为true 时必填):厚度限制在0. 06-0.4 之间,单位是mm",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.ladderPanel",
        "type": "integer",
        "required": false,
        "description": "阶梯面(ladderSteelMeshFlag 为tr ue 时必填): 1-局部加厚 2-局部减薄 3-在刮刀接触面加厚 4-在刮刀接触面减薄 5-在刮刀接触面背面加厚 6-在刮刀接触面背面减薄",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.customSteelLength",
        "type": "number",
        "required": false,
        "description": "自定义钢片长(noFrameSteelPiece Flag 为true 时必填)",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.customSteelWidth",
        "type": "number",
        "required": false,
        "description": "自定义钢片宽(noFrameSteelPiece Flag 为true 时必填)",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.nanometreHandleFlag",
        "type": "boolean",
        "required": false,
        "description": "是否需要纳米处理",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.ultrasonicCleaningFlag",
        "type": "boolean",
        "required": false,
        "description": "是否需要超声波清洗",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.checkReportFlag",
        "type": "integer",
        "required": false,
        "description": "是否需要检测报告: 0-不需要 1-需要",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.productRequireType",
        "type": "integer",
        "required": false,
        "description": "2- 按整版外形切割一张钢片 3- 成品为特定尺寸的钢片 4-按PCB 外形1:1 切割",
        "confidence": "high"
      },
      {
        "path": "orderPcbSubmitSteelMeshRequestVO.remark",
        "type": "string",
        "required": false,
        "description": "钢网订单备注",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.traceViewType",
        "type": "integer",
        "required": true,
        "description": "1- PCB图文码(目前不支持) 2- PCB序列码 3- SMT序列码(目前不支持)",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.qrCodeFormat",
        "type": "integer",
        "required": false,
        "description": "二维码格式: 1- QR码(默认QR码) 2- DM码",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.qrCodeSize",
        "type": "integer",
        "required": false,
        "description": "二维码尺寸: 1- 33mm(目前不支持) 2- 55mm 3- 88mm 4- 66mm 5- 77mm(目前不支持) 6- 1010mm",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.qrPosition",
        "type": "integer",
        "required": false,
        "description": "二维码位置(默认无要求): 1- 无要求 2- 指定位置(文件已有位置,需文件 中检测到白油块)",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.traceSerialConfigReqVO",
        "type": "object",
        "required": true,
        "description": "二维码信息,序列码信息实体类",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.printMethod",
        "type": "integer",
        "required": false,
        "description": "印刷方式: 1- 仅印刷二维码(不传默认:仅印刷 二维码) 2- 仅印刷明码 3- 仅印刷二维码+明码",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.prefixCode",
        "type": "string",
        "required": false,
        "description": "前缀码:用于标识企业或日期等,例 如“JLC、2024”等",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.uniqueCodeType",
        "type": "integer",
        "required": false,
        "description": "防重码类别: 1- 防重复(例:_ABCDEF_) 2- 年月日(例:_260813_) 3- 年周(例:_2633_) 4- 周年(例:_3326_)",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.incrCode",
        "type": "string",
        "required": false,
        "description": "自增码(不传默认0001):由一串自增 数字构成,每次+1",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.serialCombineSortType",
        "type": "integer",
        "required": false,
        "description": "自增码位置(默认在防重码后): 0- 前缀码+防重码+自增码 1- 前缀码+自增码+防重码",
        "confidence": "high"
      },
      {
        "path": "qrCodeReqVO.separator",
        "type": "string",
        "required": false,
        "description": "分隔符",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/创建订单.md",
    "example": "jlc-openapi-cli /pcb/order/create --pcbFileUrl <string> --fileName <string> --invoice <string> --invoiceTitle <string> --expressType <string> --orderTechnical <object>"
  },
  {
    "path": "/pcb/order/get",
    "method": "POST",
    "title": "查询订单",
    "category": "PCB业务",
    "description": "查询订单信息",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "订单编号",
        "confidence": "high"
      },
      {
        "path": "orderType",
        "type": "string",
        "required": true,
        "description": "订单类别,样板:examples 小批量:batch",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/查询订单.md",
    "example": "jlc-openapi-cli /pcb/order/get --customerOrderId <integer> --orderType <string>"
  },
  {
    "path": "/pcb/order/getExpressSchedule",
    "method": "POST",
    "title": "查询订单物流轨迹",
    "category": "PCB业务",
    "description": "查询订单物流轨迹",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "订单编号",
        "confidence": "high"
      },
      {
        "path": "orderType",
        "type": "string",
        "required": true,
        "description": "订单类别,样板:examples 小批量:batch",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/查询订单物流轨迹.md",
    "example": "jlc-openapi-cli /pcb/order/getExpressSchedule --customerOrderId <integer> --orderType <string>"
  },
  {
    "path": "/pcb/order/getList",
    "method": "POST",
    "title": "批量查询订单",
    "category": "PCB业务",
    "description": "批量查询订单",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderIdList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "订单编号(单次查询最多 100条)",
        "confidence": "high"
      },
      {
        "path": "orderType",
        "type": "string",
        "required": true,
        "description": "订单类别, 样板: examples 小批量:batch",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/批量查询订单.md",
    "example": "jlc-openapi-cli /pcb/order/getList --customerOrderIdList <array> --orderType <string>"
  },
  {
    "path": "/pcb/order/getListBySerialCode",
    "method": "POST",
    "title": "根据序列码查询订单",
    "category": "PCB业务",
    "description": "\"根据序列码查询订单",
    "contentType": "json",
    "fields": [
      {
        "path": "serialCode",
        "type": "string",
        "required": true,
        "description": "板子序列码",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/根据序列码查询订单.md",
    "example": "jlc-openapi-cli /pcb/order/getListBySerialCode --serialCode <string>"
  },
  {
    "path": "/pcb/order/getOrderDownloadFile",
    "method": "POST",
    "title": "查询订单文件下载信息",
    "category": "PCB业务",
    "description": "查询订单文件下载信息",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "订单编号",
        "confidence": "high"
      },
      {
        "path": "orderType",
        "type": "string",
        "required": true,
        "description": "订单类别,样板:examples 小批量:batch",
        "confidence": "high"
      },
      {
        "path": "fileType",
        "type": "integer",
        "required": true,
        "description": "文件类型 1:工程文件",
        "confidence": "high"
      },
      {
        "path": "downloadReason",
        "type": "integer",
        "required": true,
        "description": "下载原因:1、备份需要2、转其他板厂做 单3、转其他钢网厂做钢网4、检查资料 的准确性5、其他情况",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/查询订单文件下载信息.md",
    "example": "jlc-openapi-cli /pcb/order/getOrderDownloadFile --customerOrderId <integer> --orderType <string> --fileType <integer> --downloadReason <integer>"
  },
  {
    "path": "/pcb/order/getOrderPhysicalPicture",
    "method": "POST",
    "title": "查询订单实物图",
    "category": "PCB业务",
    "description": "查询订单实物图",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "订单编号",
        "confidence": "high"
      },
      {
        "path": "orderType",
        "type": "string",
        "required": true,
        "description": "订单类别,样板:examples 小批量:batch",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/查询订单实物图.md",
    "example": "jlc-openapi-cli /pcb/order/getOrderPhysicalPicture --customerOrderId <integer> --orderType <string>"
  },
  {
    "path": "/pcb/order/getOrderPriceDetails",
    "method": "POST",
    "title": "查询订单明细价格",
    "category": "PCB业务",
    "description": "查询订单明细价格",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "订单编号",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/查询订单明细价格.md",
    "example": "jlc-openapi-cli /pcb/order/getOrderPriceDetails --customerOrderId <integer>"
  },
  {
    "path": "/pcb/order/getOrderSteelMeshSpecificationDetails",
    "method": "POST",
    "title": "PCB查询钢网规格信息",
    "category": "PCB业务",
    "description": "PCB查询钢网规格信息",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/PCB业务/PCB查询钢网规格信息.md",
    "example": "jlc-openapi-cli /pcb/order/getOrderSteelMeshSpecificationDetails"
  },
  {
    "path": "/pcb/order/getOrderWebPriceDetails",
    "method": "POST",
    "title": "查询订单web端明细价格",
    "category": "PCB业务",
    "description": "查询订单web端明细价格",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "订单编号",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/查询订单web端明细价格.md",
    "example": "jlc-openapi-cli /pcb/order/getOrderWebPriceDetails --customerOrderId <integer>"
  },
  {
    "path": "/pcb/order/progress/get",
    "method": "POST",
    "title": "查询订单生产进度",
    "category": "PCB业务",
    "description": "查询订单生产进度",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "订单编号",
        "confidence": "high"
      },
      {
        "path": "orderType",
        "type": "string",
        "required": true,
        "description": "订单类别,样板:examples 小批量:batch",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/PCB业务/查询订单生产进度.md",
    "example": "jlc-openapi-cli /pcb/order/progress/get --customerOrderId <integer> --orderType <string>"
  },
  {
    "path": "/smtOpenApi/componentMail/addCustomerPackageDetail",
    "method": "POST",
    "title": "元器件添加至待邮寄包裹",
    "category": "SMT业务",
    "description": "元器件添加至待邮寄包裹",
    "contentType": "json",
    "fields": [
      {
        "path": "componentMailAccessIdList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "待邮寄元器件的AccessId",
        "confidence": "high"
      },
      {
        "path": "customerMailPackageKeyId",
        "type": "string",
        "required": true,
        "description": "邮寄包裹ID",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/元器件添加至待邮寄包裹.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/addCustomerPackageDetail --componentMailAccessIdList <array> --customerMailPackageKeyId <string>"
  },
  {
    "path": "/smtOpenApi/componentMail/applyComponent",
    "method": "POST",
    "title": "补全元器件信息",
    "category": "SMT业务",
    "description": "补全邮寄元器件信息：临时D编号使用",
    "contentType": "json",
    "fields": [
      {
        "path": "componentCodeTemp",
        "type": "string",
        "required": true,
        "description": "临时D 编号",
        "confidence": "high"
      },
      {
        "path": "dataAddressUrl",
        "type": "string",
        "required": true,
        "description": "数据手册超链接",
        "confidence": "high"
      },
      {
        "path": "componentMailAccessId",
        "type": "string",
        "required": true,
        "description": "邮寄明细accessId",
        "confidence": "high"
      },
      {
        "path": "componentModel",
        "type": "string",
        "required": true,
        "description": "元器件型号",
        "confidence": "high"
      },
      {
        "path": "componentSpecification",
        "type": "string",
        "required": true,
        "description": "元器件封装规格",
        "confidence": "high"
      },
      {
        "path": "packageCode",
        "type": "string",
        "required": false,
        "description": "包装方式{编带:biandai,托盘:tuopan, 袋装:daizhuang,管装:guanzhuang, 盒装:hezhuang,卷:juan,本:ben}",
        "confidence": "high"
      },
      {
        "path": "predictUseTime",
        "type": "integer",
        "required": false,
        "description": "预计使用时间(1:一天内, 2:三天后, 3: 一周内, 4:一周后)",
        "confidence": "high"
      },
      {
        "path": "jlcEdaLibrary",
        "type": "string",
        "required": false,
        "description": "嘉立创EDA 库",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/补全元器件信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/applyComponent --componentCodeTemp <string> --dataAddressUrl <string> --componentMailAccessId <string> --componentModel <string> --componentSpecification <string>"
  },
  {
    "path": "/smtOpenApi/componentMail/deleteMailPackageDetail",
    "method": "POST",
    "title": "移除指定包裹详情信息",
    "category": "SMT业务",
    "description": "移除指定包裹详情信息",
    "contentType": "json",
    "fields": [
      {
        "path": "customerMailPackageDetailKeyId",
        "type": "string",
        "required": true,
        "description": "邮寄包裹详情KeyId",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/移除指定包裹详情信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/deleteMailPackageDetail --customerMailPackageDetailKeyId <string>"
  },
  {
    "path": "/smtOpenApi/componentMail/saveMailInfo",
    "method": "POST",
    "title": "保存邮寄信息",
    "category": "SMT业务",
    "description": "保存邮寄信息",
    "contentType": "json",
    "fields": [
      {
        "path": "expressNumber",
        "type": "string",
        "required": true,
        "description": "快递单号",
        "confidence": "high"
      },
      {
        "path": "senderName",
        "type": "string",
        "required": true,
        "description": "邮寄人名称",
        "confidence": "high"
      },
      {
        "path": "senderPhone",
        "type": "string",
        "required": true,
        "description": "邮寄人电话",
        "confidence": "high"
      },
      {
        "path": "customerMailPackageKeyId",
        "type": "string",
        "required": true,
        "description": "包裹Id",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/保存邮寄信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/saveMailInfo --expressNumber <string> --senderName <string> --senderPhone <string> --customerMailPackageKeyId <string>"
  },
  {
    "path": "/smtOpenApi/componentMail/saveMailPackage",
    "method": "POST",
    "title": "保存邮寄包裹信息",
    "category": "SMT业务",
    "description": "保存邮寄包裹信息：新增邮寄包裹",
    "contentType": "json",
    "fields": [
      {
        "path": "packageName",
        "type": "string",
        "required": true,
        "description": "包裹名称",
        "confidence": "high"
      },
      {
        "path": "savePackageMailDetailRequestVOS",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "需要邮寄的信息",
        "confidence": "high"
      },
      {
        "path": "savePackageMailDetailRequestVOS.accessId",
        "type": "string",
        "required": true,
        "description": "待邮寄元器件AccessId",
        "confidence": "high"
      },
      {
        "path": "savePackageMailDetailRequestVOS.customerMailNumber",
        "type": "integer",
        "required": true,
        "description": "客户邮寄数量",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/保存邮寄包裹信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/saveMailPackage --packageName <string> --savePackageMailDetailRequestVOS <array> --savePackageMailDetailRequestVOS.accessId <string> --savePackageMailDetailRequestVOS.customerMailNumber <integer>"
  },
  {
    "path": "/smtOpenApi/componentMail/selectCustomerPackageDetail",
    "method": "POST",
    "title": "查询元器件待邮寄包裹详情",
    "category": "SMT业务",
    "description": "查询元器件待邮寄包裹详情",
    "contentType": "json",
    "fields": [
      {
        "path": "customerMailPackageKeyId",
        "type": "string",
        "required": true,
        "description": "包裹ID",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/查询元器件待邮寄包裹详情.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/selectCustomerPackageDetail --customerMailPackageKeyId <string>"
  },
  {
    "path": "/smtOpenApi/componentMail/selectMailComponentNumberInfo",
    "method": "POST",
    "title": "查询邮寄元器件相关数量",
    "category": "SMT业务",
    "description": "查询邮寄元器件相关数量",
    "contentType": "json",
    "fields": [
      {
        "path": "componentCodeList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "元器件编号List",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/查询邮寄元器件相关数量.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/selectMailComponentNumberInfo --componentCodeList <array>"
  },
  {
    "path": "/smtOpenApi/componentMail/selectWaitMailList",
    "method": "POST",
    "title": "查询元器件待邮寄列表",
    "category": "SMT业务",
    "description": "查询元器件待邮寄列表",
    "contentType": "json",
    "fields": [
      {
        "path": "keywords",
        "type": "string",
        "required": false,
        "description": "关键字",
        "confidence": "high"
      },
      {
        "path": "mailSource",
        "type": "integer",
        "required": false,
        "description": "邮寄来源(1:提前邮寄,2:smt 邮寄)",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/查询元器件待邮寄列表.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/selectWaitMailList"
  },
  {
    "path": "/smtOpenApi/componentMail/selectWaitPackageList",
    "method": "POST",
    "title": "查询元器件待邮寄包裹",
    "category": "SMT业务",
    "description": "查询元器件待邮寄包裹",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/SMT业务/查询元器件待邮寄包裹.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/selectWaitPackageList"
  },
  {
    "path": "/smtOpenApi/componentMail/toMailInit",
    "method": "POST",
    "title": "元器件去邮寄初始化",
    "category": "SMT业务",
    "description": "元器件去邮寄初始化",
    "contentType": "json",
    "fields": [
      {
        "path": "customerMailPackageKeyId",
        "type": "string",
        "required": true,
        "description": "待邮寄包裹ID",
        "confidence": "high"
      },
      {
        "path": "labelPasteFlag",
        "type": "boolean",
        "required": true,
        "description": "是否有贴装元器件编号",
        "confidence": "high"
      },
      {
        "path": "valuableFlag",
        "type": "boolean",
        "required": true,
        "description": "是否贵重器件",
        "confidence": "high"
      },
      {
        "path": "continueMailFlag",
        "type": "boolean",
        "required": true,
        "description": "是否继续邮寄",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/元器件去邮寄初始化.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/toMailInit --customerMailPackageKeyId <string> --labelPasteFlag <boolean> --valuableFlag <boolean> --continueMailFlag <boolean>"
  },
  {
    "path": "/smtOpenApi/componentMail/updateMailPackageDetail",
    "method": "POST",
    "title": "修改包裹详情信息",
    "category": "SMT业务",
    "description": "修改包裹详情信息",
    "contentType": "json",
    "fields": [
      {
        "path": "customerMailPackageDetailKeyId",
        "type": "string",
        "required": true,
        "description": "邮寄包裹详情KeyId",
        "confidence": "high"
      },
      {
        "path": "customerMailNumber",
        "type": "integer",
        "required": true,
        "description": "邮寄数量",
        "confidence": "high"
      },
      {
        "path": "unitPrice",
        "type": "number",
        "required": true,
        "description": "单价",
        "confidence": "high"
      },
      {
        "path": "valuableFlag",
        "type": "boolean",
        "required": true,
        "description": "是否贵重器件",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/修改包裹详情信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/updateMailPackageDetail --customerMailPackageDetailKeyId <string> --customerMailNumber <integer> --unitPrice <number> --valuableFlag <boolean>"
  },
  {
    "path": "/smtOpenApi/componentMail/updateMailPackageInfo",
    "method": "POST",
    "title": "修改包裹信息",
    "category": "SMT业务",
    "description": "修改包裹信息：包裹名称",
    "contentType": "json",
    "fields": [
      {
        "path": "customerMailPackageKeyId",
        "type": "string",
        "required": true,
        "description": "邮寄包裹主键KeyId",
        "confidence": "high"
      },
      {
        "path": "packageName",
        "type": "string",
        "required": true,
        "description": "包裹名称",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/修改包裹信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/updateMailPackageInfo --customerMailPackageKeyId <string> --packageName <string>"
  },
  {
    "path": "/smtOpenApi/componentMail/validExpressNumber",
    "method": "POST",
    "title": "校验快递单号",
    "category": "SMT业务",
    "description": "校验快递单号",
    "contentType": "json",
    "fields": [
      {
        "path": "expressNumber",
        "type": "string",
        "required": true,
        "description": "快递单号",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/校验快递单号.md",
    "example": "jlc-openapi-cli /smtOpenApi/componentMail/validExpressNumber --expressNumber <string>"
  },
  {
    "path": "/smtOpenApi/order/addComponentMail",
    "method": "POST",
    "title": "添加元器件邮寄",
    "category": "SMT业务",
    "description": "添加元器件邮寄",
    "contentType": "json",
    "fields": [
      {
        "path": "comment",
        "type": "string",
        "required": true,
        "description": "型号",
        "confidence": "high"
      },
      {
        "path": "footprint",
        "type": "string",
        "required": true,
        "description": "封装",
        "confidence": "high"
      },
      {
        "path": "mailNumber",
        "type": "integer",
        "required": true,
        "description": "邮寄数量",
        "confidence": "high"
      },
      {
        "path": "customerCode",
        "type": "string",
        "required": true,
        "description": "客户编号",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/添加元器件邮寄.md",
    "example": "jlc-openapi-cli /smtOpenApi/order/addComponentMail --comment <string> --footprint <string> --mailNumber <integer> --customerCode <string>"
  },
  {
    "path": "/smtOpenApi/order/selectComponentInfo",
    "method": "POST",
    "title": "SMT 查询物料信息",
    "category": "SMT业务",
    "description": "SMT 查询物料（元器件）信息",
    "contentType": "json",
    "fields": [
      {
        "path": "queryString",
        "type": "string",
        "required": true,
        "description": "查询关键字",
        "confidence": "high"
      },
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "页码",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页显示数量",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/SMT 查询物料信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/order/selectComponentInfo --queryString <string> --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/smtOpenApi/order/selectProduceScheduleVo",
    "method": "POST",
    "title": "查询SMT订单生产工序",
    "category": "SMT业务",
    "description": "查询SMT订单生产工序",
    "contentType": "json",
    "fields": [
      {
        "path": "smtOrderAccessId",
        "type": "string",
        "required": true,
        "description": "smt订单uuid",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/查询SMT订单生产工序.md",
    "example": "jlc-openapi-cli /smtOpenApi/order/selectProduceScheduleVo --smtOrderAccessId <string>"
  },
  {
    "path": "/smtOpenApi/order/selectSmtOrderInfo",
    "method": "POST",
    "title": "查询SMT订单信息",
    "category": "SMT业务",
    "description": "查询SMT订单信息",
    "contentType": "json",
    "fields": [
      {
        "path": "customerOrderId",
        "type": "integer",
        "required": true,
        "description": "pcb客户订单id",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/查询SMT订单信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/order/selectSmtOrderInfo --customerOrderId <integer>"
  },
  {
    "path": "/smtOpenApi/smtComponent/selectComponentInfoByCodes",
    "method": "POST",
    "title": "查询元器件信息",
    "category": "SMT业务",
    "description": "查询元器件信息",
    "contentType": "json",
    "fields": [
      {
        "path": "componentCodeList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "元器件编号List",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/查询元器件信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/smtComponent/selectComponentInfoByCodes --componentCodeList <array>"
  },
  {
    "path": "/smtOpenApi/smtComponent/selectPrivateStockPage",
    "method": "POST",
    "title": "SMT查询客户私有库元器件信息",
    "category": "SMT业务",
    "description": "SMT查询客户私有库元器件信息",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": false,
        "description": "页码,默认1,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": false,
        "description": "每页条数,默认20,取值范围1~200",
        "confidence": "high"
      },
      {
        "path": "keyWords",
        "type": "string",
        "required": false,
        "description": "元器件关键词,模糊匹配",
        "confidence": "high"
      },
      {
        "path": "componentCode",
        "type": "string",
        "required": false,
        "description": "元器件编号(C 编号),精确匹配",
        "confidence": "high"
      },
      {
        "path": "stockSource",
        "type": "integer",
        "required": false,
        "description": "库存来源:0-邮寄,1-嘉立创购买,2-立创 商城购买;不传表示全部",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/SMT业务/SMT查询客户私有库元器件信息.md",
    "example": "jlc-openapi-cli /smtOpenApi/smtComponent/selectPrivateStockPage"
  },
  {
    "path": "/3dp-open/ask/getOPAskingAskList",
    "method": "POST",
    "title": "查询当前客户近半个月问客中的记录接口",
    "category": "3DP业务",
    "description": "查询当前客⼾近半个⽉问客中的记录",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/3DP业务/查询当前客户近半个月问客中的记录接口.md",
    "example": "jlc-openapi-cli /3dp-open/ask/getOPAskingAskList"
  },
  {
    "path": "/3dp-open/ask/getOPAskListByOrderAccessId",
    "method": "POST",
    "title": "通过订单accessId 批量查询问客详情",
    "category": "3DP业务",
    "description": "通过订单accessId 批量查询问客详情",
    "contentType": "json",
    "fields": [
      {
        "path": "orderAccessIdList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "订单业务id列表",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/通过订单accessId 批量查询问客详情.md",
    "example": "jlc-openapi-cli /3dp-open/ask/getOPAskListByOrderAccessId --orderAccessIdList <array>"
  },
  {
    "path": "/3dp-open/ask/replyOPAsk",
    "method": "POST",
    "title": "客户回复问客接口",
    "category": "3DP业务",
    "description": "查询客户回复问客基本信息 ",
    "contentType": "json",
    "fields": [
      {
        "path": "askAccessId",
        "type": "string",
        "required": true,
        "description": "问客业务id",
        "confidence": "high"
      },
      {
        "path": "content",
        "type": "string",
        "required": true,
        "description": "问客内容",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/客户回复问客接口.md",
    "example": "jlc-openapi-cli /3dp-open/ask/replyOPAsk --askAccessId <string> --content <string>"
  },
  {
    "path": "/3dp-open/order/bindOPOrderBatch",
    "method": "POST",
    "title": "3D打印订单绑定发货接口",
    "category": "3DP业务",
    "description": "嘉立创3D打印订单，支付成功后，支持绑定发货操作",
    "contentType": "json",
    "fields": [
      {
        "path": "orderCodes",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "需要绑定到同一发货批次的订单编号集 合(2~1000 个,不可重复,每个元素 长度 1~50)",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/3D打印订单绑定发货接口.md",
    "example": "jlc-openapi-cli /3dp-open/order/bindOPOrderBatch --orderCodes <array>"
  },
  {
    "path": "/3dp-open/order/cancelOrderByOrderAccessId",
    "method": "POST",
    "title": "取消订单",
    "category": "3DP业务",
    "description": "取消订单",
    "contentType": "json",
    "fields": [
      {
        "path": "orderAccessId",
        "type": "string",
        "required": true,
        "description": "订单accessId",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/取消订单.md",
    "example": "jlc-openapi-cli /3dp-open/order/cancelOrderByOrderAccessId --orderAccessId <string>"
  },
  {
    "path": "/3dp-open/order/checkMaterialSizeLimit",
    "method": "POST",
    "title": "检查材料尺寸限制",
    "category": "3DP业务",
    "description": "根据模型查询是否符合材料尺寸限制",
    "contentType": "json",
    "fields": [
      {
        "path": "requests",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "材料尺寸限制校验请求参数",
        "confidence": "high"
      },
      {
        "path": "modelAccessId",
        "type": "string",
        "required": true,
        "description": "模型业务id",
        "confidence": "high"
      },
      {
        "path": "materialTypeId",
        "type": "integer",
        "required": true,
        "description": "材料类型id",
        "confidence": "high"
      },
      {
        "path": "materialAccessId",
        "type": "string",
        "required": true,
        "description": "材料业务id",
        "confidence": "high"
      },
      {
        "path": "deliveryType",
        "type": "integer",
        "required": true,
        "description": "交期类型",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/检查材料尺寸限制.md",
    "example": "jlc-openapi-cli /3dp-open/order/checkMaterialSizeLimit --requests <array> --modelAccessId <string> --materialTypeId <integer> --materialAccessId <string> --deliveryType <integer>"
  },
  {
    "path": "/3dp-open/order/getAllEnableMaterialInfo",
    "method": "GET",
    "title": "获取所有可用的材料信息",
    "category": "3DP业务",
    "description": "获取所有可用的材料信息",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/3DP业务/获取所有可用的材料信息.md",
    "example": "jlc-openapi-cli /3dp-open/order/getAllEnableMaterialInfo"
  },
  {
    "path": "/3dp-open/order/getAvailableExpress",
    "method": "POST",
    "title": "查询可用快递",
    "category": "3DP业务",
    "description": "按提交的收货地址和商品信息查询可用的快递",
    "contentType": "json",
    "fields": [
      {
        "path": "modelPriceParamList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "商品集合",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo",
        "type": "object",
        "required": true,
        "description": "快递收货人信息",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.materialAccessId",
        "type": "string",
        "required": true,
        "description": "材料业务id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.contrastColorAccessId",
        "type": "string",
        "required": true,
        "description": "材料对应颜色accessId",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.materialDeliveryAccessId",
        "type": "string",
        "required": true,
        "description": "交期业务id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.modelAccessId",
        "type": "string",
        "required": true,
        "description": "模型业务id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.modelCount",
        "type": "integer",
        "required": true,
        "description": "商品数量",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.surfaceTreatmentList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "表面处理信息",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.craftAccessId",
        "type": "string",
        "required": true,
        "description": "工艺业务id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.craftCode",
        "type": "string",
        "required": true,
        "description": "工艺编码",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.craftName",
        "type": "string",
        "required": true,
        "description": "工艺名称",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.craftOptionAccessId",
        "type": "string",
        "required": true,
        "description": "表面选项业务id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.parameterName",
        "type": "string",
        "required": true,
        "description": "属性名称",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.craftAttributeAccessId",
        "type": "string",
        "required": true,
        "description": "工艺属性业务id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.parameterCode",
        "type": "string",
        "required": true,
        "description": "属性编码",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.parameterValue",
        "type": "string",
        "required": true,
        "description": "属性值",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.fatherAttributeAccessId",
        "type": "string",
        "required": false,
        "description": "父工艺属性业务id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.enterType",
        "type": "integer",
        "required": true,
        "description": "录入方式0:默认1:用戶上传2:用戶输入",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.customerCraft",
        "type": "string",
        "required": true,
        "description": "客戶输入 字段,enterType=2时,作为 镶嵌螺母数量",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.fileSystemAccessId",
        "type": "string",
        "required": false,
        "description": "镶嵌螺母文件id",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.province",
        "type": "string",
        "required": true,
        "description": "收货人省份",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.city",
        "type": "string",
        "required": true,
        "description": "收货人城市",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.area",
        "type": "string",
        "required": true,
        "description": "收货人地区",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.districtName",
        "type": "string",
        "required": true,
        "description": "收货人四级地址",
        "confidence": "high"
      },
      {
        "path": "expressReceiverInfo.receiveAddress",
        "type": "string",
        "required": true,
        "description": "收货人详细地址",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/查询可用快递.md",
    "example": "jlc-openapi-cli /3dp-open/order/getAvailableExpress --modelPriceParamList <array> --expressReceiverInfo <object> --expressReceiverInfo.materialAccessId <string> --expressReceiverInfo.contrastColorAccessId <string> --expressReceiverInfo.materialDeliveryAccessId <string> --expressReceiverInfo.modelAccessId <string>"
  },
  {
    "path": "/3dp-open/order/getCraft",
    "method": "POST",
    "title": "查询材料颜色可用表处",
    "category": "3DP业务",
    "description": "查询材料颜色可用表处",
    "contentType": "json",
    "fields": [
      {
        "path": "contrastColorAccessId",
        "type": "string",
        "required": true,
        "description": "材料对应颜色accessId",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/查询材料颜色可用表处.md",
    "example": "jlc-openapi-cli /3dp-open/order/getCraft --contrastColorAccessId <string>"
  },
  {
    "path": "/3dp-open/order/getExpressDetail",
    "method": "POST",
    "title": "查询快递进度",
    "category": "3DP业务",
    "description": "根据订单查询快递进度",
    "contentType": "json",
    "fields": [
      {
        "path": "orderAccessId",
        "type": "string",
        "required": true,
        "description": "订单accessId",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/查询快递进度.md",
    "example": "jlc-openapi-cli /3dp-open/order/getExpressDetail --orderAccessId <string>"
  },
  {
    "path": "/3dp-open/order/getModelDeliveryPrice",
    "method": "POST",
    "title": "获取模型交期价格",
    "category": "3DP业务",
    "description": "根据模型、材料、交期获取价格",
    "contentType": "json",
    "fields": [
      {
        "path": "modelPriceParamList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "计算材料价格参数",
        "confidence": "high"
      },
      {
        "path": "materialAccessId",
        "type": "string",
        "required": true,
        "description": "材料业务id",
        "confidence": "high"
      },
      {
        "path": "contrastColorAccessId",
        "type": "string",
        "required": true,
        "description": "材料对应颜色 accessId",
        "confidence": "high"
      },
      {
        "path": "materialDeliveryAccessId",
        "type": "string",
        "required": true,
        "description": "交期业务id",
        "confidence": "high"
      },
      {
        "path": "modelAccessId",
        "type": "string",
        "required": true,
        "description": "模型业务id",
        "confidence": "high"
      },
      {
        "path": "modelCount",
        "type": "integer",
        "required": true,
        "description": "商品数量",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList",
        "type": "object",
        "required": true,
        "description": "表处参数",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftAccessId",
        "type": "string",
        "required": true,
        "description": "工艺业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftCode",
        "type": "string",
        "required": true,
        "description": "工艺编码",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftName",
        "type": "string",
        "required": true,
        "description": "工艺名称",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftOptionAccessId",
        "type": "string",
        "required": true,
        "description": "表面选项业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.parameterName",
        "type": "string",
        "required": true,
        "description": "属性名称",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftAttributeAccessId",
        "type": "string",
        "required": true,
        "description": "工艺属性业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.parameterCode",
        "type": "string",
        "required": true,
        "description": "属性编码",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.parameterValue",
        "type": "string",
        "required": true,
        "description": "属性值",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.fatherAttributeAccessId",
        "type": "string",
        "required": false,
        "description": "父工艺属性业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.enterType",
        "type": "integer",
        "required": true,
        "description": "录入方式0:默认1:用戶上传2:用戶输入",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.customerCraft",
        "type": "string",
        "required": true,
        "description": "客戶输入 字段,enterType=2时,作为 镶嵌螺母数量",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.fileSystemAccessId",
        "type": "string",
        "required": false,
        "description": "镶嵌螺母文件id",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/获取模型交期价格.md",
    "example": "jlc-openapi-cli /3dp-open/order/getModelDeliveryPrice --modelPriceParamList <array> --materialAccessId <string> --contrastColorAccessId <string> --materialDeliveryAccessId <string> --modelAccessId <string> --modelCount <integer>"
  },
  {
    "path": "/3dp-open/order/getOPAllEnableMaterialManual",
    "method": "POST",
    "title": "查询材料介绍",
    "category": "3DP业务",
    "description": "查询所有已启⽤的材料介绍",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/3DP业务/查询材料介绍.md",
    "example": "jlc-openapi-cli /3dp-open/order/getOPAllEnableMaterialManual"
  },
  {
    "path": "/3dp-open/order/getOPProcessProgress",
    "method": "POST",
    "title": "获取生产进度信息接口",
    "category": "3DP业务",
    "description": "获取生产进度信息接口",
    "contentType": "json",
    "fields": [
      {
        "path": "orderAccessIdList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "订单accessId",
        "confidence": "high"
      },
      {
        "path": "itemAccessIdList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "商品accessId",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/获取生产进度信息接口.md",
    "example": "jlc-openapi-cli /3dp-open/order/getOPProcessProgress"
  },
  {
    "path": "/3dp-open/order/getOrderDetailByOrderAccessId",
    "method": "POST",
    "title": "查询订单详情",
    "category": "3DP业务",
    "description": "根据订单id查询订单详情",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/3DP业务/查询订单详情.md",
    "example": "jlc-openapi-cli /3dp-open/order/getOrderDetailByOrderAccessId"
  },
  {
    "path": "/3dp-open/order/getOrderInfoListByPage",
    "method": "POST",
    "title": "分页查询用户的订单信息",
    "category": "3DP业务",
    "description": "分页查询用户的订单信息",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前⻚码",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": false,
        "description": "每⻚行数",
        "confidence": "high"
      },
      {
        "path": "fileNameOrOrderCode",
        "type": "string",
        "required": false,
        "description": "文件名称/订单编号/客戶自定义编号",
        "confidence": "high"
      },
      {
        "path": "orderStatus",
        "type": "integer",
        "required": false,
        "description": "订单状态(0:已取消,1:待审核,2:待付款,3:支付完成,4:生 产中,5:已发货) -1:表示查询所有的数据 但不包括已取消 的数据",
        "confidence": "high"
      },
      {
        "path": "startDate",
        "type": "string",
        "required": false,
        "description": "开始日期",
        "confidence": "high"
      },
      {
        "path": "endDate",
        "type": "string",
        "required": false,
        "description": "结束日期",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/分页查询用户的订单信息.md",
    "example": "jlc-openapi-cli /3dp-open/order/getOrderInfoListByPage --pageNum <integer>"
  },
  {
    "path": "/3dp-open/order/getOrderProduceProgress",
    "method": "POST",
    "title": "查询生产进度",
    "category": "3DP业务",
    "description": "根据订单查询生产进度",
    "contentType": "json",
    "fields": [
      {
        "path": "requestVO",
        "type": "object",
        "required": true,
        "description": "请求参数",
        "confidence": "high"
      },
      {
        "path": "requestVO.itemAccessId",
        "type": "string",
        "required": true,
        "description": "商品业务id",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/查询生产进度.md",
    "example": "jlc-openapi-cli /3dp-open/order/getOrderProduceProgress --requestVO <object> --requestVO.itemAccessId <string>"
  },
  {
    "path": "/3dp-open/order/queryModelAnalysisResult",
    "method": "POST",
    "title": "查询模型解析状态",
    "category": "3DP业务",
    "description": "查询模型是否解析完成",
    "contentType": "json",
    "fields": [
      {
        "path": "modelAccessId",
        "type": "string",
        "required": true,
        "description": "模型业务id",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/查询模型解析状态.md",
    "example": "jlc-openapi-cli /3dp-open/order/queryModelAnalysisResult --modelAccessId <string>"
  },
  {
    "path": "/3dp-open/order/returnOrder",
    "method": "POST",
    "title": "返单接口",
    "category": "3DP业务",
    "description": "订单返单接口",
    "contentType": "json",
    "fields": [
      {
        "path": "orderAccessId",
        "type": "string",
        "required": true,
        "description": "原订单业务id",
        "confidence": "high"
      },
      {
        "path": "returnOrderItems",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "返单商品信息",
        "confidence": "high"
      },
      {
        "path": "returnOrderItems.itemAccessId",
        "type": "string",
        "required": true,
        "description": "商品业务id",
        "confidence": "high"
      },
      {
        "path": "returnOrderItems.itemCount",
        "type": "integer",
        "required": true,
        "description": "返单数量",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/返单接口.md",
    "example": "jlc-openapi-cli /3dp-open/order/returnOrder --orderAccessId <string> --returnOrderItems <array> --returnOrderItems.itemAccessId <string> --returnOrderItems.itemCount <integer>"
  },
  {
    "path": "/3dp-open/order/submitOrder",
    "method": "POST",
    "title": "提交订单",
    "category": "3DP业务",
    "description": "提交订单",
    "contentType": "json",
    "fields": [
      {
        "path": "deliveryType",
        "type": "integer",
        "required": true,
        "description": "交期类型",
        "confidence": "high"
      },
      {
        "path": "modelPriceParamList",
        "type": "array",
        "items": "unknown",
        "required": true,
        "description": "商品集合",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan",
        "type": "object",
        "required": true,
        "description": "联系人信息",
        "confidence": "high"
      },
      {
        "path": "receiverInfo",
        "type": "object",
        "required": true,
        "description": "收货人信息",
        "confidence": "high"
      },
      {
        "path": "expressType",
        "type": "string",
        "required": true,
        "description": "快递方式",
        "confidence": "high"
      },
      {
        "path": "dispatchType",
        "type": "boolean",
        "required": false,
        "description": "发货方式",
        "confidence": "high"
      },
      {
        "path": "invoiceEmail",
        "type": "string",
        "required": false,
        "description": "客户开票邮箱",
        "confidence": "high"
      },
      {
        "path": "invoiceMethod",
        "type": "integer",
        "required": false,
        "description": "开票方式 0随货,1累计",
        "confidence": "high"
      },
      {
        "path": "invoiceCategory",
        "type": "integer",
        "required": false,
        "description": "发票类型 0普通发票,1专 用发票",
        "confidence": "high"
      },
      {
        "path": "invoiceType",
        "type": "string",
        "required": false,
        "description": "开票类型: VAT_ELEC_INVOICE=增值 税电子普通发票, SPECIAL_VAT_INVOICE= 增值税专用发票",
        "confidence": "high"
      },
      {
        "path": "receiptType",
        "type": "string",
        "required": false,
        "description": "收据类型:NONE(不需要 送货单和收据),ELEC(电子送 货单和收据),PAPER(纸质 送货单收据);结算系统选 择后返回给订单系统",
        "confidence": "high"
      },
      {
        "path": "vatCompanyName",
        "type": "string",
        "required": false,
        "description": "开票公司名称",
        "confidence": "high"
      },
      {
        "path": "confirmOrderType",
        "type": "string",
        "required": false,
        "description": "AUTO:自动扣款并确认订 单 CUSTOMER_CONFIRM: 客户自己确认",
        "confidence": "high"
      },
      {
        "path": "remark",
        "type": "string",
        "required": false,
        "description": "备注",
        "confidence": "high"
      },
      {
        "path": "packBoxType",
        "type": "integer",
        "required": false,
        "description": "打包盒类型 1:嘉立创盒子 2:空白盒子",
        "confidence": "high"
      },
      {
        "path": "modelPriceParamList.materialAccessId",
        "type": "string",
        "required": true,
        "description": "材料业务id",
        "confidence": "high"
      },
      {
        "path": "modelPriceParamList.contrastColorAccessId",
        "type": "string",
        "required": true,
        "description": "材料对应颜色accessId",
        "confidence": "high"
      },
      {
        "path": "modelPriceParamList.materialDeliveryAccessId",
        "type": "string",
        "required": true,
        "description": "交期业务id",
        "confidence": "high"
      },
      {
        "path": "modelPriceParamList.modelAccessId",
        "type": "string",
        "required": true,
        "description": "模型业务id",
        "confidence": "high"
      },
      {
        "path": "modelCount",
        "type": "integer",
        "required": true,
        "description": "商品数量",
        "confidence": "high"
      },
      {
        "path": "customerPersonalizeCode",
        "type": "string",
        "required": false,
        "description": "客户自定义编号 仅允 许字母、数字、短横线 (-)、下划线(_)及英文 句点(.),不包含特殊符 号或空格",
        "confidence": "high"
      },
      {
        "path": "productionBaseCode",
        "type": "string",
        "required": false,
        "description": "自选生产基地 code(sg_3dp:广东韶 关/js_3dp:江苏淮 安),不传则按系统规 则自动分配",
        "confidence": "high"
      },
      {
        "path": "productionBaseMismatchHandleType",
        "type": "integer",
        "required": false,
        "description": "生产基地不匹配处理方 式 1-错误提示 2-系统 自动分配; productionBaseCode 非空时必传",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "表面处理信息",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftAccessId",
        "type": "string",
        "required": true,
        "description": "工艺业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftCode",
        "type": "string",
        "required": true,
        "description": "工艺编码",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftName",
        "type": "string",
        "required": true,
        "description": "工艺名称",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftOptionAccessId",
        "type": "string",
        "required": true,
        "description": "表面选项业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.parameterName",
        "type": "string",
        "required": true,
        "description": "属性名称",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.craftAttributeAccessId",
        "type": "string",
        "required": true,
        "description": "工艺属性业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.parameterCode",
        "type": "string",
        "required": true,
        "description": "属性编码",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.parameterValue",
        "type": "string",
        "required": true,
        "description": "属性值",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.fatherAttributeAccessId",
        "type": "string",
        "required": false,
        "description": "父工艺属性业务id",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.enterType",
        "type": "integer",
        "required": false,
        "description": "录入方式",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.customerCraft",
        "type": "string",
        "required": false,
        "description": "客户输入 字段",
        "confidence": "high"
      },
      {
        "path": "surfaceTreatmentList.fileSystemAccessId",
        "type": "string",
        "required": false,
        "description": "表处文件id",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.orderLinkMan",
        "type": "string",
        "required": false,
        "description": "下单联系人姓名",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.orderLinkPhone",
        "type": "string",
        "required": false,
        "description": "下单联系人电话",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.techLinkMan",
        "type": "string",
        "required": false,
        "description": "技术联系人姓名",
        "confidence": "high"
      },
      {
        "path": "orderLinkMan.techLinkPhone",
        "type": "string",
        "required": false,
        "description": "技术联系人电话",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.province",
        "type": "string",
        "required": false,
        "description": "收货人省份",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.provinceCode",
        "type": "string",
        "required": false,
        "description": "收货人省份编码",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.city",
        "type": "string",
        "required": false,
        "description": "收货人城市",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.cityCode",
        "type": "string",
        "required": false,
        "description": "收货人城市编码",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.area",
        "type": "string",
        "required": false,
        "description": "收货人地区",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.areaCode",
        "type": "string",
        "required": false,
        "description": "收货人地区编码",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.districtName",
        "type": "string",
        "required": false,
        "description": "四级地址",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.districtCode",
        "type": "string",
        "required": false,
        "description": "四级地址编码",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.receiveAddress",
        "type": "string",
        "required": false,
        "description": "收货人详细地址",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.receiverName",
        "type": "string",
        "required": false,
        "description": "收货人姓名",
        "confidence": "high"
      },
      {
        "path": "receiverInfo.receiverPhone",
        "type": "string",
        "required": false,
        "description": "收货人电话",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/提交订单.md",
    "example": "jlc-openapi-cli /3dp-open/order/submitOrder --deliveryType <integer> --modelPriceParamList <array> --orderLinkMan <object> --receiverInfo <object> --expressType <string> --modelPriceParamList.materialAccessId <string>"
  },
  {
    "path": "/3dp-open/order/uploadModelFile",
    "method": "POST",
    "title": "上传模型文件接口",
    "category": "3DP业务",
    "description": "上传3D模型文件接口",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "模型文件,上传stl,stp,step,obj,3mf类型的文件,全彩 模型可上传压缩包rar,zip格式",
        "confidence": "high"
      },
      {
        "path": "meta",
        "type": "string",
        "required": false,
        "description": "值设置为{}, 非sdk接入时,用作生成签名使用",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/上传模型文件接口.md",
    "example": "jlc-openapi-cli /3dp-open/order/uploadModelFile --file <path>"
  },
  {
    "path": "/3dp-open/order/uploadNutFile",
    "method": "POST",
    "title": "上传镶嵌螺母文件",
    "category": "3DP业务",
    "description": "上传镶嵌螺母文件",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "图纸文件,只能上传png,pdf类型的文件",
        "confidence": "high"
      },
      {
        "path": "meta",
        "type": "string",
        "required": false,
        "description": "值设置为{}, 非sdk接入时,用作生成签名使用",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/3DP业务/上传镶嵌螺母文件.md",
    "example": "jlc-openapi-cli /3dp-open/order/uploadNutFile --file <path>"
  },
  {
    "path": "/lcsc/openapi/bom/result",
    "method": "POST",
    "title": "查询BOM配单结果",
    "category": "元器件&MRO",
    "description": "查询BOM配单结果",
    "contentType": "json",
    "fields": [
      {
        "path": "bomUuid",
        "type": "string",
        "required": true,
        "description": "提交配单返回的 bomUuid",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/查询BOM配单结果.md",
    "example": "jlc-openapi-cli /lcsc/openapi/bom/result --bomUuid <string>"
  },
  {
    "path": "/lcsc/openapi/bom/search",
    "method": "POST",
    "title": "型号批量搜索",
    "category": "元器件&MRO",
    "description": "型号批量搜索",
    "contentType": "json",
    "fields": [
      {
        "path": "querys",
        "type": "array",
        "items": "string",
        "required": true,
        "description": "型号列表",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/型号批量搜索.md",
    "example": "jlc-openapi-cli /lcsc/openapi/bom/search --querys <array>"
  },
  {
    "path": "/lcsc/openapi/bom/submit",
    "method": "POST",
    "title": "提交 BOM 配单",
    "category": "元器件&MRO",
    "description": "提交 BOM 配单",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "BOM文件",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/提交 BOM 配单.md",
    "example": "jlc-openapi-cli /lcsc/openapi/bom/submit --file <path>"
  },
  {
    "path": "/lcsc/openapi/enquiry/create",
    "method": "POST",
    "title": "创建询价单",
    "category": "元器件&MRO",
    "description": "创建询价单",
    "contentType": "json",
    "fields": [
      {
        "path": "productCode",
        "type": "string",
        "required": true,
        "description": "商品编号(与 productId二选 一)",
        "confidence": "high"
      },
      {
        "path": "productId",
        "type": "integer",
        "required": false,
        "description": "商品ID (productCode 为空时按 productId匹 配)",
        "confidence": "high"
      },
      {
        "path": "expectNumber",
        "type": "integer",
        "required": true,
        "description": "需求数量",
        "confidence": "high"
      },
      {
        "path": "expectPrice",
        "type": "number",
        "required": false,
        "description": "期望价格",
        "confidence": "high"
      },
      {
        "path": "OK",
        "type": "unknown",
        "required": false,
        "description": "OK",
        "confidence": "low"
      },
      {
        "path": "schema",
        "type": "unknown",
        "required": false,
        "description": "参数说明",
        "confidence": "low"
      },
      {
        "path": "code",
        "type": "integer",
        "required": false,
        "description": "状态码",
        "confidence": "high"
      },
      {
        "path": "message",
        "type": "unknown",
        "required": false,
        "description": "消息内容",
        "confidence": "low"
      },
      {
        "path": "data",
        "type": "unknown",
        "required": false,
        "description": "返回内容",
        "confidence": "low"
      },
      {
        "path": "beforeEnquiryCode",
        "type": "string",
        "required": false,
        "description": "询价单编号",
        "confidence": "high"
      },
      {
        "path": "successful",
        "type": "boolean",
        "required": false,
        "description": "",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/创建询价单.md",
    "example": "jlc-openapi-cli /lcsc/openapi/enquiry/create --productCode <string> --expectNumber <integer>"
  },
  {
    "path": "/lcsc/openapi/enquiry/info",
    "method": "POST",
    "title": "查询询价单",
    "category": "元器件&MRO",
    "description": "查询询价单",
    "contentType": "json",
    "fields": [
      {
        "path": "beforeEnquiryCode",
        "type": "string",
        "required": true,
        "description": "询价单编 号",
        "confidence": "high"
      },
      {
        "path": "OK",
        "type": "object",
        "required": false,
        "description": "OK",
        "confidence": "high"
      },
      {
        "path": "schema",
        "type": "unknown",
        "required": false,
        "description": "参数说明",
        "confidence": "low"
      },
      {
        "path": "code",
        "type": "integer",
        "required": false,
        "description": "状态码",
        "confidence": "high"
      },
      {
        "path": "message",
        "type": "string",
        "required": false,
        "description": "消息内容",
        "confidence": "high"
      },
      {
        "path": "data",
        "type": "object",
        "required": false,
        "description": "返回内容",
        "confidence": "high"
      },
      {
        "path": "productId",
        "type": "integer",
        "required": false,
        "description": "商品ID",
        "confidence": "high"
      },
      {
        "path": "productCode",
        "type": "string",
        "required": false,
        "description": "商品编号",
        "confidence": "high"
      },
      {
        "path": "productModel",
        "type": "string",
        "required": false,
        "description": "商品型号",
        "confidence": "high"
      },
      {
        "path": "brandName",
        "type": "string",
        "required": false,
        "description": "商品品牌",
        "confidence": "high"
      },
      {
        "path": "expectNumber",
        "type": "integer",
        "required": false,
        "description": "需求数量",
        "confidence": "high"
      },
      {
        "path": "expectPrice",
        "type": "number",
        "required": false,
        "description": "期望价格",
        "confidence": "high"
      },
      {
        "path": "dealStatus",
        "type": "string",
        "required": false,
        "description": "处理状态 querying(待报价)、 set_cost_price(已报价)、 closed(已关闭)、 ordered(已成单)",
        "confidence": "high"
      },
      {
        "path": "isNoStock",
        "type": "boolean",
        "required": false,
        "description": "是否无货(true-无货)",
        "confidence": "high"
      },
      {
        "path": "createTime",
        "type": "string",
        "required": false,
        "description": "询价时间(格式:yyyy-MM- dd HH:mm:ss)",
        "confidence": "high"
      },
      {
        "path": "enquiryQuoteTime",
        "type": "string",
        "required": false,
        "description": "报价时间(格式:yyyy-MM- dd HH:mm:ss)",
        "confidence": "high"
      },
      {
        "path": "finalPrice",
        "type": "number",
        "required": false,
        "description": "最终商品单价",
        "confidence": "high"
      },
      {
        "path": "validTime",
        "type": "string",
        "required": false,
        "description": "报价失效时间(格式:yyyy- MM-dd HH:mm:ss)",
        "confidence": "high"
      },
      {
        "path": "maxBuyNumber",
        "type": "integer",
        "required": false,
        "description": "最大供货量",
        "confidence": "high"
      },
      {
        "path": "minBuyNumber",
        "type": "integer",
        "required": false,
        "description": "最小起订量",
        "confidence": "high"
      },
      {
        "path": "weekdayArriveDay",
        "type": "integer",
        "required": false,
        "description": "工作日交货天数",
        "confidence": "high"
      },
      {
        "path": "successful",
        "type": "boolean",
        "required": false,
        "description": "",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/查询询价单.md",
    "example": "jlc-openapi-cli /lcsc/openapi/enquiry/info --beforeEnquiryCode <string>"
  },
  {
    "path": "/lcsc/openapi/enquiry/pre/order",
    "method": "POST",
    "title": "询价单预下单",
    "category": "元器件&MRO",
    "description": "询价单预下单",
    "contentType": "json",
    "fields": [
      {
        "path": "beforeEnquiryCode",
        "type": "string",
        "required": true,
        "description": "询价 单编 号",
        "confidence": "high"
      },
      {
        "path": "schema",
        "type": "unknown",
        "required": false,
        "description": "说明",
        "confidence": "low"
      },
      {
        "path": "OK",
        "type": "unknown",
        "required": false,
        "description": "OK",
        "confidence": "low"
      },
      {
        "path": "code",
        "type": "integer",
        "required": false,
        "description": "状态码",
        "confidence": "high"
      },
      {
        "path": "message",
        "type": "string",
        "required": false,
        "description": "消息内容",
        "confidence": "high"
      },
      {
        "path": "data",
        "type": "object",
        "required": false,
        "description": "返回内容",
        "confidence": "high"
      },
      {
        "path": "preOrderUrl",
        "type": "string",
        "required": false,
        "description": "预下单链接",
        "confidence": "high"
      },
      {
        "path": "validTime",
        "type": "string",
        "required": false,
        "description": "链接有效期",
        "confidence": "high"
      },
      {
        "path": "enquiryResult",
        "type": "object",
        "required": false,
        "description": "最新的报价结果",
        "confidence": "high"
      },
      {
        "path": "productId",
        "type": "integer",
        "required": false,
        "description": "商品ID",
        "confidence": "high"
      },
      {
        "path": "productCode",
        "type": "string",
        "required": false,
        "description": "商品编号",
        "confidence": "high"
      },
      {
        "path": "productModel",
        "type": "string",
        "required": false,
        "description": "商品型号",
        "confidence": "high"
      },
      {
        "path": "brandName",
        "type": "string",
        "required": false,
        "description": "商品品牌",
        "confidence": "high"
      },
      {
        "path": "expectNumber",
        "type": "integer",
        "required": false,
        "description": "需求数量",
        "confidence": "high"
      },
      {
        "path": "expectPrice",
        "type": "number",
        "required": false,
        "description": "期望价格",
        "confidence": "high"
      },
      {
        "path": "dealStatus",
        "type": "string",
        "required": false,
        "description": "处理状态",
        "confidence": "high"
      },
      {
        "path": "isNoStock",
        "type": "boolean",
        "required": false,
        "description": "是否无货",
        "confidence": "high"
      },
      {
        "path": "createTime",
        "type": "string",
        "required": false,
        "description": "询价时间(格式: yyyy-MM-dd HH:mm:ss)",
        "confidence": "high"
      },
      {
        "path": "enquiryQuoteTime",
        "type": "string",
        "required": false,
        "description": "报价时间(格式: yyyy-MM-dd HH:mm:ss)",
        "confidence": "high"
      },
      {
        "path": "finalPrice",
        "type": "number",
        "required": false,
        "description": "最终商品单价",
        "confidence": "high"
      },
      {
        "path": "maxBuyNumber",
        "type": "integer",
        "required": false,
        "description": "最大供货量",
        "confidence": "high"
      },
      {
        "path": "minBuyNumber",
        "type": "integer",
        "required": false,
        "description": "最小起订量",
        "confidence": "high"
      },
      {
        "path": "weekdayArriveDay",
        "type": "integer",
        "required": false,
        "description": "工作日交货天数",
        "confidence": "high"
      },
      {
        "path": "successful",
        "type": "boolean",
        "required": false,
        "description": "",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/询价单预下单.md",
    "example": "jlc-openapi-cli /lcsc/openapi/enquiry/pre/order --beforeEnquiryCode <string>"
  },
  {
    "path": "/lcsc/openapi/order/detail",
    "method": "POST",
    "title": "立创商城-订单详情接口",
    "category": "元器件&MRO",
    "description": "立创商城-订单详情接口",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/元器件&MRO/立创商城-订单详情接口.md",
    "example": "jlc-openapi-cli /lcsc/openapi/order/detail"
  },
  {
    "path": "/lcsc/openapi/order/list",
    "method": "POST",
    "title": "立创商城-订单列表查询",
    "category": "元器件&MRO",
    "description": "立创商城-订单列表查询，每次查询时间段不能超过90天",
    "contentType": "json",
    "fields": [
      {
        "path": "currPage",
        "type": "integer",
        "required": false,
        "description": "当前页,默认1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": false,
        "description": "数据条数,默 认10条,每 页最多100 条",
        "confidence": "high"
      },
      {
        "path": "startCreateTime",
        "type": "string",
        "required": true,
        "description": "起始创建时间 yyyy-MM-dd HH:mm:ss",
        "confidence": "high"
      },
      {
        "path": "endCreateTime",
        "type": "string",
        "required": true,
        "description": "截止创建时间 yyyy-MM-dd HH:mm:ss",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/立创商城-订单列表查询.md",
    "example": "jlc-openapi-cli /lcsc/openapi/order/list --startCreateTime <string> --endCreateTime <string>"
  },
  {
    "path": "/lcsc/openapi/order/pre/order",
    "method": "POST",
    "title": "现货预下单",
    "category": "元器件&MRO",
    "description": "现货预下单",
    "contentType": "json",
    "fields": [
      {
        "path": "productList",
        "type": "array",
        "items": "object",
        "required": true,
        "description": "商品列表",
        "confidence": "high"
      },
      {
        "path": "productId",
        "type": "integer",
        "required": true,
        "description": "商品ID(与 productCode 二选一;两者 都传时以 productId为 准)",
        "confidence": "high"
      },
      {
        "path": "productCode",
        "type": "string",
        "required": false,
        "description": "商品编号(与 productId二 选一;仅传 productCode 时后端转换为 productId)",
        "confidence": "high"
      },
      {
        "path": "OK",
        "type": "unknown",
        "required": false,
        "description": "OK",
        "confidence": "low"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/现货预下单.md",
    "example": "jlc-openapi-cli /lcsc/openapi/order/pre/order --productList <array> --productId <integer>"
  },
  {
    "path": "/lcsc/openapi/order/progress",
    "method": "POST",
    "title": "立创商城-订单物流查询",
    "category": "元器件&MRO",
    "description": "立创商城-订单物流查询",
    "contentType": "json",
    "fields": [],
    "strict": false,
    "source": "api-docs/元器件&MRO/立创商城-订单物流查询.md",
    "example": "jlc-openapi-cli /lcsc/openapi/order/progress"
  },
  {
    "path": "/lcsc/openapi/product/get/price/by/code",
    "method": "POST",
    "title": "立创商城-商品价格查询",
    "category": "元器件&MRO",
    "description": "立创商城-商品价格查询",
    "contentType": "json",
    "fields": [
      {
        "path": "openPubPriceReqVO",
        "type": "object",
        "required": true,
        "description": "OpenPubPriceReqVO",
        "confidence": "high"
      },
      {
        "path": "productCodeList",
        "type": "array",
        "items": "string",
        "required": false,
        "description": "商品编号集合",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/立创商城-商品价格查询.md",
    "example": "jlc-openapi-cli /lcsc/openapi/product/get/price/by/code --openPubPriceReqVO <object>"
  },
  {
    "path": "/lcsc/openapi/product/search/global",
    "method": "POST",
    "title": "立创商城-商品信息查询",
    "category": "元器件&MRO",
    "description": "立创商城-商品信息查询",
    "contentType": "json",
    "fields": [
      {
        "path": "keyword",
        "type": "string",
        "required": false,
        "description": "搜索关键字",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/立创商城-商品信息查询.md",
    "example": "jlc-openapi-cli /lcsc/openapi/product/search/global"
  },
  {
    "path": "/lcsc/openapi/sku/product/basic",
    "method": "POST",
    "title": "立创商城-商品基础信息查询",
    "category": "元器件&MRO",
    "description": "立创商城-商品基础信息查询",
    "contentType": "json",
    "fields": [
      {
        "path": "productId",
        "type": "integer",
        "required": true,
        "description": "商品 编号 id",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/立创商城-商品基础信息查询.md",
    "example": "jlc-openapi-cli /lcsc/openapi/sku/product/basic --productId <integer>"
  },
  {
    "path": "/lcsc/openapi/stock/select/all/stock/by/id",
    "method": "POST",
    "title": "立创商城-商品库存查询",
    "category": "元器件&MRO",
    "description": "立创商城-商品库存查询",
    "contentType": "json",
    "fields": [
      {
        "path": "productCodeList",
        "type": "array",
        "items": "string",
        "required": false,
        "description": "商品编号集合",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/元器件&MRO/立创商城-商品库存查询.md",
    "example": "jlc-openapi-cli /lcsc/openapi/stock/select/all/stock/by/id"
  },
  {
    "path": "/open/api/saas/erp/file/directoryList",
    "method": "POST",
    "title": "文件夹列表查询",
    "category": "嘉立创云ERP",
    "description": "\"查询指定文件夹（resourceId）下的子目录与文件列表，支持按名称模糊匹配、",
    "contentType": "json",
    "fields": [
      {
        "path": "resourceId",
        "type": "integer",
        "required": true,
        "description": "文件夹id(要查询哪个文件夹下的子目录/文件)",
        "confidence": "high"
      },
      {
        "path": "isDirectory",
        "type": "boolean",
        "required": false,
        "description": "是否只查文件夹:true-只查文件夹,false-只查文 件,不传-查全部",
        "confidence": "high"
      },
      {
        "path": "sortType",
        "type": "integer",
        "required": false,
        "description": "排序方式(1:名称升序,2名称降序,3创建时间升 序,4 创建时间降序,5 类型升序,6 类型降序 FileListSortTypeEnum)",
        "confidence": "high"
      },
      {
        "path": "name",
        "type": "string",
        "required": false,
        "description": "名称(模糊匹配)",
        "confidence": "high"
      },
      {
        "path": "tagId",
        "type": "integer",
        "required": false,
        "description": "标签id(不传则不过滤;传则文件只查绑定了该标 签的)",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/文件夹列表查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/file/directoryList --resourceId <integer>"
  },
  {
    "path": "/open/api/saas/erp/file/listFileTag",
    "method": "POST",
    "title": "文件标签列表查询",
    "category": "嘉立创云ERP",
    "description": "\"查询当前租户的文件标签字典，用于获知各接口的 fileTagIds 该填什么值：返回项的",
    "contentType": "json",
    "fields": [
      {
        "path": "tagType",
        "type": "integer",
        "required": false,
        "description": "文件tag类型:1-常规,2-BOM相关;不传查全 部",
        "confidence": "high"
      },
      {
        "path": "tagPurpose",
        "type": "integer",
        "required": false,
        "description": "标签用途:1-文件标签,2-交付物标签;不传查 全部",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/文件标签列表查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/file/listFileTag"
  },
  {
    "path": "/open/api/saas/erp/file/listTaskAttachmen",
    "method": "POST",
    "title": "任务附件列表查询",
    "category": "嘉立创云ERP",
    "description": "根据任务 bizKey 查询该任务下的附件列表。",
    "contentType": "json",
    "fields": [
      {
        "path": "taskBizKey",
        "type": "integer",
        "required": true,
        "description": "是 任务bizKey",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/任务附件列表查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/file/listTaskAttachmen --taskBizKey <integer>"
  },
  {
    "path": "/open/api/saas/erp/file/updateFileRelatedTag",
    "method": "POST",
    "title": "更新文件标签",
    "category": "嘉立创云ERP",
    "description": "\"按文件 id（resourceId）覆盖式更新该文件的「文件侧」标签。返回值为「被任务交",
    "contentType": "json",
    "fields": [
      {
        "path": "resourceId",
        "type": "integer",
        "required": true,
        "description": "文件id",
        "confidence": "high"
      },
      {
        "path": "fileTagIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "标签id列表(由getFileTagList查询得到);不 传或传空列表表示清空该文件「文件侧」标签, 被任务交付物承载的标签不会被删除",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/更新文件标签.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/file/updateFileRelatedTag --resourceId <integer>"
  },
  {
    "path": "/open/api/saas/erp/file/uploadDirectoryFile",
    "method": "POST",
    "title": "上传文件到指定文件夹",
    "category": "嘉立创云ERP",
    "description": "\"把文件上传到 fileDirectoryId 指定的文件夹，返回上传后的文件 id。若传入",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "fileDirectoryId",
        "type": "integer",
        "required": true,
        "description": "文件夹id",
        "confidence": "high"
      },
      {
        "path": "fileTagIdsi",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "标签id列表(由getFileTagList查询得到);不 传表示不打标签;传入时平台在上传成功后自动 补打标签",
        "confidence": "high"
      },
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "待上传的文件",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/上传文件到指定文件夹.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/file/uploadDirectoryFile --fileDirectoryId <integer> --file <path>"
  },
  {
    "path": "/open/api/saas/erp/file/uploadTaskAttachment",
    "method": "POST",
    "title": "上传任务附件",
    "category": "嘉立创云ERP",
    "description": "\"把文件上传到任务对应的附件文件夹，返回上传后的文件 id。若传入 fileTagIds，平",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "taskBizKey",
        "type": "integer",
        "required": true,
        "description": "任务id",
        "confidence": "high"
      },
      {
        "path": "fileTagIdsi",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "标签id列表(由getFileTagList查询得到);不 传表示不打标签;传入时平台在上传成功后自动 补打标签",
        "confidence": "high"
      },
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "待上传的文件",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/上传任务附件.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/file/uploadTaskAttachment --taskBizKey <integer> --file <path>"
  },
  {
    "path": "/open/api/saas/erp/file/uploadTmpFile",
    "method": "POST",
    "title": "上传临时文件",
    "category": "嘉立创云ERP",
    "description": "\"上传一个无目录归属的临时文件（不做目录解析与同名校验），返回文件 id；该",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "fileTagIdsi",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "标签id列表(由getFileTagList查询得到);不 传表示不打标签,标签随本次上传直接生效",
        "confidence": "high"
      },
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "待上传的文件",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/上传临时文件.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/file/uploadTmpFile --file <path>"
  },
  {
    "path": "/open/api/saas/erp/goods/batchAdd",
    "method": "POST",
    "title": "批量新增成品",
    "category": "嘉立创云ERP",
    "description": "批量新增成品",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "按固定模板格式",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/批量新增成品.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/goods/batchAdd --file <path>"
  },
  {
    "path": "/open/api/saas/erp/goods/config/tree",
    "method": "POST",
    "title": "成品目录树查询",
    "category": "嘉立创云ERP",
    "description": "\"查询成品目录树（商品分类，goodsConfigType=2），供成品库存菜单",
    "contentType": "json",
    "fields": [
      {
        "path": "goodsConfigType",
        "type": "integer",
        "required": false,
        "description": "类型(1-商品单位,2-商品分类),成品目录固定 传2",
        "confidence": "high"
      },
      {
        "path": "parentId",
        "type": "integer",
        "required": false,
        "description": "父级id(-1 表示一级;传入某节点bizKey 则查其 直接子级)",
        "confidence": "high"
      },
      {
        "path": "parentIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "父级id 集合(-1 表示一级;传入某节点bizKey 则 查其直接子级)",
        "confidence": "high"
      },
      {
        "path": "keyword",
        "type": "string",
        "required": false,
        "description": "关键字",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/成品目录树查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/goods/config/tree"
  },
  {
    "path": "/open/api/saas/erp/goods/page",
    "method": "POST",
    "title": "分页查询成品",
    "category": "嘉立创云ERP",
    "description": "分页查询成品",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "keyword",
        "type": "string",
        "required": false,
        "description": "关键字",
        "confidence": "high"
      },
      {
        "path": "goodsCodeList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "成品编号列表",
        "confidence": "high"
      },
      {
        "path": "goodsName",
        "type": "string",
        "required": false,
        "description": "成品名称",
        "confidence": "high"
      },
      {
        "path": "spec",
        "type": "string",
        "required": false,
        "description": "规格",
        "confidence": "high"
      },
      {
        "path": "remark",
        "type": "string",
        "required": false,
        "description": "备注",
        "confidence": "high"
      },
      {
        "path": "enableStatus",
        "type": "integer",
        "required": false,
        "description": "启用状态",
        "confidence": "high"
      },
      {
        "path": "warehouseId",
        "type": "integer",
        "required": false,
        "description": "仓库ID",
        "confidence": "high"
      },
      {
        "path": "productType",
        "type": "integer",
        "required": false,
        "description": "产品类型",
        "confidence": "high"
      },
      {
        "path": "createTimeStart",
        "type": "string",
        "required": false,
        "description": "创建时间开始",
        "confidence": "high"
      },
      {
        "path": "createTimeEnd",
        "type": "string",
        "required": false,
        "description": "创建时间结束",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/分页查询成品.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/goods/page --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/inStock/add",
    "method": "POST",
    "title": "新增入库单",
    "category": "嘉立创云ERP",
    "description": "新增入库单",
    "contentType": "json",
    "fields": [
      {
        "path": "inStockCode",
        "type": "string",
        "required": false,
        "description": "入库单号",
        "confidence": "high"
      },
      {
        "path": "inStockType",
        "type": "integer",
        "required": false,
        "description": "入库类型(1:采购单入库2:生产完工入 库3:成品盘盈4:原料盘盈5:退料单入 库6:成品其他入库7:物料其他入库8: 调拨单入库9:借调入库10:直接调整库 存入库11:成品销售退货12:发货单退 货)",
        "confidence": "high"
      },
      {
        "path": "inWarehouseId",
        "type": "integer",
        "required": false,
        "description": "入库仓库ID",
        "confidence": "high"
      },
      {
        "path": "inStockDate",
        "type": "string",
        "required": false,
        "description": "入库日期",
        "confidence": "high"
      },
      {
        "path": "remark",
        "type": "string",
        "required": false,
        "description": "备注",
        "confidence": "high"
      },
      {
        "path": "materialInStockDetailLis",
        "type": "unknown",
        "required": false,
        "description": "物料入库明细列表,详见 MaterialInStockDetailVO 对象",
        "confidence": "low"
      },
      {
        "path": "goodsInStockDetailList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "成品入库明细列表,详见 GoodsInStockDetailVO 对象",
        "confidence": "high"
      },
      {
        "path": "inStockFlag",
        "type": "boolean",
        "required": false,
        "description": "入库标识",
        "confidence": "high"
      },
      {
        "path": "materialId",
        "type": "integer",
        "required": false,
        "description": "否 物料ID",
        "confidence": "high"
      },
      {
        "path": "materialCode",
        "type": "string",
        "required": false,
        "description": "否 物料编号",
        "confidence": "high"
      },
      {
        "path": "materialName",
        "type": "string",
        "required": false,
        "description": "否 物料名称",
        "confidence": "high"
      },
      {
        "path": "materialCategoryId",
        "type": "integer",
        "required": false,
        "description": "否 物料分类ID",
        "confidence": "high"
      },
      {
        "path": "materialCategoryNam",
        "type": "unknown",
        "required": false,
        "description": "eString 否 物料分类名称",
        "confidence": "low"
      },
      {
        "path": "warehouseLocationId",
        "type": "integer",
        "required": false,
        "description": "否 库位ID",
        "confidence": "high"
      },
      {
        "path": "warehouseId",
        "type": "integer",
        "required": false,
        "description": "否 仓库ID",
        "confidence": "high"
      },
      {
        "path": "belongShelfId",
        "type": "integer",
        "required": false,
        "description": "否 货架ID",
        "confidence": "high"
      },
      {
        "path": "inStockNum",
        "type": "number",
        "required": false,
        "description": "否 入库数量",
        "confidence": "high"
      },
      {
        "path": "unitValue",
        "type": "string",
        "required": false,
        "description": "否 单位值",
        "confidence": "high"
      },
      {
        "path": "unitName",
        "type": "string",
        "required": false,
        "description": "否 单位名称",
        "confidence": "high"
      },
      {
        "path": "unitPrice",
        "type": "number",
        "required": false,
        "description": "否 单价",
        "confidence": "high"
      },
      {
        "path": "unitPriceWithTax",
        "type": "number",
        "required": false,
        "description": "否 含税单价",
        "confidence": "high"
      },
      {
        "path": "inStockPrice",
        "type": "number",
        "required": false,
        "description": "否 入库单价",
        "confidence": "high"
      },
      {
        "path": "inStockPriceWithTax",
        "type": "number",
        "required": false,
        "description": "否 含税入库单价",
        "confidence": "high"
      },
      {
        "path": "specification",
        "type": "string",
        "required": false,
        "description": "否 规格",
        "confidence": "high"
      },
      {
        "path": "brand",
        "type": "string",
        "required": false,
        "description": "否 品牌",
        "confidence": "high"
      },
      {
        "path": "supplierId",
        "type": "integer",
        "required": false,
        "description": "否 供应商ID",
        "confidence": "high"
      },
      {
        "path": "supplierName",
        "type": "string",
        "required": false,
        "description": "否 供应商名称",
        "confidence": "high"
      },
      {
        "path": "sortNumber",
        "type": "integer",
        "required": false,
        "description": "否 排序号",
        "confidence": "high"
      },
      {
        "path": "goodsId",
        "type": "integer",
        "required": false,
        "description": "否 成品ID",
        "confidence": "high"
      },
      {
        "path": "goodsCode",
        "type": "string",
        "required": false,
        "description": "否 成品编号",
        "confidence": "high"
      },
      {
        "path": "goodsName",
        "type": "string",
        "required": false,
        "description": "否 成品名称",
        "confidence": "high"
      },
      {
        "path": "warehouseLocation",
        "type": "object",
        "required": false,
        "description": "IdLong 否 库位ID",
        "confidence": "high"
      },
      {
        "path": "categoryName",
        "type": "string",
        "required": false,
        "description": "否 分类名称",
        "confidence": "high"
      },
      {
        "path": "spec",
        "type": "string",
        "required": false,
        "description": "否 规格",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/新增入库单.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/inStock/add"
  },
  {
    "path": "/open/api/saas/erp/inventory/inStock/inbound",
    "method": "POST",
    "title": "入库单列表-确认入库",
    "category": "嘉立创云ERP",
    "description": "入库单列表-确认入库",
    "contentType": "json",
    "fields": [
      {
        "path": "inStockId",
        "type": "integer",
        "required": true,
        "description": "是 入库单ID",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/入库单列表-确认入库.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/inStock/inbound --inStockId <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/inStock/page",
    "method": "POST",
    "title": "分页查询入库单",
    "category": "嘉立创云ERP",
    "description": "分页查询入库单",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "inStockCode",
        "type": "string",
        "required": false,
        "description": "入库单号",
        "confidence": "high"
      },
      {
        "path": "statusList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "状态列表",
        "confidence": "high"
      },
      {
        "path": "inStockDateBegin",
        "type": "string",
        "required": false,
        "description": "入库日期开始",
        "confidence": "high"
      },
      {
        "path": "inStockDateEnd",
        "type": "string",
        "required": false,
        "description": "入库日期结束",
        "confidence": "high"
      },
      {
        "path": "createTimeBegin",
        "type": "string",
        "required": false,
        "description": "创建时间开始",
        "confidence": "high"
      },
      {
        "path": "createTimeEnd",
        "type": "string",
        "required": false,
        "description": "创建时间结束",
        "confidence": "high"
      },
      {
        "path": "remark",
        "type": "string",
        "required": false,
        "description": "备注",
        "confidence": "high"
      },
      {
        "path": "goodsCode",
        "type": "string",
        "required": false,
        "description": "成品编号",
        "confidence": "high"
      },
      {
        "path": "goodsName",
        "type": "string",
        "required": false,
        "description": "成品名称",
        "confidence": "high"
      },
      {
        "path": "spec",
        "type": "string",
        "required": false,
        "description": "规格",
        "confidence": "high"
      },
      {
        "path": "materialName",
        "type": "string",
        "required": false,
        "description": "物料名称",
        "confidence": "high"
      },
      {
        "path": "materialCode",
        "type": "string",
        "required": false,
        "description": "物料编号",
        "confidence": "high"
      },
      {
        "path": "mallNumber",
        "type": "string",
        "required": false,
        "description": "商城编号",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/分页查询入库单.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/inStock/page --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/material/batchAdd",
    "method": "POST",
    "title": "批量新增物料",
    "category": "嘉立创云ERP",
    "description": "批量新增物料",
    "contentType": "multipart",
    "fileFields": [
      "file"
    ],
    "fields": [
      {
        "path": "file",
        "type": "file",
        "required": true,
        "description": "按固定模板格式",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/批量新增物料.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/material/batchAdd --file <path>"
  },
  {
    "path": "/open/api/saas/erp/inventory/material/page",
    "method": "POST",
    "title": "进销存-分页查询物料接口",
    "category": "嘉立创云ERP",
    "description": "进销存-分页查询物料接口",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "materialId",
        "type": "integer",
        "required": false,
        "description": "物料ID",
        "confidence": "high"
      },
      {
        "path": "keywordSearch",
        "type": "string",
        "required": false,
        "description": "关键字搜索",
        "confidence": "high"
      },
      {
        "path": "materialCode",
        "type": "string",
        "required": false,
        "description": "物料编号",
        "confidence": "high"
      },
      {
        "path": "mallNumber",
        "type": "string",
        "required": false,
        "description": "商城编号",
        "confidence": "high"
      },
      {
        "path": "materialName",
        "type": "string",
        "required": false,
        "description": "物料名称",
        "confidence": "high"
      },
      {
        "path": "specification",
        "type": "string",
        "required": false,
        "description": "规格",
        "confidence": "high"
      },
      {
        "path": "materialType",
        "type": "integer",
        "required": false,
        "description": "物料类型",
        "confidence": "high"
      },
      {
        "path": "materialTypeList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "物料类型列表",
        "confidence": "high"
      },
      {
        "path": "enableStatus",
        "type": "integer",
        "required": false,
        "description": "启用状态",
        "confidence": "high"
      },
      {
        "path": "encapsulation",
        "type": "string",
        "required": false,
        "description": "封装",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/进销存-分页查询物料接口.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/material/page --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/materialCategory/typeTreeV2",
    "method": "POST",
    "title": "物料类别类型树查询",
    "category": "嘉立创云ERP",
    "description": "\"查询物料类别类型树 V2（保留物料类型分组+物料类别树），供物料库存",
    "contentType": "json",
    "fields": [
      {
        "path": "enableStatus",
        "type": "boolean",
        "required": false,
        "description": "是否启用",
        "confidence": "high"
      },
      {
        "path": "materialType",
        "type": "integer",
        "required": false,
        "description": "物料类别的类型,1-基础物料;2-半成品",
        "confidence": "high"
      },
      {
        "path": "sortType",
        "type": "integer",
        "required": false,
        "description": "排序方式,1-名称升序;2-名称降序;3-创建时 间升序;4-创建时间降序",
        "confidence": "high"
      },
      {
        "path": "materialCategoryN",
        "type": "unknown",
        "required": false,
        "description": "物料类别名称",
        "confidence": "low"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/物料类别类型树查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/materialCategory/typeTreeV2"
  },
  {
    "path": "/open/api/saas/erp/inventory/outStock/add",
    "method": "POST",
    "title": "进销存-新增出库单",
    "category": "嘉立创云ERP",
    "description": "进销存-新增出库单",
    "contentType": "json",
    "fields": [
      {
        "path": "outStockCode",
        "type": "string",
        "required": false,
        "description": "出库单号",
        "confidence": "high"
      },
      {
        "path": "outStockType",
        "type": "integer",
        "required": false,
        "description": "出库类型",
        "confidence": "high"
      },
      {
        "path": "outWarehouseId",
        "type": "integer",
        "required": false,
        "description": "出库仓库ID",
        "confidence": "high"
      },
      {
        "path": "consignee",
        "type": "string",
        "required": false,
        "description": "收货人",
        "confidence": "high"
      },
      {
        "path": "outStockDate",
        "type": "string",
        "required": false,
        "description": "出库日期",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessId",
        "type": "integer",
        "required": false,
        "description": "关联业务ID",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessCode",
        "type": "string",
        "required": false,
        "description": "关联业务编号",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessType",
        "type": "integer",
        "required": false,
        "description": "关联业务类型(1:采购单2:生产订 单3:盘点单4:退料单5:销售单6: 调拨单7:借调出库单8:发货单)",
        "confidence": "high"
      },
      {
        "path": "customField",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "自定义字段,详见CustomFieldVO 对象",
        "confidence": "high"
      },
      {
        "path": "remark",
        "type": "string",
        "required": false,
        "description": "备注",
        "confidence": "high"
      },
      {
        "path": "materialOutStockDetailLis",
        "type": "unknown",
        "required": false,
        "description": "物料出库明细列表,详见 MaterialOutStockDetailVO 对象",
        "confidence": "low"
      },
      {
        "path": "goodsOutStockDetailList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "成品出库明细列表,详见 GoodsOutStockDetailVO 对象",
        "confidence": "high"
      },
      {
        "path": "fileList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "文件列表,详见FileCommonVO 对 象",
        "confidence": "high"
      },
      {
        "path": "templateTagIdList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "模板标签ID 列表",
        "confidence": "high"
      },
      {
        "path": "customField.fieldId",
        "type": "integer",
        "required": true,
        "description": "是 自定义字段ID",
        "confidence": "high"
      },
      {
        "path": "customField.fieldCode",
        "type": "string",
        "required": false,
        "description": "否 自定义字段编码",
        "confidence": "high"
      },
      {
        "path": "customField.fieldName",
        "type": "string",
        "required": false,
        "description": "否 自定义字段名称",
        "confidence": "high"
      },
      {
        "path": "customField.fieldType",
        "type": "integer",
        "required": true,
        "description": "是 自定义字段类型",
        "confidence": "high"
      },
      {
        "path": "customField.fieldValue",
        "type": "string",
        "required": false,
        "description": "否 自定义字段值",
        "confidence": "high"
      },
      {
        "path": "materialId",
        "type": "integer",
        "required": false,
        "description": "否 物料ID",
        "confidence": "high"
      },
      {
        "path": "materialCode",
        "type": "string",
        "required": false,
        "description": "否 物料编号",
        "confidence": "high"
      },
      {
        "path": "materialName",
        "type": "string",
        "required": false,
        "description": "否 物料名称",
        "confidence": "high"
      },
      {
        "path": "materialCategoryId",
        "type": "integer",
        "required": false,
        "description": "否 物料分类ID",
        "confidence": "high"
      },
      {
        "path": "materialCategoryNam",
        "type": "unknown",
        "required": false,
        "description": "eString 否 物料分类名称",
        "confidence": "low"
      },
      {
        "path": "warehouseLocationId",
        "type": "integer",
        "required": false,
        "description": "否 库位ID",
        "confidence": "high"
      },
      {
        "path": "warehouseId",
        "type": "integer",
        "required": false,
        "description": "否 仓库ID",
        "confidence": "high"
      },
      {
        "path": "belongShelfId",
        "type": "integer",
        "required": false,
        "description": "否 货架ID",
        "confidence": "high"
      },
      {
        "path": "outStockNum",
        "type": "number",
        "required": false,
        "description": "否 出库数量",
        "confidence": "high"
      },
      {
        "path": "stockNum",
        "type": "number",
        "required": false,
        "description": "否 库存数量",
        "confidence": "high"
      },
      {
        "path": "unitValue",
        "type": "string",
        "required": false,
        "description": "否 单位值",
        "confidence": "high"
      },
      {
        "path": "unitName",
        "type": "string",
        "required": false,
        "description": "否 单位名称",
        "confidence": "high"
      },
      {
        "path": "specification",
        "type": "string",
        "required": false,
        "description": "否 规格",
        "confidence": "high"
      },
      {
        "path": "brand",
        "type": "string",
        "required": false,
        "description": "否 品牌",
        "confidence": "high"
      },
      {
        "path": "supplierId",
        "type": "integer",
        "required": false,
        "description": "否 供应商ID",
        "confidence": "high"
      },
      {
        "path": "supplierName",
        "type": "string",
        "required": false,
        "description": "否 供应商名称",
        "confidence": "high"
      },
      {
        "path": "sortNumber",
        "type": "integer",
        "required": false,
        "description": "否 排序号",
        "confidence": "high"
      },
      {
        "path": "goodsId",
        "type": "unknown",
        "required": false,
        "description": "Long",
        "confidence": "low"
      },
      {
        "path": "goodsCode",
        "type": "unknown",
        "required": false,
        "description": "String",
        "confidence": "low"
      },
      {
        "path": "goodsName",
        "type": "unknown",
        "required": false,
        "description": "String",
        "confidence": "low"
      },
      {
        "path": "warehouseLocatio",
        "type": "unknown",
        "required": false,
        "description": "nIdLong",
        "confidence": "low"
      },
      {
        "path": "categoryName",
        "type": "unknown",
        "required": false,
        "description": "String",
        "confidence": "low"
      },
      {
        "path": "spec",
        "type": "unknown",
        "required": false,
        "description": "String",
        "confidence": "low"
      },
      {
        "path": "fileAccessId",
        "type": "string",
        "required": false,
        "description": "否 文件访问ID",
        "confidence": "high"
      },
      {
        "path": "fileName",
        "type": "string",
        "required": false,
        "description": "否 文件名",
        "confidence": "high"
      },
      {
        "path": "fileExtension",
        "type": "string",
        "required": false,
        "description": "否 文件扩展名",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/进销存-新增出库单.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/outStock/add --customField.fieldId <integer> --customField.fieldType <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/outStock/outbound",
    "method": "POST",
    "title": "出库单-确认出库",
    "category": "嘉立创云ERP",
    "description": "出库单-确认出库",
    "contentType": "json",
    "fields": [
      {
        "path": "outStockId",
        "type": "integer",
        "required": true,
        "description": "是 出库单ID",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/出库单-确认出库.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/outStock/outbound --outStockId <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/outStock/page",
    "method": "POST",
    "title": "分页查询出库单",
    "category": "嘉立创云ERP",
    "description": "分页查询出库单",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "keyword",
        "type": "string",
        "required": false,
        "description": "关键字",
        "confidence": "high"
      },
      {
        "path": "outStockCode",
        "type": "string",
        "required": false,
        "description": "出库单号",
        "confidence": "high"
      },
      {
        "path": "outStockTypes",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "出库类型列表",
        "confidence": "high"
      },
      {
        "path": "outWarehouseIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "出库仓库ID 列表",
        "confidence": "high"
      },
      {
        "path": "statusList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "状态列表",
        "confidence": "high"
      },
      {
        "path": "status",
        "type": "integer",
        "required": false,
        "description": "状态",
        "confidence": "high"
      },
      {
        "path": "consignee",
        "type": "string",
        "required": false,
        "description": "收货人",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessCode",
        "type": "string",
        "required": false,
        "description": "关联业务编号",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessId",
        "type": "integer",
        "required": false,
        "description": "关联业务ID",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessTypes",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "关联业务类型列表(1:采购单2:生产订单3:盘 点单4:退料单5:销售单6:调拨单7:借调出库 单8:发货单)",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessType",
        "type": "integer",
        "required": false,
        "description": "关联业务类型(1:采购单2:生产订单3:盘点单 4:退料单5:销售单6:调拨单7:借调出库单8: 发货单)",
        "confidence": "high"
      },
      {
        "path": "outStockPersonIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "出库人ID 列表",
        "confidence": "high"
      },
      {
        "path": "outStockDateBegin",
        "type": "string",
        "required": false,
        "description": "出库日期开始",
        "confidence": "high"
      },
      {
        "path": "outStockDateEnd",
        "type": "string",
        "required": false,
        "description": "出库日期结束",
        "confidence": "high"
      },
      {
        "path": "createTimeBegin",
        "type": "string",
        "required": false,
        "description": "创建时间开始",
        "confidence": "high"
      },
      {
        "path": "createTimeEnd",
        "type": "string",
        "required": false,
        "description": "创建时间结束",
        "confidence": "high"
      },
      {
        "path": "remark",
        "type": "string",
        "required": false,
        "description": "备注",
        "confidence": "high"
      },
      {
        "path": "bizKeys",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "业务主键列表",
        "confidence": "high"
      },
      {
        "path": "sortList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "排序集合,详见FieldSortVO 对象",
        "confidence": "high"
      },
      {
        "path": "orderByColumns",
        "type": "string",
        "required": false,
        "description": "排序列",
        "confidence": "high"
      },
      {
        "path": "menuId",
        "type": "integer",
        "required": false,
        "description": "菜单ID",
        "confidence": "high"
      },
      {
        "path": "fieldCategory",
        "type": "integer",
        "required": false,
        "description": "字段分类",
        "confidence": "high"
      },
      {
        "path": "goodsCode",
        "type": "string",
        "required": false,
        "description": "成品编号",
        "confidence": "high"
      },
      {
        "path": "goodsName",
        "type": "string",
        "required": false,
        "description": "成品名称",
        "confidence": "high"
      },
      {
        "path": "materialCode",
        "type": "string",
        "required": false,
        "description": "物料编号",
        "confidence": "high"
      },
      {
        "path": "materialName",
        "type": "string",
        "required": false,
        "description": "物料名称",
        "confidence": "high"
      },
      {
        "path": "specification",
        "type": "string",
        "required": false,
        "description": "规格",
        "confidence": "high"
      },
      {
        "path": "mallNumber",
        "type": "string",
        "required": false,
        "description": "商城编号",
        "confidence": "high"
      },
      {
        "path": "fieldCode",
        "type": "string",
        "required": true,
        "description": "是 属性编码",
        "confidence": "high"
      },
      {
        "path": "sortType",
        "type": "integer",
        "required": true,
        "description": "是 排序类型",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/分页查询出库单.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/outStock/page --pageNum <integer> --pageSize <integer> --fieldCode <string> --sortType <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/stock/goods/menuPage",
    "method": "POST",
    "title": "成品库存菜单分页查询",
    "category": "嘉立创云ERP",
    "description": "\"分 页 查 询 成 品 库 存 菜 单 ， 保 留 左 侧 商 品 分 类 分 组 筛 选",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页条数,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "categoryName",
        "type": "string",
        "required": false,
        "description": "商品分类名称",
        "confidence": "high"
      },
      {
        "path": "categoryValue",
        "type": "string",
        "required": false,
        "description": "商品分类值",
        "confidence": "high"
      },
      {
        "path": "categoryValues",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "商品分类值集合(目录树筛选:前端拍平所选节 点及其子孙的categoryValue 传入)",
        "confidence": "high"
      },
      {
        "path": "keyWordSearch",
        "type": "string",
        "required": false,
        "description": "关键字查询",
        "confidence": "high"
      },
      {
        "path": "goodsCode",
        "type": "string",
        "required": false,
        "description": "商品编号",
        "confidence": "high"
      },
      {
        "path": "goodsName",
        "type": "string",
        "required": false,
        "description": "商品名称",
        "confidence": "high"
      },
      {
        "path": "spec",
        "type": "string",
        "required": false,
        "description": "规格型号",
        "confidence": "high"
      },
      {
        "path": "unitName",
        "type": "string",
        "required": false,
        "description": "单位名称",
        "confidence": "high"
      },
      {
        "path": "warehouseId",
        "type": "integer",
        "required": false,
        "description": "仓库id",
        "confidence": "high"
      },
      {
        "path": "shelfId",
        "type": "integer",
        "required": false,
        "description": "货架id",
        "confidence": "high"
      },
      {
        "path": "warehouseLocation",
        "type": "object",
        "required": false,
        "description": "库位id",
        "confidence": "high"
      },
      {
        "path": "stockQueryType",
        "type": "integer",
        "required": false,
        "description": "库存查询类型",
        "confidence": "high"
      },
      {
        "path": "biggerThanZero",
        "type": "boolean",
        "required": false,
        "description": "库存是否大于0",
        "confidence": "high"
      },
      {
        "path": "stockNumStatus",
        "type": "integer",
        "required": false,
        "description": "库存数量1 有库存2 已达预警仅menuPage 使 用",
        "confidence": "high"
      },
      {
        "path": "sortList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "排序集合,详见FieldSortVO 对象",
        "confidence": "high"
      },
      {
        "path": "menuId",
        "type": "integer",
        "required": false,
        "description": "菜单id",
        "confidence": "high"
      },
      {
        "path": "fieldCategory",
        "type": "integer",
        "required": false,
        "description": "自定义字段归属类型",
        "confidence": "high"
      },
      {
        "path": "bizKeys",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "选择导出",
        "confidence": "high"
      },
      {
        "path": "warehouseLocation.fieldCode",
        "type": "string",
        "required": true,
        "description": "是 属性编码",
        "confidence": "high"
      },
      {
        "path": "warehouseLocation.sortType",
        "type": "integer",
        "required": true,
        "description": "是 排序类型",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/成品库存菜单分页查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/stock/goods/menuPage --pageNum <integer> --pageSize <integer> --warehouseLocation.fieldCode <string> --warehouseLocation.sortType <integer>"
  },
  {
    "path": "/open/api/saas/erp/inventory/stock/material/menuPage",
    "method": "POST",
    "title": "物料库存菜单分页查询",
    "category": "嘉立创云ERP",
    "description": "分页查询物料库存菜单，保留左侧物料类别分组筛选和关键字查询能力",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页条数,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "materialCategoryId",
        "type": "integer",
        "required": false,
        "description": "物料类别id(左侧分组筛选)",
        "confidence": "high"
      },
      {
        "path": "materialCategoryIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "物料类别ids",
        "confidence": "high"
      },
      {
        "path": "materialCategoryName",
        "type": "string",
        "required": false,
        "description": "物料类别名称",
        "confidence": "high"
      },
      {
        "path": "keyWordSearch",
        "type": "string",
        "required": false,
        "description": "关键字查询",
        "confidence": "high"
      },
      {
        "path": "materialCode",
        "type": "string",
        "required": false,
        "description": "物料编码",
        "confidence": "high"
      },
      {
        "path": "mallNumber",
        "type": "string",
        "required": false,
        "description": "自定义编号(商城编号)",
        "confidence": "high"
      },
      {
        "path": "materialName",
        "type": "string",
        "required": false,
        "description": "物料名称",
        "confidence": "high"
      },
      {
        "path": "specification",
        "type": "string",
        "required": false,
        "description": "规格",
        "confidence": "high"
      },
      {
        "path": "code",
        "type": "string",
        "required": false,
        "description": "物料编码或商城编码,模糊查询",
        "confidence": "high"
      },
      {
        "path": "materialId",
        "type": "integer",
        "required": false,
        "description": "物料id",
        "confidence": "high"
      },
      {
        "path": "materialIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "物料id 列表",
        "confidence": "high"
      },
      {
        "path": "materialType",
        "type": "integer",
        "required": false,
        "description": "物料类型,枚举:MaterialTypeEnum",
        "confidence": "high"
      },
      {
        "path": "brand",
        "type": "string",
        "required": false,
        "description": "品牌",
        "confidence": "high"
      },
      {
        "path": "encapsulation",
        "type": "string",
        "required": false,
        "description": "封装",
        "confidence": "high"
      },
      {
        "path": "remark",
        "type": "string",
        "required": false,
        "description": "物料描述",
        "confidence": "high"
      },
      {
        "path": "unitName",
        "type": "string",
        "required": false,
        "description": "单位名称",
        "confidence": "high"
      },
      {
        "path": "warehouseId",
        "type": "integer",
        "required": false,
        "description": "仓库Id",
        "confidence": "high"
      },
      {
        "path": "warehouseIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "多仓库ids(OR 语义,仓库树多选;非空时单 值warehouseId 被忽略)",
        "confidence": "high"
      },
      {
        "path": "shelfId",
        "type": "integer",
        "required": false,
        "description": "货架id",
        "confidence": "high"
      },
      {
        "path": "shelfIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "多货架ids(OR 语义,仓库树多选;服务端解 析为库位id)",
        "confidence": "high"
      },
      {
        "path": "warehouseLocationIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "库位ids",
        "confidence": "high"
      },
      {
        "path": "warehouseLocationNam",
        "type": "unknown",
        "required": false,
        "description": "库位名称",
        "confidence": "low"
      },
      {
        "path": "stockQueryType",
        "type": "integer",
        "required": false,
        "description": "库存查询类型",
        "confidence": "high"
      },
      {
        "path": "biggerThanZero",
        "type": "boolean",
        "required": false,
        "description": "只展示库存大于0",
        "confidence": "high"
      },
      {
        "path": "stockNumStatus",
        "type": "integer",
        "required": false,
        "description": "库存数量1 有库存2 已达预警3 已删除",
        "confidence": "high"
      },
      {
        "path": "inventoryWarningGe",
        "type": "integer",
        "required": false,
        "description": "库存预警大于等于",
        "confidence": "high"
      },
      {
        "path": "inventoryWarningLe",
        "type": "integer",
        "required": false,
        "description": "库存预警小于等于",
        "confidence": "high"
      },
      {
        "path": "pickSource",
        "type": "integer",
        "required": false,
        "description": "领料来源",
        "confidence": "high"
      },
      {
        "path": "sourceId",
        "type": "integer",
        "required": false,
        "description": "领料来源id",
        "confidence": "high"
      },
      {
        "path": "outStockType",
        "type": "integer",
        "required": false,
        "description": "出库类型",
        "confidence": "high"
      },
      {
        "path": "associatedBusinessId",
        "type": "integer",
        "required": false,
        "description": "关联单据id",
        "confidence": "high"
      },
      {
        "path": "detailBizKey",
        "type": "integer",
        "required": false,
        "description": "出库单详情id",
        "confidence": "high"
      },
      {
        "path": "bizKeys",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "id 列表,选择导出",
        "confidence": "high"
      },
      {
        "path": "autoFlag",
        "type": "boolean",
        "required": false,
        "description": "是否自动调用接口",
        "confidence": "high"
      },
      {
        "path": "sortList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "排序集合,详见FieldSortVO 对象",
        "confidence": "high"
      },
      {
        "path": "orderByColumns",
        "type": "string",
        "required": false,
        "description": "排序字段",
        "confidence": "high"
      },
      {
        "path": "menuId",
        "type": "integer",
        "required": false,
        "description": "菜单id",
        "confidence": "high"
      },
      {
        "path": "fieldCategory",
        "type": "integer",
        "required": false,
        "description": "自定义字段归属类型",
        "confidence": "high"
      },
      {
        "path": "fieldCode",
        "type": "string",
        "required": true,
        "description": "是 属性编码",
        "confidence": "high"
      },
      {
        "path": "sortType",
        "type": "integer",
        "required": true,
        "description": "是 排序类型",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/物料库存菜单分页查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/inventory/stock/material/menuPage --pageNum <integer> --pageSize <integer> --fieldCode <string> --sortType <integer>"
  },
  {
    "path": "/open/api/saas/erp/order/detail",
    "method": "POST",
    "title": "销售订单详情查询",
    "category": "嘉立创云ERP",
    "description": "销售订单详情查询",
    "contentType": "json",
    "fields": [
      {
        "path": "orderId",
        "type": "integer",
        "required": true,
        "description": "是 订单业务ID",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/销售订单详情查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/order/detail --orderId <integer>"
  },
  {
    "path": "/open/api/saas/erp/order/menuPage",
    "method": "POST",
    "title": "销售订单分页查询",
    "category": "嘉立创云ERP",
    "description": "销售订单分页查询",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "bizKey",
        "type": "integer",
        "required": false,
        "description": "订单业务ID",
        "confidence": "high"
      },
      {
        "path": "bizKeys",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "订单业务ID 集合",
        "confidence": "high"
      },
      {
        "path": "keywordSearch",
        "type": "string",
        "required": false,
        "description": "关键字搜索",
        "confidence": "high"
      },
      {
        "path": "orderCode",
        "type": "string",
        "required": false,
        "description": "订单编号",
        "confidence": "high"
      },
      {
        "path": "orderName",
        "type": "string",
        "required": false,
        "description": "订单名称",
        "confidence": "high"
      },
      {
        "path": "orderCycleList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "订单周期列表",
        "confidence": "high"
      },
      {
        "path": "goodsIdList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "商品ID 列表",
        "confidence": "high"
      },
      {
        "path": "goodsName",
        "type": "string",
        "required": false,
        "description": "商品名称",
        "confidence": "high"
      },
      {
        "path": "itemName",
        "type": "string",
        "required": false,
        "description": "成品/物料名称",
        "confidence": "high"
      },
      {
        "path": "customerIdList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "客户ID 列表",
        "confidence": "high"
      },
      {
        "path": "customerId",
        "type": "integer",
        "required": false,
        "description": "客户ID",
        "confidence": "high"
      },
      {
        "path": "customerName",
        "type": "string",
        "required": false,
        "description": "客户名称",
        "confidence": "high"
      },
      {
        "path": "orderAmountStart",
        "type": "number",
        "required": false,
        "description": "订单总金额(不含税)开始",
        "confidence": "high"
      },
      {
        "path": "orderAmountEnd",
        "type": "number",
        "required": false,
        "description": "订单总金额(不含税)结束",
        "confidence": "high"
      },
      {
        "path": "orderTaxAmountStart",
        "type": "number",
        "required": false,
        "description": "订单总税额开始",
        "confidence": "high"
      },
      {
        "path": "orderTaxAmountEnd",
        "type": "number",
        "required": false,
        "description": "订单总税额结束",
        "confidence": "high"
      },
      {
        "path": "totalAmountStart",
        "type": "number",
        "required": false,
        "description": "订单总金额(含税)开始",
        "confidence": "high"
      },
      {
        "path": "totalAmountEnd",
        "type": "number",
        "required": false,
        "description": "订单总金额(含税)结束",
        "confidence": "high"
      },
      {
        "path": "orderStatus",
        "type": "integer",
        "required": false,
        "description": "订单状态(1-待审批,2-已审批,3-下发研发, 4-研发中,5-研发完成,6-下发生产,7-生产 中,8-生产完成,9-通知发货,10-部分发货, 11-发货完成,12-已取消,13-审批不通过,14- 下采购单,15-采购完成)",
        "confidence": "high"
      },
      {
        "path": "orderStatusList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "订单状态列表(取值同orderStatus)",
        "confidence": "high"
      },
      {
        "path": "paymentStatus",
        "type": "integer",
        "required": false,
        "description": "收款状态",
        "confidence": "high"
      },
      {
        "path": "paymentStatusList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "收款状态列表",
        "confidence": "high"
      },
      {
        "path": "invoiceStatusList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "开票状态列表",
        "confidence": "high"
      },
      {
        "path": "createTimeStart",
        "type": "string",
        "required": false,
        "description": "创建时间开始",
        "confidence": "high"
      },
      {
        "path": "createTimeEnd",
        "type": "string",
        "required": false,
        "description": "创建时间结束",
        "confidence": "high"
      },
      {
        "path": "orderManagerName",
        "type": "string",
        "required": false,
        "description": "销售负责人",
        "confidence": "high"
      },
      {
        "path": "sortList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "排序集合,详见FieldSortVO 对象",
        "confidence": "high"
      },
      {
        "path": "fieldCategory",
        "type": "integer",
        "required": false,
        "description": "自定义字段归属类型",
        "confidence": "high"
      },
      {
        "path": "fieldCode",
        "type": "string",
        "required": true,
        "description": "是 属性编码",
        "confidence": "high"
      },
      {
        "path": "sortType",
        "type": "integer",
        "required": true,
        "description": "是 排序类型",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/销售订单分页查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/order/menuPage --pageNum <integer> --pageSize <integer> --fieldCode <string> --sortType <integer>"
  },
  {
    "path": "/open/api/saas/erp/productionOrder/detail",
    "method": "POST",
    "title": "生产订单详情查询",
    "category": "嘉立创云ERP",
    "description": "生产订单详情查询",
    "contentType": "json",
    "fields": [
      {
        "path": "productionOrderId",
        "type": "integer",
        "required": true,
        "description": "是 订单业务ID",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/生产订单详情查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/productionOrder/detail --productionOrderId <integer>"
  },
  {
    "path": "/open/api/saas/erp/productionOrder/menuPage",
    "method": "POST",
    "title": "生产订单分页查询",
    "category": "嘉立创云ERP",
    "description": "生产订单分页查询",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "productionOrderCode",
        "type": "string",
        "required": false,
        "description": "生产订单编号",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/生产订单分页查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/productionOrder/menuPage --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/project/memberDetailInProject",
    "method": "POST",
    "title": "项目成员详情查询",
    "category": "嘉立创云ERP",
    "description": "根据项目 id 查询项目成员详情，包含成员总数与成员列表",
    "contentType": "json",
    "fields": [
      {
        "path": "projectId",
        "type": "integer",
        "required": true,
        "description": "是 项目id",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/项目成员详情查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/project/memberDetailInProject --projectId <integer>"
  },
  {
    "path": "/open/api/saas/erp/project/page",
    "method": "POST",
    "title": "项目-分页查询项目列表",
    "category": "嘉立创云ERP",
    "description": "项目-分页查询项目列表",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "projectCode",
        "type": "string",
        "required": false,
        "description": "项目编号",
        "confidence": "high"
      },
      {
        "path": "projectName",
        "type": "string",
        "required": false,
        "description": "项目名称",
        "confidence": "high"
      },
      {
        "path": "keyword",
        "type": "string",
        "required": false,
        "description": "关键字",
        "confidence": "high"
      },
      {
        "path": "projectStatus",
        "type": "integer",
        "required": false,
        "description": "项目状态(1-待启动,2-研发中,3-已结项,4- 已取消,5-待排期)",
        "confidence": "high"
      },
      {
        "path": "projectType",
        "type": "integer",
        "required": false,
        "description": "项目类型",
        "confidence": "high"
      },
      {
        "path": "projectManagerId",
        "type": "integer",
        "required": false,
        "description": "项目负责人id",
        "confidence": "high"
      },
      {
        "path": "projectStartTimeBegi",
        "type": "unknown",
        "required": false,
        "description": "项目开始时间- 开始,格式yyyy-MM-dd HH:mm:ss",
        "confidence": "low"
      },
      {
        "path": "projectStartTimeEnd",
        "type": "string",
        "required": false,
        "description": "项目开始时间- 结束,格式yyyy-MM-dd HH:mm:ss",
        "confidence": "high"
      },
      {
        "path": "delayFlag",
        "type": "boolean",
        "required": false,
        "description": "是否延期",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/项目-分页查询项目列表.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/project/page --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/project/updateStatus",
    "method": "POST",
    "title": "项目状态变更",
    "category": "嘉立创云ERP",
    "description": "\"把指定项目切换到目标状态。projectStatus 为系统固定枚举：1-待启动、2-研发中、",
    "contentType": "json",
    "fields": [
      {
        "path": "projectId",
        "type": "integer",
        "required": true,
        "description": "项目id",
        "confidence": "high"
      },
      {
        "path": "projectStatus",
        "type": "integer",
        "required": true,
        "description": "项目状态。系统固定枚举:1-待启动,2-研发 中,3-已结项,4-已取消,5-待排期;传入其他 值会被拒绝",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/项目状态变更.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/project/updateStatus --projectId <integer> --projectStatus <integer>"
  },
  {
    "path": "/open/api/saas/erp/projectTask/add",
    "method": "POST",
    "title": "创建项目任务",
    "category": "嘉立创云ERP",
    "description": "创建项目任务",
    "contentType": "json",
    "fields": [
      {
        "path": "projectId",
        "type": "integer",
        "required": false,
        "description": "项目id",
        "confidence": "high"
      },
      {
        "path": "taskName",
        "type": "string",
        "required": false,
        "description": "任务名称",
        "confidence": "high"
      },
      {
        "path": "taskType",
        "type": "integer",
        "required": false,
        "description": "任务类型,1:需求,2:bug,100:外部采购 订单",
        "confidence": "high"
      },
      {
        "path": "taskDesc",
        "type": "string",
        "required": false,
        "description": "任务描述",
        "confidence": "high"
      },
      {
        "path": "projectNodeId",
        "type": "integer",
        "required": false,
        "description": "节点id",
        "confidence": "high"
      },
      {
        "path": "taskStatus",
        "type": "integer",
        "required": false,
        "description": "任务状态。系统默认为1-未开始、4-进行中、2- 已完成、3-取消、5-任务封档;取值依赖租户字 典配置,租户可自定义任务状态(自定义取值从 101开始),合法取值以「状态取值查询」接口 返回为准",
        "confidence": "high"
      },
      {
        "path": "taskPriority",
        "type": "integer",
        "required": false,
        "description": "任务优先级,1:P0,2:P1,3:P2,4:P3",
        "confidence": "high"
      },
      {
        "path": "taskManagerIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "任务责任人id列表",
        "confidence": "high"
      },
      {
        "path": "expectedCompletionTime",
        "type": "string",
        "required": false,
        "description": "期望完成时间",
        "confidence": "high"
      },
      {
        "path": "expectStartTime",
        "type": "string",
        "required": false,
        "description": "任务预计开始时间",
        "confidence": "high"
      },
      {
        "path": "expectEndTime",
        "type": "string",
        "required": false,
        "description": "任务预计完成时间",
        "confidence": "high"
      },
      {
        "path": "actualStartTime",
        "type": "string",
        "required": false,
        "description": "实际开始时间",
        "confidence": "high"
      },
      {
        "path": "actualEndTime",
        "type": "string",
        "required": false,
        "description": "实际结束时间",
        "confidence": "high"
      },
      {
        "path": "arrangeRules",
        "type": "integer",
        "required": false,
        "description": "任务安排规则,1-按预计时间,2-按任务顺序",
        "confidence": "high"
      },
      {
        "path": "estimatedWorkingTime",
        "type": "number",
        "required": false,
        "description": "本任务预估工时",
        "confidence": "high"
      },
      {
        "path": "estimatedWorkingTimeUnit",
        "type": "integer",
        "required": false,
        "description": "本任务预估工时单位,1-小时,2-天",
        "confidence": "high"
      },
      {
        "path": "predecessorTaskId",
        "type": "integer",
        "required": false,
        "description": "前置任务id",
        "confidence": "high"
      },
      {
        "path": "parentTaskId",
        "type": "integer",
        "required": false,
        "description": "关联任务id(上级任务)",
        "confidence": "high"
      },
      {
        "path": "taskRisk",
        "type": "integer",
        "required": false,
        "description": "任务风险(1-无;2-技术风险;3-人员风险;4- 供应链风险)",
        "confidence": "high"
      },
      {
        "path": "customField",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "自定义字段值列表,字段结构详见下方「自定义 字段对象」。新增时可不传或传空数组[],表示 本次不设置自定义字段;传值则整体写入。填值 前请先调用「自定义字段定义查询」接口,按 fieldCategory=3(项目任务列表)拿到该租户 已启用的字段定义(fieldId、fieldType、选 项、小数位、日期格式),再按下方规则逐项填 值",
        "confidence": "high"
      },
      {
        "path": "taskFileBizKeys",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "文件keys",
        "confidence": "high"
      },
      {
        "path": "customField.fieldId",
        "type": "integer",
        "required": true,
        "description": "自定义字段id。取「自定义字段定义查询」返回 的同一条字段记录的主键(该记录的 bizKey),必须与fieldCode指向同一个字段, 不可自行编造",
        "confidence": "high"
      },
      {
        "path": "customField.fieldCode",
        "type": "string",
        "required": true,
        "description": "自定义字段编码。取定义中的fieldCode,需与 fieldId指向同一字段",
        "confidence": "high"
      },
      {
        "path": "customField.fieldName",
        "type": "string",
        "required": false,
        "description": "自定义字段名称。可空,服务端以字段定义中的 名称为准",
        "confidence": "high"
      },
      {
        "path": "customField.fieldType",
        "type": "integer",
        "required": true,
        "description": "自定义字段类型。1-文本,2-数值,3-单选,4- 多选,5-日期,6-快递进度,7-关联项目,8-链 接,9-附件。必须与定义中的fieldType一致, 否则该字段值无法正确解读",
        "confidence": "high"
      },
      {
        "path": "customField.fieldValue",
        "type": "string",
        "required": false,
        "description": "自定义字段值(字符串)。按fieldType填法: 1-文本 直接填文本内容;2-数值 填数字字符串, 如8.5(展示小数位取定义 customFieldDetail.decimalPlace);5-日期 填 日期字符串,如2026-04-20 18:00:00(展示格 式取定义 customFieldDetail.dateFormatType);8-链 接 填完整URL,如https://example.com/doc。 3-单选、4-多选 不依赖本字段,请改填 fieldOptionValue;6-快递进度 不依赖本字段, 请改填expressType/expressNo;7-关联项目、 9-附件 不依赖本字段",
        "confidence": "high"
      },
      {
        "path": "customField.fieldOptionValue",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "自定义字段选项值。仅3-单选、4-多选 需要填: 3-单选 只放1个元素(如[\"高\"]),4-多选 放全 部选中项(如[\"选项A\",\"选项B\"])。元素取值 必须来自定义 customFieldDetail.customFieldOptionList[].o ptionValue,不能自造。其他类型留空数组即可",
        "confidence": "high"
      },
      {
        "path": "customField.expressType",
        "type": "integer",
        "required": false,
        "description": "快递公司编码。仅6-快递进度 使用,取值见快递 公司枚举(1-圆通速递,2-申通快递,7-顺丰速 运,9-京东物流,...),其他类型不填",
        "confidence": "high"
      },
      {
        "path": "customField.expressTypeName",
        "type": "string",
        "required": false,
        "description": "快递公司名称。仅6-快递进度 使用,如 顺丰速 运,与expressType对应",
        "confidence": "high"
      },
      {
        "path": "customField.expressNo",
        "type": "string",
        "required": false,
        "description": "快递单号。仅6-快递进度 使用,如 SF1234567890",
        "confidence": "high"
      },
      {
        "path": "customField.expressPhone",
        "type": "string",
        "required": false,
        "description": "快递查询手机号(脱敏)。仅6-快递进度 使用, 用于快递平台查询,可空",
        "confidence": "high"
      },
      {
        "path": "customField.expressPhoneDes",
        "type": "string",
        "required": false,
        "description": "快递查询手机号(加密)。仅6-快递进度 使用, 由服务端加解密,第三方一般无需填写",
        "confidence": "high"
      },
      {
        "path": "customField.projectId",
        "type": "integer",
        "required": false,
        "description": "关联项目id。仅7-关联项目 使用,填项目主键",
        "confidence": "high"
      },
      {
        "path": "customField.projectaCode",
        "type": "string",
        "required": false,
        "description": "关联项目编号。仅7-关联项目 使用",
        "confidence": "high"
      },
      {
        "path": "customField.projectaName",
        "type": "string",
        "required": false,
        "description": "关联项目名称。仅7-关联项目 使用",
        "confidence": "high"
      },
      {
        "path": "customField.customFieldAttachmentList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "附件列表。仅9-附件 使用,元素结构详见下方 「自定义字段附件对象」",
        "confidence": "high"
      },
      {
        "path": "customField.fieldAccessId",
        "type": "string",
        "required": false,
        "description": "附件访问ID。附件类型自定义字段的取值标识, 字符串",
        "confidence": "high"
      },
      {
        "path": "customField.fieldAccessName",
        "type": "string",
        "required": false,
        "description": "附件访问名称。附件文件名(含扩展名),如 设 计图.pdf",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/创建项目任务.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTask/add --customField.fieldId <integer> --customField.fieldCode <string> --customField.fieldType <integer>"
  },
  {
    "path": "/open/api/saas/erp/projectTask/detail",
    "method": "POST",
    "title": "查询项目任务详情",
    "category": "嘉立创云ERP",
    "description": "查询项目任务详情",
    "contentType": "json",
    "fields": [
      {
        "path": "taskId",
        "type": "integer",
        "required": false,
        "description": "否 任务id",
        "confidence": "high"
      },
      {
        "path": "taskCode",
        "type": "string",
        "required": false,
        "description": "否 任务编码",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/查询项目任务详情.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTask/detail"
  },
  {
    "path": "/open/api/saas/erp/projectTask/page",
    "method": "POST",
    "title": "分页查询项目任务",
    "category": "嘉立创云ERP",
    "description": "分页查询项目任务",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "projectId",
        "type": "integer",
        "required": false,
        "description": "项目id",
        "confidence": "high"
      },
      {
        "path": "taskCode",
        "type": "string",
        "required": false,
        "description": "任务编码",
        "confidence": "high"
      },
      {
        "path": "taskName",
        "type": "string",
        "required": false,
        "description": "任务名称",
        "confidence": "high"
      },
      {
        "path": "excludeTaskId",
        "type": "integer",
        "required": false,
        "description": "排除的任务id",
        "confidence": "high"
      },
      {
        "path": "taskRiskList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "项目风险集合",
        "confidence": "high"
      },
      {
        "path": "taskStatus",
        "type": "integer",
        "required": false,
        "description": "任务状态。系统默认为1-未开始、4-进行中、2- 已完成、3-取消、5-任务封档;取值依赖租户字 典配置,租户可自定义任务状态(自定义取值从 101开始),合法取值以「状态取值查询」接口 返回为准",
        "confidence": "high"
      },
      {
        "path": "taskStatusList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "任务状态(多选)。非空时优先于taskStatus, 命中其中任一状态即返回;为空则回落到 taskStatus做等值匹配;不传或传空数组等同于 不按任务状态过滤。取值同taskStatus,合法取 值以「状态取值查询」接口返回为准",
        "confidence": "high"
      },
      {
        "path": "updateTimeStart",
        "type": "string",
        "required": false,
        "description": "修改时间区间-开始时间(含),格式yyyy-MM- dd HH:mm:ss。与updateTimeEnd搭配,用 于按修改时间增量拉取任务,例如通知漏收后的 补偿拉取",
        "confidence": "high"
      },
      {
        "path": "updateTimeEnd",
        "type": "string",
        "required": false,
        "description": "修改时间区间-结束时间(含),格式yyyy-MM- dd HH:mm:ss。不传表示不限制结束时间",
        "confidence": "high"
      },
      {
        "path": "customFieldFilterConditions",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "自定义字段筛选条件(可选)。多个条件之间为 AND关系;不传或传空数组=不按自定义字段 筛选,行为与本参数引入前完全一致。元素结构 详见下一个二级章节「自定义字段筛选条件对 象」",
        "confidence": "high"
      },
      {
        "path": "fieldId",
        "type": "integer",
        "required": true,
        "description": "自定义字段id。本对象「唯一必填字段」,取自 「自定义字段定义查询」接口返回的bizKey i",
        "confidence": "high"
      },
      {
        "path": "fieldCode",
        "type": "string",
        "required": false,
        "description": "自定义字段编码。不传时服务端按fieldId批量 补齐;传入则以传入值为准,推荐不传 i",
        "confidence": "high"
      },
      {
        "path": "fieldType",
        "type": "integer",
        "required": false,
        "description": "自定义字段类型。不传时服务端按fieldId批量 补齐;传入则以传入值为准。它决定取值用哪个 字段:1-文本 →fieldConditionValue;2-数值 →conditionStartValue/conditionEndValue; 3-单选、4-多选 → fieldOptionConditionValue;5-日期 → conditionStartValue/conditionEndValue。不 支持6-快递进度、7-关联项目、8-链接、9-附 件,传了报参数错误 i",
        "confidence": "high"
      },
      {
        "path": "fieldConditionValue",
        "type": "string",
        "required": false,
        "description": "文本值。「仅fieldType=1(文本)使用」,精 确匹配(不是模糊匹配):传SO202604001只 命中完全相同的文本值。其他类型传了会被忽略 或报参数错误 i",
        "confidence": "high"
      },
      {
        "path": "fieldOptionConditionValue",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "选项值集合。「仅fieldType=3(单选)、4(多 选)使用」,元素取字段定义里 customFieldDetail.customFieldOptionList[].o ptionValue的值;命中其中任一选项即匹配(多 选取并集,单选传1个元素即可)。⚠ 已知数据 限制:极少数单选数据只存了fieldValue未存选 项值,这类记录用本字段筛不到 i",
        "confidence": "high"
      },
      {
        "path": "conditionStartValue",
        "type": "string",
        "required": false,
        "description": "区间起始值(含)。「仅fieldType=2(数 值)、5(日期)使用」:2-数值 传数字字符串 (如\"100\");5-日期 格式必须与存储值完全一 致,即ISO-8601 UTC形式,如2025-08- 01T00:00:00.000Z ——不能写2025-08-01,否 则区间比较匹配不到数据 区间结束值(含)。「仅fieldType=2(数",
        "confidence": "high"
      },
      {
        "path": "conditionEndValue",
        "type": "string",
        "required": false,
        "description": "值)、5(日期)使用」,格式要求同 conditionStartValue;起始值与结束值共同构 成闭区间",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/分页查询项目任务.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTask/page --pageNum <integer> --pageSize <integer> --fieldId <integer>"
  },
  {
    "path": "/open/api/saas/erp/projectTask/update",
    "method": "POST",
    "title": "修改项目任务",
    "category": "嘉立创云ERP",
    "description": "修改项目任务",
    "contentType": "json",
    "fields": [
      {
        "path": "taskId",
        "type": "integer",
        "required": true,
        "description": "任务id",
        "confidence": "high"
      },
      {
        "path": "projectId",
        "type": "integer",
        "required": false,
        "description": "项目id",
        "confidence": "high"
      },
      {
        "path": "taskName",
        "type": "string",
        "required": false,
        "description": "任务名称",
        "confidence": "high"
      },
      {
        "path": "taskType",
        "type": "integer",
        "required": false,
        "description": "任务类型,1:需求,2:bug,100:外部采购 订单",
        "confidence": "high"
      },
      {
        "path": "taskDesc",
        "type": "string",
        "required": false,
        "description": "任务描述",
        "confidence": "high"
      },
      {
        "path": "projectNodeId",
        "type": "integer",
        "required": false,
        "description": "节点id",
        "confidence": "high"
      },
      {
        "path": "taskStatus",
        "type": "integer",
        "required": false,
        "description": "任务状态。系统默认为1-未开始、4-进行中、2- 已完成、3-取消、5-任务封档;取值依赖租户字 典配置,租户可自定义任务状态(自定义取值从 101开始),合法取值以「状态取值查询」接口 返回为准",
        "confidence": "high"
      },
      {
        "path": "taskPriority",
        "type": "integer",
        "required": false,
        "description": "任务优先级,1:P0,2:P1,3:P2,4:P3",
        "confidence": "high"
      },
      {
        "path": "taskManagerIds",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "任务责任人id列表",
        "confidence": "high"
      },
      {
        "path": "expectedCompletionTime",
        "type": "string",
        "required": false,
        "description": "期望完成时间",
        "confidence": "high"
      },
      {
        "path": "expectStartTime",
        "type": "string",
        "required": false,
        "description": "任务预计开始时间",
        "confidence": "high"
      },
      {
        "path": "expectEndTime",
        "type": "string",
        "required": false,
        "description": "任务预计完成时间",
        "confidence": "high"
      },
      {
        "path": "actualStartTime",
        "type": "string",
        "required": false,
        "description": "实际开始时间",
        "confidence": "high"
      },
      {
        "path": "actualEndTime",
        "type": "string",
        "required": false,
        "description": "实际结束时间",
        "confidence": "high"
      },
      {
        "path": "arrangeRules",
        "type": "integer",
        "required": false,
        "description": "任务安排规则,1-按预计时间,2-按任务顺序",
        "confidence": "high"
      },
      {
        "path": "estimatedWorkingTime",
        "type": "number",
        "required": false,
        "description": "本任务预估工时",
        "confidence": "high"
      },
      {
        "path": "estimatedWorking",
        "type": "integer",
        "required": false,
        "description": "本任务预估工时单位,1-小时,2-天",
        "confidence": "high"
      },
      {
        "path": "predecessorTaskId",
        "type": "integer",
        "required": false,
        "description": "前置任务id",
        "confidence": "high"
      },
      {
        "path": "parentTaskId",
        "type": "integer",
        "required": false,
        "description": "关联任务id(上级任务)",
        "confidence": "high"
      },
      {
        "path": "taskRisk",
        "type": "integer",
        "required": false,
        "description": "任务风险(1-无;2-技术风险;3-人员风险;4- 供应链风险)",
        "confidence": "high"
      },
      {
        "path": "customField",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "自定义字段值列表,字段结构详见下方「自定义 字段对象」。修改语义:不传(或传null)=保 持库里原值不变;传空数组[]=清空该任务的全 部自定义字段;传值=整体覆盖(以本次传入的 数组为最终结果,未出现在数组里的字段会被清 掉)。填值前请先调用「自定义字段定义查询」 接口,按fieldCategory=3(项目任务列表)拿 到字段定义",
        "confidence": "high"
      },
      {
        "path": "taskFileBizKeys",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "文件keys",
        "confidence": "high"
      },
      {
        "path": "customField.fieldId",
        "type": "integer",
        "required": true,
        "description": "自定义字段id。取「自定义字段定义查询」返回 的同一条字段记录的主键(该记录的 bizKey),必须与fieldCode指向同一个字段, 不可自行编造 i",
        "confidence": "high"
      },
      {
        "path": "customField.fieldCode",
        "type": "string",
        "required": true,
        "description": "自定义字段编码。取定义中的fieldCode,需与 fieldId指向同一字段",
        "confidence": "high"
      },
      {
        "path": "customField.fieldName",
        "type": "string",
        "required": false,
        "description": "自定义字段名称。可空,服务端以字段定义中的 名称为准",
        "confidence": "high"
      },
      {
        "path": "customField.fieldType",
        "type": "integer",
        "required": true,
        "description": "自定义字段类型。1-文本,2-数值,3-单选,4- 多选,5-日期,6-快递进度,7-关联项目,8-链 接,9-附件。必须与定义中的fieldType一致, 否则该字段值无法正确解读 i",
        "confidence": "high"
      },
      {
        "path": "customField.fieldValue",
        "type": "string",
        "required": false,
        "description": "自定义字段值(字符串)。按fieldType填法: 1-文本 直接填文本内容;2-数值 填数字字符串, 如8.5(展示小数位取定义 customFieldDetail.decimalPlace);5-日期 填 日期字符串,如2026-04-20 18:00:00(展示格 式取定义 customFieldDetail.dateFormatType);8-链 接 填完整URL,如https://example.com/doc。 3-单选、4-多选 不依赖本字段,请改填 fieldOptionValue;6-快递进度 不依赖本字段, 请改填expressType/expressNo;7-关联项目、 9-附件 不依赖本字段",
        "confidence": "high"
      },
      {
        "path": "customField.fieldOptionValue",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "自定义字段选项值。仅3-单选、4-多选 需要填: 3-单选 只放1个元素(如[\"高\"]),4-多选 放全 部选中项(如[\"选项A\",\"选项B\"])。元素取值 必须来自定义 customFieldDetail.customFieldOptionList[].o ptionValue,不能自造。其他类型留空数组即可",
        "confidence": "high"
      },
      {
        "path": "customField.expressType",
        "type": "integer",
        "required": false,
        "description": "快递公司编码。仅6-快递进度 使用,取值见快递 公司枚举(1-圆通速递,2-申通快递,7-顺丰速 运,9-京东物流,...),其他类型不填",
        "confidence": "high"
      },
      {
        "path": "customField.expressTypeName",
        "type": "string",
        "required": false,
        "description": "快递公司名称。仅6-快递进度 使用,如 顺丰速 运,与expressType对应",
        "confidence": "high"
      },
      {
        "path": "customField.expressNo",
        "type": "string",
        "required": false,
        "description": "快递单号。仅6-快递进度 使用,如 SF1234567890",
        "confidence": "high"
      },
      {
        "path": "customField.expressPhone",
        "type": "string",
        "required": false,
        "description": "快递查询手机号(脱敏)。仅6-快递进度 使用, 用于快递平台查询,可空",
        "confidence": "high"
      },
      {
        "path": "customField.expressPhoneDes",
        "type": "string",
        "required": false,
        "description": "快递查询手机号(加密)。仅6-快递进度 使用, 由服务端加解密,第三方一般无需填写",
        "confidence": "high"
      },
      {
        "path": "customField.projectId",
        "type": "integer",
        "required": false,
        "description": "关联项目id。仅7-关联项目 使用,填项目主键",
        "confidence": "high"
      },
      {
        "path": "customField.projectaCode",
        "type": "string",
        "required": false,
        "description": "关联项目编号。仅7-关联项目 使用",
        "confidence": "high"
      },
      {
        "path": "customField.projectaName",
        "type": "string",
        "required": false,
        "description": "关联项目名称。仅7-关联项目 使用",
        "confidence": "high"
      },
      {
        "path": "customField.customFieldAttachmentList",
        "type": "array",
        "items": "unknown",
        "required": false,
        "description": "附件列表。仅9-附件 使用,元素结构详见下方 「自定义字段附件对象」",
        "confidence": "high"
      },
      {
        "path": "customField.fieldAccessId",
        "type": "string",
        "required": false,
        "description": "附件访问ID。附件类型自定义字段的取值标识, 字符串",
        "confidence": "high"
      },
      {
        "path": "customField.fieldAccessName",
        "type": "string",
        "required": false,
        "description": "附件访问名称。附件文件名(含扩展名),如 设 计图.pdf",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/修改项目任务.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTask/update --taskId <integer> --customField.fieldId <integer> --customField.fieldCode <string> --customField.fieldType <integer>"
  },
  {
    "path": "/open/api/saas/erp/projectTaskWorkingHours/add",
    "method": "POST",
    "title": "登记项目工时接口",
    "category": "嘉立创云ERP",
    "description": "登记一条项目工时记录，记录任务的实际投入时间和工作内容",
    "contentType": "json",
    "fields": [
      {
        "path": "projectNodeTaskId",
        "type": "integer",
        "required": true,
        "description": "任务id",
        "confidence": "high"
      },
      {
        "path": "customerId",
        "type": "integer",
        "required": true,
        "description": "客户(员工)id",
        "confidence": "high"
      },
      {
        "path": "beginTime",
        "type": "string",
        "required": false,
        "description": "开始时间,格式yyyy-MM-dd HH:mm:ss",
        "confidence": "high"
      },
      {
        "path": "actualInvestmentTim",
        "type": "unknown",
        "required": true,
        "description": "实际投入时间",
        "confidence": "low"
      },
      {
        "path": "workDesc",
        "type": "string",
        "required": false,
        "description": "工作内容描述",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/登记项目工时接口.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTaskWorkingHours/add --projectNodeTaskId <integer> --customerId <integer> --actualInvestmentTim <unknown>"
  },
  {
    "path": "/open/api/saas/erp/projectTaskWorkingHours/delete",
    "method": "POST",
    "title": "删除项目工时",
    "category": "嘉立创云ERP",
    "description": "根据业务主键 ID 删除一条项目工时记录",
    "contentType": "json",
    "fields": [
      {
        "path": "projectTaskWorkingHoursIdLong",
        "type": "unknown",
        "required": true,
        "description": "工时记录id(业务命名,与bizKey 二选一)",
        "confidence": "low"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/删除项目工时.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTaskWorkingHours/delete --projectTaskWorkingHoursIdLong <unknown>"
  },
  {
    "path": "/open/api/saas/erp/projectTaskWorkingHours/detail",
    "method": "POST",
    "title": "项目工时详情查询",
    "category": "嘉立创云ERP",
    "description": "根据业务主键 ID 查询项目工时的详细信息",
    "contentType": "json",
    "fields": [
      {
        "path": "projectTaskWorkingHoursIdLong",
        "type": "unknown",
        "required": true,
        "description": "工时记录id(业务命名,与bizKey 二选一)",
        "confidence": "low"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/项目工时详情查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTaskWorkingHours/detail --projectTaskWorkingHoursIdLong <unknown>"
  },
  {
    "path": "/open/api/saas/erp/projectTaskWorkingHours/page",
    "method": "POST",
    "title": "项目工时分页查询",
    "category": "嘉立创云ERP",
    "description": "项目工时分页查询接口文档",
    "contentType": "json",
    "fields": [
      {
        "path": "taskId",
        "type": "integer",
        "required": false,
        "description": "任务id",
        "confidence": "high"
      },
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页条数,最大值为1000",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/项目工时分页查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTaskWorkingHours/page --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/projectTaskWorkingHours/update",
    "method": "POST",
    "title": "修改项目工时",
    "category": "嘉立创云ERP",
    "description": "修改一条已登记的项目工时记录，按业务主键 ID 定位",
    "contentType": "json",
    "fields": [
      {
        "path": "projectTaskWorkingHour",
        "type": "unknown",
        "required": true,
        "description": "工时记录id(业务命名,与bizKey 二选一)",
        "confidence": "low"
      },
      {
        "path": "projectNodeTaskId",
        "type": "integer",
        "required": true,
        "description": "任务id",
        "confidence": "high"
      },
      {
        "path": "customerId",
        "type": "integer",
        "required": true,
        "description": "客户(员工)id",
        "confidence": "high"
      },
      {
        "path": "beginTime",
        "type": "string",
        "required": false,
        "description": "开始时间,格式yyyy-MM-dd HH:mm:ss",
        "confidence": "high"
      },
      {
        "path": "actualInvestmentTime",
        "type": "number",
        "required": true,
        "description": "实际投入时间",
        "confidence": "high"
      },
      {
        "path": "workDesc",
        "type": "string",
        "required": false,
        "description": "工作内容描述",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/修改项目工时.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/projectTaskWorkingHours/update --projectTaskWorkingHour <unknown> --projectNodeTaskId <integer> --customerId <integer> --actualInvestmentTime <number>"
  },
  {
    "path": "/open/api/saas/erp/purchaseOrder/detail",
    "method": "POST",
    "title": "采购订单详情查询接口",
    "category": "嘉立创云ERP",
    "description": "采购订单详情查询接口",
    "contentType": "json",
    "fields": [
      {
        "path": "purchaseOrderId",
        "type": "integer",
        "required": true,
        "description": "是 订单业务ID",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/采购订单详情查询接口.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/purchaseOrder/detail --purchaseOrderId <integer>"
  },
  {
    "path": "/open/api/saas/erp/purchaseOrder/menuPage",
    "method": "POST",
    "title": "采购订单明细分页查询",
    "category": "嘉立创云ERP",
    "description": "采购订单明细分页查询",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "purchaseOrderCode",
        "type": "string",
        "required": false,
        "description": "采购订单单号",
        "confidence": "high"
      },
      {
        "path": "purchaseDetailCode",
        "type": "string",
        "required": false,
        "description": "采购明细单号",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/采购订单明细分页查询.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/purchaseOrder/menuPage --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/warehouse/menuPage",
    "method": "POST",
    "title": "分页查询仓库",
    "category": "嘉立创云ERP",
    "description": "分页查询仓库",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "warehouseCode",
        "type": "string",
        "required": false,
        "description": "仓库编号",
        "confidence": "high"
      },
      {
        "path": "warehouseName",
        "type": "string",
        "required": false,
        "description": "仓库名称",
        "confidence": "high"
      },
      {
        "path": "warehouseType",
        "type": "integer",
        "required": false,
        "description": "仓库类型(1:仓库,2:嘉立创SMT 私有库)",
        "confidence": "high"
      },
      {
        "path": "enableStatus",
        "type": "boolean",
        "required": false,
        "description": "启用状态",
        "confidence": "high"
      },
      {
        "path": "defaultFlag",
        "type": "boolean",
        "required": false,
        "description": "是否默认",
        "confidence": "high"
      },
      {
        "path": "provinceName",
        "type": "string",
        "required": false,
        "description": "省名称",
        "confidence": "high"
      },
      {
        "path": "cityName",
        "type": "string",
        "required": false,
        "description": "城市名称",
        "confidence": "high"
      },
      {
        "path": "districtName",
        "type": "string",
        "required": false,
        "description": "区名称",
        "confidence": "high"
      },
      {
        "path": "createTimeStart",
        "type": "string",
        "required": false,
        "description": "创建时间-开始",
        "confidence": "high"
      },
      {
        "path": "createTimeEnd",
        "type": "string",
        "required": false,
        "description": "创建时间-结束",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/分页查询仓库.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/warehouse/menuPage --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/warehouse/warehouseLocationPage",
    "method": "POST",
    "title": "分页查询库位",
    "category": "嘉立创云ERP",
    "description": "分页查询库位",
    "contentType": "json",
    "fields": [
      {
        "path": "pageNum",
        "type": "integer",
        "required": true,
        "description": "当前页码,最小值为1",
        "confidence": "high"
      },
      {
        "path": "pageSize",
        "type": "integer",
        "required": true,
        "description": "每页数量,最大值为1000",
        "confidence": "high"
      },
      {
        "path": "keyword",
        "type": "string",
        "required": false,
        "description": "关键字",
        "confidence": "high"
      },
      {
        "path": "warehouseLocationName",
        "type": "string",
        "required": false,
        "description": "库位名称",
        "confidence": "high"
      },
      {
        "path": "warehouseLocationCode",
        "type": "string",
        "required": false,
        "description": "库位编号",
        "confidence": "high"
      },
      {
        "path": "enableStatus",
        "type": "boolean",
        "required": false,
        "description": "启用状态",
        "confidence": "high"
      },
      {
        "path": "shelfId",
        "type": "integer",
        "required": false,
        "description": "货架ID",
        "confidence": "high"
      },
      {
        "path": "warehouseId",
        "type": "integer",
        "required": false,
        "description": "仓库ID",
        "confidence": "high"
      },
      {
        "path": "warehouseType",
        "type": "integer",
        "required": false,
        "description": "仓库类型",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/分页查询库位.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/warehouse/warehouseLocationPage --pageNum <integer> --pageSize <integer>"
  },
  {
    "path": "/open/api/saas/erp/warehouse/warehouseLocationTreeV2",
    "method": "POST",
    "title": "查询仓库-货架-库位树接口",
    "category": "嘉立创云ERP",
    "description": "查询仓库-货架-库位树接口",
    "contentType": "json",
    "fields": [
      {
        "path": "onlyShowBelongShel",
        "type": "unknown",
        "required": false,
        "description": "是否只显示关联货架的库位",
        "confidence": "low"
      },
      {
        "path": "warehouseId",
        "type": "integer",
        "required": false,
        "description": "仓库ID",
        "confidence": "high"
      },
      {
        "path": "enableStatus",
        "type": "boolean",
        "required": false,
        "description": "启用状态",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/嘉立创云ERP/查询仓库-货架-库位树接口.md",
    "example": "jlc-openapi-cli /open/api/saas/erp/warehouse/warehouseLocationTreeV2"
  },
  {
    "path": "/machineIntegrated/toolBox/v1/recordCount",
    "method": "POST",
    "title": "UG工程插件使用记录",
    "category": "CNC业务",
    "description": "工程插件记录",
    "contentType": "json",
    "fields": [
      {
        "path": "customerCode",
        "type": "string",
        "required": true,
        "description": "客编",
        "confidence": "high"
      },
      {
        "path": "orderDate",
        "type": "string",
        "required": true,
        "description": "下单时间,格式yyyy-MM-dd HH:mm:ss",
        "confidence": "high"
      }
    ],
    "strict": false,
    "source": "api-docs/CNC业务/UG工程插件使用记录.md",
    "example": "jlc-openapi-cli /machineIntegrated/toolBox/v1/recordCount --customerCode <string> --orderDate <string>"
  }
];
