<script>
  import { fleetStats, roomEvents, roomNodes, roomRules, rooms } from '$lib/content/rooms-sample.js';

  let selectedId = $state(roomNodes[2].id);

  let selectedRoom = $derived(roomNodes.find((room) => room.id === selectedId) ?? roomNodes[0]);
</script>

<svelte:head>
  <title>ROOMS | belt.works</title>
  <meta name="description" content="A public-safe illustrated cockpit for the belt.works agent mesh." />
</svelte:head>

<section class="rooms-shell">
  <div class="rooms-topbar">
    <div>
      <p class="eyebrow">ROOMS</p>
      <h1>Every node becomes a place.</h1>
    </div>
    <div class="rooms-live-tag">public demo</div>
  </div>

  <div class="rooms-dashboard">
    <aside class="rooms-sidebar" aria-label="ROOMS overview">
      <div class="rooms-brand-block">
        <p class="meta">fleet cockpit</p>
        <p>Illustrated rooms make the mesh legible without exposing the machine room.</p>
      </div>

      <div class="rooms-stats">
        {#each fleetStats as stat (stat.label)}
          <div class="rooms-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        {/each}
      </div>

      <div class="rooms-nav-list">
        {#each roomNodes as room (room.id)}
          <button class:active={selectedId === room.id} type="button" onclick={() => (selectedId = room.id)}>
            <span class="rooms-dot {room.tone}"></span>
            <span>
              <strong>{room.name}</strong>
              <small>{room.room}</small>
            </span>
          </button>
        {/each}
      </div>
    </aside>

    <main class="rooms-stage" aria-label="ROOMS visual stage">
      <div class="rooms-grid-stage">
        {#each roomNodes as room (room.id)}
          <button class:active={selectedId === room.id} class="illustrated-room" type="button" onclick={() => (selectedId = room.id)}>
            <span class="room-card-head">
              <span>
                <span class="meta">{room.machine}</span>
                <strong>{room.room}</strong>
              </span>
              <span class="status" class:warn={room.tone === 'warn'}>{room.status}</span>
            </span>
            <img src={room.asset} alt="{room.name} illustrated room" loading="lazy" />
            <span class="room-task">{room.task}</span>
          </button>
        {/each}
      </div>
    </main>

    <aside class="rooms-detail" aria-label="Selected room detail">
      <div class="detail-character">
        <img src={selectedRoom.character} alt="{selectedRoom.name} character" />
      </div>
      <p class="meta">{selectedRoom.machine} / {selectedRoom.role}</p>
      <h2>{selectedRoom.room}</h2>
      <p>{selectedRoom.theme}</p>

      <div class="progress-wrap" aria-label="Task progress">
        <span style={`width: ${selectedRoom.progress}%`}></span>
      </div>
      <p class="form-note">{selectedRoom.progress}% — {selectedRoom.task}</p>

      <div>
        <p class="meta">Queue</p>
        <ul class="mini-list">
          {#each selectedRoom.queue as item (item)}
            <li>{item}</li>
          {/each}
        </ul>
      </div>

      <div>
        <p class="meta">Recent files</p>
        <ul class="mini-list">
          {#each selectedRoom.recentFiles as file (file)}
            <li>{file}</li>
          {/each}
        </ul>
      </div>

      <div class="terminal-log">
        {#each selectedRoom.log as line (line)}
          <p>→ {line}</p>
        {/each}
      </div>
    </aside>
  </div>
</section>

<section class="section">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Product shape</p>
      <h2>Rooms are the interface. Cards are the receipt.</h2>
    </div>
    <p class="copy">The uploaded demo had the right idea: room scenes, character identity, state labels, logs, and drill-down behavior. This pass ports that shape into SvelteKit without dragging React into the stack.</p>
  </div>
  <div class="wrap room-grid compact">
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
