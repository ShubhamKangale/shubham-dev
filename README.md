# Shubham Kangale — Portfolio

A personal portfolio built with plain HTML, CSS and JavaScript. There is no backend, no build step, no database and no environment variables.

## Run it

Open `index.html` in a browser. The typefaces load from Google Fonts, so the first visit needs internet.

To publish it for free, use GitHub Pages (Settings → Pages → deploy from the `main` branch, root folder), Netlify or Vercel.

## What is where

| Path | What it holds |
| --- | --- |
| `index.html` | Page structure and text: hero, doors, story, projects, contact, footer, privacy & credits page |
| `css/style.css` | All styling and the light/dark colour variables (`:root` at the top) |
| `js/script.js` | Loader, doors and the work in each door, project slider, ability card, hover effects |
| `assets/photo.webp`, `assets/photo-color.webp` | Portrait (black & white, and the colour version shown on hover and on the ability card) |
| `assets/clips/` | Videos and their poster images: travel reel, YouTube explainer, brand promo, Spider Portfolio, AI Resume Analyzer |
| `assets/posters/` | Graphic design samples: café, fitness, perfume posters and logos |
| `assets/pages/` | Long website screenshots that scroll inside the UI/UX cards |

## Easy edits

- Contact email and social links: `index.html` (contact section and footer).
- The work shown in each door: `js/script.js`, search for `const S=[`.
- Text of the laptop hover panel on each door: `js/script.js`, search for `const DI=[`.
- Privacy & credits text: `index.html`, search for `id="legal"`.

## Link preview card

`index.html` has Open Graph tags and `assets/og-image.jpg` (1200x630) so that a shared link shows as a card: photo, title, description and link. After deploying, replace `https://YOUR-SITE-URL` (3 places in the `<head>`) with your real site link. If you change the preview later, WhatsApp, Facebook and LinkedIn keep the old one for a while; refresh it with the Facebook Sharing Debugger or LinkedIn Post Inspector.

## Notes

- The contact form does not send anything to a server. It opens the visitor's own email app with the message filled in.
- This site was designed and built with the help of AI tools (mainly Anthropic's Claude). It is stated on the site's Privacy & credits page.
- Some samples show brand names, logos or screenshots that belong to their owners, and they are shown only to describe the work.
- The original designs, photographs, videos and text are © Shubham Kangale. Please do not reuse them without written permission.
