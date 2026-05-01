<script>
  let form = $state({
    name: '',
    phone: '',
    whatYouDo: '',
    whereYouWork: '',
    idealJobs: '',
    avoidJobs: '',
    preferredContact: '',
    biggestHeadache: ''
  });
  let isSubmitting = $state(false);
  let success = $state(false);
  let error = $state('');
  let successMessage = $state('');

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
        body: JSON.stringify({
          ...form,
          sourcePath: window.location.pathname,
          sourceUrl: window.location.href,
          referrer: document.referrer,
          submittedAt: new Date().toISOString(),
          intakeVersion: 'foundry-problem-intake-v2'
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not submit intake.');
      success = true;
      successMessage = `Got it. We will look this over and reach back out at ${form.phone}.`;
      form = { name: '', phone: '', whatYouDo: '', whereYouWork: '', idealJobs: '', avoidJobs: '', preferredContact: '', biggestHeadache: '' };
    } catch (err) {
      error = err instanceof Error ? err.message : 'Could not submit intake.';
      successMessage = '';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>FOUNDRY Intake | belt.works</title>
  <meta name="description" content="FOUNDRY intake: turn messy problem context into a scoped build." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">FOUNDRY intake</p>
    <h1>Start with the mess.</h1>
    <p class="lead">This is not a quote generator. It is the first pass at context: problem, constraint, useful first version.</p>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">What happens next</p>
      <ul class="list">
        <li>We read the context.</li>
        <li>We cut the scope down to the first useful version.</li>
        <li>We identify the risky part before pretending it is easy.</li>
        <li>If it makes sense, it becomes a brief and build plan.</li>
      </ul>
    </article>
    <article class="card large">
      {#if success}
        <p class="form-success">{successMessage}</p>
      {:else}
        <form onsubmit={handleSubmit}>
          <label>Your name<input bind:value={form.name} required /></label>
          <label>Best phone or contact<input bind:value={form.phone} required /></label>
          <label>What are you trying to do?<textarea bind:value={form.whatYouDo} rows="3" required></textarea></label>
          <label>Where does this need to work?<textarea bind:value={form.whereYouWork} rows="3" required></textarea></label>
          <label>What would a useful first version do?<textarea bind:value={form.idealJobs} rows="3"></textarea></label>
          <label>What should we avoid building?<textarea bind:value={form.avoidJobs} rows="3"></textarea></label>
          <label>Preferred contact window<input bind:value={form.preferredContact} /></label>
          <label>Biggest headache right now<textarea bind:value={form.biggestHeadache} rows="4" required></textarea></label>
          {#if error}<p class="form-error">{error}</p>{/if}
          <button class="button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send intake'}</button>
        </form>
      {/if}
    </article>
  </div>
</section>
