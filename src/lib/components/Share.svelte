<script>
  let { url, title, variant = 'primary', label = 'Share this summary' } = $props();

  const links = $derived.by(() => {
    const absoluteUrl = new URL(url, url);
    const href = absoluteUrl.href;
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(href);
    return {
      copy: href,
      mail: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      x: `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    };
  });

  async function copyLink() {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(links.copy);
    }
  }
</script>

<div class="share {variant}">
  <span class="share-label">{label}</span>
  <div class="share-actions">
    <a href={links.x} target="_blank" rel="noopener noreferrer nofollow" aria-label={`Share ${title} on X`}>X</a>
    <a href={links.facebook} target="_blank" rel="noopener noreferrer nofollow" aria-label={`Share ${title} on Facebook`}>Facebook</a>
    <a href={links.linkedin} target="_blank" rel="noopener noreferrer nofollow" aria-label={`Share ${title} on LinkedIn`}>LinkedIn</a>
    <a href={links.mail} aria-label={`Email a link to ${title}`}>Email</a>
    <button type="button" onclick={copyLink} aria-label={`Copy a link to ${title}`}>Copy link</button>
  </div>
</div>

<style>
  .share { display: grid; gap: .5rem; }
  .share-label { color: var(--muted); font-size: .8rem; text-transform: uppercase; letter-spacing: .12em; font-weight: 800; }
  .share-actions { display: flex; flex-wrap: wrap; gap: .5rem; }
  .share-actions a, .share-actions button { color: var(--fg); background: rgba(255,255,255,.05); border: 1px solid var(--line); border-radius: 999px; padding: .38rem .78rem; font: inherit; font-size: .78rem; font-weight: 700; text-decoration: none; cursor: pointer; }
  .share-actions a:hover, .share-actions button:hover { color: var(--accent); border-color: rgba(255,184,77,.45); }
  .compact .share-actions a, .compact .share-actions button { padding: .3rem .62rem; font-size: .72rem; }
</style>
