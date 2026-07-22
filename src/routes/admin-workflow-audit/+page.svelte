<svelte:head>
  <title>$495 Admin Workflow Audit for Akron Trades | belt.works</title>
  <meta
    name="description"
    content="A fixed-fee working session for HVAC, plumbing, and electrical shops that want to find where administrative work is wasting the week."
  />
  <meta property="og:title" content="$495 Admin Workflow Audit | belt.works" />
  <meta
    property="og:description"
    content="Map the administrative friction. Leave with a ranked next scope. No platform replacement theater."
  />
  <meta property="og:url" content="https://belt.works/admin-workflow-audit" />
</svelte:head>

<section class="hero audit-hero" aria-label="Admin Workflow Audit">
  <div class="wrap audit-hero__grid">
    <div>
      <p class="eyebrow">Akron trades · fixed-fee working session</p>
      <h1>Find the admin work that is eating the week.</h1>
      <p class="lead">
        For HVAC, plumbing, and electrical shops. We map the handoffs, repeats, and paper-chasing
        around dispatch, estimates, scheduling, follow-up, and getting paid — then cut a practical next scope.
      </p>
      <div class="actions">
        <a class="button" href="/contact?type=Admin%20Workflow%20Audit%20%C2%B7%20Direct">Ask about the $495 audit</a>
        <a class="button secondary" href="#what-you-get">See the deliverable</a>
      </div>
      <p class="microcopy">No obligation to hire belt.works after the session. The output is yours.</p>
    </div>

    <aside class="card large price-card" aria-label="Audit terms">
      <p class="meta">Fixed fee</p>
      <p class="price">$495</p>
      <p>90-minute working session + a written follow-up within two business days.</p>
      <ul>
        <li>One owner or operations lead</li>
        <li>One workflow, not the entire company</li>
        <li>Remote or Akron-area working session</li>
      </ul>
    </aside>
  </div>
</section>

<section class="section" id="what-you-get" aria-label="What the audit produces">
  <div class="wrap section-head">
    <div>
      <p class="eyebrow">The deliverable</p>
      <h2>A useful decision, not a slide deck.</h2>
    </div>
    <p class="lead">
      We follow one real administrative path from trigger to finish and name the places it loses time,
      context, or cash.
    </p>
  </div>

  <div class="wrap grid three">
    <article class="card large">
      <p class="meta">01 · map</p>
      <h3>The week as it actually happens.</h3>
      <p>Who touches the work, where details get copied, and where a callback, estimate, or invoice stalls.</p>
    </article>
    <article class="card large">
      <p class="meta">02 · rank</p>
      <h3>Two or three bottlenecks worth fixing.</h3>
      <p>Ranked by friction, repeat frequency, and what can be changed without disrupting the people doing the work.</p>
    </article>
    <article class="card large">
      <p class="meta">03 · leave with</p>
      <h3>A written next scope.</h3>
      <p>A one-page recommendation: fix in-house, change a process, use an existing tool better, or build a narrow helper.</p>
    </article>
  </div>
</section>

<section class="section" aria-label="Good fit">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Good fit</p>
      <ul class="list">
        <li>Your office is re-entering the same information in two places.</li>
        <li>Dispatch, estimates, follow-up, or invoices depend on someone remembering the next move.</li>
        <li>You are considering software but do not want another expensive guess.</li>
        <li>You can bring one real workflow and speak plainly about where it drags.</li>
      </ul>
    </article>
    <article class="card large no-fit">
      <p class="eyebrow">Not this</p>
      <ul class="list">
        <li>Not a CRM replacement pitch.</li>
        <li>Not a generic “AI transformation.”</li>
        <li>Not a promise that software is the answer.</li>
        <li>Not a disguised discovery call that turns into a giant proposal.</li>
      </ul>
    </article>
  </div>
</section>

<section class="section final-cta" aria-label="Audit inquiry">
  <div class="wrap">
    <article class="card large final-cta__card">
      <p class="eyebrow">Start with the annoying part</p>
      <h2>Bring one workflow that keeps stealing time.</h2>
      <p class="lead">
        Tell us what kind of shop you run and which part of the week keeps getting handled by memory,
        sticky notes, texts, or a second round of data entry. We will tell you directly whether the audit is a fit.
      </p>
      <div class="actions">
        <a class="button" href="/contact?type=Admin%20Workflow%20Audit%20%C2%B7%20Direct">Ask about the $495 Admin Workflow Audit</a>
      </div>
      <p class="microcopy">No credentials, customer lists, or live systems required for the first conversation.</p>
    </article>
  </div>
</section>

<style>
  .audit-hero { padding-top: clamp(4.5rem, 10vw, 8rem); }
  .audit-hero__grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, 360px); gap: clamp(2rem, 6vw, 5rem); align-items: end; }
  .price-card { background: linear-gradient(180deg, rgba(215, 255, 99, 0.1), rgba(255, 255, 255, 0.015)), var(--panel); }
  .price { color: var(--accent); font-size: clamp(3rem, 8vw, 5rem); font-weight: 700; letter-spacing: -0.08em; line-height: 1; margin: 0.4rem 0 1rem; }
  .price-card ul { color: var(--muted); display: grid; gap: 0.65rem; line-height: 1.5; margin: 1.25rem 0 0; padding-left: 1.1rem; }
  .microcopy { color: var(--muted); font-size: 0.9rem; margin: 1rem 0 0; }
  .no-fit { border-color: rgba(255, 188, 99, 0.35); }
  .final-cta { border-bottom: 0; }
  .final-cta__card { background: radial-gradient(circle at 0% 0%, rgba(215, 255, 99, 0.12), transparent 22rem), linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012)); }
  .final-cta__card .lead { max-width: 760px; }
  @media (max-width: 820px) { .audit-hero__grid { grid-template-columns: 1fr; align-items: start; } }
</style>
