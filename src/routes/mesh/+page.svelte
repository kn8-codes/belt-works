<script>
  import meshStatusRaw from '$lib/content/mesh-status.json';
  import { fleetStats, roomNodes } from '$lib/content/rooms-sample.js';

  const meshStatus = /** @type {any} */ (meshStatusRaw);
  const recentPullRequests = /** @type {Array<any>} */ (meshStatus.recentPullRequests);
  const recentCommits = /** @type {Array<any>} */ (meshStatus.recentCommits);

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
      <span class="status" class:warn={!meshStatus.health.prTargetMet}>{meshStatus.health.label}</span>
      <strong>{meshStatus.health.prsLastWindow}/{meshStatus.polling.targetPrsPerWindow}</strong>
      <p>pull requests opened or updated in the last {meshStatus.polling.windowHours} hours</p>
    </div>
  </div>

  <div class="mesh-stat-strip" aria-label="Fleet statistics">
    {#each fleetStats as stat (stat.label)}
      <div class="rooms-stat">
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </div>
    {/each}
    <div class="rooms-stat">
      <strong>{meshStatus.health.commitsLastWindow}</strong>
      <span>commits / {meshStatus.polling.windowHours}h</span>
    </div>
    <div class="rooms-stat">
      <strong>{meshStatus.polling.cadenceHours}h</strong>
      <span>polling cadence</span>
    </div>
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
          <p class="meta">node commits</p>
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
      <p class="eyebrow">GitHub pulse</p>
      <h2>Recent public motion.</h2>
      <p>
        Snapshot generated from {meshStatus.source} at {meshStatus.generatedAt}. The target is at least one pull request across
        the public project mesh every {meshStatus.polling.windowHours} hours.
      </p>
    </article>
    <div class="brief-list">
      <article class="mono-panel">
        <p><strong>Recent pull requests</strong></p>
        {#if recentPullRequests.length}
          <ul class="mini-list flush">
            {#each recentPullRequests as pr (`${pr.repo}-${pr.number}-${pr.createdAt}`)}
              <li><a href={pr.url}>{pr.repo} #{pr.number}</a> — {pr.title} ({pr.action})</li>
            {/each}
          </ul>
        {:else}
          <p>No public pull request events in the current GitHub event window.</p>
        {/if}
      </article>

      <article class="mono-panel">
        <p><strong>Recent commits</strong></p>
        {#if recentCommits.length}
          <ul class="mini-list flush">
            {#each recentCommits as commit (`${commit.repo}-${commit.sha}`)}
              <li><a href={commit.url}>{commit.repo}@{commit.sha}</a> — {commit.message}</li>
            {/each}
          </ul>
        {:else}
          <p>No public push commits in the current GitHub event window.</p>
        {/if}
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Public boundary</p>
      <h2>Status without leaking the shop.</h2>
    </article>
    <div class="brief-list">
      <p>Show commit movement, queue shape, and node availability. Hide hostnames, private paths, client data, raw logs, and secrets.</p>
      <p>A scheduled GitHub Action refreshes the public snapshot every six hours.</p>
    </div>
  </div>
</section>
