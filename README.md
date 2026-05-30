# 费典的 GitHub Pages 自我介绍站点

这是一个 Vite + React 的双语互动式个人介绍页面，聚焦开发者社区、AI 技术生态和平台相关工作。

CI/CD 链路：

1. `npm ci` 安装依赖。
2. `npm test` 做 smoke test。
3. `npm run build` 构建 React 站点到 `dist/`。
4. GitHub Actions 把 `dist/` 部署到 GitHub Pages。

## 本地运行

```bash
npm ci
npm test
npm run dev
```

本地构建预览：

```bash
npm run build
npm run preview
```

线上页面：<https://feidiangg.github.io/demo/>

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动运行测试、构建并部署。
