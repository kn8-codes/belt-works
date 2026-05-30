<svelte:head>
  <title>Donate | belt.works</title>
  <meta
    name="description"
    content="Support belt.works with a direct donation. Donations cover hosting, maintenance, accessibility, and local capacity."
  />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Donate</p>
    <h1>Keep it running.</h1>
    <p class="lead">
      belt.works is a research-first software lab. ShopFloor is free to use because barriers to
      help are bugs. Donations cover the real costs that keep it that way.
    </p>
  </div>
</section>

<section class="section" aria-label="Donate via Cash App">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Why it helps</p>
      <h2>Boring costs. Real ones.</h2>
      <ul class="list">
        <li>Hosting, domains, and infrastructure that quietly keeps working.</li>
        <li>Maintenance, bug fixes, and accessibility cleanup.</li>
        <li>Local capacity to keep building with Akron first.</li>
        <li>The slow work of keeping promises from rotting.</li>
      </ul>
    </article>

    <article class="card large donate-card">
      <p class="meta">Cash App</p>
      <div class="qr-wrap">
        <img
          src="/donate/cashapp-qr.png"
          alt="Cash App QR code to donate to belt.works"
          class="qr-image"
        />
      </div>
      <p class="qr-instruction">Scan with your phone camera or Cash App.</p>
    </article>
  </div>
</section>

<section class="section" aria-label="More">
  <div class="wrap">
    <div class="actions">
      <a class="button secondary" href="/support">Read the philosophy</a>
      <a class="button secondary" href="/contact">Get in touch</a>
    </div>
  </div>
</section>

<style>
  .donate-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .qr-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
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
</style>
