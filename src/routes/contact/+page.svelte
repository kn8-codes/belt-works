<script>
  // Single public intake form for belt.works.
  // This replaces the old named intake process and keeps the CTA plain: bring a problem.
  let form = $state({ name: '', email: '', phone: '', type: 'Problem / project', message: '', website: '' });
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
      form = { name: '', email: '', phone: '', type: 'Problem / project', message: '', website: '' };
    } catch (err) {
      error = err instanceof Error ? err.message : 'Could not send message.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact | belt.works</title>
  <meta name="description" content="Bring belt.works a problem. Software lab intake for work that needs to hold up." />
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
        <p class="form-success">Got it. Someone will read this.</p>
      {:else}
        <form onsubmit={handleSubmit}>
          <label>Name<input bind:value={form.name} maxlength="200" required /></label>
          <label>Email<input bind:value={form.email} type="email" autocomplete="email" maxlength="200" required /></label>
          <label>Phone<input bind:value={form.phone} autocomplete="tel" maxlength="200" /></label>
          <label>Message<textarea bind:value={form.message} rows="6" maxlength="5000" required></textarea></label>

          <!-- Honeypot: hidden from humans, tempting to bots. Server rejects if filled. -->
          <label class="hp-field" aria-hidden="true">Website<input bind:value={form.website} tabindex="-1" autocomplete="off" /></label>

          {#if error}<p class="form-error">{error}</p>{/if}
          <button class="button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send it'}</button>
        </form>
      {/if}
    </article>
  </div>
</section>
