# belt.works — CONTEXT.md
*Master context file. For Claude instances working on belt.works.*
*Read this before writing anything. Do not write public-facing copy without reading this first.*
*Last updated: 2026-04-30*

---

## What it is

Software lab. Akron, Ohio. Four days old as of 2026-04-28.

The domain: Rust Belt.works. The TLD completes the word. That was the point.

One sentence: we test a hypothesis. What we produce in the process is software.

**The hypothesis**: Serious technical work can happen outside institutions. No lab, no degree, no zip code that matters. One person, three machines, secondhand equipment, margins of a working-class life. The work either holds up or it doesn't.

belt.works is the proof of concept. Everything built under it is evidence.

---

## What it isn't

- Not a startup
- Not a studio in the traditional sense
- Not an Akron-against-all-odds narrative — Nate specifically does not want that framing
- Not a sales funnel
- Not a consultancy that charges by the hour

The work stands on its own. Where it comes from is incidental.

---

## Voice

Dave Kennedy. Look it up. That's the register.

Three words: **useful, utilitarian, determined.**

The chip on the shoulder: **money**. Not ideology. Not geography. Just money. Write from inside that — plainly, without performing it.

Reference for Nate's register: David Giffels, *The Hard Way on Purpose*.

Do not write copy that sounds like:
- A tech startup pitch
- An inspirational underdog story
- Anything pedantic
- Anything that doesn't have immediate utility
- Anything aspirational or motivational

Do not motivate Nate. State the situation.

---

## Who Nate is

Cook in Akron, Ohio. Builds software in the margins — early mornings, late nights, commute voice memos. Has a daughter. The kitchen funds this. That tension is real and sometimes breaking. He doesn't need it acknowledged.

IT, web dev, security background. Old-school hacker. Open source, everything pushed, GitHub is the only source of truth. Comfortable on the command line. Obstinate about doing things the right way.

Lived experience with housing insecurity. Rust Belt economics are not background — they're active constraints on every decision.

Specific interest: cybersecurity. May not be viable as a business. Still what he'd work on if the constraints were different.

General interest: any problem with a software path. If there's a software solution, he can get you there.

---

## Success metric

**25 GitHub stars.** That's the bar. Not ARR, not users, not press. Stars on a repo from people who found it useful.

---

## The three layers

```
Survival    → out of the kitchen, stable income, belt.works clients
Evidence    → shipped software people use, BoomMates changing something real
Method      → the mesh, the agents, the infrastructure, the process itself
```

When Nate seems to be losing the thread, ask: does this advance the proof, support survival, or build the method? If none of the three, it's drift.

---

## The Mesh

Three physical nodes connected via Tailscale. All three are infrastructure. The jeep is always-on — it is not a peripheral.

| Node | Machine | Tailscale IP | Role |
|---|---|---|---|
| kn8-jeep | 2017 MacBook Air i7 | 100.121.147.3 | Cockpit. Daily driver. Hermes lives here. Always-on. Load-bearing. |
| kn8-m4 | MacBook Air M4 16GB | 100.124.87.24 | Primary coding machine. Claude Code slot 1. |
| kn8-mbp (M1) | MacBook Pro M1 16GB | 100.88.95.40 | Heavy worker. Claude Code slot 2. Redis host. |

Other mesh devices: iPad Pro (100.125.4.71), iPhone 13 Pro Max (100.89.159.28), Apple TV (100.79.135.105).

Infrastructure first. The mesh is not overhead — it is the foundation. Everything runs on top of it.

```
1. Infrastructure exists
2. Infrastructure enables autonomous sessions
3. Autonomous sessions build products
4. Products generate evidence and revenue
```

---

## Agent Layer

| Agent | Node | Model | Status |
|---|---|---|---|
| Hermes | Jeep | qwen3.6-plus (OpenRouter) | Fully operational — mesh conductor |
| OpenClaw | M4 | Claude (API) | Running |
| OpenClaw | M1 | Claude (API) | Running |
| Claude Code | M4 | Claude Pro (account 1) | Active |
| Claude Code | M1 | Claude Pro (account 2) | Active |

**Hermes** is the conductor. Dispatches tasks via SSH using `openclaw agent`. Results go to `~/.towpath/results/`. Skills at `~/.hermes/skills/devops/`.

Hermes does: node health, commit watch, log watch, room snapshots, self-heal known errors, escalate via Telegram.
Hermes never: coordinates sessions, routes tasks, decides work priority.

**Towpath**: Redis Pub/Sub on M1 (port 6379), bridged to Supabase. Live and stable.

---

## Stack defaults

Not dogma. Right tool for the job.

```
Frontend:   SvelteKit — compiles to vanilla JS
Backend:    FastAPI
Database:   Supabase
Auth:       Magic Link — no credential DB
Languages:  Python, JavaScript/TypeScript
Source:     GitHub — everything pushed, everything open
```

---

## Budget

```
Claude Pro x2             $42.70/mo
OpenAI API                variable
OpenRouter credit         ~$20/mo
Plaud AI transcription    $17/mo
Perplexity credit         ~$10/mo
Supabase                  $25/mo (Pro)
Vercel                    $20/mo (Pro)
Domains                   ~$1.25/mo

Estimated:    ~$157/mo
Hard cap:     $200/mo
```

---

## Project Registry

### Active
| Project | What it is | Status |
|---|---|---|
| **belt.works** | The lab's public face. Umbrella brand. | Website needs full rebuild. Voice must be locked first. |
| **BoomMates** | Civic housing platform, Akron-first. Foundational. | On hold until Civic Assembly winds down. |
| **GREYMARKET** | MAC.BID auction arbitrage agent | Python stub built, eBay OAuth blocker |
| **ShopFloor** | Shop floor management app — M4's autonomous project | Unknown state, needs a push |
| **intake** | Client intake methodology — voice → transcript → agent context | Live, 1 client (client) |
| **ROOMS** | Spatial agent dashboard | Live on mock data, needs GitHub API wiring |

### Backburner
| Project | Status |
|---|---|
| **hosp-or-not** | Shipped v1. v2 someday. |
| **towpath** | Infrastructure live. Telegram may solve routing. |
| **OBDsidian** | Jeep telemetry. Built, pending hardware test. Repo: kn8-codes/OBDsidian. Do not conflate with the cut Obsidian folder. |
| **After Effects MCP** | Built. Waiting for content. |
| **story-engine** | Content pipeline. Ready. Waiting on direction. |

---

## Services / Subdomains

| Subdomain | What it is | Priority |
|---|---|---|
| **intel.belt.works** | Threat intelligence — OSINT, threat actor profiles, TTPs | 🔴 Pet project, push hard |
| **ioc.belt.works** | Indicators of Compromise — structured data, stories | 🔴 Pet project, push hard |
| **data.belt.works** | Scraping as a service — scrape, normalize, API | First true paid service |
| **rooms.belt.works** | Public sanitized ROOMS view | Must-have website feature |

Intel/IOC editorial angle: *Hacks, Leaks, and Revelations* (Micah Lee). Massive leak archives nobody has fully analyzed. Belt.works has the skills and the agents. Long-form: blog, essay, video.

---

## The Website

**Current state**: Wrong. Built as contractor lead gen. Needs full rebuild.

**Do not rebuild until the voice is locked.**

What it needs:
- Copy that sounds like Nate, not a startup
- **Mailing list** — one signup, one send per month. CTA is mailing list first.
- **Public sanitized ROOMS view** — node up/down, sanitized logs, no secrets. Must-have.

Three jobs:
1. Explain what belt.works is
2. Funnel people who want to work with you → intake intake
3. Funnel people to the tools → Intel, IOC, data.belt.works

Design: Dark. Technical. Minimal. Show the actual hardware. Don't oversell.

The Multiverse School may clarify content strategy. Wait for that before committing to a direction.

---

## The Place

Akron is context, not brand. Work first, Akron second. "Huh, interesting" — not "wow, against all odds."

belt.works would exist anywhere. It wouldn't be called belt.works.

---

## Key Relationships

- **Nate** — operator, human in the loop. Cook. Builder. Old-school hacker. Akron OH.
- **BoomMates** — tied to Unify Akron Civic Assembly. Proposal #30 (citations database) is infrastructure BoomMates would consume.
- **Unify Akron Civic Assembly** — Nate is a delegate. Session 7 tonight: 2026-04-30.

---

## What not to do

- Do not write inspirational copy about Akron or the Rust Belt
- Do not frame belt.works as a startup or a hustle
- Do not suggest scaling strategies
- Do not build the website before the voice is locked
- Do not write for an audience that doesn't exist yet
- Do not lose the "research is what we do" framing — that's the lede
- Do not treat the jeep node as optional — it is load-bearing
- Do not conflate the Obsidian folder (cut) with OBDsidian the jeep project
- Do not treat belt.works as a side project — it's the umbrella
- Do not motivate, inspire, or frame anything aspirationally

---

## North Star

We're doing the research. Whatever becomes of it, we're doing the research. It doesn't have to make us rich. It has to be true.

---

*All repos: github.com/kn8-codes*
*This file: github.com/kn8-codes/belt-works/CONTEXT.md*
*Update every session. Never let it go stale.*
