# Chas Bean — Resume (chasbean.com)

Single repo for the live site at [chasbean.com](https://chasbean.com) (GitHub Pages on `main`).

## Quick start

```bash
git clone git@github.com:chas-bean/chas-bean.github.io.git
cd chas-bean.github.io
```

## Edit → build → publish

### 1. Content changes

`resume-phosphor.html` is the **source of truth** for resume copy. After editing:

- Sync the `.terminal` body into `resume-slate.html` and `resume-paper.html` (same markup, different theme CSS in each file’s `<head>`).
- Or edit all three in parallel if the change is small.

**Do not** hand-edit `index.html` body — it is generated.

### 2. Rebuild the home page

```bash
./scripts/build.sh
```

This runs `scripts/build-index.py`, which copies the resume body from `resume-phosphor.html` into `index.html` and keeps the chrome shell (theme buttons, PDF link, Linktree link).

**Chrome shell edits** (theme toggle markup, header links) live in the `HEADER` string inside `scripts/build-index.py`. Change that file, then run `./scripts/build.sh`.

### 3. Styling

| What | Where |
|------|-------|
| Theme colors / tokens | `themes/tokens.css` |
| Index resume layout (all themes) | `themes/live.css` |
| Top bar (theme switcher, links, PDF) | `themes/index.css` |
| Mobile layout | `themes/responsive.css` (screen-only breakpoints) |
| Standalone phosphor / slate / paper | `themes/crt.css`, `themes/github.css`, `themes/paper.css` |

`js/index.js` — theme switcher (hash + localStorage), PDF href per theme, mail line click handler.

### 4. Regenerate PDFs

After HTML or print-CSS changes:

```bash
./scripts/generate-pdfs.sh
```

Uses headless Chrome with a desktop viewport so PDFs match the on-screen layout (not mobile-compacted). Requires Google Chrome at the default macOS path, or set `CHROME=`.

Manual export (any theme):

```bash
open resume-paper.html   # Cmd+P → Save as PDF, margins None, background graphics on
```

### 5. Publish

```bash
git add -A
git commit -m "Describe your change"
git push
```

Pages deploys from `main` within a minute or two.

## Repo layout

| Path | Role |
|------|------|
| `index.html` | Home page with live theme switcher (**generated**) |
| `resume-phosphor.html` | Phosphor theme + content source for build |
| `resume-slate.html` | Slate theme standalone + PDF source |
| `resume-paper.html` | Paper theme standalone + PDF source |
| `resume-*.pdf` | Pre-built PDFs linked from the chrome bar |
| `themes/` | All CSS |
| `js/index.js` | Client-side behavior |
| `scripts/` | `build.sh`, `build-index.py`, `generate-pdfs.sh` |
| `drafts/` | Working notes — committed for convenience, not linked from the site |
| `CNAME` | Custom domain (`chasbean.com`) |

## Drafts

`drafts/copy-draft.md`, `drafts/content-interview.md`, and `drafts/ideas.txt` are working files. They are web-reachable at `/drafts/...` unless you add routing rules; keep sensitive content out of them.
