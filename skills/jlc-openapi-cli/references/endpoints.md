# 接口目录

> 由 `npm run gen:endpoints` 配套脚本生成，共 111 个接口（110 个官方文档 + 1 个兼容接口）。
> 详细参数用 `jlc-openapi-cli list <路径>` 或 `list <路径> --json` 查看。


## PCB业务 (14)

| 方法 | 路径 | 名称 | 参数数 | 备注 |
| --- | --- | --- | --- | --- |
| POST | `/pcb/onlinePrice/get` | 在线计价 | 57 |  |
| POST | `/pcb/order/backOrder/create` | 创建返单 | 55 |  |
| POST | `/pcb/order/create` | 创建订单 | 103 |  |
| POST | `/pcb/order/get` | 查询订单 | 2 |  |
| POST | `/pcb/order/getExpressSchedule` | 查询订单物流轨迹 | 2 |  |
| POST | `/pcb/order/getList` | 批量查询订单 | 2 |  |
| POST | `/pcb/order/getListBySerialCode` | 根据序列码查询订单 | 1 |  |
| POST | `/pcb/order/getOrderDownloadFile` | 查询订单文件下载信息 | 4 |  |
| POST | `/pcb/order/getOrderPageList` | 分页查询订单（兼容） | 8 | 兼容、严格校验 |
| POST | `/pcb/order/getOrderPhysicalPicture` | 查询订单实物图 | 2 |  |
| POST | `/pcb/order/getOrderPriceDetails` | 查询订单明细价格 | 1 |  |
| POST | `/pcb/order/getOrderSteelMeshSpecificationDetails` | PCB查询钢网规格信息 | 0 |  |
| POST | `/pcb/order/getOrderWebPriceDetails` | 查询订单web端明细价格 | 1 |  |
| POST | `/pcb/order/progress/get` | 查询订单生产进度 | 2 |  |

## SMT业务 (19)

| 方法 | 路径 | 名称 | 参数数 | 备注 |
| --- | --- | --- | --- | --- |
| POST | `/smtOpenApi/componentMail/addCustomerPackageDetail` | 元器件添加至待邮寄包裹 | 2 |  |
| POST | `/smtOpenApi/componentMail/applyComponent` | 补全元器件信息 | 8 |  |
| POST | `/smtOpenApi/componentMail/deleteMailPackageDetail` | 移除指定包裹详情信息 | 1 |  |
| POST | `/smtOpenApi/componentMail/saveMailInfo` | 保存邮寄信息 | 4 |  |
| POST | `/smtOpenApi/componentMail/saveMailPackage` | 保存邮寄包裹信息 | 4 |  |
| POST | `/smtOpenApi/componentMail/selectCustomerPackageDetail` | 查询元器件待邮寄包裹详情 | 1 |  |
| POST | `/smtOpenApi/componentMail/selectMailComponentNumberInfo` | 查询邮寄元器件相关数量 | 1 |  |
| POST | `/smtOpenApi/componentMail/selectWaitMailList` | 查询元器件待邮寄列表 | 2 |  |
| POST | `/smtOpenApi/componentMail/selectWaitPackageList` | 查询元器件待邮寄包裹 | 0 |  |
| POST | `/smtOpenApi/componentMail/toMailInit` | 元器件去邮寄初始化 | 4 |  |
| POST | `/smtOpenApi/componentMail/updateMailPackageDetail` | 修改包裹详情信息 | 4 |  |
| POST | `/smtOpenApi/componentMail/updateMailPackageInfo` | 修改包裹信息 | 2 |  |
| POST | `/smtOpenApi/componentMail/validExpressNumber` | 校验快递单号 | 1 |  |
| POST | `/smtOpenApi/order/addComponentMail` | 添加元器件邮寄 | 4 |  |
| POST | `/smtOpenApi/order/selectComponentInfo` | SMT 查询物料信息 | 3 |  |
| POST | `/smtOpenApi/order/selectProduceScheduleVo` | 查询SMT订单生产工序 | 1 |  |
| POST | `/smtOpenApi/order/selectSmtOrderInfo` | 查询SMT订单信息 | 1 |  |
| POST | `/smtOpenApi/smtComponent/selectComponentInfoByCodes` | 查询元器件信息 | 1 |  |
| POST | `/smtOpenApi/smtComponent/selectPrivateStockPage` | SMT查询客户私有库元器件信息 | 5 |  |

## 3DP业务 (21)

| 方法 | 路径 | 名称 | 参数数 | 备注 |
| --- | --- | --- | --- | --- |
| POST | `/3dp-open/ask/getOPAskListByOrderAccessId` | 通过订单accessId 批量查询问客详情 | 1 |  |
| POST | `/3dp-open/ask/getOPAskingAskList` | 查询当前客户近半个月问客中的记录接口 | 0 |  |
| POST | `/3dp-open/ask/replyOPAsk` | 客户回复问客接口 | 2 |  |
| POST | `/3dp-open/order/bindOPOrderBatch` | 3D打印订单绑定发货接口 | 1 |  |
| POST | `/3dp-open/order/cancelOrderByOrderAccessId` | 取消订单 | 1 |  |
| POST | `/3dp-open/order/checkMaterialSizeLimit` | 检查材料尺寸限制 | 5 |  |
| GET | `/3dp-open/order/getAllEnableMaterialInfo` | 获取所有可用的材料信息 | 0 |  |
| POST | `/3dp-open/order/getAvailableExpress` | 查询可用快递 | 25 |  |
| POST | `/3dp-open/order/getCraft` | 查询材料颜色可用表处 | 1 |  |
| POST | `/3dp-open/order/getExpressDetail` | 查询快递进度 | 1 |  |
| POST | `/3dp-open/order/getModelDeliveryPrice` | 获取模型交期价格 | 19 |  |
| POST | `/3dp-open/order/getOPAllEnableMaterialManual` | 查询材料介绍 | 0 |  |
| POST | `/3dp-open/order/getOPProcessProgress` | 获取生产进度信息接口 | 2 |  |
| POST | `/3dp-open/order/getOrderDetailByOrderAccessId` | 查询订单详情 | 1 |  |
| POST | `/3dp-open/order/getOrderInfoListByPage` | 分页查询用户的订单信息 | 6 |  |
| POST | `/3dp-open/order/getOrderProduceProgress` | 查询生产进度 | 2 |  |
| POST | `/3dp-open/order/queryModelAnalysisResult` | 查询模型解析状态 | 1 |  |
| POST | `/3dp-open/order/returnOrder` | 返单接口 | 4 |  |
| POST | `/3dp-open/order/submitOrder` | 提交订单 | 51 |  |
| POST | `/3dp-open/order/uploadModelFile` | 上传模型文件接口 | 2 | multipart |
| POST | `/3dp-open/order/uploadNutFile` | 上传镶嵌螺母文件 | 2 | multipart |

## 元器件&MRO (14)

| 方法 | 路径 | 名称 | 参数数 | 备注 |
| --- | --- | --- | --- | --- |
| POST | `/lcsc/openapi/bom/result` | 查询BOM配单结果 | 1 |  |
| POST | `/lcsc/openapi/bom/search` | 型号批量搜索 | 1 |  |
| POST | `/lcsc/openapi/bom/submit` | 提交 BOM 配单 | 1 | multipart |
| POST | `/lcsc/openapi/enquiry/create` | 创建询价单 | 4 |  |
| POST | `/lcsc/openapi/enquiry/info` | 查询询价单 | 22 |  |
| POST | `/lcsc/openapi/enquiry/pre/order` | 询价单预下单 | 24 |  |
| POST | `/lcsc/openapi/order/detail` | 立创商城-订单详情接口 | 1 |  |
| POST | `/lcsc/openapi/order/list` | 立创商城-订单列表查询 | 4 |  |
| POST | `/lcsc/openapi/order/pre/order` | 现货预下单 | 4 |  |
| POST | `/lcsc/openapi/order/progress` | 立创商城-订单物流查询 | 1 |  |
| POST | `/lcsc/openapi/product/get/price/by/code` | 立创商城-商品价格查询 | 2 |  |
| POST | `/lcsc/openapi/product/search/global` | 立创商城-商品信息查询 | 1 |  |
| POST | `/lcsc/openapi/sku/product/basic` | 立创商城-商品基础信息查询 | 1 |  |
| POST | `/lcsc/openapi/stock/select/all/stock/by/id` | 立创商城-商品库存查询 | 1 |  |

## 嘉立创云ERP (42)

| 方法 | 路径 | 名称 | 参数数 | 备注 |
| --- | --- | --- | --- | --- |
| POST | `/open/api/saas/erp/file/directoryList` | 文件夹列表查询 | 5 |  |
| POST | `/open/api/saas/erp/file/listFileTag` | 文件标签列表查询 | 2 |  |
| POST | `/open/api/saas/erp/file/listTaskAttachmen` | 任务附件列表查询 | 1 |  |
| POST | `/open/api/saas/erp/file/updateFileRelatedTag` | 更新文件标签 | 2 |  |
| POST | `/open/api/saas/erp/file/uploadDirectoryFile` | 上传文件到指定文件夹 | 3 | multipart |
| POST | `/open/api/saas/erp/file/uploadTaskAttachment` | 上传任务附件 | 3 | multipart |
| POST | `/open/api/saas/erp/file/uploadTmpFile` | 上传临时文件 | 2 | multipart |
| POST | `/open/api/saas/erp/goods/batchAdd` | 批量新增成品 | 1 | multipart |
| POST | `/open/api/saas/erp/goods/config/tree` | 成品目录树查询 | 4 |  |
| POST | `/open/api/saas/erp/goods/page` | 分页查询成品 | 12 |  |
| POST | `/open/api/saas/erp/inventory/inStock/add` | 新增入库单 | 34 |  |
| POST | `/open/api/saas/erp/inventory/inStock/inbound` | 入库单列表-确认入库 | 1 |  |
| POST | `/open/api/saas/erp/inventory/inStock/page` | 分页查询入库单 | 15 |  |
| POST | `/open/api/saas/erp/inventory/material/batchAdd` | 批量新增物料 | 1 | multipart |
| POST | `/open/api/saas/erp/inventory/material/page` | 进销存-分页查询物料接口 | 12 |  |
| POST | `/open/api/saas/erp/inventory/materialCategory/typeTreeV2` | 物料类别类型树查询 | 4 |  |
| POST | `/open/api/saas/erp/inventory/outStock/add` | 进销存-新增出库单 | 45 |  |
| POST | `/open/api/saas/erp/inventory/outStock/outbound` | 出库单-确认出库 | 1 |  |
| POST | `/open/api/saas/erp/inventory/outStock/page` | 分页查询出库单 | 32 |  |
| POST | `/open/api/saas/erp/inventory/stock/goods/menuPage` | 成品库存菜单分页查询 | 22 |  |
| POST | `/open/api/saas/erp/inventory/stock/material/menuPage` | 物料库存菜单分页查询 | 42 |  |
| POST | `/open/api/saas/erp/order/detail` | 销售订单详情查询 | 1 |  |
| POST | `/open/api/saas/erp/order/menuPage` | 销售订单分页查询 | 32 |  |
| POST | `/open/api/saas/erp/productionOrder/detail` | 生产订单详情查询 | 1 |  |
| POST | `/open/api/saas/erp/productionOrder/menuPage` | 生产订单分页查询 | 3 |  |
| POST | `/open/api/saas/erp/project/memberDetailInProject` | 项目成员详情查询 | 1 |  |
| POST | `/open/api/saas/erp/project/page` | 项目-分页查询项目列表 | 11 |  |
| POST | `/open/api/saas/erp/project/updateStatus` | 项目状态变更 | 2 |  |
| POST | `/open/api/saas/erp/projectTask/add` | 创建项目任务 | 38 |  |
| POST | `/open/api/saas/erp/projectTask/detail` | 查询项目任务详情 | 2 |  |
| POST | `/open/api/saas/erp/projectTask/page` | 分页查询项目任务 | 19 |  |
| POST | `/open/api/saas/erp/projectTask/update` | 修改项目任务 | 39 |  |
| POST | `/open/api/saas/erp/projectTaskWorkingHours/add` | 登记项目工时接口 | 5 |  |
| POST | `/open/api/saas/erp/projectTaskWorkingHours/delete` | 删除项目工时 | 1 |  |
| POST | `/open/api/saas/erp/projectTaskWorkingHours/detail` | 项目工时详情查询 | 1 |  |
| POST | `/open/api/saas/erp/projectTaskWorkingHours/page` | 项目工时分页查询 | 3 |  |
| POST | `/open/api/saas/erp/projectTaskWorkingHours/update` | 修改项目工时 | 6 |  |
| POST | `/open/api/saas/erp/purchaseOrder/detail` | 采购订单详情查询接口 | 1 |  |
| POST | `/open/api/saas/erp/purchaseOrder/menuPage` | 采购订单明细分页查询 | 4 |  |
| POST | `/open/api/saas/erp/warehouse/menuPage` | 分页查询仓库 | 12 |  |
| POST | `/open/api/saas/erp/warehouse/warehouseLocationPage` | 分页查询库位 | 9 |  |
| POST | `/open/api/saas/erp/warehouse/warehouseLocationTreeV2` | 查询仓库-货架-库位树接口 | 3 |  |

## CNC业务 (1)

| 方法 | 路径 | 名称 | 参数数 | 备注 |
| --- | --- | --- | --- | --- |
| POST | `/machineIntegrated/toolBox/v1/recordCount` | UG工程插件使用记录 | 2 |  |
