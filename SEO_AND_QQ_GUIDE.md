# Bing 收录与 QQ 联系方式（V2.5）

- 首页 Contact 区新增 QQ：`1550875059`。随笔首页的页脚也显示 QQ。
- 增加 `robots.txt` 和由 Jekyll 构建的 `sitemap.xml`。新增 `_posts` 文章后，站点地图自动更新。
- 首页已有 title / description / canonical，本次另补标准的 Person 结构化数据；随笔首页、文章模板补 canonical。
- `sitemap.xml` 是 Jekyll 模板：**本地直接打开原文件会看到 Liquid 语法**，GitHub Pages 构建后才是标准 XML。检查线上 `https://renyigeng.github.io/sitemap.xml`。

## 站点发布后在 Bing 登记（账户所有者自行操作）

1. 进入 https://www.bing.com/webmasters/ ，登录并添加 `https://renyigeng.github.io/`。
2. 根据 Bing 指引完成网站所有权验证（如使用 HTML Meta Tag，可把 Bing 给你的验证码加到首页 `<head>`，然后重新部署；不可以用别人的代码）。
3. 在站点的 Sitemaps 中提交 `https://renyigeng.github.io/sitemap.xml`。
4. 通过 URL Inspection 检查主页是否可抓取，并根据提示提交主页；也可以使用 Submit URLs 手动提交。
5. 等待 Bing 抓取和收录。新站可能数天至数周，提交并不保证搜索排名或立即展示。

## 上传方式（兼容线上已有的 V2.3，自动包含 V2.4 随笔功能）

将更新包中所有内容解压覆盖至你的 Git 工作目录 `E:\renyi\website\renyigeng.github.io`，注意不要误上传外层解压目录。

PowerShell：
```powershell
cd "E:\renyi\website\renyigeng.github.io"
git status
git add index.html notes/index.html notes/posts.json assets/notes.css _layouts/post.html _posts/ assets/posts/ assets/taishan-user.jpg ASSET_SOURCES.md BLOG_GUIDE.md COPYRIGHT_AND_ASSETS.md robots.txt sitemap.xml SEO_AND_QQ_GUIDE.md
git diff --cached --stat
git commit -m "Update website with first essay, QQ contact and SEO"
git push origin main
```

`README.md` 不用改。


## V2.6：博客背景与访问统计

- `assets/blog-night-sakura.jpg` 是用户提供的樱花夜空插画，供 Notes 列表与所有文章作为背景；非学术主页背景。公开前请确认图片拥有适当的使用许可。
- Notes 的固定背景、渐入内容面板、向下阅读提示、滚动进度和返回顶部按钮由 `assets/notes.css` 与 `assets/blog-ui.js` 实现；尊重系统的“减少动画”设置。
- 页脚访问数通过第三方「不蒜子」3.6.9 实时填写。网站累计 PV/UV 并非历史访问恢复，也不能等同于精确的人数；有缓存、广告拦截、统计规则和外部服务器可用性等限制，无法载入时显示 `—`。
- 隐私提醒：第三方统计脚本可能接收访问请求等数据。若不希望引入第三方统计，将三个网页模板中的 `cdn.busuanzi.cc` 脚本移除即可停用（对应统计数字也会停止更新）。
- Bing 不保证收录。参考网站公开源码无法证明站长是否使用 Bing Webmaster Tools；推荐注册并提交 `/sitemap.xml`。
