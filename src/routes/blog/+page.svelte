<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Blog | belt.works</title>
  <meta
    name="description"
    content="Flat-file notes from belt.works: accessibility, BoomMates, ShopFloor, and other public work."
  />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Blog</p>
    <h1>Notes from the shop floor.</h1>
    <p class="lead">
      Markdown-first field notes. No platform chrome, no engagement bait, no confetti cannon pointed
      at the reader.
    </p>
  </div>
</section>

<section class="section blog-index" aria-label="Blog posts">
  <div class="narrow">
    <ol class="post-list">
      {#each data.posts as post (post.slug)}
        <li>
          <a href={`/blog/${post.slug}`}>
            <span class="post-list__title">{post.title}</span>
            <span class="post-list__description">{post.description}</span>
          </a>
        </li>
      {/each}
    </ol>
  </div>
</section>

<style>
  .blog-index {
    padding-top: 2rem;
  }

  .post-list {
    display: grid;
    gap: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    border-top: 1px solid var(--line);
  }

  .post-list li {
    border-bottom: 1px solid var(--line);
  }

  .post-list a {
    display: grid;
    gap: 0.45rem;
    padding: 1.25rem 0;
    text-decoration: none;
  }

  .post-list a:hover .post-list__title {
    color: var(--accent);
  }

  .post-list__title {
    color: var(--text);
    font-size: clamp(1.45rem, 4vw, 2.4rem);
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1;
  }

  .post-list__description {
    color: var(--muted);
    line-height: 1.55;
  }
</style>
