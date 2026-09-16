# FreightCore Logistics — Intelligent Infrastructure

> FreightCore Logistics standard full-stack enterprise platform architecture assignment submission for Truckinzy Infotech Pvt Ltd.

## Overview
FreightCore Logistics is a conceptual premium freight and fleet management platform engineered with Next.js App Router, TypeScript, Tailwind CSS, GSAP ScrollTrigger, and React Three Fiber (WebGL).

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS (Custom enterprise theme)
- **Animation:** GSAP 3 + ScrollTrigger
- **3D / WebGL:** Three.js + @react-three/fiber + @react-three/drei
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Architecture & Structure
```
app/
├── layout.tsx
├── page.tsx
└── globals.css
components/
├── Navbar.tsx
├── Hero/
│   ├── Hero.tsx
│   ├── HeroScene.tsx
│   ├── CargoCluster.tsx
│   ├── RouteLines.tsx
│   ├── NetworkNodes.tsx
│   └── WebGLFallback.tsx
├── Network/
│   ├── NetworkSection.tsx
│   └── NetworkPanel.tsx
├── Fleet/
│   ├── FleetSection.tsx
│   └── FleetCapability.tsx
├── Impact/
│   ├── ImpactSection.tsx
│   └── AnimatedCounter.tsx
├── Footer/
│   └── Footer.tsx
├── animations/
│   ├── HeroAnimations.ts
│   ├── NetworkAnimations.ts
│   ├── FleetAnimations.ts
│   └── ImpactAnimations.ts
└── ui/
    ├── MagneticButton.tsx
    ├── SectionLabel.tsx
    └── ArrowLink.tsx
lib/
├── constants.ts
├── utils.ts
└── lenis.ts
public/
├── images/
├── models/
└── textures/
```

## Getting Started

Extract the repository and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.
