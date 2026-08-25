import { json } from '@sveltejs/kit';
import { processCourseStripeEvent } from '$lib/server/course-commerce/fulfill.js';
import { requireWebhookRuntime } from '$lib/server/course-commerce/runtime.js';
import { constructVerifiedEvent } from '$lib/server/course-commerce/webhook-signature.js';

const relevantEvents = new Set([
  'checkout.session.completed',
  'checkout.session.async_payment_succeeded',
  'checkout.session.async_payment_failed'
]);

export async function POST({ request }) {
  const signature = request.headers.get('stripe-signature');
  if (!signature) return json({ error: 'signature_required' }, { status: 400 });

  const payload = await request.text();
  let event;

  try {
    const { stripe, webhookSecret } = requireWebhookRuntime();
    event = constructVerifiedEvent(stripe, payload, signature, webhookSecret);
  } catch {
    return json({ error: 'signature_invalid' }, { status: 400 });
  }

  if (!relevantEvents.has(event.type)) return json({ received: true, ignored: true });

  try {
    await processCourseStripeEvent(event);
    return json({ received: true });
  } catch (error) {
    console.error('stripe webhook processing failed', {
      name: error instanceof Error ? error.name : 'UnknownError'
    });
    return json({ error: 'processing_failed' }, { status: 500 });
  }
}
