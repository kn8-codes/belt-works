<script>
  // ROOMS page.
  // Plain English version: show all three machines as illustrated rooms, then show details for whichever room is clicked.
  // This file controls the layout and interaction. The actual text/data lives in `src/lib/content/rooms-sample.js`.
  import { fleetStats, roomNodes } from '$lib/content/rooms-sample.js';

  // `selectedId` remembers which room is currently open in the drill-down panel.
  // `$state(...)` is Svelte 5's way of saying "this value can change and the page should update."
  let selectedId = $state(roomNodes[2].id);

  // `selectedRoom` finds the full data object for the selected room.
  // If something goes wrong, it falls back to the first room so the page does not crash.
  let selectedRoom = $derived(roomNodes.find((room) => room.id === selectedId) ?? roomNodes[0]);
</script>

<svelte:head>
  <title>ROOMS | belt.works</title>
  <meta name="description" content="A public-safe illustrated cockpit for the belt.works agent mesh." />
</svelte:head>

<!-- Main ROOMS surface. Everything inside this section is the product demo/operator cockpit. -->
<section class="rooms-shell rooms-redraft">
  <!-- Top explanation: what this page is and why it exists. -->
  <div class="rooms-topbar redraft">
    <div>
      <p class="eyebrow">ROOMS</p>
      <h1>The fleet, as rooms.</h1>
      <p class="lead lede-tight">M4. M1. Jeep. Keep all rooms visible. Click one and the page drills into the facts needed to manage it.</p>
    </div>
    <div class="rooms-live-tag">live production draft</div>
  </div>

  <!-- Short direction note. This replaces the old A/B layout toggle. -->
  <div class="rooms-option-note">
    <strong>Current direction:</strong> wall first, drill-down second. No separate A/B toggle. The rooms stay visible; the selected room opens below with status, queue, logs, files, and commit history.
  </div>

  <!-- Hybrid layout: room wall on top, selected-room details underneath. -->
  <main class="rooms-hybrid" aria-label="ROOMS fleet wall">
    <!-- The wall: all three rooms remain visible at once. -->
    <section class="rooms-wall-layout hybrid-wall" aria-label="Visible rooms">
      {#each roomNodes as room (room.id)}
        <!-- Clicking a card changes `selectedId`, which refreshes the drill-down below. -->
        <button class:active={selectedId === room.id} class="room-wall-card" type="button" onclick={() => (selectedId = room.id)}>
          <span class="room-card-head">
            <span>
              <span class="meta">{room.displayName}</span>
              <strong>{room.id.toUpperCase()}</strong>
            </span>
            <span class="status" class:warn={room.status === 'idle' || room.status === 'blocked'}>{room.status}</span>
          </span>
          <!-- SVG is currently loaded as an image. To animate internal SVG parts later, inline this SVG as a Svelte component. -->
          <img src={room.asset} alt="{room.id.toUpperCase()} illustrated room" />
          <span class="room-task">{room.taskLabel}</span>
          <span class="room-open-hint">click to inspect</span>
        </button>
      {/each}
    </section>

    <!-- Drill-down: details for the selected room. -->
    <section class="room-drilldown" aria-label="Selected room drilldown">
      <div class="drilldown-main">
        <div>
          <p class="meta">Selected room</p>
          <h2>{selectedRoom.displayName}</h2>
          <p>{selectedRoom.theme}</p>
        </div>
        <div class="drilldown-character">
          <img src={selectedRoom.character} alt="{selectedRoom.displayName} character" />
        </div>
      </div>

      <!-- Management grid: the stuff Nate needs at a glance. -->
      <div class="drilldown-grid">
        <article class="drill-card span-two">
          <div class="room-card-head">
            <div>
              <p class="meta">current work</p>
              <h3>{selectedRoom.taskLabel}</h3>
            </div>
            <span class="status" class:warn={selectedRoom.status === 'idle' || selectedRoom.status === 'blocked'}>{selectedRoom.status}</span>
          </div>
          <div class="progress-wrap" aria-label="Task progress">
            <span style={`width: ${Math.round(selectedRoom.progress * 100)}%`}></span>
          </div>
          <p class="form-note">{Math.round(selectedRoom.progress * 100)}% complete. Queue length: {selectedRoom.queueLength}. Last seen: {selectedRoom.lastSeenAt}.</p>
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
          <p class="meta">Recent artifacts</p>
          <ul class="mini-list">
            {#each selectedRoom.recentArtifacts as artifact (artifact)}
              <li>{artifact}</li>
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

<!-- Short explainer section under the cockpit. Keep this small so the rooms remain the main thing. -->
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
