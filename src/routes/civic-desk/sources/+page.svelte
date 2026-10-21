<svelte:head>
  <title>Source ledger | Towpath Civic</title>
  <meta name="description" content="Verification record for every Towpath Civic summary: sources, retrieval dates, reviews, corrections." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
</svelte:head>

<section class="section">
  <div class="wrap policy">
    <nav class="crumbs"><a href="/civic-desk/">Towpath Civic</a> › Source ledger</nav>
    <p class="eyebrow">Verification</p>
    <h1>Source ledger</h1>
    <p class="lead">Every summary carries a durable verification record: the official source, its publication date, our retrieval and review timestamps, and any correction history. First beat, live now: Akron public safety and police accountability plus city services, sourced from official City of Akron releases.</p>

    <article class="card large">
      <h2>Ledger fields</h2>
      <ul class="check-list">
        <li>City and department</li>
        <li>Beat</li>
        <li>Official source title</li>
        <li>Official URL</li>
        <li>Source publication date</li>
        <li>Retrieval timestamp</li>
        <li>Verified by</li>
        <li>Summary publication timestamp</li>
        <li>Latest review timestamp</li>
        <li>Correction history</li>
        <li>Public/private classification</li>
      </ul>
    </article>

    <article class="card large">
      <h2>Rules</h2>
      <ul class="check-list">
        <li>No entry without an official URL or public record.</li>
        <li>No secret keys, private contact material, or non-public credentials.</li>
        <li>No unverifiable rumor.</li>
        <li>Material corrections append history rather than erase it.</li>
        <li>Source data stays neutral and linked.</li>
      </ul>
    </article>

    <div class="actions"><a class="button secondary" href="/civic-desk/corrections/">Corrections policy</a></div>
  </div>
</section>

<style>
  .policy { max-width: 980px; }
  .crumbs { color: var(--muted); font-size: .82rem; margin-bottom: 1.1rem; }
  .crumbs a { color: var(--accent); text-decoration: none; }
  .lead { color: var(--muted); line-height: 1.6; max-width: 760px; }
  .card.large { margin-top: 1rem; padding: 1.7rem; }
  .card h2 { font-size: 1.65rem; margin-bottom: .9rem; }
  .check-list { display: grid; gap: .75rem; margin: 0; padding: 0; list-style: none; color: var(--muted); line-height: 1.55; }
  .check-list li::before { content: '✓'; color: var(--accent); font-weight: 900; margin-right: .65rem; }
  .actions { margin-top: 1.8rem; }
</style>
