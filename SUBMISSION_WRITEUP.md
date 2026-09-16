# FreightCore Logistics — Assignment Write-up

## Process & AI-Assisted Workflow

I approached FreightCore Logistics as a production-style frontend experience rather than a conventional landing page. I first broke the brief into the core experience areas: the cinematic hero, global network, fleet intelligence, impact metrics, and footer. The project was then structured into modular React components with animation logic separated into dedicated files.

AI coding tools were used throughout development for architecture exploration, component scaffolding, animation implementation ideas, debugging, TypeScript error resolution, and responsive refinements. AI-generated code was treated as a starting point rather than being used blindly. I reviewed the implementation, tested it locally, inspected browser behavior, and modified the code wherever required.

## Technical Decisions

Next.js App Router was used to maintain a clean separation between server-rendered UI and client-side interactive components. GSAP with ScrollTrigger was selected for the primary scroll-driven interactions because the assignment specifically required a meaningful scroll animation experience.

For the WebGL layer, I used React Three Fiber and lightweight Three.js primitives instead of depending on a large external 3D asset. This provided greater control over the visual language while keeping the scene relatively lightweight.

The Network section uses a desktop-oriented pinned horizontal interaction, while the Fleet section uses scroll-driven visual progression. On smaller screens, these interactions are simplified to provide a more natural mobile experience rather than forcing desktop-style pinned animations onto mobile devices.

## Debugging & Iteration

During development, I encountered responsive layout issues while testing the hero and subsequent sections on smaller viewports. I traced the behavior through the Hero component and global responsive CSS and refined the viewport sizing and mobile rules.

I also encountered a TypeScript build error in the Three.js route-line component where a JSX `<line>` element was interpreted as an SVG element instead of a Three.js object. I resolved this by using the typed `Line` component provided by `@react-three/drei`.

## Performance & Final Result

Performance was considered alongside visual quality by using lightweight WebGL geometry, responsive scene sizing, loading fallbacks, and simplified mobile interactions.

The final implementation combines Next.js, React, TypeScript, Tailwind CSS, GSAP ScrollTrigger, Three.js/React Three Fiber, Lenis, and Lucide into a responsive freight infrastructure experience.

## Lighthouse Results

The deployed production build was tested with Lighthouse.

| Category | Score |
|---|---:|
| Performance | 74 |
| Accessibility | 94 |
| Best Practices | 100 |
| SEO | 100 |

The result reflects a balance between the WebGL/animation requirements of the assignment and the performance of the overall page.