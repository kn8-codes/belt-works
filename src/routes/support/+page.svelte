<svelte:head>
  <title>Support the work | belt.works</title>
  <meta
    name="description"
    content="Support belt.works and the local mutual-aid infrastructure behind ShopFloor."
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
        <a class="button" href="/contact">Start a support conversation</a>
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
    <article class="card large">
      <p class="eyebrow">For now</p>
      <h2>Talk first.</h2>
      <p class="lead">
        The payment rails are intentionally not wired into this page yet. That comes after the ask is clear,
        the language is honest, and the mechanism does not poison the project.
      </p>
      <p>
        If you want to support ShopFloor or belt.works, send a note. Say what you want to help sustain:
        local mutual aid, accessibility work, software services, or the whole messy shop.
      </p>
      <div class="actions">
        <a class="button" href="/contact">Contact belt.works</a>
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

  @media (max-width: 820px) {
    .support-hero__grid {
      grid-template-columns: 1fr;
      align-items: start;
    }
  }
</style>
