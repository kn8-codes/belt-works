<script>
  /** @type {{ data: { meetings: any[], path: string, origin: string } }} */
  let { data } = $props();
  const meetings = $derived(data.meetings);
  const path = $derived(data.path);
</script>

<svelte:head>
  <title>Meetings desk | Towpath Civic</title>
  <meta name="description" content="Meeting records, transcript status, agendas, and plain-language follow-through for local government and public bodies." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href={`${data.origin}${path}/`} />
</svelte:head>

<section class="section civic-reading">
  <div class="wrap narrow-intro">
    <p class="eyebrow">Meetings desk</p>
    <h1>Make the meeting legible.</h1>
    <p class="lead">Meetings are where public decisions become real. Each record puts the agenda, recording, transcript status, decisions, unresolved questions, and next steps in one place.</p>
    <div class="status-key" aria-label="Meeting status key">
      <span><i class="dot pending"></i> recording or transcript pending</span>
      <span><i class="dot ready"></i> ready for resident reading</span>
    </div>
  </div>
</section>

<section class="section section-tight civic-reading">
  <div class="wrap">
    <div class="section-head compact-head">
      <div>
        <p class="eyebrow">Featured coverage</p>
        <h2>Start with Akron Public Schools.</h2>
      </div>
      <p class="lead">The first school-board record is designed as a repeatable template, not a one-off article.</p>
    </div>
    <div class="meeting-list">
      {#each meetings as meeting (meeting.id)}
        <article class="card meeting-card">
          <div class="meeting-card-main">
            <div class="meta-row"><span class="status-badge pending">{meeting.status}</span><span class="meta">{meeting.date}</span></div>
            <p class="meta">{meeting.body}</p>
            <h2><a href={`/civic-desk/meetings/${meeting.slug}/`}>{meeting.title}</a></h2>
            <p class="meeting-summary">{meeting.summary}</p>
            <div class="topic-row" aria-label="Meeting topics">
              {#each meeting.topics as topic (topic)}<span>{topic}</span>{/each}
            </div>
          </div>
          <div class="meeting-card-side">
            <p class="eyebrow">Transcript</p>
            <p class="side-copy">{meeting.transcriptStatus}</p>
            <a class="button" href={`/civic-desk/meetings/${meeting.slug}/`}>Open meeting record</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section section-tight civic-reading">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">What belongs here</p>
      <h2>Not just minutes.</h2>
      <p>A meeting record should help a resident understand what was proposed, what changed, what passed, what did not, and what to watch next. The official packet remains the source; this desk makes it navigable.</p>
    </article>
    <article class="card large">
      <p class="eyebrow">How we handle uncertainty</p>
      <h2>Label the gaps.</h2>
      <p>When no official transcript is available, we say so plainly and publish a working transcript from the public recording with its method, date, uncertain passages, and correction route.</p>
    </article>
  </div>
</section>

<style>
  .narrow-intro { max-width: 900px; }
  .lead { max-width: 760px; color: var(--muted); line-height: 1.65; }
  .status-key { display: flex; flex-wrap: wrap; gap: 1rem 1.5rem; margin-top: 1.5rem; color: var(--muted); font-size: .78rem; }
  .dot { display: inline-block; width: .65rem; height: .65rem; border-radius: 50%; margin-right: .4rem; background: var(--accent); }
  .dot.pending { background: var(--accent-2); }
  .dot.ready { background: #7bd88f; }
  .section-tight { padding-top: 2rem; }
  .compact-head { align-items: end; }
  .meeting-list { display: grid; gap: 1rem; }
  .meeting-card { display: grid; grid-template-columns: minmax(0, 1fr) minmax(240px, .4fr); gap: 2rem; }
  .meta-row { display: flex; align-items: center; flex-wrap: wrap; gap: .75rem; }
  .status-badge { display: inline-flex; border: 1px solid var(--line); border-radius: 99px; padding: .35rem .65rem; font-size: .72rem; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; }
  .status-badge.pending { color: var(--accent-2); border-color: rgba(255,184,77,.5); background: rgba(255,184,77,.08); }
  .meeting-card h2 { margin: .7rem 0 .7rem; font-size: clamp(1.45rem, 3vw, 2.35rem); }
  .meeting-card h2 a { color: inherit; text-decoration: none; }
  .meeting-card h2 a:hover { color: var(--accent); }
  .meeting-summary, .side-copy { color: var(--muted); line-height: 1.6; }
  .meeting-card-side { border-left: 1px solid var(--line); padding-left: 1.5rem; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
  .topic-row { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: 1.1rem; }
  .topic-row span { padding: .35rem .55rem; border: 1px solid var(--line); border-radius: 4px; color: var(--muted); font-size: .72rem; }
  @media (max-width: 700px) { .meeting-card { grid-template-columns: 1fr; } .meeting-card-side { border-left: 0; border-top: 1px solid var(--line); padding: 1.25rem 0 0; } }
</style>
