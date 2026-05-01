# ROOMS Public Data Spec

Status: draft public-safe shape.

ROOMS is the visible cockpit for the agent mesh. The public page must prove the method without leaking private work.

## Allowed fields

- `name` — public node label, not sensitive hostname if that matters.
- `role` — conductor, frontend worker, backend/data worker, etc.
- `status` — online, idle, local branch, blocked, offline.
- `lastSeen` — coarse human label, not precise private telemetry unless approved.
- `task` — sanitized current task label.
- `event` — sanitized recent event.

## Forbidden fields

- secrets, tokens, keys, credentials
- private chat logs
- client data
- sensitive local file paths
- raw command output with credentials or private data
- exact personal schedules or locations unless approved

## Current source

Static sample data lives in `src/lib/content/rooms-sample.js`.

Live data comes later. Static proof first.
