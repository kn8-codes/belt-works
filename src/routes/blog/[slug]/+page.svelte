<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.post.title} | belt.works</title>
  <meta name="description" content={data.post.description} />
</svelte:head>

<article class="post-shell">
  <header class="route-title post-header">
    <div class="narrow">
      <p class="eyebrow">Blog</p>
      <h1>{data.post.title}</h1>
      <p class="lead">{data.post.description}</p>
      <div class="kicker-row" aria-label="Post metadata">
        <a class="pill" href="/blog">← all posts</a>
        <span class="pill">{data.post.date}</span>
      </div>
    </div>
  </header>

  <section class="section post-section">
    <div class="narrow">
      <div class="markdown-body">
        <!-- The local markdown renderer escapes raw Markdown before emitting this limited HTML. -->
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html data.post.html}
      </div>
    </div>
  </section>
</article>

<style>
  .post-header h1 {
    max-width: 100%;
  }

  .post-section {
    padding-top: 2rem;
  }

  .markdown-body {
    color: var(--muted);
    line-height: 1.75;
    font-size: 1rem;
  }

  .markdown-body :global(h1),
  .markdown-body :global(h2),
  .markdown-body :global(h3) {
    color: var(--text);
    letter-spacing: -0.05em;
    margin: 2rem 0 1rem;
  }

  .markdown-body :global(h1:first-child),
  .markdown-body :global(h2:first-child),
  .markdown-body :global(h3:first-child) {
    margin-top: 0;
  }

  .markdown-body :global(h1) {
    font-size: clamp(2rem, 6vw, 4rem);
    line-height: 0.95;
  }

  .markdown-body :global(h2) {
    font-size: clamp(1.6rem, 4vw, 2.5rem);
  }

  .markdown-body :global(h3) {
    font-size: 1.15rem;
    letter-spacing: -0.02em;
  }

  .markdown-body :global(p),
  .markdown-body :global(ul),
  .markdown-body :global(pre) {
    margin: 0 0 1.2rem;
  }

  .markdown-body :global(ul) {
    display: grid;
    gap: 0.45rem;
    padding-left: 1.1rem;
  }

  .markdown-body :global(li::marker) {
    color: var(--accent);
  }

  .markdown-body :global(a) {
    color: var(--accent);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.18em;
  }

  .markdown-body :global(code) {
    border: 1px solid var(--line);
    background: #050504;
    color: var(--text);
    padding: 0.12rem 0.28rem;
    font-size: 0.92em;
  }

  .markdown-body :global(pre) {
    border: 1px solid var(--line);
    background: #050504;
    color: var(--text);
    padding: 1rem;
    overflow-x: auto;
  }

  .markdown-body :global(pre code) {
    border: 0;
    padding: 0;
    background: transparent;
  }
</style>
