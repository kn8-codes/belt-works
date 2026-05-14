<svelte:head>
  <title>belt.works/start</title>
  <meta
    name="description"
    content="belt.works builds community-first tools for people who are done building someone else's thing."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<script>
  import { applyAction, enhance } from '$app/forms';
  import { resolve } from '$app/paths';

  let { form } = $props();

  let fields = $state({
    name: '',
    email: '',
    what_they_want: ''
  });

  let isSubmitting = $state(false);

  function enhanceLeadForm() {
    isSubmitting = true;

    /** @param {{ result: any; formElement: HTMLFormElement }} submission */
    return async (submission) => {
      const { result, formElement } = submission;

      isSubmitting = false;
      await applyAction(result);

      if (result.type === 'success') {
        fields = { name: '', email: '', what_they_want: '' };
        formElement.reset();
        return;
      }

      if (result.type === 'failure' && result.data?.values) {
        fields = {
          name: result.data.values.name ?? '',
          email: result.data.values.email ?? '',
          what_they_want: result.data.values.what_they_want ?? ''
        };
      }
    };
  }

  const projects = [
    {
      name: 'BBB Prints',
      description: 'Custom print configurator for a local shop. Keeps bad files out and saves everybody time.',
      status: 'live'
    },
    {
      name: 'BoomMates',
      description: 'Stable housing platform for Akron. Built for people who need a place to land.',
      status: 'in development'
    },
    {
      name: 'belt.intel',
      description: 'Threat intel feed for self-taught security people. Plain language, not enterprise fluff.',
      status: 'in development'
    },
    {
      name: 'The Hairdresser Project',
      description: 'Portable stylist profiles, community, booking, and payment that are actually yours.',
      status: 'in development'
    }
  ];
</script>

<main class="start-shell">
  <a class="back-link fade-in" style="--delay: 0ms" href={resolve('/')}>← belt.works</a>

  <section class="block hook-block fade-in" style="--delay: 80ms">
    <p class="eyebrow">belt.works/start</p>
    <h1>You built the reputation — you should own it.</h1>
    <p class="subhead">
      belt.works builds community-first tools for people who are done building someone else's thing.
    </p>
  </section>

  <section class="block proof-block fade-in" style="--delay: 160ms" aria-label="Current belt.works projects">
    <div class="tiles">
      {#each projects as project (project.name)}
        <article class="tile">
          <div class="tile-topline">
            <h2>{project.name}</h2>
            <span class:live={project.status === 'live'} class="badge">{project.status}</span>
          </div>
          <p>{project.description}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="block ask-block fade-in" style="--delay: 240ms">
    <div class="ask-copy">
      <h2>Let's work.</h2>
      <p>Tell me what you're building or what's broken. I'll tell you if we can help.</p>
    </div>

    <form method="POST" class="lead-form" use:enhance={enhanceLeadForm}>
      <label>
        <span>Name</span>
        <input
          name="name"
          type="text"
          bind:value={fields.name}
          required
          minlength="2"
          maxlength="120"
          autocomplete="name"
          aria-describedby={form?.message ? 'start-form-status' : undefined}
        />
      </label>

      <label>
        <span>Email</span>
        <input
          name="email"
          type="email"
          bind:value={fields.email}
          required
          maxlength="160"
          autocomplete="email"
          aria-describedby={form?.message ? 'start-form-status' : undefined}
        />
      </label>

      <label>
        <span>What are you working on?</span>
        <input
          name="what_they_want"
          type="text"
          bind:value={fields.what_they_want}
          maxlength="140"
          placeholder="Optional"
          aria-describedby="start-what-count"
        />
      </label>

      <p id="start-what-count" class="field-note">{fields.what_they_want.length}/140</p>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : "Let's do this"}
      </button>

      {#if form?.success}
        <p id="start-form-status" class="status success" aria-live="polite">Thanks. {form.message}</p>
        {#if form.smsPending || form.emailPending}
          <p class="status note">One notification path is still catching up, but your note is in.</p>
        {/if}
      {:else if form?.message}
        <p id="start-form-status" class="status error" aria-live="assertive">{form.message}</p>
      {/if}
    </form>
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    background: #0e0e0e;
    color: #f0ede8;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  :global(*), :global(*::before), :global(*::after) {
    box-sizing: border-box;
  }

  :global(a:focus-visible),
  :global(button:focus-visible),
  :global(input:focus-visible) {
    outline: 2px solid #d97706;
    outline-offset: 3px;
  }

  .start-shell {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    gap: clamp(1rem, 2vh, 1.5rem);
    padding: clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 4vw, 4rem) clamp(1.25rem, 2vw, 2rem);
    max-width: 1280px;
    margin: 0 auto;
  }

  .block {
    max-width: 72rem;
  }

  .back-link,
  .eyebrow,
  .badge,
  .lead-form span {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.7rem;
  }

  .back-link {
    color: #b9a795;
    text-decoration: none;
    width: fit-content;
  }

  .back-link:hover {
    color: #d97706;
  }

  .eyebrow {
    color: #d97706;
    margin: 0 0 0.85rem;
  }

  h1,
  h2 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.03em;
    font-weight: 400;
    margin: 0;
  }

  h1 {
    font-size: clamp(3.25rem, 8vw, 6.75rem);
    line-height: 0.9;
    max-width: 10.5ch;
  }

  .subhead {
    margin: 0.9rem 0 0;
    max-width: 38rem;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.5;
    color: #cfc5ba;
  }

  .proof-block {
    align-self: start;
  }

  .tiles {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .tile {
    border: 1px solid rgba(217, 119, 6, 0.22);
    background: #151515;
    padding: 0.95rem 1rem 1rem;
    min-height: 10.5rem;
  }

  .tile-topline {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .tile h2 {
    font-size: 1.6rem;
    line-height: 0.95;
    max-width: 10ch;
  }

  .tile p,
  .ask-copy p,
  .status {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #b9a795;
  }

  .badge {
    color: #d97706;
    white-space: nowrap;
  }

  .badge.live {
    color: #f0ede8;
  }

  .ask-block {
    align-self: end;
    display: grid;
    grid-template-columns: minmax(0, 20rem) minmax(0, 28rem);
    gap: clamp(1rem, 3vw, 2.5rem);
    align-items: end;
  }

  .ask-copy h2 {
    font-size: clamp(2.35rem, 5vw, 3.6rem);
    margin-bottom: 0.45rem;
  }

  .lead-form {
    display: grid;
    gap: 0.8rem;
  }

  .lead-form label {
    display: grid;
    gap: 0.38rem;
  }

  .lead-form span {
    color: #d97706;
  }

  .lead-form input {
    width: 100%;
    border: 1px solid rgba(240, 237, 232, 0.2);
    background: #151515;
    color: #f0ede8;
    padding: 0.9rem 0.95rem;
    font: inherit;
  }

  .lead-form input:invalid:focus {
    border-color: #ff9a7a;
  }

  .lead-form input::placeholder {
    color: #7d7268;
  }

  .lead-form button {
    width: fit-content;
    min-width: 13rem;
    min-height: 3.25rem;
    border: 0;
    background: #d97706;
    color: #111111;
    font: inherit;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.9rem 1.25rem;
    cursor: pointer;
    transition: background 0.18s ease, transform 0.18s ease;
  }

  .lead-form button:hover:not(:disabled) {
    background: #f59e0b;
    transform: translateY(-1px);
  }

  .lead-form button:disabled {
    opacity: 0.7;
    cursor: wait;
  }

  .field-note {
    margin: -0.3rem 0 0;
    font-size: 0.78rem;
    color: #8d8177;
  }

  .status.success {
    color: #f0ede8;
  }

  .status.error {
    color: #ff9a7a;
  }

  .status.note {
    color: #d0b08b;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(16px);
    animation: fade-up 0.55s ease forwards;
    animation-delay: var(--delay, 0ms);
  }

  @keyframes fade-up {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 960px) {
    .start-shell {
      min-height: 100svh;
      grid-template-rows: auto auto auto;
      gap: 1rem;
    }

    .tiles {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .ask-block {
      grid-template-columns: 1fr;
      align-self: start;
    }
  }

  @media (max-width: 640px) {
    .start-shell {
      padding: 1rem 1rem 1.25rem;
    }

    h1 {
      max-width: 8.5ch;
    }

    .tiles {
      grid-template-columns: 1fr;
    }

    .tile {
      min-height: auto;
    }

    .lead-form button {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fade-in {
      animation: none;
      opacity: 1;
      transform: none;
    }

    .lead-form button {
      transition: none;
    }
  }
</style>
