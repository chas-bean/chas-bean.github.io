(function () {
  "use strict";

  var THEMES = {
    crt:    { pdf: "resume-phosphor.pdf" },
    github: { pdf: "resume-slate.pdf" },
    paper:  { pdf: "resume-paper.pdf" }
  };
  var DEFAULT = "crt";
  var THEME_KEYS = Object.keys(THEMES);

  var root = document.documentElement;
  var pdfLink = document.getElementById("pdf-link");
  var themeButtons = document.querySelectorAll(".theme-btn");
  var currentTheme = DEFAULT;
  var labelPaintId = 0;

  function themeDurationMs() {
    var raw = getComputedStyle(root).getPropertyValue("--theme-dur").trim();
    var n = parseFloat(raw) || 0.62;
    return raw.endsWith("ms") ? n : n * 1000;
  }

  function normalizeTheme(raw) {
    if (!raw) return DEFAULT;
    var key = String(raw).toLowerCase().replace(/^#/, "");
    return THEME_KEYS.indexOf(key) !== -1 ? key : DEFAULT;
  }

  function readInitialTheme() {
    var fromHash = normalizeTheme(location.hash.slice(1));
    if (fromHash !== DEFAULT) return fromHash;
    try {
      return normalizeTheme(localStorage.getItem("resume-theme"));
    } catch (e) {
      return DEFAULT;
    }
  }

  function syncLinkLabels() {
    var link = getComputedStyle(root).getPropertyValue("--t-link").trim();
    var labels = document.querySelectorAll("#resume-root .link-label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].style.setProperty("color", link);
    }
  }

  function clearLinkLabelPaint() {
    var labels = document.querySelectorAll("#resume-root .link-label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].style.removeProperty("color");
    }
  }

  function runLinkLabelPaintLoop() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (labelPaintId) cancelAnimationFrame(labelPaintId);
    var start = performance.now();
    var duration = themeDurationMs() + 30;

    function frame(now) {
      syncLinkLabels();
      if (now - start < duration) {
        labelPaintId = requestAnimationFrame(frame);
      } else {
        labelPaintId = 0;
        clearLinkLabelPaint();
      }
    }
    labelPaintId = requestAnimationFrame(frame);
  }

  function setTheme(theme, persist) {
    theme = normalizeTheme(theme);
    if (theme === currentTheme) return;

    var cfg = THEMES[theme];
    root.setAttribute("data-theme", theme);
    pdfLink.href = cfg.pdf;

    for (var i = 0; i < themeButtons.length; i++) {
      var btn = themeButtons[i];
      var on = btn.getAttribute("data-theme") === theme;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    }

    currentTheme = theme;
    runLinkLabelPaintLoop();

    if (persist === false) return;
    try {
      localStorage.setItem("resume-theme", theme);
    } catch (e) {}
    if (location.hash.slice(1) !== theme) {
      history.replaceState(null, "", "#" + theme);
    }
  }

  function initThemeSwitcher() {
    for (var i = 0; i < themeButtons.length; i++) {
      themeButtons[i].addEventListener("click", function () {
        setTheme(this.getAttribute("data-theme"));
      });
    }
    window.addEventListener("hashchange", function () {
      setTheme(normalizeTheme(location.hash.slice(1)), false);
    });
    setTheme(readInitialTheme(), false);
  }

  function initMailLine() {
    var line = document.querySelector(".endline");
    if (!line) return;

    var mailLink = line.querySelector('.cmd a[href^="mailto:"]');
    if (!mailLink) return;

    var fired = false;

    function openMail() {
      if (fired) return;
      fired = true;
      mailLink.click();
      setTimeout(function () { fired = false; }, 800);
    }

    function isFormField(el) {
      if (!el) return false;
      if (el.isContentEditable) return true;
      var tag = el.tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
    }

    function activatesWithEnter(el) {
      return !!(el && el.closest && el.closest(
        "a[href], button, summary, input, select, textarea, [role='button'], [role='link']"
      ));
    }

    line.style.cursor = "pointer";
    line.addEventListener("click", function (e) {
      if (e.target.closest('.cmd a[href^="mailto:"]')) return;
      openMail();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" || e.repeat) return;
      var active = document.activeElement;
      if (isFormField(active)) return;
      if (activatesWithEnter(active)) return;
      e.preventDefault();
      openMail();
    });
  }

  initThemeSwitcher();
  initMailLine();
})();
