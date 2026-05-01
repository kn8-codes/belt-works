<script>
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="site-shell">
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader />
  <main class="site-main" id="main-content">
    {@render children()}
  </main>
  <SiteFooter />
</div>
