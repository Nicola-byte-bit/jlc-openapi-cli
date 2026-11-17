---
title: "PCB查询钢网规格信息"
api_uri: "/pcb/order/getOrderSteelMeshSpecificationDetails"
category: "PCB业务"
description: "PCB查询钢网规格信息"
doc_id: "8717820293375234048"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8717820293371039744-%E6%9F%A5%E8%AF%A2%E9%92%A2%E7%BD%91%E8%A7%84%E6%A0%BC%E4%BF%A1%E6%81%AF.pdf"
---
# PCB 查询钢网规格信息

## 基本信息

请求方式：POST 请求路径：/pcb/order/getOrderSteelMeshSpecificationDetails

## 请求参数

### **Header** 参数

|名称|类型|必须|描述|
|---|---|---|---|
|Authorization|string|是|签名认证生成认证信息|
|Content-Type|string|是|请设置为application/json|
|Accept|string|是|请设置为application/json|

|**Body** 参数（无）|||||
|名称|类型|必须|示例值|描述|

## 响应参数

|名称|类型|描述|
|---|---|---|
|code|Integer|错误码|
|message|String|提示信息|
|success|boolean|是否请求成功|
|**data**|**array**||
|steelmeshSellingP<br>riceAccessId|String|规格AccessId（唯一值）|
|specificationLengt<br>h|BigDecimal|规格长度|
|specificationWidt<br>h|BigDecimal|规格宽度|
|boardWeight|BigDecimal|重量|
|steelmeshUnit|String|单位|
|payAccountMone<br>y|BigDecimal|网络支付|
|noFrameSteelPiec<br>eFlag|Boolean|是否无框钢片(true-是，false-否)|
|protectSimpleFlag|Boolean|是否是环保简易型(true-是，false-否)|
|ladderSteelmeshF<br>lag|Boolean|是否阶梯钢网(true-是，false-否)|
|ladderSteelmeshP<br>rice|BigDecimal|阶梯钢网价格|
|nanometreHandle<br>Price|BigDecimal|纳米工艺价格|

## 请求示例

无入参

## 响应示例

{ "success": true, "code": 200, "message": null, "data": [ { "steelmeshSellingPriceAccessId": "D13AB4DE93804D2D91E4F8918E9FFFB7", "specificationLength": 40, "specificationWidth": 30, "boardWeight": 1, "steelmeshUnit": "个", "payAccountMoney": 58, "noFrameSteelPieceFlag": false, "protectSimpleFlag": false, "ladderSteelmeshFlag": false, "ladderSteelmeshPrice": null, "nanometreHandlePrice": 0 }, { "steelmeshSellingPriceAccessId": "DA23BB475A5D4AF08D1EB9E65F5B4C56", "specificationLength": 52, "specificationWidth": 42, "boardPly": 0.1, "boardWeight": 1.8, "steelmeshUnit": "个", "payAccountMoney": 75, "noFrameSteelPieceFlag": false, "protectSimpleFlag": false, "ladderSteelmeshFlag": false, "ladderSteelmeshPrice": null, "nanometreHandlePrice": 0 } ] } 错误码 描述 200 请求成功 1001 请求失败
