<script>
  import { page } from '$app/state';

  const mainSite = 'https://belt.works';
  const civicSite = 'https://civics.belt.works';
  let base = $derived(page.url.hostname === 'civics.belt.works' ? mainSite : '');
</script>

<header class="site-header">
  <div class="wrap nav">
    <a href={`${base}/`} class="brand"><span>belt</span>.works</a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href={`${base}/work`}>work</a>
      <a href={civicSite}>civics</a>
      <a href={`${civicSite}/civic-desk/meetings/`}>meetings</a>
      <a href={`${base}/method`}>method</a>
      <a href={`${base}/blog`}>blog</a>
      <a href={`${base}/ask`}>ask</a>
      <a href={`${base}/services`}>services</a>
      <a href={`${base}/ally`}>ally</a>
      <a href={`${base}/donate`}>donate</a>
      <a href={`${base}/contact`}>bring a problem</a>
    </nav>
  </div>
</header>
