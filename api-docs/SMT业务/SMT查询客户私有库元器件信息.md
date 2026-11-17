---
title: "SMT查询客户私有库元器件信息"
api_uri: "/smtOpenApi/smtComponent/selectPrivateStockPage"
category: "SMT业务"
description: "SMT查询客户私有库元器件信息"
doc_id: "8809559023420878848"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8809559023416684544-SMT%E7%A7%81%E6%9C%89%E5%BA%93%E5%AD%98%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3.pdf"
---
# 嘉立创 SMT 开放平台

# 查询客户私有库存接口文档

需求编号：JLCS-1196702 | 接口版本：V1.0 | 编写日期：2026-11-06

## 1. 接口概述

|**接口名称**|查询客户私有库存接口|
|---|---|
|**接口描述**|分页查询当前调用方（客户）在嘉立创SMT 私有库中的元器件库存明细|
|**请求方式**|POST|
|**接口地址**|smtOpenApi/smtComponent/selectPrivateStockPage|
|**数据格式**|application/json; charset=UTF-8|

## 2. 请求说明

### 2.1 请求头

|**参数名**|**类型**|**必填**|**说明**|
|---|---|---|---|
|Content-Type|String|是|application/json|

### 2.2 请求参数（Body）

|**参数名**|**类型**|**必填**|**说明**|
|---|---|---|---|
|pageNum|Integer|否|页码，默认1，最小值为1|
|pageSize|Integer|否|每页条数，默认20，取值范围1~200|
|keyWords|String|否|元器件关键词，模糊匹配|
|componentCode|String|否|元器件编号（C 编号），精确匹配|
|stockSource|Integer|否|库存来源：0-邮寄，1-嘉立创购买，2-立创<br>商城购买；不传表示全部|

### 2.3 请求示例

<mark>{</mark>

<mark>"pageNum": 1, "pageSize": 20, "keyWords": "0603", "componentCode": "C14663", "stockSource": 1</mark>

<mark>}</mark>

## 3. 响应说明

### 3.1 响应外层结构

|**字段**|**类型**|**必返**|**说明**|
|---|---|---|---|
|success|Boolean|是|是否成功，true-成功，false-失败|
|code|Integer|是|响应码，详见「5. 错误码与异常提示」|
|message|String|是|响应消息|
|errorCode|String|否|框架错误码，通常为空|
|data|Object|否|分页数据，结构见4.2、4.3|

### 3.2 data 分页结构

|**字段**|**类型**|**必返**|**说明**|
|---|---|---|---|
|list|Array|是|私有库存列表，元素结构见4.3|
|total|Long|是|总记录数|
|pageNum|Integer|是|当前页码|
|pageSize|Integer|是|每页条数|
|pages|Integer|是|总页数|

### 3.3 list 元素字段

|**字段**|**类型**|**必返**|**说明**|
|---|---|---|---|
|componentCode|String|是|元件编号（C 编号）|

|componentName|String|是|元件名称|
|componentModel|String|是|原厂型号|
|componentSpecification|String|是|封装规格|
|componentType|String|是|元件类别|
|componentBrand|String|是|品牌产地|
|stockNumber|Integer|是|库存数量|
|purchaseNumber|Integer|是|在途数量|
|occupyStockNumber|Integer|是|占用数量|
|unitPrice|BigDecimal|是|单价（元）|
|totalAmount|BigDecimal|是|货值（元）|
|stockSource|Integer|是|库存来源：0-邮寄，1-嘉立创购买，2-立创<br>商城购买|
|stockSourceStr|String|是|库存来源名称|
|stockRemark|String|否|私有库存备注|
|stockNumberUpdateTimeStr|String|是|库存数量变更时间，格式yyyy-MM-dd<br>HH:mm:ss|

### 3.4 响应示例

<mark>{ "success": true, "code": 200, "message": "success", "data": { "list": [ { "componentCode": "C14663", "componentName": "100nF ±10% 50V", "componentModel": "CC0603KRX7R9BB104", "componentSpecification": "0603",</mark> "componentType": "贴片电容(MLCC)", "componentBrand": "YAGEO(国巨)", <mark>"stockNumber": 101, "purchaseNumber": 0, "occupyStockNumber": 86, "unitPrice": 0.0155, "totalAmount": 1.5655, "stockSource": 1,</mark> "stockSourceStr": "嘉立创购买", <mark>"stockRemark": "", "stockNumberUpdateTimeStr": "2026-07-05 19:38:17" } ], "total": 1,</mark>

<mark>"pageNum": 1, "pageSize": 20, "pages": 1 }</mark>

<mark>}</mark>

## 4. 错误码与异常提示

接口 HTTP 状态码统一为 200，业务结果通过 success 字段判断；success=false 时 message 为失 败原因。

|**code**|**提示信息（message）**|**说明**|
|---|---|---|
|1000|参数校验不通过|请求参数格式错误或缺失|
|1001|请求失败|业务处理失败，具体原因见message|
|1001|页码不能小于1|pageNum 小于1|
|1001|每页条数需在1~200之间|pageSize 超出1~200 范围|
|1001|未获取到客户信息|未能从鉴权信息中识别调用方客户编码，请检查<br>AppId/AccessKey 配置|
|1001|查询客户私有库存异常|系统内部异常，请稍后重试或联系技术支持|

注：下游服务返回的业务失败信息会经 _message_ 原样透出，调用方应以 _success_ 字段为准判断结果。
