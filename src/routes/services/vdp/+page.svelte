<svelte:head>
  <title>Managed Vulnerability Disclosure | belt.works</title>
  <meta
    name="description"
    content="We run your vulnerability disclosure program: 3-business-day human response to every researcher report, evidence-grade triage packets, and a monthly coverage report your auditor can cite. From $1,500/mo — or a 90-day pilot."
  />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Services · Managed VDP</p>
    <h1>Your company has a security.txt. It points at you. That’s the problem.</h1>
    <p class="lead">
      A researcher who finds a real bug in your product checks one thing first: does anyone answer in three days?
      If nobody does, they go quiet, they go public, or they go to a platform that pays. We make sure someone answers —
      to an evidence standard — so your disclosure program is a pipeline, not a founders@ inbox.
    </p>
    <div class="kicker-row" aria-label="Program guarantees">
      <span class="pill">3-business-day human response</span>
      <span class="pill">evidence-grade triage</span>
      <span class="pill">auditor-citable monthly report</span>
      <span class="pill">one named human reads everything</span>
    </div>
    <div class="actions">
      <a class="button" href="/contact">Start intake</a>
      <a class="button secondary" href="/.well-known/security.txt">Our own security.txt</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">The gap</p>
      <h2>Most disclosure “programs” are an inbox nobody owns.</h2>
      <p>
        We ran a census of <strong>2,250 YC-funded startups (2023+)</strong>: <strong>1,738 have no disclosure file at all.</strong>
        Of the ones that do, most route vulnerability reports to a shared inbox sitting next to the newsletter replies.
        Meanwhile AI-built products ship customer-facing systems faster than security review ever existed for —
        GitGuardian counted <strong>28.65 million new hardcoded secrets leaked on GitHub in 2025</strong>.
        If AI helped build your product, someone still has to own what it shipped. That’s the job.
      </p>
    </article>
    <article class="mono-panel">
      <p><strong>Intake:</strong> every report acknowledged by a human in 3 business days</p>
      <p><strong>Triage:</strong> a report is a claim until reproduced (Verify-Before-Belief)</p>
      <p><strong>Packet:</strong> stranger-runnable repro · impact bounded by proof · severity on a published rubric · fix path · exit recommendation</p>
      <p><strong>Report:</strong> monthly counts, MTTA/MTTR, severity mix, open/closed ledger</p>
      <p><strong>Rule:</strong> a packet that can’t recommend an exit isn’t done.</p>
    </article>
  </div>
</section>

<section class="section">
  <div class="wrap grid">
    <article class="card large">
      <div class="meta">1 / intake</div>
      <h3>Researchers get an answer. Every time.</h3>
      <p>
        Acknowledged, human response inside three business days. Reports move through named states —
        Event → Evidence of Issue → Confirmed — so everyone sees the same reality. Runs on the HackerOne free tier,
        your own security.txt address, or plain email. The interface, the judgment, and the custody records are ours
        either way.
      </p>
    </article>
    <article class="card large">
      <div class="meta">2 / triage</div>
      <h3>Written packets, not vibes.</h3>
      <p>
        Each confirmed report becomes an evidence packet: reproduction steps a stranger can run, impact bounded by
        what’s proven (not imagined), severity on a published rubric, a suggested fix path, and an exit recommendation —
        fix, accept-risk with a named owner, or re-test date.
      </p>
    </article>
    <article class="card large">
      <div class="meta">3 / reporting</div>
      <h3>The document your auditor cites.</h3>
      <p>
        Monthly coverage report: counts, response times, severity mix, open/closed ledger, and a risk-accepted register.
        Provable coverage in quiet months is what justifies the program when nothing is on fire.
      </p>
    </article>
    <article class="card large">
      <div class="meta">4 / scoping</div>
      <h3>“In scope” never silently drifts.</h3>
      <p>
        Continuous scoping (stretch tier): a weekly re-check of what your policy says versus what your stack now is,
        so new services and acquisitions don’t quietly fall outside the program — or inside it by surprise.
      </p>
    </article>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Pricing</p>
      <h2>Platforms sell you staff. We sell you a pipeline.</h2>
      <p>
        Managed programs at the big platforms run <strong>$100k–250k a year</strong> (2026 market guides) because they’re
        selling seats. Automation does our recon, dedupe, reproduction drafts, and diff-watching;
        <strong>one named human reads every packet before it goes anywhere.</strong> You pay for the human where it
        matters, not for the seats where it doesn’t.
      </p>
      <p>
        <strong>$1,500/mo</strong> per program — up to 10 reports/mo, 3-business-day triage SLA, monthly report.
        <strong>$2,500/mo</strong> adds weekly scope monitoring and a researcher-community presence report.
        <strong>90-day pilot:</strong> $0–500/mo, first month intake-only, you approve everything that leaves,
        walk-away free, exit either side.
      </p>
    </article>
    <article class="mono-panel">
      <p><strong>What this is:</strong> the loop — intake, triage, packets, reporting — run to a published standard.</p>
      <p><strong>What this is not:</strong> a pentest, a bounty platform, 24/7 SOC, or a bug-count guarantee.</p>
      <p><strong>Custody:</strong> your reports, your records, one-strike law on evidence handling.</p>
      <p><strong>Alignment clause:</strong> no political targets of any stripe.</p>
      <p><strong>Focus:</strong> civic, community, and small-platform clients get the attention the giants don’t bother to give.</p>
    </article>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Proof, not promises</p>
      <h2>We ran our own disclosure process first.</h2>
      <p>
        A memory-corruption bug we found in an open-source media framework — used by major video editors — was reported
        with a full evidence packet and <a href="/blog/mlt-xml-producer-double-free">fixed upstream in 4 hours 19 minutes</a>,
        merge credited to the report. When we misread a backtrace, we issued the correction voluntarily, on the record.
        We also <a href="/blog/agent-opfor-smoke-pilot">red-team our own agent tooling</a> and publish the receipts,
        limits included.
      </p>
      <p>
        Public work: <a href="https://hackerone.com/theecodepoet" rel="noopener">hackerone.com/theecodepoet</a> ·
        <a href="/method">how we work</a> · a blind re-triage bench of 30 already-resolved industry reports is in
        publication — results with misses leading, because infrastructure should be public.
      </p>
    </article>
    <article class="card large">
      <p class="eyebrow">Getting started</p>
      <h2>One conversation, one page, one week.</h2>
      <p>
        Bring your security.txt (or the lack of one), your stack, and your worst-case inbox. We’ll scope a pilot in one
        call, stand up intake on your existing address or the HackerOne free tier, and you’ll see the first monthly
        report before the pilot decision is due. No procurement marathon, no platform contract.
      </p>
      <div class="actions">
        <a class="button" href="/contact">Bring a problem</a>
        <a class="button secondary" href="/hire">See engagement shapes</a>
      </div>
    </article>
  </div>
</section>
