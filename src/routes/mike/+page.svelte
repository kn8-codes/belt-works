<script>
  const services = [
    'LVP flooring',
    'Hardwood',
    'Tile',
    'Carpet',
    'Drywall',
    'Bathrooms',
    'Interior work'
  ];

  let form = $state({
    name: '',
    phone: '',
    zip: '',
    jobType: services[0],
    description: ''
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
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          client_name: form.name,
          client_phone: form.phone,
          client_zip: form.zip,
          job_type: form.jobType,
          description: form.description
        })
      });

      if (!response.ok) {
        throw new Error('Could not send request.');
      }

      success = true;
      form = {
        name: '',
        phone: '',
        zip: '',
        jobType: services[0],
        description: ''
      };
    } catch (err) {
      error = err instanceof Error ? err.message : 'Could not send request.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Mike | belt.works</title>
  <meta
    name="description"
    content="Request flooring, drywall, bathroom, and interior work from Mike in the Akron metro area."
  />
</svelte:head>

<div class="page">
  <section class="hero">
    <p class="eyebrow">belt.works</p>
    <h1>Mike</h1>
    <p class="subhead">Reliable interior work for Akron-area homes.</p>
  </section>

  <section class="info-grid">
    <div class="card">
      <h2>Services</h2>
      <ul>
        {#each services as service}
          <li>{service}</li>
        {/each}
      </ul>
    </div>

    <div class="card">
      <h2>Service area</h2>
      <p>Akron, OH metro + 30mi</p>

      <h2>Availability</h2>
      <p>Booking 2–3 weeks out</p>
    </div>
  </section>

  <section class="card form-card">
    <h2>Request a quote</h2>
    <form onsubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" bind:value={form.name} required />
      </label>

      <label>
        <span>Phone</span>
        <input type="tel" bind:value={form.phone} required />
      </label>

      <label>
        <span>Zip</span>
        <input type="text" bind:value={form.zip} />
      </label>

      <label>
        <span>Job type</span>
        <select bind:value={form.jobType}>
          {#each services as service}
            <option value={service}>{service}</option>
          {/each}
        </select>
      </label>

      <label>
        <span>Description</span>
        <textarea bind:value={form.description} maxlength="500" rows="5"></textarea>
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Request'}
      </button>

      {#if success}
        <p class="success">Request sent. Mike will call you soon.</p>
      {/if}

      {#if error}
        <p class="error">{error}</p>
      {/if}
    </form>
  </section>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #f6f3ee;
    color: #1d1d1d;
  }

  .page {
    max-width: 860px;
    margin: 0 auto;
    padding: 24px 16px 48px;
  }

  .hero {
    margin-bottom: 24px;
  }

  .eyebrow {
    margin: 0 0 8px;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #805b2d;
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
    line-height: 1.05;
  }

  .subhead {
    margin-top: 12px;
    font-size: 1.05rem;
    color: #444;
  }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
  }

  .card {
    background: #fff;
    border: 1px solid #ddd5ca;
    border-radius: 14px;
    padding: 20px;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 1.2rem;
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li + li {
    margin-top: 6px;
  }

  form {
    display: grid;
    gap: 14px;
  }

  label {
    display: grid;
    gap: 6px;
  }

  span {
    font-weight: 600;
  }

  input,
  select,
  textarea,
  button {
    font: inherit;
  }

  input,
  select,
  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #cfc5b8;
    border-radius: 10px;
    background: #fff;
  }

  textarea {
    resize: vertical;
  }

  button {
    width: fit-content;
    padding: 12px 18px;
    border: 0;
    border-radius: 10px;
    background: #1d1d1d;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }

  button:disabled {
    opacity: 0.7;
    cursor: wait;
  }

  .success {
    margin: 0;
    color: #156f3b;
    font-weight: 600;
  }

  .error {
    margin: 0;
    color: #b42318;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .info-grid {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 2rem;
    }

    button {
      width: 100%;
    }
  }
</style>
