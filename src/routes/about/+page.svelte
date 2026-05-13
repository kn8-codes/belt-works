<svelte:head>
  <title>About — belt.works</title>
  <meta name="description" content="Twenty years solving problems under pressure. Freelance software development, automation, AI integrations. Based in Akron, Ohio." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    <div class="section-label fade-in" style="--delay: 0ms">// ABOUT</div>
    
    <header class="stack fade-in" style="--delay: 100ms">
      <h1>Twenty years solving problems under pressure.</h1>
      <p class="lead">Some of it in kitchens, some of it in code. Same discipline either way: you show up, you do the work, you don't cut corners.</p>
    </header>

    <div class="card-list">
      <article class="card fade-in" style="--delay: 200ms">
        <div class="meta">What I do</div>
        <p>I build bespoke software, automation pipelines, AI integrations, and security tooling. I work alone but I work fast — I've got a mesh of AI agents that handle the repetitive parts so I can focus on the hard problems.</p>
      </article>

      <article class="card fade-in" style="--delay: 300ms">
        <div class="meta">How it works</div>
        <p>Rate: $17/hour, billed weekly. Scope gets locked before work starts. No proposal theater, no bloated contracts. Just clear work for fair money.</p>
        <p>You bring the problem, I turn mess into scope, and we get to work. When it's done, it's done.</p>
      </article>

      <article class="card fade-in" style="--delay: 400ms">
        <div class="meta">Where I work</div>
        <p>Based in Akron, Ohio. I work remotely with clients anywhere. If you're in the Rust Belt or anywhere else that got left behind when tech went coastal, I get it. I'm from here.</p>
      </article>

      <article class="card fade-in" style="--delay: 500ms">
        <div class="meta">Why this rate</div>
        <p>$17/hour isn't coastal rates. It's real-world rates for real-world work. I'm not competing with agencies. I'm competing with the friction of doing it yourself or hiring someone who doesn't show up.</p>
        <p>I've been cooking for almost 20 years. I don't need to do it anymore. I'm too smart for that — I have too much experience and knowledge to waste it in a kitchen. But I know what fair money looks like, and I know what showing up means.</p>
      </article>

      <article class="card fade-in" style="--delay: 600ms">
        <div class="meta">What I believe</div>
        <p>Software should work. Not kinda work. Not work if you hold it right. Just work.</p>
        <p>The goal isn't money. It never has been. The goal is to make people's lives better and easier and more fulfilling. Technological achievement matters. Being the person who built something that helped — that matters.</p>
        <p>One day I'll have enough money to just sit around and do bug bounties all day or build civic tech for communities. Right now I need to make this sustainable. So I take freelance work, I ship fast, and I keep the rate fair.</p>
      </article>

      <article class="card fade-in" style="--delay: 700ms">
        <div class="meta">The method</div>
        <p>Elegant solutions from first principles. That's not marketing copy. That's the standard.</p>
        <p>I don't build empires. I build tools that work. I don't cut corners. I don't ship half-finished garbage. Finished means finished.</p>
        <p>If you want someone who shows up and actually delivers, start here.</p>
      </article>
    </div>

    <div class="cta-wrapper fade-in" style="--delay: 800ms">
      <a href="/hire" class="cta">Start a project →</a>
    </div>
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
    max-width: 820px;
    margin: 0 auto;
    padding: 3rem 2rem 5rem;
    display: grid;
    gap: 1.5rem;
  }
  .section-label {
    color: #C45C1A;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
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
  .lead {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #D0B08B;
  }
  .card-list {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
  }
  .card {
    border: 1px solid #2A1A0E;
    background: #160C06;
    padding: 1.75rem;
    position: relative;
    display: grid;
    gap: 0.85rem;
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
  .meta {
    color: #C45C1A;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
  }
  .card p {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.95rem;
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
  @media (max-width: 480px) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>
