Hosting https://collectible-sneakers-shopping-cart.vercel.app/
# Collers - Collectible Sneakers Landing Page

A modern, responsive React + TypeScript landing page for a collectible sneakers platform, built with Material-UI (MUI).

## Features

- **Modern Design**: Clean, professional UI matching the provided design specifications
- **Responsive Layout**: Fully responsive across all device sizes
- **TypeScript**: Type-safe React components
- **Material-UI**: Built with MUI components and custom theming
- **Image Placeholders**: All images use placeholders that can be easily replaced

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI) v5
- Vite (Build tool)
- Emotion (CSS-in-JS)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ProductShowcase.tsx
│   ├── WhyJoinUs.tsx
│   ├── Testimonials.tsx
│   ├── GrowCollection.tsx
│   ├── Articles.tsx
│   ├── AmazingEvents.tsx
│   └── Footer.tsx
├── theme.ts            # MUI theme configuration
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Replacing Images

The following images need to be added to the `public/images/` directory:

1. **header-corner.png** - The decorative rectangle image for the top-right corner of the header
2. **hero-sneaker.png** - The main sneaker image for the hero section (should include the background/yellow blob as part of the image)

The components are already configured to use these images:
- Header uses `/images/header-corner.png`
- Hero section uses `/images/hero-sneaker.png`

If the images don't exist, the components will gracefully fall back to placeholders or hide the elements.

### Theme Colors

Edit `src/theme.ts` to customize colors, typography, and component styles.

## Components Overview

- **Header**: Navigation bar with logo and menu items
- **Hero**: Main hero section with call-to-action
- **Features**: Three feature cards with icons
- **ProductShowcase**: Dark-themed product cards section
- **WhyJoinUs**: Benefits section with video placeholder
- **Testimonials**: Customer testimonials carousel
- **GrowCollection**: Collection showcase with interactive elements
- **Articles**: Article cards grid
- **AmazingEvents**: Events showcase with CTA section
- **Footer**: Footer with links, app downloads, and social media

## License

This project is open source and available for use.

