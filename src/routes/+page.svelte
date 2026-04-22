<svelte:head>
  <title>belt.works — Help actually arrived.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
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

      <h1 class="fade-in" style="--delay: 100ms">Help actually<br>arrived.</h1>
      <p class="sub fade-in" style="--delay: 200ms">We help skilled tradespeople get more work,<br>without the bullshit.</p>
      <a href="#providers" class="cta fade-in" style="--delay: 300ms" aria-label="Find a provider near you">Find a Provider</a>
    </div>
    <div class="hero-rule"></div>
  </section>

  <!-- PROVIDERS -->
  <section class="providers" id="providers" aria-label="Available providers">
    <div class="section-label fade-in" style="--delay: 400ms">// PROVIDERS</div>
    <div class="cards">

      <article class="card fade-in" style="--delay: 500ms" aria-label="Mike - flooring and drywall contractor">
        <div class="card-header">
          <div class="avatar" aria-hidden="true">M</div>
          <div>
            <div class="card-name">Mike</div>
            <div class="card-area">Akron, OH metro + 30mi</div>
          </div>
          <div class="avail-badge" role="status">Booking 2–3 weeks out</div>
        </div>
        <ul class="services" aria-label="Services offered">
          <li>LVP Flooring</li>
          <li>Hardwood</li>
          <li>Tile</li>
          <li>Carpet</li>
          <li>Drywall</li>
          <li>Bathrooms</li>
          <li>Interior Work</li>
        </ul>
        <a href="/mike" class="card-cta" aria-label="Request a job from Mike">Request a Job →</a>
      </article>

    </div>
  </section>

  <!-- ABOUT -->
  <section class="about fade-in" style="--delay: 600ms" aria-label="About belt.works">
    <div class="section-label">// WHAT THIS IS</div>
    <p>belt.works connects people who need skilled work done with tradespeople who are too busy doing the work to chase leads. No marketplace. No middleman taking a cut from the client. You submit a request, the provider calls you. That's it.</p>
  </section>

  <!-- FOOTER -->
  <footer role="contentinfo">
    <nav aria-label="Footer navigation">
      <a href="/about">About</a>
      <span class="sep" aria-hidden="true">·</span>
      <a href="/privacy">Privacy</a>
    </nav>
    <div class="footer-brand">belt.works · Built in Akron · 2026</div>
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
  :global(:focus-visible) {
    outline: 2px solid #C45C1A;
    outline-offset: 3px;
  }

  /* FADE IN ANIMATION */
  .fade-in {
    opacity: 0;
    transform: translateY(16px);
    animation: fadeUp 0.5s ease forwards;
    animation-delay: var(--delay, 0ms);
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
  }
  .hero-inner {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    padding: 6rem 0 4rem;
  }
  .mark {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .wordmark {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    letter-spacing: 2px;
    color: #F0EDE8;
  }
  .rust { color: #C45C1A; }

  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(4rem, 12vw, 8rem);
    line-height: 0.95;
    letter-spacing: 2px;
    color: #F0EDE8;
    margin-bottom: 1.5rem;
  }
  .sub {
    font-size: 1rem;
    line-height: 1.7;
    color: #9A8070;
    margin-bottom: 2.5rem;
    max-width: 480px;
  }

  /* CTA BUTTON */
  .cta {
    display: inline-block;
    background: #C45C1A;
    color: #0F0804;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 2.5rem;
    border: none;
    cursor: pointer;
    position: relative;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 0 rgba(196, 92, 26, 0);
  }
  .cta:hover {
    background: #E8731A;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(196, 92, 26, 0.35);
  }
  .cta:active {
    transform: translateY(0px);
    box-shadow: 0 2px 8px rgba(196, 92, 26, 0.2);
  }

  .hero-rule {
    position: absolute;
    bottom: 0; left: 2rem; right: 2rem;
    height: 1px;
    background: #2A1A0E;
  }

  /* PROVIDERS */
  .providers {
    max-width: 700px;
    margin: 0 auto;
    padding: 5rem 2rem 3rem;
    width: 100%;
  }
  .section-label {
    font-size: 0.65rem;
    letter-spacing: 4px;
    color: #C45C1A;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  .cards { display: flex; flex-direction: column; gap: 1.5rem; }

  /* CARD */
  .card {
    border: 1px solid #2A1A0E;
    background: #160C06;
    padding: 2rem;
    position: relative;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 100%;
    background: #C45C1A;
    transition: width 0.2s;
  }
  .card:hover {
    border-color: #C45C1A;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(196, 92, 26, 0.12);
  }
  .card:hover::before { width: 5px; }

  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .avatar {
    width: 48px; height: 48px;
    background: #C45C1A;
    color: #0F0804;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.2s;
  }
  .card:hover .avatar { transform: scale(1.05); }

  .card-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    letter-spacing: 2px;
    color: #F0EDE8;
    line-height: 1;
  }
  .card-area {
    font-size: 0.65rem;
    color: #9A8070;
    letter-spacing: 1px;
    margin-top: 4px;
    text-transform: uppercase;
  }
  .avail-badge {
    margin-left: auto;
    font-size: 0.6rem;
    letter-spacing: 2px;
    color: #C45C1A;
    border: 1px solid #C45C1A;
    padding: 0.3rem 0.7rem;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* SERVICES */
  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    list-style: none;
  }
  .services li {
    font-size: 0.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9A8070;
    border: 1px solid #2A1A0E;
    padding: 0.3rem 0.6rem;
    transition: border-color 0.15s, color 0.15s, transform 0.15s;
    cursor: default;
  }
  .services li:hover {
    border-color: #C45C1A;
    color: #C45C1A;
    transform: translateY(-1px);
  }

  .card-cta {
    display: inline-block;
    color: #C45C1A;
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.15s, letter-spacing 0.2s;
    position: relative;
  }
  .card-cta::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: #C45C1A;
    transition: width 0.2s;
  }
  .card-cta:hover {
    color: #E8731A;
    letter-spacing: 3px;
  }
  .card-cta:hover::after { width: 100%; }

  /* ABOUT */
  .about {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
  }
  .about p {
    font-size: 0.85rem;
    line-height: 1.9;
    color: #9A8070;
    max-width: 560px;
  }

  /* FOOTER */
  footer {
    border-top: 1px solid #2A1A0E;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  footer nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  footer a {
    font-size: 0.65rem;
    letter-spacing: 3px;
    color: #3A2010;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.15s;
  }
  footer a:hover { color: #C45C1A; }
  .sep { color: #2A1A0E; }
  .footer-brand {
    font-size: 0.6rem;
    letter-spacing: 3px;
    color: #2A1A0E;
    text-transform: uppercase;
  }

  @media (max-width: 480px) {
    .avail-badge { margin-left: 0; }
    h1 { font-size: 4rem; }
    .sub { font-size: 0.85rem; }
  }

  /* REDUCED MOTION */
  @media (prefers-reduced-motion: reduce) {
    .fade-in { animation: none; opacity: 1; transform: none; }
    .cta, .card, .card-cta, .services li { transition: none; }
  }
</style>
