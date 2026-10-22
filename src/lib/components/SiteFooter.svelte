<script>
  import { page } from '$app/state';

  const mainSite = 'https://belt.works';
  let base = $derived(page.url.hostname === 'civics.belt.works' ? mainSite : '');
</script>

<footer class="site-footer">
  <div class="wrap footer-grid">
    <span><a href={`${base}/`}>belt.works</a> · Akron, Ohio</span>
    <span>Small working systems for real work. <a href={`${base}/donate`}>Support the work.</a></span>
  </div>
</footer>
