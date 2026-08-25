# Neighborhood Skills Day — Public Course Evidence

This is the public, fictional evidence bundle for **Claude Code: Beyond the Chat Window**. It contains no real participant, venue, client, employer, or private data.

## Learning job

The notes contain:

- confirmed event facts;
- one admission contradiction;
- one parking ambiguity.

The bounded task is to update one FAQ, preserve unsupported details as open questions, run a named check, and inspect the resulting diff before a human chooses `ACCEPT`, `REVISE`, or `REJECT`.

## Included files

- `TASK_PACKET.md` — objective, allowed file, non-goals, check, and stop conditions.
- `EVENT_NOTES.md` — fictional source notes.
- `fixtures/FAQ.starter.md` — exact clean starting state.
- `fixtures/FAQ.completed.md` — reviewed reference result.
- `FAQ.starter-to-completed.diff` — literal unified diff between the two fixtures.
- `tests/check_faq.py` — deterministic named check.

This public bundle intentionally omits facilitator-only reset/apply scripts and does not claim to be the complete course package.

## Reproduce the evidence

Run the starter fixture. It should fail and name the missing work:

```bash
python3 tests/check_faq.py --file fixtures/FAQ.starter.md
```

Run the reviewed fixture. It should pass:

```bash
python3 tests/check_faq.py --file fixtures/FAQ.completed.md
```

Inspect the published literal diff:

```bash
less FAQ.starter-to-completed.diff
```

## What the check proves

It proves only that the reviewed FAQ:

- includes the confirmed date, time, and location;
- explicitly preserves the admission contradiction and parking uncertainty;
- avoids a few known unsupported claims.

It does **not** prove that every event detail is correct, that the source notes are complete, or that publication is authorized. A human still reviews the sources, diff, check limitations, and acceptance decision.
