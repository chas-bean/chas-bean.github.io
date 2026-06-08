#!/usr/bin/env bash
# Regenerate theme PDFs with headless Chrome (run from repo root).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if [[ ! -x "$CHROME" ]]; then
  echo "error: Chrome not found at $CHROME" >&2
  echo "Set CHROME= to your Chrome binary." >&2
  exit 1
fi

for theme in phosphor slate paper; do
  html="$ROOT/resume-${theme}.html"
  pdf="$ROOT/resume-${theme}.pdf"
  echo "==> $pdf"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --window-size=1280,1800 \
    --run-all-compositor-stages-before-draw \
    --virtual-time-budget=5000 \
    --print-to-pdf="$pdf" "file://$html"
done

echo "Done."
