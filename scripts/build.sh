#!/usr/bin/env bash
# Regenerate index.html after editing resume-phosphor.html (or synced theme HTML).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
python3 "$ROOT/scripts/build-index.py"
echo "Built $ROOT/index.html"
