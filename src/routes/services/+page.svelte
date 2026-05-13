<svelte:head>
  <title>Services — belt.works</title>
  <meta name="description" content="Freelance software development services: web development, automation, AI integrations, security consulting, bespoke software. $17/hour." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  const services = [
    {
      name: 'Web development',
      description: 'Custom sites, dashboards, internal tools. No templates, no WordPress, no Wix. Built from scratch to do exactly what you need.',
      examples: [
        'Landing pages and marketing sites',
        'Customer dashboards and portals',
        'Internal tools and admin panels',
        'API integrations and data visualizations'
      ]
    },
    {
      name: 'Automation & scripting',
      description: 'If you\'re doing it by hand more than twice, I can automate it. Data pipelines, reporting, deployments, monitoring — anything repetitive.',
      examples: [
        'Report generation and distribution',
        'Data ETL pipelines',
        'CI/CD and deployment automation',
        'Email/Slack/webhook integrations'
      ]
    },
    {
      name: 'AI integrations',
      description: 'Agents, GPT wrappers, prompt pipelines, RAG systems. I make the tools do the work so you don\'t have to.',
      examples: [
        'Custom ChatGPT-style interfaces',
        'Document processing and summarization',
        'Agent-driven workflows',
        'Fine-tuned models and prompt engineering'
      ]
    },
    {
      name: 'Security consulting',
      description: 'Threat modeling, audits, hardening, penetration testing. I find the gaps before someone else does.',
      examples: [
        'Web application security audits',
        'Infrastructure hardening',
        'Threat modeling and risk assessment',
        'Security training and documentation'
      ]
    },
    {
      name: 'Bespoke software',
      description: 'If it doesn\'t exist and you need it, I\'ll build it. CLI tools, APIs, backends, scrapers, parsers — whatever solves your problem.',
      examples: [
        'Command-line tools and utilities',
        'REST and GraphQL APIs',
        'Web scrapers and data collectors',
        'File parsers and format converters'
      ]
    }
  ];

  const portfolio = [
    {
      name: 'hosp-or-not',
      description: 'Small shipped proof. Useful as evidence if it stays honest and bounded.',
      status: 'shipped',
      tech: 'SvelteKit, TypeScript'
    },
    {
      name: 'GREYMARKET',
      description: 'Terminal-style arbitrage system for auction websites.',
      status: 'live',
      tech: 'Node.js, Puppeteer, real-time data'
    },
    {
      name: 'belt.works',
      description: 'This site. Research, proof, services, and intake.',
      status: 'active rebuild',
      tech: 'SvelteKit, responsive design'
    },
    {
      name: 'Shop Floor',
      description: 'City-level repair and survival infrastructure for working people.',
      status: 'in development',
      tech: 'Full-stack, mapping, integrations'
    }
  ];
</script>

<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    <div class="section-label fade-in" style="--delay: 0ms">// SERVICES</div>
    
    <header class="stack fade-in" style="--delay: 100ms">
      <h1>What I do</h1>
      <p class="lead">Freelance software development, automation, AI integrations, security consulting. $17/hour, billed weekly. Scope gets locked before work starts.</p>
    </header>

    <div class="services-list">
      {#each services as service, index}
        <article class="card fade-in" style={`--delay: ${200 + index * 80}ms`}>
          <h2>{service.name}</h2>
          <p class="description">{service.description}</p>
          <div class="examples">
            <div class="examples-label">Examples:</div>
            <ul>
              {#each service.examples as example}
                <li>{example}</li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>

    <section class="portfolio-section fade-in" style="--delay: 700ms">
      <h2 class="section-title">Proof of work</h2>
      <p class="section-intro">These projects show the method. Some are client work. Some are experiments that became tools. All of them shipped.</p>
      
      <div class="portfolio-grid">
        {#each portfolio as project, index}
          <article class="portfolio-card fade-in" style={`--delay: ${800 + index * 60}ms`}>
            <div class="portfolio-meta">
              <div class="status-badge">{project.status}</div>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div class="tech">{project.tech}</div>
          </article>
        {/each}
      </div>
    </section>

    <section class="process-section fade-in" style="--delay: 1000ms">
      <div class="card">
        <div class="section-label">// HOW IT WORKS</div>
        <h2>The process</h2>
        <ol class="process-list">
          <li>
            <strong>You bring the problem.</strong> Describe the mess, what has to work, and what failure costs.
          </li>
          <li>
            <strong>I turn mess into scope.</strong> Clear deliverables, locked scope, time estimate.
          </li>
          <li>
            <strong>We get to work.</strong> Weekly billing at $17/hour. You see progress, I ship increments.
          </li>
          <li>
            <strong>Finished means finished.</strong> It works, it's documented, it's yours.
          </li>
        </ol>
        <div class="cta-wrapper">
          <a href="/hire" class="cta">Start a project →</a>
        </div>
      </div>
    </section>
  </section>

  <footer>
    <nav aria-label="Footer navigation">
      <a href="/about">About</a>
      <span class="sep">·</span>
      <a href="/services">Services</a>
      <span class="sep">·</span>
      <a href="/hire">Hire</a>
      <span class="sep">·</span>
      <a href="/contact">Contact</a>
    </nav>
    <div class="footer-line">belt.works · Akron, Ohio · $17/hour · Actually delivers</div>
  </footer>
</main>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    background: #0F0804;
    color: #F0EDE8;
    font-family: 'IBM Plex Mono', monospace;
    min-height: 100vh;
  }
  :global(a:focus-visible), :global(button:focus-visible), :global(input:focus-visible), :global(select:focus-visible), :global(textarea:focus-visible) {
    outline: 2px solid #C45C1A;
    outline-offset: 3px;
  }
  .skip-link {
    position: absolute;
    left: 1rem;
    top: -3rem;
    background: #C45C1A;
    color: #0F0804;
    padding: 0.75rem 1rem;
    text-decoration: none;
    z-index: 20;
    font-weight: 700;
  }
  .skip-link:focus { top: 1rem; }
  .fade-in {
    opacity: 0;
    transform: translateY(18px);
    animation: fadeUp 0.55s ease forwards;
    animation-delay: var(--delay, 0ms);
  }
  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  nav {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #2A1A0E;
  }
  .back {
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: #9A8070;
    text-decoration: none;
    text-transform: uppercase;
  }
  .back:hover { color: #C45C1A; }
  .page-shell {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 2rem 5rem;
    display: grid;
    gap: 2.5rem;
  }
  .section-label {
    color: #C45C1A;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
    margin-bottom: 0.5rem;
  }
  .stack {
    display: grid;
    gap: 1rem;
  }
  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1;
    letter-spacing: 2px;
    color: #F0EDE8;
  }
  h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    line-height: 1;
    letter-spacing: 2px;
    color: #F0EDE8;
    margin-bottom: 0.75rem;
  }
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    line-height: 1.1;
    letter-spacing: 1px;
    color: #F0EDE8;
    margin-bottom: 0.65rem;
  }
  .lead {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #D0B08B;
  }
  .services-list {
    display: grid;
    gap: 1.5rem;
  }
  .card {
    border: 1px solid #2A1A0E;
    background: #160C06;
    padding: 1.75rem;
    position: relative;
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #C45C1A;
  }
  .description {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  .examples {
    margin-top: 1rem;
  }
  .examples-label {
    color: #C45C1A;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
    margin-bottom: 0.5rem;
  }
  .examples ul {
    list-style: none;
    padding-left: 0;
    display: grid;
    gap: 0.35rem;
  }
  .examples li {
    color: #9A8070;
    font-size: 0.9rem;
    padding-left: 1rem;
    position: relative;
  }
  .examples li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #C45C1A;
  }
  .portfolio-section {
    margin-top: 2rem;
  }
  .section-title {
    margin-bottom: 0.75rem;
  }
  .section-intro {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
  .portfolio-grid {
    display: grid;
    gap: 1rem;
  }
  .portfolio-card {
    border: 1px solid #2A1A0E;
    background: #160C06;
    padding: 1.5rem;
    position: relative;
  }
  .portfolio-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #C45C1A;
  }
  .portfolio-meta {
    margin-bottom: 0.75rem;
  }
  .status-badge {
    color: #C45C1A;
    border: 1px solid #C45C1A;
    padding: 0.35rem 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.65rem;
    display: inline-block;
  }
  .portfolio-card p {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  .tech {
    color: #C45C1A;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
  .process-section {
    margin-top: 2rem;
  }
  .process-list {
    list-style: none;
    padding-left: 0;
    display: grid;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  .process-list li {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.95rem;
    padding-left: 2rem;
    position: relative;
  }
  .process-list li::before {
    content: attr(data-index);
    position: absolute;
    left: 0;
    color: #C45C1A;
    font-weight: 700;
  }
  .process-list li:nth-child(1)::before { content: '01'; }
  .process-list li:nth-child(2)::before { content: '02'; }
  .process-list li:nth-child(3)::before { content: '03'; }
  .process-list li:nth-child(4)::before { content: '04'; }
  .process-list strong {
    color: #D0B08B;
  }
  .cta-wrapper {
    text-align: center;
    margin-top: 2rem;
  }
  .cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    background: #C45C1A;
    color: #0F0804;
    padding: 1rem 2.25rem;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
    transition: background 0.15s;
  }
  .cta:hover { background: #E8731A; }
  footer {
    border-top: 1px solid #2A1A0E;
    padding: 2rem;
    text-align: center;
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: #3A2010;
    text-transform: uppercase;
  }
  footer nav {
    margin-bottom: 0.9rem;
  }
  footer a {
    color: #9A8070;
    text-decoration: none;
  }
  footer a:hover { color: #C45C1A; }
  .sep { margin: 0 0.75rem; color: #3A2010; }
  .footer-line { color: #9A8070; }
  @media (min-width: 768px) {
    .portfolio-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 480px) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>
