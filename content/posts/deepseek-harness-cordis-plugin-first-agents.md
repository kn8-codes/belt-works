---
title: "The Kernel Is the Constitution"
slug: deepseek-harness-cordis-plugin-first-agents
description: What DeepSeek Harness and the Cordis paper get right about plugin-first agents, teardown, authority, and the small kernel underneath "everything is a plugin."
date: 2026-08-16
---

# The Kernel Is the Constitution

DeepSeek Harness makes an arresting architectural claim: everything is a plugin.

The model adapter is a plugin. The tool registry is a plugin. The session log is a plugin. Even the agent loop—the part most harnesses treat as the center of the machine—is replaceable through configuration.[1]

That sounds like a system with no core.

It is not.

DeepSeek Harness has a small but consequential kernel underneath it called **Cordis**. Cordis owns the rules by which components appear, find one another, contribute behavior, and leave without taking unrelated parts of the application with them.[1][2]

The interesting idea is therefore not simply that everything is a plugin.

**It is that every plugin should account for what it needs and what it leaves behind.**

## Two problems hiding inside “plugin architecture”

Most descriptions of plugin systems focus on addition:

- How do we install another tool?
- How do we register another provider?
- How do we add another interface?
- How do we let outside developers extend the application?

Cordis begins with the harder half: what happens when one of those pieces changes or disappears while the application is still running?

The Cordis paper separates that problem into two dimensions. **Temporal composability** means that removing a component should reverse the effects it installed. **Spatial composability** means that components should declare their dependencies and react coherently as providers appear, disappear, or change.[3]

Those names are academic. The practical questions are not:

```text
When this component leaves, what must leave with it?

When this dependency disappears, what else must stop?

What has to stop first?

What remains irreversible?
```

Ordinary plugin systems tend to answer these questions through convention, shutdown callbacks, process restarts, or whatever cleanup the developer remembered to write. Cordis tries to make the answers part of the runtime model itself.[3]

## Effects that bring their own cleanup

Cordis models a state-changing operation as something that returns its inverse at the point where it is performed. The runtime records those inverses and composes them in reverse order for teardown.[3]

In ordinary language:

```text
register a tool      → retain how to unregister it
start a listener     → retain how to stop it
open a connection    → retain how to close it
mount a child plugin → retain how to retire it
```

This is called a **revertible effect**.

The useful part is locality. Creation and cleanup are written together. A component does not install five resources in one function and rely on somebody to remember the matching five cleanup operations in a distant `deactivate()` function.

DeepSeek Harness applies this pattern to prompt sections, tool schemas, adapters, providers, and listeners. Registrations are installed through Cordis effect helpers, and each registration is expected to have a disposer so unloading the plugin unwinds its contributions.[2]

This does not magically derive the correct inverse for every real-world action. The component author still supplies the atomic cleanup. What Cordis supplies is the structure that retains and composes those cleanups instead of treating teardown as optional administrative literature.[3]

## Dependencies that change the lifecycle

The second half is more unusual.

A Cordis component declares what services it requires. If those services do not exist, the component waits rather than starting half-functional. If a required provider disappears, the consumer deactivates. When a provider returns or is replaced, the consumer can activate against the new resolution.[2][3]

This turns dependency loss from a lookup error into a lifecycle event.

The teardown order matters. Suppose a component uses a connection pool. Closing the consumer may require returning its connections to that pool. If the provider closes first, the consumer’s cleanup has already lost the resource it needs.

Cordis therefore lets the provider stop advertising itself to new consumers while preserving the old consumer’s committed reference during teardown. The provider waits for its dependents to finish before withdrawing its own effects.[3]

That is a stronger rule than “call all the shutdown hooks.” It expresses an order:

```text
provider announces departure
→ consumers become unsatisfied
→ consumers stop serving
→ consumers clean up using the committed provider
→ provider drains those consumers
→ provider withdraws itself
```

This pattern applies well beyond agent harnesses. It fits databases, message buses, browser sessions, storage mounts, model providers, sandbox backends, and managed hosting environments.

## So is DeepSeek Harness really coreless?

No. It is **application-coreless**, not **kernel-less**.

The architecture does not privilege one agent loop, one tool implementation, one model provider, or one interface. DeepSeek documents each running profile as an ordered plugin tree assembled from bundles and patches. It also exposes an effective-configuration dump so an operator can inspect what the machine actually boots.[1]

But Cordis still determines:

- how services are identified;
- how dependencies activate components;
- how registrations are tracked;
- how effects unwind;
- how lifecycle transitions run;
- how contexts are scoped or isolated;
- how events intercept behavior;
- how configuration is reconciled.

That is core code. It simply governs composition rather than owning the product’s business behavior.

The kernel is small, but it is still the constitution.

## The strongest idea is accountability, not replaceability

Replaceability is attractive. Accountability is more useful.

A capability in DeepSeek Harness is designed around a seam with three roles: a service definition, a provider, and a consumer. The architecture also distinguishes durable session events from live agent and capability events, and states that anything made visible to the model must be reconstructable from the session log.[1]

Those choices make several questions answerable:

```text
What interface is this capability promising?
Who provides it?
Who consumes it?
What authority does it receive?
What durable facts does it produce?
What disposer removes it?
```

That is the part worth stealing.

A plugin graph without those answers is not modular. It is merely scattered.

## Where the guarantee stops

The Cordis paper is unusually direct about its system boundary.

Resource acquisition can often be reversed. A socket can be closed. A listener can be removed. A subprocess can be terminated. A private temporary file can be deleted.[3]

An **emission** is different. Once data crosses the boundary, ordinary cleanup cannot make the outside world forget it. A sent message, published post, network transmission, customer notification, or financial action is not made historically unperformed by calling a disposer. The available choices are to withhold the emission until commitment or to perform a compensating action later.[3]

A refund is not the same event as never charging someone. Deleting a post is not the same event as never publishing it.

Cordis also does not turn plugins into a security boundary. Its context-mediated dependency access can constrain cooperative components, but malicious code running in the same host runtime may bypass those APIs. The paper explicitly says untrusted components require an external sandbox such as a separate runtime, process, or container.[3]

The formal guarantees depend on additional conditions: effects must provide correct inverses; relevant shared interactions must pass through the context; component effects must be independent or explicitly ordered; dependency precedence must be acyclic; component creation and iterations must be bounded; and declarations must match behavior. Failure is excluded from the final confluence result.[3]

This is not a defect hidden in the footnotes. It is the line between a programming model and a protection system.

## What we want to remember at Belt.works

We do not need to rebuild our systems around Cordis to preserve its best lessons.

We can adopt a smaller operating discipline.

### Every registration returns a disposer

Temporary tools, hooks, listeners, subprocesses, mounts, and scoped providers should be paired with verified teardown.

### Every bounded worker declares requirements and provisions

A worker should not quietly inherit every capability available to the process. Its composition should say what it requires, what it provides, and what remains human-gated.

### Every operating profile has an effective-composition view

An operator should be able to ask what a lane can actually access and receive a deterministic answer—not a scavenger hunt through configuration files.

### Consumers drain before providers disappear

Dependency-aware teardown should preserve the resources consumers need for cleanup and hold providers open until the consumers finish.

### Actions are classified by reversibility

- **Reversible acquisition:** start a temporary process. Track and test its disposer.
- **Reversible configuration:** register a scoped tool. Track its inverse.
- **Compensatable change:** switch a deployment. Name the rollback procedure.
- **Irreversible emission:** send outreach. Require approval before the action.
- **Destructive action:** delete customer data. Require separate explicit authority.

### Durable facts have provenance

If a fact changes what the model or operator believes, it should point back to an event, receipt, source, or human decision. DeepSeek’s phrase is concise: **model-visible means logged**.[1]

## A good first use: the Hosting Manager

A managed-hosting worker is a natural place to apply these ideas without turning them into a religion.

Its stable operational contract could require:

```text
environment lifecycle
health checks
recovery policy
export and restore
approval gates
receipts
```

The initial proof could use disposable local providers. A later qualified host could replace those providers without changing the lifecycle contract.

The important verification would not be that the manager can create an environment. Creation is the easy half.

The proof would be:

```text
create
→ operate
→ export
→ restore elsewhere
→ withdraw dependencies
→ deactivate in order
→ destroy both environments
→ verify the export and authority are gone
```

That is Cordis’s useful lesson in Belt language: capability is incomplete until removal has evidence.

## The pattern, without the ideology

“Everything is a plugin” is a productive design pressure. It asks whether the application’s supposedly essential behavior is actually one replaceable implementation hiding behind a stable seam.

It can also become architecture theater. Complexity does not disappear when code becomes plugins. It moves into dependency graphs, contracts, configuration layers, lifecycle semantics, version compatibility, and debugging.

The Cordis paper is an active preprint under revision, and its Koishi case study is observational rather than a controlled comparison. DeepSeek Harness is practical implementation evidence, but not proof that unrestricted self-modification is safe.[1][3]

The right conclusion is narrower:

**Keep the behavioral core small. Make dependencies visible. Make effects leave receipts and disposers. Keep irreversible authority outside the plugin fantasy.**

Everything may be a plugin.

The kernel still decides what plugging in means.

## Sources

[1] [DeepSeek Harness architecture](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md)

[2] [DeepSeek Harness Cordis primer](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cordis-primer.md)

[3] [A Programming Paradigm for Spatiotemporal Composability](https://github.com/cordiverse/paper/blob/main/paper.pdf), active preprint dated August 13, 2026
