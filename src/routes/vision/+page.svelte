<svelte:head>
  <title>Vision | belt.works</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>


<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    <div class="section-label fade-in" style="--delay: 0ms">// VISION</div>
    
<header class="stack fade-in" style="--delay: 100ms">
  <h1>What we're actually trying to do.</h1>
  <p class="lead">The trades are underserved by technology. Not because the technology doesn't exist, it does, but because nobody has bothered to build something that works for people who are on a job site at 7am and don't have time to learn new software.</p>
</header>
<div class="card-list">
  <article class="card fade-in" style="--delay: 200ms"><div class="meta">The problem</div><p>Skilled tradespeople are some of the hardest-working people in the country. They're also some of the worst-served by the internet. Yelp takes a cut. Angie's List charges for leads that don't pan out. Google Ads require a marketing budget and someone who knows how to run them. Most contractors either do nothing, relying entirely on word of mouth, or waste money on platforms that don't understand their business.</p></article>
  <article class="card fade-in" style="--delay: 300ms"><div class="meta">Our approach</div><p>We don't charge for leads. We don't take money unless you close a job. We build your web presence, handle your lead flow, and stay out of the way. The technology runs in the background. You never have to think about it.</p></article>
  <article class="card fade-in" style="--delay: 400ms"><div class="meta">Where this goes</div><p>AI is getting better fast. The tools we're building today will be dramatically more capable in 12 months. We're investing now in the infrastructure, the relationships, and the trust that will make belt.works the default platform for Rust Belt tradespeople who want to grow without selling out.</p></article>
  <article class="card fade-in" style="--delay: 500ms"><div class="meta">The Rust Belt advantage</div><p>People here know how to work. They don't need motivation. They need tools that match their work ethic. That's what we're building.</p></article>
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


