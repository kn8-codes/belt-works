<script>
  const modules = [
    {
      number: '01',
      title: 'Beyond the chat window',
      time: '6 min',
      description: 'See what changes when an AI tool can inspect project files, use tools and propose edits instead of only answering a question.'
    },
    {
      number: '02',
      title: 'Is this job ready?',
      time: '7 min',
      description: 'Separate a bounded, reviewable task from work that is still too vague, sensitive or consequential.'
    },
    {
      number: '03',
      title: 'Inspect and bound the job',
      time: '9 min',
      description: 'Read the project evidence, name the allowed file, preserve unknowns and state the stop conditions.'
    },
    {
      number: '04',
      title: 'Visible diff, real check, human decision',
      time: '12 min',
      description: 'Review one prepared change, run its named check, state the check’s limits and make the final decision yourself.',
      featured: true
    },
    {
      number: '05',
      title: 'Reject the plausible wrong answer',
      time: '8 min',
      description: 'Catch a polished result that invents details or crosses the task boundary.'
    },
    {
      number: '06',
      title: 'Plan one safe next experiment',
      time: '8 min',
      description: 'Turn the evidence into one useful next step without escalating into an autonomous production system.'
    }
  ];

  const includedAssets = [
    { label: 'Fictional local project', state: 'prepared', tone: 'ready' },
    { label: 'Bounded task packet', state: 'prepared', tone: 'ready' },
    { label: 'Starter and reviewed fixtures', state: 'prepared', tone: 'ready' },
    { label: 'Named dependency-free check', state: 'verified', tone: 'ready' },
    { label: 'Diff and decision checklist', state: 'prepared', tone: 'ready' },
    { label: 'Six edited video modules', state: 'in production', tone: 'working' },
    { label: 'Captions and reviewed transcript', state: 'planned', tone: 'planned' },
    { label: 'Low-bandwidth/download variants', state: 'planned', tone: 'planned' }
  ];

  const faqs = [
    {
      question: 'Do I need coding or Git experience?',
      answer: 'Not for the bounded course exercise. You should be comfortable using a computer, opening files and following a short terminal command. This is not a phone-only hands-on course.'
    },
    {
      question: 'Does the course include Claude Code access?',
      answer: 'No. Hands-on participation requires separate valid Claude Code access, plus a computer and internet connection. Current vendor access and cost will be rechecked before enrollment opens.'
    },
    {
      question: 'What does the named check prove?',
      answer: 'Only its named conditions: the required confirmed facts are present, the two uncertainties remain explicit and a few known unsupported claims are absent. It does not prove every detail is correct, the notes are complete or publication is authorized.'
    },
    {
      question: 'Can I use a private work or client project?',
      answer: 'Not for the course exercise. The provided project is fictional and dependency-free. Do not bring credentials, private repositories, regulated records or consequential production systems into a first learning task.'
    },
    {
      question: 'Is this an official Anthropic course?',
      answer: 'No. This is an independent Belt.works course. It is not affiliated with, certified by or endorsed by Anthropic.'
    },
    {
      question: 'When will enrollment open?',
      answer: 'Only after the representative sample, complete course assets, accessibility materials, price/refund/access terms and purchase-to-access smoke tests pass. There is no public enrollment date yet.'
    }
  ];
</script>

<svelte:head>
  <title>Claude Code Course for AI Chat Users | Beyond the Chat Window</title>
  <meta
    name="description"
    content="Learn one controlled way to give Claude Code a bounded project-file task, inspect the diff, run a named check and make the final decision yourself."
  />
  <meta name="robots" content="noindex,nofollow" />
  <meta property="og:title" content="Claude Code: Beyond the Chat Window" />
  <meta
    property="og:description"
    content="A short, evidence-led course for existing AI-chat users at the project-file threshold."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<section class="hero course-hero" aria-labelledby="course-title">
  <div class="wrap course-hero__grid">
    <div>
      <div class="status-row" aria-label="Course production status">
        <span class="status">In production</span>
        <span class="status status-neutral">Private implementation preview</span>
      </div>
      <p class="eyebrow">Claude Code course · project-aware software fluency</p>
      <h1 id="course-title">Beyond the chat window.</h1>
      <p class="lead course-lede">
        Learn one controlled way to give Claude Code a bounded project-file job, inspect what changed,
        run a named check and make the final call yourself.
      </p>
      <div class="actions">
        <a class="button" href="#proof">Inspect the course proof</a>
        <a class="button secondary" href="#curriculum">Review the six modules</a>
      </div>
      <p class="microcopy">
        No price or enrollment yet. The evidence and prerequisites will remain available without an email address.
      </p>
    </div>

    <aside class="card large course-facts" aria-label="Course facts">
      <p class="meta">Current product frame</p>
      <dl>
        <div>
          <dt>Format</dt>
          <dd>Six short recorded modules</dd>
        </div>
        <div>
          <dt>Target length</dt>
          <dd>About 50 minutes</dd>
        </div>
        <div>
          <dt>Pace-setting learner</dt>
          <dd>Already uses AI chat</dd>
        </div>
        <div>
          <dt>Hands-on burden</dt>
          <dd>Computer, internet and separate Claude Code access</dd>
        </div>
        <div>
          <dt>Current state</dt>
          <dd>Fixture verified; recording not complete</dd>
        </div>
      </dl>
    </aside>
  </div>
</section>

<section class="section threshold" aria-labelledby="threshold-title">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">The threshold</p>
      <h2 id="threshold-title">A chat answer cannot quietly change your files.</h2>
    </div>
    <p class="lead">
      A project-aware coding agent can inspect a folder, run commands and propose edits. That can be useful.
      It also means the operator needs a boundary, visible evidence and a real decision—not better vibes.
    </p>
  </div>

  <div class="wrap threshold-grid">
    <article class="card large threshold-card">
      <p class="meta">Inside a chat window</p>
      <h3>You evaluate an answer.</h3>
      <ul class="list">
        <li>The model responds in the conversation.</li>
        <li>Your project files do not change automatically.</li>
        <li>The answer may still be wrong, but the effect is contained.</li>
      </ul>
    </article>
    <article class="card large threshold-card threshold-card--active">
      <p class="meta">Inside a project</p>
      <h3>You supervise an action.</h3>
      <ul class="list">
        <li>The tool may read files and run commands.</li>
        <li>A plausible result may still cross scope or invent facts.</li>
        <li>The diff, check limits and human decision become part of the work.</li>
      </ul>
    </article>
  </div>
</section>

<section class="section proof-section" id="proof" aria-labelledby="proof-title">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Inspect the proof</p>
      <h2 id="proof-title">One file. Two unresolved questions. No guessing.</h2>
    </div>
    <p class="lead">
      The representative exercise uses a fictional Neighborhood Skills Day project. The task is deliberately
      small enough to inspect: read the notes and modify only <code>FAQ.md</code>.
    </p>
  </div>

  <div class="wrap proof-layout">
    <article class="mono-panel task-panel" aria-labelledby="task-title">
      <p class="meta">Task packet · prepared</p>
      <h3 id="task-title">The allowed job</h3>
      <dl class="task-ledger">
        <div>
          <dt>Objective</dt>
          <dd>Move confirmed date, time and location into the FAQ.</dd>
        </div>
        <div>
          <dt>Allowed file</dt>
          <dd><code>FAQ.md</code></dd>
        </div>
        <div>
          <dt>Preserve</dt>
          <dd>Conflicting admission notes and unconfirmed parking as <code>OPEN QUESTION</code>.</dd>
        </div>
        <div>
          <dt>Do not</dt>
          <dd>Invent contact, accessibility, registration, transit, food or weather details.</dd>
        </div>
      </dl>
    </article>

    <div class="evidence-stack">
      <article class="card large evidence-card">
        <p class="meta">Reviewed fixture excerpt</p>
        <p class="evidence-line"><strong>Confirmed:</strong> Saturday, September 12 · 10:00 a.m.–2:00 p.m.</p>
        <p class="evidence-line"><strong>Confirmed:</strong> Summit Lake Community Center</p>
        <p class="evidence-line evidence-line--open"><strong>Open:</strong> free admission or a $5 suggested donation</p>
        <p class="evidence-line evidence-line--open"><strong>Open:</strong> south-lot parking is mentioned but unconfirmed</p>
      </article>

      <article class="card large check-card">
        <p class="meta">Named check · verified fixture</p>
        <pre><code>python3 tests/check_faq.py \
  --file fixtures/FAQ.completed.md</code></pre>
        <p class="check-result"><span aria-hidden="true">✓</span> Reviewed fixture passes the named conditions.</p>
      </article>
    </div>
  </div>

  <div class="wrap limit-panel">
    <p class="eyebrow">The important limit</p>
    <h3>A passing check is necessary. It is not universal truth.</h3>
    <p>
      This check can confirm that required facts appear, uncertainties remain explicit and a few known unsupported
      claims are absent. It cannot prove that every event detail is correct, that the notes are complete or that
      publication is authorized.
    </p>
  </div>

  <div class="wrap decision-grid" aria-label="Human decision options">
    <article class="decision-card">
      <span class="decision-mark">A</span>
      <div>
        <p class="meta">Accept</p>
        <p>The evidence supports the bounded change as it stands.</p>
      </div>
    </article>
    <article class="decision-card">
      <span class="decision-mark">R</span>
      <div>
        <p class="meta">Revise</p>
        <p>The direction is useful, but a named issue needs correction.</p>
      </div>
    </article>
    <article class="decision-card">
      <span class="decision-mark">X</span>
      <div>
        <p class="meta">Reject</p>
        <p>The result crossed scope, invented facts or cannot be trusted.</p>
      </div>
    </article>
  </div>
</section>

<section class="section curriculum-section" id="curriculum" aria-labelledby="curriculum-title">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Six-module course</p>
      <h2 id="curriculum-title">One control loop, taught end to end.</h2>
    </div>
    <p class="lead">
      The course is intentionally compact. It teaches one supervised path instead of touring every Claude Code feature.
    </p>
  </div>

  <div class="wrap module-list">
    {#each modules as module (module.number)}
      <article class:module-featured={module.featured} class="module-row">
        <div class="module-number">{module.number}</div>
        <div class="module-copy">
          <div class="module-heading">
            <h3>{module.title}</h3>
            {#if module.featured}<span class="status">Representative sample</span>{/if}
          </div>
          <p>{module.description}</p>
        </div>
        <div class="module-time">{module.time}</div>
      </article>
    {/each}
  </div>
</section>

<section class="section fit-section" aria-labelledby="fit-title">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Readiness</p>
      <h2 id="fit-title">Check the burden before you join.</h2>
    </div>
    <p class="lead">
      “No coding experience required” does not mean no computer, no terminal or no responsibility for the result.
    </p>
  </div>

  <div class="wrap grid two">
    <article class="card large fit-card">
      <p class="eyebrow">Likely a fit</p>
      <ul class="list">
        <li>You already use an AI chat tool and want to understand project-aware work.</li>
        <li>You can use a computer, open files and follow a short terminal command.</li>
        <li>You want to inspect changes rather than hand over judgment.</li>
        <li>You are willing to practice on a fictional, low-consequence project first.</li>
      </ul>
    </article>
    <article class="card large no-fit-card">
      <p class="eyebrow">Not this course</p>
      <ul class="list">
        <li>Not phone-only hands-on training.</li>
        <li>Not autonomous production deployment or credential handling.</li>
        <li>Not comprehensive Git, programming or software-engineering training.</li>
        <li>Not certification, career placement or guaranteed productivity.</li>
      </ul>
    </article>
  </div>

  <div class="wrap burden-panel">
    <div>
      <p class="meta">Hands-on prerequisites</p>
      <h3>What you supply separately</h3>
    </div>
    <ul>
      <li>A computer capable of running Claude Code</li>
      <li>A stable-enough internet connection</li>
      <li>Separate valid Claude Code access</li>
      <li>Time to pause, inspect the diff and make a decision</li>
    </ul>
    <p class="microcopy">
      Course access will not include Claude Code access. Current vendor requirements and costs will be rechecked before enrollment opens.
    </p>
  </div>
</section>

<section class="section assets-section" aria-labelledby="assets-title">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">What exists</p>
      <h2 id="assets-title">Prepared is not the same as published.</h2>
    </div>
    <p class="lead">
      Status labels are part of the product. They prevent a planned asset from quietly becoming a sales claim.
    </p>
  </div>

  <div class="wrap asset-grid">
    {#each includedAssets as asset (asset.label)}
      <article class="asset-row">
        <span>{asset.label}</span>
        <span class:status-ready={asset.tone === 'ready'} class:status-working={asset.tone === 'working'} class:status-planned={asset.tone === 'planned'} class="asset-status">{asset.state}</span>
      </article>
    {/each}
  </div>
</section>

<section class="section trust-section" aria-labelledby="trust-title">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Why Belt.works</p>
      <h2 id="trust-title">Credibility should resolve to evidence.</h2>
    </div>
    <p class="lead">
      No invented learner counts, client logos or testimonials. The current proof is the course fixture, the operating method and public technical work you can inspect directly.
    </p>
  </div>

  <div class="wrap grid trust-grid">
    <article class="card large">
      <p class="meta">Method</p>
      <h3>Start with the work.</h3>
      <p>Define the job, build the first useful version, test it and leave the handoff legible.</p>
      <a class="text-link" href="/method">Read how Belt.works works →</a>
    </article>
    <article class="card large">
      <p class="meta">Software fluency</p>
      <h3>Retain judgment without becoming a conventional programmer.</h3>
      <p>Translate real work into boundaries, evidence and decisions a technical system can carry.</p>
      <a class="text-link" href="/blog/we-speak-software">Read “We Speak Software” →</a>
    </article>
    <article class="card large">
      <p class="meta">Agent accountability</p>
      <h3>Access should leave receipts.</h3>
      <p>Project-aware tools are useful because they sit close to the work. That closeness needs evidence.</p>
      <a class="text-link" href="/blog/coding-agents-need-egress-receipts">Read the technical note →</a>
    </article>
  </div>
</section>

<section class="section update-section" id="updates" aria-labelledby="updates-title">
  <div class="wrap update-panel">
    <div>
      <div class="status-row">
        <span class="status status-neutral">Consent system not active</span>
      </div>
      <p class="eyebrow">Optional course updates</p>
      <h2 id="updates-title">Production updates, then the enrollment notice.</h2>
      <p class="lead">
        The planned update list will cover this course’s production progress and the message that enrollment has opened.
        It will not silently subscribe people to a general Belt.works newsletter, and the course evidence will remain ungated.
      </p>
    </div>
    <aside class="consent-contract" aria-label="Planned update consent boundary">
      <p class="meta">Before collection opens</p>
      <ul class="list">
        <li>Provider and privacy boundary approved</li>
        <li>Plain purpose-specific consent</li>
        <li>Unsubscribe and suppression tested</li>
        <li>Retention, deletion and course-closeout defined</li>
      </ul>
      <p class="microcopy">No email field is active in this private implementation.</p>
    </aside>
  </div>
</section>

<section class="section faq-section" aria-labelledby="faq-title">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">Questions before enrollment</p>
      <h2 id="faq-title">Know what the course is—and is not.</h2>
    </div>
  </div>

  <div class="wrap faq-list">
    {#each faqs as faq (faq.question)}
      <details>
        <summary>{faq.question}</summary>
        <p>{faq.answer}</p>
      </details>
    {/each}
  </div>
</section>

<section class="section final-section" aria-labelledby="final-title">
  <div class="wrap">
    <article class="card large final-card">
      <p class="eyebrow">Before enrollment opens</p>
      <h2 id="final-title">The page can be public before the product pretends to be finished.</h2>
      <p class="lead">
        Enrollment stays closed until the representative sample, complete course, captions and transcript,
        price/refund/access terms and purchase-to-access smoke all pass review.
      </p>
      <div class="actions">
        <a class="button" href="#proof">Inspect the fixture proof</a>
        <a class="button secondary" href="/blog/the-work-before-the-work">Read the build philosophy</a>
      </div>
    </article>
  </div>
</section>

<style>
  .course-hero {
    padding-top: clamp(4.5rem, 10vw, 8rem);
  }

  .course-hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 380px);
    gap: clamp(2rem, 6vw, 5rem);
    align-items: end;
  }

  .course-hero h1 {
    max-width: 860px;
  }

  .course-lede {
    max-width: 720px;
  }

  .status-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  .status-neutral {
    color: var(--muted);
  }

  .course-facts {
    background:
      linear-gradient(180deg, rgba(215, 255, 99, 0.09), rgba(255, 255, 255, 0.015)),
      var(--panel);
  }

  .course-facts dl,
  .task-ledger {
    display: grid;
    gap: 0;
    margin: 0;
  }

  .course-facts dl > div,
  .task-ledger > div {
    display: grid;
    grid-template-columns: minmax(100px, 0.45fr) minmax(0, 1fr);
    gap: 1rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--line);
  }

  .course-facts dl > div:last-child,
  .task-ledger > div:last-child {
    border-bottom: 0;
  }

  dt {
    color: var(--dim);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  dd {
    color: var(--text);
    line-height: 1.45;
    margin: 0;
  }

  .microcopy {
    color: var(--dim);
    font-size: 0.84rem;
    line-height: 1.55;
    margin: 1rem 0 0;
  }

  .threshold {
    background: linear-gradient(180deg, rgba(215, 255, 99, 0.025), transparent);
  }

  .threshold-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .threshold-card--active {
    border-color: rgba(215, 255, 99, 0.52);
    background:
      radial-gradient(circle at 100% 0%, rgba(215, 255, 99, 0.12), transparent 18rem),
      linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01));
  }

  code {
    color: var(--accent);
    font: inherit;
  }

  .proof-section {
    background: #080807;
  }

  .proof-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 1rem;
  }

  .task-panel h3 {
    color: var(--text);
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  .evidence-stack {
    display: grid;
    gap: 1rem;
  }

  .evidence-line {
    border-left: 2px solid var(--accent);
    padding-left: 0.85rem;
  }

  .evidence-line--open {
    border-left-color: var(--accent-2);
  }

  .check-card pre {
    overflow-x: auto;
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid var(--line);
    background: #050504;
    color: var(--accent);
    line-height: 1.6;
  }

  .check-result {
    color: var(--accent);
    margin-bottom: 0;
  }

  .limit-panel {
    margin-top: 1rem;
    padding: clamp(1.3rem, 4vw, 2.5rem);
    border: 1px solid rgba(255, 184, 77, 0.42);
    background: rgba(255, 184, 77, 0.045);
  }

  .limit-panel h3 {
    font-size: clamp(1.5rem, 4vw, 2.6rem);
    max-width: 780px;
  }

  .limit-panel p:last-child {
    max-width: 850px;
    color: var(--muted);
    line-height: 1.65;
    margin-bottom: 0;
  }

  .decision-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .decision-card {
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
    padding: 1.2rem;
    border: 1px solid var(--line);
    background: var(--panel);
  }

  .decision-mark {
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border: 1px solid var(--accent);
    color: var(--accent);
    font-size: 1.4rem;
    font-weight: 800;
  }

  .decision-card p:last-child {
    color: var(--muted);
    line-height: 1.5;
    margin-bottom: 0;
  }

  .module-list {
    display: grid;
    gap: 0;
    border-top: 1px solid var(--line);
  }

  .module-row {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr) 80px;
    gap: 1rem;
    align-items: start;
    padding: 1.4rem 0;
    border-bottom: 1px solid var(--line);
  }

  .module-featured {
    margin: 0 -1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background: rgba(215, 255, 99, 0.045);
  }

  .module-number,
  .module-time {
    color: var(--dim);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .module-time {
    text-align: right;
  }

  .module-heading {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
  }

  .module-heading h3 {
    margin-bottom: 0;
  }

  .module-copy p {
    max-width: 760px;
    color: var(--muted);
    line-height: 1.55;
    margin: 0.55rem 0 0;
  }

  .no-fit-card {
    border-color: rgba(255, 184, 77, 0.36);
  }

  .burden-panel {
    display: grid;
    grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
    gap: 1.5rem;
    margin-top: 1rem;
    padding: clamp(1.3rem, 4vw, 2rem);
    border: 1px solid var(--line);
    background: #090907;
  }

  .burden-panel ul {
    display: grid;
    gap: 0.6rem;
    color: var(--muted);
    line-height: 1.5;
    margin: 0;
  }

  .burden-panel .microcopy {
    grid-column: 1 / -1;
  }

  .asset-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .asset-row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    min-height: 58px;
    padding: 0.85rem 1rem;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.02);
  }

  .asset-status {
    white-space: nowrap;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .status-ready {
    color: var(--accent);
  }

  .status-working {
    color: var(--accent-2);
  }

  .status-planned {
    color: var(--dim);
  }

  .trust-section {
    background: linear-gradient(180deg, rgba(215, 255, 99, 0.025), transparent);
  }

  .trust-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .text-link {
    display: inline-block;
    margin-top: 0.5rem;
    color: var(--accent);
    font-weight: 800;
    line-height: 1.4;
    text-underline-offset: 0.2em;
  }

  .update-panel {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
    gap: clamp(1.5rem, 5vw, 4rem);
    padding: clamp(1.5rem, 5vw, 3rem);
    border: 1px solid var(--accent);
    background:
      radial-gradient(circle at 0% 0%, rgba(215, 255, 99, 0.13), transparent 26rem),
      var(--panel);
  }

  .consent-contract {
    padding: 1.2rem;
    border: 1px solid var(--line);
    background: #090907;
  }

  .faq-list {
    display: grid;
    gap: 0.75rem;
  }

  details {
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.02);
  }

  summary {
    min-height: 58px;
    padding: 1rem 3rem 1rem 1rem;
    cursor: pointer;
    font-weight: 800;
    line-height: 1.45;
  }

  summary:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  :global(main a:focus-visible) {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  details p {
    max-width: 850px;
    padding: 0 1rem 1rem;
    color: var(--muted);
    line-height: 1.65;
    margin: 0;
  }

  .final-section {
    border-bottom: 0;
  }

  .final-card {
    background:
      radial-gradient(circle at 0% 0%, rgba(215, 255, 99, 0.12), transparent 24rem),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012));
  }

  .final-card .lead {
    max-width: 850px;
  }

  @media (max-width: 900px) {
    .course-hero__grid,
    .proof-layout,
    .update-panel {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .trust-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 820px) {
    .threshold-grid,
    .decision-grid,
    .asset-grid,
    .burden-panel {
      grid-template-columns: 1fr;
    }

    .burden-panel .microcopy {
      grid-column: auto;
    }
  }

  @media (max-width: 620px) {
    .course-hero h1 {
      font-size: clamp(3rem, 17vw, 5.4rem);
    }

    .course-facts dl > div,
    .task-ledger > div,
    .module-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }

    .module-featured {
      margin: 0;
    }

    .module-time {
      text-align: left;
    }

    .asset-row {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }
  }

  @media (forced-colors: active) {
    .threshold-card--active,
    .limit-panel,
    .update-panel,
    .course-facts {
      border: 2px solid CanvasText;
      background: Canvas;
    }
  }
</style>
