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

  async function handleSubmit() {
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
        const data = await res.json();
        errorMsg = data.error || 'Something went wrong.';
        status = 'error';
      }
    } catch (e) {
      errorMsg = 'Network error. Try again.';
      status = 'error';
    }
  }
</script>

<main>
  <nav>
    <a href="/" class="back">← belt.works</a>
  </nav>

  <section class="profile">
    <div class="profile-inner">

      <div class="provider-header">
        <div class="avatar">M</div>
        <div>
          <h1>Mike</h1>
          <div class="area">Akron, OH metro + 30mi</div>
          <div class="avail">Booking 2–3 weeks out</div>
        </div>
      </div>

      <div class="services-section">
        <div class="label">// SERVICES</div>
        <div class="services">
          {#each services as s}
            <span>{s}</span>
          {/each}
        </div>
      </div>

      <div class="divider"></div>

      <!-- FORM -->
      {#if status === 'success'}
        <div class="success">
          <div class="success-mark">✓</div>
          <div class="success-text">Request sent.</div>
          <div class="success-sub">Mike will call you soon.</div>
        </div>
      {:else}
        <div class="form-section">
          <div class="label">// REQUEST A JOB</div>

          <div class="field">
            <label for="name">Your Name <span class="req">*</span></label>
            <input
              id="name"
              type="text"
              bind:value={formData.client_name}
              placeholder="First and last name"
              disabled={status === 'loading'}
            />
          </div>

          <div class="field">
            <label for="phone">Your Phone <span class="req">*</span></label>
            <input
              id="phone"
              type="tel"
              bind:value={formData.client_phone}
              placeholder="10-digit number"
              disabled={status === 'loading'}
            />
          </div>

          <div class="field">
            <label for="zip">Zip Code</label>
            <input
              id="zip"
              type="text"
              bind:value={formData.client_zip}
              placeholder="e.g. 44302"
              disabled={status === 'loading'}
            />
          </div>

          <div class="field">
            <label for="jobtype">Job Type <span class="req">*</span></label>
            <select
              id="jobtype"
              bind:value={formData.job_type}
              disabled={status === 'loading'}
            >
              <option value="" disabled selected>Select a service</option>
              {#each services as s}
                <option value={s}>{s}</option>
              {/each}
            </select>
          </div>

          <div class="field">
            <label for="desc">Tell Mike what you need <span class="optional">(optional)</span></label>
            <textarea
              id="desc"
              bind:value={formData.description}
              placeholder="Brief description — square footage, condition, timeline, anything helpful"
              rows="4"
              maxlength="500"
              disabled={status === 'loading'}
            ></textarea>
          </div>

          {#if status === 'error'}
            <div class="error-msg">{errorMsg}</div>
          {/if}

          <button
            on:click={handleSubmit}
            disabled={status === 'loading' || !formData.client_name || !formData.client_phone || !formData.job_type}
            class:loading={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Request'}
          </button>
        </div>
      {/if}

    </div>
  </section>

  <footer>
    <a href="/">belt.works</a> · Built in Akron · 2026
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
    transition: color 0.15s;
  }
  .back:hover { color: #C45C1A; }

  .profile {
    max-width: 600px;
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
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: #9A8070;
    margin-top: 6px;
    text-transform: uppercase;
  }
  .avail {
    font-size: 0.65rem;
    letter-spacing: 2px;
    color: #C45C1A;
    border: 1px solid #C45C1A;
    display: inline-block;
    padding: 0.2rem 0.6rem;
    margin-top: 8px;
    text-transform: uppercase;
  }

  .label {
    font-size: 0.65rem;
    letter-spacing: 4px;
    color: #C45C1A;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .services span {
    font-size: 0.65rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9A8070;
    border: 1px solid #2A1A0E;
    padding: 0.3rem 0.6rem;
  }

  .divider {
    height: 1px;
    background: #2A1A0E;
  }

  .form-section { display: flex; flex-direction: column; gap: 1.5rem; }

  .field { display: flex; flex-direction: column; gap: 0.5rem; }
  label {
    font-size: 0.65rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #9A8070;
  }
  .req { color: #C45C1A; }
  .optional { color: #3A2010; }

  input, select, textarea {
    background: #160C06;
    border: 1px solid #2A1A0E;
    color: #F0EDE8;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.9rem;
    padding: 0.85rem 1rem;
    width: 100%;
    outline: none;
    transition: border-color 0.15s;
    -webkit-appearance: none;
  }
  input:focus, select:focus, textarea:focus {
    border-color: #C45C1A;
  }
  input::placeholder, textarea::placeholder {
    color: #3A2010;
  }
  select option { background: #160C06; }
  textarea { resize: vertical; }

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
    transition: background 0.15s;
  }
  button:hover:not(:disabled) { background: #E8731A; }
  button:disabled {
    background: #2A1A0E;
    color: #3A2010;
    cursor: not-allowed;
  }
  button.loading { opacity: 0.7; }

  .error-msg {
    font-size: 0.75rem;
    letter-spacing: 2px;
    color: #E84A1A;
    border: 1px solid #E84A1A;
    padding: 0.75rem 1rem;
  }

  .success {
    text-align: center;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .success-mark {
    width: 56px; height: 56px;
    border: 2px solid #C45C1A;
    color: #C45C1A;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .success-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.5rem;
    letter-spacing: 3px;
    color: #F0EDE8;
  }
  .success-sub {
    font-size: 0.75rem;
    letter-spacing: 3px;
    color: #9A8070;
    text-transform: uppercase;
  }

  footer {
    border-top: 1px solid #2A1A0E;
    padding: 2rem;
    text-align: center;
    font-size: 0.65rem;
    letter-spacing: 3px;
    color: #3A2010;
    text-transform: uppercase;
  }
  footer a {
    color: #3A2010;
    text-decoration: none;
  }
  footer a:hover { color: #C45C1A; }
</style>
