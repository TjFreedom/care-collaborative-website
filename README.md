# Care Collaborative — Website Starter

A dependency-free, static website starter built on the Care Collaborative brand
(Woven Current logo, soft coastal palette, Cormorant Garamond + Karla).
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
    ├── logo-mark.svg           Woven Current mark (color)
    ├── logo-mark-reversed.svg  Mark for dark backgrounds (footer)
    ├── logo-lockup.svg         Full stacked lockup (mark + wordmark)
    └── favicon.svg             One-color mark
```

The header and footer markup is duplicated in each page (standard for a no-build
static site). If you edit navigation or footer, update all five pages, or move to
a templating step / static-site generator later.

## Brand tokens

All colors, fonts, and spacing live as CSS variables at the top of
`css/styles.css` under `:root`. Change them once to retheme the whole site.

| Token | Value | Use |
|------|-------|-----|
| `--slate` | `#3E5C6E` | Wordmark, headings, primary buttons |
| `--harbor` | `#2E4757` | Footer, reversed sections |
| `--euc` / `--euc-deep` | `#8FA89A` / `#5E7E6C` | Accents; deep version for links/small text |
| `--sea` | `#A8C5BC` | Soft backgrounds, tints |
| `--sand` | `#C9B8A3` | Warm accents |
| `--ivory` | `#F5F0E6` | Page background |
| `--ink` | `#34474F` | Body text |

Fonts load from Google Fonts (Cormorant Garamond, Karla). To self-host for speed
or offline use, download the font files and replace the `<link>` in each page.

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
