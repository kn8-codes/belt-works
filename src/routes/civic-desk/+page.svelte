<script>
  /** @type {{ data: { cities: any[], posts: any[], path: string, origin: string } }} */
  let { data } = $props();
  const cities = $derived(data.cities);
  const posts = $derived(data.posts);
  const featuredPosts = $derived(posts.slice(0, 4));
  const akron = $derived(cities.find((city) => city.id === 'akron'));
  const otherCities = $derived(cities.filter((city) => city.id !== 'akron'));
  const path = $derived(data.path);
  /** @param {string} text */
  const firstSentence = (text) => text.split(/(?<=[.!?])\s+/)[0];
</script>

<svelte:head>
  <title>Towpath Civic — the public record, made usable</title>
  <meta name="description" content="Neutral, source-linked summaries of what local government announces and decides in Akron and surrounding Northeast Ohio communities. Original summaries, official backlinks, corrections-first." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href={`${data.origin}${path === '/' ? '/' : `${path}/`}`} />
</svelte:head>

<section class="civic-hero">
  <div class="wrap">
    <p class="eyebrow">Towpath Civic · a Belt.Works project</p>
    <div class="hero-grid">
      <div>
        <h1>The public record, made usable.</h1>
        <p class="lead">Neutral, source-linked summaries of what local government announces and decides — organized for residents, published quickly, and always showing the source.</p>
        <div class="kicker-row"><span class="pill">11-city pilot</span><span class="pill">Original summaries</span><span class="pill">Official backlinks</span><span class="pill">Corrections-first</span></div>
        <div class="actions"><a class="button" href="/civic-desk/meetings/">Meetings desk</a><a class="button secondary" href="/civic-desk/announcements/">Announcement desk</a><a class="button secondary" href="/civic-desk/corrections/">Corrections</a></div>
      </div>
      <aside class="card large draft-card">
        <p class="meta">Start here</p>
        <h2>Find the thing you need.</h2>
        <p>Meeting records explain what happened. Announcement pages explain what changed. City hubs collect the official routes.</p>
        <div class="start-links"><a href="/civic-desk/meetings/">Understand a meeting →</a><a href="/civic-desk/announcements/">Scan recent releases →</a><a href="/civic-desk/cities/">Browse city hubs →</a></div>
      </aside>
    </div>
  </div>
</section>

<section class="section civic-reading">
  <div class="wrap section-head">
    <div><p class="eyebrow">First mission</p><h2>Make the school board legible.</h2></div>
    <p class="lead">A meeting is not just a video or a packet. It is a sequence of proposals, discussion, decisions, and follow-up. The Meetings desk puts those pieces in one readable path.</p>
  </div>
  <div class="wrap mission-grid">
    <a class="card mission-card primary" href="/civic-desk/meetings/"><p class="eyebrow">Meetings desk</p><h3>Agendas → recording → transcript → brief</h3><p>Start with the Akron Public Schools pilot and follow the public record through to what residents need to know next.</p><span>Open meetings →</span></a>
    <a class="card mission-card" href="/civic-desk/sources/"><p class="eyebrow">Evidence layer</p><h3>Every claim has somewhere to go.</h3><p>Official sources remain visible, linked, and separate from our independent explanation.</p><span>View source ledger →</span></a>
  </div>
</section>

<section class="section section-tight civic-reading">
  <div class="wrap section-head"><div><p class="eyebrow">Announcement desk</p><h2>Scan first. Read deeper when needed.</h2></div><a class="button secondary" href="/civic-desk/announcements/">All announcements →</a></div>
  <div class="wrap release-grid">
    {#each featuredPosts as post (post.id)}
      <article class="card release-card"><p class="meta">{post.city} · {post.topic} · {post.publishedDate}</p><h3><a href={`/civic-desk/announcements/${post.slug}`}>{post.title}</a></h3><p>{firstSentence(post.summary)}</p><a class="read-link" href={`/civic-desk/announcements/${post.slug}`}>Read summary →</a></article>
    {/each}
  </div>
</section>

<section class="section section-tight civic-reading">
  <div class="wrap section-head"><div><p class="eyebrow">Coverage map</p><h2>Akron first, region next.</h2></div><p class="lead">The pilot starts with Akron and grows outward without making every city compete for the reader’s attention at once.</p></div>
  <div class="wrap city-focus-grid">
    {#if akron}<article class="card city-card primary-city"><p class="meta">{akron.county}</p><h3><a href={`/civic-desk/cities/${akron.id}`}>{akron.name}</a></h3><p>{akron.focus}</p><a href={`/civic-desk/cities/${akron.id}`}>Open Akron hub →</a></article>{/if}
    <article class="card region-card"><p class="eyebrow">Other starting points</p><p>Barberton, Beachwood, Brecksville, Cuyahoga Falls, Fairlawn, Hudson, Norton, Solon, Stow, and Twinsburg remain available as city hubs.</p><a href="/civic-desk/cities/">Browse {otherCities.length} regional hubs →</a></article>
  </div>
</section>

<section class="section civic-reading">
  <div class="wrap grid two"><article class="card large"><p class="eyebrow">About</p><h2>Useful clutter, not less reality.</h2><p>Towpath Civic is a neutral, fact-based civic information desk. The region is complicated; the job is not to flatten it, but to give each piece a clear place, source, status, and next step.</p></article><article class="card large"><p class="eyebrow">Corrections</p><h2>Show the work. Fix the record.</h2><p>Every page links to its sources and corrections policy. If the public record changes or we get something wrong, the change should be visible.</p><div class="actions"><a class="button secondary" href="/civic-desk/corrections/">Corrections policy</a><a class="button secondary" href="/contact">Contact</a></div></article></div>
</section>

<style>
  .civic-hero { padding: clamp(4rem, 10vw, 8rem) 0 3rem; border-bottom: 1px solid var(--line); background: radial-gradient(circle at 80% 10%, rgba(255,184,77,.1), transparent 28rem); }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: clamp(2rem, 7vw, 6rem); align-items: end; }
  .hero-grid h1 { max-width: 760px; }
  .lead { max-width: 760px; color: var(--muted); line-height: 1.65; }
  .draft-card { border-color: rgba(255,184,77,.55); background: linear-gradient(180deg, rgba(255,184,77,.09), rgba(255,255,255,.02)); }
  .draft-card h2 { font-size: clamp(1.8rem, 4vw, 3rem); }
  .draft-card p { color: var(--muted); line-height: 1.6; }
  .start-links { display: grid; gap: .7rem; border-top: 1px solid var(--line); margin-top: 1.25rem; padding-top: 1rem; }
  .start-links a, .read-link, .mission-card span, .city-card > a, .region-card a { color: var(--accent); font-weight: 800; text-decoration: none; font-size: .82rem; }
  .actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }
  .section-tight { padding-top: 2rem; }
  .mission-grid, .city-focus-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .mission-card, .city-card, .region-card { text-decoration: none; }
  .mission-card h3, .release-card h3, .city-card h3 { margin: .45rem 0 .75rem; }
  .mission-card p:not(.eyebrow), .region-card p:not(.eyebrow) { color: var(--muted); line-height: 1.55; }
  .mission-card.primary, .primary-city { border-color: rgba(255,184,77,.5); background: linear-gradient(180deg, rgba(255,184,77,.08), rgba(255,255,255,.02)); }
  .release-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
  .release-card { display: flex; flex-direction: column; align-items: flex-start; min-height: 230px; }
  .release-card h3 { font-size: clamp(1.15rem, 2.5vw, 1.65rem); }
  .release-card h3 a, .city-card h3 a { color: inherit; text-decoration: none; }
  .release-card h3 a:hover, .city-card h3 a:hover { color: var(--accent); }
  .release-card p:not(.meta) { color: var(--muted); line-height: 1.55; }
  .read-link { margin-top: auto; }
  .city-card h3 { font-size: 2rem; }
  .city-card p:not(.meta) { color: var(--muted); line-height: 1.5; }
  @media (max-width: 700px) { .hero-grid, .mission-grid, .city-focus-grid, .release-grid { grid-template-columns: 1fr; } }
</style>
