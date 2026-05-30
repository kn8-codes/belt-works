---
status: inbox
priority: high
owner: unassigned
created: 2026-05-24
project: ShopFloor
requires_decision: true
---

# Replace ShopFloor placeholder with real product lane copy

## Intent

Turn `content/posts/shopfloor.md` from a placeholder into a clear first public description of ShopFloor: the tool-library / workshop coordination lane for belt.works.

## Context

Known product insight: in ShopFloor, “who has the damn tool” is first-class alongside “who knows how to help.” The tone should be practical, local, direct, and dignity-preserving. This is not a SaaS pitch. It is a useful neighbor/workshop coordination system.

## Acceptance Criteria

- [ ] Read `PROJECT_CHARTER.md`, `STATE.md`, and `content/posts/shopfloor.md` before writing.
- [ ] Draft replacement copy for `content/posts/shopfloor.md`.
- [ ] Preserve existing frontmatter unless there is a clear reason to change it.
- [ ] Explain ShopFloor in plain language.
- [ ] Include the core objects: tools, people, skills/help, requests, availability/location constraints.
- [ ] Include what the first useful version should do.
- [ ] Run the repo check command if code/content changes are made: `npm run check`.
- [ ] Record evidence in `docs/EVIDENCE.md`.
- [ ] Update `STATE.md` with what changed and the next best action.

## Evidence Required

- Changed file path.
- Check command and result, or explanation if not run.
- Summary of open decisions Nate still needs to make.

## Nate Decision Needed

Before final copy is treated as canonical, Nate should choose whether ShopFloor is initially framed as:

1. tool library first,
2. mutual-aid workshop first,
3. local contractor/trades support first,
4. or all three with one primary lead.

## Notes

Start small. The first version only needs to make the lane legible. Do not design a whole marketplace because the blank page got cocky.
