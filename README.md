# Makzimalist.github.io

Developer site, served by GitHub Pages at the root of `https://makzimalist.github.io/`.

- `/` (German), `/en/` (English) — developer home, list of apps
- `/de/impressum.html`, `/en/legal-notice.html` — legal notice (developer-wide)
- `/apps/<app>/` (German), `/apps/<app>/en/` (English) — landing page per app; `/apps/<app>/{de,en}/` also holds that app's privacy policy
- `style.css`, `fonts/` — shared. All internal links are root-absolute (`/…`), so preview with
  `python3 -m http.server` from this directory, not by opening files directly.

**Privacy-policy URLs are registered in Play Console — don't move them.**

Every page exists in German and English; the header's DE/EN toggle links each page to its counterpart, so keep both in sync.

To add an app: copy `apps/flags-and-capitals/`, adjust text, add an `<a class="cell">` to the `#apps` section of `index.html` and `en/index.html`.
