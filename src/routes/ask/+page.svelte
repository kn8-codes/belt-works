<script>
  let form = $state({
    name: '',
    email: '',
    phone: '',
    location: '',
    urgency: 'Not urgent / just on my mind',
    usefulHelp: '',
    shareAnonymized: 'Ask me first',
    message: '',
    website: ''
  });
  let isSubmitting = $state(false);
  let success = $state(false);
  let error = $state('');

  function buildMessage() {
    const lines = [
      form.message,
      '',
      '---',
      `Where this is happening: ${form.location || 'Not provided'}`,
      `Urgency: ${form.urgency}`,
      `Useful help, if known: ${form.usefulHelp || 'Not provided'}`,
      `Can share anonymized version: ${form.shareAnonymized}`
    ];

    return lines.join('\n').trim();
  }

  /** @param {SubmitEvent} event */
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    success = false;
    error = '';

    const payload = {
      name: form.name || 'Ask page submission',
      email: form.email || 'hello@belt.works',
      phone: form.phone,
      type: 'What’s on your mind?',
      message: buildMessage(),
      website: form.website
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Could not send this yet.');
      }

      success = true;
      form = {
        name: '',
        email: '',
        phone: '',
        location: '',
        urgency: 'Not urgent / just on my mind',
        usefulHelp: '',
        shareAnonymized: 'Ask me first',
        message: '',
        website: ''
      };
    } catch (err) {
      error = err instanceof Error ? err.message : 'Could not send this yet.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>What’s on your mind? | belt.works</title>
  <meta
    name="description"
    content="A small Akron-first help loop for local friction, confusing processes, questions, complaints, and things people wish existed."
  />
</svelte:head>

<section class="hero ask-hero" aria-label="What’s on your mind introduction">
  <div class="wrap ask-hero__grid">
    <div>
      <p class="eyebrow">Akron-first help loop</p>
      <h1>What’s on your mind?</h1>
      <p class="lead lede-tight">
        We’re testing a small Akron-first help loop. If something local is confusing,
        frustrating, broken, hard to navigate, or just sitting in your head, tell us about it.
        You do not need to know the answer yet.
      </p>
      <div class="actions">
        <a class="button" href="#ask-form">Share what’s on your mind</a>
        <a class="button secondary" href="/blog/what-is-on-your-mind">Read the note</a>
      </div>
    </div>

    <aside class="card large ask-note" aria-label="How the help loop works">
      <p class="meta">plain terms</p>
      <p>
        Bring the messy version. We’ll look for the practical problem inside it and see whether it
        can become a next step, resource path, script, checklist, explainer, handout, or small tool.
      </p>
      <p>No public scoring. No gig-work nonsense. No promises we cannot keep.</p>
    </aside>
  </div>
</section>

<section class="section" aria-label="Ask form">
  <div class="wrap grid two ask-grid">
    <article class="card large">
      <p class="eyebrow">Before you send</p>
      <h2>Broad at the door. Structured after entry.</h2>
      <ul class="list">
        <li>It can be a problem, a question, a complaint, something confusing, or something broken.</li>
        <li>You do not need to know what kind of help you need yet.</li>
        <li>Manual review only. Nothing becomes public without permission.</li>
        <li>This is not an emergency service or a case-management agency.</li>
      </ul>
      <p class="form-note emergency-note">
        Do not send private medical, legal, financial, or safety-critical details. If there is
        immediate danger, contact local emergency services or a trusted local provider.
      </p>
    </article>

    <article id="ask-form" class="card large ask-form-card">
      {#if success}
        <div class="form-success-block">
          <h2>Received.</h2>
          <p>Someone will read this. No promise machine, just a real review loop.</p>
          <button class="button secondary" type="button" onclick={() => (success = false)}>Send another</button>
        </div>
      {:else}
        <form onsubmit={handleSubmit} aria-label="What’s on your mind form">
          <label>
            Tell us what’s on your mind.
            <textarea
              bind:value={form.message}
              rows="7"
              maxlength="5000"
              required
              placeholder="It can be a problem, a question, a complaint, something confusing, something broken, or something you wish existed."
            ></textarea>
          </label>

          <label>
            Where is this happening, if location matters?
            <input bind:value={form.location} maxlength="200" placeholder="Neighborhood, street, agency, website, form, etc." />
          </label>

          <label>
            How urgent does it feel?
            <select bind:value={form.urgency}>
              <option>Not urgent / just on my mind</option>
              <option>Soon, but not an emergency</option>
              <option>Urgent, but not immediate danger</option>
              <option>I am not sure</option>
            </select>
          </label>

          <label>
            What kind of help might be useful, if you know?
            <textarea
              bind:value={form.usefulHelp}
              rows="3"
              maxlength="1000"
              placeholder="A next step, resource path, script, checklist, explainer, small tool, or something else."
            ></textarea>
          </label>

          <label>
            Can we share an anonymized version if it becomes useful?
            <select bind:value={form.shareAnonymized}>
              <option>Ask me first</option>
              <option>Yes, if personal details are removed</option>
              <option>No</option>
            </select>
          </label>

          <label>
            Optional contact path
            <input bind:value={form.email} type="email" autocomplete="email" maxlength="200" placeholder="email@example.com" />
          </label>

          <label>
            Optional name
            <input bind:value={form.name} type="text" autocomplete="name" maxlength="200" />
          </label>

          <label>
            Optional phone
            <input bind:value={form.phone} type="tel" autocomplete="tel" maxlength="200" />
          </label>

          <!-- Honeypot: hidden from humans, tempting to bots. Server rejects if filled. -->
          <label class="hp-field" aria-hidden="true">Website<input bind:value={form.website} tabindex="-1" autocomplete="off" /></label>

          {#if error}<p class="form-error" role="alert">{error}</p>{/if}

          <button class="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Share what’s on your mind'}
          </button>
        </form>
      {/if}

      <div class="optional-support" aria-label="Optional support">
        <p class="eyebrow">Optional support</p>
        <p>
          If you want to help keep this kind of local, practical work going, support is appreciated.
          It is never required to be heard.
        </p>
        <code>TheeCodePoet.eth</code>
      </div>
    </article>
  </div>
</section>

<style>
  .ask-hero {
    padding-top: clamp(4.5rem, 10vw, 8rem);
  }

  .ask-hero__grid,
  .ask-grid {
    align-items: start;
  }

  .ask-hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 400px);
    gap: clamp(2rem, 6vw, 5rem);
  }

  .ask-note {
    background:
      radial-gradient(circle at 0% 0%, rgba(215, 255, 99, 0.12), transparent 18rem),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.012));
  }

  .ask-note p,
  .form-success-block p {
    color: var(--muted);
    line-height: 1.6;
  }

  .ask-form-card {
    scroll-margin-top: 6rem;
  }

  .ask-form-card select {
    width: 100%;
    border: 1px solid var(--line);
    background: #0f0f0c;
    color: var(--text);
    padding: 0.85rem;
  }

  .ask-form-card select:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .emergency-note {
    border-top: 1px solid var(--line);
    margin-top: 1.5rem;
    padding-top: 1rem;
  }

  .optional-support {
    border-top: 1px solid var(--line);
    margin-top: 2rem;
    padding-top: 1.25rem;
  }

  .optional-support p {
    color: var(--muted);
    line-height: 1.55;
  }

  .optional-support code {
    display: inline-block;
    border: 1px solid var(--line);
    background: #050504;
    color: var(--text);
    padding: 0.45rem 0.6rem;
    overflow-wrap: anywhere;
  }

  @media (max-width: 820px) {
    .ask-hero__grid {
      grid-template-columns: 1fr;
    }
  }
</style>
