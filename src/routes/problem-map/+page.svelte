<script>
  const nodes = [
    {
      id: 'work',
      label: 'Work keeps getting stuck',
      short: 'Repeated steps, lost handoffs, and work that depends on memory.',
      eyebrow: 'Workflow friction',
      title: 'The work keeps getting carried by memory.',
      copy: 'When one person has to remember the next call, retype the same detail, or chase a status through texts and sticky notes, the problem is usually not effort. The path itself is carrying too much weight.',
      answers: ['Map one real path from trigger to finish.', 'Remove the repeat or give the handoff one dependable home.', 'Test the smallest repair before replacing everything.'],
      next: 'Bring one workflow to the Admin Workflow Audit.',
      href: '/admin-workflow-audit',
      action: 'See the audit',
      x: 19,
      y: 22,
      group: 'work'
    },
    {
      id: 'handoffs',
      label: 'Details get lost between people',
      short: 'A call, estimate, note, or request disappears in transit.',
      eyebrow: 'Workflow friction',
      title: 'A handoff is acting like a game of telephone.',
      copy: 'The important detail exists, but not where the next person can reliably find it. The useful answer is often a clearer record and a visible next owner, not a larger platform.',
      answers: ['Name the record that becomes the shared source of truth.', 'Make the next owner and next action visible.', 'Reduce the places where someone has to copy the same detail.'],
      next: 'Start with the stuck handoff, not the whole organization.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Lost%20handoff',
      action: 'Bring the handoff',
      x: 39,
      y: 13,
      group: 'work'
    },
    {
      id: 'repeat',
      label: 'The same work happens twice',
      short: 'Information is re-entered, reconciled, or rebuilt by hand.',
      eyebrow: 'Workflow friction',
      title: 'The repeat is eating time that should be available for the work.',
      copy: 'Double entry usually means two systems are being asked to remember the same thing independently. Sometimes a better process fixes it. Sometimes a small connection or a cleaner record does.',
      answers: ['Identify the original record and the duplicate entry point.', 'Measure how often the repeat happens before automating it.', 'Keep a human check where mistakes would cost more than the time saved.'],
      next: 'Bring an example of the duplicate work.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Duplicate%20work',
      action: 'Bring the repeat',
      x: 42,
      y: 36,
      group: 'work'
    },
    {
      id: 'website',
      label: 'My website is not doing its job',
      short: 'People arrive, but the next useful action is unclear or broken.',
      eyebrow: 'Public path',
      title: 'A public page should carry one useful part of the work.',
      copy: 'A website does not need more decoration to be useful. It needs to make the work legible, answer the right first question, and give a visitor a safe next move.',
      answers: ['Clarify what the work is and who it is for.', 'Make one next action easy to find and complete.', 'Check the route on a phone and with a keyboard before adding more pages.'],
      next: 'Describe the page that is failing to do its job.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Website%20path',
      action: 'Bring the page',
      x: 69,
      y: 20,
      group: 'website'
    },
    {
      id: 'clarity',
      label: 'People do not understand what we do',
      short: 'The offer is real, but the language does not help people recognize it.',
      eyebrow: 'Public path',
      title: 'The work may be clear inside the business and invisible outside it.',
      copy: 'People cannot ask for a solution they cannot name. The first repair is often helping a visitor recognize their own stuck point before asking them to understand your internal categories.',
      answers: ['Lead with the problem people already feel.', 'Show a concrete example of the useful outcome.', 'Use service vocabulary after the visitor has orientation.'],
      next: 'Bring the sentence that feels hardest to explain.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Offer%20clarity',
      action: 'Bring the sentence',
      x: 82,
      y: 10,
      group: 'website'
    },
    {
      id: 'contact-path',
      label: 'People leave before they reach us',
      short: 'A visitor has interest but no clear, low-burden next step.',
      eyebrow: 'Public path',
      title: 'Interest is not the same thing as a usable path.',
      copy: 'A person can understand the offer and still leave if the contact path asks too much, feels unclear, or fails on the device they are using. The repair is usually smaller and more specific than a full redesign.',
      answers: ['Trace the route from first page to successful contact.', 'Remove unnecessary fields and duplicate choices.', 'Check for errors, confusing language, and mobile friction.'],
      next: 'Bring the route someone should be able to complete.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Contact%20path',
      action: 'Bring the route',
      x: 75,
      y: 42,
      group: 'website'
    },
    {
      id: 'data',
      label: 'The information is a mess',
      short: 'Records are scattered, duplicated, or impossible to trust.',
      eyebrow: 'Information friction',
      title: 'The record exists, but nobody can use it with confidence.',
      copy: 'Messy information becomes expensive when people make decisions from different exports, stale notes, or missing history. The first answer is often a cleaner shape and an agreed source, not a giant data project.',
      answers: ['Find the records people actually depend on.', 'Separate what is known from what is guessed or missing.', 'Create one usable view before building a dashboard.'],
      next: 'Bring a real export, report, or recurring data headache.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Messy%20information',
      action: 'Bring the record',
      x: 17,
      y: 69,
      group: 'data'
    },
    {
      id: 'records',
      label: 'The records do not match',
      short: 'Two lists say different things about the same work.',
      eyebrow: 'Information friction',
      title: 'Conflicting records make every answer feel provisional.',
      copy: 'When two lists disagree, people lose time deciding which one is real. A useful repair establishes a source, names the update path, and makes mismatches visible instead of silently spreading them.',
      answers: ['Compare the records against one concrete workflow.', 'Name the source of truth for each important field.', 'Make exceptions visible rather than overwriting history.'],
      next: 'Bring two examples that should agree but do not.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Conflicting%20records',
      action: 'Bring the examples',
      x: 39,
      y: 79,
      group: 'data'
    },
    {
      id: 'visibility',
      label: 'I cannot see what is happening',
      short: 'The work moves, but there is no trustworthy view of its status.',
      eyebrow: 'Information friction',
      title: 'You do not need more numbers. You need a useful view.',
      copy: 'Visibility means the person responsible can answer the questions that change a decision: what is moving, what is stuck, what is missing, and what deserves attention first.',
      answers: ['Start with one decision the view should support.', 'Use existing records before adding a new reporting layer.', 'Keep the view small enough that someone will actually check it.'],
      next: 'Bring the question you cannot answer quickly today.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Visibility',
      action: 'Bring the question',
      x: 62,
      y: 77,
      group: 'data'
    },
    {
      id: 'software',
      label: 'The software almost works',
      short: 'A tool exists, but it is disconnected, confusing, or avoided.',
      eyebrow: 'System fit',
      title: 'The software may not be the problem. The fit may be.',
      copy: 'A tool can be capable and still fail the actual work because it was configured around an imagined process, not the one people carry out. The useful answer may be training, a small integration, a narrower setup, or a process repair.',
      answers: ['Watch the real work before changing the tool.', 'Separate a missing feature from a missing agreement about how to use it.', 'Prefer a narrow repair over a replacement pitch.'],
      next: 'Bring the tool and the part people avoid using.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Software%20fit',
      action: 'Bring the tool',
      x: 87,
      y: 65,
      group: 'software'
    },
    {
      id: 'connections',
      label: 'The tools do not talk to each other',
      short: 'People bridge systems manually because the handoff is missing.',
      eyebrow: 'System fit',
      title: 'A missing connection is creating invisible manual labor.',
      copy: 'Disconnected tools do not automatically require a giant integration project. First establish which detail must move, when it should move, who should verify it, and what happens when it fails.',
      answers: ['Map one useful handoff between the tools.', 'Keep an explicit verification point for consequential changes.', 'Document what happens when the connection is unavailable.'],
      next: 'Bring the two tools and the detail that gets copied between them.',
      href: '/contact?type=Problem%20Map%20%C2%B7%20Tool%20connection',
      action: 'Bring the handoff',
      x: 87,
      y: 84,
      group: 'software'
    }
  ];

  const links = [
    ['work', 'handoffs'], ['work', 'repeat'], ['work', 'software'], ['website', 'clarity'], ['website', 'contact-path'],
    ['website', 'software'], ['data', 'records'], ['data', 'visibility'], ['data', 'software'], ['software', 'connections'],
    ['work', 'data'], ['website', 'data']
  ];

  const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));
  let selectedId = $state('work');
  let showGuide = $state(false);
  let selected = $derived(nodeById[selectedId]);

  /** @param {string} id */
  function selectNode(id) {
    selectedId = id;
  }
</script>

<svelte:head>
  <title>What is getting in your way? | belt.works</title>
  <meta
    name="description"
    content="A prototype problem map from belt.works: start with what is getting in the way, then find a practical next step."
  />
</svelte:head>

<section class="map-hero" aria-labelledby="problem-map-title">
  <div class="wrap map-hero__copy">
    <p class="eyebrow">Prototype · problem map</p>
    <h1 id="problem-map-title">What is getting in your way?</h1>
    <p class="lead">
      Start with the part that feels stuck. Follow a thread if it helps. Stop anywhere for a plain-English
      explanation and a practical next step.
    </p>
    <div class="actions">
      <a class="button" href="#map">Explore the map</a>
      <button class="button secondary" type="button" onclick={() => (showGuide = !showGuide)} aria-expanded={showGuide}>
        {showGuide ? 'Hide how this works' : 'How this works'}
      </button>
    </div>
    {#if showGuide}
      <div class="guide" id="map-guide">
        <strong>This is not a quiz.</strong> It does not diagnose you, collect an answer, or require contact information.
        It is a small visual way to find language for a problem before deciding what to do about it.
      </div>
    {/if}
  </div>
</section>

<section class="map-section" id="map" aria-labelledby="map-title">
  <div class="wrap">
    <div class="map-section__head">
      <div>
        <p class="eyebrow">Choose a thread</p>
        <h2 id="map-title">Start where the friction is.</h2>
      </div>
      <p class="map-note">The nodes are authored examples, not an exhaustive system. If none fit, you can still bring the problem in plain language.</p>
    </div>

    <div class="map-layout">
      <div class="constellation" aria-label="Interactive problem map">
        <svg class="constellation__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {#each links as [from, to]}
            {@const start = nodeById[from]}
            {@const end = nodeById[to]}
            <line
              class:active-link={selectedId === from || selectedId === to || (nodeById[selectedId].group === start.group && start.group === end.group)}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
            />
          {/each}
        </svg>

        {#each nodes as node (node.id)}
          <button
            type="button"
            class:active={selectedId === node.id}
            class:related={selected.group === node.group && selectedId !== node.id}
            class="map-node"
            style={`--x: ${node.x}%; --y: ${node.y}%;`}
            onclick={() => selectNode(node.id)}
            aria-pressed={selectedId === node.id}
          >
            <span class="map-node__signal" aria-hidden="true"></span>
            <span>{node.label}</span>
          </button>
        {/each}
      </div>

      <aside class="answer-panel" aria-live="polite" aria-labelledby="answer-title">
        <p class="meta">{selected.eyebrow}</p>
        <h2 id="answer-title">{selected.title}</h2>
        <p>{selected.copy}</p>
        <h3>Common first moves</h3>
        <ul>
          {#each selected.answers as answer}
            <li>{answer}</li>
          {/each}
        </ul>
        <div class="answer-panel__next">
          <p class="meta">Safe next step</p>
          <p>{selected.next}</p>
          <a class="button" href={selected.href}>{selected.action}</a>
        </div>
      </aside>
    </div>

    <div class="map-fallback" aria-label="Problem map as a text list">
      <p class="eyebrow">Prefer a list?</p>
      <div class="map-fallback__grid">
        {#each nodes as node (node.id)}
          <button type="button" class:active={selectedId === node.id} onclick={() => selectNode(node.id)}>
            <strong>{node.label}</strong>
            <span>{node.short}</span>
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="map-close" aria-label="Problem map closing note">
  <div class="wrap grid two">
    <div>
      <p class="eyebrow">A small honest boundary</p>
      <h2>Not every problem needs new software.</h2>
    </div>
    <div>
      <p class="lead">A clearer process, a better use of an existing tool, or one repaired handoff may be the useful answer. If you are not sure, bring the annoying part rather than trying to name the solution.</p>
      <div class="actions">
        <a class="button secondary" href="/services">See service lanes</a>
        <a class="button" href="/contact?type=Problem%20Map%20%C2%B7%20General">Bring the problem</a>
      </div>
    </div>
  </div>
</section>

<style>
  .map-hero {
    position: relative;
    overflow: hidden;
    padding: clamp(4.5rem, 10vw, 8rem) 0 clamp(3rem, 7vw, 5rem);
    border-bottom: 1px solid var(--line);
    background:
      radial-gradient(circle at 78% 28%, rgba(215, 255, 99, 0.13), transparent 18rem),
      radial-gradient(circle at 24% 78%, rgba(255, 184, 77, 0.08), transparent 21rem),
      #070706;
  }

  .map-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.45;
    background-image: radial-gradient(rgba(239, 238, 231, 0.16) 0.7px, transparent 0.7px);
    background-size: 19px 19px;
    mask-image: linear-gradient(90deg, transparent, black 22%, black 78%, transparent);
  }

  .map-hero__copy { position: relative; z-index: 1; }
  .map-hero h1 { max-width: 900px; }
  .guide { max-width: 760px; margin-top: 1.25rem; border-left: 2px solid var(--accent); padding: 1rem; color: var(--muted); background: rgba(255,255,255,0.025); line-height: 1.55; }
  .guide strong { color: var(--text); }

  .map-section { padding: clamp(3.5rem, 8vw, 6rem) 0; border-bottom: 1px solid var(--line); }
  .map-section__head { display: grid; grid-template-columns: minmax(0, 1fr) minmax(260px, 400px); gap: 2rem; align-items: end; margin-bottom: 2rem; }
  .map-section__head h2 { margin-bottom: 0; }
  .map-note { color: var(--muted); line-height: 1.55; margin: 0; }

  .map-layout { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr); gap: 1rem; align-items: stretch; }
  .constellation {
    position: relative;
    min-height: 620px;
    overflow: hidden;
    border: 1px solid var(--line);
    isolation: isolate;
    background:
      radial-gradient(circle at 45% 45%, rgba(215,255,99,0.09), transparent 16rem),
      radial-gradient(circle at 70% 20%, rgba(255,184,77,0.07), transparent 12rem),
      linear-gradient(135deg, rgba(255,255,255,0.025), transparent 48%),
      #090907;
  }

  .constellation::before,
  .constellation::after {
    content: '';
    position: absolute;
    width: 14rem;
    height: 14rem;
    border: 1px solid rgba(215,255,99,0.13);
    border-radius: 50%;
    filter: blur(0.1px);
    pointer-events: none;
  }
  .constellation::before { top: 11%; left: 24%; animation: drift-one 16s ease-in-out infinite; }
  .constellation::after { right: 3%; bottom: 3%; border-color: rgba(255,184,77,0.12); animation: drift-two 19s ease-in-out infinite; }

  .constellation__links { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; overflow: visible; }
  .constellation__links line { stroke: rgba(167, 161, 144, 0.26); stroke-width: 0.26; vector-effect: non-scaling-stroke; transition: stroke 0.2s ease, stroke-width 0.2s ease, opacity 0.2s ease; }
  .constellation__links line.active-link { stroke: rgba(215, 255, 99, 0.7); stroke-width: 0.5; }

  .map-node {
    position: absolute;
    z-index: 2;
    left: var(--x);
    top: var(--y);
    transform: translate(-50%, -50%);
    max-width: min(10.5rem, 31%);
    padding: 0.58rem 0.72rem;
    display: inline-flex;
    align-items: flex-start;
    gap: 0.42rem;
    border: 1px solid rgba(167, 161, 144, 0.48);
    border-radius: 999px;
    color: var(--text);
    text-align: left;
    line-height: 1.22;
    font-size: clamp(0.68rem, 1.25vw, 0.84rem);
    background: rgba(13, 13, 10, 0.88);
    box-shadow: 0 0 0 0 rgba(215, 255, 99, 0);
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
  }
  .map-node:hover, .map-node:focus-visible { border-color: var(--text); transform: translate(-50%, calc(-50% - 2px)); outline: none; }
  .map-node.active { border-color: var(--accent); background: rgba(215,255,99,0.11); box-shadow: 0 0 0 4px rgba(215,255,99,0.08), 0 0 30px rgba(215,255,99,0.15); }
  .map-node.related { border-color: rgba(215,255,99,0.62); }
  .map-node__signal { flex: 0 0 auto; width: 0.46rem; height: 0.46rem; margin-top: 0.18rem; border-radius: 50%; background: var(--accent-2); box-shadow: 0 0 10px rgba(255,184,77,0.65); }
  .map-node.active .map-node__signal { background: var(--accent); box-shadow: 0 0 12px rgba(215,255,99,0.85); }

  .answer-panel { padding: clamp(1.3rem, 3vw, 2rem); border: 1px solid var(--line); background: linear-gradient(180deg, rgba(215,255,99,0.07), rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.01)); }
  .answer-panel h2 { font-size: clamp(2rem, 4vw, 3.6rem); }
  .answer-panel > p { color: var(--muted); line-height: 1.6; }
  .answer-panel h3 { margin-top: 1.65rem; }
  .answer-panel ul { display: grid; gap: 0.72rem; padding: 0; margin: 0; list-style: none; }
  .answer-panel li { border-left: 2px solid var(--accent); padding-left: 0.78rem; color: var(--muted); line-height: 1.48; }
  .answer-panel__next { margin-top: 1.8rem; padding-top: 1.2rem; border-top: 1px solid var(--line); }
  .answer-panel__next > p:not(.meta) { color: var(--text); line-height: 1.5; }

  .map-fallback { margin-top: 1rem; border: 1px solid var(--line); padding: 1rem; background: rgba(255,255,255,0.015); }
  .map-fallback__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.65rem; }
  .map-fallback button { min-height: 100%; padding: 0.82rem; border: 1px solid var(--line); color: var(--text); text-align: left; background: rgba(0,0,0,0.16); cursor: pointer; }
  .map-fallback button:hover, .map-fallback button:focus-visible, .map-fallback button.active { border-color: var(--accent); background: rgba(215,255,99,0.06); outline: none; }
  .map-fallback strong { display: block; line-height: 1.3; }
  .map-fallback span { display: block; margin-top: 0.38rem; color: var(--muted); font-size: 0.8rem; line-height: 1.42; }

  .map-close { padding: clamp(3.5rem, 8vw, 6rem) 0; background: linear-gradient(180deg, rgba(215,255,99,0.035), transparent); }

  @keyframes drift-one { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(1.3rem, -0.9rem, 0); } }
  @keyframes drift-two { 0%, 100% { transform: translate3d(0, 0, 0) scale(1); } 50% { transform: translate3d(-1rem, 1rem, 0) scale(1.05); } }

  @media (max-width: 900px) {
    .map-layout, .map-section__head { grid-template-columns: 1fr; }
    .constellation { min-height: 560px; }
  }

  @media (max-width: 620px) {
    .constellation { min-height: 510px; }
    .map-node { max-width: 38%; padding: 0.46rem 0.56rem; font-size: 0.66rem; }
    .map-node:nth-of-type(n + 8) { display: none; }
    .map-fallback__grid { grid-template-columns: 1fr; }
  }

  @media (prefers-reduced-motion: reduce) {
    .constellation::before, .constellation::after { animation: none; }
    .map-node, .constellation__links line { transition: none; }
  }
</style>
