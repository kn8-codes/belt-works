<script>
  import MailingListForm from '$lib/components/MailingListForm.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { featuredProjects } from '$lib/content/projects.js';
  import { services } from '$lib/content/services.js';
</script>

<svelte:head>
  <title>belt.works — We build software that works.</title>
  <meta name="description" content="Research first. Software as evidence. We build software that works. You bring the problem." />
</svelte:head>

<section class="hero">
  <div class="wrap">
    <p class="eyebrow">Research first. Software as evidence.</p>
    <h1>We build software that works.</h1>
    <p class="lead lede-tight">You bring the problem. We turn the mess into a scope, build the smallest useful thing, and keep the work honest.</p>
    <div class="actions">
      <a class="button" href="/foundry/intake">Bring a problem</a>
      <a class="button secondary" href="/work">See the work</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">What this is</p>
      <h2>A software research lab.</h2>
    </div>
    <p class="lead">Some work becomes tools. Some becomes services. Some becomes client work. The rule is simple: the software has to hold up.</p>
  </div>
  <div class="wrap grid three">
    <article class="card large">
      <div class="meta">money</div>
      <h3>Client work gets scoped hard.</h3>
      <p>FOUNDRY is the intake path. Voice, context, spec, tickets, build. No bloated proposal theater.</p>
    </article>
    <article class="card large">
      <div class="meta">proof</div>
      <h3>Projects show the method.</h3>
      <p>ROOMS, data tools, civic software, and old experiments stay useful when they produce evidence.</p>
    </article>
    <article class="card large">
      <div class="meta">infrastructure</div>
      <h3>The mesh does the boring work.</h3>
      <p>Jeep, M1, and M4 coordinate agent sessions, logs, diffs, checks, and handoffs.</p>
    </article>
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Proof</p>
      <h2>Current work.</h2>
    </div>
    <p class="lead">Status labels stay visible. Finished means finished. Everything else gets named honestly.</p>
  </div>
  <div class="wrap grid">
    {#each featuredProjects as project (project.slug)}
      <ProjectCard item={project} />
    {/each}
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Services</p>
      <h2>Bring the problem here.</h2>
    </div>
    <p class="lead">The front door is plain: describe the mess, what has to work, and what failure costs. Then we decide what is worth building first.</p>
  </div>
  <div class="wrap grid">
    {#each services.slice(0, 3) as service (service.slug)}
      <ProjectCard item={service} />
    {/each}
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Mailing list</p>
      <h2>One useful note a month.</h2>
      <p>Work shipped. Notes from the lab. Things that broke. No content machine.</p>
    </article>
    <article class="card large">
      <MailingListForm />
    </article>
  </div>
</section>
