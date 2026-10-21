<script>
  /** @type {{ data: { posts: any[], path: string } }} */
  let { data } = $props();
  const posts = $derived(data.posts);
  const path = $derived(data.path);
</script>

<svelte:head>
  <title>Announcement summaries (draft) | Civic Desk draft</title>
  <meta name="description" content="Draft structure for neutral, source-linked local government announcement summaries." />
  <meta name="robots" content="noindex, nofollow, noarchive" />
  <link rel="canonical" href={`${path}/`} />
</svelte:head>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">Announcement desk · private draft</p>
    <h1>Verified release summaries</h1>
    <p class="lead">Each future announcement page will contain an original summary, resident impact, key facts, FAQ, official source link, corrections path, and share links. No sample below is a live news claim.</p>

    <div class="list">
      {#each posts as post (post.id)}
        <article class="card row">
          <div>
            <p class="meta">{post.city} · {post.topic}</p>
            <h2><a href="/civic-desk/announcements/{post.slug}">{post.title}</a></h2>
            <p>{post.summary}</p>
          </div>
          <a class="button secondary" href="/civic-desk/announcements/{post.slug}">View draft</a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .lead { max-width: 780px; color: var(--muted); }
  .list { display: grid; gap: .8rem; margin-top: 2rem; }
  .row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1.5rem; align-items: end; }
  .row h2 { margin: .35rem 0 .7rem; font-size: clamp(1.2rem, 3vw, 2rem); }
  .row h2 a { color: inherit; text-decoration: none; }
  .row h2 a:hover { color: var(--accent); }
  .row p:not(.meta) { color: var(--muted); line-height: 1.55; max-width: 760px; }
  @media (max-width: 700px) { .row { grid-template-columns: 1fr; align-items: start; } }
</style>
