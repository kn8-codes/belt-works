import { verifyAndRecordCoursePayment } from '$lib/server/course-commerce/fulfill.js';
import { getStripeRuntime } from '$lib/server/course-commerce/runtime.js';
import { validCheckoutSessionId, verifyReturnNonce } from '$lib/server/course-commerce/return-token.js';

export async function load({ url }) {
  const sessionId = url.searchParams.get('session_id');
  const returnNonce = url.searchParams.get('receipt_nonce');
  const returnSignature = url.searchParams.get('receipt_sig');
  if (!sessionId || !validCheckoutSessionId(sessionId)) return { state: 'invalid' };

  try {
    const runtime = getStripeRuntime();
    if (
      !returnNonce ||
      !returnSignature ||
      !verifyReturnNonce(returnNonce, returnSignature, runtime.returnSigningSecret)
    ) {
      return { state: 'invalid' };
    }
    const order = await verifyAndRecordCoursePayment(sessionId, null, returnNonce);
    return {
      state: order.payment_status === 'paid' || order.payment_status === 'no_payment_required' ? 'verified' : 'pending',
      paymentStatus: order.payment_status,
      fulfillmentStatus: order.fulfillment_status,
      testMode: !order.livemode
    };
  } catch {
    return { state: 'unverified' };
  }
}
