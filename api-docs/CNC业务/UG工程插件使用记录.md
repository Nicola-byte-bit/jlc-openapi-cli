---
title: "UG工程插件使用记录"
api_uri: "/machineIntegrated/toolBox/v1/recordCount"
category: "CNC业务"
description: "工程插件记录"
doc_id: "8672578717086408704"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8672578717069631488-API%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3%E6%A0%B7%E4%BE%8B.pdf"
---
# 创建订单

## 基本信息

请求方式：POST 请求路径：/xxx/xxx/xx

## 请求参数

**Header** 参数

|名称|类型|必须|描述|
|---|---|---|---|
|Authorization|string|是|签名认证生成认证信息|
|Content-Type|string|是|请设置为application/json|
|Accept|string|是|请设置为application/json|

### **Body** 参数

|名称|类型|必须|描述|
|---|---|---|---|
|customerCode|string|是|客编|
|orderDate|string|是|下单时间，格式yyyy-MM-dd HH:mm:ss|

## 响应参数

|名称|类型|描述|
|---|---|---|
|orderNo|string|订单号|

## 请求示例

{

"customerCode": "00001A",

"orderDate": "2024-03-28 10:09:23" }

## 响应示例

{ "code": 200,

"message": null,

"data": {

"orderNo": "20240328101565001"

}

}

## 错误码

|错误码|描述|
|---|---|
|200|请求成功|
|1503|余额不足|
