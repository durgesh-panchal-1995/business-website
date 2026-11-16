# Brightpress Pro (React + Vite + React Router)

    npm install
    npm run dev
    npm run build

- Brand, contact details and navigation: `src/data/site.js`
- All 25 services (details, inclusions, tools, FAQs, process): `src/data/services.js`
- Pages: `src/pages` | Shared parts: `src/components` | Home sections: `src/components/home`
- Adding a service = adding one object to the `services` array. Its detail page is created automatically at `/services/<slug>`.
- On static hosting, redirect all routes to `index.html` (for example a `_redirects` file on Netlify: `/* /index.html 200`).

## Themes
- Colors live in `src/styles/themes.css`; the list shown in the switcher is `src/data/themes.js`.
- Add a theme: copy a `[data-theme="..."]` block, change the colors, add an entry in `themes.js`.
- The visitor's choice is remembered in the browser.

## Projects
- Edit `src/data/projects.js`. These are dummy projects: replace names, results and `demo` links with real ones.
- Each project gets a case-study page at `/projects/<slug>` and a "Live demo" button that opens its `demo` URL.

## Design polish (v3)
`src/styles/Polish.css` (loaded last) adds the trendy layer: gradient buttons with shine, magnetic buttons, cursor-light cards, a rotating-border finder card, dotted hero patterns, animated headings and CTA, a shrinking header on scroll and a back-to-top button. Interactions live in `src/components/Interactions.jsx` and `BackToTop.jsx`. Delete `Polish.css` and its import in `main.jsx` to return to the previous look. No text content was changed.
