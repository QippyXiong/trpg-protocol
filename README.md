# @qippyxiong/trpg-protocol

MIT 开源的传输契约，当前版本 **0.1.1**。Node.js 22+，无运行时第三方依赖。

唯一源码为 `src/types.ts`（事件与字段类型）、`src/errors.ts`（HTTP错误码）、`src/routes.ts`（路径、方法、版本）。不包含血量、骰子、物品或结局等业务判断。

## 使用

```ts
import {ROUTES, ERROR_CODES} from '@qippyxiong/trpg-protocol';
import type {RoomEvent} from '@qippyxiong/trpg-protocol/types';
```

包保留在GitHub Packages，公开源码不代表匿名npm安装：GitHub的npm registry仍需认证。`.npmrc`仅含scope映射；凭据存用户配置或Actions Secrets，不提交Git。源码仓库可公开clone，MIT许可证见[LICENSE](LICENSE)。

## 开发

```sh
npm ci --ignore-scripts
npm test
npm pack
```

构建产物dist随Git提交并由CI重建核对。打包文件仅包含声明的契约、类型、README和LICENSE；tgz与node_modules不提交。

版本变更需同时更新package.json和routes.ts；构建会检查一致。0.1.1补充MIT许可及发布配置，传输字段不变。Python客户端使用包生成的JSON，运行时不依赖Node。

GitHub Packages中的包可见性独立于仓库，必须分别核验；发布工作流支持公开仓库且仅验证实际owner/scope匹配。
