<script>
  import Share from '$lib/components/Share.svelte';

  /** @type {{ data: { post: any, breadcrumbs: any[], schema: any, articlePath: string, path: string } }} */
  let { data } = $props();
  const post = $derived(data.post);
  const breadcrumbs = $derived(data.breadcrumbs);
  const articlePath = $derived(data.articlePath);
</script>

<svelte:head>
  <title>{post.title} (draft structure) | Civic Desk draft</title>
  <meta name="description" content={post.summary} />
  <meta name="robots" content="noindex, nofollow, noarchive" />
  <link rel="canonical" href={articlePath} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={`${post.title} (draft structure)`} />
  <meta property="og:description" content={post.summary} />
  <meta property="og:site_name" content="Belt.Works Civic Desk draft" />
  <meta name="twitter:card" content="summary" />
  <script type="application/ld+json">{JSON.stringify(data.schema)}</script>
</svelte:head>

<article class="article">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb">
      {#each breadcrumbs as crumb, index (String(crumb.name) + String(crumb.path))}
        {#if index === breadcrumbs.length - 1}
          <span>{crumb.name}</span>
        {:else}
          <a href={crumb.path}>{crumb.name}</a><span aria-hidden="true"> › </span>
        {/if}
      {/each}
    </nav>

    <p class="eyebrow">{post.city} · {post.topic} · draft structure</p>
    <h1>{post.title}</h1>
    <p class="lead">{post.summary}</p>

    <div class="status-row">
      <span class="status warn">structure sample · not a live news claim</span>
      <Share url={articlePath} title={`${post.title} — civic announcement summary draft`} variant="compact" />
    </div>

    <section class="grid two">
      <article class="card large">
        <p class="eyebrow">What it means for residents</p>
        <h2>Practical impact</h2>
        <p>{post.residentImpact}</p>
      </article>
      <article class="card large">
        <p class="eyebrow">Key facts</p>
        <h2>Verification record</h2>
        <dl class="facts">
          {#each post.facts as fact (fact[0])}
            <dt>{fact[0]}</dt>
            <dd>{fact[1]}</dd>
          {/each}
        </dl>
      </article>
    </section>

    <section class="card large source-card">
      <p class="eyebrow">Official source</p>
      <h2>Show the work</h2>
      <p><a href={post.officialSourceUrl} target="_blank" rel="noopener noreferrer nofollow">{post.officialSourceLabel}</a></p>
      <p class="muted">The official announcement remains the primary record. The summary is an independent rewrite and must preserve this link.</p>
    </section>

    <section class="card large">
      <p class="eyebrow">FAQ</p>
      <h2>Common questions</h2>
      <div class="faq">
        {#each post.faq as entry (entry.question)}
          <div>
            <h3>{entry.question}</h3>
            <p>{entry.answer}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="card large">
      <p class="eyebrow">Corrections</p>
      <h2>Accuracy and review</h2>
      <p>Every published summary will record its verification source, publication time, last-review time, and any correction. Errors will be corrected visibly rather than silently rewritten.</p>
    </section>

    <div class="actions">
      <a class="button" href={`/civic-desk/cities/${post.cityId}/`}>Back to {post.city}</a>
      <a class="button secondary" href="/civic-desk/announcements/">All announcements</a>
    </div>
  </div>
</article>

<style>
  .article { padding: clamp(2rem, 6vw, 4.5rem) 0; }
  .crumbs { color: var(--muted); font-size: .82rem; margin-bottom: 1.2rem; line-height: 1.7; }
  .crumbs a { color: var(--accent); text-decoration: none; }
  h1 { max-width: 900px; }
  .lead { max-width: 760px; color: var(--muted); }
  .status-row { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin: 1.7rem 0 2.4rem; }
  .grid { display: grid; gap: 1rem; margin-bottom: 1rem; }
  .grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .card.large { padding: 1.7rem; }
  .card h2 { font-size: clamp(1.4rem, 3vw, 2.2rem); margin-bottom: .8rem; }
  .card p { color: var(--muted); line-height: 1.65; }
  .source-card { border-color: rgba(255,184,77,.45); }
  .source-card a { color: var(--accent); font-weight: 800; text-decoration: none; }
  .facts { display: grid; gap: .8rem; margin: 1rem 0 0; }
  .facts dt { color: var(--fg); font-weight: 800; font-size: .84rem; }
  .facts dd { color: var(--muted); margin: .18rem 0 0; line-height: 1.5; }
  .faq { display: grid; gap: 1.3rem; margin-top: 1rem; }
  .faq h3 { font-size: 1.15rem; margin-bottom: .4rem; }
  .actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }
  @media (max-width: 760px) { .grid.two { grid-template-columns: 1fr; } }
</style>
