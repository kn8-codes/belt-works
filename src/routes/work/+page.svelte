<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/content/projects.js';
</script>

<svelte:head>
  <title>Work | belt.works</title>
  <meta name="description" content="Projects, proof, and honest status labels from belt.works." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Work</p>
    <h1>Proof, not pitch.</h1>
    <p class="lead">This is the project registry. Some things are active. Some are parked. The status label does the talking.</p>
  </div>
</section>

<section class="section">
  <div class="wrap grid">
    {#each projects as project (project.slug)}
      <ProjectCard item={project} />
    {/each}
  </div>
</section>
