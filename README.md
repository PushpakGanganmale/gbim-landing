# GBIM Landing Page

Marketing landing page for GBIM, built with **Next.js** from the provided Figma design.

- **Live preview:** `<add your Vercel URL here>`
- **Repository:** https://github.com/PushpakGanganmale/gbim-landing
- **Design reference:** [Figma](https://www.figma.com/proto/kOObYRphAyIxm1FEMy6dpw/GBIM-new?node-id=1971-10471&p=f&t=qubyVkDdqvuyrF2U-0&scaling=scale-down-width&content-scaling=fixed&page-id=1971%3A8553)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) and React
- TypeScript
- Tailwind CSS v4
- `next/image` for image optimization and `next/font` for self-hosted Google Fonts
- No UI libraries; icons are inline SVG components

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) LTS (v18.18 or newer)
- Git

### Run locally

```bash
git clone https://github.com/PushpakGanganmale/gbim-landing.git
cd gbim-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The first load needs internet to download the fonts.

### Production build

```bash
npm run lint
npm run build
npm run start
```

## Scripts

| Command         | What it does                      |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Create an optimized build         |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Project structure

```
src/
  app/
    layout.tsx          # fonts, metadata, root layout
    page.tsx            # composes the page sections
    globals.css         # Tailwind import and design tokens
  components/
    layout/
      Navbar.tsx        # responsive navbar with dropdowns and mobile menu
    sections/
      hero/
        Hero.tsx            # headline, copy, call to action
        HeroVisual.tsx      # testimonial video card and floating badges
        SeoStatsCard.tsx    # SEO performance card
        ClientsStrip.tsx    # client logos strip
    ui/
      Button.tsx        # reusable button (phone and arrow variants)
      Icons.tsx         # inline SVG icons
  data/
    content.ts          # nav items, copy and stats, kept out of the JSX
public/
  images/               # logo, hero photo, client logos
```

Page copy and links live in `src/data/content.ts`, so text changes don't touch the components.

## Implemented so far

- Responsive navbar: pill layout on desktop, hover dropdowns, hamburger menu on mobile
- Hero section with headline, call-to-action button, testimonial card, SEO stats card and client logos strip
- Hover and focus states on interactive elements, and reduced-motion support

## Performance notes

- The hero image uses `next/image` with `priority` and a `sizes` hint
- Fonts load through `next/font`, so there are no layout shifts or extra requests
- Icons are inline SVG, which avoids an icon library
- No third-party dependencies beyond the Next.js defaults

## Deployment (Vercel)

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New**, then **Project**, and import the `gbim-landing` repository.
4. Keep the default settings (Framework Preset: Next.js) and click **Deploy**.
5. Every `git push` to `main` redeploys automatically.

## Browser testing

Checked at widths of 360, 768, 1024, 1440 and 1920px for horizontal scroll and layout breaks.

## Notes

AI assistance was used while building this project. The code was reviewed and tested manually.
