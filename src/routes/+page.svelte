<svelte:head>
  <title>belt.works — Elegant solutions from first principles.</title>
  <meta name="description" content="Elegant solutions from first principles." />
  <meta property="og:title" content="belt.works — Elegant solutions from first principles." />
  <meta property="og:description" content="Elegant solutions from first principles." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.belt.works/" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  const currentWork = [
    {
      label: 'proof',
      name: 'belt.works',
      description: 'The public face of the lab. Research, proof, services, and intake all point through here.',
      status: 'active rebuild',
      note: '',
      links: [
        { href: '/', text: 'open' },
        { href: 'https://github.com/kn8-codes/belt-works', text: 'github', external: true }
      ]
    },
    {
      label: 'proof artifact',
      name: 'hosp-or-not',
      description: 'Small, finished, real. The only kind of proof that counts.',
      status: 'shipped',
      note: ''
    },
    {
      label: 'in development',
      name: 'Shop Floor',
      description: 'City-level repair and survival infrastructure for working people. Starting in Akron.',
      status: 'in development',
      note: ''
    },
    {
      label: 'proof',
      name: 'GREYMARKET',
      description: 'Terminal-style arbitrage system for auction websites.',
      status: 'live',
      note: ''
    }
  ];
</script>

<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <section class="hero" aria-label="belt.works introduction">
    <div class="hero-inner" id="main-content">
      <div class="mark fade-in" style="--delay: 0ms">
        <svg viewBox="0 0 80 36" width="80" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="8" width="76" height="20" rx="3" fill="none" stroke="#C45C1A" stroke-width="3.5"/>
          <rect x="2" y="4" width="18" height="28" rx="3" fill="none" stroke="#C45C1A" stroke-width="3.5"/>
          <line x1="11" y1="4" x2="11" y2="32" stroke="#C45C1A" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="42" cy="18" r="2" fill="#C45C1A"/>
          <circle cx="54" cy="18" r="2" fill="#C45C1A"/>
          <circle cx="66" cy="18" r="2" fill="#C45C1A"/>
        </svg>
        <span class="wordmark"><span class="rust">belt</span>.works</span>
      </div>

      <p class="tagline fade-in" style="--delay: 80ms">Elegant solutions from first principles.</p>
      <h1 class="fade-in" style="--delay: 160ms">We build software that works.</h1>
      <p class="sub fade-in" style="--delay: 240ms">You bring the problem. We turn mess into scope and get to work.</p>
      <div class="hero-actions fade-in" style="--delay: 320ms">
        <a href="/contact" class="cta" aria-label="Bring a problem to belt.works">Bring a problem</a>
        <a href="#current-work" class="text-link" aria-label="See current work">See the work</a>
      </div>
    </div>
    <div class="hero-rule"></div>
  </section>

  <section class="content-section" id="current-work" aria-label="Current work section">
    <div class="section-label fade-in" style="--delay: 0ms">// CURRENT WORK</div>
    <header class="section-copy fade-in" style="--delay: 100ms">
      <h2>Finished means finished.</h2>
      <p>Status labels stay visible. Everything else gets named honestly.</p>
    </header>

    <div class="work-grid">
      {#each currentWork as project, index (project.name)}
        <article class="card fade-in" style={`--delay: ${200 + index * 80}ms`}>
          <div class="meta-row">
            <div class="meta">{project.label}</div>
            <div class="status-badge">{project.status}</div>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {#if project.note}
            <p class="note">{project.note}</p>
          {/if}
          {#if project.links}
            <div class="links">
              {#each project.links as link}
                <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.text}</a>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </div>
  </section>

  <section class="content-section cta-section" aria-label="Bring the problem here">
    <div class="card fade-in" style="--delay: 0ms">
      <div class="section-label">// SERVICES</div>
      <h2>Bring the problem here.</h2>
      <p>The front door is plain: describe the mess, what has to work, and what failure costs. Then we decide what is worth building first.</p>
      <a href="/contact" class="cta" aria-label="Open the contact page">Open contact →</a>
    </div>
  </section>

  <footer>
    <nav aria-label="Footer navigation">
      <a href="/about">About</a>
      <span class="sep">·</span>
      <a href="/vision">Vision</a>
      <span class="sep">·</span>
      <a href="/privacy">Privacy</a>
      <span class="sep">·</span>
      <a href="/contact">Contact</a>
    </nav>
    <div class="footer-line">belt.works · Akron, Ohio · Elegant solutions from first principles.</div>
  </footer>
</main>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(html) { scroll-behavior: smooth; }
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
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
  }
  .hero-inner, .content-section, footer {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }
  .hero-inner { padding: 6rem 0 4rem; }
  .mark {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
  .wordmark {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    letter-spacing: 2px;
  }
  .rust { color: #C45C1A; }
  .tagline,
  .section-label,
  .meta,
  .status-badge,
  .links a,
  .text-link {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
  }
  .tagline {
    color: #C45C1A;
    margin-bottom: 1rem;
  }
  h1, h2, h3 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    color: #F0EDE8;
  }
  h1 {
    font-size: clamp(3.6rem, 11vw, 7rem);
    line-height: 0.94;
    margin-bottom: 1.25rem;
    max-width: 10ch;
  }
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1;
    margin-bottom: 0.85rem;
  }
  h3 {
    font-size: 1.9rem;
    line-height: 1;
    margin-bottom: 0.85rem;
  }
  .sub, .section-copy p, .card p {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.95rem;
  }
  .sub {
    max-width: 560px;
    margin-bottom: 2rem;
  }
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
  }
  .cta, .text-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    text-decoration: none;
    font-weight: 700;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .cta {
    background: #C45C1A;
    color: #0F0804;
    padding: 1rem 2.25rem;
  }
  .cta:hover { background: #E8731A; }
  .text-link {
    color: #C45C1A;
    padding: 0.75rem 0;
  }
  .text-link:hover { color: #E8731A; }
  .hero-rule {
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: #2A1A0E;
  }
  .content-section {
    padding: 5rem 2rem;
  }
  .section-label {
    color: #C45C1A;
    margin-bottom: 1rem;
  }
  .section-copy {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  .work-grid {
    display: grid;
    gap: 1rem;
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
  .meta-row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  .meta { color: #9A8070; }
  .status-badge {
    color: #C45C1A;
    border: 1px solid #C45C1A;
    padding: 0.35rem 0.65rem;
    white-space: nowrap;
  }
  .note {
    color: #D0B08B;
    margin-top: 0.75rem;
  }
  .links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
  .links a {
    color: #C45C1A;
    text-decoration: none;
  }
  .links a:hover { color: #E8731A; }
  .cta-section .card {
    display: grid;
    gap: 1rem;
  }
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
    .work-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 480px) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    :global(html) { scroll-behavior: auto; }
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>
