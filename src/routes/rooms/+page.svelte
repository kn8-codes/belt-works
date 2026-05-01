<script>
  import { fleetStats, roomNodes } from '$lib/content/rooms-sample.js';

  let selectedId = $state(roomNodes[2].id);
  let selectedRoom = $derived(roomNodes.find((room) => room.id === selectedId) ?? roomNodes[0]);
</script>

<svelte:head>
  <title>ROOMS | belt.works</title>
  <meta name="description" content="A public-safe illustrated cockpit for the belt.works agent mesh." />
</svelte:head>

<section class="rooms-shell rooms-redraft">
  <div class="rooms-topbar redraft">
    <div>
      <p class="eyebrow">ROOMS</p>
      <h1>The fleet, as rooms.</h1>
      <p class="lead lede-tight">M4. M1. Jeep. Keep all rooms visible. Click one and the page drills into the facts needed to manage it.</p>
    </div>
    <div class="rooms-live-tag">live production draft</div>
  </div>

  <div class="rooms-option-note">
    <strong>Current direction:</strong> wall first, drill-down second. No separate A/B toggle. The rooms stay visible; the selected room opens below with status, queue, logs, files, and commit history.
  </div>

  <main class="rooms-hybrid" aria-label="ROOMS fleet wall">
    <section class="rooms-wall-layout hybrid-wall" aria-label="Visible rooms">
      {#each roomNodes as room (room.id)}
        <button class:active={selectedId === room.id} class="room-wall-card" type="button" onclick={() => (selectedId = room.id)}>
          <span class="room-card-head">
            <span>
              <span class="meta">{room.machine}</span>
              <strong>{room.name}</strong>
            </span>
            <span class="status" class:warn={room.tone === 'warn'}>{room.status}</span>
          </span>
          <img src={room.asset} alt="{room.name} illustrated room" />
          <span class="room-task">{room.task}</span>
          <span class="room-open-hint">click to inspect</span>
        </button>
      {/each}
    </section>

    <section class="room-drilldown" aria-label="Selected room drilldown">
      <div class="drilldown-main">
        <div>
          <p class="meta">Selected room</p>
          <h2>{selectedRoom.name}</h2>
          <p>{selectedRoom.theme}</p>
        </div>
        <div class="drilldown-character">
          <img src={selectedRoom.character} alt="{selectedRoom.name} character" />
        </div>
      </div>

      <div class="drilldown-grid">
        <article class="drill-card span-two">
          <div class="room-card-head">
            <div>
              <p class="meta">current work</p>
              <h3>{selectedRoom.task}</h3>
            </div>
            <span class="status" class:warn={selectedRoom.tone === 'warn'}>{selectedRoom.status}</span>
          </div>
          <div class="progress-wrap" aria-label="Task progress">
            <span style={`width: ${selectedRoom.progress}%`}></span>
          </div>
          <p class="form-note">{selectedRoom.progress}% complete. This is sample state until live Towpath data is wired.</p>
        </article>

        <article class="drill-card">
          <p class="meta">Queue</p>
          <ul class="mini-list">
            {#each selectedRoom.queue as item (item)}
              <li>{item}</li>
            {/each}
          </ul>
        </article>

        <article class="drill-card">
          <p class="meta">Recent files</p>
          <ul class="mini-list">
            {#each selectedRoom.recentFiles as file (file)}
              <li>{file}</li>
            {/each}
          </ul>
        </article>

        <article class="drill-card">
          <p class="meta">Logs</p>
          <div class="terminal-log tall">
            {#each selectedRoom.log as line (line)}
              <p>→ {line}</p>
            {/each}
          </div>
        </article>

        <article class="drill-card">
          <p class="meta">Commit history</p>
          <ul class="mini-list">
            {#each selectedRoom.commits as commit (commit.hash)}
              <li><strong>{commit.hash}</strong> — {commit.message}</li>
            {/each}
          </ul>
        </article>
      </div>
    </section>
  </main>
</section>

<section class="section rooms-short-brief">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Management surface</p>
      <h2>Public enough to show. Useful enough to operate.</h2>
    </article>
    <div class="brief-list">
      <p>The wall is for orientation. The drill-down is for decisions.</p>
      <p>Next real step: inline the SVGs so queue events, logs, commits, and node state can animate individual room parts.</p>
      <div class="rooms-stats inline">
        {#each fleetStats as stat (stat.label)}
          <div class="rooms-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
