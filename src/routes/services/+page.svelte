<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { services } from '$lib/content/services.js';
</script>

<svelte:head>
  <title>Services | belt.works</title>
  <meta
    name="description"
    content="Custom software, workflow automation, data shaping, and web systems for real work."
  />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Services</p>
    <h1>Small working systems for real work.</h1>
    <p class="lead">
      Bring the part of the work that keeps getting stuck. We look for the first useful answer: a tool,
      an automation, cleaner information, or a web system that can do its job.
    </p>
    <div class="actions">
      <a class="button" href="/contact">Bring the broken workflow</a>
      <a class="button secondary" href="/method">See how we work</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Four lanes</p>
      <h2>Useful before impressive.</h2>
    </div>
    <p class="lead">
      The work can grow when it earns the need to grow. The first job is to make the next handoff,
      decision, record, or public page easier to handle.
    </p>
  </div>
  <div class="wrap grid">
    {#each services as service (service.slug)}
      <ProjectCard item={service} />
    {/each}
  </div>
</section>
