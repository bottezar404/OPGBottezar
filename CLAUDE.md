# OPG Bottezar website

Single-page site for OPG Bottezar (olive oil, Vranje Selo near Vižinada, Istria).
Everything lives in `index.html`, except the page script, which is in `script.js`. It is published with GitHub Pages from `main`
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
  German and Italian strings live in the `DE` and `IT` maps in `script.js`,
  keyed by the Croatian text. When adding or changing text, update all four languages.
- The language picker is a dropdown with flags (inline SVG symbols `#fl-hr`, `#fl-gb`,
  `#fl-de`, `#fl-it` at the top of `<body>`); a new language needs a flag, a menu item and a map.
- Colors are CSS variables on `:root`, with a dark-mode set; reuse them rather than hard-coding colors.
- A Content-Security-Policy `<meta>` tag at the top of `<head>` only allows content from the
  site itself, Google Fonts, and the Google Maps embed. Don't add inline `<script>` blocks or
  `onclick=` attributes (put code in `script.js`), and add any new external host to the policy.
