# @qippyxiong/trpg-protocol

MIT 开源传输契约，版本 **0.1.1**。Node.js 22+，无运行时第三方依赖。

源码仅 `src/types.ts`（结构和枚举）、`src/errors.ts`（HTTP错误码）、`src/routes.ts`（路径、方法、版本）。不包含业务实现。

## 发布状态与安装

源码与 [v0.1.1 Release](https://github.com/QippyXiong/trpg-protocol/releases/tag/v0.1.1)已经公开，GitHub Packages也有此前发布的版本。**npm官方registry的0.1.1尚未发布**：当前本机npmjs认证缺失，正在等待账号登录及scope权限。不要把GitHub Packages已发布混同于npmjs已发布。

已将publishConfig、scope映射和发布工作流切至 `https://registry.npmjs.org`，并显式配置 `access: public`。GitHub Token不作为npmjs发布凭据。

发布完成后，普通用户不需要GitHub配置：

```sh
npm install @qippyxiong/trpg-protocol@0.1.1
```

发布前可匿名下载Release压缩包并本地安装：

```sh
curl --fail --location --proto '=https' -o protocol.tgz https://github.com/QippyXiong/trpg-protocol/releases/download/v0.1.1/qippyxiong-trpg-protocol-0.1.1.tgz
npm install ./protocol.tgz
```

Release是此前GitHub Packages发布物的副本；它携带的旧registry元数据不代表新npmjs发布目标，勿将这个旧tgz直接当成npmjs发布候选。

## 开发和发布

```sh
npm ci --ignore-scripts
npm test
npm pack
```

发布前先在本机 `npm login --registry=https://registry.npmjs.org` 并确认拥有 `@qippyxiong` 用户或组织scope，再执行 `npm publish --registry=https://registry.npmjs.org --access=public`。CI发布需在仓库Secrets配置具有npm发布权限的NPM_TOKEN；不要把凭据放到源码、群聊或问题记录里。

历史和当前文件（含ignored文件及tgz成员）已重新执行凭据模式扫描，未发现命中；这不是对所有潜在秘密的绝对保证。LICENSE、发布内容白名单和完整性检查都保留。dist产物与版本常量由构建核对。
