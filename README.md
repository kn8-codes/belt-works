# belt.works

belt.works is a simple lead intake site for skilled tradespeople. It gives local providers a clean public page, lets customers submit a job request without dealing with an app or portal, saves the lead to the database, and sends the provider a text so they can call the customer back fast.

## Stack

- SvelteKit
- Supabase
- Twilio
- Vercel

## Local dev setup

```bash
npm install
npm run dev
```

## Environment variables

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER`

## Routes

- `/` - landing page
- `/mike` - provider profile
- `/api/submit-lead` - POST endpoint

## Deploy

Auto-deploys from `main` via Vercel.
