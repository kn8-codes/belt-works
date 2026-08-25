import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateCommerceReadiness } from '../../src/lib/server/course-commerce/config.js';

const complete = {
  COURSE_SALES_ENABLED: 'true',
  COURSE_CHECKOUT_VISIBLE: 'true',
  COURSE_BASE_URL: 'http://127.0.0.1:5173',
  COURSE_TERMS_VERSION: 'test-v1',
  COURSE_TERMS_URL: 'http://127.0.0.1:5173/terms',
  COURSE_REFUND_POLICY_URL: 'http://127.0.0.1:5173/refunds',
  COURSE_ACCESS_DESCRIPTION: 'Synthetic test receipt only',
  COURSE_FULFILLMENT_MODE: 'test_only',
  COURSE_RETURN_SIGNING_SECRET: 'return-signing-placeholder-32-characters',
  STRIPE_MODE: 'test',
  STRIPE_SECRET_KEY: 'sk_test_placeholder_for_local_test',
  STRIPE_WEBHOOK_SECRET: 'whsec_placeholder_for_local_test',
  STRIPE_COURSE_PRICE_ID: 'price_test_course',
  STRIPE_COURSE_PRODUCT_ID: 'prod_test_course',
  SUPABASE_URL: 'https://example.supabase.co',
  SUPABASE_SERVICE_ROLE_KEY: 'placeholder-service-role'
};

test('complete test-only configuration is ready', () => {
  const result = evaluateCommerceReadiness(complete);
  assert.equal(result.ready, true);
  assert.deepEqual(result.missing, []);
});

for (const key of [
  'STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET', 'STRIPE_COURSE_PRICE_ID',
  'STRIPE_COURSE_PRODUCT_ID', 'COURSE_TERMS_VERSION', 'COURSE_REFUND_POLICY_URL',
  'COURSE_ACCESS_DESCRIPTION', 'COURSE_RETURN_SIGNING_SECRET', 'SUPABASE_SERVICE_ROLE_KEY'
]) {
  test(`missing ${key} fails closed`, () => {
    assert.equal(evaluateCommerceReadiness({ ...complete, [key]: '' }).ready, false);
  });
}

test('hidden or disabled checkout fails closed', () => {
  assert.equal(evaluateCommerceReadiness({ ...complete, COURSE_SALES_ENABLED: 'false' }).ready, false);
  assert.equal(evaluateCommerceReadiness({ ...complete, COURSE_CHECKOUT_VISIBLE: 'false' }).ready, false);
});

test('test/live key mismatch fails closed', () => {
  const result = evaluateCommerceReadiness({ ...complete, STRIPE_SECRET_KEY: 'sk_live_wrong_mode' });
  assert.equal(result.ready, false);
  assert.ok(result.missing.includes('stripe_test_key_mismatch'));
});

test('commercial URLs must share the configured origin', () => {
  const result = evaluateCommerceReadiness({ ...complete, COURSE_REFUND_POLICY_URL: 'https://example.com/refunds' });
  assert.equal(result.ready, false);
  assert.ok(result.missing.includes('course_refund_policy_url_origin_mismatch'));
});

test('live mode is impossible until a fulfillment adapter is installed', () => {
  const result = evaluateCommerceReadiness({
    ...complete,
    STRIPE_MODE: 'live',
    STRIPE_SECRET_KEY: 'sk_live_placeholder',
    COURSE_BASE_URL: 'https://www.belt.works',
    COURSE_TERMS_URL: 'https://www.belt.works/terms',
    COURSE_REFUND_POLICY_URL: 'https://www.belt.works/refunds',
    COURSE_FULFILLMENT_MODE: 'hosted'
  });
  assert.equal(result.ready, false);
  assert.ok(result.missing.includes('live_fulfillment_adapter_not_installed'));
});
