# Makzimalist.github.io

Developer site, served by GitHub Pages at the root of `https://makzimalist.github.io/`.

- `/` — developer home, list of apps
- `/de/impressum.html`, `/en/legal-notice.html` — legal notice (developer-wide)
- `/apps/<app>/` — landing page per app; `/apps/<app>/{de,en}/` holds that app's privacy policy
- `style.css`, `fonts/` — shared. All internal links are root-absolute (`/…`), so preview with
  `python3 -m http.server` from this directory, not by opening files directly.

**Privacy-policy URLs are registered in Play Console — don't move them.**

To add an app: copy `apps/flags-and-capitals/`, adjust text, add a card to `index.html`.
