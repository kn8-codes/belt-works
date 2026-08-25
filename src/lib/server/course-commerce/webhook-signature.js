/**
 * Stripe requires the unmodified request body for signature verification.
 * Keep this small wrapper pure so valid and tampered payloads can be tested.
 *
 * @param {import('stripe').default} stripe
 * @param {string} payload
 * @param {string} signature
 * @param {string} secret
 */
export function constructVerifiedEvent(stripe, payload, signature, secret) {
  return stripe.webhooks.constructEvent(payload, signature, secret);
}
