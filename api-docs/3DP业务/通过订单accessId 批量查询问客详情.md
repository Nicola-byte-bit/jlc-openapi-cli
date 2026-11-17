---
title: "通过订单accessId 批量查询问客详情"
api_uri: "/3dp-open/ask/getOPAskListByOrderAccessId"
category: "3DP业务"
description: "通过订单accessId 批量查询问客详情"
doc_id: "8758825489641619456"
source: "https://pbt-common.jlc.com/pbt/jlc-open-platform/8758825489608065024-%E9%80%9A%E8%BF%87%E8%AE%A2%E5%8D%95accessId%E5%88%97%E8%A1%A8%E6%9F%A5%E8%AF%A2%E9%97%AE%E5%AE%A2%E6%8E%A5%E5%8F%A3.pdf"
---
# 通过订单accessId列表查询问客接⼝

通过订单accessId列表查询问客接⼝ 基本信息

请求⽅式：POST

请求路径：/3dp-open/ask/getOPAskListByOrderAccessId

## 请求参数

## Header参数

|名称|类型|必须|描述|
|---|---|---|---|
|Authorization|string|必须|签名认证 ⽣成认证信息|
|Content-Type|string|必须|设置为application/json|
|Accept|string|必须|设置为application/json|

## body参数

|名称|类型|必须|描述|
|---|---|---|---|
|orderAccessIdList|List< String>|必须|订单业务id列表|

## 响应参数

|名称|类型|描述|
|---|---|---|
|data|List< OPAskDetailResponseVO>|问客详情列表|

## OPAskDetailResponseVO

|名称|类型|描述|
|---|---|---|
|askAccessId|String|问客详情accessId(⼀个订<br>单有可能存在多个问客内<br>容)|
|orderAccessId|String|订单accessId|

|orderCode|String|订单编号|
|fileName|String|⽂件名称|
|title|String|问客主题|
|status|Integer|问客状态0不需要问客1问<br>客中2问客完成3需问客|
|askUserName|String|问客⼈|
|askTime|String|问客时间 格式：2026-01-<br>01 00:00:00|
|consultationRecords|List<<br>OPAskConsultationRecordResponseVO>|咨询记录|

## OPAskConsultationRecordResponseVO

|名称|类型|描述|
|---|---|---|
|content|String|问客信息|
|createTime|String|创建时间 格式：2026-01-01 00:00:00|
|fileList|List< String>|图⽂内容(图⽚URL列表)|

## 请求⽰例

```
{
  "orderAccessIdList": [
    "4d1454e71bd641e5866cb47d0fcab65c",
    "8a7b6c5d4e3f2011aabbccddeeff0011"
  ]
}
```

```
    "4d1454e71bd641e5866cb47d0fcab65c",
```

## 响应⽰例

`{ "code": 200, "message": null, "data": [ { "askAccessId": "a1b2c3d4e5f60718293a4b5c6d7e8f90", "orderAccessId": "4d1454e71bd641e5866cb47d0fcab65c", "orderCode": "ORD20260626001", "fileName": "` 壳体 `.stl", "title": "` 壁厚确认 `", "status": 1, "askUserName": "` 李⼯ `", "askTime": "2026-06-20 10:30:00", "consultationRecords": [ { "content": "` 请确认该件壁厚是否满⾜ `0.8mm", "createTime": "2026-06-20 10:30:00", "fileList": [ "https://cdn.example.com/ask/img1.png" ] } ] } ], "successful": true }`

|错误码|错误码描述|
|---|---|
|200|请求成功|
|500|请求失败|
