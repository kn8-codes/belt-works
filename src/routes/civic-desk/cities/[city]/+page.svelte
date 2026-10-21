<script>
  /** @type {{ data: { city: any, posts: any[], path: string, cityPath: string } }} */
  let { data } = $props();
  const city = $derived(data.city);
  const posts = $derived(data.posts);
  const cityPath = $derived(data.cityPath);
  const feedRoutes = $derived(city.feedRoutes || []);
</script>

<svelte:head>
  <title>{city.name} civic desk (draft) | Civic Desk draft</title>
  <meta name="description" content={`Draft hub for verified ${city.name} civic announcements, official sources, and resident information.`} />
  <meta name="robots" content="noindex, nofollow, noarchive" />
  <link rel="canonical" href={cityPath} />
</svelte:head>

<section class="section">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/civic-desk/">Civic Desk draft</a> › <a href="/civic-desk/cities/">Cities</a> › {city.name}</nav>
    <p class="eyebrow">{city.county} · city hub draft</p>
    <h1>{city.name}</h1>
    <p class="lead">{city.focus}</p>

    <div class="grid two">
      <article class="card large">
        <p class="eyebrow">Official entry points</p>
        <h2>Start with the public record</h2>
        <p><a href={city.officialSite} target="_blank" rel="noopener noreferrer nofollow">{city.officialSite}</a></p>
        {#if city.releaseRoutes.length}
          <ul class="check-list">
            {#each city.releaseRoutes as route (route[0])}
              <li><a href={route[1]} target="_blank" rel="noopener noreferrer nofollow">{route[0]}</a></li>
            {/each}
          </ul>
        {:else}
          <p class="status warn">Known release routes still need verification before outreach begins.</p>
        {/if}
      </article>
      <article class="card large">
        <p class="eyebrow">Public feed routes</p>
        <h2>Watchlist candidates</h2>
        {#if feedRoutes.length}
          <ul class="check-list">
            {#each feedRoutes as route (route[0])}
              <li><a href={route[1]} target="_blank" rel="noopener noreferrer nofollow">{route[0]}</a></li>
            {/each}
          </ul>
          <p class="muted">Feed links were discovered from public pages on 2026-10-21. Each route must be rechecked before automated monitoring.</p>
        {:else}
          <p class="status warn">No public feed route discovered yet.</p>
        {/if}
      </article>
    </div>

    <div class="grid two">
      <article class="card large">
        <p class="eyebrow">Future hub contents</p>
        <h2>What belongs here</h2>
        <ul class="check-list">
          <li>Verified announcement summaries</li>
          <li>Council and hearing notices</li>
          <li>Service updates</li>
          <li>Correction history</li>
          <li>Source ledger</li>
          <li>Share links for useful public records</li>
        </ul>
      </article>
      <article class="card large">
        <p class="eyebrow">Monitoring posture</p>
        <h2>Speed with receipts</h2>
        <p>The eventual watcher will record source URL, retrieval time, publication time when available, and verification status. Nothing is published from an automated summary alone.</p>
        <p class="muted">Manual human review remains the publication gate.</p>
      </article>
    </div>

    <h2 class="sample-heading">Sample announcement structure</h2>
    {#if posts.length}
      <div class="list">
        {#each posts as post (post.id)}
          <article class="card row">
            <div>
              <p class="meta">{post.topic}</p>
              <h3><a href={`/civic-desk/announcements/${post.slug}`}>{post.title}</a></h3>
              <p>{post.summary}</p>
            </div>
            <a class="button secondary" href={`/civic-desk/announcements/${post.slug}`}>View draft</a>
          </article>
        {/each}
      </div>
    {:else}
      <p class="status warn">No sample pages for this city yet.</p>
    {/if}
  </div>
</section>

<style>
  .crumbs { color: var(--muted); font-size: .82rem; margin-bottom: 1.1rem; }
  .crumbs a { color: var(--accent); text-decoration: none; }
  .lead { max-width: 760px; color: var(--muted); }
  .grid { display: grid; gap: 1rem; margin: 2.2rem 0 0; }
  .grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sample-heading { margin-top: 2.5rem; }
  .list { display: grid; gap: .8rem; margin-top: 1rem; }
  .row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1.5rem; align-items: end; }
  .row h3 { margin: .35rem 0 .7rem; font-size: clamp(1.1rem, 2.6vw, 1.75rem); }
  .row h3 a { color: inherit; text-decoration: none; }
  .row h3 a:hover { color: var(--accent); }
  .row p:not(.meta) { color: var(--muted); line-height: 1.55; max-width: 720px; }
  a { color: var(--accent); }
  .muted { color: var(--muted); font-size: .84rem; line-height: 1.55; margin-top: .9rem; }
  .check-list { display: grid; gap: .7rem; margin: 1.1rem 0 0; padding: 0; list-style: none; color: var(--muted); line-height: 1.5; }
  .check-list li::before { content: '✓'; color: var(--accent); font-weight: 900; margin-right: .65rem; }
  @media (max-width: 760px) { .grid.two, .row { grid-template-columns: 1fr; align-items: start; } }
</style>
