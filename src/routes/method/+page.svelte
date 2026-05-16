<svelte:head>
  <title>How We Work | belt.works</title>
  <meta
    name="description"
    content="How belt.works uses model-agnostic agent harnesses, local machines, and boring verification to ship software."
  />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Method</p>
    <h1>We don’t hire models. We build harnesses.</h1>
    <p class="lead">
      belt.works is an AI-native shop: small machines, specialized agents, local repos, real checks, and human judgment at the
      seams. The model is not the product. The harness is.
    </p>
    <div class="kicker-row" aria-label="Operating principles">
      <span class="pill">model agnostic</span>
      <span class="pill">smallest useful model</span>
      <span class="pill">tooling over theater</span>
      <span class="pill">diffs or it didn’t happen</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid">
    <article class="card large">
      <div class="meta">1 / model agnostic</div>
      <h3>The harness outlives the model.</h3>
      <p>
        We route work to whatever can do it cleanly: large models for hard reasoning, smaller models for repetitive passes,
        scripts for things machines should not be philosophizing about.
      </p>
    </article>
    <article class="card large">
      <div class="meta">2 / right-sized compute</div>
      <h3>Use the smallest thing that works.</h3>
      <p>
        Expensive intelligence is saved for expensive uncertainty. Most software work is reading, shaping, testing, and
        checking. Paying a giant model to count files is how civilization ends: slowly, then on an invoice.
      </p>
    </article>
    <article class="card large">
      <div class="meta">3 / verified shipping</div>
      <h3>The output has to survive contact with git.</h3>
      <p>
        Agent sessions produce branches, diffs, commits, checks, and reviewable handoffs. If it cannot be inspected, tested,
        or rolled back, it is not finished.
      </p>
    </article>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Mesh roles</p>
      <h2>Operators, not mascots.</h2>
      <p>
        Janine routes and coordinates. Peter handles implementation passes. Egon plans, reviews, and does technical cleanup.
        The point is not pretending agents are magic employees. The point is giving each worker a narrow lane and a hard stop.
      </p>
    </article>
    <article class="mono-panel">
      <p><strong>Input:</strong> messy goal, stale context, existing code</p>
      <p><strong>Harness:</strong> scoped prompts, local tools, git branches, tests</p>
      <p><strong>Workers:</strong> model-specific sessions with narrow responsibilities</p>
      <p><strong>Output:</strong> pull requests, deployable changes, documented decisions</p>
      <p><strong>Rule:</strong> no demo theater where a checklist would do.</p>
    </article>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Operating rule</p>
      <h2>One money project. One proof project. One infrastructure project.</h2>
      <p>Everything else waits unless it earns its way back.</p>
    </article>
    <article class="mono-panel">
      <p><strong>Money:</strong> client work / intake</p>
      <p><strong>Proof:</strong> belt.works / public evidence</p>
      <p><strong>Infrastructure:</strong> mesh status / tooling</p>
      <p><strong>Rule:</strong> if it does not support survival, evidence, or method, it is drift.</p>
    </article>
  </div>
</section>
