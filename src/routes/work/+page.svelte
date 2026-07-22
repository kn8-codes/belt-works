<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/content/projects.js';
</script>

<svelte:head>
  <title>Work | belt.works</title>
  <meta name="description" content="Current work, shipped proof, and honest status labels from belt.works." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Work</p>
    <h1>Useful work should be able to show its work.</h1>
    <p class="lead">
      This is an honest project registry. Some things are active, some are reference material, and some
      are parked. The status label is there so the page does not pretend otherwise.
    </p>
  </div>
</section>

<section class="section">
  <div class="wrap grid">
    {#each projects as project (project.slug)}
      <ProjectCard item={project} />
    {/each}
  </div>
</section>
