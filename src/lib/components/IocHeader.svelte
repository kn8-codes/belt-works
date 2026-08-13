<script>
  import { page } from '$app/state';

  let iocBase = $derived(page.url.hostname === 'ioc.belt.works' ? '' : '/ioc');
</script>

<header class="site-header ioc-header">
  <div class="wrap nav">
    <a href={iocBase || '/'} class="brand"><span>ioc</span>.belt.works</a>
    <nav class="nav-links" aria-label="IOC.Belt navigation">
      <a href={iocBase || '/'}>overview</a>
      <a href={`${iocBase}/method`}>method</a>
      <a href={`${iocBase}/playbooks/impersonation/protect-your-money`}>synthetic playbook</a>
      <a href="https://belt.works/">belt.works ↗</a>
    </nav>
  </div>
</header>
