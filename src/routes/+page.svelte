<svelte:head>
  <title>belt.works — You do the work. We handle everything else.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

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

      <h1 class="fade-in" style="--delay: 100ms">You do the work.<br>We handle everything else.</h1>
      <p class="sub fade-in" style="--delay: 200ms">belt.works puts AI to work for skilled tradespeople in the Rust Belt. More leads. No missed calls. A presence that looks like you mean business.</p>
      <a href="#how-it-works" class="cta fade-in" style="--delay: 300ms" aria-label="See how belt.works works">See How It Works</a>
    </div>
    <div class="hero-rule"></div>
  </section>

  <section class="content-section" id="how-it-works" aria-label="How belt.works works">
    <div class="section-label fade-in" style="--delay: 0ms">// HOW IT WORKS</div>
    <div class="steps-grid">
      <article class="card fade-in" style="--delay: 100ms">
        <div class="step-number">01</div>
        <h2>You get listed</h2>
        <p>We build your profile. Services, area, availability. Clients find you, not the other way around.</p>
      </article>
      <article class="card fade-in" style="--delay: 200ms">
        <div class="step-number">02</div>
        <h2>Leads come to you</h2>
        <p>When someone needs work done, they fill out a request. You get a text message. That's it. No app. No portal. No login.</p>
      </article>
      <article class="card fade-in" style="--delay: 300ms">
        <div class="step-number">03</div>
        <h2>You close the job</h2>
        <p>Call the lead. Do the work. Get paid. We take 3% of what you close. Nothing until you win.</p>
      </article>
    </div>
  </section>

  <section class="content-section" aria-label="Provider proof section">
    <div class="section-label fade-in" style="--delay: 0ms">// ALREADY WORKING</div>
    <p class="intro fade-in" style="--delay: 100ms">Mike is a flooring and drywall contractor in Akron, Ohio. Single operator. Fully booked. Now his leads come to him.</p>

    <article class="card provider-card fade-in" style="--delay: 200ms" aria-label="Mike provider card">
      <div class="card-header">
        <div class="avatar" aria-hidden="true">M</div>
        <div>
          <div class="card-name">Mike</div>
          <div class="card-area">Akron, OH metro + 30mi</div>
        </div>
        <div class="avail-badge">Booking 2–3 weeks out</div>
      </div>
      <div class="services">
        <span>LVP Flooring</span>
        <span>Hardwood</span>
        <span>Tile</span>
        <span>Carpet</span>
        <span>Drywall</span>
        <span>Bathrooms</span>
        <span>Interior Work</span>
      </div>
      <a href="/mike" class="card-cta" aria-label="Request a job from Mike">Request a Job →</a>
    </article>
  </section>

  <section class="content-section" aria-label="Why belt.works exists">
    <div class="section-label fade-in" style="--delay: 0ms">// WHY THIS EXISTS</div>
    <div class="copy-block fade-in" style="--delay: 100ms">
      <p>Most AI tools are built for people who already have everything figured out.</p>
      <p>belt.works is built for people who are good at their trade and tired of losing work because they didn't answer a call, didn't have a website, or didn't know how to get found.</p>
      <p>You don't need to understand AI to benefit from it. You just need to show up and do the work.</p>
      <p>We handle the rest.</p>
    </div>
  </section>

  <section class="content-section cta-section" aria-label="Get listed call to action">
    <div class="card fade-in" style="--delay: 0ms">
      <h2>Ready to get more work?</h2>
      <p>There's no contract. No upfront cost. We get paid when you get paid.</p>
      <a href="/contact" class="cta" aria-label="Get listed with belt.works">Get Listed →</a>
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
    max-width: 820px;
    width: 100%;
    margin: 0 auto;
  }
  .hero-inner { padding: 6rem 0 4rem; }
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
  }
  .rust { color: #C45C1A; }
  h1, h2 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    color: #F0EDE8;
  }
  h1 {
    font-size: clamp(3.6rem, 11vw, 7rem);
    line-height: 0.94;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 2rem;
    line-height: 1;
    margin-bottom: 0.85rem;
  }
  .sub, .intro, .copy-block p, .card p {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.95rem;
  }
  .sub {
    max-width: 560px;
    margin-bottom: 2.5rem;
  }
  .cta, .card-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .cta {
    background: #C45C1A;
    color: #0F0804;
    padding: 1rem 2.25rem;
  }
  .cta:hover { background: #E8731A; }
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
    font-size: 0.7rem;
    letter-spacing: 4px;
    color: #C45C1A;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  .steps-grid {
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
  .step-number {
    font-size: 0.8rem;
    letter-spacing: 3px;
    color: #C45C1A;
    margin-bottom: 0.9rem;
  }
  .provider-card { margin-top: 1.5rem; }
  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .avatar {
    width: 48px;
    height: 48px;
    background: #C45C1A;
    color: #0F0804;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .card-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    letter-spacing: 2px;
    line-height: 1;
  }
  .card-area {
    font-size: 0.7rem;
    color: #9A8070;
    letter-spacing: 1px;
    margin-top: 4px;
  }
  .avail-badge {
    margin-left: auto;
    font-size: 0.65rem;
    letter-spacing: 2px;
    color: #C45C1A;
    border: 1px solid #C45C1A;
    padding: 0.3rem 0.7rem;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .services span {
    font-size: 0.65rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9A8070;
    border: 1px solid #2A1A0E;
    padding: 0.3rem 0.6rem;
  }
  .card-cta {
    color: #C45C1A;
  }
  .card-cta:hover { color: #E8731A; }
  .copy-block {
    display: grid;
    gap: 1rem;
  }
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
  .footer-line { color: #3A2010; }
  @media (min-width: 768px) {
    .steps-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 480px) {
    .avail-badge { margin-left: 0; }
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    :global(html) { scroll-behavior: auto; }
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>
