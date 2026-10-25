# @xiong/trpg-protocol

版本 **0.1.0**。独立发布的 npm 契约包，Node.js 22+；运行时无第三方依赖。

源码只有三个文件：

- `src/types.ts`：事件结构、行动字段、字段枚举。
- `src/errors.ts`：错误码与错误响应类型。
- `src/routes.ts`：API 路径、HTTP 方法和协议版本。

不包含骰子、血量、物品效果、结局判断、鉴权实现、事件校验函数或服务端路由分发逻辑。包内 `dist/` 是这三个文件生成的 JS、类型声明、JSON 和浏览器常量；构建脚本不随包发布。


## 尚未发布与本地联调

本包尚未发布，应用仓库不能直接从registry安装0.1.0。源码clone后先运行 `npm ci --ignore-scripts --no-audit --no-fund`，再运行 `npm pack`，将生成的 `xiong-trpg-protocol-0.1.0.tgz` 临时安装到三个应用仓库。三个应用README开头均给出了完整安装、同步和发布后切回版本号的命令。临时file依赖不得代替正式固定版本配置提交。

## 使用

发布后各消费者声明精确依赖：

```json
{"dependencies":{"@xiong/trpg-protocol":"0.1.0"}}
```

```ts
import {ROUTES, ERROR_CODES} from '@xiong/trpg-protocol';
import type {RoomEvent, PreparedAction} from '@xiong/trpg-protocol/types';
```

服务端和 CLI 从包的 `contract.json` 导出构建期 JSON，网页使用生成的常量，运行时均无需跨仓库目录。三端本地同步脚本是构建适配，不属于协议包。其 protocol.lock.json 检查版本与内容哈希。

## 构建与独立发布

```sh
npm ci --ignore-scripts
npm test
npm pack
```

已选择私有GitHub Packages；实际仓库地址与scope权限仍待核验，因此尚未发布。确认后可将本包单独发布到 npm/private registry，或使用所有者给出的 Git 地址及明确标签。不得把相对 file: 路径写入正式消费依赖。

私有 registry 由 .npmrc 或环境配置，不写 token 入库。发布后在三个消费者运行 npm install、npm run protocol:check，并提交安装生成的 package-lock.json。当前仅用真实 tgz 进行本地安装验证，正式 registry 的锁文件尚未伪造或提前生成。

版本变更需同步 package.json 与 routes.ts 的版本常量；构建会检查一致。破坏性变更升级主版本；0.x 期间升级次版本。业务实现始终留在 trpg-server。

编译产物dist随独立Git仓库提交，方便固定标签的Git依赖；CI重新构建并校验产物，防止手改产物。三个TS文件是唯一源码。

## GitHub Packages 发布方案

已选择私有 GitHub Packages，scope 映射在 .npmrc，发布 registry 被限定为 https://npm.pkg.github.com。实际仓库所有者必须与 @xiong 对应；当前尚未拿到远程地址，未推送或发布。

协议仓库的 Publish private protocol package 工作流只可手动触发，先核验私有仓库及scope，再测试、绑定实际仓库URL并发布；新包按GitHub默认保持private，不添加public发布选项。三端CI具备packages:read，仍须在包的Actions访问设置中授予这些私有仓库读取权限，或配置只读NPM_READ_TOKEN。本机可通过npm login --scope=@xiong --auth-type=legacy --registry=https://npm.pkg.github.com认证，token只在本机输入，不入库或群聊。
