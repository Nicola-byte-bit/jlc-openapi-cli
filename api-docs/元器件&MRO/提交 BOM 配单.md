---
title: "提交 BOM 配单"
api_uri: "/lcsc/openapi/bom/submit"
category: "元器件&MRO"
description: "提交 BOM 配单"
doc_id: "8770775980030558208"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8770775979992809472-%E7%AB%8B%E5%88%9B%E5%95%86%E5%9F%8E-%E6%8F%90%E4%BA%A4BOM%E9%85%8D%E5%8D%95.pdf"
---
# submitBom

**BOM 模板下载链接:** https://bom.szlcsc.com/bom/template

**域名:** https://open-api.jlc.com

**接口地址:** /lcsc/openapi/bom/submit

**请求方式:** POST

**请求数据类型:** multipart/form-data

**响应数据类型:** */*

**接口描述:** 提交 BOM 配单

## 请求示例:

file: 上述链接下载的 BOM 模板

## 请求参数:

|**参数名称**<br>i|**参数说明**|**请求类型**|**是否必须**|**数据类型**|**schema**|
|---|---|---|---|---|---|
|file|BOM文件|body|true|File|MultipartFile|

## 响应状态:

|**状态码**|**说明**|**schema**|
|---|---|---|
|200|OK|HttpOpenapiResult<BomSubmitRespVO>|

## 响应参数:

|**参数名称**|**参数说明**|**类型**|**schema**|
|---|---|---|---|
|code|状态码|integer(int32)|integer(int32)|
|message|消息内容|string||
|data|返回内容|BomSubmitRespVO|BomSubmitRespVO|
|bomUuid|BOM<br>单号（查询result用）|string||
|bomCode|业务编码|string||
|status|初始状态open_matching<br>open_matching-已受理,matching-匹<br>配中,done-已完成,failed-失败|string||
|totalItemCount|明细总行数|integer||
|successful||boolean||

响应示例:

<mark>{</mark> "code": 200, "message": null, "data": {

"bomUuid": "1B59A5ECDD83EEE5F2A007080CA07D08", "bomCode": "BOM260728000102", "status": "open_matching",

"totalItemCount": 6 }, "successful": true }
