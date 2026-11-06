# GBIM Landing Page

A responsive marketing landing page for **GBIM**, built with Next.js and TypeScript based on the provided Figma design.

## Live Preview

**Live Website:** https://gbim-landing.vercel.app/

**GitHub Repository:** https://github.com/PushpakGanganmale/gbim-landing

**Design Reference:** [GBIM Figma Design](https://www.figma.com/proto/kOObYRphAyIxm1FEMy6dpw/GBIM-new?node-id=1971-10471&p=f&t=qubyVkDdqvuyrF2U-0&scaling=scale-down-width&content-scaling=fixed&page-id=1971%3A8553)

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- Next.js Image Optimization (`next/image`)
- Next.js Font Optimization (`next/font`)
- Inline SVG icons

## Features

- Responsive navigation bar with desktop dropdown menus.
- Mobile-friendly hamburger navigation.
- Hero section with headline, description, and call-to-action buttons.
- Testimonial video card.
- Floating SEO statistics card.
- Client logos section.
- Reusable and modular React components.
- Hover and focus interaction states.
- Responsive layouts for different screen sizes.
- Reduced-motion accessibility support.
- Optimized images and self-hosted fonts.

## Project Structure

```text
gbim-landing/
├── public/
│   └── images/
│       ├── logo and brand assets
│       ├── hero images
│       └── client logos
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── sections/
│   │   │   └── hero/
│   │   │       ├── Hero.tsx
│   │   │       ├── HeroVisual.tsx
│   │   │       ├── SeoStatsCard.tsx
│   │   │       └── ClientsStrip.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Icons.tsx
│   │
│   └── data/
│       └── content.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (18.18 or newer)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/PushpakGanganmale/gbim-landing.git
```

### 2. Navigate to the project

```bash
cd gbim-landing
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint checks |

## Production Build

To create and run a production build locally:

```bash
npm run lint
npm run build
npm run start
```

## Deployment

This project is deployed using [Vercel](https://vercel.com/).

To deploy your own version:

1. Import the GitHub repository into Vercel.
2. Select **Next.js** as the framework.
3. Keep the default build settings.
4. Click **Deploy**.
5. Connect the GitHub repository for automatic deployments.

New commits pushed to the `main` branch will trigger automatic deployments.

## Performance and Implementation

- Uses `next/image` for image optimization.
- Uses `next/font` for font optimization.
- Uses reusable React components for maintainability.
- Uses inline SVG icons instead of an additional icon library.
- Keeps page content and navigation data in `src/data/content.ts`.
- Uses responsive styling and accessibility-conscious interaction states.

## Acknowledgements

- Design reference: GBIM Figma design.
- Framework: [Next.js](https://nextjs.org/).
- Deployment: [Vercel](https://vercel.com/).

AI assistance was used during development. The implementation was reviewed and tested manually.
