---
title: "SMT 查询物料信息"
api_uri: "/smtOpenApi/order/selectComponentInfo"
category: "SMT业务"
description: "SMT 查询物料（元器件）信息"
doc_id: "8669639885244764160"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8669639885227986945-SMT%C2%A0%E6%9F%A5%E8%AF%A2%E7%89%A9%E6%96%99.pdf"
---
# **SMT** 查询物料（元器件）信息

## 基本信息

请求方式：POST

请求路径：/smtOpenApi/order/selectComponentInfo

请求参数

### **Header** 参数

|名称|类型|必须|描述|
|---|---|---|---|
|Authorization|string|是|签名认证生成认证信息|
|Content-Type|string|是|请设置为application/json|
|Accept|string|是|请设置为application/json|

### **Body** 参数

|名称|类型|必须|描述|
|---|---|---|---|
|queryString|String|是|查询关键字|
|pageNum|int|是|页码|
|pageSize|int|是|每页显示数量|

## 响应参数

|名称|类型|描述|
|---|---|---|
|totalPages|int|总页数|
|totalRows|Long|总记录数|
|data|[object]|结果集|

### 结果集 **Data**

|名称|类型|描述|
|---|---|---|
|componentCode|String|元件编号|
|componentSpecification|String|封装规格|
|componentModel|String|元件型号|

## 请求示例

{

"queryString":"10k",

"pageNum":1,

"pageSize":20

}

## 响应示例

{

"success": **true** ,

"code": 200,

"message": **null** ,

"data": { "data": [ { "componentCode": "C17902", "componentSpecification": "1206", "componentModel": "1206W4F1002T5E" }, { "componentCode": "C25744", "componentSpecification": "0402", "componentModel": "0402WGF1002TCE" }, { "componentCode": "C17414","componentSpecification": "0805", "componentModel": "0805W8F1002T5E" }, { "componentCode": "C226679", "componentSpecification": "0402", "componentModel": "AC0402DR-0710KL" }, { "componentCode": "C227439", "componentSpecification": "0603", "componentModel": "AC0603DR-0710KL" }, { "componentCode": "C706400", "componentSpecification": "0805", "componentModel": "RT0805WRD0710KL" }, { "componentCode": "C695179", "componentSpecification": "0402_x2", "componentModel": "YC122-JR-0710KL" }, { "componentCode": "C1739565", "componentSpecification": "SMD", "componentModel": "MU10K00/10K00DAL" }, { "componentCode": "C1739043", "componentSpecification": "SMD",

"componentModel": "MU10K00/10K00DQL" }, {

"componentCode": "C1739494",

- "componentSpecification": "SMD",

"componentModel": "MU10K00/10K00ATL" },

{

"componentCode": "C1363339",

"componentSpecification": "SMD",

"componentModel": "MU10K00/10K00BQ" },

{"componentCode": "C364373", "componentSpecification": "01005",

"componentModel": "RC0100FR-0710KL" }, {

"componentCode": "C723366",

"componentSpecification": "0402",

"componentModel": "RT0402FRE0710KL" }, {

"componentCode": "C1739109",

"componentSpecification": "SMD",

"componentModel": "MU10K00/10K00BQL" }, {

"componentCode": "C1362663",

"componentSpecification": "SMD",

"componentModel": "MU10K00/10K00DA" }, {

"componentCode": "C1362969",

"componentSpecification": "SMD",

"componentModel": "MU10K00/10K00QT" }, {

"componentCode": "C723584",

"componentSpecification": "0402",

"componentModel": "RT0402FRD0710KL" }, {

- "componentCode": "C1363520",

"componentSpecification": "SIP-6",

"componentModel": "SC005B10K0010K00BQ"

},

{

"componentCode": "C58714",

"componentSpecification": "RES-TH_BD4.5-L11.5-P15.50-D0.7",

"componentModel": "MFR01SF1002A10"

}, {

"componentCode": "C61283",

"componentSpecification": "RES-TH_BD3.0-L9.5-P13.50-D0.6",

"componentModel": "CFR0S2J0103A10"

}],

"pageNum": 1,

"pageSize": 20 "totalPages": 9553, "totalRows": 9553

} }

## <u>错误码</u>

|错误码|描述|
|---|---|
|200|请求成功|
|500|请求失败|
