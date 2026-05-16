<script>
  import { fleetStats, roomNodes } from '$lib/content/rooms-sample.js';

  let selectedId = $state(roomNodes[1].id);
  let selectedNode = $derived(roomNodes.find((node) => node.id === selectedId) ?? roomNodes[0]);
</script>

<svelte:head>
  <title>Mesh Status | belt.works</title>
  <meta name="description" content="Public-safe status cockpit for the belt.works agent mesh." />
</svelte:head>

<section class="mesh-shell">
  <div class="mesh-hero">
    <div>
      <p class="eyebrow">Mesh status</p>
      <h1>Live-ish proof that the shop is moving.</h1>
      <p class="lead lede-tight">
        A public-safe cockpit for the belt.works working mesh: nodes, queues, commits, and artifacts. Sanitized on purpose.
        Nobody needs raw logs on the open internet. We tried that as a species. It went poorly.
      </p>
    </div>
    <div class="mesh-health-card" aria-label="Mesh health summary">
      <span class="status">public mode</span>
      <strong>{roomNodes.filter((node) => node.status === 'working').length}/{roomNodes.length}</strong>
      <p>nodes currently marked working</p>
    </div>
  </div>

  <div class="mesh-stat-strip" aria-label="Fleet statistics">
    {#each fleetStats as stat (stat.label)}
      <div class="rooms-stat">
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </div>
    {/each}
  </div>

  <main class="mesh-console" aria-label="Mesh cockpit">
    <section class="mesh-node-list" aria-label="Mesh nodes">
      {#each roomNodes as node (node.id)}
        <button class:active={selectedId === node.id} type="button" onclick={() => (selectedId = node.id)}>
          <span class="room-card-head">
            <span>
              <span class="meta">{node.role}</span>
              <strong>{node.displayName}</strong>
            </span>
            <span class="status" class:warn={node.status === 'idle' || node.status === 'blocked'}>{node.status}</span>
          </span>
          <span class="mesh-progress-label">{Math.round(node.progress * 100)}% / queue {node.queueLength}</span>
          <span class="progress-wrap" aria-label={`${node.displayName} progress`}>
            <span style={`width: ${Math.round(node.progress * 100)}%`}></span>
          </span>
          <span class="room-task">{node.taskLabel}</span>
        </button>
      {/each}
    </section>

    <section class="mesh-detail" aria-label="Selected node details">
      <div class="mesh-detail-head">
        <div>
          <p class="meta">selected node</p>
          <h2>{selectedNode.displayName}</h2>
          <p>{selectedNode.theme}</p>
        </div>
        <div class="mesh-node-id">{selectedNode.id.toUpperCase()}</div>
      </div>

      <div class="drilldown-grid mesh-grid">
        <article class="drill-card span-two">
          <p class="meta">current work</p>
          <h3>{selectedNode.taskLabel}</h3>
          <p>Last public heartbeat: {selectedNode.lastSeenAt}. Queue length: {selectedNode.queueLength}.</p>
        </article>

        <article class="drill-card">
          <p class="meta">queue</p>
          <ul class="mini-list">
            {#each selectedNode.queue as item (item)}
              <li>{item}</li>
            {/each}
          </ul>
        </article>

        <article class="drill-card">
          <p class="meta">artifacts</p>
          <ul class="mini-list">
            {#each selectedNode.recentArtifacts as artifact (artifact)}
              <li>{artifact}</li>
            {/each}
          </ul>
        </article>

        <article class="drill-card">
          <p class="meta">public log</p>
          <div class="terminal-log tall">
            {#each selectedNode.log as line (line)}
              <p>→ {line}</p>
            {/each}
          </div>
        </article>

        <article class="drill-card">
          <p class="meta">recent commits</p>
          <ul class="mini-list">
            {#each selectedNode.commits as commit (commit.hash)}
              <li><strong>{commit.hash}</strong> — {commit.message}</li>
            {/each}
          </ul>
        </article>
      </div>
    </section>
  </main>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Public boundary</p>
      <h2>Status without leaking the shop.</h2>
    </article>
    <div class="brief-list">
      <p>Show commit movement, queue shape, and node availability. Hide hostnames, private paths, client data, raw logs, and secrets.</p>
      <p>Next step: replace the static sample with a scheduled GitHub commit snapshot every six hours.</p>
    </div>
  </div>
</section>
