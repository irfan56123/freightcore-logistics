# AI Tool Process & Technical Decisions

## Overview

This document describes how AI-assisted development was used during the design, implementation, debugging, and refinement of the FreightCore Logistics project.

AI tools were used as development assistants throughout the project. The generated suggestions were reviewed, tested locally, and modified where necessary rather than being used without validation.

---

## Architectural Setup Decisions

### 1. Next.js App Router

Next.js App Router was selected to provide a clean application structure and a clear separation between server-rendered UI and client-side interactive components.

Client-side components were used where browser APIs, GSAP, WebGL, or interactive state were required.

### 2. Modular Component Architecture

The project was divided into dedicated feature-based components:

- `Hero`
- `Network`
- `Fleet`
- `Impact`
- `Footer`
- Reusable UI components
- Dedicated animation controllers

Animation logic was kept inside `components/animations/` instead of mixing large GSAP timelines directly into presentation components.

This makes the animation system easier to maintain and modify independently from the UI.

### 3. GSAP & ScrollTrigger

GSAP with ScrollTrigger was selected as the primary animation system because the assignment required meaningful scroll-driven interactions.

It was used for:

- Hero animation sequences
- Network section transitions
- Pinned desktop interactions
- Fleet visual progression
- Section reveals
- Telemetry-style motion
- Scroll-linked visual states

Mobile behavior was intentionally simplified in places where desktop-style pinned scrolling would negatively affect usability.

### 4. Three.js / React Three Fiber

React Three Fiber was used to integrate the WebGL experience into the Hero section.

Instead of relying on a large external 3D model, the scene uses lightweight Three.js primitives and procedural elements.

This approach provided:

- Better control over the visual style
- Smaller asset dependency
- Easier animation control
- More predictable rendering behavior

The WebGL scene is isolated from the normal DOM animation system.

### 5. WebGL Fallback

A `WebGLFallback` component was included to provide an alternative experience for environments where WebGL is unavailable or unsuitable.

This helps prevent the Hero experience from becoming completely dependent on WebGL support.

### 6. Lenis Smooth Scrolling

Lenis was integrated to provide smoother scrolling and improve the overall feel of the scroll-driven experience.

The smooth-scrolling layer was kept separate from the individual section animation controllers.

---

## AI Tools Used

### Architecture Scaffolding

AI assistance was used during the initial project planning and architecture stage to:

- Break the assignment into feature sections
- Design the component hierarchy
- Separate UI and animation responsibilities
- Suggest reusable component patterns
- Organize the animation controllers

The final architecture was reviewed and adjusted manually according to the actual project requirements.

### Component Development

AI assistance was used to generate initial implementations and development ideas for components such as:

- Hero UI
- Network panels
- Fleet capabilities
- Impact metrics
- Reusable buttons and labels
- WebGL scene components

Generated implementations were then adapted to fit the project's existing structure and visual requirements.

### Animation Development

AI was used to explore and implement GSAP and ScrollTrigger patterns, including:

- Scroll-linked transforms
- Pinned sections
- Horizontal panel movement
- Reveal animations
- Progress indicators
- Responsive animation behavior

Animation behavior was tested in the browser and modified when the generated approach did not produce the desired interaction.

### WebGL Development

AI assistance was used while working with:

- React Three Fiber
- Three.js primitives
- Drei utilities
- Lighting
- Camera configuration
- WebGL fallbacks
- Lightweight scene composition

The WebGL implementation was kept intentionally lightweight to balance visual impact and performance.

### Debugging

AI assistance was also used during debugging and build verification.

One notable issue occurred in the route-line component where a JSX `<line>` element was interpreted by TypeScript as an SVG element rather than a Three.js element.

The issue was resolved by using the typed `Line` component from `@react-three/drei`.

---

## Responsive Development

AI assistance was used to identify potential responsive layout problems and suggest breakpoint-specific approaches.

The final implementation was manually tested across:

- Desktop
- Tablet
- Mobile

Desktop interactions such as pinned scrolling were simplified or replaced with lighter interactions on mobile where appropriate.

The goal was to preserve the visual language of the experience without sacrificing usability on smaller screens.

---

## AI-Assisted Development Workflow

The general workflow followed during development was:

1. Understand the assignment requirements.
2. Define the component and animation architecture.
3. Use AI to explore implementation approaches.
4. Generate an initial implementation.
5. Integrate the implementation into the project.
6. Run the application and test browser behavior.
7. Identify visual, responsive, or TypeScript issues.
8. Use AI to investigate possible solutions.
9. Manually review and modify the solution.
10. Run production builds and perform final QA.

AI was therefore used as a development accelerator and debugging assistant, while implementation decisions and final validation remained part of the development process.

---

## Performance Considerations

Because the project combines WebGL, GSAP, smooth scrolling, and multiple visual effects, performance was considered during implementation.

The following approaches were used:

- Lightweight WebGL geometry
- Responsive WebGL scene sizing
- Limited rendering complexity
- WebGL fallback
- Simplified mobile interactions
- Separation of animation logic from React state
- Avoiding unnecessary DOM state updates inside animation loops

The deployed version was also evaluated using Lighthouse.

---

## Final Note

AI-assisted development was used to accelerate implementation, explore technical approaches, and debug issues. The generated output was not treated as final automatically.

Code was reviewed, integrated, tested, and modified based on the actual behavior of the FreightCore Logistics application and the requirements of the assignment.