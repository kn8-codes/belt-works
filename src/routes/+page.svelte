<svelte:head>
  <title>belt.works — Here's what we're building.</title>
  <meta name="description" content="We research what works. We build what lasts.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;900&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<script>
  const TAGLINE = "Here's what we're building. How can we help you?";

  let displayText = $state('');
  let typed = $state(false);

  let form = $state({ goal: '', blocker: '', contact: '' });
  let submitting = $state(false);
  let success = $state(false);
  let formError = $state('');

  $effect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < TAGLINE.length) {
        displayText = TAGLINE.slice(0, ++i);
      } else {
        clearInterval(id);
        typed = true;
      }
    }, 42);
    return () => clearInterval(id);
  });

  /** @param {SubmitEvent} e */
  async function handleSubmit(e) {
    e.preventDefault();
    submitting = true;
    formError = '';
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || 'Failed to send.');
      }
      success = true;
      form = { goal: '', blocker: '', contact: '' };
    } catch (err) {
      formError = err instanceof Error ? err.message : 'Something went wrong.';
    } finally {
      submitting = false;
    }
  }
</script>

<div class="noise" aria-hidden="true"></div>
<div class="scanlines" aria-hidden="true"></div>

<a class="skip-link" href="#contact">Skip to contact form</a>

<main>
  <!-- HERO -->
  <section class="hero">
    <div class="inner">
      <div class="logo-row">
        <span class="wordmark"><span class="accent">belt</span>.works</span>
        <span class="live-dot" aria-label="live"></span>
      </div>

      <h1 class="tagline" aria-label={TAGLINE}>
        <span class="pulse-dot" aria-hidden="true"></span>
        <span aria-hidden="true">{displayText}{#if !typed}<span class="cursor">_</span>{/if}</span>
      </h1>

      {#if typed}
        <p class="subheading reveal">We research what works. We build what lasts.</p>
      {/if}
    </div>
  </section>

  <!-- WHAT WE'RE DOING -->
  <section class="section">
    <div class="inner">
      <div class="label">// what we're doing</div>
      <p class="body-copy">
        Our goal is simple: give you more time by letting the machines handle what machines do best.
      </p>
    </div>
  </section>

  <!-- THE WORK -->
  <section class="section">
    <div class="inner">
      <div class="label">// the work</div>
      <p class="body-copy">
        Everything we build is open source. We work for the community, not the bottom line.
      </p>
      <a
        href="https://github.com/kn8-codes"
        class="gh-link"
        target="_blank"
        rel="noopener noreferrer"
      >→ github.com/kn8-codes</a>
    </div>
  </section>

  <!-- CONTACT FORM -->
  <section class="section" id="contact">
    <div class="inner">
      <div class="label">// contact</div>
      <h2>Tell us about your mess.</h2>

      {#if success}
        <div class="success-panel" role="status">
          <span class="accent">✓</span> Got it. We'll be in touch.
        </div>
      {:else}
        <form onsubmit={handleSubmit} novalidate>
          <div class="field">
            <label for="goal">What are you trying to do?</label>
            <textarea
              id="goal"
              bind:value={form.goal}
              rows="3"
              required
              placeholder="Describe your goal..."
            ></textarea>
          </div>

          <div class="field">
            <label for="blocker">What's in the way?</label>
            <textarea
              id="blocker"
              bind:value={form.blocker}
              rows="3"
              placeholder="What's blocking you?"
            ></textarea>
          </div>

          <div class="field">
            <label for="contact">How do we reach you?</label>
            <input
              id="contact"
              type="text"
              bind:value={form.contact}
              required
              placeholder="Email, phone, Signal — whatever works"
            />
          </div>

          {#if formError}
            <p class="err" role="alert">{formError}</p>
          {/if}

          <button type="submit" class="submit-btn" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send it'}
          </button>
        </form>
      {/if}
    </div>
  </section>

  <footer>
    <span>belt.works · Built in Akron · 2026</span>
  </footer>
</main>

<style>
  :root {
    --bg: #0d0d0d;
    --panel: #161616;
    --border: #252525;
    --text: #e8e8e8;
    --muted: #555;
    --accent: #6EE7B7;
  }

  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }

  :global(body) {
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Mono', monospace;
    min-height: 100vh;
  }

  :global(a:focus-visible),
  :global(button:focus-visible),
  :global(input:focus-visible),
  :global(textarea:focus-visible) {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  /* Overlays */
  .noise {
    position: fixed;
    inset: 0;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 256px 256px;
    pointer-events: none;
    z-index: 100;
  }

  .scanlines {
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.04) 3px,
      rgba(0, 0, 0, 0.04) 4px
    );
    pointer-events: none;
    z-index: 101;
  }

  .skip-link {
    position: absolute;
    left: 1rem;
    top: -4rem;
    background: var(--accent);
    color: #0d0d0d;
    padding: 0.75rem 1rem;
    text-decoration: none;
    font-weight: 600;
    z-index: 200;
    transition: top 0.15s;
  }
  .skip-link:focus { top: 1rem; }

  main { position: relative; z-index: 1; }

  /* Layout */
  .inner {
    max-width: 820px;
    width: 100%;
    margin: 0 auto;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid var(--border);
  }

  .hero .inner {
    padding: 5rem 0 4rem;
    display: grid;
    gap: 2rem;
  }

  .logo-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .wordmark {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .accent { color: var(--accent); }

  .live-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    animation: livePulse 2s ease-in-out infinite;
  }

  @keyframes livePulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(110, 231, 183, 0.5); }
    50%       { opacity: 0.5; box-shadow: 0 0 0 6px rgba(110, 231, 183, 0); }
  }

  .tagline {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: clamp(1.9rem, 5.5vw, 3.75rem);
    line-height: 1.2;
    color: var(--text);
    letter-spacing: -0.02em;
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .pulse-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    margin-top: 0.35em;
    animation: dotGlow 1.8s ease-in-out infinite;
  }

  @keyframes dotGlow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.35; transform: scale(0.75); }
  }

  .cursor {
    color: var(--accent);
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  .subheading {
    font-size: 0.9rem;
    color: var(--muted);
    letter-spacing: 0.04em;
    line-height: 1.9;
    max-width: 480px;
  }

  .reveal {
    animation: fadeUp 0.7s ease forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* SECTIONS */
  .section {
    padding: 5rem 2rem;
    border-bottom: 1px solid var(--border);
  }

  .section .inner {
    display: grid;
    gap: 1.5rem;
  }

  .label {
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .body-copy {
    font-size: 1rem;
    line-height: 1.85;
    color: var(--text);
    max-width: 600px;
  }

  .gh-link {
    display: inline-block;
    color: var(--accent);
    text-decoration: none;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }
  .gh-link:hover { border-bottom-color: var(--accent); }

  /* FORM */
  h2 {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: clamp(1.8rem, 4vw, 3rem);
    color: var(--text);
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  form {
    display: grid;
    gap: 1.5rem;
  }

  .field {
    display: grid;
    gap: 0.5rem;
  }

  label {
    font-size: 0.62rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
  }

  input,
  textarea {
    appearance: none;
    background: var(--panel);
    border: 1px solid var(--border);
    color: var(--text);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.9rem;
    padding: 0.9rem 1rem;
    width: 100%;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: vertical;
  }

  input:focus,
  textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent), 0 0 14px rgba(110, 231, 183, 0.08);
  }

  input::placeholder,
  textarea::placeholder { color: #2e2e2e; }

  .submit-btn {
    align-self: start;
    background: transparent;
    border: 1px solid var(--accent);
    color: var(--accent);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 0.9rem 2.5rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    min-height: 48px;
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--accent);
    color: #0d0d0d;
    animation: btnPulse 1.2s ease-in-out infinite;
  }

  @keyframes btnPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(110, 231, 183, 0.45); }
    50%       { box-shadow: 0 0 0 10px rgba(110, 231, 183, 0); }
  }

  .submit-btn:disabled { opacity: 0.45; cursor: wait; }

  .success-panel {
    padding: 1.5rem;
    background: var(--panel);
    border: 1px solid var(--accent);
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--text);
  }

  .err {
    font-size: 0.78rem;
    color: #ff7b72;
  }

  /* FOOTER */
  footer {
    padding: 2.5rem 2rem;
    text-align: center;
    font-size: 0.6rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* RESPONSIVE */
  @media (max-width: 480px) {
    .tagline { font-size: clamp(1.5rem, 8vw, 2rem); }
  }

  @media (prefers-reduced-motion: reduce) {
    .noise, .scanlines { display: none; }
    .live-dot, .pulse-dot, .cursor { animation: none; }
    .reveal { animation: none; }
    .submit-btn:hover:not(:disabled) { animation: none; }
  }
</style>
