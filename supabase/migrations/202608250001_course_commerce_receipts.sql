-- Server-only Stripe receipt ledger. No browser roles receive table access.
create table if not exists public.stripe_events (
  stripe_event_id text primary key,
  event_type text not null,
  checkout_session_id text,
  livemode boolean not null default false,
  processing_status text not null check (processing_status in ('processed', 'pending_payment', 'payment_failed')),
  processed_at timestamptz not null default now(),
  last_error_code text,
  created_at timestamptz not null default now()
);

create table if not exists public.course_orders (
  checkout_session_id text primary key,
  product_key text not null,
  stripe_price_id text not null,
  stripe_product_id text not null,
  stripe_customer_id text,
  payment_intent_id text,
  payment_status text not null,
  currency text,
  amount_total bigint check (amount_total is null or amount_total >= 0),
  livemode boolean not null default false,
  fulfillment_status text not null check (fulfillment_status in ('test_verified', 'pending_access', 'fulfilled', 'revoked', 'refunded')),
  terms_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.stripe_events enable row level security;
alter table public.course_orders enable row level security;
revoke all on table public.stripe_events from anon, authenticated;
revoke all on table public.course_orders from anon, authenticated;
create index if not exists stripe_events_checkout_session_idx on public.stripe_events (checkout_session_id);
create index if not exists course_orders_customer_idx on public.course_orders (stripe_customer_id);
