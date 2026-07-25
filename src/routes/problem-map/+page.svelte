<script>
  import { onMount, tick } from 'svelte';

  const root = { x: 50, y: 50 };

  const groups = [
    {
      id: 'not-working',
      label: 'Something stopped\nworking',
      short: 'A website, form, device, connection, app, or login used to work and now does not.',
      title: 'Start with the thing that changed.',
      copy: 'You do not need to diagnose whether the cause is hardware, software, or a setting. Name the thing that stopped behaving normally.',
      x: 30, y: 29,
      leaves: [
        ['website-form', 'A website or form is broken'],
        ['device-network', 'A device, printer, or Wi-Fi is down'],
        ['app-login', 'An app, login, or connection stopped working']
      ]
    },
    {
      id: 'takes-too-long',
      label: 'It takes\ntoo long',
      short: 'The same manual, repeated, or copy-paste work keeps eating the week.',
      title: 'Find the repeat before trying to automate it.',
      copy: 'The useful starting point is the real task someone repeats: retyping, checking, chasing, copying, or rebuilding the same information.',
      x: 50, y: 20,
      leaves: [
        ['copying', 'The same information gets copied between places'],
        ['reports', 'A report or update gets rebuilt every time'],
        ['paper', 'Paper or messages have to be typed in again']
      ]
    },
    {
      id: 'cant-find-us',
      label: 'People can’t\nfind us',
      short: 'Neighbors, customers, or collaborators cannot find the right public information or way in.',
      title: 'Start with the route someone should be able to take.',
      copy: 'This is about being discoverable and reachable: finding you on Google or Maps, understanding what you do, seeing current information, or successfully getting in touch.',
      x: 70, y: 29,
      leaves: [
        ['search', 'We do not show up where people look'],
        ['public-info', 'Our public information is old or unclear'],
        ['contact', 'People cannot find a clear way to reach us']
      ]
    },
    {
      id: 'information-scattered',
      label: 'Information is\nscattered',
      short: 'Files, forms, records, and useful history exist—but not in one reliable place.',
      title: 'Find the record people actually depend on.',
      copy: 'Start with the information someone is repeatedly hunting down, rebuilding, or second-guessing. The first useful move is often smaller than a new platform.',
      x: 75, y: 50,
      leaves: [
        ['files', 'Files or forms are hard to find'],
        ['versions', 'Different records disagree'],
        ['history', 'The useful history lives only in people’s heads']
      ]
    },
    {
      id: 'stuck',
      label: 'We’re stuck',
      short: 'A concrete project, change, vendor handoff, or decision has stalled.',
      title: 'Name the stopped piece, not the whole organization.',
      copy: 'This is for an observable pause: a half-finished website, abandoned vendor work, a frozen migration, or one decision that has not moved. It is not a promise to solve general business direction.',
      x: 66, y: 72,
      leaves: [
        ['half-finished', 'Something was started but never finished'],
        ['vendor', 'A vendor or previous helper left it halfway done'],
        ['decision', 'One necessary decision or change cannot move']
      ]
    },
    {
      id: 'no-way-yet',
      label: 'No way to do\nthis yet',
      short: 'There is no usable path for a real task people need to complete.',
      title: 'Describe the task before naming the tool.',
      copy: 'There may be no booking path, shared list, payment route, signup flow, or public page yet. Start with what someone needs to do, not the product you think might solve it.',
      x: 34, y: 72,
      leaves: [
        ['public-path', 'There is no public page or route for this'],
        ['signup', 'There is no way to book, sign up, pay, or ask'],
        ['shared-place', 'There is no shared place to keep track of this']
      ]
    },
    {
      id: 'explain',
      label: 'Let me just\ntell you what happened',
      short: 'The situation crosses categories, feels strange, or is easier to tell as a story.',
      title: 'Start with the part that is annoying or surprising.',
      copy: 'You do not need to pick a perfect label. A clear example of what happened is enough to begin a useful conversation and find a smaller next question.',
      x: 25, y: 50,
      leaves: [
        ['example', 'Start with one example of what happened'],
        ['several', 'It is several of these at once'],
        ['unsure', 'I do not know what category this is']
      ]
    }
  ];

  /** @type {Record<string, Array<[number, number]>>} */
  const outwardLeaves = {
    'not-working': [[6, 4], [20, 2], [36, 6]],
    'takes-too-long': [[33, 3], [50, 1], [67, 3]],
    'cant-find-us': [[64, 6], [80, 2], [94, 4]],
    'information-scattered': [[96, 32], [98, 50], [95, 69]],
    stuck: [[52, 89], [70, 92], [87, 89]],
    'no-way-yet': [[13, 89], [30, 92], [48, 89]],
    explain: [[5, 32], [2, 50], [5, 69]]
  };

  // Mobile keeps the root as a protected central landmark. Each branch opens
  // into its own outer lane instead of translating the entire field or stacking
  // leaf hit targets through the reset control.
  /** @type {Record<string, Array<[number, number]>>} */
  const mobileLeafLayouts = {
    'not-working': [[19, 8], [50, 8], [81, 8]],
    'takes-too-long': [[19, 8], [50, 8], [81, 8]],
    'cant-find-us': [[19, 8], [50, 8], [81, 8]],
    'information-scattered': [[19, 8], [50, 8], [81, 8]],
    stuck: [[19, 92], [50, 92], [81, 92]],
    'no-way-yet': [[19, 92], [50, 92], [81, 92]],
    explain: [[19, 8], [50, 8], [81, 8]]
  };

  /** @type {Record<string, [number, number]>} */
  const mobileOpenGroupLayouts = {
    'information-scattered': [75, 34],
    explain: [25, 34]
  };

  /** @type {Record<string, Array<[number, number]>>} */
  const desktopLeafLayouts = {
    // Keep a card-width safety margin inside the field. The camera can move;
    // the readable target positions must never put a whole label off-canvas.
    'not-working': [[11, 12], [29, 8], [48, 10]],
    'takes-too-long': [[20, 8], [50, 10], [80, 8]],
    'cant-find-us': [[52, 10], [75, 8], [90, 12]],
    'information-scattered': [[89, 28], [89, 50], [89, 72]],
    explain: [[11, 28], [11, 50], [11, 72]],
    stuck: [[52, 88], [75, 91], [90, 87]],
    'no-way-yet': [[11, 87], [29, 91], [48, 88]]
  };

  // Two leaf cards are authored first to prove that the map can offer useful,
  // bounded guidance without turning a selected path into a diagnosis or lead form.
  /** @type {Record<string, {scene: string, consequence: string, question: string, firstMove: string, beltPath: string, handoff: string}>} */
  const authoredLeafCards = {
    'information-scattered-files': {
      scene: 'The form, template, document, folder, link, or current version people need exists somewhere, but finding it depends on remembering a person, an old email, a shared-drive path, or which app happened to be used last.',
      consequence: 'People lose time hunting, make a replacement from memory, or keep asking the same person where the real thing lives. A routine task starts with a scavenger hunt instead of the work.',
      question: 'What is one file or form people have to ask around for more than once?',
      firstMove: 'Choose one recent search. Write down the name people used, every place they looked, and where the usable version finally turned up. Do not reorganize everything yet; make that one route visible.',
      beltPath: 'Belt can help make one working file or form easier to locate and trust: map the current hiding places, name a dependable home, and leave a plain route that does not depend on one person remembering it.',
      handoff: 'Want help with one hard-to-find item? Bring the name people use for it and the last few places someone had to look.'
    },
    'information-scattered-versions': {
      scene: 'The address, hours, service list, inventory count, price, customer detail, or other important information changes depending on which page, file, spreadsheet, or message someone opens.',
      consequence: 'People stop trusting the record. They begin asking around, rebuilding the answer by hand, or accidentally using an older version because nobody can tell which source is current.',
      question: 'When two versions disagree, which one do people currently treat as correct—and why?',
      firstMove: 'Put two conflicting examples next to each other. Circle the field that differs and write down where each version came from. Do not fix everything yet; identify the first record that needs an owner.',
      beltPath: 'Belt can help make one source-linked, portable record trustworthy enough to use: collect the relevant sources, preserve where each value came from, flag uncertainty, and produce a cleaner working file or system boundary.',
      handoff: 'Want help untangling one example? You can bring two versions of the same record. We can start by finding the smallest useful source of truth.'
    },
    'information-scattered-history': {
      scene: 'A past decision, customer detail, repair, exception, relationship, or workaround is known by one or two people, but it was never written down where the next person can find it.',
      consequence: 'Work slows when those people are unavailable. Newer staff repeat old questions, make avoidable mistakes, or treat a fragile memory chain as the operating system.',
      question: 'What important thing do people currently have to ask someone to remember for them?',
      firstMove: 'Pick one repeated question and ask the person who usually answers it to write the shortest useful version: what happened, what was decided, and where the next person should look. Keep the source or uncertainty attached.',
      beltPath: 'Belt can help turn one useful piece of living history into a small shared record that preserves context without pretending every human judgment can be automated.',
      handoff: 'Want a second set of eyes on one memory-bound process? Bring one question that keeps routing back to the same person.'
    },
    'takes-too-long-copying': {
      scene: 'The same name, date, amount, status, address, request, or update gets copied from one tool, message, form, spreadsheet, or system into another so the next step can happen.',
      consequence: 'The repeat consumes attention and creates quiet chances for mismatches. People spend time being a bridge between tools instead of doing the part that requires their judgment.',
      question: 'Where does the information first become usable, and where is the next place someone has to type it again?',
      firstMove: 'Follow one real item from its first usable record to its duplicate entry. Note the two places, the field that gets copied, and the reason the second copy is needed. Measure one example before changing the process.',
      beltPath: 'Belt can help clarify whether one cleaner shared record, a smaller handoff, or a bounded connection could remove a repeat without replacing every tool around it.',
      handoff: 'Want help tracing one repeat? Bring one anonymized example and the two places the same detail gets entered.'
    },
    'takes-too-long-reports': {
      scene: 'A weekly report, status update, reconciliation, dashboard, board packet, or client summary has to be rebuilt by gathering the same numbers, notes, screenshots, and context from several places.',
      consequence: 'The update arrives late, people cannot easily check its source, and the person who knows how to assemble it becomes the bottleneck. The reporting work expands until it crowds out the work being reported on.',
      question: 'Which part of the report is rebuilt most often even though the underlying information already exists somewhere?',
      firstMove: 'Save one finished report and mark where each section came from, who had to supply it, and what was manually reshaped. Start with the section that takes the longest or gets questioned most.',
      beltPath: 'Belt can help make one recurring update more repeatable by tracing its source records, separating judgment from copy-paste, and shaping a small reliable reporting path.',
      handoff: 'Want help with one recurring update? Bring a redacted finished version and a rough list of the places its information came from.'
    },
    'takes-too-long-paper': {
      scene: 'A paper form, voicemail, text thread, photo, handwritten note, or message has to be typed into a spreadsheet, database, calendar, or other system before anyone can act on it.',
      consequence: 'The delay creates queues and transcription errors. The original is hard to search or share, while the typed version may lose the context that made the request understandable.',
      question: 'What information has to be retyped before the next person can reliably see or use it?',
      firstMove: 'Choose one recent intake. Keep the original next to the typed version and mark what changed, what was unclear, and how long the transfer took. Do not collect more information than the next step needs.',
      beltPath: 'Belt can help make one intake path less fragile by preserving the source, defining the minimum useful fields, and testing a safer way to move the information without treating people as data-entry machines.',
      handoff: 'Want help with one retyping queue? Bring a redacted original and its destination record, plus the part that is easiest to misread.'
    },
    'cant-find-us-public-info': {
      scene: 'A person can find the organization or business, but the page, listing, menu, hours, service description, event information, or contact details leave them unsure what is current—or what they are supposed to do next.',
      consequence: 'People pause, leave, call someone who has to explain it again, or assume the organization is closed, unavailable, or not for them. The work may be good; the public path does not make that easy to see.',
      question: 'What is the one thing a new person needs to know or do first that the current public information does not make clear?',
      firstMove: 'Ask one person who does not already know the answer to try the public route. Watch where they hesitate. Write down the first question they ask or the first thing they cannot find.',
      beltPath: 'Belt can help make one public route clearer and easier to complete: identify the essential information, repair the page or listing that carries it, and give people a plain next step rather than another dead end.',
      handoff: 'Want a second set of eyes on one public route? Bring the page or listing and the one thing a new person needs to understand or do.'
    }
  };

  const neutralLeafCard = {
    scene: 'This is a specific shape of a practical problem, but its tailored card has not been authored in this pilot yet.',
    consequence: 'A generic answer would pretend to understand more than this local, read-only map can know.',
    question: 'What is one recent example of this happening?',
    firstMove: 'Write down the first observable detail: what happened, who or what it affected, and what made it harder than it needed to be.',
    beltPath: 'No Belt path is being suggested for this leaf yet.',
    handoff: 'No follow-up is requested or collected here.'
  };

  const leaves = groups.flatMap((group) => group.leaves.map(([id, label], index) => {
    const [x, y] = outwardLeaves[group.id][index];
    const leafId = `${group.id}-${id}`;
    const card = authoredLeafCards[leafId] ?? neutralLeafCard;
    return {
      id: leafId,
      groupId: group.id,
      index,
      label,
      x,
      y,
      title: label,
      card,
      isAuthoredCard: leafId in authoredLeafCards
    };
  }));

  const groupById = Object.fromEntries(groups.map((group) => [group.id, group]));
  const leafById = Object.fromEntries(leaves.map((leaf) => [leaf.id, leaf]));

  let activeGroupId = $state(/** @type {string | null} */ (null));
  let selectedLeafId = $state(/** @type {string | null} */ (null));
  let showGuide = $state(false);
  let constellationElement = $state(/** @type {HTMLElement | null} */ (null));
  let viewportWidth = $state(1280);
  /** @type {Record<string, {x: number, y: number}>} */
  let renderPositions = $state({});

  /** @param {{ groupId: string, index: number, x: number, y: number }} leaf @returns {[number, number]} */
  function mobileLeafPosition(leaf) {
    return /** @type {[number, number]} */ (mobileLeafLayouts[leaf.groupId][leaf.index]);
  }

  /** @param {{ groupId: string, index: number, x: number, y: number }} leaf @returns {[number, number]} */
  function leafPosition(leaf) {
    if (viewportWidth <= 620) return mobileLeafPosition(leaf);
    if (activeGroupId !== leaf.groupId) return [leaf.x, leaf.y];
    return /** @type {[number, number]} */ (desktopLeafLayouts[leaf.groupId][leaf.index]);
  }

  /** @param {{ id: string, x: number, y: number }} group @returns {[number, number]} */
  function groupPosition(group) {
    if (viewportWidth <= 620 && activeGroupId === group.id && mobileOpenGroupLayouts[group.id]) {
      return mobileOpenGroupLayouts[group.id];
    }
    return [group.x, group.y];
  }

  let activeGroup = $derived(activeGroupId ? groupById[activeGroupId] : null);
  let activeLeaves = $derived(activeGroupId ? leaves.filter((leaf) => leaf.groupId === activeGroupId) : []);
  let selectedLeaf = $derived(selectedLeafId ? leafById[selectedLeafId] : null);
  let mapStatus = $derived(
    selectedLeaf
      ? `${activeGroup?.label.replace('\n', ' ') ?? 'Current branch'}. ${selectedLeaf.label} selected. The answer is below the map.`
      : activeGroup
        ? `${activeGroup.label.replace('\n', ' ')} selected. Three related problem shapes are now available.`
        : 'Map root. Choose the broad problem that feels closest to what is getting in your way.'
  );

  /** @type {any} */
  let d3;
  /** @type {any} */
  let simulation;
  let prefersReducedMotion = false;
  let physicsReady = false;
  let camera = $state({ x: 0, y: 0 });
  let answerHeading = $state(/** @type {HTMLHeadingElement | null} */ (null));
  let moveAnswerFocus = false;
  /** @type {number | undefined} */
  let cameraFrame;

  function moveCamera() {
    if (cameraFrame) cancelAnimationFrame(cameraFrame);
    // The root is orientation, not a camera passenger. D3 can still provide
    // a small local settle, but the field never pans its reset affordance away.
    camera = { x: 0, y: 0 };
  }

  /** @param {string} key @param {[number, number]} fallback */
  function point(key, fallback) {
    return renderPositions[key] ?? { x: fallback[0], y: fallback[1] };
  }

  function cameraOffset() {
    return camera;
  }
  /** @param {{x: number, y: number}} raw */
  function inView(raw) {
    const camera = cameraOffset();
    return { x: raw.x + camera.x, y: raw.y + camera.y };
  }
  function rootPoint() { return inView(point('root', [root.x, root.y])); }
  /** @param {{ id: string, x: number, y: number }} group */
  function groupPoint(group) { return inView(point(`group:${group.id}`, recededPosition(group))); }
  /** @param {{ id: string, groupId: string, index: number, x: number, y: number }} leaf */
  function leafPoint(leaf) { return inView(point(`leaf:${leaf.id}`, leafPosition(leaf))); }

  function stopPhysics() {
    simulation?.stop();
    simulation = undefined;
  }

  // Sibling categories are never unmounted when a branch opens. They stay in the
  // field and drift a little further from the root, so opening a branch reads as
  // depth changing rather than as six nodes being deleted. Reduced motion keeps
  // them exactly where they were and lets CSS dim them in place.
  const recede = 1.06;

  /** @param {{ id: string, x: number, y: number }} group @returns {[number, number]} */
  function recededPosition(group) {
    const [x, y] = groupPosition(group);
    if (prefersReducedMotion || !activeGroupId || activeGroupId === group.id) return [x, y];
    return [root.x + (x - root.x) * recede, root.y + (y - root.y) * recede];
  }

  function authoredPositions() {
    /** @type {Record<string, {x: number, y: number}>} */
    const next = { root: { x: root.x, y: root.y } };
    groups.forEach((group) => {
      const [x, y] = recededPosition(group);
      next[`group:${group.id}`] = { x, y };
    });
    activeLeaves.forEach((leaf) => {
      const [x, y] = leafPosition(leaf);
      next[`leaf:${leaf.id}`] = { x, y };
    });
    return next;
  }

  /** @param {string | null} [openingGroupId] */
  function reheat(openingGroupId = null) {
    const targets = authoredPositions();
    if (!physicsReady || prefersReducedMotion || !d3) {
      stopPhysics();
      renderPositions = targets;
      return;
    }

    stopPhysics();
    const openingGroup = openingGroupId ? groupById[openingGroupId] : null;
    const nodes = Object.entries(targets).map(([id, target]) => {
      const prior = renderPositions[id];
      const isNewLeaf = id.startsWith('leaf:') && openingGroup;
      return {
        id,
        targetX: target.x,
        targetY: target.y,
        kind: id === 'root' ? 'root' : id.startsWith('leaf:') ? 'leaf' : activeGroupId && id !== `group:${activeGroupId}` ? 'far' : 'group',
        fx: id === 'root' ? root.x : undefined,
        fy: id === 'root' ? root.y : undefined,
        // New leaves begin on their own outward vector, rather than stacked at one
        // coordinate where collision resolution would choose an arbitrary direction.
        x: isNewLeaf ? openingGroup.x + (target.x - openingGroup.x) * .16 : prior?.x ?? target.x,
        y: isNewLeaf ? openingGroup.y + (target.y - openingGroup.y) * .16 : prior?.y ?? target.y
      };
    });
    const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));
    const links = groups
      .filter((group) => byId[`group:${group.id}`])
      .map((group) => {
        const far = Boolean(activeGroupId) && activeGroupId !== group.id;
        return { source: 'root', target: `group:${group.id}`, distance: far ? 32 : 30, strength: far ? .009 : .018 };
      });
    activeLeaves.forEach((leaf) => {
      if (byId[`leaf:${leaf.id}`]) links.push({ source: `group:${leaf.groupId}`, target: `leaf:${leaf.id}`, distance: 15, strength: .06 });
    });

    simulation = d3.forceSimulation(nodes)
      .alpha(openingGroup ? .72 : .5)
      .alphaMin(.018)
      .alphaDecay(.019)
      .velocityDecay(.82)
      .force('x', d3.forceX(/** @param {any} node */ (node) => node.targetX).strength(/** @param {any} node */ (node) => node.kind === 'leaf' ? .34 : node.kind === 'far' ? .105 : .2))
      .force('y', d3.forceY(/** @param {any} node */ (node) => node.targetY).strength(/** @param {any} node */ (node) => node.kind === 'leaf' ? .34 : node.kind === 'far' ? .105 : .2))
      .force('charge', d3.forceManyBody().strength(/** @param {any} node */ (node) => node.kind === 'root' ? -5 : node.kind === 'leaf' ? -12 : node.kind === 'far' ? -5 : -9))
      .force('collide', d3.forceCollide().radius(/** @param {any} node */ (node) => node.kind === 'root' ? 8 : node.kind === 'leaf' ? 5 : 4).strength(.45))
      .force('link', d3.forceLink(links).id(/** @param {any} node */ (node) => node.id).distance(/** @param {any} link */ (link) => link.distance).strength(/** @param {any} link */ (link) => link.strength))
      .on('tick', () => {
        renderPositions = Object.fromEntries(nodes.map((node) => {
          const isLeaf = node.kind === 'leaf';
          const horizontalInset = isLeaf ? (viewportWidth <= 620 ? 18 : 10) : 4;
          const verticalInset = isLeaf ? (viewportWidth <= 620 ? 7 : 5.5) : 4;
          return [node.id, {
            x: Math.max(horizontalInset, Math.min(100 - horizontalInset, node.x)),
            y: Math.max(verticalInset, Math.min(100 - verticalInset, node.y))
          }];
        }));
      })
      // Keep the solved coordinates. Snapping to authored targets here made the
      // final frame visibly jump after a valid physical settle.
      .on('end', () => {});
  }

  /** @param {string} id */
  async function chooseGroup(id) {
    if (!groupById[id]) return resetMap();
    activeGroupId = id;
    selectedLeafId = null;
    await tick();
    moveCamera();
    reheat(id);
  }

  /** @param {string} id */
  async function chooseLeaf(id) {
    const leaf = leafById[id];
    if (!leaf || !groupById[leaf.groupId]) return resetMap();
    activeGroupId = leaf.groupId;
    selectedLeafId = id;
    await tick();
    if (moveAnswerFocus) answerHeading?.focus();
    moveAnswerFocus = false;
  }

  /** @param {KeyboardEvent} event */
  function noteKeyboardLeafSelection(event) {
    if (event.key === 'Enter' || event.key === ' ') moveAnswerFocus = true;
  }

  async function resetMap() {
    activeGroupId = null;
    selectedLeafId = null;
    await tick();
    moveCamera();
    reheat();
  }

  onMount(() => {
    const updateViewport = () => {
      viewportWidth = window.innerWidth;
      reheat();
    };
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = media.matches;
    let cancelled = false;

    const initialize = async () => {
      const module = await import('d3-force');
      if (cancelled) return;
      d3 = module;
      physicsReady = true;
      reheat();
    };
    const updatePreference = () => {
      prefersReducedMotion = media.matches;
      reheat();
    };

    updateViewport();
    initialize();
    window.addEventListener('resize', updateViewport);
    media.addEventListener?.('change', updatePreference);
    return () => {
      cancelled = true;
      if (cameraFrame) cancelAnimationFrame(cameraFrame);
      stopPhysics();
      window.removeEventListener('resize', updateViewport);
      media.removeEventListener?.('change', updatePreference);
    };
  });
</script>

<svelte:head>
  <title>What is getting in your way? | belt.works</title>
  <meta name="description" content="A visual problem map from belt.works: move from broad friction to one practical next step." />
</svelte:head>

<section class="map-hero" aria-labelledby="problem-map-title">
  <div class="wrap map-hero__copy">
    <p class="eyebrow">Prototype · problem map</p>
    <h1 id="problem-map-title">What is getting in your way?</h1>
    <p class="lead">Start with the part that feels stuck. The map opens one small neighborhood at a time. Stop anywhere for plain language and a practical next step.</p>
    <div class="actions">
      <a class="button" href="#map">Explore the map</a>
      <button class="button secondary" type="button" onclick={() => (showGuide = !showGuide)} aria-expanded={showGuide}>
        {showGuide ? 'Hide how this works' : 'How this works'}
      </button>
    </div>
    {#if showGuide}
      <div class="guide" id="map-guide"><strong>This is not a quiz.</strong> It does not diagnose you, collect an answer, or require contact information. It is a small visual way to find language for a problem before deciding what to do about it.</div>
    {/if}
  </div>
</section>

<section class="map-section" id="map" aria-labelledby="map-title">
  <div class="wrap">
    <div class="map-section__head">
      <div>
        <p class="eyebrow">A local neighborhood, not a giant graph</p>
        <h2 id="map-title">Follow the shape of the thing that is bothering you.</h2>
      </div>
      <p class="map-note">There are only a few routes here on purpose. Choose one broad friction first. The rest can wait until it is relevant.</p>
    </div>

    <div class="map-breadcrumb" aria-label="Current map location">
      <button type="button" class:active={!activeGroup} onclick={resetMap} aria-pressed={!activeGroup}>Map root</button>
      {#if activeGroup}
        <span aria-hidden="true">/</span>
        <button type="button" class:active={!selectedLeaf} onclick={() => chooseGroup(activeGroup.id)} aria-pressed={!selectedLeaf}>{activeGroup.label.replace('\n', ' ')}</button>
      {/if}
      {#if selectedLeaf}<span aria-hidden="true">/</span><span class="map-breadcrumb__current">{selectedLeaf.label}</span>{/if}
    </div>

    <p id="map-status" class="sr-only" aria-live="polite">{mapStatus}</p>

    <section bind:this={constellationElement} class:branch-open={activeGroup} class="constellation" aria-label="Interactive problem map" aria-describedby="map-status">
      <svg class="constellation__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {#each groups as group (group.id)}
          {@const currentGroup = groupPoint(group)}
          <line data-motion-root-link class:quiet={activeGroup && activeGroup.id !== group.id} class:active-link={activeGroup?.id === group.id} x1={rootPoint().x} y1={rootPoint().y} x2={currentGroup.x} y2={currentGroup.y} />
        {/each}
        {#if activeGroup}
          {#each activeLeaves as leaf (leaf.id)}
            {@const activePosition = groupPoint(activeGroup)}
            {@const currentLeaf = leafPoint(leaf)}
            <line data-motion-leaf-link class:active-link={selectedLeaf?.id === leaf.id} x1={activePosition.x} y1={activePosition.y} x2={currentLeaf.x} y2={currentLeaf.y} />
          {/each}
        {/if}
      </svg>

      <button data-motion-root class:root-open={activeGroup} class="map-root" type="button" onclick={resetMap} aria-pressed={!activeGroup} aria-controls="map-branch-panel" style={`--x: ${rootPoint().x}%; --y: ${rootPoint().y}%;`}>
        <span class="map-root__signal" aria-hidden="true"></span>
        <span>What is getting<br />in your way?</span>
        {#if activeGroup}<small>Start over</small>{/if}
      </button>

      {#each groups as group (group.id)}
        {@const currentGroupButton = groupPoint(group)}
        {@const receded = Boolean(activeGroup) && activeGroup?.id !== group.id}
        <button data-motion-group type="button" class:active={activeGroup?.id === group.id} class:receded class="map-node map-node--group" inert={receded} tabindex={receded ? -1 : 0} style={`--x: ${currentGroupButton.x}%; --y: ${currentGroupButton.y}%;`} onclick={() => chooseGroup(group.id)} aria-pressed={activeGroup?.id === group.id} aria-expanded={activeGroup?.id === group.id} aria-controls="map-branch-panel">
          <span class="map-node__signal" aria-hidden="true"></span>
          <span>{group.label}</span>
        </button>
      {/each}

      {#if activeGroup}
        {#each activeLeaves as leaf (leaf.id)}
          {@const currentLeafButton = leafPoint(leaf)}
          <button data-motion-leaf type="button" class:active={selectedLeaf?.id === leaf.id} class="map-node map-node--leaf" style={`--x: ${currentLeafButton.x}%; --y: ${currentLeafButton.y}%;`} onclick={() => chooseLeaf(leaf.id)} onkeydown={noteKeyboardLeafSelection} aria-pressed={selectedLeaf?.id === leaf.id} aria-controls="map-answer-panel">
            <span class="map-node__signal" aria-hidden="true"></span>
            <span>{leaf.label}</span>
          </button>
        {/each}
      {/if}
      <p class="constellation__hint">{activeGroup ? 'This branch is open. Choose the version that feels closest.' : 'Choose the broad friction that feels closest.'}</p>
    </section>

    {#if activeGroup && !selectedLeaf}
      <section class="orientation-card" id="map-branch-panel" aria-labelledby="orientation-title">
        <p class="meta">{activeGroup.label.replace('\n', ' ')}</p>
        <h3 id="orientation-title">{activeGroup.title}</h3>
        <p>{activeGroup.copy}</p>
        <p class="orientation-card__prompt">Choose the more specific shape from the opened branch above, or use the list below.</p>
      </section>
    {/if}

    {#if selectedLeaf}
      <section class="answer-panel" id="map-answer-panel" aria-labelledby="answer-title">
        <div><p class="meta">{activeGroup?.label.replace('\n', ' ') ?? 'Current branch'} / a specific shape</p><h3 bind:this={answerHeading} id="answer-title" tabindex="-1">{selectedLeaf.title}</h3>{#if !selectedLeaf.isAuthoredCard}<p class="answer-panel__fallback">Neutral fallback — tailored guidance for this leaf is still being written.</p>{/if}</div>
        <dl class="answer-panel__guidance">
          <div><dt>What this can look like</dt><dd>{selectedLeaf.card.scene}</dd></div>
          <div><dt>Why it gets expensive or frustrating</dt><dd>{selectedLeaf.card.consequence}</dd></div>
          <div><dt>One useful question</dt><dd>{selectedLeaf.card.question}</dd></div>
          <div><dt>Try this first</dt><dd>{selectedLeaf.card.firstMove}</dd></div>
          <div><dt>A possible Belt path</dt><dd>{selectedLeaf.card.beltPath}</dd></div>
          <div><dt>Optional human handoff</dt><dd>{selectedLeaf.card.handoff}</dd></div>
        </dl>
        <div class="answer-panel__next"><p class="meta">Keep exploring locally</p><p>This map does not submit, store, or send what you select.</p><div class="actions"><button class="button secondary" type="button" onclick={() => chooseGroup(selectedLeaf.groupId)}>Back to this branch</button></div></div>
      </section>
    {/if}

    <section class="linear-route" aria-labelledby="linear-route-title">
      <div class="linear-route__head"><div><p class="eyebrow">Prefer a list?</p><h3 id="linear-route-title">The same map, in a linear route.</h3></div><p>This is not a fallback of lesser quality. It is the same navigation without needing to parse the visual field.</p></div>
      <div class="linear-route__groups">
        {#each groups as group (group.id)}
          <div class:active={activeGroup?.id === group.id} class="linear-group">
            <button type="button" onclick={() => chooseGroup(group.id)} aria-pressed={activeGroup?.id === group.id}><strong>{group.label.replace('\n', ' ')}</strong><span>{group.short}</span></button>
            {#if activeGroup?.id === group.id}<div class="linear-leaves" aria-label={`${group.label.replace('\n', ' ')} specific problems`}>{#each activeLeaves as leaf (leaf.id)}<button type="button" class:active={selectedLeaf?.id === leaf.id} onclick={() => chooseLeaf(leaf.id)} aria-pressed={selectedLeaf?.id === leaf.id}>{leaf.label}</button>{/each}</div>{/if}
          </div>
        {/each}
      </div>
    </section>
  </div>
</section>

<section class="map-close" aria-label="Problem map closing note"><div class="wrap grid two"><div><p class="eyebrow">A small honest boundary</p><h2>Not every problem needs new software.</h2></div><div><p class="lead">A clearer process, a better use of an existing tool, or one repaired path may be the useful answer. If you are not sure, bring the annoying part rather than trying to name the solution.</p><div class="actions"><a class="button secondary" href="/services">See service lanes</a><a class="button" href="/contact?type=Problem%20Map%20%C2%B7%20General">Bring the problem</a></div></div></div></section>

<style>
  .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
  .map-hero { position:relative; overflow:hidden; padding:clamp(4.5rem,10vw,8rem) 0 clamp(3rem,7vw,5rem); border-bottom:1px solid var(--line); background:radial-gradient(circle at 78% 28%,rgba(215,255,99,.13),transparent 18rem),radial-gradient(circle at 24% 78%,rgba(255,184,77,.08),transparent 21rem),#070706; }
  .map-hero::after { content:''; position:absolute; inset:0; pointer-events:none; opacity:.45; background-image:radial-gradient(rgba(239,238,231,.16) .7px,transparent .7px); background-size:19px 19px; mask-image:linear-gradient(90deg,transparent,black 22%,black 78%,transparent); }
  .map-hero__copy { position:relative; z-index:1; } .map-hero h1 { max-width:900px; }
  .guide { max-width:760px; margin-top:1.25rem; border-left:2px solid var(--accent); padding:1rem; color:var(--muted); background:rgba(255,255,255,.025); line-height:1.55; } .guide strong { color:var(--text); }
  .map-section { padding:clamp(3.5rem,8vw,6rem) 0; border-bottom:1px solid var(--line); } .map-section__head { display:grid; grid-template-columns:minmax(0,1fr) minmax(260px,400px); gap:2rem; align-items:end; margin-bottom:1.5rem; } .map-section__head h2 { max-width:750px; margin-bottom:0; } .map-note { color:var(--muted); line-height:1.55; margin:0; }
  .map-breadcrumb { display:flex; flex-wrap:wrap; gap:.55rem; align-items:center; min-height:2.5rem; margin-bottom:.9rem; color:var(--muted); font-size:.82rem; } .map-breadcrumb button { padding:.32rem .5rem; border:1px solid transparent; color:var(--muted); background:transparent; cursor:pointer; } .map-breadcrumb button:hover,.map-breadcrumb button.active { border-color:var(--line); color:var(--text); } .map-breadcrumb button:focus-visible { border-color:var(--line); color:var(--text); outline:2px solid var(--accent); outline-offset:2px; } .map-breadcrumb__current { color:var(--accent); }
  /* One light source at the centre, falling off outward, over a fine field-note grain. */
  .constellation { position:relative; min-height:clamp(760px,74vw,940px); scroll-margin-top:8rem; overflow:hidden; border:1px solid rgba(190,202,255,.16); isolation:isolate; background-color:#0a0a17; background-image:radial-gradient(rgba(226,232,255,.05) .5px,transparent .5px),radial-gradient(ellipse 40rem 33rem at 50% 50%,rgba(142,174,255,.13),rgba(118,144,255,.05) 46%,transparent 74%),radial-gradient(ellipse 30rem 25rem at 16% 86%,rgba(82,190,255,.075),transparent 70%); background-repeat:repeat,no-repeat,no-repeat; background-size:22px 22px,auto,auto; box-shadow:inset 0 0 9rem rgba(4,4,14,.6),0 1rem 4rem rgba(0,0,0,.14); }
  .constellation::before { content:''; position:absolute; z-index:0; pointer-events:none; width:min(36rem,88%); aspect-ratio:1; top:50%; left:50%; transform:translate(-50%,-50%); border-radius:50%; background:radial-gradient(circle,rgba(178,198,255,.17),rgba(126,150,255,.07) 44%,transparent 71%); animation:field-breath 38s ease-in-out infinite; }
  .constellation::after { content:''; position:absolute; pointer-events:none; width:49rem; height:45rem; top:50%; left:50%; transform:translate(-50%,-50%) rotate(18deg); border:1px solid rgba(196,204,255,.085); border-radius:48% 52% 45% 55% / 54% 43% 57% 46%; }
  @keyframes field-breath { 0%,100% { transform:translate(-50%,-50%) scale(1); opacity:.8; } 50% { transform:translate(-50%,-50%) scale(1.04); opacity:1; } }
  .constellation__links { position:absolute; inset:0; z-index:0; width:100%; height:100%; overflow:visible; } .constellation__links line { stroke:rgba(192,205,255,.26); stroke-width:.28; vector-effect:non-scaling-stroke; filter:drop-shadow(0 0 6px rgba(118,160,255,.2)); transition:stroke .55s cubic-bezier(.22,.61,.24,1),opacity .55s cubic-bezier(.22,.61,.24,1),stroke-width .55s cubic-bezier(.22,.61,.24,1),filter .55s ease; } .constellation__links line.quiet { opacity:.16; stroke-width:.2; } .constellation__links line.active-link { stroke:rgba(214,230,255,.85); stroke-width:.6; filter:drop-shadow(0 0 10px rgba(151,195,255,.68)); }
  .map-root,.map-node { position:absolute; z-index:2; left:var(--x); top:var(--y); transform:translate(-50%,-50%); color:var(--text); cursor:pointer; transition:opacity .55s cubic-bezier(.22,.61,.24,1),transform .55s cubic-bezier(.22,.61,.24,1),filter .55s cubic-bezier(.22,.61,.24,1),border-color .35s ease,background .35s ease,box-shadow .35s ease; }
  /* Tier 1: the anchor. Fluid so it cannot crowd the ring on narrow desktops. */
  .map-root { display:grid; place-items:center; width:clamp(9.4rem,16.5vw,12rem); aspect-ratio:1; padding:1rem; border:1px solid rgba(220,226,255,.5); border-radius:50%; background:radial-gradient(circle at 44% 36%,rgba(232,239,255,.23),rgba(146,166,255,.13) 41%,rgba(18,18,48,.76) 73%); box-shadow:0 0 0 1.1rem rgba(165,175,255,.035),0 0 5.5rem rgba(125,143,255,.22),inset 0 0 2.2rem rgba(225,232,255,.1); text-align:center; text-wrap:balance; line-height:1.1; letter-spacing:-.005em; font-family:inherit; font-size:clamp(1rem,1.3vw,1.14rem); font-weight:600; } .map-root:hover,.map-root.root-open { border-color:#f0f3ff; filter:drop-shadow(0 0 1.1rem rgba(195,211,255,.45)); box-shadow:0 0 0 1.1rem rgba(180,195,255,.08),0 0 5rem rgba(154,172,255,.3),inset 0 0 2rem rgba(235,241,255,.13); } .map-root:focus-visible { border-color:#f0f3ff; outline:2px solid var(--accent); outline-offset:4px; } .map-root small { margin-top:.42rem; color:#dce9ff; font-size:.66rem; font-weight:500; letter-spacing:.1em; text-transform:uppercase; } .map-root__signal { width:.65rem; height:.65rem; border-radius:50%; background:var(--accent); box-shadow:0 0 16px rgba(215,255,99,.85); }
  /* Tier 2: categories. The primary navigational voice of the field. */
  .map-node { display:inline-flex; justify-content:center; align-items:center; gap:.42rem; max-width:min(11rem,22%); padding:.7rem .82rem; border:1px solid rgba(218,224,255,.30); border-radius:1.25rem 1.5rem 1.35rem 1.65rem / 1.45rem 1.25rem 1.6rem 1.3rem; background:linear-gradient(135deg,rgba(229,233,255,.12),rgba(118,130,218,.10) 45%,rgba(15,15,40,.66)); box-shadow:inset 0 0 1.8rem rgba(214,224,255,.07),0 0 1.6rem rgba(124,139,255,.11); text-align:center; text-wrap:balance; white-space:pre-line; overflow-wrap:break-word; line-height:1.2; font-family:inherit; font-size:clamp(.78rem,1.02vw,.92rem); font-weight:600; backdrop-filter:blur(8px); } .map-node:hover { border-color:rgba(245,247,255,.75); transform:translate(-50%,calc(-50% - 3px)); box-shadow:inset 0 0 1.8rem rgba(233,239,255,.15),0 0 2rem rgba(166,181,255,.26); } .map-node:focus-visible { border-color:rgba(245,247,255,.85); transform:translate(-50%,calc(-50% - 3px)); outline:2px solid var(--accent); outline-offset:3px; } .map-node.active { border-color:var(--accent); background:linear-gradient(135deg,rgba(224,255,191,.21),rgba(155,177,255,.15) 52%,rgba(21,22,50,.76)); box-shadow:0 0 0 4px rgba(194,213,255,.08),0 0 2.4rem rgba(166,185,255,.27); }
  /* Depth, not deletion: unopened categories stay where they are, further back. */
  .map-node.receded { opacity:.32; filter:saturate(.5) blur(.7px); transform:translate(-50%,-50%) scale(.9); border-color:rgba(202,210,255,.14); box-shadow:none; pointer-events:none; }
  /* Tier 3: leaves. Same reading size, warm edge shared with the linear route. */
  .map-node--leaf { z-index:3; max-width:min(12rem,23%); border-color:rgba(255,184,77,.34); background:linear-gradient(135deg,rgba(255,226,182,.09),rgba(127,116,198,.1) 46%,rgba(20,17,48,.74)); font-weight:400; font-size:clamp(.75rem,.95vw,.86rem); animation:leaf-arrive .62s cubic-bezier(.22,.61,.24,1); } .map-node--leaf:hover,.map-node--leaf:focus-visible { border-color:rgba(255,209,138,.85); } .map-node--leaf.active { border-color:var(--accent); background:linear-gradient(135deg,rgba(224,255,191,.21),rgba(155,177,255,.15) 52%,rgba(21,22,50,.76)); }
  @keyframes leaf-arrive { from { opacity:0; filter:blur(2px); } to { opacity:1; filter:blur(0); } }
  .map-node__signal { flex:0 0 auto; width:.46rem; height:.46rem; margin-top:.18rem; border-radius:50%; background:#d6e4ff; box-shadow:0 0 12px rgba(184,205,255,.8); } .map-node--leaf .map-node__signal { background:#ffcf8a; box-shadow:0 0 12px rgba(255,196,120,.7); } .map-node.active .map-node__signal { background:var(--accent); box-shadow:0 0 12px rgba(215,255,99,.85); }
  .constellation__hint { position:absolute; z-index:1; right:1rem; bottom:.9rem; max-width:18rem; margin:0; color:#c6cde2; font-size:.78rem; line-height:1.4; text-align:right; transition:opacity .45s ease; } .branch-open .constellation__hint { opacity:.66; }
  .orientation-card,.answer-panel { margin-top:1rem; border:1px solid var(--line); background:linear-gradient(135deg,rgba(215,255,99,.06),rgba(255,255,255,.016) 46%,rgba(255,184,77,.03)); } .orientation-card { padding:clamp(1.2rem,3vw,2rem); } .orientation-card h3 { max-width:38rem; margin-bottom:.7rem; text-wrap:balance; line-height:1.14; font-size:clamp(1.5rem,2.6vw,2.35rem); } .orientation-card>p:not(.meta) { max-width:46rem; color:var(--muted); line-height:1.6; } .orientation-card__prompt { color:var(--text)!important; }
  .answer-panel { display:grid; grid-template-columns:minmax(0,.8fr) minmax(0,1.18fr) minmax(13rem,.58fr); gap:1.6rem; padding:clamp(1.3rem,3vw,2.3rem); } .answer-panel h3 { max-width:24rem; margin-bottom:0; text-wrap:balance; letter-spacing:-.01em; line-height:1.14; font-size:clamp(1.45rem,2.3vw,2.15rem); } .answer-panel__fallback { margin:1rem 0 0; padding:.7rem; border-left:2px solid rgba(255,184,77,.8); color:var(--muted); font-size:.9rem; line-height:1.45; } .answer-panel__guidance { display:grid; gap:1rem; margin:0; } .answer-panel__guidance div { border-left:2px solid var(--accent); padding-left:.78rem; } .answer-panel__guidance dt { color:#cfc5a8; font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; } .answer-panel__guidance dd { margin:.3rem 0 0; color:var(--muted); line-height:1.48; } .answer-panel__next { padding-left:1.3rem; border-left:1px solid var(--line); } .answer-panel__next>p:not(.meta) { color:var(--text); line-height:1.5; }
  .linear-route { margin-top:1rem; padding:clamp(1.1rem,3vw,1.75rem); border:1px solid var(--line); background:rgba(255,255,255,.013); } .linear-route__head { display:grid; grid-template-columns:minmax(0,1fr) minmax(240px,.65fr); gap:1rem; align-items:end; margin-bottom:1rem; } .linear-route__head h3 { margin-bottom:0; } .linear-route__head>p { margin:0; color:var(--muted); line-height:1.5; font-size:.88rem; } .linear-route__groups { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.7rem; } .linear-group { border:1px solid var(--line); background:rgba(0,0,0,.14); } .linear-group.active { border-color:rgba(215,255,99,.6); } .linear-group>button { width:100%; padding:.9rem; border:0; color:var(--text); background:transparent; text-align:left; cursor:pointer; font-family:inherit; } .linear-group>button:hover,.linear-group>button:focus-visible { background:rgba(215,255,99,.06); outline:1px solid var(--accent); outline-offset:-1px; } .linear-group strong { display:block; line-height:1.3; } .linear-group span { display:block; margin-top:.38rem; color:var(--muted); font-size:.82rem; line-height:1.42; } .linear-leaves { display:grid; gap:.42rem; padding:0 .7rem .7rem; } .linear-leaves button { padding:.66rem; border:1px solid rgba(255,184,77,.35); color:var(--text); background:rgba(255,184,77,.035); text-align:left; cursor:pointer; font-family:inherit; } .linear-leaves button:hover,.linear-leaves button.active { border-color:var(--accent); background:rgba(215,255,99,.08); } .linear-leaves button:focus-visible { border-color:var(--accent); background:rgba(215,255,99,.08); outline:2px solid var(--accent); outline-offset:-2px; }
  .map-close { padding:clamp(3.5rem,8vw,6rem) 0; background:linear-gradient(180deg,rgba(215,255,99,.035),transparent); }
  @media (max-width:1180px) { .answer-panel { grid-template-columns:minmax(0,1fr) minmax(0,1.15fr); } .answer-panel__next { grid-column:1/-1; padding:1.2rem 0 0; border-top:1px solid var(--line); border-left:0; } }
  @media (max-width:900px) { .map-node { max-width:min(9.5rem,21%); } .map-section__head,.linear-route__head,.answer-panel { grid-template-columns:1fr; } .answer-panel__next { padding:1.2rem 0 0; border-top:1px solid var(--line); border-left:0; } }
  @media (max-width:620px) { .constellation { min-height:640px; } .constellation.branch-open { min-height:740px; } .constellation::before { width:19rem; } .constellation::after { width:31rem; height:31rem; } .map-root { width:8.4rem; font-size:.86rem; } .map-root small { font-size:.6rem; } .map-node { max-width:30%; padding:.4rem .44rem; line-height:1.12; font-size:.66rem; } .map-node.receded { opacity:.16; transform:translate(-50%,-50%) scale(.72); } .map-node--leaf { max-width:29%; padding:.46rem .5rem; font-size:.7rem; } .constellation__hint { left:1rem; right:auto; text-align:left; } .linear-route__groups { grid-template-columns:1fr; } }
  @media (prefers-reduced-motion:reduce) { .map-node,.map-root,.constellation__links line,.constellation__hint { transition:none; } .map-node--leaf,.constellation::before { animation:none; } .map-node:hover,.map-node:focus-visible { transform:translate(-50%,-50%); } }
  @media (prefers-reduced-transparency:reduce) { .constellation { background-image:none; background-color:#0b0b1a; box-shadow:none; } .constellation::before,.constellation::after { display:none; } .constellation__links line { stroke:rgba(206,216,255,.55); filter:none; } .constellation__links line.quiet { opacity:.3; } .map-root { background:#17173d; } .map-node { background:#171833; backdrop-filter:none; } .map-node--leaf { background:#1f1a33; } .map-node.active,.map-node--leaf.active { background:#242b1a; } .map-node.receded { opacity:.55; filter:none; } .guide,.orientation-card,.answer-panel { background:#101013; } .linear-route { background:#0e0e11; } .linear-group { background:#121215; } .linear-leaves button { background:#1a160f; } }
  @media (forced-colors:active) { .constellation::before,.constellation::after { display:none; } .constellation__links line { stroke:CanvasText; filter:none; } .map-root,.map-node { background:Canvas; color:CanvasText; border-color:CanvasText; box-shadow:none; } .map-node.active,.map-root.root-open { border-color:Highlight; } .map-node.receded { filter:none; } .map-node__signal,.map-root__signal { background:CanvasText; box-shadow:none; } }
</style>
