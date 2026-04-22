<svelte:head>
  <title>Mike — belt.works</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  let formData = {
    client_name: '',
    client_phone: '',
    client_zip: '',
    job_type: '',
    description: ''
  };
  let status = 'idle'; // idle | loading | success | error
  let errorMsg = '';

  const services = [
    'LVP Flooring',
    'Hardwood',
    'Tile',
    'Carpet',
    'Drywall',
    'Bathrooms',
    'Interior Work'
  ];

  $: canSubmit = formData.client_name.trim() && formData.client_phone.trim() && formData.job_type && status !== 'loading';

  async function handleSubmit() {
    if (!canSubmit) return;
    status = 'loading';
    errorMsg = '';
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        status = 'success';
      } else {
        const data = await res.json().catch(() => ({}));
        errorMsg = data.error || 'Something went wrong. Try again.';
        status = 'error';
      }
    } catch (e) {
      errorMsg = 'Network error. Check your connection and try again.';
      status = 'error';
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Enter' && canSubmit) handleSubmit();
  }
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header role="banner">
  <nav aria-label="Site navigation">
    <a href="/" class="back" aria-label="Back to belt.works home">← belt.works</a>
  </nav>
</header>

<main id="main-content">
  <section class="profile" aria-label="Provider profile">
    <div class="profile-inner">

      <div class="provider-header fade-in" style="--delay: 0ms">
        <div class="avatar" aria-hidden="true">M</div>
        <div>
          <h1>Mike</h1>
          <div class="area" aria-label="Service area">Akron, OH metro + 30mi</div>
          <div class="avail" role="status" aria-label="Availability status">Booking 2–3 weeks out</div>
        </div>
      </div>

      <div class="services-section fade-in" style="--delay: 100ms">
        <div class="label" id="services-label">// SERVICES</div>
        <ul class="services" aria-labelledby="services-label">
          {#each services as s}
            <li>{s}</li>
          {/each}
        </ul>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      {#if status === 'success'}
        <div class="success" role="alert" aria-live="polite" aria-label="Request submitted successfully">
          <div class="success-mark" aria-hidden="true">✓</div>
          <div class="success-text">Request sent.</div>
          <div class="success-sub">Mike will call you soon.</div>
        </div>
      {:else}
        <form
          class="form-section fade-in"
          style="--delay: 200ms"
          on:submit|preventDefault={handleSubmit}
          aria-label="Job request form"
          novalidate
        >
          <div class="label" id="form-label">// REQUEST A JOB</div>

          <div class="field">
            <label for="name">
              Your Name
              <span class="req" aria-label="required">*</span>
            </label>
            <input
              id="name"
              type="text"
              bind:value={formData.client_name}
              placeholder="First and last name"
              disabled={status === 'loading'}
              autocomplete="name"
              aria-required="true"
              aria-describedby={errorMsg ? 'form-error' : undefined}
            />
          </div>

          <div class="field">
            <label for="phone">
              Your Phone
              <span class="req" aria-label="required">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              bind:value={formData.client_phone}
              placeholder="10-digit number"
              disabled={status === 'loading'}
              autocomplete="tel"
              aria-required="true"
              inputmode="numeric"
            />
          </div>

          <div class="field">
            <label for="zip">Zip Code <span class="optional">(optional)</span></label>
            <input
              id="zip"
              type="text"
              bind:value={formData.client_zip}
              placeholder="e.g. 44302"
              disabled={status === 'loading'}
              autocomplete="postal-code"
              inputmode="numeric"
              maxlength="5"
            />
          </div>

          <div class="field">
            <label for="jobtype">
              Job Type
              <span class="req" aria-label="required">*</span>
            </label>
            <select
              id="jobtype"
              bind:value={formData.job_type}
              disabled={status === 'loading'}
              aria-required="true"
            >
              <option value="" disabled>Select a service</option>
              {#each services as s}
                <option value={s}>{s}</option>
              {/each}
            </select>
          </div>

          <div class="field">
            <label for="desc">
              Tell Mike what you need
              <span class="optional">(optional)</span>
            </label>
            <textarea
              id="desc"
              bind:value={formData.description}
              placeholder="Brief description — square footage, condition, timeline, anything helpful"
              rows="4"
              maxlength="500"
              disabled={status === 'loading'}
              aria-describedby="char-count"
            ></textarea>
            <div id="char-count" class="char-count" aria-live="polite">
              {formData.description.length}/500
            </div>
          </div>

          {#if status === 'error'}
            <div id="form-error" class="error-msg" role="alert" aria-live="assertive">
              {errorMsg}
            </div>
          {/if}

          <button
            type="submit"
            disabled={!canSubmit}
            class:loading={status === 'loading'}
            aria-busy={status === 'loading'}
            aria-label={status === 'loading' ? 'Sending your request...' : 'Send job request to Mike'}
          >
            {#if status === 'loading'}
              <span class="spinner" aria-hidden="true"></span>
              Sending...
            {:else}
              Send Request
            {/if}
          </button>

          <p class="disclaimer">
            By submitting, you agree that Mike may contact you by phone regarding your request.
          </p>
        </form>
      {/if}

    </div>
  </section>
</main>

<footer role="contentinfo">
  <a href="/">belt.works</a>
  <span aria-hidden="true">·</span>
  Built in Akron
  <span aria-hidden="true">·</span>
  2026
</footer>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    background: #0F0804;
    color: #F0EDE8;
    font-family: 'IBM Plex Mono', monospace;
    min-height: 100vh;
  }
  :global(:focus-visible) {
    outline: 2px solid #C45C1A;
    outline-offset: 3px;
  }

  /* SKIP LINK */
  .skip-link {
    position: absolute;
    top: -100%;
    left: 1rem;
    background: #C45C1A;
    color: #0F0804;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-decoration: none;
    z-index: 100;
    transition: top 0.1s;
  }
  .skip-link:focus { top: 1rem; }

  /* FADE IN */
  .fade-in {
    opacity: 0;
    transform: translateY(12px);
    animation: fadeUp 0.4s ease forwards;
    animation-delay: var(--delay, 0ms);
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #2A1A0E;
  }
  .back {
    font-size: 0.65rem;
    letter-spacing: 3px;
    color: #9A8070;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.15s, letter-spacing 0.2s;
  }
  .back:hover { color: #C45C1A; letter-spacing: 4px; }

  .profile {
    max-width: 580px;
    margin: 0 auto;
    padding: 3rem 2rem 5rem;
  }
  .profile-inner { display: flex; flex-direction: column; gap: 2.5rem; }

  .provider-header {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .avatar {
    width: 64px; height: 64px;
    background: #C45C1A;
    color: #0F0804;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3.5rem;
    letter-spacing: 3px;
    line-height: 1;
    color: #F0EDE8;
  }
  .area {
    font-size: 0.65rem;
    letter-spacing: 2px;
    color: #9A8070;
    margin-top: 6px;
    text-transform: uppercase;
  }
  .avail {
    font-size: 0.6rem;
    letter-spacing: 2px;
    color: #C45C1A;
    border: 1px solid #C45C1A;
    display: inline-block;
    padding: 0.2rem 0.6rem;
    margin-top: 8px;
    text-transform: uppercase;
  }

  .label {
    font-size: 0.6rem;
    letter-spacing: 4px;
    color: #C45C1A;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
  }
  .services li {
    font-size: 0.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9A8070;
    border: 1px solid #2A1A0E;
    padding: 0.3rem 0.6rem;
    transition: border-color 0.15s, color 0.15s, transform 0.15s;
  }
  .services li:hover {
    border-color: #C45C1A;
    color: #C45C1A;
    transform: translateY(-1px);
  }

  .divider {
    height: 1px;
    background: #2A1A0E;
  }

  /* FORM */
  .form-section { display: flex; flex-direction: column; gap: 1.5rem; }

  .field { display: flex; flex-direction: column; gap: 0.5rem; }

  label {
    font-size: 0.6rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #9A8070;
  }
  .req { color: #C45C1A; margin-left: 2px; }
  .optional { color: #3A2010; }

  input, select, textarea {
    background: #160C06;
    border: 1px solid #2A1A0E;
    color: #F0EDE8;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1rem;
    padding: 0.85rem 1rem;
    width: 100%;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
    border-radius: 0;
  }
  input:focus, select:focus, textarea:focus {
    border-color: #C45C1A;
    box-shadow: 0 0 0 3px rgba(196, 92, 26, 0.12);
  }
  input::placeholder, textarea::placeholder { color: #3A2010; }
  input:disabled, select:disabled, textarea:disabled { opacity: 0.5; cursor: not-allowed; }
  select option { background: #160C06; }
  textarea { resize: vertical; min-height: 100px; }

  .char-count {
    font-size: 0.6rem;
    letter-spacing: 1px;
    color: #3A2010;
    text-align: right;
  }

  /* BUTTON */
  button {
    background: #C45C1A;
    color: #0F0804;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    position: relative;
    overflow: hidden;
  }
  button::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0);
    transition: background 0.15s;
  }
  button:hover:not(:disabled) {
    background: #E8731A;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(196, 92, 26, 0.35);
  }
  button:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
  }
  button:disabled {
    background: #2A1A0E;
    color: #3A2010;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* SPINNER */
  .spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(15, 8, 4, 0.3);
    border-top-color: #0F0804;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    flex-shrink: 0;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .error-msg {
    font-size: 0.72rem;
    letter-spacing: 1px;
    color: #E84A1A;
    border: 1px solid #E84A1A;
    padding: 0.75rem 1rem;
    animation: fadeUp 0.2s ease forwards;
  }

  .disclaimer {
    font-size: 0.6rem;
    letter-spacing: 1px;
    color: #3A2010;
    line-height: 1.6;
  }

  /* SUCCESS */
  .success {
    text-align: center;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    animation: fadeUp 0.4s ease forwards;
  }
  .success-mark {
    width: 56px; height: 56px;
    border: 2px solid #C45C1A;
    color: #C45C1A;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  @keyframes popIn {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .success-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    letter-spacing: 3px;
    color: #F0EDE8;
  }
  .success-sub {
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: #9A8070;
    text-transform: uppercase;
  }

  footer {
    border-top: 1px solid #2A1A0E;
    padding: 2rem;
    text-align: center;
    font-size: 0.6rem;
    letter-spacing: 3px;
    color: #3A2010;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
  footer a {
    color: #3A2010;
    text-decoration: none;
    transition: color 0.15s;
  }
  footer a:hover { color: #C45C1A; }

  /* REDUCED MOTION */
  @media (prefers-reduced-motion: reduce) {
    .fade-in, .success, .success-mark { animation: none; opacity: 1; transform: none; }
    .spinner { animation: none; }
    button, input, select, textarea, .services li, .back { transition: none; }
  }

  @media (max-width: 480px) {
    h1 { font-size: 2.8rem; }
    .profile { padding: 2rem 1.25rem 4rem; }
  }
</style>
