<script>
  let submitted = $state(false);
  let submitting = $state(false);
  let error = $state('');

  // Formspree endpoint — replace with your actual form ID after signing up at formspree.io
  const FORMSPREE_ID = 'YOUR_FORM_ID';

  async function handleSubmit(/** @type {SubmitEvent} */ e) {
    e.preventDefault();
    submitting = true;
    error = '';

    const form = /** @type {HTMLFormElement} */ (e.target);
    const data = new FormData(form);

    // Honeypot check — if filled, silently drop
    if (data.get('_gotcha')) {
      submitted = true;
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        submitted = true;
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        error = body.error || 'Something went wrong. Try again or email us directly.';
      }
    } catch (err) {
      error = 'Network error. Check your connection and try again.';
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Request an Accessibility Audit | belt.works</title>
  <meta
    name="description"
    content="Free accessibility audits for Akron community organizations. No cost, no obligation, just useful findings."
  />
</svelte:head>

<section class="route-title">
  <div class="narrow">
    <p class="eyebrow">Ally</p>
    <h1>Bring your site. We'll audit it.</h1>
    <p class="lead">
      Free accessibility audits for community organizations in Akron and beyond. No cost. No
      obligation. Just useful findings you can act on.
    </p>
  </div>
</section>

<section class="section">
  <div class="narrow">
    {#if submitted}
      <div class="form-success">
        <h2>Received.</h2>
        <p>We'll review your request and reach out within 48 hours. If it's urgent, email us directly at <a href="mailto:hello@belt.works">hello@belt.works</a>.</p>
        <a href="/blog/a11y" class="button secondary">← Back to the Ally post</a>
      </div>
    {:else}
      <form class="ally-form" onsubmit={handleSubmit} aria-label="Accessibility audit request form">
        <!-- Honeypot — hidden from real users, traps bots -->
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" />

        <div class="form-group">
          <label for="org-name">Organization name <span class="required" aria-hidden="true">*</span></label>
          <input type="text" id="org-name" name="org_name" required autocomplete="organization" />
        </div>

        <div class="form-group">
          <label for="site-url">Website URL <span class="required" aria-hidden="true">*</span></label>
          <input type="url" id="site-url" name="site_url" required placeholder="https://example.org" autocomplete="url" />
        </div>

        <div class="form-group">
          <label for="contact-name">Contact name <span class="required" aria-hidden="true">*</span></label>
          <input type="text" id="contact-name" name="contact_name" required autocomplete="name" />
        </div>

        <div class="form-group">
          <label for="contact-email">Contact email <span class="required" aria-hidden="true">*</span></label>
          <input type="email" id="contact-email" name="contact_email" required autocomplete="email" />
        </div>

        <fieldset class="form-group">
          <legend>What do you want audited? <span class="required" aria-hidden="true">*</span></legend>
          <div class="checkbox-grid">
            <label class="check-label"><input type="checkbox" name="scope" value="full_site" /> Full site audit</label>
            <label class="check-label"><input type="checkbox" name="scope" value="specific_pages" /> Specific page(s)</label>
            <label class="check-label"><input type="checkbox" name="scope" value="mobile" /> Mobile accessibility</label>
            <label class="check-label"><input type="checkbox" name="scope" value="screen_reader" /> Screen reader compatibility</label>
            <label class="check-label"><input type="checkbox" name="scope" value="keyboard" /> Keyboard navigation</label>
            <label class="check-label"><input type="checkbox" name="scope" value="contrast" /> Color contrast / visual</label>
            <label class="check-label"><input type="checkbox" name="scope" value="forms" /> Forms and inputs</label>
            <label class="check-label"><input type="checkbox" name="scope" value="other" /> Other (explain below)</label>
          </div>
        </fieldset>

        <div class="form-group">
          <label for="why">Why do you want the audit? <span class="optional">(optional)</span></label>
          <textarea id="why" name="why" rows="3" placeholder="e.g., We received a complaint, grant requirement, want to be proactive..."></textarea>
        </div>

        <div class="form-group">
          <label for="timeline">Timeline <span class="required" aria-hidden="true">*</span></label>
          <select id="timeline" name="timeline" required>
            <option value="" disabled selected>Select timeline</option>
            <option value="flexible">No rush / flexible</option>
            <option value="2_weeks">Within 2 weeks</option>
            <option value="1_week">Within 1 week</option>
            <option value="urgent">Urgent (explain below)</option>
          </select>
        </div>

        <div class="form-group">
          <label for="source">How did you hear about us? <span class="optional">(optional)</span></label>
          <input type="text" id="source" name="source" placeholder="e.g., search, referral, social media..." />
        </div>

        <div class="form-group consent">
          <label class="check-label consent-label">
            <input type="checkbox" name="consent" required />
            <span>I agree to let belt.works audit the specified website and share findings with our team.</span>
          </label>
        </div>

        {#if error}
          <p class="form-error" role="alert">{error}</p>
        {/if}

        <div class="actions">
          <button type="submit" class="button" disabled={submitting}>
            {submitting ? 'Sending...' : 'Request audit'}
          </button>
          <a href="/blog/a11y" class="button secondary">← Back to post</a>
        </div>
      </form>
    {/if}
  </div>
</section>

<style>
  .ally-form {
    display: grid;
    gap: 1.5rem;
  }

  .form-group {
    display: grid;
    gap: 0.4rem;
  }

  .form-group label,
  .form-group legend {
    color: var(--text);
    font-size: 0.88rem;
    font-weight: 600;
  }

  .required {
    color: var(--accent-2);
  }

  .optional {
    color: var(--dim);
    font-weight: 400;
  }

  .ally-form input[type='text'],
  .ally-form input[type='url'],
  .ally-form input[type='email'],
  .ally-form textarea,
  .ally-form select {
    background: var(--panel);
    border: 1px solid var(--line);
    color: var(--text);
    padding: 0.7rem 0.85rem;
    font-size: 0.92rem;
    width: 100%;
    outline: none;
  }

  .ally-form input:focus,
  .ally-form textarea:focus,
  .ally-form select:focus {
    border-color: var(--accent);
  }

  .ally-form textarea {
    resize: vertical;
    min-height: 80px;
  }

  .ally-form select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a7a190' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.85rem center;
    padding-right: 2.2rem;
  }

  .ally-form select option {
    background: var(--panel);
    color: var(--text);
  }

  .checkbox-grid {
    display: grid;
    gap: 0.5rem;
  }

  .check-label {
    display: flex;
    align-items: flex-start;
    gap: 0.55rem;
    color: var(--muted);
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
  }

  .check-label input[type='checkbox'] {
    margin-top: 0.15rem;
    accent-color: var(--accent);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  .consent {
    border-top: 1px solid var(--line);
    padding-top: 1rem;
    margin-top: 0.5rem;
  }

  .consent-label {
    color: var(--text);
    font-size: 0.88rem;
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }

  .form-error {
    color: var(--danger);
    font-size: 0.9rem;
    margin: 0;
  }

  .form-success {
    display: grid;
    gap: 1rem;
  }

  .form-success h2 {
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    margin-bottom: 0;
  }

  .form-success p {
    color: var(--muted);
    line-height: 1.6;
    margin: 0;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
