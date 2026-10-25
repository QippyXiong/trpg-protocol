# trpg-protocol

三个项目共用的 npm 协议包（当前 0.1.0），Node.js 22+。API 路由、事件种类与文案、可见性、TypeScript 类型和 JSON Schema 统一在这里维护。包不包含故事规则、鉴权凭据、数据库模型或伤害判定。

## 消费

当前三个源码仓库用 `file:../trpg-protocol` 作为共同依赖，四个仓库放在同一父目录；发布或 GitHub 地址确定后可改为明确版本。尚未发布 npm registry，包名可用性尚未核验。

在 trpg-server / trpg-web / trpg-cli 分别运行：

```sh
npm install --ignore-scripts --no-audit --no-fund
npm run protocol:sync
npm run protocol:check
```

网页消费生成的 `static/protocol.js`；Python 运行时读取生成的 `protocol.json`，CLI 打包也包含此 JSON。生成文件提交 Git，使 Python 运行不依赖 Node；但不得手改。`protocol.lock.json` 保存版本与源文件 SHA-256，check 对内容逐字校验。直接 npm 使用可 `import {apiPath, EVENT_LABELS, isEvent} from 'trpg-protocol'`，另有 TypeScript 类型及 JSON Schema。

## 开发与打包

```sh
npm test
npm pack
```

JSON Schema 描述传输结构，不替代服务端权限、顺序、超时或 DM 判断。`PreparedAction` 是新规则行动的结构，旧版兼容由服务端保留。`isEvent` 是轻量类型守卫，不是完整 JSON Schema 验证器。外部消费不应把未知未来事件默默删掉。

契约变更在本仓库提交，提高版本，三个消费端更新依赖并同步锁文件，跑集成测试。破坏性变更升级主版本；0.x 阶段升级次版本。消费端当前仅接受0.1.x，升级0.2需明确修改兼容声明。已安装的 Python 包需重新构建安装，不能只改源码外的 JSON。

GitHub 三端工作流默认从同一所有者的 trpg-protocol 仓库检出契约；若它是私有仓库，需提供只读 PROTOCOL_READ_TOKEN，否则默认单仓库 token 可能无法读取。
