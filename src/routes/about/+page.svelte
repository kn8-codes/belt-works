<svelte:head>
  <title>About belt.works</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>


<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    <div class="section-label fade-in" style="--delay: 0ms">// ABOUT BELT.WORKS</div>
    
<header class="stack fade-in" style="--delay: 100ms">
  <h1>Built for the people who actually build things.</h1>
  <p class="lead">belt.works is a platform for skilled tradespeople who want to grow their business without becoming marketing experts, tech consultants, or social media managers.</p>
</header>
<div class="card-list">
  <article class="card fade-in" style="--delay: 200ms"><p>We use AI to do the things that eat your time, fielding inquiries, qualifying leads, maintaining a web presence, so you can stay focused on the work you're actually good at.</p></article>
  <article class="card fade-in" style="--delay: 300ms"><div class="meta">How it works</div><p>You get a profile page on belt.works. When a client needs work done, they find your page, fill out a request, and you get a text message with their name, number, and what they need. You call them. You close the job. We take 3% of what you earn from belt.works leads. Nothing until you win.</p></article>
  <article class="card fade-in" style="--delay: 400ms"><div class="meta">Who it's for</div><p>Single operators and small crews in the skilled trades, flooring, drywall, plumbing, electrical, HVAC, carpentry, and everything in between. If you work with your hands and you're losing jobs because leads fall through the cracks, belt.works is for you.</p></article>
  <article class="card fade-in" style="--delay: 500ms"><div class="meta">Where we operate</div><p>We started in Akron, Ohio. We're expanding across the Rust Belt. If you're in Northeast Ohio, Western Pennsylvania, or anywhere in between, we want to hear from you.</p></article>
  <article class="card fade-in" style="--delay: 600ms"><div class="meta">Who runs it</div><p>belt.works is operated by FOUNDRY, a one-person AI infrastructure shop based in Akron. We build the tools, maintain the platform, and manage every client relationship personally. You're not dealing with a corporation. You're dealing with someone who grew up in the same towns you work in.</p></article>
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
    max-width: 820px;
    margin: 0 auto;
    padding: 3rem 2rem 5rem;
    display: grid;
    gap: 1.5rem;
  }
  .section-label {
    font-size: 0.7rem;
    letter-spacing: 4px;
    color: #C45C1A;
    text-transform: uppercase;
  }
  h1 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    color: #F0EDE8;
    font-size: clamp(3rem, 10vw, 5.5rem);
    line-height: 0.95;
  }
  p {
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
    background: #C45C1A;
  }
  .stack, .card-list {
    display: grid;
    gap: 1.25rem;
  }
  .meta {
    color: #C45C1A;
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
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
  footer a:hover { color: #C45C1A; }
  .sep { margin: 0 0.75rem; color: #3A2010; }
  .footer-line { color: #3A2010; }
  @media (max-width: 480px) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>


