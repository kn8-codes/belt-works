<script>
  const monthlyTarget = 100;
  const currentMonthlySupport = 0;
  const supportPercent = Math.min(100, Math.round((currentMonthlySupport / monthlyTarget) * 100));
</script>

<svelte:head>
  <title>Support the work | belt.works</title>
  <meta
    name="description"
    content="Donate to belt.works and keep the local mutual-aid infrastructure behind ShopFloor alive. Scan the Cash App QR — free use stays free."
  />
</svelte:head>

<section class="hero support-hero" aria-label="Support belt.works">
  <div class="wrap support-hero__grid">
    <div>
      <p class="eyebrow">Support the work</p>
      <h1>Keep the useful parts alive.</h1>
      <p class="lead lede-tight">
        ShopFloor is free to use because barriers to help are bugs. belt.works carries the
        sustainability ask so the help flow does not become a checkout lane.
      </p>
      <div class="actions">
        <a class="button" href="#donate">Donate via Cash App</a>
        <a class="button secondary" href="/blog/shopfloor">Read about ShopFloor</a>
      </div>
    </div>

    <aside class="card large support-note" aria-label="Sustainability note">
      <p class="meta">plain terms</p>
      <p>
        Mutual-aid infrastructure still has bills: hosting, maintenance, abuse handling,
        accessibility, design, and the slow work of keeping promises from rotting.
      </p>
      <p>
        Support should help the system survive. It should not decide who deserves help.
      </p>
    </aside>
  </div>
</section>

<section class="section" aria-label="What support pays for">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">What support pays for</p>
      <h2>What support actually pays for.</h2>
    </div>
    <p class="lead">
      The goal is not startup theater. The goal is durable local software that does not vanish
      the first time hosting, email, browser automation, or a broken auth flow shows its teeth.
    </p>
  </div>

  <div class="wrap cost-panel card large">
    <div>
      <p class="eyebrow">Current support target</p>
      <h3>$100/month keeps the work easier to carry.</h3>
      <p>
        This is not rent, groceries, or personal bills. It is the public operating cost of
        keeping belt.works useful: the tools that let us run accessibility checks, maintain
        community outreach infrastructure, test pages in real browsers, and keep the mesh online.
      </p>
    </div>
    <div class="target-box" aria-label="Monthly support target">
      <span>{monthlyTarget}</span>
      <small>monthly goal</small>
    </div>
  </div>

  <div class="wrap support-progress card large" aria-label="Monthly support progress">
    <div class="support-progress__header">
      <div>
        <p class="eyebrow">Public progress</p>
        <h3>{currentMonthlySupport} / {monthlyTarget} this month</h3>
      </div>
      <p class="support-progress__percent">{supportPercent}%</p>
    </div>
    <div
      class="support-progress__bar"
      role="progressbar"
      aria-label="Monthly support progress toward $100 target"
      aria-valuenow={currentMonthlySupport}
      aria-valuemin={0}
      aria-valuemax={monthlyTarget}
    >
      <span style={`width: ${supportPercent}%`}></span>
    </div>
    <p class="form-note">
      Updated manually for now. If the number is stale, assume the page is honest but not automated yet.
    </p>
  </div>

  <div class="wrap grid three cost-grid">
    <article class="card large">
      <p class="meta">01</p>
      <h3>Inference and agent work</h3>
      <p>
        Coding, review, research, long-document reading, and the agent coordination that lets a
        small project do more than one tired human can do after a shift.
      </p>
    </article>
    <article class="card large">
      <p class="meta">02</p>
      <h3>Accessibility audits</h3>
      <p>
        Browser testing, scraping, page capture, and reporting tools that help Akron community
        programs find broken forms, unreadable pages, and blocked access before residents run into them.
      </p>
    </article>
    <article class="card large">
      <p class="meta">03</p>
      <h3>Web infrastructure</h3>
      <p>
        Domains, hosting, email, forms, backups, monitoring, and the pipes nobody praises until
        they burst at the worst possible time.
      </p>
    </article>
  </div>
</section>

<section class="section" aria-label="How to help">
  <div class="wrap grid two">
    <article id="donate" class="card large donate-card">
      <p class="eyebrow">Direct support</p>
      <h2>Send support.</h2>
      <p class="lead">
        Scan the Cash App code below — no account or conversation required. Or reach out first and
        say what you want to help sustain.
      </p>
      <p class="meta qr-label">Cash App</p>
      <div class="qr-wrap">
        <img
          src="/donate/cashapp-qr.png"
          alt="Cash App QR code to donate to belt.works"
          class="qr-image"
        />
      </div>
      <p class="qr-instruction">Scan with your phone camera or Cash App.</p>
      <div class="actions">
        <a class="button secondary" href="/contact">Contact belt.works</a>
      </div>
    </article>

    <article class="card large">
      <p class="eyebrow">Line we hold</p>
      <h2>Free use stays free.</h2>
      <ul class="list">
        <li>No paywall for asking for help.</li>
        <li>No fee to be seen as a neighbor.</li>
        <li>No gig-economy tax dressed up as community.</li>
        <li>Support the infrastructure, not access to dignity.</li>
      </ul>
    </article>
  </div>
</section>

<style>
  .support-hero {
    padding-top: clamp(4.5rem, 10vw, 8rem);
  }

  .support-hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 400px);
    gap: clamp(2rem, 6vw, 5rem);
    align-items: end;
  }

  .support-note {
    background:
      radial-gradient(circle at 0% 0%, rgba(255, 184, 77, 0.12), transparent 18rem),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012));
  }

  .support-note p {
    color: var(--muted);
    line-height: 1.6;
  }

  .donate-card {
    /* clear the sticky header when the hero CTA jumps here */
    scroll-margin-top: 6rem;
  }

  .cost-panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(140px, 220px);
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
    margin-bottom: clamp(1.25rem, 3vw, 2rem);
    background:
      radial-gradient(circle at 100% 0%, rgba(255, 184, 77, 0.14), transparent 16rem),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  }

  .cost-panel h3 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.6rem, 3vw, 2.5rem);
  }

  .cost-panel p {
    color: var(--muted);
    line-height: 1.65;
  }

  .target-box {
    display: grid;
    place-items: center;
    min-height: 150px;
    border: 1px solid rgba(255, 184, 77, 0.28);
    background: rgba(255, 184, 77, 0.08);
    text-align: center;
  }

  .target-box span {
    display: block;
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    font-weight: 800;
    letter-spacing: -0.08em;
    color: var(--text);
  }

  .target-box small {
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  .cost-grid {
    margin-top: clamp(1.25rem, 3vw, 2rem);
  }

  .support-progress {
    margin-bottom: clamp(1.25rem, 3vw, 2rem);
  }

  .support-progress__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: end;
  }

  .support-progress__header h3 {
    margin-bottom: 0;
  }

  .support-progress__percent {
    color: var(--accent);
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.06em;
    margin-bottom: 0;
  }

  .support-progress__bar {
    height: 0.85rem;
    border: 1px solid var(--line);
    background: #050504;
    margin: 1rem 0 0.65rem;
    overflow: hidden;
  }

  .support-progress__bar span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
  }

  .qr-label {
    margin-top: 0.5rem;
  }

  .qr-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0;
  }

  .qr-image {
    max-width: 260px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
  }

  .qr-instruction {
    color: var(--muted);
    font-size: 0.875rem;
  }

  @media (max-width: 820px) {
    .support-hero__grid,
    .cost-panel {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .target-box {
      min-height: 120px;
    }
  }
</style>
