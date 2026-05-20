# GitHub 推送说明

## 最新提交统计

- **提交**: `2e402f9` - feat: achievements system + 6-theme skin system + deep fixes
- **文件变更**: 87 files changed, 11,902 insertions(+), 1,188 deletions(-)
- **本地分支**: master
- **项目目录**: `/mnt/agents/output/ai-hues-dev/`

## 推送步骤

```bash
# 1. 进入项目目录
cd /mnt/agents/output/ai-hues-dev/

# 2. 添加远程仓库（如未添加）
git remote add origin https://github.com/vastralan2001/ai-hues-v6.git

# 3. 推送（强制覆盖，因为本地已包含完整历史）
git push -u origin master --force

# 或者如果你想保留远程历史并合并：
# git pull origin master --rebase
# git push -u origin master
```

## 如果推送失败（无写权限）

```bash
# 1. Fork 仓库到你的账号
# 2. 更新远程地址
git remote set-url origin https://github.com/YOUR_USERNAME/ai-hues-v6.git

# 3. 推送为新分支
git checkout -b v6-achievements-themes
git push -u origin v6-achievements-themes

# 4. 在 GitHub 上提交 Pull Request
```

## 本地仓库备份

项目已完整保存在 `/mnt/agents/output/ai-hues-dev/`，包含完整的 Git 历史。
你可以直接用 `scp` 或 `rsync` 复制到本地：

```bash
# 从本地终端
scp -r root@YOUR_SERVER:/mnt/agents/output/ai-hues-dev/ ./ai-hues-v6/
cd ai-hues-v6
git push origin master --force
```

## 当前项目状态

| 指标 | 数值 |
|------|------|
| 工具页面 | 57 个 |
| 小游戏 | 3 个 |
| 功能页面 | 10 个 |
| HTML 文件总数 | 70 个 |
| CSS 主题预设 | 6 套 |
| 可解锁成就 | 10 个 |
| 代码总行数 | ~50,000+ |
