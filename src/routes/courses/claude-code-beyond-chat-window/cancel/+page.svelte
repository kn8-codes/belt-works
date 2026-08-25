<svelte:head>
  <title>Course checkout canceled | Belt.works</title>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>

<section class="section cancel-section" aria-labelledby="cancel-title">
  <div class="wrap narrow">
    <p class="eyebrow">Claude Code: Beyond the Chat Window</p>
    <h1 id="cancel-title">Checkout closed.</h1>
    <p class="lead">This page does not claim a completed purchase and grants no course access.</p>
    <p>When enrollment eventually opens, payment status will come from Stripe’s verified server events—not from this return page.</p>
    <a class="button secondary" href="/courses/claude-code-beyond-chat-window">Return to the course evidence</a>
  </div>
</section>

<style>
  .cancel-section { min-height: 70vh; padding-top: clamp(5rem, 12vw, 9rem); }
  .narrow { max-width: 820px; }
  .narrow > p:not(.eyebrow) { color: var(--muted); line-height: 1.65; }
  :global(main a:focus-visible) { outline: 2px solid var(--accent); outline-offset: 3px; }
</style>
