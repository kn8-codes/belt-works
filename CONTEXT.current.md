# Belt.works Current Context

Updated: 2026-05-01

## Position

Belt.works is Nate's public front door for a research/software lab.

Primary line: "We build software that works. You bring the problem."

Secondary line: "Research first. Software as evidence."

## Public shape

- Homepage: direct lab positioning and proof surface.
- `/work`: shipped and in-progress proof.
- `/services`: service properties and operating surfaces.
- `/rooms`: public operator cockpit proof for the machine/agent fleet.
- `/contact`: the only public bring-a-problem route.

## Dead surface area

- Old named intake branding is removed from the public site.
- Old client/demo-specific routes are removed from the public site.
- The site should not mention stale intake names, stale client demos, fake mailing lists, or trades lead-gen remnants.

## Current technical state

- SvelteKit / Svelte 5 / Vite.
- Contact form posts to a hardened server endpoint.
- Supabase service-role client lives server-side only.
- ROOMS uses a public-safe data contract before any live wiring.
- Cleanup branch: `jeep/belt-overnight-rebuild`.

## ROOMS direction

ROOMS should show all rooms at once in a wall. Click a room to drill into expanded status, queue, logs, files, and commits. SVG internals are prepared with IDs, but current rendering uses image assets; element-level animation needs inline SVG later.

## Voice rules

Useful. Plain. Determined. No startup pitch. No agency boilerplate. No geography-as-underdog story. No fake conversion theater.
