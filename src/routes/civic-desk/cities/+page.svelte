<script>
  /** @type {{ data: { cities: any[], grouped: Record<string, any[]>, path: string } }} */
  let { data } = $props();
  const cities = $derived(data.cities);
  const grouped = $derived(data.grouped);
  const path = $derived(data.path);

  /** @param {string} site */
  function displayHost(site) {
    return site.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  }
</script>

<svelte:head>
  <title>Cities (draft) | Civic Desk draft</title>
  <meta name="description" content="Draft city hub structure for Northeast Ohio civic announcements." />
  <meta name="robots" content="noindex, nofollow, noarchive" />
  <link rel="canonical" href={`${path}/`} />
</svelte:head>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">Regional city desk · private draft</p>
    <h1>Eleven city hubs</h1>
    <p class="lead">Each city page will become a hub for verified announcements, meeting information, official sources, and useful resident services. The current route keeps the final subdomain and brand open.</p>

    <div class="grid four">
      {#each cities as city (city.id)}
        <article class="card city">
          <p class="meta">{city.county}</p>
          <h2><a href={`/civic-desk/cities/${city.id}`}>{city.name}</a></h2>
          <p>{city.focus}</p>
          <p class="meta">Official site · <a href={city.officialSite} target="_blank" rel="noopener noreferrer nofollow">{displayHost(city.officialSite)}</a></p>
          <p class="status warn">{grouped[city.id].length} sample structure pages</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .lead { max-width: 780px; color: var(--muted); }
  .grid { display: grid; gap: 1rem; margin-top: 2rem; }
  .grid.four { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .city h2 { margin: .35rem 0 .65rem; font-size: 1.5rem; }
  .city h2 a { color: inherit; text-decoration: none; }
  .city h2 a:hover { color: var(--accent); }
  .city p:not(.meta) { color: var(--muted); min-height: 2.8rem; line-height: 1.45; font-size: .86rem; }
  .city a { color: var(--accent); text-decoration: none; font-weight: 700; }
  .status { display: inline-block; margin-top: 1rem; }
  @media (max-width: 1000px) { .grid.four { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
  @media (max-width: 760px) { .grid.four { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 520px) { .grid.four { grid-template-columns: 1fr; } }
</style>
