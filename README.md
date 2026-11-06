# GBIM Landing Page

A responsive marketing landing page developed as part of the **GBIM Frontend Development Assignment**, using Next.js and TypeScript based on the provided Figma design.

## Live Preview

- **Live Website:** https://gbim-landing.vercel.app/
- **GitHub Repository:** https://github.com/PushpakGanganmale/gbim-landing
- **Figma Design Reference:** [View GBIM Landing Page Design](https://www.figma.com/proto/kOObYRphAyIxm1FEMy6dpw/GBIM-new?node-id=1971-10471&p=f&t=qubyVkDdqvuyrF2U-0&scaling=scale-down-width&content-scaling=fixed&page-id=1971%3A8553)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Frontend:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Image Optimization:** Next.js `next/image`
- **Font Optimization:** Next.js `next/font`
- **Icons:** Inline SVG components

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
│       ├── brand assets
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

- Node.js 20.9 or newer
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/PushpakGanganmale/gbim-landing.git
```

### 2. Navigate to the project directory

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

## Performance and Code Quality

- Uses Next.js Image Optimization for efficient image delivery.
- Uses `next/font` for font loading and reduced layout shifts.
- Follows a reusable, component-based React architecture.
- Uses inline SVG icons without an additional icon library.
- Separates page content and navigation data into `src/data/content.ts`.
- Uses responsive styling and accessibility-conscious interaction states.
- Avoids unnecessary third-party UI dependencies.

## Deployment

The project is deployed using [Vercel](https://vercel.com/).

To deploy your own version:

1. Sign in to Vercel using your GitHub account.
2. Import the `gbim-landing` repository.
3. Select Next.js as the framework.
4. Keep the default build settings.
5. Click **Deploy**.

Once GitHub integration is configured, new commits pushed to the `main` branch automatically trigger deployments.

## Assignment Details

**Assignment:** Frontend Development – Marketing Landing Page

**Organization:** GBIM

**Objective:** Develop a responsive marketing landing page using Next.js that closely follows the provided Figma design.

**Evaluation Focus:**
- Design accuracy
- Responsive behavior
- Code quality and component structure
- Performance and optimization
- Functionality and user interactions

## Acknowledgements

- Design reference: GBIM Figma design.
- Framework: [Next.js](https://nextjs.org/).
- Deployment platform: [Vercel](https://vercel.com/).

AI assistance was used during development. The implementation was reviewed and tested manually.
