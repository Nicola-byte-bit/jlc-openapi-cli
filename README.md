# jlc-openapi-cli

嘉立创开放平台命令行工具。封装了请求签名流程，可被 Claude Code、Codex 等智能体直接调用。

完整安装、配置与 Claude Code 使用说明见仓库中的 `docs/安装与使用指南.md`。

## 安装

```bash
npm install -g jlc-openapi-cli
```

要求 Node.js >= 18.17。

## 安装 Skill（可选）

仓库内置 `skills/jlc-openapi-cli`，仓库发布到 GitHub 后可通过
[skills CLI](https://skills.sh) 安装给智能体（把 `<你的GitHub用户名>` 换成实际 owner）：

```bash
npx skills add <你的GitHub用户名>/jlc-openapi-cli -y -g -a claude-code
```

`npx skills` 需要 Node.js >= 22.20。手动安装可把 `skills/jlc-openapi-cli/`
复制到 `~/.claude/skills/`（Claude Code）或 `~/.agents/skills/`（Codex 等）。

## 初始化

交互式：

```bash
jlc-openapi-cli init
```

非交互式（智能体 / CI 推荐）：

```bash
jlc-openapi-cli init \
  --appId "<APP_ID>" \
  --ak "<ACCESS_KEY>" \
  --sk "<SECRET_KEY>" \
  --endpoint "https://open-api.jlc.com"
```

配置写入 `~/.jlc-openapi-config.json`（权限尽量设为 0600）。生产地址为
`https://open-api.jlc.com`，测试地址为 `https://test-open-api.jlc.com`。

配置读取优先级：

1. `--config <path>`
2. 当前目录 `./jlc-openapi-config.json`
3. `~/.jlc-openapi-config.json`
4. 环境变量按字段覆盖：`JLC_OPENAPI_APP_ID`、`JLC_OPENAPI_ACCESS_KEY`、
   `JLC_OPENAPI_SECRET_KEY`、`JLC_OPENAPI_ENDPOINT`

## 使用

```bash
# 查看所有接口
jlc-openapi-cli list
jlc-openapi-cli list --json --compact

# 分页查询 PCB 订单
jlc-openapi-cli /pcb/order/getOrderPageList \
  --orderType "examples" \
  --produceCode "Y50504" \
  --orderByFlag true \
  --orderDateBegin "2026-11-11 00:00:00" \
  --orderDateEnd "2026-11-16 18:00:00" \
  --pageSize 10 \
  --pageNum 1 \
  --queryFilterFlag true
```

响应以格式化 JSON 输出到 stdout。业务失败时退出码为 1，但服务端响应仍会输出，便于排查。

### 通用调用

```bash
jlc-openapi-cli call /pcb/order/getOrderPageList --json '{"orderType":"examples",...}'
jlc-openapi-cli call /some/other/path --json-file body.json --method POST
```

### 全局选项

| 选项 | 说明 |
| --- | --- |
| `--config <path>` | 指定配置文件 |
| `--endpoint <url>` | 临时覆盖 endpoint |
| `--json <body>` / `--json-file <path>` | 直接指定请求体（与逐字段参数互斥） |
| `--raw` | 原样输出响应 |
| `--compact` | 单行 JSON |
| `--timeout <ms>` | 请求超时，默认 30000 |
| `--debug` | 打印 URL、待签名串与 Authorization（不含 sk） |

### 退出码

| 退出码 | 含义 |
| --- | --- |
| 0 | 成功 |
| 1 | 业务失败（`code !== 200` 或 `success === false`） |
| 2 | 用法 / 配置错误 |
| 3 | 网络错误、超时、HTTP 非 2xx |
| 4 | 内部错误 |

### Windows / Git Bash 提示

Git Bash（MSYS）可能把 `/pcb/order/getOrderPageList` 改写成 `C:/Program Files/Git/pcb/...`。
可以设置 `MSYS_NO_PATHCONV=1`，或直接使用不带前导 `/` 的写法
`jlc-openapi-cli pcb/order/getOrderPageList ...`。

## 开发

```bash
npm install
npm run build
npm test
npm pack --dry-run
```

签名实现遵循嘉立创开放平台文档：

```text
METHOD\nPATH[?query]\nTIMESTAMP\nNONCE\nBODY\n
```

`signature = Base64(HmacSHA256(secretKey, stringToSign))`，并写入
`Authorization: JOP appid="...",accesskey="...",timestamp="...",nonce="...",signature="..."`。
