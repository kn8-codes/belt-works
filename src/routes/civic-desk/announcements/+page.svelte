<script>
  /** @type {{ data: { posts: any[], path: string, origin: string } }} */
  let { data } = $props();
  const posts = $derived(data.posts);
  const path = $derived(data.path);
</script>

<svelte:head>
  <title>Announcement desk | Towpath Civic</title>
  <meta name="description" content="Neutral, source-linked summaries of local government announcements for Akron and surrounding Northeast Ohio communities." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href={`${data.origin}${path}/`} />
</svelte:head>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">Announcement desk</p>
    <h1>Verified release summaries</h1>
    <p class="lead">Every announcement page contains an original summary, resident impact, key facts, FAQ, official source link, corrections path, and share links. Records are sourced from official public releases.</p>

    <div class="list">
      {#each posts as post (post.id)}
        <article class="card row">
          <div>
            <p class="meta">{post.city} · {post.topic}</p>
            <h2><a href="/civic-desk/announcements/{post.slug}">{post.title}</a></h2>
            <p>{post.summary}</p>
          </div>
          <a class="button secondary" href="/civic-desk/announcements/{post.slug}">Read summary</a>
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
