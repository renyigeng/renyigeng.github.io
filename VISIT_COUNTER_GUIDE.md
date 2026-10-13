# V2.11 访问统计：GoatCounter 接入指南

网站已使用 `https://renyigeng.goatcounter.com/` 作为统计站点。不再使用不蒜子（其接口曾在浏览器中触发 CORS 报错）。

## 必须完成的后台操作

1. 登录 https://renyigeng.goatcounter.com/ 。
2. 在 Settings / Site settings 中开启 **Allow adding visitor counts on your website**（允许在网站上显示访问计数），保存。此项默认关闭。
3. 确认网站域名填写的是 `renyigeng.github.io`，并验证注册邮箱（若 GoatCounter 要求）。
4. 完成 V2.11 Git push，等待 GitHub Pages 构建后访问正式网站。

## 如何检查真正开始统计

- 在浏览器 F12 → Network 输入 `goatcounter` 或 `zgo.at`，刷新正式网站。`https://gc.zgo.at/count.js` 应正常加载，向 `https://renyigeng.goatcounter.com/count` 发送请求。
- 在统计后台查看各个路径；主页 `/`、博客 `/notes/`、文章 URL 都应能分别看到数据。
- 公开计数接口 `https://renyigeng.goatcounter.com/counter/TOTAL.json` 应能提供 JSON；如果 403，说明需要在后台开启上述选项。
- GoatCounter 对公开显示的计数结果缓存最长可能达 **4 小时**，不能以短时间反复刷新数字是否增加来判断统计是否生效。
- GoatCounter 默认按访次/会话统计，不等同于每一次刷新，也不等于独立访客总人数。首页页脚的「全站累计访问」对应 TOTAL，其他「本页访问」对应当前具体页面。
- 本地 file:// / localhost 预览通常不会计数；广告拦截插件可能拦截第三方统计请求。

## 实现

- 三个页面：首页 `index.html`、随笔列表 `notes/index.html`、Jekyll 文章模板 `_layouts/post.html`，都加载 GoatCounter 官方 `count.js`。
- `assets/goatcounter-display.js` 读取文档支持的公开 JSON 计数 API（无需秘钥），读取失败时显示原因而不是编造数字。
- GitHub 仓库不存储账户密码或管理 API token。

参考：https://www.goatcounter.com/help/js 和 https://www.goatcounter.com/help/visitor-counter
