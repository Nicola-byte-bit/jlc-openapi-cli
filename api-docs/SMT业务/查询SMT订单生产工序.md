---
title: "查询SMT订单生产工序"
api_uri: "/smtOpenApi/order/selectProduceScheduleVo"
category: "SMT业务"
description: "查询SMT订单生产工序"
doc_id: "8730933124249325569"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8730933124249325568-%E6%9F%A5%E8%AF%A2SMT%E8%AE%A2%E5%8D%95%E7%94%9F%E4%BA%A7%E5%B7%A5%E5%BA%8F.pdf"
---
# 查询 **SMT** 订单生产工序

## 基本信息

<mark>请求方式：POST</mark>

<mark>请求路径：</mark> /smtOpenApi/order/selectProduceScheduleVo

<mark>请求参数</mark>

### **<mark>Header</mark>** <mark>参数</mark>

|名称|类型|必须|描述|
|---|---|---|---|
|Authorization|string|是|签名认证生成认证信息|
|Content-Type|string|是|请设置为application/json|
|Accept|string|是|请设置为application/json|

### **<mark>Body</mark>** <mark>参数</mark>

|名称|类型|必须|描述|
|---|---|---|---|
|smtOrderAccessId|string|必须|smt订单uuid|

## 响应参数 **data[]**

|名称|类型|描述|
|---|---|---|
|topWipSchedule;|SmtWipScheduleVo|顶层贴片生产流程|
|bottomWipSchedule|SmtWipScheduleVo|底层贴片生产流程|
|wipStatus|Integer|进度状态|
|collectDate|Date|提取资料时间|
|completeDate|Date|完成资料时间|
|pcbSignDate|Date|PCB签收时间|
|steelmeshSignDate|Date|钢网签收时间|
|componentSignDate|Date|元器件签收时间|
|componentOrderDate|Date|元器件准备时间|

|boardScanDate|Date|分板扫描时间|
|thtManualWeldQcScanDate;|Date|THT(手焊)QC扫描时间|
|qcDate|Date|QC扫描时间|
|manualWeldScanDate|Date|手工焊接时间|
|sendFinishDate|Date|发货完成时间|
|packageDate|Date|包装扫描时间|
|smtOrderAddress|String|SMT生产基地|
|smtOrderCode|String|订单编号|
|existExpand|Boolean|是否存在扩展|
|patchLocation|String|贴片位置(顶层：T，底层：B，顶层+底层：TB)|
|processRoute|Integer|工艺路径（未自动确定：0，未确定：1，拼大板：<br>2，单款：3）|
|xrayStandardType|String|x-ray检查层(T、B、TB)|
|manualWeldMaterielFlag|Boolean|是否存在手焊物料（否：0，是：1）|

#### SmtWipScheduleVo(贴片生产流程)

|名称|类型|描述|
|---|---|---|
|steelmeshScanDate|Date|钢网上机时间|
|weldScanDate|Date|回流焊扫描时间|
|xrayScanDate|Date|X-ray检查（抽检）时间|
|patchDate|Date|贴片完成时间|

## 请求示例

{

"smtOrderAccessId":"13a7785cce0b4670b9a36a7985b2d5b2"

}

响应示例

{ "success": **true** , "code": 200, "message": **null** , "data": { "boardScanDate": **null** , "bottomWipSchedule": { "patchDate": "2023-05-30T09:50:24.000Z", "steelmeshScanDate": "2023-05-30T09:48:21.000Z", "weldScanDate": "2023-05-30T09:50:53.000Z", "xrayScanDate": **null** }, "collectDate": "2023-05-30T08:11:51.000Z", "completeDate": "2023-05-30T08:11:52.000Z", "componentOrderDate": "2023-05-30T09:27:29.000Z", "componentSignDate": **null** , "existExpand": **true** , "manualWeldMaterielFlag": **false** , "manualWeldScanDate": **null** , "orderCode": "SMT2305300063", "packageDate": "2023-05-30T09:51:37.000Z", "patchLocation": "TB", "pcbSignDate": "2023-05-30T09:46:35.000Z", "processRoute": 3, "qcDate": "2023-05-30T09:51:13.000Z", "sendFinishDate": "2023-05-30T09:54:53.000Z", "smtOrderAddress": "sz", "steelmeshSignDate": "2023-05-30T09:47:19.000Z", "thtManualWeldQcScanDate": **null** , "topWipSchedule": { "patchDate": "2023-05-30T09:50:07.000Z", "steelmeshScanDate": "2023-05-30T09:48:12.000Z", "weldScanDate": "2023-05-30T09:50:46.000Z", "xrayScanDate": **null** }, "wipStatus": 6, "xrayStandardType": "" }

}

## <u><mark>错误码</mark></u>

|错误码<br>描述|
|---|
|200<br>请求成功|
|500<br>请求失败|
