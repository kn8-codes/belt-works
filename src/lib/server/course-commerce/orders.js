import { supabase } from '$lib/server/supabase.js';

function requireOrderStore() {
  if (!supabase) throw new Error('course_order_store_not_configured');
  return supabase;
}

/** @param {Record<string, any>} order @param {any | null} event */
export async function persistOrderReceipt(order, event = null) {
  const store = requireOrderStore();
  const now = new Date().toISOString();

  const { error: orderError } = await store.from('course_orders').upsert(
    { ...order, updated_at: now },
    { onConflict: 'checkout_session_id' }
  );
  if (orderError) throw orderError;

  if (event) {
    const { error: eventError } = await store.from('stripe_events').upsert(
      {
        stripe_event_id: event.id,
        event_type: event.type,
        checkout_session_id: order.checkout_session_id,
        livemode: Boolean(event.livemode),
        processing_status: 'processed',
        processed_at: now,
        last_error_code: null
      },
      { onConflict: 'stripe_event_id' }
    );
    if (eventError) throw eventError;
  }
}

/** @param {any} event */
export async function persistFailedPaymentEvent(event) {
  const store = requireOrderStore();
  const session = event.data?.object;
  const { error } = await store.from('stripe_events').upsert(
    {
      stripe_event_id: event.id,
      event_type: event.type,
      checkout_session_id: session?.id ?? null,
      livemode: Boolean(event.livemode),
      processing_status: 'payment_failed',
      processed_at: new Date().toISOString(),
      last_error_code: 'async_payment_failed'
    },
    { onConflict: 'stripe_event_id' }
  );
  if (error) throw error;
}

/** @param {any} event */
export async function persistPendingPaymentEvent(event) {
  const store = requireOrderStore();
  const session = event.data?.object;
  const { error } = await store.from('stripe_events').upsert(
    {
      stripe_event_id: event.id,
      event_type: event.type,
      checkout_session_id: session?.id ?? null,
      livemode: Boolean(event.livemode),
      processing_status: 'pending_payment',
      processed_at: new Date().toISOString(),
      last_error_code: null
    },
    { onConflict: 'stripe_event_id' }
  );
  if (error) throw error;
}
