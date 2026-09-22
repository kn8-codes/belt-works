---
title: Four hours, nineteen minutes
slug: mlt-xml-producer-double-free
description: A double-free family in MLT's xml producer, from fuzz harness to merged fix.
date: 2026-09-22
---
---

On September 21, 2026, a bug we found in [MLT](https://github.com/mltframework/mlt) — the media framework underneath Shotcut, kdenlive exports, and a lot of creator tooling — went from maintainer-filed report to merged fix in four hours and nineteen minutes. This is the short version of how it got there, with receipts.

## The bug

MLT's xml producer builds service networks by parsing project files. When a service lookup fails — an unknown producer, filter, link, or transition — the error paths tried to clean up after themselves:

```c
mlt_service_close(x);
free(x);
```

The problem: `mlt_properties_close()` already frees the service struct when the service has no child. The dummy wrappers the xml producer creates with `calloc` + `mlt_service_init(..., NULL)` always have no child. So every failure branch that did both was a double free — and the follow-on read after the second free is a use-after-free.

One root, seven sites in `src/modules/xml/producer_xml.c`: the failed-transition handler, two producer branches, two filter branches, two link branches.

We found it with a libFuzzer/AFL harness on the xml producer, minimized the crash inputs, and reproduced the behavior on an unmodified Debian `melt-7` 7.22.0 binary with hand-written project files. No exploit was built or needed; the crash, the root cause, and the fix shape were the whole story.

## The disclosure

The report went to Dan Dennedy, MLT's maintainer, under coordinated disclosure: crash evidence, root-cause analysis, the site list, a suggested fix — drop the redundant `free()` after `mlt_service_close()`, or gate it on the same child condition.

What happened next is the part worth writing down: **Dan filed the report himself** as [issue #1305](https://github.com/mltframework/mlt/issues/1305), preserving our attribution, rather than making us navigate the public-issue route blind. Then he assigned it to Copilot, which opened [PR #1306](https://github.com/mltframework/mlt/pull/1306) within a minute — removing the redundant frees and adding a regression test (`InvalidProducerLookupDoesNotCrash`) that feeds the parser a missing-producer project file. Dan merged it at 20:00 UTC.

Open-to-merged: 4h19m. Zero comments. Nobody had to be convinced of anything.

## Why this is the whole argument

We do defensive fuzzing on creator-tooling and civic open source — the software niche vendors don't prioritize and security staff can't afford to watch. The pitch, such as it is: crash evidence plus root cause plus fix shape, no exploit chains, coordinated disclosure, maintainer's choice of route. The 90-day embargo we offered never even started clocking, because the fix landed the same day.

A double-free in a parser is not a headline vulnerability class. It is exactly the class of bug that lives for years in software everyone's video editor depends on, because nobody fuzzes the boring failure paths. "It crashes on malformed input" turns out to mean "memory corruption on untrusted input" often enough that the boring paths are where the work is.

The receipts:

- Report and discussion: [mltframework/mlt#1305](https://github.com/mltframework/mlt/issues/1305) — filed by the maintainer, closed with the fix
- Fix: [mltframework/mlt#1306](https://github.com/mltframework/mlt/pull/1306) — merged 2026-09-21 20:00:53 UTC, commit `6f9d822`
- Found by Nate Kelly (theecodepoet), belt.works

Thanks to Dan Dennedy for a decade-plus of maintaining the thing a lot of us build on — and for showing what fast, trusting, coordinated handling looks like.

*We test the software nobody tests. Crash + RCA + fix, no exploit — that's the report. If you maintain niche creator or civic tooling and want someone to kick the tires, [talk to us](https://www.belt.works).*
