---
title: Coding agents need egress receipts
slug: coding-agents-need-egress-receipts
description: Grok Build and the trust boundary around cloud coding tools.
date: 2026-07-14
---

A cloud coding agent sending code to a remote model is not, by itself, a surprise. That is the basic bargain of cloud inference. If the model is somewhere else, the context it needs has to cross a boundary.

The important question is what else crosses with it.

A [wire-level analysis by Cereblab](https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547) reported that Grok Build CLI 0.2.93 used two materially different paths. One carried files the agent opened as model context. A separate storage path reportedly carried repository and session artifacts, including a Git bundle that could be cloned from captured traffic.

The recovered bundle included a tracked file the agent had been told not to read. It also included Git history.

That is a different risk class from “the agent opened this file to answer my question.” It is a source-code egress event.

## The narrow claim is serious enough

Words like “breach” can run ahead of the evidence. Here, the useful meaning is a breach of the operator egress contract: the tool appears to have moved more repository state than an operator would reasonably infer from the visible task.

That does not prove a third-party intrusion. It does not prove the provider trained on private code. It does not prove employees read uploaded repositories. It does not establish that every version, account, platform, or project behaved the same way.

Those limits matter. So does the finding.

Cereblab’s captured bundle reportedly reconstructed a tracked, never-read canary file and repository history. A large synthetic-repository test captured at least 5.10 GiB of accepted storage traffic before the researcher stopped it. The model-request traffic in that run was tiny by comparison. A [secondary technical summary from Penligent](https://www.penligent.ai/hackinglabs/grok-build-cli-repository/) lays out the evidence and its limits clearly.

The distinction is simple:

- task-scoped model context is data the agent needs for the work;
- repository or session storage is a separate product behavior with a separate purpose, scope, and retention story.

Those should not share an implicit consent model.

## Git history is part of the exposure surface

A repository is not only the files visible today.

Git history can hold credentials removed months ago, internal notes, customer context, old architecture decisions, deleted files, abandoned branches, and commit metadata. Cleaning the current working tree does not erase those objects from history.

If a tool transmits a Git bundle, “the current tree is clean” is not a complete safety argument.

This is why ordinary secret hygiene is necessary but insufficient. Keeping `.env` out of a repository helps. Rotating leaked credentials helps. Scanning the present checkout helps. None of those actions tells an operator what the tool actually sent during a particular session.

For that, we need receipts.

## What an egress receipt should show

An egress receipt does not need to be glamorous. It needs to answer plain questions:

- What files did the tool read?
- What files or repository objects did it transmit?
- Was the transmission for inference, telemetry, tracing, storage, crash reporting, or sync?
- Did it include Git history?
- Which account and project received it?
- What retention policy applies?
- How can the operator disable that path?
- How can the operator verify that it is disabled?
- How can the operator request and verify deletion of data already sent?

Without those answers, “trust us” becomes the access-control model. That is not accountable infrastructure. It is a magic textarea with filesystem privileges.

The receipt should also be local and inspectable. An operator should not need a support ticket to learn that a background upload happened. Put the record next to the session log. Give it stable event IDs. Make the destination, reason, byte count, and retention class exportable. If policy blocks an upload, record that too. A receipt is useful only when the operator can compare intended behavior with what the tool actually did.

## The mitigation is not the receipt

The [maintained Cereblab report](https://cereblab.com/) says later testing observed a server-side `disable_codebase_upload: true` setting and no longer reproduced the original whole-repository storage behavior. That is encouraging.

It is not a durable operator guarantee.

A remotely managed flag can change without a client update. A retention opt-out is not necessarily a transmission block. A vendor statement about deletion is not the same as account-level deletion evidence. “Fixed in our retest” and “provably disabled for your session” are different claims.

Operators need the second one.

## Treat agents like networked build infrastructure

The practical response is not “never use cloud coding agents.” That is tidy advice and not especially useful.

The practical response is to treat them like privileged, networked build infrastructure:

- do not launch them from your home directory;
- use disposable worktrees, sandbox users, containers, or network controls;
- keep credentials and unrelated private material outside the agent-readable tree;
- treat Git history as sensitive data;
- use canary repositories to test unknown tools;
- verify controls with logs or network evidence instead of trusting a settings screen;
- rotate credentials when plausible exposure exists.

Coding agents are valuable because they sit close to the work. They can read files, run commands, inspect logs, preserve context, and alter repositories. That closeness is also the hazard.

The more access a tool receives, the more clearly it should account for what crossed the boundary.

Speed without receipts is debt. If coding agents want a place on the real workbench, they need to behave like accountable infrastructure.

Read receipts. Egress receipts. Retention receipts. Delete receipts.

Otherwise the operator is not supervising a tool. The operator is guessing where the repo went.
