<svelte:head>
  <title>belt.works</title>
  <meta
    name="description"
    content="We help skilled tradespeople get more work, without the bullshit."
  />
</svelte:head>

<script>
  const mikeServices = ['Flooring', 'Drywall', 'Bathrooms', 'Interior Work'];
</script>

<div class="page">
  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">belt.works</p>
      <h1>Help actually arrived.</h1>
      <p class="subhead">We help skilled tradespeople get more work, without the bullshit.</p>
      <a class="cta" href="#providers">Find a Provider</a>
    </div>
  </section>

  <section class="providers" id="providers">
    <div class="section-head">
      <p class="eyebrow">Providers</p>
      <h2>Start with somebody local.</h2>
    </div>

    <article class="provider-card">
      <h3>Mike</h3>
      <p><strong>Services:</strong> {mikeServices.join(', ')}</p>
      <p><strong>Area:</strong> Akron, OH metro + 30mi</p>
      <p><strong>Availability:</strong> Booking 2–3 weeks out</p>
      <a class="provider-link" href="/mike">Request a Job</a>
    </article>
  </section>

  <footer class="footer">belt.works · Built in Akron · 2026</footer>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #0f0804;
    color: #f4ece2;
  }

  .page {
    min-height: 100vh;
  }

  .hero,
  .providers,
  .footer {
    padding-left: 18px;
    padding-right: 18px;
  }

  .hero {
    padding-top: 72px;
    padding-bottom: 56px;
  }

  .hero-inner,
  .providers,
  .footer {
    max-width: 960px;
    margin: 0 auto;
  }

  .eyebrow {
    margin: 0 0 10px;
    color: #c45c1a;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.5rem, 9vw, 5.5rem);
    line-height: 0.95;
    max-width: 8ch;
  }

  .subhead {
    margin: 18px 0 0;
    max-width: 32rem;
    font-size: 1.1rem;
    line-height: 1.55;
    color: #dbcdbd;
  }

  .cta,
  .provider-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 18px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 700;
  }

  .cta {
    margin-top: 24px;
    background: #c45c1a;
    color: #120b07;
  }

  .providers {
    padding-top: 24px;
    padding-bottom: 56px;
  }

  .section-head {
    margin-bottom: 18px;
  }

  h2 {
    margin: 0;
    font-size: 1.7rem;
  }

  .provider-card {
    background: #1a110c;
    border: 1px solid #3c2416;
    border-radius: 18px;
    padding: 22px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 1.5rem;
  }

  .provider-card p {
    margin: 0 0 12px;
    line-height: 1.6;
    color: #dbcdbd;
  }

  .provider-link {
    margin-top: 8px;
    background: transparent;
    border: 1px solid #c45c1a;
    color: #f4ece2;
  }

  .footer {
    padding-top: 0;
    padding-bottom: 24px;
    color: #9b8b7a;
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    .hero {
      padding-top: 96px;
      padding-bottom: 72px;
    }

    .providers {
      padding-top: 32px;
      padding-bottom: 72px;
    }

    .provider-card {
      max-width: 560px;
    }
  }
</style>
