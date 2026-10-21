<script>
  /** @type {{ data: { cities: any[], posts: any[], path: string } }} */
  let { data } = $props();
  const cities = $derived(data.cities);
  const posts = $derived(data.posts);
  const path = $derived(data.path);
</script>

<svelte:head>
  <title>Towpath Civic — the public record, made usable</title>
  <meta name="description" content="Neutral, source-linked summaries of what local government announces and decides in Akron and surrounding Northeast Ohio communities. Original summaries, official backlinks, corrections-first." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href={`${path}/`} />
</svelte:head>

<section class="civic-hero">
  <div class="wrap">
    <p class="eyebrow">Towpath Civic · a Belt.Works project</p>
    <div class="hero-grid">
      <div>
        <h1>The public record, made usable.</h1>
        <p class="lead">Neutral, source-linked summaries of what local government announces and decides — organized for residents, published quickly, and always showing the source.</p>
        <div class="kicker-row">
          <span class="pill">11-city pilot</span>
          <span class="pill">Original summaries</span>
          <span class="pill">Official backlinks</span>
          <span class="pill">Corrections-first</span>
        </div>
        <div class="actions">
          <a class="button" href="/civic-desk/announcements/">Announcement desk</a>
          <a class="button secondary" href="/civic-desk/cities/">City hubs</a>
          <a class="button secondary" href="/civic-desk/corrections/">Corrections</a>
          <a class="button secondary" href="/civic-desk/sources/">Source ledger</a>
        </div>
      </div>
      <aside class="card large draft-card">
        <p class="meta">working premise</p>
        <h2>Speed without pretending to be the source.</h2>
        <p>Watch public release pages and press feeds. Verify the facts. Publish an original summary with a prominent link to the official announcement.</p>
        <p class="draft-note">Early public draft, operated in the open: coverage starts with Akron's official release feed; every record links to its primary source and follows the visible corrections policy.</p>
      </aside>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Coverage map</p>
      <h2>One regional desk. Eleven starting points.</h2>
    </div>
    <p class="lead">The city pages are hubs: each one will collect verified releases, explainers, meeting information, and useful links without pretending to replace local journalism or the official source.</p>
  </div>
  <div class="wrap city-grid">
    {#each cities as city (city.id)}
      <article class="card city-card">
        <p class="meta">{city.county}</p>
        <h3><a href={`/civic-desk/cities/${city.id}`}>{city.name}</a></h3>
        <p>{city.focus}</p>
        <a href={`/civic-desk/cities/${city.id}`}>View city hub →</a>
      </article>
    {/each}
  </div>
</section>

<section class="section" id="sample-releases">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Announcement desk</p>
      <h2>Fast summaries. Clear receipts.</h2>
    </div>
    <p class="lead">Live records from official release feeds: original summaries, key facts, resident impact, and the official link preserved. First beat: Akron public safety, police accountability, and city services.</p>
  </div>
  <div class="wrap release-list">
    {#each posts as post (post.id)}
      <article class="card release-card">
        <div>
          <p class="meta">{post.city} · {post.topic}</p>
          <h3><a href={`/civic-desk/announcements/${post.slug}`}>{post.title}</a></h3>
          <p>{post.summary}</p>
        </div>
        <div class="release-foot">
          <span class="status">verified summary</span>
          <a href={`/civic-desk/announcements/${post.slug}`}>Read →</a>
          <a href={post.officialSourceUrl} target="_blank" rel="noopener noreferrer nofollow">{post.officialSourceLabel} ↗</a>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Every announcement page</p>
      <h2>Show the work.</h2>
      <ul class="check-list">
        <li>City and topic in the title and URL.</li>
        <li>Original summary in plain language.</li>
        <li>What it means for residents.</li>
        <li>Key facts with visible published and updated times.</li>
        <li>Official source link, share links, corrections path.</li>
        <li>Structured data and fast mobile HTML.</li>
      </ul>
    </article>
    <article class="card large">
      <p class="eyebrow">About</p>
      <h2>What Towpath Civic is.</h2>
      <p>A neutral, fact-based civic information desk covering Akron and ten surrounding communities — named for the Ohio &amp; Erie Canal Towpath that connects the region. Every record is an original summary of an official public release, linked to its source, with published and reviewed timestamps and a visible corrections policy. A Belt.Works project: evidence-first, show the work.</p>
      <div class="actions"><a class="button secondary" href="/civic-desk/corrections/">Corrections policy</a><a class="button secondary" href="/contact">Contact</a></div>
    </article>
  </div>
</section>

<style>
  .civic-hero { padding: clamp(4rem, 10vw, 8rem) 0 3rem; border-bottom: 1px solid var(--line); background: radial-gradient(circle at 80% 10%, rgba(255,184,77,.1), transparent 28rem); }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: clamp(2rem, 7vw, 6rem); align-items: end; }
  .hero-grid h1 { max-width: 760px; }
  .draft-card { border-color: rgba(255,184,77,.55); background: linear-gradient(180deg, rgba(255,184,77,.09), rgba(255,255,255,.02)); }
  .draft-card h2 { font-size: clamp(1.8rem, 4vw, 3rem); }
  .draft-card p { color: var(--muted); line-height: 1.6; }
  .draft-note { border-top: 1px solid var(--line); padding-top: .9rem; margin-top: 1.25rem; color: var(--accent-2) !important; font-size: .82rem; }
  .actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }
  .city-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
  .city-card h3 { font-size: 1.5rem; margin-bottom: .55rem; }
  .city-card h3 a { color: inherit; text-decoration: none; }
  .city-card h3 a:hover { color: var(--accent); }
  .city-card p:not(.meta) { color: var(--muted); min-height: 3.1rem; line-height: 1.45; font-size: .86rem; }
  .city-card > a, .release-foot a { color: var(--accent); font-weight: 800; text-decoration: none; font-size: .82rem; }
  .release-list { display: grid; gap: .8rem; }
  .release-card { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1.5rem; align-items: end; }
  .release-card h3 { font-size: clamp(1.25rem, 3vw, 2rem); margin: .35rem 0 .7rem; }
  .release-card h3 a { color: inherit; text-decoration: none; }
  .release-card h3 a:hover { color: var(--accent); }
  .release-card p:not(.meta) { color: var(--muted); line-height: 1.55; max-width: 760px; }
  .release-foot { display: grid; gap: .7rem; justify-items: end; white-space: nowrap; }
  .check-list { display: grid; gap: .8rem; margin: 1.25rem 0 0; padding: 0; list-style: none; color: var(--muted); line-height: 1.5; }
  .check-list li::before { content: '✓'; color: var(--accent); font-weight: 900; margin-right: .65rem; }
  @media (max-width: 900px) { .city-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
  @media (max-width: 700px) { .hero-grid, .release-card, .city-grid { grid-template-columns: 1fr; } .release-foot { justify-items: start; } }
</style>
