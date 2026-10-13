# Renyi Geng · Rony — 个人学术网站 V1.9

这是尚未发布的个人学术网站静态源码，延续 V1.8 的页面设计。V1.9 的修改范围是网站图标目录与相应网页引用，不修改个人介绍和科研方向。

## 网站文件结构

```text
index.html                     # 网站首页
favicon.ico                    # 根目录保留，供浏览器自动识别
site.webmanifest              # 手机主屏幕图标配置
assets/
  icons/
    favicon-source.jpg         # 原始动漫头像（可单独替换）
    favicon-16x16.png
    favicon-32x32.png
    favicon-256.png
    apple-touch-icon.png
    android-chrome-192x192.png
    android-chrome-512x512.png
  renyi-portrait.jpg           # 首页人物照片
  ustc-emblem.svg              # 用户提供的校徽
  neau-emblem.svg              # 用户提供的校徽
  ...
notes/index.html              # 随笔首页
notes/posts.json              # GitHub Pages 构建时生成的文章列表
_posts/                       # 已确认可以公开的 Markdown 文章
_layouts/post.html            # 每篇文章的排版模板
templates/post-template.md    # 写作模板（不会自动发布）
_config.yml                   # Jekyll 配置
BLOG_GUIDE.md                 # 从零发布博客的教程
```

## 本地预览

1. 将 ZIP **完整解压**，进入包含 `index.html` 的目录。
2. 双击 `index.html` 打开主页；点击顶部 **Notes / 随笔** 即可进入 `notes/index.html`（这版已改为显式文件链接，避免本地点击文件夹时看到“目录索引”）。也可以直接双击 `notes/index.html`。
3. 或在该目录用 PowerShell 运行 `python -m http.server 8000 --bind 127.0.0.1`，打开 `http://localhost:8000/` 和 `http://localhost:8000/notes/`。
4. 本地 `http.server` 不运行 Jekyll，所以本地不会自动显示新 Markdown 文章。正式 GitHub Pages 发布后会生成。

## 发布文章与上线

第一次部署与发布第一篇博客的详细步骤见 **`BLOG_GUIDE.md`**。

## 图标处理

- `favicon.ico` 留在根目录，最兼容浏览器默认识别。
- **所有其他图标及原图**放在 `assets/icons/`，首页、随笔首页、文章模板及 `site.webmanifest` 全部使用新位置。
- 清除旧缓存：在网站页面按 `Ctrl+F5`，浏览器标签图标可能需要重新打开标签才能更新。

## 许可与素材

未添加 MIT LICENSE。肖像、动漫头像、校徽、泰山图片等素材的版权与公开使用条件须单独确认；详见 `COPYRIGHT_AND_ASSETS.md` 与 `ASSET_SOURCES.md`。
