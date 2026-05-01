<script>
  let form = $state({ name: '', email: '', phone: '', type: 'Problem / project', message: '' });
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Could not send message.');
      }
      success = true;
      form = { name: '', email: '', phone: '', type: 'Problem / project', message: '' };
    } catch (err) {
      error = err instanceof Error ? err.message : 'Could not send message.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact | belt.works</title>
  <meta name="description" content="Contact belt.works. Bring a problem." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Contact</p>
    <h1>Bring the problem.</h1>
    <p class="lead">Tell me what has to work, what is in the way, and how to reach you.</p>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">What helps</p>
      <ul class="list">
        <li>What you need built.</li>
        <li>What happens if it does not get fixed.</li>
        <li>What tools or process already exist.</li>
        <li>Your budget or constraint if you know it.</li>
      </ul>
    </article>
    <article class="card large">
      {#if success}
        <p class="form-success">Got it. We will look it over.</p>
      {:else}
        <form onsubmit={handleSubmit}>
          <label>Name<input bind:value={form.name} required /></label>
          <label>Email<input bind:value={form.email} type="email" required /></label>
          <label>Phone<input bind:value={form.phone} /></label>
          <label>Message<textarea bind:value={form.message} rows="6" required></textarea></label>
          {#if error}<p class="form-error">{error}</p>{/if}
          <button class="button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send it'}</button>
        </form>
      {/if}
    </article>
  </div>
</section>
