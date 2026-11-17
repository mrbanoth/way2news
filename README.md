# Way2News — Hyperlocal Short News Web Clone

A ReactJS + TypeScript + Tailwind CSS clone of the official **Way2News** website (`https://www.way2news.com/`), featuring India's #1 hyperlocal short news showcase, 8 Indian language previews, live reach counters, feature matrix, media coverage archive, user testimonials, and company subpages.

## Features

- **Hero & 8-Language Showcase**: Official Way2News animated banner, App Store & Google Play download links, staggered 8-phone desktop grid (Hindi, Bangla, Telugu, Tamil, Kannada, Malayalam, Gujarati, Marathi) with interactive preview modal, and a mobile language carousel.
- **Animated Hyperlocal Counters**: Intersection-triggered counters with tabular numerals displaying Mandal stories (`416,138`), District stories (`240,922`), Village stories (`110,000`), and Contributors (`40,000`).
- **Features Grid & App Tour**: 2×4 bordered features matrix (`News Sharing`, `Magazines`, `Categories`, `Night Mode`, `Flip Experience`, `Polls`, `Top Buzz`, `Bookmark`) and personalized flip-experience showcase.
- **Blog & Media Coverage**: 3-column blog grid and "As featured in" media section featuring 20 press mentions with publication logos and an expanded Media Archive view.
- **User Testimonials Carousel**: Auto-advancing and manually navigable review slider with star ratings and reader avatars.
- **In-App Subpages**: Functional **Careers** (searchable job openings & application modal), **Events** (2019–2021 culture gallery), and **Contact Us & Grievance Redressal** (office address, map, and validated contact form).

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 + Google Fonts (`Roboto`, `Roboto Condensed`, `Supermercado One`)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Local Development

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:3000`.

### Production Build & Type Check

```bash
npm run lint
npm run build
```

## Project Structure

```text
├── public/images/       # Official Way2News logos, language screens, icons, and press logos
├── src/
│   ├── assets/images/   # Bundled editorial blog image
│   ├── components/      # Modular React UI sections and subpages
│   ├── data/            # Structured Way2News content and metadata
│   ├── App.tsx          # Root SPA layout, scroll-spy, and view routing
│   ├── index.css        # Tailwind CSS v4 entry and custom typography utilities
│   └── main.tsx         # Application mount point
├── index.html           # HTML entry point with metadata and Google Fonts
└── vite.config.ts       # Vite configuration
```
