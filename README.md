# 晓说家 · 晓说严选

这是一个可直接部署到 Vercel 的 Vite + React + Tailwind 单页网站。

## 一键部署流程

1. 解压本项目 zip。
2. 上传全部文件到 GitHub 仓库。
3. 登录 Vercel。
4. Add New → Project。
5. 选择这个 GitHub 仓库。
6. 保持默认设置：
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
7. 点击 Deploy。

## 本地预览（可选）

```bash
npm install
npm run dev
```

## 修改联系方式

在 `src/App.jsx` 搜索 `business@example.com`，替换成你的真实邮箱。
