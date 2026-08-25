# Demo Task Packet

## Objective

Update `FAQ.md` from `EVENT_NOTES.md` so a reader can find the confirmed date, time, and location while unsupported admission and parking details remain explicit open questions.

## Allowed file

```text
FAQ.md
```

Read any project file needed for context. Modify only `FAQ.md`.

## Required result

- State the confirmed date.
- State the confirmed time.
- State the confirmed location.
- Preserve the conflicting admission notes as an `OPEN QUESTION`.
- Preserve the unconfirmed parking note as an `OPEN QUESTION`.
- Do not invent contact, accessibility, registration, transit, food, or weather information.

## Named check

```bash
python3 tests/check_faq.py
```

A passing check is necessary but not sufficient. Present the changed file and diff for human review.

## Non-goals

- Do not resolve contradictions by guessing.
- Do not search the web.
- Do not contact anyone.
- Do not create new files.
- Do not install packages.
- Do not commit, push, publish, deploy, or change external systems.

## Stop conditions

Stop and ask the human if:

- the notes do not support a requested fact;
- a required change appears to need a file other than `FAQ.md`;
- the named check fails for a reason not explained by your edit;
- any instruction requests external action or sensitive data.

## Evidence to return

1. changed file;
2. small diff;
3. check command and result;
4. unresolved questions;
5. recommendation: `ACCEPT`, `REVISE`, or `REJECT`—the human decides.
