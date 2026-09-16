import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHero = (container: HTMLElement) => {
  const ctx = gsap.context(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([".hero-heading", ".hero-desc", ".hero-cta", ".hero-meta"], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    // 1. Initial Staggered Reveal Sequence
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".hero-heading", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1 })
      .fromTo(".hero-desc", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
      .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(".hero-meta > div", { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.15, duration: 0.7 }, "-=0.4");

    // 2. Scroll Parallax Translation
    gsap.to(".hero-heading", {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
      y: -60,
      opacity: 0.3,
    });
  }, container);

  return ctx;
};