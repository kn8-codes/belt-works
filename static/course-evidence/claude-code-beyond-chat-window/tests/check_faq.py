#!/usr/bin/env python3
"""Deterministic, dependency-free check for the Course 1 FAQ exercise."""

from __future__ import annotations

import argparse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def check(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    lowered = text.casefold()
    failures: list[str] = []

    required = {
        "confirmed date": "saturday, september 12",
        "confirmed time": "10:00 a.m.–2:00 p.m.",
        "confirmed location": "summit lake community center",
        "admission remains an open question": "admission: open question",
        "parking remains an open question": "parking: open question",
        "admission conflict remains visible": "notes conflict",
        "south-lot uncertainty remains visible": "has not been confirmed",
    }
    for label, phrase in required.items():
        if phrase.casefold() not in lowered:
            failures.append(f"missing {label}: {phrase!r}")

    unsupported_claims = {
        "unsupported free-admission claim": "admission is free.",
        "unsupported final donation claim": "admission is a $5 suggested donation.",
        "unsupported confirmed parking claim": "parking is available in the south lot.",
        "invented registration claim": "registration is required.",
    }
    for label, phrase in unsupported_claims.items():
        if phrase.casefold() in lowered:
            failures.append(f"{label}: {phrase!r}")

    return failures


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--file",
        type=Path,
        default=ROOT / "FAQ.md",
        help="FAQ file to check (default: project FAQ.md)",
    )
    args = parser.parse_args()
    path = args.file if args.file.is_absolute() else Path.cwd() / args.file
    if not path.is_file():
        print(f"CHECK FAIL: file not found: {path}")
        return 2

    failures = check(path)
    shown = path.relative_to(ROOT) if path.is_relative_to(ROOT) else path
    if failures:
        print(f"CHECK FAIL: {shown}")
        for failure in failures:
            print(f"- {failure}")
        print("Human review still required; do not publish or infer missing facts.")
        return 1

    print(f"CHECK PASS: {shown}")
    print("Confirmed facts are present; admission and parking remain explicit open questions.")
    print("LIMIT: this check does not prove completeness, publication approval, or real-world accuracy.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
