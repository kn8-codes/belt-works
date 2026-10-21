<svelte:head>
  <title>Corrections policy | Towpath Civic</title>
  <meta name="description" content="Corrections and review policy for source-linked civic announcement summaries." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
</svelte:head>

<section class="section">
  <div class="wrap policy">
    <nav class="crumbs"><a href="/civic-desk/">Towpath Civic</a> › Corrections</nav>
    <p class="eyebrow">Accuracy</p>
    <h1>Corrections and source policy</h1>
    <p class="lead">Official government records remain primary. This project summarizes, links, and organizes public information; it does not replace the source, invent details, or publish rumor.</p>

    <article class="card large">
      <h2>Before publication</h2>
      <ul class="check-list">
        <li>Identify the official announcement or public record.</li>
        <li>Record the source URL, retrieval date, and publication date when shown.</li>
        <li>Write an original summary rather than copying the government text.</li>
        <li>Separate verified facts from interpretation or context.</li>
        <li>Mark missing dates, unclear agency authority, or unconfirmed details as unavailable.</li>
        <li>Preserve a visible link to the official source.</li>
      </ul>
    </article>

    <article class="card large">
      <h2>After publication</h2>
      <ul class="check-list">
        <li>Keep the original publication timestamp.</li>
        <li>Record the latest review timestamp when an item is rechecked.</li>
        <li>Publish material corrections visibly near the top of the page.</li>
        <li>Do not silently rewrite a substantive claim.</li>
        <li>Link to a replacement official record when the city updates its own announcement.</li>
      </ul>
    </article>

    <article class="card large">
      <h2>What is excluded</h2>
      <ul class="check-list">
        <li>Confidential or operational public-safety information.</li>
        <li>Personal contact details of private residents.</li>
        <li>Political campaign advocacy or endorsements.</li>
        <li>Unverified rumors.</li>
        <li>Anything requiring paid access or non-public credentials.</li>
      </ul>
    </article>

    <div class="actions"><a class="button secondary" href="/civic-desk/">Back to draft home</a></div>
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
