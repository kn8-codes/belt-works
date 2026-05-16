<svelte:head>
  <title>Rooms moved | belt.works</title>
  <meta name="description" content="ROOMS has been folded into the public Mesh Status cockpit." />
</svelte:head>

<section class="route-title">
  <div class="wrap">
    <p class="eyebrow">Rooms</p>
    <h1>Rooms became mesh status.</h1>
    <p class="lead">
      The illustrated room prototype is still useful source material, but the public surface now needs to read like an operator
      cockpit. The current version lives at `/mesh`.
    </p>
    <div class="actions">
      <a class="button" href="/mesh">Open mesh status</a>
      <a class="button secondary" href="/method">Read the method</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid two">
    <article class="card large">
      <p class="eyebrow">Why the change</p>
      <h2>Less dollhouse. More cockpit.</h2>
      <p>
        The rooms concept proved the shape: separate nodes, visible queues, inspectable work. Mesh Status keeps that structure
        and drops the toy framing before it starts wearing little goggles. Nobody needs that.
      </p>
    </article>
    <article class="mono-panel">
      <p><strong>Old route:</strong> /rooms</p>
      <p><strong>Current route:</strong> /mesh</p>
      <p><strong>Status:</strong> public-safe static cockpit</p>
      <p><strong>Next:</strong> scheduled GitHub commit snapshots</p>
    </article>
  </div>
</section>
