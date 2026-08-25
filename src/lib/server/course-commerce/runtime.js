import Stripe from 'stripe';
import { env } from '$env/dynamic/private';
import { evaluateCommerceReadiness } from './config.js';

export class CommerceConfigError extends Error {
  /** @param {string} code */
  constructor(code) {
    super(code);
    this.name = 'CommerceConfigError';
    this.code = code;
  }
}

export function getCommerceReadiness() {
  return evaluateCommerceReadiness(env);
}

export function getStripeRuntime() {
  const secretKey = env.STRIPE_SECRET_KEY;
  if (!secretKey) throw new CommerceConfigError('stripe_secret_missing');

  return {
    stripe: new Stripe(secretKey),
    webhookSecret: env.STRIPE_WEBHOOK_SECRET ?? '',
    priceId: env.STRIPE_COURSE_PRICE_ID ?? '',
    productId: env.STRIPE_COURSE_PRODUCT_ID ?? '',
    termsVersion: env.COURSE_TERMS_VERSION ?? '',
    returnSigningSecret: env.COURSE_RETURN_SIGNING_SECRET ?? '',
    mode: env.STRIPE_MODE ?? '',
    readiness: getCommerceReadiness()
  };
}

export function requireCheckoutRuntime() {
  const runtime = getStripeRuntime();
  if (!runtime.readiness.ready) throw new CommerceConfigError('course_checkout_not_ready');
  return runtime;
}

export function requireWebhookRuntime() {
  const runtime = getStripeRuntime();
  if (!runtime.webhookSecret) throw new CommerceConfigError('stripe_webhook_secret_missing');
  return runtime;
}
