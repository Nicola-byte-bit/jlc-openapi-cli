---
name: jlc-openapi-cli
description: 调用嘉立创开放平台（JLC OpenAPI，open-api.jlc.com）接口的命令行工具。用于配置 appId/ak/sk、列出可用接口、分页查询 PCB 订单（样板 examples / 小批量 batch），支持按订单号、下单时间范围、是否过滤取消订单等条件筛选。当用户提到嘉立创、JLC、嘉立创开放平台、PCB 订单查询、订单列表、订单记录、open-api.jlc.com，或要求查询、统计、导出 PCB 订单时使用。Use for JLC OpenAPI PCB order queries and other registered endpoints.
---

# 嘉立创开放平台 CLI

`jlc-openapi-cli` 封装了嘉立创开放平台的请求签名与 HTTP 调用，stdout 直接返回 JSON，
适合智能体解析。

## 何时使用

- 查询 PCB 订单（样板 `examples` / 小批量 `batch`）
- 按下单时间、生产订单号、取消状态筛选订单
- 分页遍历订单列表
- 初始化或排查开放平台凭据
- 通过 `call` 调用未注册的开放平台接口

不要用它做与嘉立创开放平台无关的事情。

## 前置检查

1. 确认已安装：

   ```bash
   jlc-openapi-cli --version
   ```

2. 如果提示 command not found，安装（需要 Node.js >= 18.17）：

   ```bash
   npm install -g jlc-openapi-cli
   ```

   如果用户没有全局安装权限，请让用户配置 npm 用户级 prefix 或使用 nvm，不要建议 `sudo npm install -g`。

3. 查看当前可用接口（不需要配置、不联网）：

   ```bash
   jlc-openapi-cli list --json --compact
   ```

## 配置凭据

运行时配置优先级：`--config` > 当前目录 `./jlc-openapi-config.json` >
`~/.jlc-openapi-config.json`；环境变量按字段覆盖。

**智能体应使用非交互方式**，不要尝试回答交互式提示：

```bash
jlc-openapi-cli init \
  --appId "<APP_ID>" \
  --ak "<ACCESS_KEY>" \
  --sk "<SECRET_KEY>" \
  --endpoint "https://open-api.jlc.com"
```

- 生产地址：`https://open-api.jlc.com`
- 测试地址：`https://test-open-api.jlc.com`
- 缺少凭据时，向用户索取 appId、ak、sk，**不要猜测或编造**。
- 也可以用环境变量代替落盘配置：`JLC_OPENAPI_APP_ID`、`JLC_OPENAPI_ACCESS_KEY`、
  `JLC_OPENAPI_SECRET_KEY`、`JLC_OPENAPI_ENDPOINT`。
- `init` 会在 `~/.jlc-openapi-config.json` 写入明文密钥。**不要 cat、打印或提交该文件**。

## 核心用法：分页查询 PCB 订单

```bash
jlc-openapi-cli /pcb/order/getOrderPageList \
  --orderType "examples" \
  --produceCode "Y50504" \
  --orderByFlag true \
  --orderDateBegin "2026-11-11 00:00:00" \
  --orderDateEnd "2026-11-16 18:00:00" \
  --pageSize 10 \
  --pageNum 1 \
  --queryFilterFlag true \
  --compact
```

### 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `--orderType` | `examples` \| `batch` | 是 | 样板 / 小批量 |
| `--produceCode` | string | 否 | 生产订单号，例如 `Y50504` |
| `--orderByFlag` | boolean | 否 | 按下单时间排序：`true` 降序，`false` 升序 |
| `--orderDateBegin` | `"yyyy-MM-dd HH:mm:ss"` | 是 | 下单开始时间 |
| `--orderDateEnd` | `"yyyy-MM-dd HH:mm:ss"` | 是 | 下单结束时间，与开始时间相差不能超过 365 天 |
| `--pageSize` | integer | 是 | 每页条数，1-100 |
| `--pageNum` | integer | 是 | 页码，从 1 开始 |
| `--queryFilterFlag` | boolean | 否 | `true` 过滤已取消订单 |

时间按中国时区（UTC+8）理解，直接用用户给出的本地时间字符串，不要做时区换算。

### 响应

stdout 为格式化 JSON（加 `--compact` 为单行）：

```json
{
  "success": true,
  "code": 200,
  "message": null,
  "data": {
    "list": [{ "customerOrderId": 82607537, "produceCode": "Y50504", "orderType": "examples" }],
    "total": 1,
    "pageNum": 1,
    "pageSize": 10,
    "pages": 1
  }
}
```

### 分页遍历

`pageSize` 最大 100。需要全部数据时：

1. 先请求 `pageNum=1`，读取 `data.pages` 和 `data.total`。
2. `pageNum` 从 1 递增到 `data.pages`，直到取完。
3. 每次翻页都向用户展示进度，不要无限循环；`data.list` 为空时停止。

## 智能体操作约定

- **stdout 是数据，stderr 是诊断信息**。解析 stdout 的 JSON，不要把 stderr 混进结果。
- 复杂请求体优先用 `--json-file <path>`，避免 shell 引号转义问题；
  已注册接口的逐字段参数与 `--json` 互斥。
- 需要机器解析时可加 `--compact`；需要完整原始响应用 `--raw`。
- 输出中的 `customerOrderId` 可能超出 JS 安全整数范围，**按字符串处理，不要转成 Number**。
- 不要默认加 `--debug`：它会打印 Authorization（包含 accesskey）。仅在用户明确要求排查签名时使用。

### 退出码

| 退出码 | 含义 | 处理方式 |
| --- | --- | --- |
| 0 | 成功 | 解析 stdout |
| 1 | 业务失败（`code !== 200` 或 `success === false`） | stdout 仍有服务端响应；读取 `code`/`message` 告知用户，不要盲目重试 |
| 2 | 用法或配置错误 | 按 stderr 的 `message` 修正参数或运行 `init` |
| 3 | 网络错误、超时、HTTP 非 2xx | 只读查询可重试一次；写操作不要自动重试 |
| 4 | 内部错误 | 报告 stderr 内容 |

出错时 stderr 是单行 JSON：

```json
{"error":{"type":"usage","message":"参数 --pageSize 不能大于 100"}}
```

## 调用未注册接口

```bash
jlc-openapi-cli call /path/to/api --json '<body>' --method POST
jlc-openapi-cli call /path/to/api --json-file body.json --method POST
```

使用前向用户确认接口路径、请求体和 HTTP 方法；不要根据猜测构造写操作请求。
涉及下单、退款、修改类接口时，必须先获得用户明确确认。

## 故障排查

| 现象 | 处理 |
| --- | --- |
| `command not found` | `npm install -g jlc-openapi-cli`，检查 npm 全局 bin 是否在 PATH |
| 配置缺失 | 运行 `jlc-openapi-cli init --appId ... --ak ... --sk ...` |
| 签名失败 / 401 / `code: 1000` | 检查系统时间是否准确、endpoint 是否正确、ak/sk 是否匹配 |
| `HTTP 429` 额度限制 | 当天调用额度用尽，等待次日或联系嘉立创 |
| Git Bash 把路径改写成本地路径 | 设置 `MSYS_NO_PATHCONV=1`，或使用不带前导 `/` 的 `pcb/order/getOrderPageList` |
| 提示配置文件不存在 | 确认当前目录是否有 `jlc-openapi-config.json`，或运行 `init` 写入主目录 |

## 安全

- sk 只保存在本地配置或环境变量中，永远不要写进代码、日志、提交记录或回复内容。
- 分享命令示例时，用 `<APP_ID>` / `<ACCESS_KEY>` / `<SECRET_KEY>` 代替真实值。
- 不要把 `~/.jlc-openapi-config.json` 的内容输出给用户或第三方。
