<script>
  /** @type {{ data: { meeting: any, path: string, origin: string } }} */
  let { data } = $props();
  const meeting = $derived(data.meeting);
</script>

<svelte:head>
  <title>Transcript status — {meeting.title} | Towpath Civic</title>
  <meta name="description" content={`Transcript status for ${meeting.title}.`} />
  <link rel="canonical" href={`${data.origin}${data.path}/`} />
</svelte:head>

<section class="section civic-reading">
  <div class="wrap transcript-page">
    <a class="back-link" href={`/civic-desk/meetings/${meeting.slug}/`}>← Back to meeting record</a>
    <p class="eyebrow">Transcript status</p>
    <h1>{meeting.title}</h1>
    <div class="card status-panel">
      <span class="status-badge pending">Official transcript not identified</span>
      <h2>The working transcript comes first.</h2>
      <p>{meeting.transcriptStatus}</p>
      <p>When the public recording is available, Towpath Civic will publish a clearly labeled working transcript here before treating the meeting as fully summarized. It will include the recording source, transcription method, date prepared, uncertain passages, and a correction route.</p>
      <div class="status-actions">
        <a class="button" href={meeting.recordingUrl} target="_blank" rel="noopener noreferrer nofollow">Check public recording ↗</a>
        <a class="button secondary" href={meeting.meetingUrl} target="_blank" rel="noopener noreferrer nofollow">Check official meeting page ↗</a>
      </div>
    </div>
    <div class="grid two">
      <article class="card">
        <p class="eyebrow">What this is not</p>
        <p class="muted-copy">This page does not imply that a district transcript exists, and any future working transcript will not be presented as an official district document.</p>
      </article>
      <article class="card">
        <p class="eyebrow">What will change</p>
        <p class="muted-copy">Once the recording is captured and processed, this page becomes the resident-facing transcript with timestamps, uncertainty notes, and links into the meeting brief.</p>
      </article>
    </div>
  </div>
</section>

<style>
  .transcript-page { max-width: 960px; }
  .back-link { display: inline-block; color: var(--accent); font-size: .82rem; font-weight: 800; text-decoration: none; margin-bottom: 2rem; }
  .status-panel { margin-top: 2rem; border-color: rgba(255,184,77,.5); background: linear-gradient(180deg, rgba(255,184,77,.08), rgba(255,255,255,.02)); }
  .status-panel h2 { margin: 1rem 0 .8rem; }
  .status-panel p { max-width: 760px; color: var(--muted); line-height: 1.65; }
  .status-badge { display: inline-flex; border: 1px solid rgba(255,184,77,.5); border-radius: 99px; padding: .35rem .65rem; color: var(--accent-2); background: rgba(255,184,77,.08); font-size: .72rem; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; }
  .status-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 1.5rem; }
  .muted-copy { color: var(--muted); line-height: 1.6; }
</style>
