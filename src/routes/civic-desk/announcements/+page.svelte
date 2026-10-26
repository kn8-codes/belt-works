<script>
  /** @type {{ data: { posts: any[], path: string, origin: string } }} */
  let { data } = $props();
  const posts = $derived(data.posts);
  const path = $derived(data.path);
  /** @param {string} text */
  const firstSentence = (text) => text.split(/(?<=[.!?])\s+/)[0];
</script>

<svelte:head>
  <title>Announcement desk | Towpath Civic</title>
  <meta name="description" content="Neutral, source-linked summaries of local government announcements for Akron and surrounding Northeast Ohio communities." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href={`${data.origin}${path}/`} />
</svelte:head>

<section class="section civic-reading">
  <div class="wrap narrow-intro">
    <p class="eyebrow">Announcement desk</p>
    <h1>Scan the public release stream.</h1>
    <p class="lead">Short summaries first. Open the detail page when you need resident impact, key facts, FAQ, corrections, and the official source.</p>
  </div>
</section>

<section class="section section-tight civic-reading">
  <div class="wrap list">
    {#each posts as post (post.id)}
      <article class="card row">
        <div class="row-main">
          <p class="meta">{post.city} · {post.topic} · {post.publishedDate}</p>
          <h2><a href={`/civic-desk/announcements/${post.slug}/`}>{post.title}</a></h2>
          <p>{firstSentence(post.summary)}</p>
          <div class="row-foot"><span class="status">verified summary</span><a href={post.officialSourceUrl} target="_blank" rel="noopener noreferrer nofollow">Official source ↗</a></div>
        </div>
        <a class="button secondary" href={`/civic-desk/announcements/${post.slug}/`}>Read summary</a>
      </article>
    {/each}
  </div>
</section>

<style>
  .narrow-intro { max-width: 900px; }
  .lead { max-width: 760px; color: var(--muted); line-height: 1.65; }
  .section-tight { padding-top: 2rem; }
  .list { display: grid; gap: 1rem; }
  .row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1.5rem; align-items: end; }
  .row h2 { margin: .45rem 0 .7rem; font-size: clamp(1.2rem, 3vw, 2rem); }
  .row h2 a { color: inherit; text-decoration: none; }
  .row h2 a:hover { color: var(--accent); }
  .row p:not(.meta) { color: var(--muted); line-height: 1.55; max-width: 780px; }
  .row-foot { display: flex; flex-wrap: wrap; gap: .9rem 1.25rem; align-items: center; margin-top: 1rem; }
  .row-foot a { color: var(--accent); font-size: .78rem; font-weight: 800; text-decoration: none; }
  .status { color: var(--accent-2); font-size: .72rem; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; }
  @media (max-width: 700px) { .row { grid-template-columns: 1fr; align-items: start; } }
</style>
