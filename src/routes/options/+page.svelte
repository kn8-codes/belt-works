<script>
  import { homepageOptions } from '$lib/content/homepage-options.js';
</script>

<svelte:head>
  <title>Homepage Options | belt.works</title>
  <meta name="description" content="Four possible directions for the belt.works homepage." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Options</p>
    <h1>Four shapes. One can win.</h1>
    <p class="lead">Option A is built as the current homepage. The other three are preserved so Nate can wake up and choose without us stopping the work.</p>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    {#each homepageOptions as option (option.slug)}
      <article class="card large">
        <p class="eyebrow">{option.name}</p>
        <h2>{option.hero}</h2>
        <p class="lead">{option.secondary}</p>
        <p><span class="status">{option.status}</span></p>
        <p>{option.thesis}</p>
        <ul class="list">
          <li><strong>Best for:</strong> {option.bestFor}</li>
          <li><strong>Risk:</strong> {option.risk}</li>
        </ul>
      </article>
    {/each}
  </div>
</section>
