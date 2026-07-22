<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { featuredProjects } from '$lib/content/projects.js';
  import { services } from '$lib/content/services.js';

  const process = [
    {
      step: '01',
      title: 'Start with the work.',
      copy: 'What has to happen, what is getting in the way, who carries the burden, and what failure costs.'
    },
    {
      step: '02',
      title: 'Make the first useful version.',
      copy: 'Build the smallest working answer to the immediate problem before turning it into a larger system.'
    },
    {
      step: '03',
      title: 'Leave it easier to run.',
      copy: 'Working software, clear handoff notes, visible status, and evidence of what changed.'
    }
  ];
</script>

<svelte:head>
  <title>belt.works — Software that earns its keep.</title>
  <meta
    name="description"
    content="Belt.works is an Akron practical software shop. We build small working systems: custom software, workflow automation, data shaping, and web systems for real work."
  />
  <meta property="og:title" content="belt.works — Software that earns its keep." />
  <meta property="og:description" content="Small working systems for real work. Bring the broken workflow." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.belt.works/" />
</svelte:head>

<section class="hero home-hero" aria-label="belt.works introduction">
  <div class="wrap home-hero__grid">
    <div>
      <p class="eyebrow">belt.works · Akron, Ohio</p>
      <h1>Software that earns its keep.</h1>
      <p class="lead lede-tight">
        Belt.works is a practical software shop. We turn messy workflows into small working systems:
        custom software, workflow automation, data shaping, and web systems built around the problem
        in front of you.
      </p>
      <div class="actions">
        <a class="button" href="/admin-workflow-audit">$495 Admin Workflow Audit</a>
        <a class="button secondary" href="/contact">Bring the broken workflow</a>
        <a class="button secondary" href="/method">See how we work</a>
      </div>
    </div>

    <aside class="card large proof-panel" aria-label="belt.works operating notes">
      <p class="meta">how this works</p>
      <ul class="proof-list">
        <li>Start with the real problem.</li>
        <li>Make the first useful version.</li>
        <li>Test it in the work and leave evidence of what changed.</li>
      </ul>
    </aside>
  </div>
</section>

<section class="section" id="services" aria-label="Services">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">What we make</p>
      <h2>Small systems for work that keeps getting stuck.</h2>
    </div>
    <p class="lead">
      The job is not to add software for its own sake. It is to remove a real point of friction: the
      duplicate entry, lost handoff, messy export, or website that cannot do its job.
    </p>
  </div>

  <div class="wrap grid three">
    {#each services as service (service.slug)}
      <ProjectCard item={service} />
    {/each}
  </div>
</section>

<section class="section" aria-label="Method">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Method</p>
      <h2>Start small enough to prove something.</h2>
    </div>
    <p class="lead">
      We begin with the real workflow, not a pile of features. Define what has to work, make the first
      useful version, test it against the job, and keep the handoff legible. If it earns more work, it
      can grow from there.
    </p>
  </div>

  <div class="wrap grid three">
    {#each process as item (item.step)}
      <article class="card large">
        <div class="meta">{item.step}</div>
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
      </article>
    {/each}
  </div>
</section>

<section class="section shopfloor-bridge" aria-label="ShopFloor public-interest work">
  <div class="wrap grid two">
    <div>
      <p class="eyebrow">Public-interest work</p>
      <h2>Practical systems can serve people without extracting from them.</h2>
    </div>
    <div>
      <p class="lead">
        ShopFloor is Belt.works’ Akron-first public-interest project: local repair and mutual-aid
        infrastructure built around trust instead of extraction. Commercial software work sustains the
        shop. ShopFloor remains its own protected space—community members are not leads, inventory, or
        gig workers.
      </p>
      <div class="actions">
        <a class="button secondary" href="/blog/shopfloor">Read about ShopFloor</a>
      </div>
    </div>
  </div>
</section>

<section class="section" id="current-work" aria-label="Current work">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Proof</p>
      <h2>Work should be able to show its work.</h2>
    </div>
    <p class="lead">
      A few active systems and shipped artifacts stay visible because useful work should survive beyond
      a sales call. The point is not to collect projects. The point is to make the next real thing
      easier to build, run, or repair.
    </p>
  </div>

  <div class="wrap grid current-work-grid">
    {#each featuredProjects as project (project.slug)}
      <ProjectCard item={project} />
    {/each}
  </div>
</section>

<section class="section final-cta" aria-label="Contact call to action">
  <div class="wrap">
    <article class="card large final-cta__card">
      <p class="eyebrow">Start here</p>
      <h2>Bring the broken workflow.</h2>
      <p class="lead">
        Tell us what has to work, what is getting in the way, and what a useful first version would need
        to do. If software is not the right answer, it is better to find that out early.
      </p>
      <div class="actions">
        <a class="button" href="/contact">Start the conversation</a>
        <a class="button secondary" href="/donate">Support the work</a>
      </div>
    </article>
  </div>
</section>

<style>
  .home-hero {
    padding-top: clamp(4.5rem, 10vw, 8rem);
  }

  .home-hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 380px);
    gap: clamp(2rem, 6vw, 5rem);
    align-items: end;
  }

  .proof-panel {
    align-self: end;
    background:
      linear-gradient(180deg, rgba(215, 255, 99, 0.08), rgba(255, 255, 255, 0.015)),
      var(--panel);
  }

  .proof-list {
    display: grid;
    gap: 0.85rem;
    padding: 0;
    margin: 0;
    list-style: none;
    color: var(--muted);
    line-height: 1.5;
  }

  .proof-list li {
    border-left: 2px solid var(--accent);
    padding-left: 0.85rem;
  }

  .shopfloor-bridge {
    background: linear-gradient(180deg, rgba(215, 255, 99, 0.03), transparent);
  }

  .final-cta {
    border-bottom: 0;
  }

  .current-work-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .final-cta__card {
    background:
      radial-gradient(circle at 0% 0%, rgba(215, 255, 99, 0.12), transparent 22rem),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012));
  }

  .final-cta__card .lead {
    max-width: 720px;
  }

  @media (max-width: 820px) {
    .home-hero__grid,
    .current-work-grid {
      grid-template-columns: 1fr;
      align-items: start;
    }
  }
</style>
