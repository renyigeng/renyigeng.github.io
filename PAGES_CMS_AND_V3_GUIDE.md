# Rony Blog V3.0 · 使用说明（先读）

## 这次升级包含什么？
- Pages CMS 可视化写作后台：`.pages.yml`，支持手机与电脑网页操作。
- 文章分区：学术笔记 / 生活随笔，在博客列表中筛选，原有文章自动保留。
- 快速加载：星空背景桌面与手机使用不同 WebP；四张照片使用 WebP 展示、原 JPG 仍保留为点击查看大图。
- 星光点击反馈：浏览博客时，点击非交互区域出现三颗很轻的小星芒；系统开启“减少动态效果”时自动关闭。
- Jekyll `_config.yml` 新增 posts 默认 layout，确保 CMS 新建文章直接使用原阅读模板。
- 原 GoatCounter 统计及 README 保留，不改变个人学术主页内容。

## 第一次部署
1. 将 V3.0 完整 ZIP 放在 `E:\renyi\website`；**解压文件内容到** `E:\renyi\website\renyigeng.github.io`（保留 `.git`）。
2. 运行文件包中的 `PUBLISH_V3.ps1` 或参考主聊天给出的命令；先检查 Git 暂存，再提交并推送。
3. 等待 https://github.com/renyigeng/renyigeng.github.io/actions 显示 GitHub Pages 构建成功。
4. 打开 https://app.pagescms.org/ ，GitHub 登录；点击安装 GitHub App，仅授权 `renyigeng/renyigeng.github.io`，选择 `main` 分支，等待识别 `.pages.yml`。
5. 打开「博客文章 / Blog posts」，点击新建；标题中文可直接写，英文短链接填写 `my-first-note` 一类的小写字母和连字符；选择分类、日期，编辑正文，上传图片，保存后自动触发 GitHub Pages 构建。

**用户本人必须登录 GitHub 并授权 Pages CMS；ZIP 本身不能代替 GitHub 授权。**

## 在手机上的发布步骤
Safari → app.pagescms.org → 使用 GitHub 登录 → 文章 → 新建 → 写标题及短链接 → 选择学术笔记 / 生活随笔 → 填写摘要、正文 → 从照片 App 上传图片 → 保存 → 等 GitHub Pages 构建。

发布是直接提交到**公开 GitHub 仓库**，请不要上传未发表科研数据、私人日记或未经授权的照片。编辑器里的保存不是私密草稿保存；建议先在 Obsidian 本地写好草稿，再复制进去发布。

## 两个栏目
- 全部：`/notes/`
- 学术笔记：`/notes/?section=academic#writing`
- 生活随笔：`/notes/?section=life#writing`
只有一个 `_posts` 数据源；文章中 `section` 字段决定所属栏目，不需要发两次。

## 图片说明
- 旧照片中已经遮脸的 02/03 原图和优化图均保持遮脸版；原始 JPG 不覆盖不删除。
- Pages CMS 新上传的图片在 `assets/uploads/`。**Pages CMS 默认不会自动压缩你新上传的图片**；日常建议上传 WebP 或控制照片大小至约 1MB 以内。
- 老文章包含人工制作的 HTML 四宫格，在 CMS 中编辑时应使用 Source 模式预览源代码，确认原有 HTML 没被编辑器丢弃后再保存。新文章插图只需要编辑器的插入图片按钮。
- 手机端仍保留少女樱花背景，并使用缩小的相同画面文件，背景位置没有重新构图。

## 验证
- 电脑和手机分别打开 `/notes/` 和现有文章；检查图片、分区筛选及滚动。
- 小星光只在点击页面**非链接区域**显示；点按钮/链接不会出现，且“减少动态效果”模式下关闭。
- GoatCounter 仍需现有账户后台公开计数开关正常开启。
