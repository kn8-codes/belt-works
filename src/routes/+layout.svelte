<script>
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { page } from '$app/state';
  import IocFooter from '$lib/components/IocFooter.svelte';
  import IocHeader from '$lib/components/IocHeader.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

  let { children } = $props();

  let isIoc = $derived(page.url.hostname === 'ioc.belt.works' || page.url.pathname.startsWith('/ioc'));
</script>

<svelte:head>
  <link rel="icon" href={favicon} />

  <meta property="og:site_name" content="belt.works" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="belt.works — Software that earns its keep." />
  <meta property="og:description" content="Small working systems for real work. Bring the broken workflow." />
  <meta property="og:image" content="https://belt.works/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="belt.works — Software that earns its keep." />
  <meta name="twitter:description" content="Small working systems for real work. Bring the broken workflow." />
  <meta name="twitter:image" content="https://belt.works/og.png" />
</svelte:head>

<div class="site-shell">
  <a class="skip-link" href="#main-content">Skip to content</a>
  {#if isIoc}
    <IocHeader />
  {:else}
    <SiteHeader />
  {/if}
  <main class="site-main" id="main-content" tabindex="-1">
    {@render children()}
  </main>
  {#if isIoc}
    <IocFooter />
  {:else}
    <SiteFooter />
  {/if}
</div>
