# Plan — Problem Map two authored leaf-card pilot

## Goal
Replace the generic selected-leaf answer with a read-only six-field card for exactly two approved leaves:

1. `Information is scattered → Different records disagree`
2. `People can’t find us → Our public information is old or unclear`

All other leaves retain a clearly labelled neutral fallback. The work is local-only and does not alter graph tiers, authored geometry, force settings, network behavior, analytics, contact flows, credentials, or accounts.

## Implementation

1. Keep the existing group/leaf topology and position/force code unchanged.
2. Add a small local authored-card map keyed by existing leaf IDs. Model the public fields as scene, consequence, question, first move, possible Belt path, and optional human handoff.
3. Build the leaf model from the existing leaves and attach either the authored card or a neutral fallback. Remove generic service/contact data from selected leaf state.
4. Replace the selected answer panel with semantically labelled six-field guidance; retain the local “Back to this branch” control. Do not add a contact link or submission control.
5. Keep linear navigation available, but compact it in a native `details` disclosure named `Prefer a list?`.
6. Verify type/build/diff quality and exercise root, opened branch, both selected pilots, desktop/mobile, and keyboard focus.
7. Record exact commands/results in `STATE.md` and `docs/EVIDENCE.md`; leave the code change for review rather than committing.

## Stop conditions

Stop for approval if this requires a graph/force/geometry change, a network/contact/analytics action, a new dependency, or unsupported authored copy.
