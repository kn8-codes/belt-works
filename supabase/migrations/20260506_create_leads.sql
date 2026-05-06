create table if not exists leads (
 id uuid primary key default gen_random_uuid(),
 name text not null,
 email text not null,
 what_they_want text,
 created_at timestamptz default now(),
 notified boolean default false
);
