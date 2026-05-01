<script>
  import { roomNodes, roomRules } from '$lib/content/rooms-sample.js';
</script>

<svelte:head>
  <title>ROOMS | belt.works</title>
  <meta name="description" content="A public sanitized view of the belt.works agent mesh." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">ROOMS</p>
    <h1>A cockpit, not a fantasy dashboard.</h1>
    <p class="lead">This is the public-safe version: what nodes exist, what role they play, and what they are working on. No secrets. No private logs.</p>
    <div class="kicker-row">
      <span class="pill">mock data</span>
      <span class="pill">sanitized</span>
      <span class="pill">public proof layer</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid">
    {#each roomNodes as node (node.name)}
      <article class="card large">
        <div class="meta">{node.role}</div>
        <h3>{node.name}</h3>
        <p><span class="status">{node.status}</span></p>
        <p><strong>Task:</strong> {node.task}</p>
        <p><strong>Last seen:</strong> {node.lastSeen}</p>
        <p>{node.event}</p>
      </article>
    {/each}
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Public rules</p>
      <h2>Show enough to prove the method. Hide what should stay private.</h2>
    </article>
    <ul class="list">
      {#each roomRules as rule (rule)}
        <li>{rule}</li>
      {/each}
    </ul>
  </div>
</section>
