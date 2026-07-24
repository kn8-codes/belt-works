<script>
  import { onMount } from 'svelte';
  import {
    allowAggregateAnalytics,
    analyticsConsent,
    analyticsIsConfigured,
    declineAggregateAnalytics
  } from '$lib/analytics/posthog';

  let configured = $state(false);
  let consent = $state('unavailable');
  let choicesOpen = $state(false);
  let starting = $state(false);

  onMount(() => {
    configured = analyticsIsConfigured();
    consent = analyticsConsent();
    choicesOpen = configured && consent === 'undecided';
  });

  async function allow() {
    starting = true;
    await allowAggregateAnalytics();
    consent = analyticsConsent();
    choicesOpen = consent !== 'granted';
    starting = false;
  }

  function decline() {
    declineAggregateAnalytics();
    consent = analyticsConsent();
    choicesOpen = false;
  }
</script>

{#if configured}
  <aside class="analytics-choices" aria-labelledby="analytics-choices-title">
    {#if choicesOpen}
      <div class="analytics-choices__copy">
        <p class="eyebrow" id="analytics-choices-title">Optional aggregate analytics</p>
        <p>With your permission, we count a few deliberate public problem-map and next-step choices to improve the service. We do not record messages, contact details, form contents, session replays, heatmaps, automatic clicks, advertising audiences, or IP address.</p>
        <p>Choosing “No thanks” does not change how the site works.</p>
      </div>
      <div class="analytics-choices__actions">
        <button class="button" type="button" onclick={allow} disabled={starting}>Allow aggregate analytics</button>
        <button class="button secondary" type="button" onclick={decline} disabled={starting}>No thanks</button>
      </div>
    {:else}
      <button class="analytics-choices__toggle" type="button" onclick={() => (choicesOpen = true)}>
        Privacy choices
      </button>
    {/if}
  </aside>
{/if}
