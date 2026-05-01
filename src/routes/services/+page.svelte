<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { services } from '$lib/content/services.js';
</script>

<svelte:head>
  <title>Services | belt.works</title>
  <meta name="description" content="Custom software, automation, ecommerce, data, and intelligence tools by scope." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Services</p>
    <h1>Small enough to ship. Useful enough to matter.</h1>
    <p class="lead">No package menu. No agency costume. Bring a problem. We scope the first useful version.</p>
    <div class="actions">
      <a class="button" href="/foundry/intake">Start intake</a>
      <a class="button secondary" href="/method">See the method</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid">
    {#each services as service (service.slug)}
      <ProjectCard item={service} />
    {/each}
  </div>
</section>
