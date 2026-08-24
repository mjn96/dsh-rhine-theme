# dsh-rhine-theme

RHINE LAB（莱茵生命）分析工作台主题，面向 DeepSeek Harness Web 客户端。

以暖冷灰实验室表面、无穷符号品牌标识与信号橙主操作，重构 Harness 的侧栏、会话流与详情栏视觉语言。浅色单主题，随 profile 启动自动加载并保持生效。

## 安装

### 从 GitHub 安装（推荐）

```bash
dsh plugin --profile web add github:mjn96/dsh-rhine-theme
```

### 从 npm 安装（发布后）

```bash
dsh plugin --profile web add dsh-rhine-theme
```

### 从本地路径安装

```bash
dsh plugin --profile web add file:/绝对路径/dsh-rhine-theme
```

或手动在 profile 的 `package.json` 中添加依赖，并把 `dsh-rhine-theme` 追加进 `dsh.profile.bundles`：

```json
"dependencies": {
  "dsh-rhine-theme": "file:/绝对路径/dsh-rhine-theme"
},
"dsh": {
  "profile": {
    "bundles": [
      "...",
      "dsh-rhine-theme"
    ]
  }
}
```

### 从 git 仓库安装

```bash
dsh plugin --profile web add github:mjn96/dsh-rhine-theme
```

安装完成后重启 profile：

```bash
# 重启 web profile（按你的实际启动方式）
```

## 目录结构

```
dsh-rhine-theme/
├── package.json          # dsh.bundle + dsh.client 声明
├── cordis.patch.yml      # bundle 层挂载行
├── lib/
│   ├── index.js          # 空主机端
│   └── client.js         # 浏览器端主题实现
└── README.md
```

## 工作原理

- `dsh.bundle.patch` 指向 `cordis.patch.yml`，声明插件行，使插件进入 profile 的 bundle 层。
- `dsh.client` 声明浏览器端依赖与 `./client` 入口。
- 客户端注册 `rhine-lab-light` 主题、挂载样式表与品牌槽，并监听 `theme/change` 保持主题生效。

## 注意事项

- 三个品牌槽（`sidebar.brand.mark`、`sidebar.brand.name`、`conversation.hero.brand.mark`）使用 `priority: -1` 覆盖官方品牌，数值最小者渲染。
- 若修改 `lib/client.js` 后 profile 里的 `node_modules` 副本未更新，需重新执行 `dsh plugin add` 或手动同步文件。
