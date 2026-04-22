<svelte:head>
  <title>Contact | belt.works</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  const roles = ['Tradesperson looking to get listed', 'Client with a question', 'Other'];
</script>

<main>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <nav aria-label="Page navigation">
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="page-shell" id="main-content">
    <div class="section-label fade-in" style="--delay: 0ms">// CONTACT</div>

    <header class="stack fade-in" style="--delay: 100ms">
      <h1>Let's talk.</h1>
      <p class="lead">We're a small operation. You'll get a real response from a real person.</p>
    </header>

    <div class="card-list">
      <article class="card fade-in" style="--delay: 200ms">
        <div class="meta">Tradespeople</div>
        <div class="contact-links">
          <p>If you're a tradesperson who wants to get listed on belt.works:</p>
          <a href="mailto:hello@belt.works">hello@belt.works</a>
          <p>Or fill out the form below and we'll reach out within 24 hours.</p>
        </div>
      </article>

      <article class="card fade-in" style="--delay: 300ms">
        <div class="meta">Clients</div>
        <div class="contact-links">
          <p>If you're a client with a question about a job request you submitted:</p>
          <a href="mailto:hello@belt.works">hello@belt.works</a>
        </div>
      </article>

      <article class="card fade-in" style="--delay: 400ms">
        <div class="meta">FOUNDRY</div>
        <div class="contact-links">
          <p>If you're interested in FOUNDRY, AI infrastructure for small businesses:</p>
          <a href="mailto:nate@belt.works">nate@belt.works</a>
        </div>
      </article>

      <article class="card fade-in" style="--delay: 500ms">
        <div class="meta">Contact form</div>
        <form aria-label="Contact belt.works">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" type="text" required placeholder="Your name" />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input id="email" type="email" required placeholder="you@example.com" />
          </div>

          <div class="field">
            <label for="phone">Phone</label>
            <input id="phone" type="tel" placeholder="Optional" />
          </div>

          <div class="field">
            <label for="iam">I am a</label>
            <select id="iam">
              {#each roles as role}
                <option value={role}>{role}</option>
              {/each}
            </select>
          </div>

          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" rows="5" required placeholder="Tell us what you need"></textarea>
          </div>

          <button type="submit" class="submit">Send Message →</button>
        </form>
      </article>
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
  p {
    color: #9A8070;
    line-height: 1.8;
    font-size: 0.95rem;
  }
  .lead {
    max-width: 56rem;
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
  .stack, .card-list {
    display: grid;
    gap: 1.25rem;
  }
  .meta {
    color: #C45C1A;
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }
  .contact-links {
    display: grid;
    gap: 0.75rem;
  }
  .contact-links a {
    color: #C45C1A;
    text-decoration: none;
    word-break: break-word;
  }
  .contact-links a:hover { color: #E8731A; }
  form {
    display: grid;
    gap: 1.25rem;
  }
  .field {
    display: grid;
    gap: 0.5rem;
  }
  label {
    font-size: 0.65rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #9A8070;
  }
  input, select, textarea {
    appearance: none;
    -webkit-appearance: none;
    background: #160C06;
    border: 1px solid #2A1A0E;
    color: #F0EDE8;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.95rem;
    padding: 0.9rem 1rem;
    width: 100%;
  }
  input::placeholder, textarea::placeholder { color: #3A2010; }
  textarea { resize: vertical; }
  .submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 1rem 2rem;
    background: #C45C1A;
    color: #0F0804;
    border: none;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .submit:hover { background: #E8731A; }
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
    border: 0;
    padding: 0;
  }
  footer a {
    color: #9A8070;
    text-decoration: none;
  }
  footer a:hover { color: #C45C1A; }
  .sep { margin: 0 0.75rem; color: #3A2010; }
  .footer-line { color: #3A2010; }
  @media (max-width: 480px) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fade-in { animation: none; opacity: 1; transform: none; }
  }
</style>
