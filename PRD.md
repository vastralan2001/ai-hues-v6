# AIHues v6 — Product Requirements Document (PRD)

> **Version**: 6.0  
> **Last Updated**: 2026-05-19  
> **Status**: Phase 1 Complete (30 tools/games) + Phase 2 In Progress

---

## 1. 产品概述

### 1.1 产品定位
AIHues 是一个面向AI创作者的纯前端工具站 + 小游戏社区，覆盖文本处理、开发工具、增长工具三大场景，通过小游戏驱动用户留存和积分循环。

### 1.2 核心价值主张
> "35+ AI 工具、小游戏和实用工具，像人一样自然。"

### 1.3 目标用户
- AI应用开发者（需要JWT/JSON/正则等开发工具）
- 内容创作者（需要写作/SEO/增长工具）
- 日常用户（需要日历/二维码/时间戳等实用工具）

---

## 2. 已完成的功能清单

### 2.1 首页 (index.html) ✅
| 功能 | 状态 | 说明 |
|------|------|------|
| AI Agent搜索框 | ✅ v2 | 🤖图标+自然语言匹配+下拉结果+thinking动画 |
| 分类浏览卡 | ✅ | 4分类(写作/开发/增长/游戏)，各含工具标签 |
| 统计栏 | ✅ | 17 AI工具 / 7 开发工具 / 3 游戏 / 100 Credit / 3 连击 |
| 工具展示网格 | ✅ | NEW badge + 图标 + 名称 + 描述 |
| 游戏中心 | ✅ | 3款游戏卡片 + Credit余额条 |
| 热门工具评测 | ✅ | 3个工具评测卡片 |
| 双引擎CTA | ✅ | 深色渐变工具+游戏横幅 |
| 许愿单CTA | ✅ | 紫色渐变提交想法区 |
| i18n切换 | ✅ | EN/中文全局切换 |

### 2.2 AI文本工具 (29个) ✅ — 原有
ad-copy, alt-text, blog-outline, changelog, code-explain, code-review, cold-email, docs, faq, git-commit, humanize, linkedin, lp-hero, meta, newsletter, pr-desc, pseudo, push, readability, seo-title, shell, sql, tagline, tldr, video-title, x-post, yt-script 等

### 2.3 开发工具 (10个) ✅ — 本轮新建
| 工具 | 图标 | 核心功能 | 难度 |
|------|------|----------|------|
| JWT解析器 | 🔐 | Base64Url解码、三部分高亮、过期检测 | L1 |
| JSON格式化 | 📋 | 格式化/压缩/校验、语法高亮、树形折叠 | L1 |
| 正则测试器 | 🔍 | 实时匹配高亮、8种预设、替换预览 | L2 |
| UUID生成器 | 🆔 | 批量1-100个、格式选项、历史记录 | L1 |
| 时间戳转换 | ⏱️ | 秒/毫秒自动识别、双向转换、实时时钟 | L1 |
| Markdown预览 | 📝 | 双栏可拖拽、GFM渲染、代码高亮 | L2 |
| 二维码生成 | 📱 | URL/WiFi/Email/Phone多类型、颜色可调 | L2 |
| SHA256哈希 | 🔒 | SHA-256/SHA-1/MD5、文件拖拽+大文件分块 | L1 |
| 全角半角转换 | ↔️ | 转换+空格/换行清理、智能修复 | L1 |
| A/B测试计算 | 📊 | 卡方检验、置信区间、可视化柱状图 | L2 |

### 2.4 小游戏 (3个) ✅ — 本轮新建+增强
| 游戏 | 图标 | 核心功能 | 排行榜 | 历史记录 | 分享卡片 |
|------|------|----------|--------|----------|----------|
| 日历幸运签 | 📅 | 3D翻转、30条箴言、Confetti | ✅ | ✅ 统计+日历 | ✅ Canvas |
| 幸运老虎机 | 🎰 | 3x3滚轮、8条中奖线、每日3次 | ✅ | ✅ 中奖+统计 | — |
| 投篮挑战 | 🏀 | Canvas物理引擎、60秒挑战 | ✅ | ✅ 得分+Swish | — |

### 2.5 功能页面 (4个) ✅
| 页面 | 说明 |
|------|------|
| wishlist.html | 工具许愿单：投票、状态过滤、TOP5排行、提交新需求 |
| ranking.html | 排行榜：工具排行+用户排行+成就墙(3 Tab) |
| login.html | 登录/注册：左右分栏、密码强度、游客模式 |
| js/i18n.js | 中英文切换系统：data-zh属性解析、localStorage持久化 |

---

## 3. 待开发功能清单 (TODO)

### P0 — 用户体验 (建议优先)
| # | 功能 | 说明 | 预估工时 |
|---|------|------|----------|
| 1 | i18n全局生效 | 给29个旧工具+3个游戏页面添加data-zh+引用i18n.js | 2h |
| 2 | Login状态全局 | 所有页面右上角显示用户名(已登录)或Login(未登录) | 1h |
| 3 | 导航栏统一 | 29个旧工具页面的nav更新为新版 | 2h |
| 4 | 收藏功能 | 工具卡片添加⭐收藏按钮，个人中心显示收藏列表 | 2h |
| 5 | 使用统计埋点 | localStorage记录每个工具打开次数 | 1h |

### P1 — 新工具开发 (按wishlist投票排序)
| 工具 | 票数 | 难度 | 状态 |
|------|------|------|------|
| HTML实体转换 | 42 | L1 | ⏳ 计划中 |
| CSS渐变生成器 | 38 | L1 | ⏳ 计划中 |
| 密码生成器 | 35 | L1 | 🚧 进行中 |
| IP地址查询 | 28 | L1 | ⏳ 计划中 |
| URL编码解码 | 25 | L1 | ✅ 已完成(Base64覆盖部分) |
| Cron表达式解析 | 22 | L1 | ⏳ 计划中 |
| 色值转换器 | 20 | L1 | ⏳ 计划中 |
| 进制转换器 | 18 | L1 | ⏳ 计划中 |
| CSV转JSON | 15 | L1 | 🚧 进行中 |
| 图片转Base64 | 12 | L2 | ⏳ 计划中 |

### P1 — 游戏增强
| # | 功能 | 状态 |
|---|------|------|
| 投篮排行榜 | ✅ 已完成 |
| 老虎机统计 | ✅ 已完成 |
| 幸运签分享卡片 | ✅ 已完成 |
| 成就系统上线 | ⏳ 需埋点数据驱动 |
| Credit消耗打通 | ⏳ 需设计经济模型 |

### P2 — 系统功能
| # | 功能 | 说明 | 状态 |
|---|------|------|------|
| SEO优化 | meta标签/og标签 | ⏳ |
| PWA支持 | manifest.json + service worker | ⏳ |
| 深色模式 | system-level dark mode | ⏳ |
| Vercel部署 | 自定义域名 + CI/CD | ⏳ |

---

## 4. 技术架构

### 4.1 技术栈
- **纯静态HTML+CSS+JS** — 无框架、无后端
- **localStorage** — 所有数据本地存储
- **CDN库**: marked.js (Markdown)、qrcode.js (二维码)
- **Web API**: Canvas, Web Crypto, FileReader

### 4.2 文件结构
```
ai-hues-v6/
├── index.html          # 首页
├── login.html          # 登录/注册
├── wishlist.html       # 工具许愿单 + TOP5排行
├── ranking.html        # 排行榜(工具+用户+成就)
├── js/
│   ├── i18n.js         # 中英文切换
│   └── auth.js         # 登录状态(待开发)
├── tools/              # 39个工具页面
│   ├── (29个AI文本工具)
│   └── (10个开发工具)
├── games/              # 3个小游戏
│   ├── daily-luck.html
│   ├── slot-machine.html
│   └── basketball.html
├── GITHUB_PUSH.md      # Git推送指南
├── ROADMAP.md          # 开发路线图
└── PRD.md              # 本文档
```

### 4.3 localStorage Key规范
```
aihues_credit          # 全局Credit
aihues_lang            # i18n语言
aihues_users           # 注册用户列表
aihues_current_user    # 当前登录用户
aihues_wishlist        # 许愿单数据
aihues_wishlist_voted  # 已投票ID
aihues_hoops_*         # 投篮游戏数据
aihues_slots_*         # 老虎机数据
aihues_daily_*         # 幸运签数据
```

---

## 5. 排期更新

### Week 1 (已完成)
- 3个快启工具：字数统计、Base64、Diff

### Week 2 (已完成)
- 7个开发工具 + 3个游戏
- 首页重设计 + wishlist + ranking + login
- i18n系统 + 游戏排行榜/历史记录增强
- AI Agent搜索框 + wishlist TOP5排行

### Week 3 (建议)
**Batch 1**: i18n全局生效 + Login状态全局 + 导航栏统一  
**Batch 2**: 新工具(HTML实体+CSS渐变+密码生成+URL编解码)  
**Batch 3**: 使用统计埋点 + 成就系统上线

### Week 4 (建议)
**Batch 4**: 新工具(Cron+色值+进制+CSV)  
**Batch 5**: SEO + PWA + 深色模式  
**Batch 6**: Vercel正式部署

---

## 6. 需求清单对照

### 6.1 原始需求收集 (52条)
| 需求 | 决策 | 状态 |
|------|------|------|
| Go Playground / CodePen / VueJS运行 | ❌ 仅外链收录 | — |
| Excalidraw / Squoosh / StackEdit | ❌ 仅外链收录 | — |
| OCR / PDF处理 / 视频转换 | ❌ 需后端 | — |
| 番茄钟 / Noisli / 世界时钟 | ❌ 仅外链收录 | — |
| JWT / UUID / 时间戳 / SHA256 | ✅ 自建 | ✅ 完成 |
| 二维码 / Markdown / Regex | ✅ 自建 | ✅ 完成 |
| A/B测试 / 全角半角 | ✅ 自建 | ✅ 完成 |
| HTML实体 / CSS渐变 / 密码生成 | ✅ 自建 | ⏳ 计划中 |
| IP查询 / URL编解码 / Cron | ✅ 自建 | ⏳ 计划中 |
| 色值转换 / 进制转换 / CSV | ✅ 自建 | ⏳ 计划中 |
| 图片转Base64 | ✅ 自建 | ⏳ 计划中 |

### 6.2 完成率
- **已完成**: 20个工具 (38%)
- **计划中**: 10个工具 (19%)
- **外链收录**: 15个工具 (29%)
- **不做**: 7个 (需后端/超出范围) (13%)
- **总体完成度**: ~57%
