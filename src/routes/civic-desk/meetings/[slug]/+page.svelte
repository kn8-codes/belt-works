<script>
  /** @type {{ data: { meeting: any, path: string, origin: string } }} */
  let { data } = $props();
  const meeting = $derived(data.meeting);
</script>

<svelte:head>
  <title>{meeting.title} | Towpath Civic</title>
  <meta name="description" content={meeting.summary} />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href={`${data.origin}${data.path}/`} />
</svelte:head>

<section class="section civic-reading">
  <div class="wrap">
    <a class="back-link" href="/civic-desk/meetings/">← Meetings desk</a>
    <div class="record-header">
      <div>
        <p class="eyebrow">{meeting.body}</p>
        <h1>{meeting.title}</h1>
        <p class="lead">{meeting.summary}</p>
      </div>
      <div class="record-status">
        <span class="status-badge pending">{meeting.status}</span>
        <p>{meeting.location}</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-tight civic-reading">
  <div class="wrap record-grid">
    <main>
      <article class="card large transcript-card">
        <div class="card-heading"><div><p class="eyebrow">Transcript status</p><h2>Start with the record.</h2></div><span class="status-badge pending">Not yet available</span></div>
        <p>{meeting.transcriptStatus}</p>
        <p class="transcript-note">{meeting.transcriptLabel}</p>
        <a class="button" href={`/civic-desk/meetings/${meeting.slug}/transcript/`}>Open transcript page</a>
      </article>

      <article class="card large">
        <p class="eyebrow">Meeting at a glance</p>
        <h2>What this meeting covers</h2>
        <div class="topic-row">{#each meeting.topics as topic (topic)}<span>{topic}</span>{/each}</div>
        <p class="muted-copy">This section will become the plain-language event log after the recording is captured and reviewed. It will distinguish discussion, action, and unresolved follow-up.</p>
      </article>

      <article class="card large">
        <p class="eyebrow">Next steps</p>
        <h2>What happens from here</h2>
        <ol class="step-list">{#each meeting.nextSteps as step (step)}<li>{step}</li>{/each}</ol>
      </article>
    </main>

    <aside class="record-sources">
      <div class="card source-card">
        <p class="eyebrow">Official sources</p>
        <h2>Verify the record.</h2>
        <div class="source-links">
          <a href={meeting.meetingUrl} target="_blank" rel="noopener noreferrer nofollow">Diligent meeting page ↗</a>
          <a href={meeting.agendaUrl} target="_blank" rel="noopener noreferrer nofollow">Agenda PDF ↗</a>
          <a href={meeting.packetUrl} target="_blank" rel="noopener noreferrer nofollow">Agenda packet ↗</a>
          <a href={meeting.recordingUrl} target="_blank" rel="noopener noreferrer nofollow">Public recording ↗</a>
        </div>
      </div>
      <div class="card source-card note-card">
        <p class="eyebrow">How to read this</p>
        <p>This is an independent, neutral civic record. The official packet and recording remain authoritative; this page exists to make them easier to use.</p>
        <a href="/civic-desk/corrections/">Corrections policy →</a>
      </div>
    </aside>
  </div>
</section>

<style>
  .back-link { display: inline-block; color: var(--accent); font-size: .82rem; font-weight: 800; text-decoration: none; margin-bottom: 2rem; }
  .record-header { display: grid; grid-template-columns: minmax(0, 1fr) 260px; gap: 2rem; align-items: end; }
  .record-header h1 { max-width: 900px; margin: .4rem 0 1rem; }
  .lead { max-width: 780px; color: var(--muted); line-height: 1.65; }
  .record-status { border-left: 1px solid var(--line); padding-left: 1.25rem; color: var(--muted); font-size: .82rem; line-height: 1.5; }
  .status-badge { display: inline-flex; border: 1px solid rgba(255,184,77,.5); border-radius: 99px; padding: .35rem .65rem; color: var(--accent-2); background: rgba(255,184,77,.08); font-size: .72rem; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; }
  .record-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 1rem; align-items: start; }
  main { display: grid; gap: 1rem; }
  .card-heading { display: flex; justify-content: space-between; gap: 1rem; align-items: start; }
  .transcript-card { border-color: rgba(255,184,77,.5); background: linear-gradient(180deg, rgba(255,184,77,.08), rgba(255,255,255,.02)); }
  .transcript-card > p { max-width: 760px; color: var(--muted); line-height: 1.6; }
  .transcript-note { color: var(--accent-2) !important; }
  .topic-row { display: flex; flex-wrap: wrap; gap: .45rem; }
  .topic-row span { padding: .38rem .58rem; border: 1px solid var(--line); border-radius: 4px; color: var(--muted); font-size: .74rem; }
  .muted-copy { color: var(--muted); line-height: 1.6; max-width: 760px; margin-top: 1.25rem; }
  .step-list { display: grid; gap: .8rem; color: var(--muted); line-height: 1.55; padding-left: 1.25rem; }
  .step-list li::marker { color: var(--accent); font-weight: 900; }
  .record-sources { display: grid; gap: 1rem; position: sticky; top: 1rem; }
  .source-links { display: grid; gap: .85rem; margin-top: 1rem; }
  .source-links a, .note-card a { color: var(--accent); font-size: .82rem; font-weight: 800; text-decoration: none; line-height: 1.4; }
  .note-card p { color: var(--muted); line-height: 1.55; }
  @media (max-width: 800px) { .record-header, .record-grid { grid-template-columns: 1fr; } .record-status { border-left: 0; border-top: 1px solid var(--line); padding: 1rem 0 0; } .record-sources { position: static; } }
  @media (max-width: 520px) { .card-heading { display: grid; } }
</style>
