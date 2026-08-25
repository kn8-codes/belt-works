import { randomUUID } from 'node:crypto';
import { fail, redirect } from '@sveltejs/kit';
import { COURSE_PRODUCT_KEY } from '$lib/server/course-commerce/config.js';
import { getCommerceReadiness, requireCheckoutRuntime } from '$lib/server/course-commerce/runtime.js';
import { signReturnNonce } from '$lib/server/course-commerce/return-token.js';

/** @param {import('stripe').Stripe.Price} price */
function formatPrice(price) {
  const unitAmount = price.unit_amount;
  if (!Number.isInteger(unitAmount) || unitAmount === null || !price.currency) return null;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: price.currency.toUpperCase() }).format(unitAmount / 100);
}

/** @param {string | import('stripe').Stripe.Product | import('stripe').Stripe.DeletedProduct} product */
function productId(product) {
  return typeof product === 'string' ? product : product.id;
}

export async function load() {
  const readiness = getCommerceReadiness();
  if (!readiness.ready || readiness.mode !== 'test') return { commerce: { checkoutEnabled: false } };
  try {
    const { stripe, priceId, productId: expectedProductId } = requireCheckoutRuntime();
    const price = await stripe.prices.retrieve(priceId);
    const displayPrice =
      price.active && price.type === 'one_time' && productId(price.product) === expectedProductId
        ? formatPrice(price)
        : null;
    return {
      commerce: {
        checkoutEnabled: Boolean(displayPrice),
        testMode: true,
        displayPrice,
        accessDescription: readiness.accessDescription,
        termsUrl: readiness.termsUrl,
        refundPolicyUrl: readiness.refundPolicyUrl
      }
    };
  } catch {
    return { commerce: { checkoutEnabled: false } };
  }
}

export const actions = {
  checkout: async () => {
    let session;
    try {
      const {
        stripe,
        priceId,
        productId: expectedProductId,
        returnSigningSecret,
        readiness
      } = requireCheckoutRuntime();
      const price = await stripe.prices.retrieve(priceId);
      if (!price.active || price.type !== 'one_time' || productId(price.product) !== expectedProductId) {
        return fail(503, { checkoutError: 'Course checkout is not ready.' });
      }

      const returnNonce = randomUUID();
      const returnSignature = signReturnNonce(returnNonce, returnSigningSecret);
      session = await stripe.checkout.sessions.create(
        {
          mode: 'payment',
          line_items: [{ price: priceId, quantity: 1 }],
          customer_creation: 'always',
          success_url: `${readiness.baseUrl}/courses/claude-code-beyond-chat-window/order?session_id={CHECKOUT_SESSION_ID}&receipt_nonce=${returnNonce}&receipt_sig=${returnSignature}`,
          cancel_url: `${readiness.baseUrl}/courses/claude-code-beyond-chat-window/cancel`,
          metadata: {
            product_key: COURSE_PRODUCT_KEY,
            terms_version: readiness.termsVersion,
            return_nonce: returnNonce
          },
          payment_intent_data: {
            metadata: { product_key: COURSE_PRODUCT_KEY, terms_version: readiness.termsVersion }
          }
        },
        { idempotencyKey: randomUUID() }
      );
    } catch (error) {
      console.error('course checkout creation failed', { name: error instanceof Error ? error.name : 'UnknownError' });
      return fail(503, { checkoutError: 'Course checkout is not ready.' });
    }
    if (!session.url) return fail(503, { checkoutError: 'Course checkout is not ready.' });
    redirect(303, session.url);
  }
};
