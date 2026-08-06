---
title: The Work Before the Work
slug: the-work-before-the-work
description: Why projects fizzle—and why cheaper software makes problem selection more important, not less.
date: 2026-08-06
---

# The Work Before the Work

There is a familiar kind of project failure that does not look like failure at first.

It starts with a spark: a good conversation, a promising prototype, a clean demo, a burst of research, a new tool, a new board. The work feels alive. There is motion. Then, quietly, it dissipates. Nobody necessarily quits. Nothing necessarily breaks. The project simply fails to acquire enough shape to continue after the mood that started it has passed.

Call this the **fizzle**.

We usually explain the fizzle as a problem of discipline: we lacked follow-through, attention, or grit. Sometimes that is true. But it misses a prior problem that has become much more important now that software is cheap to make.

The prior problem is **mis-aim**.

We can build more than we can responsibly choose to build. A prototype no longer proves that a project deserves to exist. It only proves that somebody—or some combination of people and tools—could make it.

That changes the bottleneck.

The question is no longer mainly, *Can we build this?*

It is, *What is worth building, for whom, and what would tell us that it mattered?*

## The two problems are one loop

Political historian Anton Jäger uses the word *hyperpolitics* for a world full of political intensity but short on durable consequences: protest, spectacle, moral urgency, viral outrage, and causes that flare and vanish while the institutions that once carried collective life—parties, unions, civic associations—have been hollowed out. His diagnosis is not that feeling is false. It is that intensity without a durable structure is easy to summon and difficult to keep.

The same shape appears in small projects.

When we do not have enough contact with a recurring, specific problem, we generate options. Options feel like motion. We collect feature ideas, tools, prompts, backlogs, mockups, and prototypes. But a large shelf of possibilities makes commitment harder. Work without commitment fizzles. Then the fizzle is diagnosed as a personal failure of discipline, when it may have begun as a failure to choose a problem with enough reality underneath it.

That is the loop:

```text
unclear problem
→ abundant possible solutions
→ excitement and visible output
→ no durable user, owner, or evidence path
→ fizzle
→ more options to escape the fizzle
```

The availability of AI-assisted development sharpens this loop. It can make a credible artifact appear before we have decided what human need the artifact is meant to serve. That is powerful. It is also dangerous in the ordinary, unglamorous way: the cost of making the wrong thing has dropped, so we can make many wrong things faster.

## A prototype is not a relationship

A working demo can be real and still be disconnected from a real problem.

A recent open-source AI-generated game project makes this distinction unusually visible. The result is technically impressive: a browser FPS with procedurally generated assets, an explicit architecture, screenshot capture, image-diff checks, profiling, and playtest tooling. But the repository’s most valuable feature may be its honesty. It says directly that the project does not meet its advertised visual bar. It records where the result falls short and what its own tests exposed.

That is more useful than the headline version of “one-shot” creation.

The artifact is not the whole story. The architecture, the measurement, the limitations, and the repair loop are what make an artifact capable of teaching its makers anything.

A project becomes durable when it has some way to turn activity into learning and learning into a next move. A person using it. A recurring situation. An owner. A maintenance practice. A handoff. A relationship. A clearly named reason to stop.

Without one of those, output can be technically clean and socially empty.

## The test is not certainty

None of this means we should wait for certainty before acting. That would simply convert caution into another way to avoid contact with the world.

The standard is smaller and harder: before promoting an idea into an active build, we should be able to answer five questions.

### 1. Who has the recurring friction?

Not an abstract “user.” A person, group, or role facing a recognizable problem in an ordinary situation.

### 2. What is the smallest honest intervention?

Not the whole system. What can be improved without pretending to solve everything or creating new dependence, exposure, or burden?

### 3. What would count as evidence?

What could we observe that would tell us the work helped, harmed, or did not matter? A real use, a saved step, a successful handoff, a repair completed, a person who comes back, or a clear refusal.

### 4. What continues after the first burst?

A project needs a continuity mechanism: a named owner, a maintained artifact, a relationship, a practice, a handoff, or an explicit stop condition. If it cannot survive the mood that started it, the mood is doing too much of the work.

### 5. What would make us decide not to build it?

A reason not to build is not a failure of imagination. It is evidence that we are willing to learn. If there is no possible disconfirming observation, we are not testing an idea. We are protecting an attachment.

## Build metabolism, not just motion

A living thing is not merely a collection of parts in motion. It has circulation, memory, repair, and a way to turn energy into continued life.

That is a useful metaphor for projects.

A local service, a tool-sharing network, a knowledge box, a repo-video pipeline, or a piece of software does not become valuable just because it launches. It becomes valuable when somebody can understand it, use it, repair it, hand it off, or build on it without needing the original burst of enthusiasm to be present.

This is not an argument against exploration, art, study, or one-off help. Those can be complete on their own terms. Nor is it an argument that every worthwhile project must become a business. Worth can mean access, dignity, mutual aid, repair, a relationship made easier, or a burden removed.

It is an argument against confusing a seed with a mission.

Seeds deserve preservation. They do not deserve to quietly consume the attention meant for a real problem.

The work before the work is finding the problem that can hold a relationship—not just the idea that can hold our attention.

## Sources and notes

- Anton Jäger, [*Hyperpolitics: Extreme Politicization without Political Consequences*](https://www.versobooks.com/products/3460-hyperpolitics). The book’s diagnosis is a source for the “fizzle” framing, not a direct theory of software projects.
- Zoe Williams, [interview with Jäger in *The Guardian*](https://www.theguardian.com/politics/2026/jul/23/anton-jager-groundbreaking-book-being-devoured-by-left), on the distinction between politicization and institutionalization.
- Gilles Deleuze and Félix Guattari, [*A Thousand Plateaus*](https://www.lab404.com/420/deleuze_guattari.pdf), “How Do You Make Yourself a Body without Organs?” The metabolism language here is a metaphor, not an attempt to summarize their philosophy.
- Matt Shumer, [Claude-of-Duty](https://github.com/mshumer/Claude-of-Duty). The project is used as an example of a documented artifact and verification loop, not as evidence that “one-shot” development is a reliable software method.
