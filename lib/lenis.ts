import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initLenis = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const lenis = new Lenis({
    duration: 1.2,

    easing: (t) =>
      Math.min(
        1,
        1.001 -
          Math.pow(2, -10 * t)
      ),

    orientation: "vertical",

    gestureOrientation: "vertical",

    smoothWheel: true,
  });

  /*
  ============================================
  LENIS → SCROLLTRIGGER
  ============================================
  */

  lenis.on(
    "scroll",
    ScrollTrigger.update
  );

  /*
  ============================================
  GSAP → LENIS
  ============================================
  */

  const update = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(update);

  /*
  ============================================
  PREVENT TIMING DRIFT
  ============================================
  */

  gsap.ticker.lagSmoothing(0);

  /*
  ============================================
  CLEANUP
  ============================================
  */

  const originalDestroy =
    lenis.destroy.bind(lenis);

  lenis.destroy = () => {
    gsap.ticker.remove(update);
    originalDestroy();
  };

  return lenis;
};