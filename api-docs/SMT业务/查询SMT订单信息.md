---
title: "查询SMT订单信息"
api_uri: "/smtOpenApi/order/selectSmtOrderInfo"
category: "SMT业务"
description: "查询SMT订单信息"
doc_id: "8730933123023912960"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8730933123015524352-%E6%9F%A5%E8%AF%A2SMT%E8%AE%A2%E5%8D%95%E4%BF%A1%E6%81%AF.pdf"
---
# 查询 **SMT** 订单信息

## 基本信息

<mark>请求方式：POST 请求路径：</mark> /smtOpenApi/order/selectSmtOrderInfo <mark>请求参数</mark>

### **<mark>Header</mark>** <mark>参数</mark>

|名称|类型|必须|描述|
|---|---|---|---|
|Authorization|string|是|签名认证生成认证信息|
|Content-Type|string|是|请设置为application/json|
|Accept|string|是|请设置为application/json|

### **<mark>Body</mark>** <mark>参数</mark>

|名称|类型|必须|描述|
|---|---|---|---|
|customerOrderId|Long|必须|pcb客户订单id|

## 响应参数 **data[]**

|名称|类型|描述|
|---|---|---|
|smtOrderAccessId|String|Smt订单uuid|
|smtOrderCode|string|Smt订单编号|

## 请求示例

- {

   - "customerOrderId":55166223

- }

## 响应示例

- {

"success": **true** ,

"code": 200, "message": **null** , "data": [

{

"smtOrderAccessId": "08B7F8618B094525B38ABD3219F1C00C",

"smtOrderCode": "SMT2108250014"

}

]

}

## <u><mark>错误码</mark></u>

|错误码|描述|
|---|---|
|200|请求成功|
|500|请求失败|
