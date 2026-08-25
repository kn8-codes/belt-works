import test from 'node:test';
import assert from 'node:assert/strict';
import Stripe from 'stripe';
import { constructVerifiedEvent } from '../../src/lib/server/course-commerce/webhook-signature.js';
import {
  canProcessReceiptMode,
  isCourseCheckoutObject,
  isFulfillablePaymentStatus,
  validateCourseSessionIdentity,
  validatePaidCourseSession
} from '../../src/lib/server/course-commerce/validation.js';
import {
  signReturnNonce,
  validCheckoutSessionId,
  verifyReturnNonce
} from '../../src/lib/server/course-commerce/return-token.js';

const expected = {
  priceId: 'price_test_course',
  productId: 'prod_test_course',
  productKey: 'claude-code-beyond-chat-window',
  termsVersion: 'test-v1',
  mode: 'test'
};

function paidSession() {
  return {
    id: 'cs_test_12345678901234567890',
    metadata: { product_key: expected.productKey, terms_version: expected.termsVersion },
    payment_status: 'paid',
    line_items: { data: [{ price: { id: expected.priceId, product: expected.productId }, quantity: 1 }] },
    customer: 'cus_test_123',
    payment_intent: 'pi_test_123',
    currency: 'usd',
    amount_total: 5000,
    livemode: false
  };
}

test('valid paid course session produces a data-minimized test receipt', () => {
  const order = validatePaidCourseSession(paidSession(), expected);
  assert.equal(order.checkout_session_id, 'cs_test_12345678901234567890');
  assert.equal(order.fulfillment_status, 'test_verified');
  assert.equal('email' in order, false);
});

test('only paid and no-payment-required sessions are fulfillable', () => {
  assert.equal(isFulfillablePaymentStatus('paid'), true);
  assert.equal(isFulfillablePaymentStatus('no_payment_required'), true);
  assert.equal(isFulfillablePaymentStatus('unpaid'), false);
  assert.equal(isFulfillablePaymentStatus(null), false);
});

test('unrelated events and all live receipts are excluded', () => {
  assert.equal(isCourseCheckoutObject(paidSession()), true);
  const unrelated = paidSession();
  unrelated.metadata.product_key = 'other';
  assert.equal(isCourseCheckoutObject(unrelated), false);
  assert.equal(canProcessReceiptMode('test', false), true);
  assert.equal(canProcessReceiptMode('test', true), false);
  assert.equal(canProcessReceiptMode('live', false), false);
});

test('return nonce requires an exact HMAC and strict Checkout Session ID', () => {
  const nonce = '123e4567-e89b-42d3-a456-426614174000';
  const secret = 'a-return-signing-secret-with-32-characters';
  const signature = signReturnNonce(nonce, secret);
  assert.equal(verifyReturnNonce(nonce, signature, secret), true);
  const tampered = `${signature.slice(0, -1)}${signature.endsWith('0') ? '1' : '0'}`;
  assert.equal(verifyReturnNonce(nonce, tampered, secret), false);
  assert.equal(validCheckoutSessionId('cs_test_12345678901234567890'), true);
  assert.equal(validCheckoutSessionId('cs_invented'), false);
});

test('identity checks run before pending or failed payment bookkeeping', () => {
  const session = paidSession();
  session.payment_status = 'unpaid';
  session.line_items.data[0].price.id = 'price_other';
  assert.throws(
    () => validateCourseSessionIdentity(session, expected),
    /course_price_mismatch/
  );
});

/** @type {Array<[string, (session: ReturnType<typeof paidSession>) => void, string]>} */
const invalidCases = [
  ['unpaid', (s) => { s.payment_status = 'unpaid'; }, 'payment_not_complete'],
  ['wrong product', (s) => { s.metadata.product_key = 'other'; }, 'course_product_mismatch'],
  ['wrong price', (s) => { s.line_items.data[0].price.id = 'price_other'; }, 'course_price_mismatch'],
  ['wrong Stripe product', (s) => { s.line_items.data[0].price.product = 'prod_other'; }, 'course_price_mismatch'],
  ['wrong quantity', (s) => { s.line_items.data[0].quantity = 2; }, 'course_price_mismatch'],
  ['wrong terms', (s) => { s.metadata.terms_version = 'old'; }, 'course_terms_mismatch']
];
for (const [name, mutate, code] of invalidCases) {
  test(`${name} session is rejected`, () => {
    const session = paidSession(); mutate(session);
    assert.throws(() => validatePaidCourseSession(session, expected), new RegExp(code));
  });
}

test('synthetic Stripe signature accepts exact body and rejects tampering', () => {
  const stripe = new Stripe('sk_test_placeholder');
  const secret = 'whsec_test_secret';
  const payload = JSON.stringify({ id: 'evt_test_123', type: 'checkout.session.completed' });
  const signature = Stripe.webhooks.generateTestHeaderString({ payload, secret });
  const event = constructVerifiedEvent(stripe, payload, signature, secret);
  assert.equal(event.id, 'evt_test_123');
  assert.throws(() => constructVerifiedEvent(stripe, `${payload} `, signature, secret));
});
