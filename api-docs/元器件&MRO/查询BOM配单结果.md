---
title: "查询BOM配单结果"
api_uri: "/lcsc/openapi/bom/result"
category: "元器件&MRO"
description: "查询BOM配单结果"
doc_id: "8770776391575257088"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8770776391537508352-%E7%AB%8B%E5%88%9B%E5%95%86%E5%9F%8E-%E6%9F%A5%E8%AF%A2BOM%E9%85%8D%E5%8D%95%E7%BB%93%E6%9E%9C.pdf"
---
# queryBomResult

**域名:** https://open-api.jlc.com

**接口地址:** /lcsc/openapi/bom/result

**请求方式:** POST

**请求数据类型:** application/json **响应数据类型:** */* **接口描述:** 查询 BOM 配单结果

**请求示例:**

{ "bomUuid":"B7833F9FFE4E9F0180CAD22B055D0A95" }

**请求参数:**

|**参数名称**|**参数说明**|**请求类型**|**是否必须**|**数据类型**|**schema**|
|---|---|---|---|---|---|
|bomResultReqVO|BOM配单结果<br>查询请求|body|true|BomResultReqVO|bomResultReqVO|
|bomUuid|提交配单返回的<br>bomUuid||true|String||

## 响应状态:

|**状态码**|**说明**|**schema**|
|---|---|---|
|200|OK|HttpOpenapiResult<BomResultRespVO>|

## 响应参数:

|**参数名称**|**参数说明**|**类型**|**schema**|
|---|---|---|---|
|code|状态码|integer(int32)|integer(int32)|
|message|消息内容|string||
|data|返回内容|BomResultRespVO|BomResultRespVO|
|status|任务状态：open_matching-已<br>受理，matching-匹配中，done-<br>已完成，failed-失败|string||
|progress|匹配进度0~100|integer||
|errorMsg|FAILED时的失败原因|string||
|sets|实际采购的套数|integer||
|matchSummary|匹配汇总|MatchSummaryVO|MatchSummaryVO|
|total|明细总数|integer||

|perfect|完全匹配数|integer||
|choice|选择匹配数|integer||
|cannotMatch|不能匹配数|integer||
|waitMatch|待匹配数|integer||
|ai|AI匹配数|integer||
|bomItemList|明细列表|List|MatchItemVO|
|bomItemId|明细ID|string||
|rowNo|行号（返回顺序1,2,3...）|integer||
|originModel|原始型号|string||
|originBrand|原始品牌|string||
|originEncap|原始封装|string||
|quantity|单套用量|string||
|tagNo|位号|string||
|totalQuantity|总需求量|integer||
|matchType|匹配状态：perfect-完全匹配，<br>choice-选择匹配，wait_match-<br>待匹配，cannot_match-不能匹<br>配，ai-AI匹配|string||
|matchedProduct|匹配到的商品|MatchedProductVO|MatchedProductVO|
|productId|商品ID|integer||
|productCode|商品编号（如C7950）|string||
|productModel|型号|string||
|productName|商品名称|string||
|brandName|品牌|string||
|standard|封装|string||
|description|商品描述|string||
|gdStockNum|广东仓库存|string||
|channelType|渠道：self-自营|string||
|priceList|阶梯价|List|LadderPriceVO|
|startStep|起始数量|integer||
|originPrice|原价|bigDecimal||
|discountedPric<br>e|折扣价（无折扣时等于原价）|bigDecimal||
|successful||boolean||

## 响应示例:

<mark>{</mark> "code": 200, "data": { "bomItemList": [

{

<mark>"bomItemId": "618953",</mark> "matchType": "perfect", "matchedProduct": { "brandName": "SUNON(建准)", "channelType": "self", "description": "", "gdStockNum": 223, "priceList": [ { "discountedPrice": 26.26, "originPrice": 26.26, "startStep": 1 }, { "discountedPrice": 25.26, "originPrice": 25.26, "startStep": 10 } ], "productCode": "C456910", "productId": 459897, "productModel": "MF40102VX-1Q03C-A99", "productName": "直流 DC 风扇 24vMF40102VX-1Q03C-A99 40*40*10mm", "standard": "-" }, "originBrand": "SUNON", "originModel": "MF40102VX-1Q03C-A99", "quantity": "1", "rowNo": 1, "totalQuantity": 1 }, { "bomItemId": "618954", "matchType": "cannot_match", "originBrand": "", "originModel": "", "quantity": "1",

<mark>"rowNo": 2,</mark> "totalQuantity": 1 } ], "matchSummary": { "ai": 0, "cannotMatch": 1, "choice": 0, "perfect": 1, "total": 2, "waitMatch": 0 }, "progress": 100, "sets": 1, "status": "done" }, "successful": true

}
