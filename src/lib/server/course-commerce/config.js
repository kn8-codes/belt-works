export const COURSE_PRODUCT_KEY = 'claude-code-beyond-chat-window';

const requiredWhenEnabled = [
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'STRIPE_COURSE_PRICE_ID',
  'STRIPE_COURSE_PRODUCT_ID',
  'COURSE_BASE_URL',
  'COURSE_TERMS_VERSION',
  'COURSE_TERMS_URL',
  'COURSE_REFUND_POLICY_URL',
  'COURSE_ACCESS_DESCRIPTION',
  'COURSE_FULFILLMENT_MODE',
  'COURSE_RETURN_SIGNING_SECRET',
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY'
];

/** @param {string | undefined} value */
function validUrl(value) {
  try {
    const url = new URL(value ?? '');
    const allowedProtocol =
      url.protocol === 'https:' || url.hostname === '127.0.0.1' || url.hostname === 'localhost';
    return allowedProtocol && !url.username && !url.password;
  } catch {
    return false;
  }
}

/** @param {string | undefined} value */
function validBaseUrl(value) {
  if (!value || !validUrl(value)) return false;
  const url = new URL(value);
  return (url.pathname === '/' || url.pathname === '') && !url.search && !url.hash;
}

/** @param {Record<string, string | undefined>} values */
export function evaluateCommerceReadiness(values) {
  const enabled = values.COURSE_SALES_ENABLED === 'true';
  const visible = values.COURSE_CHECKOUT_VISIBLE === 'true';
  const mode = values.STRIPE_MODE;
  const fulfillmentMode = values.COURSE_FULFILLMENT_MODE;
  const missing = [];

  if (!enabled) missing.push('sales_disabled');
  if (!visible) missing.push('checkout_hidden');
  for (const key of requiredWhenEnabled) {
    if (!values[key]?.trim()) missing.push(key.toLowerCase());
  }
  if (!['test', 'live'].includes(mode ?? '')) missing.push('stripe_mode_invalid');

  const secretKey = values.STRIPE_SECRET_KEY ?? '';
  if (mode === 'test' && !/^[sr]k_test_/.test(secretKey)) missing.push('stripe_test_key_mismatch');
  if (mode === 'live' && !/^[sr]k_live_/.test(secretKey)) missing.push('stripe_live_key_mismatch');
  if (mode === 'test' && fulfillmentMode !== 'test_only') missing.push('test_fulfillment_mode_required');

  // 04C-1 has no live access adapter. This invariant prevents accidental sales.
  if (mode === 'live') missing.push('live_fulfillment_adapter_not_installed');
  if ((values.COURSE_RETURN_SIGNING_SECRET ?? '').length < 32) {
    missing.push('course_return_signing_secret_too_short');
  }

  if (values.STRIPE_COURSE_PRICE_ID && !values.STRIPE_COURSE_PRICE_ID.startsWith('price_')) {
    missing.push('stripe_price_id_invalid');
  }
  if (values.STRIPE_COURSE_PRODUCT_ID && !values.STRIPE_COURSE_PRODUCT_ID.startsWith('prod_')) {
    missing.push('stripe_product_id_invalid');
  }
  if (values.COURSE_BASE_URL && !validBaseUrl(values.COURSE_BASE_URL)) missing.push('course_base_url_invalid');
  for (const key of ['COURSE_TERMS_URL', 'COURSE_REFUND_POLICY_URL']) {
    if (values[key] && !validUrl(values[key])) missing.push(`${key.toLowerCase()}_invalid`);
  }

  const baseUrl = values.COURSE_BASE_URL;
  if (baseUrl && validBaseUrl(baseUrl)) {
    const baseOrigin = new URL(baseUrl).origin;
    for (const key of ['COURSE_TERMS_URL', 'COURSE_REFUND_POLICY_URL']) {
      const candidate = values[key];
      if (candidate && validUrl(candidate) && new URL(candidate).origin !== baseOrigin) {
        missing.push(`${key.toLowerCase()}_origin_mismatch`);
      }
    }
  }

  if (mode === 'live') {
    for (const key of ['COURSE_BASE_URL', 'COURSE_TERMS_URL', 'COURSE_REFUND_POLICY_URL']) {
      if (values[key] && !values[key].startsWith('https://')) missing.push(`${key.toLowerCase()}_https_required`);
    }
  }

  const uniqueMissing = [...new Set(missing)].sort();
  return {
    enabled,
    visible,
    ready: uniqueMissing.length === 0,
    mode: mode ?? null,
    fulfillmentMode: fulfillmentMode ?? null,
    missing: uniqueMissing,
    baseUrl: values.COURSE_BASE_URL?.replace(/\/$/, '') ?? null,
    priceId: values.STRIPE_COURSE_PRICE_ID ?? null,
    productId: values.STRIPE_COURSE_PRODUCT_ID ?? null,
    termsVersion: values.COURSE_TERMS_VERSION ?? null,
    termsUrl: values.COURSE_TERMS_URL ?? null,
    refundPolicyUrl: values.COURSE_REFUND_POLICY_URL ?? null,
    accessDescription: values.COURSE_ACCESS_DESCRIPTION ?? null
  };
}
