<svelte:head>
  <title>FOUNDRY Intake | belt.works</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  let form = $state({
    name: '',
    phone: '',
    whatYouDo: '',
    whereYouWork: '',
    biggestHeadache: ''
  });

  let isSubmitting = $state(false);
  let success = $state(false);
  let error = $state('');

  /** @param {SubmitEvent} event */
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    success = false;
    error = '';

    try {
      const response = await fetch('/api/foundry-intake', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Could not submit intake.');
      }

      success = true;
      form = {
        name: '',
        phone: '',
        whatYouDo: '',
        whereYouWork: '',
        biggestHeadache: ''
      };
    } catch (err) {
      error = err instanceof Error ? err.message : 'Could not submit intake.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    <div class="section-label fade-in" style="--delay: 0ms">// FOUNDRY</div>

    <header class="stack fade-in" style="--delay: 100ms">
      <h1>Quick intake.</h1>
      <p class="lead">Five fields. No homework packet. Just enough to understand what you do, where you work, and what is making your business harder than it should be.</p>
    </header>

    <article class="card fade-in" style="--delay: 200ms">
      <div class="meta">Door opener</div>
      <form aria-label="FOUNDRY intake form" onsubmit={handleSubmit}>
        <div class="field-grid">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" type="text" bind:value={form.name} required placeholder="Your name" />
          </div>

          <div class="field">
            <label for="phone">Phone</label>
            <input id="phone" type="tel" bind:value={form.phone} required placeholder="Best number to reach you" />
          </div>

          <div class="field">
            <label for="what-you-do">What do you do?</label>
            <input id="what-you-do" type="text" bind:value={form.whatYouDo} required placeholder="Flooring, drywall, bathrooms, landscaping..." />
          </div>

          <div class="field">
            <label for="where-you-work">Where do you work?</label>
            <input id="where-you-work" type="text" bind:value={form.whereYouWork} required placeholder="City, service area, or neighborhoods" />
          </div>

          <div class="field field-full">
            <label for="biggest-headache">What's your biggest headache right now?</label>
            <textarea id="biggest-headache" rows="6" bind:value={form.biggestHeadache} required placeholder="Bad leads, too much quoting, inconsistent work, scheduling mess, customers wasting your time — whatever the real problem is."></textarea>
            <p class="hint">This is the important one. It tells us where the real friction is.</p>
          </div>
        </div>

        {#if success}
          <p class="success">Got it. We’ll review this and follow up.</p>
        {/if}

        {#if error}
          <p class="error">{error}</p>
        {/if}

        <button type="submit" class="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Intake →'}
        </button>
      </form>
    </article>
  </section>
</main>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    background: #0F0804;
    color: #F0EDE8;
    font-family: 'IBM Plex Mono', monospace;
    min-height: 100vh;
  }
  :global(a:focus-visible), :global(button:focus-visible), :global(input:focus-visible), :global(textarea:focus-visible) {
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
  .lead, .hint {
    color: #9A8070;
    line-height: 1.8;
    font-size: 0.95rem;
  }
  .card {
    border: 1px solid #2A1A0E;
    background: #160C06;
    padding: 1.5rem;
  }
  .meta {
    color: #C45C1A;
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .field-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }
  .field-full { grid-column: 1 / -1; }
  label {
    color: #F0EDE8;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  input, textarea {
    width: 100%;
    border: 1px solid #3B2413;
    background: #1E120A;
    color: #F0EDE8;
    padding: 0.95rem 1rem;
    font: inherit;
    border-radius: 0;
  }
  textarea { resize: vertical; }
  .submit {
    margin-top: 1rem;
    background: #C45C1A;
    color: #0F0804;
    border: none;
    padding: 1rem 1.4rem;
    font: inherit;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .submit:disabled {
    opacity: 0.65;
    cursor: wait;
  }
  .success, .error {
    margin-top: 1rem;
    font-size: 0.92rem;
  }
  .success { color: #B7E4C7; }
  .error { color: #F2A6A6; }
  @media (max-width: 700px) {
    .field-grid { grid-template-columns: 1fr; }
    .page-shell { padding-inline: 1rem; }
    nav { padding-inline: 1rem; }
  }
</style>
