<svelte:head>
  <title>Method — IOC.Belt | belt.works</title>
  <meta
    name="description"
    content="How IOC.Belt separates evidence, uncertainty, lifecycle, corrections, and intervention without certifying safety or publishing private case material."
  />
  <link rel="canonical" href="https://ioc.belt.works/method" />
  <meta property="og:url" content="https://ioc.belt.works/method" />
</svelte:head>

<section class="method-hero">
  <div class="narrow">
    <a class="back-link" href="https://ioc.belt.works/">← IOC.Belt</a>
    <p class="eyebrow">Method · synthetic V0</p>
    <h1>Show the basis. Preserve the uncertainty.</h1>
    <p class="lead">
      A useful assessment says what happened, where each claim came from, how strong the support is, what
      remains unknown, and which action is safe to take before certainty arrives.
    </p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div>
        <p class="eyebrow">Epistemic types</p>
        <h2>Not every sentence is the same kind of claim.</h2>
      </div>
      <p class="copy">The label follows the claim through review, correction, and publication.</p>
    </div>

    <div class="claim-grid">
      <article>
        <span class="claim-code">OBSERVED_FACT</span>
        <h3>Directly present in reviewed material</h3>
        <p>Example: a message requests a cryptocurrency transfer.</p>
      </article>
      <article>
        <span class="claim-code">SOURCE_REPORT</span>
        <h3>Reported by a named source</h3>
        <p>Example: an official warning describes the same payment mechanism.</p>
      </article>
      <article>
        <span class="claim-code inference">ANALYST_INFERENCE</span>
        <h3>Reasoned from facts and reports</h3>
        <p>Example: the sequence is highly consistent with impersonation fraud.</p>
      </article>
      <article>
        <span class="claim-code unresolved">UNRESOLVED_CLAIM</span>
        <h3>Asserted but not established</h3>
        <p>Example: the caller controls the account or infrastructure shown.</p>
      </article>
    </div>
  </div>
</section>

<section class="section analysis-section">
  <div class="wrap">
    <p class="eyebrow">Five analysis lanes</p>
    <h2>One episode. Five checks.</h2>

    <ol class="lane-list">
      <li><span>01 / claim</span><strong>Verify the specific story through an independently found official route.</strong></li>
      <li><span>02 / behavior</span><strong>Map trust, pressure, isolation, channel changes, and requested actions.</strong></li>
      <li><span>03 / technical</span><strong>State what artifacts establish—and what they cannot establish.</strong></li>
      <li><span>04 / chronology</span><strong>Compare the sequence with qualified public, platform, court, and official reporting.</strong></li>
      <li><span>05 / exposure</span><strong>Find what has already happened and which containment step cannot wait.</strong></li>
    </ol>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Evidence strength</p>
      <h2>Corroboration changes confidence—not identity by magic.</h2>
      <ol class="evidence-scale">
        <li><span>01</span>Participant-reported</li>
        <li><span>02</span>Community-reported</li>
        <li><span>03</span>Repeated or correlated reports</li>
        <li><span>04</span>Technical or infrastructure correlation</li>
        <li><span>05</span>Platform or institution confirmation</li>
        <li><span>06</span>Regulator, law enforcement, or court finding</li>
      </ol>
    </article>

    <article class="card large lifecycle-card">
      <p class="eyebrow">Lifecycle</p>
      <h2>Every record can change.</h2>
      <div class="state-cloud" aria-label="Publication lifecycle states">
        <span>synthetic</span>
        <span>draft internal</span>
        <span>review required</span>
        <span>active public</span>
        <span>disputed</span>
        <span>corrected</span>
        <span>expired</span>
        <span>withdrawn</span>
      </div>
      <p>
        Public records require a review date, responsible reviewer, current state, and correction history.
        Stale or disproven material is not quietly left to rot.
      </p>
    </article>
  </div>
</section>

<section class="section separation-section">
  <div class="wrap">
    <div class="section-intro">
      <p class="eyebrow">Privacy boundary</p>
      <h2>Two ledgers. Never one database.</h2>
      <p class="lead">Help cannot be conditional on research consent. There is no automatic pipeline.</p>
    </div>

    <div class="separation-flow">
      <article>
        <span class="status danger">Private</span>
        <h3>Case Vault</h3>
        <p>Minimum evidence for one person’s assistance. Short retention. No publication or training.</p>
      </article>
      <div class="consent-gate">
        <strong>Separate, optional consent</strong>
        <span>after assistance</span>
      </div>
      <article>
        <span class="status warn">De-identified</span>
        <h3>Pattern Ledger</h3>
        <p>Stages, tactics, evidence states, intervention, and outcome—only if safely consented and minimized.</p>
      </article>
      <div class="consent-gate">
        <strong>Publication review</strong>
        <span>no automatic export</span>
      </div>
      <article>
        <span class="status">Public-safe</span>
        <h3>IOC.Belt</h3>
        <p>Methodology, aggregate findings, synthetic examples, reviewed playbooks, and corrections.</p>
      </article>
    </div>
  </div>
</section>

<section class="section limits-section">
  <div class="narrow">
    <p class="eyebrow">V0 boundaries</p>
    <h2>The exclusions are part of the method.</h2>
    <div class="limits-grid">
      <p>No real submissions</p>
      <p>No public identifiers</p>
      <p>No named suspect profiles</p>
      <p>No automated final verdict</p>
      <p>No continuous collection</p>
      <p>No recovery or tracing</p>
      <p>No suspect engagement</p>
      <p>No “safe” certification</p>
    </div>
    <div class="actions">
      <a class="button" href="https://ioc.belt.works/playbooks/impersonation/protect-your-money">Apply the method to SYN-001</a>
      <a class="button secondary" href="https://ioc.belt.works/">Back to IOC.Belt</a>
    </div>
  </div>
</section>

<style>
  .method-hero { padding: clamp(4rem, 10vw, 8rem) 0 4rem; border-bottom: 1px solid var(--line); }
  .back-link { display: inline-block; margin-bottom: 3rem; color: var(--muted); text-underline-offset: .25rem; }
  .section-intro { max-width: 780px; margin-bottom: 2rem; }
  .claim-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border: 1px solid var(--line); }
  .claim-grid article { padding: clamp(1.2rem, 3vw, 2rem); min-height: 210px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .claim-grid article:nth-child(2n) { border-right: 0; }
  .claim-grid article:nth-last-child(-n+2) { border-bottom: 0; }
  .claim-grid p, .lifecycle-card p { color: var(--muted); line-height: 1.55; }
  .claim-code { display: inline-block; color: var(--accent); border: 1px solid var(--accent); padding: .3rem .45rem; margin-bottom: 2rem; font-size: .7rem; letter-spacing: .08em; }
  .claim-code.inference { color: var(--accent-2); border-color: var(--accent-2); }
  .claim-code.unresolved { color: var(--muted); border-color: var(--line); }
  .analysis-section { background: #080807; }
  .lane-list { list-style: none; padding: 0; margin: 2rem 0 0; border-top: 1px solid var(--line); }
  .lane-list li { display: grid; grid-template-columns: 190px 1fr; gap: 1rem; padding: 1.25rem 0; border-bottom: 1px solid var(--line); }
  .lane-list span { color: var(--accent); text-transform: uppercase; letter-spacing: .09em; font-size: .76rem; }
  .lane-list strong { line-height: 1.45; }
  .evidence-scale { list-style: none; padding: 0; margin: 1.5rem 0 0; display: grid; gap: .55rem; }
  .evidence-scale li { display: flex; gap: .8rem; color: var(--muted); border-left: 2px solid var(--line); padding-left: .75rem; }
  .evidence-scale span { color: var(--muted); }
  .state-cloud { display: flex; flex-wrap: wrap; gap: .5rem; margin: 1.5rem 0; }
  .state-cloud span { border: 1px solid var(--line); padding: .45rem .6rem; color: var(--muted); font-size: .78rem; }
  .state-cloud span:nth-child(1), .state-cloud span:nth-child(4) { border-color: var(--accent); color: var(--accent); }
  .separation-section { background: rgba(255,255,255,.012); }
  .separation-flow { display: grid; grid-template-columns: 1fr 150px 1fr 150px 1fr; align-items: stretch; }
  .separation-flow article { border: 1px solid var(--line); padding: 1.2rem; }
  .separation-flow article p { color: var(--muted); line-height: 1.5; }
  .separation-flow h3 { margin-top: 1.5rem; }
  .consent-gate { display: flex; flex-direction: column; justify-content: center; text-align: center; color: var(--accent-2); padding: .75rem; font-size: .75rem; text-transform: uppercase; letter-spacing: .07em; }
  .consent-gate span { color: var(--muted); margin-top: .35rem; text-transform: none; letter-spacing: 0; }
  .limits-section { border-bottom: 0; }
  .limits-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: .65rem; margin-top: 2rem; }
  .limits-grid p { margin: 0; padding: .75rem; border-left: 2px solid var(--accent-2); color: var(--muted); }


  @media (max-width: 820px) {
    .claim-grid, .limits-grid { grid-template-columns: 1fr; }
    .claim-grid article { border-right: 0; border-bottom: 1px solid var(--line) !important; }
    .claim-grid article:last-child { border-bottom: 0 !important; }
    .lane-list li { grid-template-columns: 1fr; }
    .separation-flow { grid-template-columns: 1fr; }
    .consent-gate { min-height: 88px; }
  }
</style>
