# Care Collaborative — Website Starter

A dependency-free, static website built on the finalized Care Collaborative brand
(petal mark in sage + clay, warm cream palette, Gelica display type, tagline
"Navigating care together.").
Plain HTML, CSS, and vanilla JS — no build step, no framework. Open it, edit it,
host it anywhere.

## Run it locally

Just open `index.html` in a browser. For a local server (recommended so relative
paths and fonts behave exactly like production):

```bash
# any one of these, from this folder:
python3 -m http.server 8000       # then visit http://localhost:8000
npx serve .
```

## Structure

```
care-collaborative-website/
├── index.html         Home
├── services.html      Our Care
├── about.html         About + team
├── approach.html      Our Approach (5 steps)
├── contact.html       Contact form + info
├── css/styles.css     Design tokens + all styles (start here to retheme)
├── js/main.js         Mobile nav, contact-form stub, footer year
└── assets/
    ├── logo-mark.svg           Petal mark, color (= CC-Logo-Icon_Color)
    ├── logo-mark-reversed.svg  White mark for dark backgrounds (= CC-Logo-Icon_White)
    ├── logo-lockup.svg         Horizontal lockup + tagline (= CC-Logo-Main-Tag_Color)
    ├── logo-badge.svg          Circular badge (= CC-Logo-Badge_Color)
    └── favicon.svg             Color petal mark (= CC-Logo-Icon_Color)
```

The full logo package (Main/Badge/Icon × Color/Black/White in SVG, PNG, and EPS)
lives in the "CareCollaborative Logo" zip; the files above are the web subset.

The header and footer markup is duplicated in each page (standard for a no-build
static site). If you edit navigation or footer, update all five pages, or move to
a templating step / static-site generator later.

## Brand tokens

All colors, fonts, and spacing live as CSS variables at the top of
`css/styles.css` under `:root`. Change them once to retheme the whole site.

| Token | Value | Use |
|------|-------|-----|
| `--green` | `#638269` | Brand green: wordmark, headings, primary buttons |
| `--green-deep` | `#4C6654` | Links + small text (contrast-safe, derived) |
| `--forest` | `#3E5345` | Footer, reversed sections (derived) |
| `--sage` | `#B1C0B4` | Soft green accents, tints |
| `--sage-mid` | `#75947C` | Mid sage from the logo mark |
| `--blush` | `#E7D1C8` | Soft warm tint |
| `--clay` | `#CEA391` | Warm accent from the logo mark |
| `--cream` | `#FBEEE5` | Page background |
| `--ink` | `#3B463E` | Body text (derived) |

The five core colors come from the CareCollaborative Quick Guide; `--green-deep`,
`--forest`, and `--ink` are darker derivatives added for text contrast (WCAG AA).

The brand display font is **Gelica (Adobe Fonts)**. The site currently loads
Fraunces from Google Fonts as the closest free stand-in, with Karla for body/UI
text. To switch to real Gelica: create an Adobe Fonts web project, add its embed
`<link>` to each page's `<head>`, and set `--font-display: "gelica", serif` in
`css/styles.css`.

## Making the contact form live

The form in `contact.html` is a front-end stub. To receive real messages, pick one:

- **Form service (fastest):** create a form on a service like Formspree, then set
  `action="https://formspree.io/f/yourID"` and `data-live="true"` on the `<form>`.
- **Your own backend/email API:** point `action` at your endpoint and set
  `data-live="true"`. The stub handler in `js/main.js` steps aside once
  `data-live="true"`.

## Before launch — replace the placeholders

- Phone `(215) 555-0148` and email `hello@carecollaborative.com` (in every page footer + contact).
- Team bios and headshots on `about.html`.
- Service-area wording ("Philadelphia & the Main Line").
- Add real photography, testimonials, and any licensing/credentials to display.
- Swap the logo in `assets/` if you choose a different mark; the nav and footer
  reference `logo-mark.svg` and `logo-mark-reversed.svg`.
- Add an OpenGraph/social image and update `<meta name="description">` per page.

## Deploy

It's static, so anything works: Netlify or Vercel (drag the folder in),
GitHub Pages, Cloudflare Pages, or any S3/static host. No build command needed —
the publish directory is this folder.

## Accessibility notes

Semantic landmarks, a skip link, visible focus rings, labeled form fields,
`aria-current` on the active nav item, and a `prefers-reduced-motion` guard are
already in place. Keep alt text meaningful when you add images.
