# Portfolio Setup

This project is a React + Vite + Tailwind setup for your portfolio component.

## Run locally

1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`
3. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Files created

- `src/Portfolio.jsx` - your main portfolio page
- `src/components/ui/button.jsx` - button component used by the page
- `src/components/ui/card.jsx` - card components used by the page
- `src/main.jsx` - app entry
- `src/index.css` - Tailwind imports
- `vite.config.js` - Vite config with `@` alias to `src`
- `tailwind.config.js` and `postcss.config.js` - Tailwind setup

## Required replacements

Update these values in `src/Portfolio.jsx`:

- `YOUR_RESUME_LINK`
- `https://github.com/YOUR_GITHUB`

## Add your assets in `public/`

Place these files in `public/` so links/images work:

- `fitbuddy-ss.png`
- `llm-ss.png`
- `cert-bigdata.pdf`
- `cert-cyber.pdf`
- `cert-compiler.pdf`
