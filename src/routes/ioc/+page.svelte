<svelte:head>
  <title>IOC.Belt — Scam behavior, evidence, and interruption | belt.works</title>
  <meta
    name="description"
    content="A planning-stage Belt.works research surface for evidence-graded scam playbooks, uncertainty, corrections, and safer next actions."
  />
  <link rel="canonical" href="https://ioc.belt.works/" />
  <meta property="og:url" content="https://ioc.belt.works/" />
</svelte:head>

<section class="ioc-hero">
  <div class="wrap">
    <div class="status-line">
      <span class="status warn">Synthetic proof · planning stage</span>
      <span>Updated 2026-08-12</span>
    </div>
    <p class="eyebrow">ioc.belt.works</p>
    <h1>See the sequence. Interrupt the harm.</h1>
    <p class="lead">
      IOC.Belt is a research surface for evidence-graded scam playbooks: what happened, what is known,
      what remains uncertain, and where one reversible action can stop an irreversible loss.
    </p>

    <div class="actions">
      <a class="button" href="https://ioc.belt.works/playbooks/impersonation/protect-your-money">Open the synthetic playbook</a>
      <a class="button secondary" href="https://ioc.belt.works/method">Read the method</a>
    </div>
  </div>
</section>

<section class="pause-strip" aria-labelledby="sequence-title">
  <div class="wrap">
    <div class="section-intro">
      <p class="eyebrow">The working unit</p>
      <h2 id="sequence-title">A scam is often a sequence, not a bad link.</h2>
    </div>

    <ol class="sequence" aria-label="Example scam sequence">
      <li><span>01</span><strong>Unexpected contact</strong></li>
      <li><span>02</span><strong>Trust or authority</strong></li>
      <li><span>03</span><strong>Channel move</strong></li>
      <li><span>04</span><strong>Urgency and isolation</strong></li>
      <li class="gate"><span>05</span><strong>Irreversible request</strong><em>Pause here</em></li>
    </ol>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large frame-card">
      <p class="eyebrow">What this is</p>
      <h2>Evidence for a safer next move.</h2>
      <p>
        IOC.Belt keeps behavior, technical artifacts, chronology, source quality, and participant exposure
        in one legible record. It separates observed facts from reports, inferences, and unresolved claims.
      </p>
      <a class="text-link" href="https://ioc.belt.works/method">How evidence is handled →</a>
    </article>

    <article class="card large frame-card limits">
      <p class="eyebrow">What this is not</p>
      <h2>No certainty theater.</h2>
      <ul class="list">
        <li>No public accusation registry.</li>
        <li>No “clean means safe” verdict.</li>
        <li>No live intake, upload, account, feed, or API.</li>
        <li>No attribution from a phone number, wallet, handle, or caller ID alone.</li>
      </ul>
    </article>
  </div>
</section>

<section class="section system-section">
  <div class="wrap">
    <div class="section-intro">
      <p class="eyebrow">Place in the system</p>
      <h2>Observation becomes action only through review.</h2>
    </div>

    <div class="system-flow" aria-label="Data Belt to protective action flow">
      <article>
        <span>01</span>
        <h3>Data.Belt</h3>
        <p>Provenance and trustworthy data shaping.</p>
      </article>
      <div aria-hidden="true">→</div>
      <article class="active">
        <span>02</span>
        <h3>IOC.Belt</h3>
        <p>Evidence-graded playbooks, lifecycle, uncertainty, and corrections.</p>
      </article>
      <div aria-hidden="true">→</div>
      <article>
        <span>03</span>
        <h3>Interruption Desk</h3>
        <p>Human review at the current irreversible gate.</p>
      </article>
      <div aria-hidden="true">→</div>
      <article>
        <span>04</span>
        <h3>Anti-Scam Toolkit</h3>
        <p>Repeatable protective actions shown to be useful.</p>
      </article>
    </div>
  </div>
</section>

<section class="section current-state">
  <div class="narrow">
    <p class="eyebrow">Current state</p>
    <h2>The method is being tested before the service exists.</h2>
    <p class="lead">
      This synthetic public proof uses one wholly fictional tabletop. No participant, account, institution, domain,
      wallet, caller, or suspect is represented. Real intake is closed.
    </p>
    <div class="kicker-row" aria-label="Current project boundaries">
      <span class="pill">synthetic data only</span>
      <span class="pill">human-reviewed</span>
      <span class="pill">correction-ready</span>
      <span class="pill">public research surface</span>
    </div>
  </div>
</section>

<style>
  .ioc-hero {
    padding: clamp(4.5rem, 12vw, 9rem) 0 4rem;
    border-bottom: 1px solid var(--line);
    background:
      linear-gradient(90deg, rgba(215, 255, 99, 0.04) 1px, transparent 1px),
      linear-gradient(rgba(215, 255, 99, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  .ioc-hero h1 { max-width: 980px; font-size: clamp(3rem, 9vw, 7rem); }
  .status-line { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem; margin-bottom: 2.5rem; color: var(--muted); font-size: .75rem; text-transform: uppercase; letter-spacing: .09em; }
  .pause-strip { padding: clamp(3rem, 8vw, 5rem) 0; border-bottom: 1px solid var(--line); background: #080807; }
  .section-intro { max-width: 780px; margin-bottom: 2rem; }
  .sequence { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); border: 1px solid var(--line); }
  .sequence li { position: relative; min-height: 150px; padding: 1rem; border-right: 1px solid var(--line); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem; color: var(--muted); }
  .sequence li:last-child { border-right: 0; }
  .sequence span, .system-flow span { color: var(--muted); font-size: .72rem; letter-spacing: .12em; }
  .sequence strong { color: var(--text); font-size: clamp(.9rem, 1.5vw, 1.05rem); line-height: 1.35; }
  .sequence .gate { background: var(--accent); color: #10100d; }
  .sequence .gate span, .sequence .gate strong { color: #10100d; }
  .sequence em { color: #10100d; font-style: normal; font-weight: 900; text-transform: uppercase; letter-spacing: .1em; font-size: .74rem; }
  .frame-card { position: relative; }
  .frame-card::before { content: ''; position: absolute; left: -1px; top: -1px; width: 34px; border-top: 3px solid var(--accent); }
  .frame-card p { color: var(--muted); line-height: 1.65; }
  .limits::before { border-color: var(--accent-2); }
  .text-link { display: inline-block; margin-top: 1rem; color: var(--accent); font-weight: 800; text-underline-offset: .25rem; }
  .system-section { background: rgba(255,255,255,.012); }
  .system-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; align-items: stretch; gap: .7rem; }
  .system-flow > div { display: grid; place-items: center; color: var(--muted); }
  .system-flow article { border: 1px solid var(--line); padding: 1rem; min-width: 0; }
  .system-flow article.active { border-color: var(--accent); background: rgba(215,255,99,.06); }
  .system-flow h3 { margin-top: 1.5rem; }
  .system-flow p { color: var(--muted); line-height: 1.45; margin-bottom: 0; }
  .current-state { border-bottom: 0; }


  @media (max-width: 900px) {
    .sequence { grid-template-columns: 1fr; }
    .sequence li { min-height: auto; border-right: 0; border-bottom: 1px solid var(--line); }
    .sequence li:last-child { border-bottom: 0; }
    .system-flow { grid-template-columns: 1fr; }
    .system-flow > div { transform: rotate(90deg); min-height: 1.5rem; }
  }
</style>
