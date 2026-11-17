---
title: "查询订单web端明细价格"
api_uri: "/pcb/order/getOrderWebPriceDetails"
category: "PCB业务"
description: "查询订单web端明细价格"
doc_id: "8677150888427347968"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8677150888410570752-%E6%9F%A5%E8%AF%A2%E8%AE%A2%E5%8D%95WEB%E4%BB%B7%E6%A0%BC%E6%98%8E%E7%BB%86%E6%8E%A5%E5%8F%A3%20%282%29.pdf"
---
# PCB-WEB 查询在线价格接口

## 基本信息

请求方式：POST

请求路径：/pcb/order/getOrderWebPriceDetails

## 请求参数

**Header** 参数

|名称|类型|必须|描述|
|---|---|---|---|
|Authorization|string|是|签名认证生成认证信息|
|Content-Type|string|是|请设置为application/json|
|Accept|string|是|请设置为application/json|

### **Body** 参数

|名称|类型|必须|示例值|描述|
|---|---|---|---|---|
|customerOrderId|integer|是|17618739|订单编号|

## 响应参数

|名称|类型|描述|方式|
|---|---|---|---|
|carriageInvoiceMoney|number|运费税金|收费|
|formalitiesMoney|number|手续费|收费|
|carriageMoney|number|运费|收费|
|spellMoney|number|拼版费|收费|
|adornPutMoney|number|喷镀费|收费|
|testMoney|number|测试费|收费|
|fillMoney|number|菲林费|收费|
|achieveMoney|number|加急费|收费|
|charFontColor|number|颜色费|收费|
|internetPayTax|number|税费|收费|
|projectDiscountMoney|number|工程费|收费|
|stencilDiscountMoney|number|板费|收费|
|halfHoleMoney|number|半孔费|收费|
|bigBoardMoney|number|大板费|收费|

|cuprumThicknessMoney|number|外层铜厚费|收费|
|insideCuprumThicknessMoney|number|内层铜厚费用|收费|
|hdCharMoney|number|打印高清字符<br>费|收费|
|specifyBoardMoney|number|指定板材费|收费|
|comfirmFileMoney|number|确认生产稿费|收费|
|deductMoney|number|优惠金额|扣除|
|deductionAccountMoney|number|抵扣金额|扣除|
|invoiceFormalitiesMoney|number|开票手续费|收费|
|edgeGrindingMoney|number|磨边费|收费|
|lowResistanceTestMoney|number|四线低阻测试<br>费|收费|
|guaranteeMoney|number|品质赔付费|收费|
|adornBestrowMoney|number|阻焊喷镀费|收费|
|specialProcessMoney|number|冷门工艺费|收费|
|refundGoodsMoney|number|PCB退货款金<br>额|不计入总价|
|refundDeliverMoney|number|pcb退运费金<br>额|不计入总价|
|specialProduceMoney|number|特价|收费|
|edaReduceMoneyRealMoney|number|立创EDA文<br>件优惠|扣除-废弃|
|impedanceLaminatedConstructionMoney|number|叠构费|收费|
|impedanceMoney|number|阻抗费|收费|
|plateSpellMoney|number|样板拼板费|收费|
|jlcEdaDeductMoney|number|EDA文件优惠|扣除|
|fpcUrgentDiscountMoney|number|FPC加急优惠|扣除|
|stencilDeductMoney|number|减免板费|扣除|
|otherCostDetailVOList|Array|其他费用明细|收费|
|orderCostReduceDetailVOList|Array|减免费用明细|扣除|
|orderCostList|Array|通用费用|收费|
|orderCostExtendVo|Array|附加费|收费|
|retreatCarriage|Array|退运费明细|扣除|
|personalServicePrice|Array|个性化服务|收费|
|payAccountOfGwMoney|number|钢网费||
|polishingProcessOfGwMoney|number|抛光费||
|electricPrintOfGwMoney|number|电印费||
|nanometreHandleOfGwMoney|number|纳米处理费用||

|ultrasonicCleaningOfGwMoney|number|超声波清洗费<br>用|
|checkReportOfGwMoney|number|产品检测报告<br>费|
|overPointOfGwMoney|number|超点费|
|puzzleOfGwMoney|number|拼版费|
|specialThicknessOfGwFee|number|特殊钢片费|
|packageOfGwMoney|number|包装费|
|taxFareOfGwMoney|number|税费|
|freightageOfGwMoney|number|运费|
|carriageInvoiceOfGwMoney|number|运费税金|
|formalitiesOfGwMoney|number|手续费|
|reductionOfGwMoney|number|优惠金额|
|couponAmountOfGw|number|优惠券金额|
|deductionAccountOfGwMoney|number|抵扣金额|
|freeOfGwMoney|number|减免费用|
|refundmentApplyOfGwMoney|number|钢网假期内出<br>货费用|
|otherOfGwMoney|number|其他费用|
|holidayDeliverOfGwMoney|number|假期出货费用|
|smtToPcbFeeList|Array|SMT费用|

其他费用明细（ **otherCostDetailVOList** 数组内对象）

|名称|类型|描述|
|---|---|---|
|costItemCode|string|费用项编码|
|costItemName|string|费用项名称|
|costItemMoney|number|费用项金额|

减免费用明细（ **orderCostReduceDetailVOList** 数组内对象）

|名称|类型|描述|
|---|---|---|
|reduceReasonCode|string|减免原因编号|
|costItemCode|number|费用项编码|
|costItemName|string|费用项名称|
|reduceMoney|number|减免金额|

## 通用费用明细（ **orderCostList** 数组内对象）

|名称|类型|描述|
|---|---|---|
|costItemCode|string|费用项编码|
|costItemName|string|费用项名称|
|costItemMoney|number|费用项金额|

## 附加费明细（ **orderCostExtendVo** 数组内对象数组内对象）

|名称|类型|描述|
|---|---|---|
|costItemCode|string|费用项编码|
|costItemName|string|费用项名称|
|costItemMoney|number|费用项金额|

## 退运费明细（ **retreatCarriage** 数组内对象）

|名称|类型|描述|
|---|---|---|
|label|string|退费描述|
|value|string|退费金额|

## 个性化服务费用（ **personalServicePrice** 数组内对象）

|名称|类型|描述|
|---|---|---|
|costItemCode|string|费用项编码|
|costItemName|string|费用项名称|
|costItemMoney|number|费用项金额|

## SMT 费用明细（ **smtToPcbFeeList** 数组内对象）

|名称|类型|描述|
|---|---|---|
|feeName|string|费用项名称|
|fee|number|费用项金额|

## 请求示例

{ "customerOrderId": 82447117

- }

## 响应示例

{ "code": 200, "message": **null** , "data": { "carriageInvoiceMoney": **null** , "formalitiesMoney": **null** , "carriageMoney": **null** , "spellMoney": **null** , "adornPutMoney": 208, "testMoney": 145, "fillMoney": 16.2, "achieveMoney": **null** , "charFontColor": **null** , "internetPayTax": 87.15, "projectDiscountMoney": 50, "stencilDiscountMoney": 241.2, "halfHoleMoney": **null** , "bigBoardMoney": **null** , "cuprumThicknessMoney": **null** , "insideCuprumThicknessMoney": **null** , "hdCharMoney": **null** , "specifyBoardMoney": **null** , "comfirmFileMoney": **null** , "deductMoney": 0, "deductionAccountMoney": **null** , "invoiceFormalitiesMoney": **null** , "edgeGrindingMoney": **null** , "lowResistanceTestMoney": **null** , "guaranteeMoney": **null** , "adornBestrowMoney": 0, "personalServicePrice": [

{ "costItemCode": "addCustomerCode", "costItemName": "板上加客编", "costItemMoney": 0 } ], "specialProcessMoney": **null** , "refundGoodsMoney": **null** , "refundDeliverMoney": **null** , "specialProduceMoney": **null** , "edaReduceMoneyRealMoney": **null** , "impedanceLaminatedConstructionMoney": **null** , "impedanceMoney": **null** , "plateSpellMoney": **null** , "jlcEdaDeductMoney": **null** , "fpcUrgentDiscountMoney": **null** , "stencilDeductMoney": 0, "otherCostDetailVOList": [ { "costItemCode": "otherCode", "costItemName": "其它收费", "costItemMoney": 0 } ], "orderCostReduceDetailVOList": [ { "reduceReasonCode": "reduceReasonCode", "costItemCode": "reduceCode", "costItemName": "减免费用", "reduceMoney": 0 } ], "orderCostList": [ { "costItemCode": "smallBoardMoney", "costItemName": "小板费", "costItemMoney": 0 }, { "costItemCode": "multipleAchieveMoney", "costItemName": "多倍加急费", "costItemMoney": 0 } ],

"orderCostExtendVo": [ { "costItemCode": "drillingMoney", "costItemName": "钻孔费", "costItemMoney": 0 } ], "retreatCarriage": [ { "label": "退运费", "value": "10" } ], "payAccountOfGwMoney": **null** , "polishingProcessOfGwMoney": **null** , "electricPrintOfGwMoney": **null** , "nanometreHandleOfGwMoney": **null** , "ultrasonicCleaningOfGwMoney": **null** , "checkReportOfGwMoney": **null** , "overPointOfGwMoney": **null** , "puzzleOfGwMoney": **null** , "specialThicknessOfGwFee": **null** , "packageOfGwMoney": **null** , "taxFareOfGwMoney": **null** , "freightageOfGwMoney": **null** , "carriageInvoiceOfGwMoney": **null** , "formalitiesOfGwMoney": **null** , "reductionOfGwMoney": **null** , "couponAmountOfGw": **null** , "deductionAccountOfGwMoney": **null,** "smtToPcbFeeList": [ { "feeName": "SMT 收费项", "fee": 0 } ], }, "successful": **true** }

<mark>错误码</mark>

|错误码|描述|
|---|---|
|200|请求成功|
|1000|请求失败|
