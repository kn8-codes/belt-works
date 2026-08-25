<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Course payment status | Belt.works</title>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>

<section class="section order-section" aria-labelledby="order-title">
  <div class="wrap narrow">
    <p class="eyebrow">Claude Code: Beyond the Chat Window</p>
    {#if data.state === 'verified' && data.testMode}
      <h1 id="order-title">Test payment verified.</h1>
      <p class="lead">Stripe reported a paid test session and the server recorded its receipt.</p>
      <div class="notice">
        <strong>No learner access was granted.</strong>
        <p>The production access adapter is intentionally not installed yet. This page does not represent a live sale.</p>
      </div>
    {:else if data.state === 'pending'}
      <h1 id="order-title">Payment is still pending.</h1>
      <p class="lead">No access is granted until Stripe reports a completed payment through the verified server path.</p>
    {:else}
      <h1 id="order-title">Payment could not be verified.</h1>
      <p class="lead">A return URL alone is not proof of payment. No access has been granted from this page.</p>
    {/if}
    <a class="button secondary" href="/courses/claude-code-beyond-chat-window">Return to the course evidence</a>
  </div>
</section>

<style>
  .order-section { min-height: 70vh; padding-top: clamp(5rem, 12vw, 9rem); }
  .narrow { max-width: 820px; }
  .notice { margin: 2rem 0; padding: 1.25rem; border: 1px solid var(--accent); background: var(--panel); }
  .notice p { color: var(--muted); margin: 0.5rem 0 0; }
  :global(main a:focus-visible) { outline: 2px solid var(--accent); outline-offset: 3px; }
</style>
