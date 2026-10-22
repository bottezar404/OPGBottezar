# OPG Bottezar website

Single-page site for OPG Bottezar (olive oil, Vranje Selo near Vižinada, Istria).
Everything lives in `index.html`. It is published with GitHub Pages from `main`
at the custom domain set in `CNAME`:
https://opgbottezar.com

## How to make changes

- Never push to `main` directly. Anything on `main` goes live on the public site.
- For each change, create a new branch from the latest `main`, named after the change
  in short kebab-case, e.g. `add-gallery-photos`, `update-contact-phone`, `fix-map-location`.
  Don't use auto-generated branch names.
- Open a pull request into `main` with a plain-language title that matches the change
  (e.g. "Add gallery photos"). The owner reviews and merges it themselves.
- One change per branch / pull request.

## Page notes

- Text is translated HR / EN / DE / IT. Elements carry `data-hr` and `data-en` attributes;
  German and Italian strings live in the `DE` and `IT` maps in the script at the bottom,
  keyed by the Croatian text. When adding or changing text, update all four languages.
- The language picker is a dropdown with flags (inline SVG symbols `#fl-hr`, `#fl-gb`,
  `#fl-de`, `#fl-it` at the top of `<body>`); a new language needs a flag, a menu item and a map.
- Colors are CSS variables on `:root`, with a dark-mode set; reuse them rather than hard-coding colors.
