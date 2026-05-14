<svelte:head>
  <title>Workshop | belt.works</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import { resolve } from '$app/paths';

  const offerings = [
    {
      title: 'Lead capture systems',
      copy: 'Simple intake pages, contact flows, and routing that help small operators catch real opportunities instead of missing calls and half-finished voicemails.'
    },
    {
      title: 'AI workshop builds',
      copy: 'Placeholder-first prototypes for AI assistants, intake tools, and workflow helpers that can be tested in the real world before anyone overcommits.'
    },
    {
      title: 'Public-facing web presence',
      copy: 'Tight, credible pages that explain what you do, who you serve, and how to contact you without making people fight a portal.'
    }
  ];

  const process = [
    'Get the actual problem on the table.',
    'Build the smallest useful version first.',
    'Test it against real work, not theory.',
    'Keep what helps. Cut what does not.'
  ];
</script>

<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href={resolve('/')} class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    <div class="section-label fade-in" style="--delay: 0ms">// WORKSHOP</div>

    <header class="stack fade-in" style="--delay: 100ms">
      <h1>AI workshop work for real-world operators.</h1>
      <p class="lead">belt.works is also a public-facing AI workshop: small systems, fast prototypes, and usable web infrastructure for people who need something that works more than they need something flashy.</p>
    </header>

    <div class="card-list">
      <article class="card fade-in" style="--delay: 200ms">
        <div class="meta">Positioning</div>
        <p>We build practical AI-backed tools for trades, small operators, and local businesses that are tired of software made for somebody else's workflow.</p>
        <p>No giant transformation pitch. No portal addiction. No pretending a one-person shop needs enterprise process.</p>
      </article>

      <article class="card fade-in" style="--delay: 300ms">
        <div class="meta">Offerings</div>
        <div class="stack compact">
          {#each offerings as offering (offering.title)}
            <div>
              <h2>{offering.title}</h2>
              <p>{offering.copy}</p>
            </div>
          {/each}
        </div>
      </article>

      <article class="card fade-in" style="--delay: 400ms">
        <div class="meta">How the workshop works</div>
        <ol class="process-list">
          {#each process as step (step)}
            <li>{step}</li>
          {/each}
        </ol>
      </article>

      <article class="card fade-in" style="--delay: 500ms">
        <div class="meta">Good fit</div>
        <p>This is a good fit if you already know your business has friction but do not want to burn months or money on overbuilt software. It is especially useful when the problem is lead flow, intake, follow-up, routing, or explaining your offer clearly in public.</p>
      </article>

      <article class="card fade-in" style="--delay: 600ms">
        <div class="meta">Call to action</div>
        <p>If you want to talk through a rough idea, a broken workflow, or a small AI tool that should probably exist by now, start with the FOUNDRY intake or send a direct note.</p>
        <div class="cta-row">
          <a class="cta" href={resolve('/contact')}>Open Intake</a>
          <a class="cta secondary" href={resolve('/contact?type=other')}>Contact belt.works</a>
        </div>
      </article>
    </div>
  </section>

  <footer>
    <nav aria-label="Footer navigation">
      <a href={resolve('/about')}>About</a>
      <span class="sep">·</span>
      <a href={resolve('/vision')}>Vision</a>
      <span class="sep">·</span>
      <a href={resolve('/workshop')}>Workshop</a>
      <span class="sep">·</span>
      <a href={resolve('/privacy')}>Privacy</a>
      <span class="sep">·</span>
      <a href={resolve('/contact')}>Contact</a>
    </nav>
    <div class="footer-line">belt.works · Built in Akron · 2026</div>
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
    outline: 2px solid #d7ff63;
    outline-offset: 3px;
  }
  .skip-link {
    position: absolute;
    left: 1rem;
    top: -3rem;
    background: #d7ff63;
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
  .back:hover { color: #d7ff63; }
  .page-shell {
    max-width: 820px;
    margin: 0 auto;
    padding: 3rem 2rem 5rem;
    display: grid;
    gap: 1.5rem;
  }
  .section-label {
    font-size: 0.7rem;
    letter-spacing: 4px;
    color: #d7ff63;
    text-transform: uppercase;
  }
  h1, h2 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    color: #F0EDE8;
  }
  h1 {
    font-size: clamp(3rem, 10vw, 5.5rem);
    line-height: 0.95;
  }
  h2 {
    font-size: 1.8rem;
    line-height: 1;
    margin-bottom: 0.75rem;
  }
  p, li {
    color: #9A8070;
    line-height: 1.8;
    font-size: 0.95rem;
  }
  .lead {
    max-width: 56rem;
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
    background: #d7ff63;
  }
  .stack, .card-list {
    display: grid;
    gap: 1.25rem;
  }
  .compact {
    gap: 1rem;
  }
  .meta {
    color: #d7ff63;
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }
  .process-list {
    display: grid;
    gap: 0.75rem;
    padding-left: 1.2rem;
  }
  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }
  .cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 1rem 1.5rem;
    background: #d7ff63;
    color: #0F0804;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .cta:hover { background: #b8e040; }
  .cta.secondary {
    background: transparent;
    color: #d7ff63;
    border: 1px solid #d7ff63;
  }
  .cta.secondary:hover {
    background: #241209;
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
    border: 0;
    padding: 0;
  }
  footer a {
    color: #9A8070;
    text-decoration: none;
  }
  footer a:hover { color: #d7ff63; }
  .sep { margin: 0 0.75rem; color: #3A2010; }
  .footer-line { color: #3A2010; }
  @media (max-width: 480px) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>
