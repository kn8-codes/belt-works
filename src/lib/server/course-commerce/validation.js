import { COURSE_PRODUCT_KEY } from './config.js';

/** @param {unknown} value */
function objectId(value) {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object' && 'id' in value && typeof value.id === 'string') return value.id;
  return null;
}

/** @param {string | null | undefined} status */
export function isFulfillablePaymentStatus(status) {
  return status === 'paid' || status === 'no_payment_required';
}

/** @param {any} session */
export function isCourseCheckoutObject(session) {
  return session?.metadata?.product_key === COURSE_PRODUCT_KEY;
}

/** @param {string} mode @param {boolean} livemode */
export function canProcessReceiptMode(mode, livemode) {
  return mode === 'test' && !livemode;
}

/**
 * Validate course identity independently of payment state so pending/failed
 * events cannot enter the course ledger on metadata alone.
 * @param {any} session
 * @param {{ priceId: string, productId: string, productKey?: string, termsVersion: string, returnNonce?: string | null }} expected
 */
export function validateCourseSessionIdentity(session, expected) {
  if (!session?.id?.startsWith('cs_')) throw new Error('checkout_session_invalid');
  if (session.metadata?.product_key !== (expected.productKey ?? COURSE_PRODUCT_KEY)) {
    throw new Error('course_product_mismatch');
  }

  const items = session.line_items?.data ?? [];
  if (items.length !== 1) throw new Error('line_item_count_invalid');
  const item = items[0];
  const priceId = objectId(item.price);
  const productId = objectId(item.price?.product);
  if (priceId !== expected.priceId || productId !== expected.productId || item.quantity !== 1) {
    throw new Error('course_price_mismatch');
  }
  if (session.metadata?.terms_version !== expected.termsVersion) throw new Error('course_terms_mismatch');
  if (expected.returnNonce && session.metadata?.return_nonce !== expected.returnNonce) {
    throw new Error('course_return_nonce_mismatch');
  }

  return { priceId, productId };
}

/**
 * @param {any} session
 * @param {{ priceId: string, productId: string, productKey?: string, termsVersion: string, mode: string, returnNonce?: string | null }} expected
 */
export function validatePaidCourseSession(session, expected) {
  const identity = validateCourseSessionIdentity(session, expected);
  if (!isFulfillablePaymentStatus(session.payment_status)) throw new Error('payment_not_complete');

  return {
    checkout_session_id: session.id,
    product_key: expected.productKey ?? COURSE_PRODUCT_KEY,
    stripe_price_id: identity.priceId,
    stripe_product_id: identity.productId,
    stripe_customer_id: objectId(session.customer),
    payment_intent_id: objectId(session.payment_intent),
    payment_status: session.payment_status,
    currency: session.currency ?? null,
    amount_total: Number.isInteger(session.amount_total) ? session.amount_total : null,
    livemode: Boolean(session.livemode),
    fulfillment_status: expected.mode === 'test' ? 'test_verified' : 'pending_access',
    terms_version: expected.termsVersion
  };
}
