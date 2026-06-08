#!/usr/bin/env python3
"""Regenerate index.html resume body from resume-phosphor.html (run after content edits)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "resume-phosphor.html"
OUT = ROOT / "index.html"

HEADER = """<!DOCTYPE html>
<html lang="en" data-theme="crt" class="theme-live">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chas Bean — Resume</title>
  <meta name="description" content="Chas Bean — Full-Stack & AI Engineer. Interactive resume with phosphor, slate, and paper themes." />
  <link rel="stylesheet" href="themes/tokens.css" />
  <link rel="stylesheet" href="themes/live.css" />
  <link rel="stylesheet" href="themes/index.css" />
  <link rel="stylesheet" href="themes/responsive.css" />
</head>
<body>
  <header class="chrome">
    <div class="chrome-track">
      <div class="chrome-links">
        <a href="https://linktr.ee/chas_bean" target="_blank" rel="noopener" title="Linktree — @chas_bean" aria-label="Linktree — @chas_bean">links</a>
      </div>
      <nav class="theme-toggle" aria-label="Resume color theme">
        <button type="button" class="theme-btn" data-theme="crt" aria-label="Phosphor — green terminal" title="Phosphor — green terminal" aria-pressed="true">
          <span class="swatch" aria-hidden="true"></span><span class="theme-name">phosphor</span>
        </button>
        <button type="button" class="theme-btn" data-theme="github" aria-label="Slate — dark" title="Slate — dark code theme" aria-pressed="false">
          <span class="swatch" aria-hidden="true"></span><span class="theme-name">slate</span>
        </button>
        <button type="button" class="theme-btn" data-theme="paper" aria-label="Paper — light" title="Paper — light theme" aria-pressed="false">
          <span class="swatch swatch-light" aria-hidden="true"></span><span class="theme-name">paper</span>
        </button>
      </nav>
      <div class="actions">
        <span class="hint">pdf:</span>
        <a id="pdf-link" href="resume-phosphor.pdf" download>download</a>
      </div>
    </div>
  </header>

  <main id="resume-root">
"""

FOOTER = """  </main>

  <script src="js/index.js" defer></script>
</body>
</html>
"""


def is_cmd_mail_anchor(tag: str, inner: str) -> bool:
    return 'class="cmd"' in tag or (
        "mailto:" in tag and ("mail " in inner or 'class="flag"' in inner)
    )


def wrap_links(html: str) -> str:
    def repl(m: re.Match[str]) -> str:
        tag, inner = m.group(1), m.group(2)
        if 'class="link-label"' in inner or is_cmd_mail_anchor(tag, inner):
            return m.group(0)
        return f"{tag}<span class=\"link-label\">{inner}</span></a>"

    return re.sub(r"(<a\b[^>]*>)(.*?)</a>", repl, html, flags=re.DOTALL)


def indent_block(text: str, spaces: int = 4) -> str:
    pad = " " * spaces
    return "\n".join(pad + line if line.strip() else line for line in text.strip().splitlines()) + "\n"


def main() -> None:
    src = SOURCE.read_text()
    terminal = re.search(r"(<div class=\"terminal\">.*</div>)\s*(?=<script>)", src, re.DOTALL)
    if not terminal:
        raise SystemExit(f"Could not find .terminal block in {SOURCE}")

    body = wrap_links(terminal.group(1))
    OUT.write_text(HEADER + indent_block(body) + FOOTER)
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
