<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { featuredProjects } from '$lib/content/projects.js';
  import { services } from '$lib/content/services.js';

  const primaryServices = services.filter((service) =>
    ['custom-software', 'automation', 'ecommerce'].includes(service.slug)
  );

  const process = [
    {
      step: '01',
      title: 'Intake stays plain.',
      copy: 'What has to work, what is currently broken, who uses it, and what failure costs.'
    },
    {
      step: '02',
      title: 'Scope gets cut down.',
      copy: 'The first useful version ships before the project turns into proposal theater.'
    },
    {
      step: '03',
      title: 'Builds leave evidence.',
      copy: 'Working software, clean handoff notes, visible status, and fewer mystery boxes.'
    }
  ];
</script>

<svelte:head>
  <title>belt.works — Software, automation, and web systems from Akron.</title>
  <meta
    name="description"
    content="belt.works scopes and builds practical software, automation, and web systems for real business problems. Built in Akron, Ohio."
  />
  <meta property="og:title" content="belt.works — Software that works." />
  <meta
    property="og:description"
    content="Bring the problem. We scope it, build the first useful version, and make it work."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.belt.works/" />
</svelte:head>

<section class="hero home-hero" aria-label="belt.works introduction">
  <div class="wrap home-hero__grid">
    <div>
      <p class="eyebrow">belt.works · Akron, Ohio</p>
      <h1>Software that earns its keep.</h1>
      <p class="lead lede-tight">
        Custom tools, automations, and web systems for businesses with broken manual workflows.
        Bring the mess. We turn it into narrow scope and build the useful part first.
      </p>
      <div class="actions">
        <a class="button" href="/contact">Bring a problem</a>
        <a class="button secondary" href="#services">See services</a>
      </div>
    </div>

    <aside class="card large proof-panel" aria-label="belt.works operating notes">
      <p class="meta">how this works</p>
      <ul class="proof-list">
        <li>No bloated proposal theater.</li>
        <li>No vague AI sparkle dust. God help us all.</li>
        <li>Small systems, automation, funnels, and tools that survive contact with work.</li>
      </ul>
    </aside>
  </div>
</section>

<section class="section" id="services" aria-label="Services">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Services</p>
      <h2>Useful work. Scoped hard.</h2>
    </div>
    <p class="lead">
      Freelance work lives here now: custom software, automation, and web systems for people who need
      the machine to stop wasting their time.
    </p>
  </div>

  <div class="wrap grid three">
    {#each primaryServices as service (service.slug)}
      <ProjectCard item={service} />
    {/each}
  </div>
</section>

<section class="section" aria-label="Method">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Method</p>
      <h2>Less mysticism. More receipts.</h2>
    </div>
    <p class="lead">
      The point is not to admire the stack. The point is to reduce friction, make the workflow legible,
      and ship the first thing that proves the rest is worth building.
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

<section class="section" id="current-work" aria-label="Current work">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Proof</p>
      <h2>Current work.</h2>
    </div>
    <p class="lead">
      A few artifacts stay visible because talk is cheap and GitHub is less forgiving than a landing
      page.
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
      <h2>Bring the problem here.</h2>
      <p class="lead">
        Describe the mess, what has to work, and what failure costs. Then we decide what is worth
        building first.
      </p>
      <div class="actions">
        <a class="button" href="/contact">Start an intake</a>
        <a class="button secondary" href="/support">Support the work</a>
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
    .home-hero__grid {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .current-work-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
