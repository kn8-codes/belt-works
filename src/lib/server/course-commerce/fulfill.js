import { COURSE_PRODUCT_KEY } from './config.js';
import { getStripeRuntime } from './runtime.js';
import {
  persistFailedPaymentEvent,
  persistOrderReceipt,
  persistPendingPaymentEvent
} from './orders.js';
import {
  canProcessReceiptMode,
  isCourseCheckoutObject,
  isFulfillablePaymentStatus,
  validateCourseSessionIdentity,
  validatePaidCourseSession
} from './validation.js';

/** @typedef {ReturnType<typeof getStripeRuntime>} StripeRuntime */

/** @param {StripeRuntime} runtime @param {string | null} returnNonce */
function expectedIdentity(runtime, returnNonce = null) {
  return {
    priceId: runtime.priceId,
    productId: runtime.productId,
    productKey: COURSE_PRODUCT_KEY,
    termsVersion: runtime.termsVersion,
    returnNonce
  };
}

/** @param {StripeRuntime} runtime @param {string} sessionId */
async function retrieveCourseSession(runtime, sessionId) {
  const session = await runtime.stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data.price']
  });
  if (!canProcessReceiptMode(runtime.mode, Boolean(session.livemode))) {
    throw new Error('live_receipt_processing_blocked');
  }
  return session;
}

/** @param {string} sessionId @param {any | null} event @param {string | null} returnNonce */
export async function verifyAndRecordCoursePayment(sessionId, event = null, returnNonce = null) {
  const runtime = getStripeRuntime();
  if (!runtime.priceId || !runtime.productId || !runtime.termsVersion) {
    throw new Error('course_receipt_config_missing');
  }

  const session = await retrieveCourseSession(runtime, sessionId);
  validateCourseSessionIdentity(session, expectedIdentity(runtime, returnNonce));

  if (!isFulfillablePaymentStatus(session.payment_status)) {
    if (event?.type === 'checkout.session.completed') {
      await persistPendingPaymentEvent(event);
      return {
        payment_status: 'pending',
        fulfillment_status: 'not_granted',
        livemode: Boolean(session.livemode)
      };
    }
    throw new Error('payment_not_complete');
  }

  const order = validatePaidCourseSession(session, {
    ...expectedIdentity(runtime, returnNonce),
    mode: runtime.mode
  });
  await persistOrderReceipt(order, event);
  return order;
}

/** @param {any} event */
async function verifyAndRecordFailedCoursePayment(event) {
  const runtime = getStripeRuntime();
  if (!runtime.priceId || !runtime.productId || !runtime.termsVersion) {
    throw new Error('course_receipt_config_missing');
  }
  const session = await retrieveCourseSession(runtime, event.data.object.id);
  validateCourseSessionIdentity(session, expectedIdentity(runtime));
  if (isFulfillablePaymentStatus(session.payment_status)) {
    throw new Error('failed_event_for_paid_session');
  }
  await persistFailedPaymentEvent(event);
  return { payment_status: 'failed', fulfillment_status: 'not_granted' };
}

/** @param {any} event */
export async function processCourseStripeEvent(event) {
  if (!isCourseCheckoutObject(event.data?.object)) {
    return { payment_status: 'ignored', fulfillment_status: 'unrelated_product' };
  }

  const runtime = getStripeRuntime();
  if (!canProcessReceiptMode(runtime.mode, Boolean(event.livemode))) {
    throw new Error('live_receipt_processing_blocked');
  }

  if (
    event.type === 'checkout.session.completed' ||
    event.type === 'checkout.session.async_payment_succeeded'
  ) {
    return verifyAndRecordCoursePayment(event.data.object.id, event);
  }
  if (event.type === 'checkout.session.async_payment_failed') {
    return verifyAndRecordFailedCoursePayment(event);
  }
  return { payment_status: 'ignored', fulfillment_status: 'not_applicable' };
}
