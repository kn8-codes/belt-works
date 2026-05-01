<script>
  import { roomEvents, roomNodes, roomRules, rooms } from '$lib/content/rooms-sample.js';
</script>

<svelte:head>
  <title>ROOMS | belt.works</title>
  <meta name="description" content="A public-safe cockpit for the belt.works agent mesh and working rooms." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">ROOMS</p>
    <h1>A cockpit, not a fantasy dashboard.</h1>
    <p class="lead">ROOMS is the public-safe view of the lab: what rooms exist, what they are for, and what the mesh is allowed to show. No secrets. No private logs. No client data.</p>
    <div class="kicker-row">
      <span class="pill">static proof</span>
      <span class="pill">sanitized</span>
      <span class="pill">live feed later</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Working rooms</p>
      <h2>The lab gets rooms before it gets mythology.</h2>
    </div>
    <p class="copy">Each room has a job. If it does not produce proof, intake, research, data, or operations value, it does not need a room yet.</p>
  </div>
  <div class="wrap room-grid">
    {#each rooms as room (room.slug)}
      <article class="card large room-card">
        <div class="room-card__top">
          <p class="meta">{room.slug}</p>
          <span class="status">{room.status}</span>
        </div>
        <h3>{room.name}</h3>
        <p>{room.purpose}</p>
        <div>
          <p class="meta">Visible work</p>
          <ul class="mini-list">
            {#each room.visibleWork as item (item)}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
        <p><strong>Next:</strong> {room.nextMove}</p>
      </article>
    {/each}
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Mesh</p>
      <h2>Show node roles. Not the machine room.</h2>
    </div>
    <p class="copy">The public page can show sanitized roles and coarse status. It should not expose hostnames, keys, file paths, raw logs, private tasks, or client material.</p>
  </div>
  <div class="wrap grid">
    {#each roomNodes as node (node.name)}
      <article class="card large">
        <div class="meta">{node.role}</div>
        <h3>{node.name}</h3>
        <p><span class:warn={node.tone === 'warn'} class="status">{node.status}</span></p>
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
      <p class="eyebrow">Event ledger</p>
      <h2>Small public record. Enough to see work moving.</h2>
    </article>
    <div class="ledger">
      {#each roomEvents as event (event.time + event.room + event.event)}
        <article class="ledger-row">
          <p class="meta">{event.time} / {event.room}</p>
          <p>{event.event}</p>
        </article>
      {/each}
    </div>
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
