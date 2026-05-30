import { useMemo, useState } from "react";

const content = {
  zh: {
    badge: "DEVELOPER ECOSYSTEM / AI PLATFORM",
    nav: ["Profile", "Systems", "Impact"],
    name: "费典",
    title: "把开发者、AI 技术生态和平台能力连接起来的人。",
    summary:
      "我长期在开发者社区、AI 技术生态和平台相关工作中穿梭，关注如何把复杂能力变成开发者愿意使用、生态伙伴愿意共建、业务团队能够持续运营的系统。",
    primaryAction: "查看平台地图",
    secondaryAction: "运行自我介绍",
    languageLabel: "语言",
    signal: "ONLINE",
    availability: "平台 / 社区 / AI 生态",
    heroStats: [
      ["Platform", "平台建设"],
      ["Community", "开发者生态"],
      ["AI", "技术转译"]
    ],
    modulesTitle: "工作接口",
    modules: [
      {
        key: "platform",
        label: "平台产品",
        title: "把能力包装成可复用的平台",
        body: "从入口、权限、文档、数据反馈到运营节奏，建立开发者能够稳定进入和持续使用的产品表面。",
        command: "run platform-map --scope developer-experience"
      },
      {
        key: "community",
        label: "开发者社区",
        title: "让技术生态有可参与的现场",
        body: "通过活动、内容、案例、问答和共创机制，把技术表达成开发者看得懂、用得上、愿意传播的体验。",
        command: "sync community-loop --mode co-create"
      },
      {
        key: "ai",
        label: "AI 技术生态",
        title: "把 AI 能力转成生态增长语言",
        body: "围绕模型、工具链、场景方案和伙伴网络，帮助 AI 技术从能力展示走向真实落地。",
        command: "deploy ai-ecosystem --from capability --to adoption"
      },
      {
        key: "ops",
        label: "平台运营",
        title: "用数据和节奏维持系统生命力",
        body: "关注活跃、转化、反馈、内容供给和伙伴协同，让平台不是一次性项目，而是能自我迭代的网络。",
        command: "observe ops-dashboard --metric adoption"
      }
    ],
    metricsTitle: "生态仪表盘",
    metrics: [
      { label: "Developer Journey", value: "01", copy: "从发现、理解、试用到贡献，拆清每一步体验。" },
      { label: "Content Engine", value: "02", copy: "把技术能力转成文档、案例、活动和传播素材。" },
      { label: "Partner Loop", value: "03", copy: "连接内部团队、外部开发者和生态伙伴，形成共建回路。" }
    ],
    consoleTitle: "interactive terminal",
    consoleHint: "session synced with selected module",
    bootLines: [
      "booting feidian.profile",
      "loading developer-community context",
      "loading Baidu AI ecosystem experience",
      "ready"
    ],
    statusCards: [
      ["Role", "Platform & ecosystem work"],
      ["Mode", "Builder / translator / operator"],
      ["Focus", "Developer adoption"]
    ],
    closingTitle: "我适合处理的那类问题",
    closing:
      "当一个技术能力需要被开发者真正理解、采用和持续参与时，我会把产品入口、内容表达、社区机制和运营反馈放到同一张系统图里。"
  },
  en: {
    badge: "DEVELOPER ECOSYSTEM / AI PLATFORM",
    nav: ["Profile", "Systems", "Impact"],
    name: "Feidian",
    title: "I connect developers, AI ecosystems, and platform capabilities.",
    summary:
      "My work sits around developer communities, AI technology ecosystems, and platform operations. I care about turning complex capabilities into systems that developers can adopt, partners can build with, and teams can operate over time.",
    primaryAction: "Open Platform Map",
    secondaryAction: "Run Intro",
    languageLabel: "Lang",
    signal: "ONLINE",
    availability: "Platform / Community / AI Ecosystem",
    heroStats: [
      ["Platform", "Builder"],
      ["Community", "Developer ecosystem"],
      ["AI", "Technology translator"]
    ],
    modulesTitle: "Work Interfaces",
    modules: [
      {
        key: "platform",
        label: "Platform Product",
        title: "Package capabilities into reusable platforms",
        body: "Design entry points, permissions, docs, data feedback, and operating cadence so developers can reliably enter and keep using the platform.",
        command: "run platform-map --scope developer-experience"
      },
      {
        key: "community",
        label: "Developer Community",
        title: "Create places where ecosystems can participate",
        body: "Use events, content, cases, Q&A, and co-creation loops to make technology understandable, useful, and shareable for developers.",
        command: "sync community-loop --mode co-create"
      },
      {
        key: "ai",
        label: "AI Ecosystem",
        title: "Translate AI capability into ecosystem growth",
        body: "Work across models, toolchains, scenario solutions, and partner networks to move AI from demos into adoption.",
        command: "deploy ai-ecosystem --from capability --to adoption"
      },
      {
        key: "ops",
        label: "Platform Ops",
        title: "Keep systems alive with data and cadence",
        body: "Track activation, conversion, feedback, content supply, and partner collaboration so the platform keeps evolving.",
        command: "observe ops-dashboard --metric adoption"
      }
    ],
    metricsTitle: "Ecosystem Dashboard",
    metrics: [
      { label: "Developer Journey", value: "01", copy: "Clarify every step from discovery and understanding to trial and contribution." },
      { label: "Content Engine", value: "02", copy: "Turn technical capability into docs, cases, events, and communication assets." },
      { label: "Partner Loop", value: "03", copy: "Connect internal teams, external developers, and ecosystem partners into a build loop." }
    ],
    consoleTitle: "interactive terminal",
    consoleHint: "session synced with selected module",
    bootLines: [
      "booting feidian.profile",
      "loading developer-community context",
      "loading Baidu AI ecosystem experience",
      "ready"
    ],
    statusCards: [
      ["Role", "Platform & ecosystem work"],
      ["Mode", "Builder / translator / operator"],
      ["Focus", "Developer adoption"]
    ],
    closingTitle: "The kind of problem I like",
    closing:
      "When a technical capability needs to be understood, adopted, and continuously joined by developers, I put product entry, content narrative, community mechanisms, and operating feedback into one system map."
  }
};

function App() {
  const [language, setLanguage] = useState("zh");
  const [activeKey, setActiveKey] = useState("platform");
  const [pulse, setPulse] = useState(0);

  const t = content[language];
  const activeModule = useMemo(
    () => t.modules.find((module) => module.key === activeKey) ?? t.modules[0],
    [activeKey, t.modules]
  );

  const consoleLines = [
    ...t.bootLines,
    `$ ${activeModule.command}`,
    `module: ${activeModule.label}`,
    `output: ${activeModule.title}`,
    "status: connected"
  ];

  function runIntro() {
    const next = t.modules[(pulse + 1) % t.modules.length];
    setActiveKey(next.key);
    setPulse((current) => current + 1);
  }

  return (
    <main className="page-shell">
      <section className="hero" id="profile">
        <div className="hero-bg" aria-hidden="true" />
        <header className="topbar">
          <a className="brand" href="#profile" aria-label={t.name}>
            <span className="brand-mark">fd</span>
            <span>{t.name}</span>
          </a>
          <nav aria-label="Primary navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={["#profile", "#systems", "#impact"][index]}>
                {item}
              </a>
            ))}
          </nav>
          <div className="language-switch" aria-label={t.languageLabel}>
            <button
              className={language === "zh" ? "active" : ""}
              type="button"
              onClick={() => setLanguage("zh")}
            >
              中
            </button>
            <button
              className={language === "en" ? "active" : ""}
              type="button"
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <div className="status-line">
              <span className="signal" />
              <span>{t.signal}</span>
              <span>{t.badge}</span>
            </div>
            <h1>{t.name}</h1>
            <p className="title-line">{t.title}</p>
            <p className="summary">{t.summary}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#systems">
                {t.primaryAction}
              </a>
              <button type="button" className="secondary-action" onClick={runIntro}>
                {t.secondaryAction}
              </button>
            </div>
          </div>

          <aside className="status-panel" aria-label={t.availability}>
            <div className="panel-top">
              <span>{t.availability}</span>
              <span className="panel-light" />
            </div>
            {t.heroStats.map(([label, value]) => (
              <div className="stat-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="systems-section" id="systems">
        <div className="section-heading">
          <p>systems</p>
          <h2>{t.modulesTitle}</h2>
        </div>
        <div className="systems-grid">
          <div className="module-list">
            {t.modules.map((module) => (
              <button
                className={module.key === activeKey ? "module-card active" : "module-card"}
                key={module.key}
                type="button"
                onClick={() => setActiveKey(module.key)}
              >
                <span>{module.label}</span>
                <strong>{module.title}</strong>
                <em>{module.body}</em>
              </button>
            ))}
          </div>

          <div className="terminal" aria-live="polite">
            <div className="terminal-header">
              <span>{t.consoleTitle}</span>
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
            <pre key={`${activeKey}-${language}-${pulse}`}>
              {consoleLines.map((line) => (
                <code key={line}>{line}</code>
              ))}
            </pre>
            <p>{t.consoleHint}</p>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="section-heading">
          <p>impact</p>
          <h2>{t.metricsTitle}</h2>
        </div>
        <div className="metrics-grid">
          {t.metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.value}</span>
              <strong>{metric.label}</strong>
              <p>{metric.copy}</p>
            </article>
          ))}
        </div>
        <div className="closing-band">
          <div>
            <p>{t.closingTitle}</p>
            <h2>{t.closing}</h2>
          </div>
          <div className="status-stack">
            {t.statusCards.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
