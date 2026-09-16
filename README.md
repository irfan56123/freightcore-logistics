# FreightCore Logistics — Intelligent Infrastructure

> A premium, scroll-driven freight and fleet management landing page built for the Truckinzy Infotech Pvt Ltd Full-Stack Developer Intern hiring assignment.

## Overview

**FreightCore Logistics** is a conceptual premium freight and fleet management experience designed to present complex logistics infrastructure through a cinematic, interactive web interface.

The project focuses on:

- Scroll-driven storytelling
- GSAP ScrollTrigger interactions
- Three.js / React Three Fiber WebGL integration
- Responsive behavior across desktop, tablet, and mobile
- Modular and maintainable component architecture
- Performance-conscious animation and loading strategies

The experience is intentionally designed as an enterprise-oriented freight platform rather than a conventional SaaS template.

---

## Tech Stack

| Technology | Usage |
|---|---|
| **Next.js** | App Router, application architecture |
| **React** | Component-based UI |
| **TypeScript** | Strictly typed development |
| **Tailwind CSS** | Responsive styling and design system |
| **GSAP** | High-performance animations |
| **GSAP ScrollTrigger** | Scroll-driven and pinned interactions |
| **Three.js** | WebGL / 3D rendering |
| **React Three Fiber** | React integration for Three.js |
| **@react-three/drei** | Three.js utilities |
| **Lenis** | Smooth scrolling |
| **Lucide React** | Interface icons |
| **Framer Motion** | UI and entrance micro-interactions |

---

## Key Features

### Cinematic Hero

- Full-screen responsive hero experience
- Interactive WebGL freight visualization
- Mouse-based parallax on desktop
- Responsive WebGL positioning on smaller screens
- Animated typography and content entrance
- Live telemetry interface
- Route and fleet status indicators
- WebGL fallback using React Suspense

### Global Network

A scroll-driven logistics network showcase featuring:

- GSAP ScrollTrigger
- Desktop pinned horizontal scrolling
- Scroll-synchronized panel transitions
- Network visualization
- Animated route/data elements
- Progress indicators
- Responsive mobile presentation
- Mobile-specific animation behavior

### Fleet Intelligence

An interactive fleet-management section focused on:

- Scroll-driven visual transitions
- Fleet capability progression
- Route visualization
- Telemetry indicators
- Animated capability states
- Desktop pinned interaction
- Responsive mobile layout

### Impact & Metrics

A lightweight metrics section containing:

- Animated numerical counters
- Scroll-based reveal animations
- Responsive metric layout
- Minimal visual treatment to keep the section performance-conscious

### Responsive Design

The interface is designed for:

- Desktop
- Laptop
- Tablet
- Mobile devices

Desktop interactions use richer scroll-driven experiences, while mobile layouts simplify certain interactions where necessary for usability and performance.

---

## Project Structure

```text
freightcore-logistics/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   │
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── HeroScene.tsx
│   │   ├── CargoCluster.tsx
│   │   ├── RouteLines.tsx
│   │   ├── NetworkNodes.tsx
│   │   └── WebGLFallback.tsx
│   │
│   ├── Network/
│   │   ├── NetworkSection.tsx
│   │   └── NetworkPanel.tsx
│   │
│   ├── Fleet/
│   │   ├── FleetSection.tsx
│   │   └── FleetCapability.tsx
│   │
│   ├── Impact/
│   │   ├── ImpactSection.tsx
│   │   └── AnimatedCounter.tsx
│   │
│   ├── Footer/
│   │   └── Footer.tsx
│   │
│   ├── animations/
│   │   ├── HeroAnimations.ts
│   │   ├── NetworkAnimations.ts
│   │   ├── FleetAnimations.ts
│   │   └── ImpactAnimations.ts
│   │
│   └── ui/
│       ├── MagneticButton.tsx
│       ├── SectionLabel.tsx
│       └── ArrowLink.tsx
│
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   └── lenis.ts
│
├── public/
│   ├── images/
│   ├── models/
│   └── textures/
│
├── README.md
├── AI_USAGE.md
├── package.json
└── tsconfig.json