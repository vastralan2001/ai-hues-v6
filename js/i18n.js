/**
 * AIHues i18n System v4 — 字典驱动切换
 * 
 * Strategy: Chinese text as dictionary keys. Default HTML = Chinese.
 * Switch to EN: scan text nodes, replace known Chinese with English.
 * No data-zh attributes needed on HTML.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'aihues_lang';

  // ── Dictionary: zh → en ─────────────────────────────────────────────────
  const DICT = {
    // === Page Meta & Navigation ===
    'AIHues — AI Vibe Navigator | 100+ AI Tools & Growth Utilities': 'AIHues — AI Vibe Navigator | 100+ AI Tools & Growth Utilities',
    '100+ AI tools, growth utilities & mini games. Find your AI vibe with smart search & credit system.': '100+ AI tools, growth utilities & mini games. Find your AI vibe with smart search & credit system.',
    
    // Top bar
    '搜索工具...': 'Search tools...',
    '发现': 'Discover',
    '收藏': 'Saved',
    '游戏': 'Games',
    '关于': 'About',
    
    // Hero
    'AIHues': 'AIHues',
    'AI Vibe Navigator': 'AI Vibe Navigator',
    '100+ AI 工具、出海增长工具和小游戏。像人一样自然。': '100+ AI tools, growth utilities & mini games. Like a human would.',
    '描述你想找的 AI 工具...': 'Describe the AI tool you need...',
    '搜索': 'Search',
    '文本生成': 'Text',
    '图像': 'Image',
    '编程': 'Coding',
    '社媒监听': 'Social',
    'Reddit': 'Reddit',
    'SEO': 'SEO',
    'KOL': 'KOL',
    '游戏': 'Games',
    
    // Playbooks
    'AI Vibe Navigator': 'AI Vibe Navigator',
    'Built on Kimi': 'Built on Kimi',
    'AIHues 出海增长 + AI 工具导航': 'AIHues Growth Stack + AI Tools',
    '100+ 工具覆盖出海增长、AI 产品、开源追踪、效率提升，AI 智能搜索帮你一秒找到需要的工具': '100+ tools covering growth, AI products, open-source tracking, and productivity. AI search finds what you need in seconds.',
    '出海增长': 'Growth',
    'AI 产品': 'AI Products',
    '开源追踪': 'Open Source',
    
    // Section headers
    '出海增长工具': 'Growth Tools',
    'AI 产品推荐': 'AI Products',
    '开源追踪': 'Open Source',
    '设计工具': 'Design Tools',
    '开发者工具': 'Dev Tools',
    '常用小工具': 'Utilities',
    '小游戏中心': 'Mini Games',
    
    // Filters
    '全部': 'All',
    'Free': 'Free',
    'Freemium': 'Freemium',
    'Paid': 'Paid',
    
    // Games section
    '积分系统': 'Credit System',
    '初始 100 积分 · 玩游戏赚积分 · 工具消耗积分 · 每日签到奖励': 'Start with 100 credits · Earn by playing · Spend on tools · Daily check-in bonus',
    '日历幸运签': 'Daily Luck',
    '每天抽一签，获取箴言和 Credit 奖励': 'Draw daily for wisdom & credit rewards',
    '幸运老虎机': 'Slot Machine',
    '每日3次免费旋转，赢取大奖 + 积分': '3 free spins daily. Win big + credits.',
    '投篮挑战': 'Basketball',
    '60秒投篮，挑战最高分赚积分': '60s shootout. Beat the high score for credits.',
    '抽签 →': 'Draw →',
    '旋转 →': 'Spin →',
    '投篮 →': 'Shoot →',
    
    // Wishlist
    '找不到需要的工具？': "Can't find what you need?",
    '把工具想法提交到许愿清单，最受欢迎的优先开发。': 'Submit ideas to our wishlist. Most wanted gets built first.',
    '提交你的想法 →': 'Submit your idea →',
    
    // Footer
    '产品': 'Product',
    '全部工具': 'All Tools',
    '出海增长': 'Growth',
    '许愿单': 'Wishlist',
    '游戏': 'Games',
    '日历幸运签': 'Daily Luck',
    '老虎机': 'Slots',
    '投篮': 'Basketball',
    '更多': 'More',
    '博客': 'Blog',
    '找到你的 AI vibe。100+ 工具 + 3 款游戏。': 'Find your AI vibe. 100+ tools + 3 games.',
    '基于 Kimi 构建': 'Built on Kimi',
    
    // === Tool Cards (common) ===
    '访问 →': 'Visit →',
    '没有匹配的工具': 'No matching tools',
    '没找到匹配的工具': 'No matching tools found',
    
    // === Credit System ===
    '你的积分余额：': 'Your credit balance: ',
    '积分规则：': 'Credit Rules:',
    '初始赠送 100 积分': 'Start with 100 credits',
    '玩游戏可赚取积分': 'Earn credits by playing games',
    '使用工具会消耗积分': 'Tools cost credits to use',
    '每日签到额外奖励': 'Daily check-in bonus',
    '使用 "{name}" 将消耗 {credit} 积分': 'Using "{name}" costs {credit} credits',
    '当前余额: {balance} 积分': 'Current balance: {balance} credits',
    '确认访问?': 'Confirm visit?',
    '积分不足! 需要 {need} 积分, 当前只有 {have} 积分': 'Not enough credits! Need {need}, you have {have}.',
    '去玩游戏赚取积分吧~': 'Go play games to earn credits~',
    
    // === Sidebar Groups ===
    '全部工具': 'All Tools',
    '出海增长工具': 'Growth Tools',
    '开发者工具': 'Dev Tools',
    '常用小工具': 'Utilities',
    'AI 产品推荐': 'AI Products',
    '开源追踪': 'Open Source',
    '设计工具': 'Design Tools',
    '小游戏': 'Mini Games',
    
    // === Sidebar Categories (Growth) ===
    '社媒监听': 'Social Listening',
    '社区目录': 'Communities',
    'KOL管理': 'KOL Mgmt',
    '社媒触达': 'Outreach',
    'Reddit': 'Reddit',
    'SEO': 'SEO',
    '链接追踪': 'Link Tracking',
    'UGC管理': 'UGC Mgmt',
    '社区发现': 'Discovery',
    '内容创作': 'Content',
    '分析埋点': 'Analytics',
    '邮件营销': 'Email',
    '广告投放': 'Ads',
    '用户调研': 'Research',
    '媒体PR': 'PR',
    '网络拓展': 'Networking',
    '增长服务': 'Growth Services',
    '开发工具': 'Dev Tools',
    'AI 写作': 'AI Writing',
    '图像处理': 'Image',
    '数据分析': 'Data',
    '效率工具': 'Efficiency',
    
    // === Growth Tool Descriptions (top 20 most visible) ===
    'AI 社媒监听，追踪产品相关讨论': 'AI social listening. Track product mentions.',
    '爆款内容分析，了解社媒趋势': 'Viral content analysis. Spot social trends.',
    'Twitter 转化率监控工具': 'Twitter conversion tracking.',
    '每日 Product Hunt Featured 产品追踪': 'Daily Product Hunt featured tracker.',
    'Discord 最大 AI 社区 · 538K 成员': 'Largest AI Discord · 538K members.',
    'Discord · 30K 开发者 · ML/DL/AI': 'Discord · 30K devs · ML/DL/AI.',
    'Discord · 32K 成员 · AI 模型开发': 'Discord · 32K · AI model dev.',
    'Discord · 59K 成员 · Web3+AI': 'Discord · 59K · Web3+AI.',
    'Discord · 18K 成员 · 数据科学': 'Discord · 18K · Data Science.',
    'Reddit · ML 学术 & 工业讨论': 'Reddit · ML research & industry.',
    'Reddit · 本地部署 LLM 最活跃': 'Reddit · Most active local LLM community.',
    'Reddit · 自托管工具，OSS 曝光': 'Reddit · Self-hosted tools & OSS exposure.',
    'Reddit · 独立项目展示': 'Reddit · Side project showcase.',
    'Meetup · 1119 成员 · AI 编程': 'Meetup · 1119 members · AI coding.',
    'Vibe Coding 平台 · 32K 开发者': 'Vibe Coding platform · 32K devs.',
    'Slack · 5K 数据科学家': 'Slack · 5K data scientists.',
    '最高质量开发者社区 · OSS 首发': 'Highest quality dev community · OSS launches.',
    '开发者博客 + 讨论平台': 'Developer blog + discussion.',
    '独立开发者 & SaaS 创始人社区': 'Indie dev & SaaS founder community.',
    '高质量开发者链接分享': 'High-quality dev link sharing.',
    'KOL 匹配 + 邮件发送一体化': 'KOL matching + email in one.',
    'KOL 匹配 / 竞品账号调研': 'KOL matching / competitor research.',
    'KOL 管理平台': 'KOL management platform.',
    '红人信息数据库': 'Influencer database.',
    '日本社群/KOL 资源': 'Japan community/KOL resources.',
    'AI copilot for 社媒营销 (多平台)': 'AI copilot for social marketing (multi-platform).',
    'X/Twitter 自动 DM · 450+/天': 'X/Twitter auto DM · 450+/day.',
    'AI 个性化 DM · 基于 profile': 'AI personalized DM · profile-based.',
    'LinkedIn DM 自动化': 'LinkedIn DM automation.',
    'LinkedIn 浏览器插件': 'LinkedIn browser extension.',
    'AI Agent: 找 Subreddit + 读懂规则': 'AI Agent: find Subreddit + learn rules.',
    'AI Agent: 规划长期内容策略': 'AI Agent: long-term content strategy.',
    'AI Agent: 去掉营销味改写内容': 'AI Agent: rewrite without marketing fluff.',
    'AI Agent: 抓取分析用户痛点': 'AI Agent: scrape & analyze pain points.',
    'Reddit Upvote 购买 · 提升曝光': 'Reddit upvote boost · increase exposure.',
    '社媒推广平台，覆盖 Reddit': 'Social promotion platform, covers Reddit.',
    '高质量 Reddit 社区目录': 'High-quality Reddit community directory.',
    'AI SEO 插件，关键词分析': 'AI SEO extension, keyword analysis.',
    '关键词搜索量查询插件': 'Keyword search volume extension.',
    '全面 SEO 分析平台': 'Full SEO analytics platform.',
    'Short link + UTM 追踪': 'Short link + UTM tracking.',
    'Short link 生成': 'Short link generator.',
    '短链接生成标杆': 'Short link standard.',
    '达人管理专用平台': 'Creator management platform.',
    'AI 生成 KOL/UGC Brief': 'AI KOL/UGC brief generator.',
    'UGC 创作者支付 (美国达人)': 'UGC creator payments (US).',
    'UGC 流量追踪': 'UGC traffic tracking.',
    'UGC 内容生成辅助': 'UGC content assistant.',
    '找 Discord 社区': 'Find Discord communities.',
    '开发者工具打榜平台': 'Dev tools ranking platform.',
    '交互式产品 Demo 制作': 'Interactive product demo builder.',
    '梗图生成器': 'Meme generator.',
    '技术框架图制作': 'Tech diagram maker.',
    '用户行为分析': 'User behavior analytics.',
    '开源用户行为分析': 'Open-source user analytics.',
    '邮件营销自动化': 'Email marketing automation.',
    '硅谷广告牌聚合平台': 'Silicon Valley billboard aggregator.',
    '投放关联 Agent': 'Ad-buying agent.',
    '海外用户调研平台': 'Overseas user research platform.',
    '媒体资源平台': 'Media resource platform.',
    '快速建联 Operation 大佬': 'Connect with ops leaders fast.',
    '获客增长服务': 'Growth & acquisition services.',
    'API 集成市场': 'API integration marketplace.',
    
    // === AI Products (top visible) ===
    'AI 视频生成，文本转视频': 'AI video generation, text-to-video.',
    'AI 图像生成，文本转图像': 'AI image generation, text-to-image.',
    'AI 音乐生成': 'AI music generation.',
    'AI 代码助手': 'AI coding assistant.',
    'AI 文本生成': 'AI text generation.',
    'AI 语音合成': 'AI voice synthesis.',
    'AI 数据分析': 'AI data analysis.',
    'AI 3D 生成': 'AI 3D generation.',
    'AI 演示文稿': 'AI presentation builder.',
    'AI 搜索引擎': 'AI search engine.',
    'AI 浏览器': 'AI browser.',
    'AI 自动化': 'AI automation.',
    'AI 设计助手': 'AI design assistant.',
    'AI 学习平台': 'AI learning platform.',
    'AI 协作白板': 'AI collaborative whiteboard.',
    
    // === Dev Tools (top visible) ===
    '解码和检查 JWT 令牌': 'Decode & inspect JWT tokens.',
    '格式化、验证和美化 JSON': 'Format, validate & beautify JSON.',
    '测试和调试正则表达式': 'Test & debug regex.',
    '批量生成随机 UUID': 'Batch generate UUIDs.',
    'Unix 时间戳转换': 'Unix timestamp converter.',
    'Base64 编解码': 'Base64 encode/decode.',
    'CSS 渐变生成器': 'CSS gradient generator.',
    'IP 地址查询': 'IP address lookup.',
    
    // === Common tags ===
    '免费': 'Free',
    '付费': 'Paid',
    '积分': 'Credits',
    
    // === Game pages (shared) ===
    '今日运势': "Today's Fortune",
    '再来一次': 'Again',
    '返回首页': 'Back Home',
    '你的积分': 'Your Credits',
    
    // === Misc UI ===
    '加载中...': 'Loading...',
    '确定': 'OK',
    '取消': 'Cancel',
    '关闭': 'Close',
    '复制': 'Copy',
    '已复制': 'Copied',
  };

  // ── Core i18n object ────────────────────────────────────────────────────
  const i18n = {
    lang: detectLang(),
    _originals: new WeakMap(),

    init() {
      this.apply();
      this.updateToggleUI();
    },

    toggle() {
      this.lang = this.lang === 'en' ? 'zh' : 'en';
      localStorage.setItem(STORAGE_KEY, this.lang);
      this.apply();
      this.updateToggleUI();
    },

    apply() {
      document.documentElement.lang = this.lang === 'zh' ? 'zh-CN' : 'en';
      
      // Walk all text nodes
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      const nodes = [];
      let node;
      while ((node = walker.nextNode())) {
        const text = node.textContent.trim();
        if (DICT[text]) {
          nodes.push({ node, text });
        }
      }

      nodes.forEach(({ node, text }) => {
        if (this.lang === 'en') {
          // Save original if not saved
          if (!this._originals.has(node)) {
            this._originals.set(node, text);
          }
          node.textContent = DICT[text];
        } else {
          // Restore Chinese
          const orig = this._originals.get(node);
          if (orig) node.textContent = orig;
        }
      });

      // Handle placeholders on inputs
      document.querySelectorAll('input[data-en-placeholder]').forEach(el => {
        if (this.lang === 'en') {
          if (!el.dataset.zhPlaceholder) el.dataset.zhPlaceholder = el.placeholder;
          el.placeholder = el.dataset.enPlaceholder;
        } else {
          if (el.dataset.zhPlaceholder) el.placeholder = el.dataset.zhPlaceholder;
        }
      });

      // Handle title
      const title = document.querySelector('title');
      if (title) {
        const titleText = title.textContent.trim();
        if (this.lang === 'en' && DICT[titleText]) {
          if (!title.dataset.zh) title.dataset.zh = titleText;
          title.textContent = DICT[titleText];
        } else if (this.lang === 'zh' && title.dataset.zh) {
          title.textContent = title.dataset.zh;
        }
      }
    },

    updateToggleUI() {
      document.querySelectorAll('.lang-nav a').forEach(a => {
        const isZh = a.textContent === '中文' || a.textContent === 'ZH';
        const isEn = a.textContent === 'EN' || a.textContent === 'EN';
        if (isZh || isEn || a.dataset.lang) {
          a.classList.toggle('active', 
            (this.lang === 'zh' && (isZh || a.dataset.lang === 'zh')) ||
            (this.lang === 'en' && (isEn || a.dataset.lang === 'en'))
          );
        }
      });
      
      const btn = document.querySelector('.lang-btn');
      if (btn) btn.textContent = this.lang === 'en' ? '中文' : 'EN';
    },

    t(zh, en) {
      return this.lang === 'zh' ? zh : (en || zh);
    }
  };

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'zh') return saved;
    return (navigator.language && navigator.language.startsWith('zh')) ? 'zh' : 'en';
  }

  // ── Global API ──────────────────────────────────────────────────────────
  window.i18n = i18n;
  window.toggleLang = () => i18n.toggle();
  window.setLang = (l) => {
    if (l === 'en' || l === 'zh') {
      i18n.lang = l;
      localStorage.setItem(STORAGE_KEY, l);
      i18n.apply();
      i18n.updateToggleUI();
    }
  };

  // ── Auto-init ───────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
  } else {
    i18n.init();
  }
})();
