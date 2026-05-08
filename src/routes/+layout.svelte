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

  <meta property="og:site_name" content="belt.works" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="belt.works" />
  <meta property="og:description" content="We build software that works. You bring the problem." />
  <meta property="og:image" content="https://belt.works/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="belt.works" />
  <meta name="twitter:description" content="We build software that works. You bring the problem." />
  <meta name="twitter:image" content="https://belt.works/og.png" />
</svelte:head>

<div class="site-shell">
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader />
  <main class="site-main" id="main-content">
    {@render children()}
  </main>
  <SiteFooter />
</div>
