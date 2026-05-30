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
      <h2>Boring costs. Real ones.</h2>
    </div>
    <p class="lead">
      The goal is not startup theater. The goal is durable local software that does not vanish
      the first time rent, hosting, or a broken auth flow shows its teeth.
    </p>
  </div>

  <div class="wrap grid three">
    <article class="card large">
      <p class="meta">01</p>
      <h3>Infrastructure</h3>
      <p>Hosting, domains, email, backups, monitoring, and the other pipes nobody praises until they burst.</p>
    </article>
    <article class="card large">
      <p class="meta">02</p>
      <h3>Maintenance</h3>
      <p>Bug fixes, accessibility cleanup, spam control, user support, and the endless war against entropy.</p>
    </article>
    <article class="card large">
      <p class="meta">03</p>
      <h3>Local capacity</h3>
      <p>Time to build with Akron first: tools, documentation, outreach, and the pieces that make help easier to find.</p>
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
    .support-hero__grid {
      grid-template-columns: 1fr;
      align-items: start;
    }
  }
</style>
