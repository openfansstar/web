<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:deployment-rules -->
## 部署规则（最高优先级）

部署任何代码到远程仓库时，**禁止暴露开发电脑信息**。

### 禁止的信息
- 本机用户名（如 `jackliao`）、主机名
- SSH 密钥文件路径、密钥注释
- git `user.name`、`user.email`（必须用 `@users.noreply.github.com` 匿名邮箱）
- 本机绝对路径（如 `/home/jackliao/`）
- 任何 `.local`、`.ssh`、`.config` 等系统目录

### 操作要求
1. Git commit 前检查暂存文件是否有上述信息
2. SSH 密钥必须受 `.gitignore` 保护
3. git 身份使用：`user.name` = GitHub 用户名，`user.email` = `@users.noreply.github.com`
4. 部署脚本中的路径使用相对路径或环境变量
5. 如需修改已暴露的历史记录（如 author 含本机用户名），使用 `git filter-branch` + force push
<!-- END:deployment-rules -->
