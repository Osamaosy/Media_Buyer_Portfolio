# Media Buyer Portfolio

A React + TypeScript + Vite portfolio website for a media buyer, styled with Tailwind CSS.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 5
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **Build**: Vite (dev server on port 5000)

## Project Structure

```
src/
  components/
    About.tsx       - About section
    button.tsx      - Reusable button component
    card.tsx        - Reusable card component
    Contact.tsx     - Contact section
    Footer.tsx      - Footer component
    Hero.tsx        - Hero/landing section
    Navbar.tsx      - Navigation bar
    Portfolio.tsx   - Portfolio/work section
    Results.tsx     - Results/metrics section
    Services.tsx    - Services offered section
  App.tsx           - Root app component
  main.tsx          - Entry point
  index.css         - Global styles
  App.css           - App-level styles
public/             - Static assets
```

## Development

```bash
npm install
npm run dev    # Starts dev server on port 5000
npm run build  # Builds to dist/
```

## Replit Configuration

- Dev server runs on `0.0.0.0:5000` with `allowedHosts: 'all'` for Replit proxy compatibility
- Workflow: "Start application" → `npm run dev`
- Deployment: Static site, builds with `npm run build`, serves from `dist/`
