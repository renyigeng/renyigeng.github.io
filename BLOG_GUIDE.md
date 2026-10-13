# Rony 的博客发布说明｜从 Notion 到 GitHub Pages

这份教程针对当前网站，不需要安装 Git、VS Code、Ruby 或 Jekyll。先在 Notion 写，满意后通过 GitHub 网页手动发布即可。

## 0. 先区分私人与公开

- **Notion 私人页面**：私人日记、未发表科研想法、随手记录、博客草稿都放这里。
- **GitHub 公开仓库 `renyigeng/renyigeng.github.io`**：只能放经过你确认可以公开的终稿。即使文件未在网页展示，只要上传公开仓库，它的内容和 Git 历史也可能被别人看到。
- **发布是手动的**：Notion 中写好，不会自动进入 GitHub，也不会自动公开。

## 1. 首次上线网站（只需要一次）

1. 在 GitHub 登录 `renyigeng` 账号，创建**公开**仓库，仓库名称必须是 `renyigeng.github.io`。
2. **解压**网站 ZIP。在含 `index.html`、`favicon.ico`、`assets/`、`notes/`、`_posts/` 的目录中选中网站文件，上传到仓库**根目录**，不要把外面那层 `renyigeng_website_v1_9/` 也上传成子目录。
3. 到仓库 `Settings → Pages → Build and deployment`，`Source` 选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/ (root)`，点击 `Save`。
4. GitHub Pages 部署完成后打开 `https://renyigeng.github.io/`，再点击 `Notes`。第一次发布可能需要等待几分钟；到仓库 `Actions` 查看构建失败信息。
5. 网站已经自带 `_config.yml`、`_layouts/post.html`、`notes/posts.json`，它们分别负责 Jekyll 配置、文章页面模板、文章列表。**无需手动编辑它们。**

## 2. 发第一篇文章：在 GitHub 网页操作（推荐先试这个）

1. 在 Notion 的**私人页面**写文章；内容全部确认可以公开后，复制纯文本或 Markdown 正文。
2. 登录 `https://github.com/renyigeng/renyigeng.github.io`，点击 `_posts` 文件夹。若文件夹只有 `.gitkeep`，这是正常的。
3. 点击 `Add file → Create new file`；如果文件名框位于仓库根目录，也可以直接输入 `_posts/2026-10-13-hello-world.md`。
4. 用 `YYYY-MM-DD-英文短标题.md` 命名，日期是**实际发布日期**，例如 `2026-10-13-my-first-note.md`；使用英文字母、数字和连字符，避免空格。
5. 把下面的文章模板粘贴到编辑器里，修改标题、日期、分类、介绍，下面再写你的正文：

```markdown
---
layout: post
title: "我的第一篇随笔"
date: 2026-10-13 15:00:00 +0800
lang: zh-CN
category: 随笔
description: "开始在个人网站记录阅读与思考。"
---

今天开始在自己的个人网站上记录一些公开的阅读与思考。

## 我为什么开始写作

在这里写正文。可以使用 **加粗文字**、链接和 Markdown 标题。
```

**重要**：模板中的日期时间只是演示，发表时改为真实时间，避免写成未来日期，否则 Jekyll 可能不会发布。

6. 页面底部点击 `Commit changes...`，填写例如 `Publish first note`，确认提交到 `main`。若 GitHub 弹出“提议新文件”的界面，按提示提交即可。
7. 打开仓库 `Actions`，等 `pages build and deployment` 成功。然后访问 `https://renyigeng.github.io/notes/`，应该出现新文章的卡片，点击进入全文。
8. 如果文章没出现：先用无痕窗口刷新，确认文件在 `_posts`，文件名前面的日期正确，顶部有一对 `---`，`layout: post` 写对，GitHub Actions 没有报错。

**如果你已经有文章，不要为了测试而公开假文章。** 可以先本地练习或上传真正愿意公开的短文。

## 3. 从 Notion 导出正文与图片

- 短文章：最简单是从 Notion 复制正文，再在 GitHub 的 Markdown 编辑器中检查格式。
- 长文章：Notion 页面右上角 `··· → Export → Markdown & CSV`（中文可能显示“导出”）。得到 `.md` 和附件文件夹后，需把正文粘贴到 `_posts/年-月-日-名称.md`，**前面加上上面的 YAML 信息块**。
- 如果有图片：在 GitHub 仓库创建 `assets/posts/你的文章名/` 目录，上传允许公开的图片。正文引用如 `![图片说明](/assets/posts/my-first-note/figure1.png)`，不要直接使用本机 `C:\...` 路径，也不要依赖 Notion 私人页面的图片链接。
- 链接、表格、公式和图片在导出后可能需要检查排版；Notion Markdown 导出不保证所有复杂块与 Jekyll 完全一致。

## 4. 文章修改与撤回

- 改内容：打开 GitHub 仓库 `_posts/文件名.md`，点铅笔图标编辑，提交后等待自动构建。
- 撤回：删除 `_posts` 中的文章并提交，网站会停止展示它。**但公开 Git 仓库中的历史提交仍可能包含原文**，所以敏感内容一开始就不要提交。
- 修改文章标题：改文件中的 `title:`。修改文件名会改变文章链接，原来的分享链接可能失效。

## 5. 本地预览和线上发布有什么区别？

- 解压后打开首页 `index.html`、随笔 `notes/index.html` 可以看网页外观。
- 或者在包含 `index.html` 的根目录运行 `python -m http.server 8000 --bind 127.0.0.1`，访问 `http://127.0.0.1:8000/notes/`。
- **Python 的本地服务不会编译 `_posts` 中的 Markdown**，所以本地 Notes 仍显示空列表是正常的。只有 Jekyll 构建后才会生成新文章列表。
- 后续想在电脑上预览 Markdown 排版，可以再配置 Ruby + Jekyll，但第一篇不必折腾这些。

## 6. 现在不需要学习的功能

不用设置网站数据库、不用自建服务器、不用配置 Notion API、不用写 CI/CD 自动发布脚本。你完全可以先使用 Notion 写作 + GitHub 网页手动发布；写多了之后，再考虑半自动发布。
