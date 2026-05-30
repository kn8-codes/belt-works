#!/usr/bin/env python3
"""
Usage Monitor — belt.works inference dashboard
Tracks what we can track across providers. Documents what we can't.

Run: python3 usage-monitor.py
Output: JSON to stdout, or write to file with --out
"""

import argparse
import base64
import json
import os
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone


def now_iso():
    return datetime.now(timezone.utc).isoformat()


def fetch_openrouter(key):
    """OpenRouter credits endpoint."""
    if not key:
        return {"error": "no key"}
    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/credits",
        headers={"Authorization": f"Bearer {key}"},
    )
    try:
        res = urllib.request.urlopen(req, timeout=15)
        return json.loads(res.read().decode())
    except urllib.error.HTTPError as e:
        return {"error": f"HTTP {e.code}", "reason": e.reason}
    except Exception as e:
        return {"error": type(e).__name__, "reason": str(e)}


def fetch_kimi(key):
    """Kimi has no published usage endpoint. Probed 2026-05-29."""
    if not key:
        return {"error": "no key"}
    return {
        "note": "Kimi has no public usage API as of 2026-05-29",
        "dashboard": "https://kimi.com/settings/usage",
        "key_present": True,
        "key_length": len(key),
    }


def fetch_codex(token):
    """Codex usage is not accessible via OAuth token. Probed 2026-05-29.

    The OAuth token from device_code flow authenticates to chatgpt.com/backend-api/codex
    but all /usage, /limits, /quota, /billing endpoints return 403.
    The Codex CLI itself may use a different auth path for usage data.
    """
    if not token:
        return {"error": "no token"}

    try:
        parts = token.split(".")
        payload = json.loads(base64.urlsafe_b64decode(parts[1] + "=="))
        exp = payload.get("exp", 0)
        hours_left = round((exp - time.time()) / 3600, 1)
    except Exception:
        payload = {}
        hours_left = None

    req = urllib.request.Request(
        "https://chatgpt.com/backend-api/codex/usage",
        headers={"Authorization": f"Bearer {token}"},
    )
    try:
        res = urllib.request.urlopen(req, timeout=10)
        return {"status": "unexpected_success", "data": json.loads(res.read().decode())}
    except urllib.error.HTTPError as e:
        return {
            "note": "Codex usage API returns 403 for OAuth tokens. No known workaround.",
            "probed_endpoint": "https://chatgpt.com/backend-api/codex/usage",
            "http_status": e.code,
            "jwt_expiry_hours": hours_left,
            "jwt_plan": payload.get("plan"),
            "jwt_email": payload.get("email"),
            "alternatives": [
                "Check usage in ChatGPT web UI under Settings > Data controls > Usage",
                "Codex CLI may have internal endpoint not accessible to third-party tools",
            ],
        }
    except Exception as e:
        return {"error": type(e).__name__, "reason": str(e)}


def main():
    parser = argparse.ArgumentParser(description="Inference usage monitor")
    parser.add_argument("--out", help="Write JSON to file")
    parser.add_argument("--env-file", default="~/.hermes/.env", help="Path to .env file")
    args = parser.parse_args()

    env_path = os.path.expanduser(args.env_file)
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if "=" in line and not line.startswith("#"):
                    k, v = line.strip().split("=", 1)
                    os.environ.setdefault(k, v)

    or_key = os.environ.get("OPENROUTER_API_KEY", "")
    kimi_key = os.environ.get("KIMI_API_KEY", "")

    codex_tokens = []
    auth_path = os.path.expanduser("~/.hermes/auth.json")
    if os.path.exists(auth_path):
        try:
            with open(auth_path) as f:
                auth_data = json.load(f)
            # Primary account (kn8.codes@pm.me)
            primary = (
                auth_data.get("providers", {})
                .get("openai-codex", {})
                .get("tokens", {})
                .get("access_token", "")
            )
            if primary:
                codex_tokens.append(("primary (kn8.codes@pm.me)", primary))
            # Secondary account — check if stored separately or add manually
            # TODO: store secondary token in auth.json or separate file
        except Exception:
            pass

    # Secondary Codex account (0x0sec@gmail.com) — manually tracked
    secondary_token = os.environ.get("CODEX_SECONDARY_TOKEN", "")
    if secondary_token:
        codex_tokens.append(("secondary (0x0sec@gmail.com)", secondary_token))

    report = {
        "timestamp": now_iso(),
        "openrouter": fetch_openrouter(or_key),
        "kimi": fetch_kimi(kimi_key),
        "codex": {label: fetch_codex(tok) for label, tok in codex_tokens} if codex_tokens else {"error": "no tokens"},
    }

    json_out = json.dumps(report, indent=2, default=str)
    if args.out:
        out_path = os.path.expanduser(args.out)
        with open(out_path, "w") as f:
            f.write(json_out)
        print(f"Wrote to {out_path}")
    else:
        print(json_out)


if __name__ == "__main__":
    main()
