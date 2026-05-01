<script>
  let email = $state('');
  let status = $state('idle');

  /** @param {SubmitEvent} event */
  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    status = 'saved';
  }
</script>

<form onsubmit={handleSubmit} aria-label="Mailing list signup">
  <label>
    Email
    <input bind:value={email} type="email" placeholder="you@example.com" autocomplete="email" required />
  </label>
  <button class="button" type="submit">Get the monthly note</button>
  {#if status === 'saved'}
    <p class="form-success">Local placeholder saved. Backend gets wired after provider decision.</p>
  {:else}
    <p class="form-note">One useful send a month. Work, notes, and what broke.</p>
  {/if}
</form>
