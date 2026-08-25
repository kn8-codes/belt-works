import { createHmac, timingSafeEqual } from 'node:crypto';

const NONCE_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const SIGNATURE_PATTERN = /^[0-9a-f]{64}$/i;
const SESSION_PATTERN = /^cs_(?:test_|live_)[A-Za-z0-9]{20,200}$/;

/** @param {string} nonce @param {string} secret */
export function signReturnNonce(nonce, secret) {
  if (!NONCE_PATTERN.test(nonce)) throw new Error('return_nonce_invalid');
  if (secret.length < 32) throw new Error('return_signing_secret_invalid');
  return createHmac('sha256', secret).update(nonce).digest('hex');
}

/** @param {string | null} nonce @param {string | null} signature @param {string} secret */
export function verifyReturnNonce(nonce, signature, secret) {
  if (!nonce || !signature || !NONCE_PATTERN.test(nonce) || !SIGNATURE_PATTERN.test(signature)) {
    return false;
  }
  try {
    const expected = Buffer.from(signReturnNonce(nonce, secret), 'hex');
    const supplied = Buffer.from(signature, 'hex');
    return expected.length === supplied.length && timingSafeEqual(expected, supplied);
  } catch {
    return false;
  }
}

/** @param {string | null} value */
export function validCheckoutSessionId(value) {
  return Boolean(value && SESSION_PATTERN.test(value));
}
