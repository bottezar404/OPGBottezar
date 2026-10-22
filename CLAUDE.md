# OPG Bottezar website

Single-page site for OPG Bottezar (olive oil, Vranje Selo near Vižinada, Istria).
Everything lives in `index.html`. It is published with GitHub Pages from `main`:
https://p1nod0x.github.io/OPGBottezar/

## How to make changes

- Never push to `main` directly. Anything on `main` goes live on the public site.
- For each change, create a new branch from the latest `main`, named after the change
  in short kebab-case, e.g. `add-gallery-photos`, `update-contact-phone`, `fix-map-location`.
  Don't use auto-generated branch names.
- Open a pull request into `main` with a plain-language title that matches the change
  (e.g. "Add gallery photos"). The owner reviews and merges it themselves.
- One change per branch / pull request.

## Page notes

- Text is translated HR / EN / DE. Elements carry `data-hr` and `data-en` attributes;
  German strings live in the `DE` map in the script at the bottom, keyed by the Croatian text.
  When adding or changing text, update all three languages.
- Colors are CSS variables on `:root`, with a dark-mode set; reuse them rather than hard-coding colors.
