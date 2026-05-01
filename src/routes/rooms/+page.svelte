<script>
  import { fleetStats, roomNodes } from '$lib/content/rooms-sample.js';

  let selectedId = $state(roomNodes[2].id);
  let layout = $state('focus');

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
      <p class="lead lede-tight">M4. M1. Jeep. Three machines, three visible rooms. The page should lead with the rooms and keep the explanations out of the way.</p>
    </div>
    <div class="layout-switch" aria-label="ROOMS layout options">
      <button class:active={layout === 'focus'} type="button" onclick={() => (layout = 'focus')}>Option A — focus</button>
      <button class:active={layout === 'wall'} type="button" onclick={() => (layout = 'wall')}>Option B — wall</button>
    </div>
  </div>

  {#if layout === 'focus'}
    <div class="rooms-option-note">
      <strong>Option A:</strong> one room gets the stage. The other two stay as quick switches. Better if ROOMS is supposed to feel like an app.
    </div>

    <div class="rooms-focus-layout">
      <aside class="rooms-node-rail" aria-label="ROOMS node selector">
        {#each roomNodes as room (room.id)}
          <button class:active={selectedId === room.id} type="button" onclick={() => (selectedId = room.id)}>
            <img src={room.character} alt="" />
            <span>
              <strong>{room.name}</strong>
              <small>{room.role}</small>
            </span>
            <span class="status" class:warn={room.tone === 'warn'}>{room.status}</span>
          </button>
        {/each}
      </aside>

      <main class="room-focus-card" aria-label="Selected room">
        <div class="focus-art-wrap">
          <img src={selectedRoom.asset} alt="{selectedRoom.name} illustrated room" />
        </div>
        <div class="focus-info">
          <p class="meta">{selectedRoom.machine} / {selectedRoom.role}</p>
          <h2>{selectedRoom.name}</h2>
          <p>{selectedRoom.theme}</p>
          <div class="progress-wrap" aria-label="Task progress">
            <span style={`width: ${selectedRoom.progress}%`}></span>
          </div>
          <p class="form-note">{selectedRoom.progress}% — {selectedRoom.task}</p>
        </div>
      </main>

      <aside class="room-side-panel" aria-label="Selected room work">
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
  {:else}
    <div class="rooms-option-note">
      <strong>Option B:</strong> all three rooms get equal weight. Better if this page is more public demo than operator cockpit.
    </div>

    <div class="rooms-wall-layout">
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
        </button>
      {/each}
    </div>

    <div class="wall-detail-strip">
      <div>
        <p class="meta">Selected</p>
        <h2>{selectedRoom.name}</h2>
        <p>{selectedRoom.theme}</p>
      </div>
      <div>
        <p class="meta">Current work</p>
        <p>{selectedRoom.task}</p>
      </div>
      <div>
        <p class="meta">Progress</p>
        <div class="progress-wrap" aria-label="Task progress">
          <span style={`width: ${selectedRoom.progress}%`}></span>
        </div>
        <p class="form-note">{selectedRoom.progress}%</p>
      </div>
    </div>
  {/if}
</section>

<section class="section rooms-short-brief">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">What this is</p>
      <h2>ROOMS is the public face of the mesh.</h2>
    </article>
    <div class="brief-list">
      <p>The rooms are the point. The rest is support.</p>
      <p>Event ledgers and public-rule blocks can come back later if they earn the space. Right now they are noise.</p>
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
