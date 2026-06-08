# Chas Bean — Resume (chasbean.com)

Interactive resume published at [chasbean.com](https://chasbean.com) via GitHub Pages.

## Edit workflow

1. **Content** — edit `resume-phosphor.html` (source of truth for all themes). Keep `resume-slate.html` and `resume-paper.html` in sync, or edit phosphor only and copy the `.terminal` body across.
2. **Rebuild index** — `./scripts/build.sh` regenerates `index.html` (theme chrome + inlined resume).
3. **PDFs** (optional) — `./scripts/generate-pdfs.sh` after HTML changes.
4. **Publish** — `git add -A && git commit && git push` (Pages deploys from `main`).

## Layout

| Path | Role |
|------|------|
| `index.html` | Landing page with theme switcher (generated) |
| `resume-phosphor.html` | Phosphor theme + content source for `build-index.py` |
| `resume-slate.html` | Slate theme standalone |
| `resume-paper.html` | Paper theme standalone |
| `themes/` | CSS (tokens, live, index, responsive, per-theme) |
| `js/index.js` | Theme switcher + mail line |
| `scripts/` | `build.sh`, `build-index.py`, `generate-pdfs.sh` |
| `drafts/` | Working notes (`copy-draft.md`, etc.) — not linked from site |

## PDF export (single file)

```bash
open resume-paper.html   # Cmd+P → Save as PDF, margins None, background graphics on
```

Or headless Chrome:

```bash
./scripts/generate-pdfs.sh
```
