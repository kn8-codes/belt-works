# Belt.works Rebuild Implementation Plan

Updated: 2026-05-01

## Current state

The public surface has been simplified around Belt.works as a research/software lab.

## Done on cleanup branch

- Public CTA consolidated to `/contact`.
- Fake mailing list removed.
- Old intake branding removed from active surface.
- Stale client/demo routes removed.
- Contact form hardened with honeypot and length caps.
- Server-only Supabase client consolidated.
- ROOMS public data contract added.
- README, environment example, and OG image refreshed.

## Next

- Browser-check cleanup branch.
- Confirm removed routes stay gone.
- Confirm contact form behavior.
- Decide when to push cleanup branch to production.
- Keep code heavily commented for Nate's maintenance.
