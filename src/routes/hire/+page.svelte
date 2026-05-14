<svelte:head>
  <title>Hire — belt.works</title>
  <meta name="description" content="Start a project. Freelance software development at $17/hour. Scope locked before work starts." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  let formData = {
    name: '',
    email: '',
    problem: '',
    timeline: '',
    budget: ''
  };

  let submitted = false;
  let submitting = false;

  async function handleSubmit(event) {
    event.preventDefault();
    submitting = true;

    // TODO: Wire up to actual backend (Supabase, email, etc.)
    // For now, just simulate success
    await new Promise(resolve => setTimeout(resolve, 800));

    submitted = true;
    submitting = false;
  }
</script>

<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    {#if !submitted}
      <div class="section-label fade-in" style="--delay: 0ms">// HIRE</div>
      
      <header class="stack fade-in" style="--delay: 100ms">
        <h1>Start a project</h1>
        <p class="lead">Describe the mess, what has to work, and what failure costs. Then we decide what is worth building first.</p>
      </header>

      <div class="card fade-in" style="--delay: 200ms">
        <form on:submit={handleSubmit} class="intake-form">
          <div class="form-group">
            <label for="name">Your name</label>
            <input 
              type="text" 
              id="name" 
              bind:value={formData.name}
              required 
              placeholder="Nate Kelly"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              bind:value={formData.email}
              required 
              placeholder="your@email.com"
            />
          </div>

          <div class="form-group">
            <label for="problem">The problem</label>
            <textarea 
              id="problem" 
              bind:value={formData.problem}
              required 
              rows="6"
              placeholder="What are you trying to solve? What's broken? What do you need built?"
            ></textarea>
            <div class="hint">Be specific. The more context you give, the better I can scope it.</div>
          </div>

          <div class="form-group">
            <label for="timeline">Timeline</label>
            <input 
              type="text" 
              id="timeline" 
              bind:value={formData.timeline}
              placeholder="e.g., 'Need it done in 2 weeks' or 'No rush'"
            />
          </div>

          <div class="form-group">
            <label for="budget">Budget (optional)</label>
            <input 
              type="text" 
              id="budget" 
              bind:value={formData.budget}
              placeholder="e.g., '$400' or 'Flexible'"
            />
            <div class="hint">Rate is $17/hour. Knowing your budget helps me scope realistically.</div>
          </div>

          <button type="submit" class="cta" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send project request'}
          </button>
        </form>
      </div>

      <div class="info-cards fade-in" style="--delay: 300ms">
        <article class="info-card">
          <div class="meta">What happens next</div>
          <p>I'll review your request and get back to you within 24 hours with a scope estimate, timeline, and total cost. If it makes sense, we lock scope and get to work.</p>
        </article>

        <article class="info-card">
          <div class="meta">How billing works</div>
          <p>$17/hour, billed weekly. You see progress every week, pay for what's been done. No upfront retainer, no surprise charges. Scope is locked before work starts.</p>
        </article>

        <article class="info-card">
          <div class="meta">What if scope changes</div>
          <p>If you want to add something mid-project, we re-scope it and agree on the new estimate. No hidden costs. Everything stays transparent.</p>
        </article>
      </div>
    {:else}
      <div class="success-state fade-in">
        <div class="success-icon">✓</div>
        <h1>Request sent</h1>
        <p class="lead">I'll review your project and get back to you within 24 hours with a scope estimate.</p>
        <div class="success-actions">
          <a href="/" class="cta">Back to home</a>
          <a href="/services" class="text-link">See services</a>
        </div>
      </div>
    {/if}
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
    outline: 2px solid #d7ff63;
    outline-offset: 3px;
  }
  .skip-link {
    position: absolute;
    left: 1rem;
    top: -3rem;
    background: #d7ff63;
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
  .back:hover { color: #d7ff63; }
  .page-shell {
    max-width: 750px;
    margin: 0 auto;
    padding: 3rem 2rem 5rem;
    display: grid;
    gap: 2rem;
  }
  .section-label {
    color: #d7ff63;
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
  .card {
    border: 1px solid #2A1A0E;
    background: #160C06;
    padding: 2rem;
    position: relative;
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #d7ff63;
  }
  .intake-form {
    display: grid;
    gap: 1.5rem;
  }
  .form-group {
    display: grid;
    gap: 0.5rem;
  }
  label {
    color: #d7ff63;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
  }
  input, textarea {
    background: #0F0804;
    border: 1px solid #2A1A0E;
    color: #F0EDE8;
    padding: 0.85rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.95rem;
    transition: border-color 0.15s;
  }
  input:focus, textarea:focus {
    outline: none;
    border-color: #d7ff63;
  }
  textarea {
    resize: vertical;
  }
  .hint {
    color: #9A8070;
    font-size: 0.85rem;
    line-height: 1.5;
  }
  .cta {
    background: #d7ff63;
    color: #0F0804;
    padding: 1rem 2rem;
    border: none;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
    cursor: pointer;
    transition: background 0.15s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
  }
  .cta:hover:not(:disabled) { background: #b8e040; }
  .cta:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .info-cards {
    display: grid;
    gap: 1rem;
  }
  .info-card {
    border: 1px solid #2A1A0E;
    background: #160C06;
    padding: 1.5rem;
    position: relative;
  }
  .info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #d7ff63;
  }
  .meta {
    color: #d7ff63;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
    margin-bottom: 0.65rem;
  }
  .info-card p {
    color: #9A8070;
    line-height: 1.75;
    font-size: 0.9rem;
  }
  .success-state {
    text-align: center;
    padding: 3rem 0;
  }
  .success-icon {
    font-size: 4rem;
    color: #d7ff63;
    margin-bottom: 1rem;
  }
  .success-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  .text-link {
    color: #d7ff63;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
    padding: 0.75rem 0;
    font-weight: 700;
  }
  .text-link:hover { color: #b8e040; }
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
  footer a:hover { color: #d7ff63; }
  .sep { margin: 0 0.75rem; color: #3A2010; }
  .footer-line { color: #9A8070; }
  @media (min-width: 640px) {
    .info-cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  @media (max-width: 480px) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>
