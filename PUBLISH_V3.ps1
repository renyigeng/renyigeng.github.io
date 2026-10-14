$ErrorActionPreference = 'Stop'
$zip = "E:\renyi\website\renyigeng_v3_0_ready_to_publish.zip"
$site = "E:\renyi\website\renyigeng.github.io"
if (!(Test-Path $zip)) { throw "找不到完整发布包: $zip" }
if (!(Test-Path (Join-Path $site '.git'))) { throw "找不到 Git 仓库: $site" }
Expand-Archive -LiteralPath $zip -DestinationPath $site -Force
Set-Location $site
git add .pages.yml _config.yml _layouts _posts assets notes index.html PAGES_CMS_AND_V3_GUIDE.md PUBLISH_V3.ps1
git diff --cached --stat
Write-Host "请先核对上述文件清单；确认后手动执行 git commit 和 git push。" -ForegroundColor Cyan
