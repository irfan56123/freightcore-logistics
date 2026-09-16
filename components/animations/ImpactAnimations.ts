"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImpactAnimationOptions = {
  section: HTMLElement;
};

export function animateImpact({
  section,
}: ImpactAnimationOptions) {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    const eyebrow =
      section.querySelector<HTMLElement>(
        ".impact-eyebrow",
      );

    const heading =
      section.querySelector<HTMLElement>(
        ".impact-heading",
      );

    const description =
      section.querySelector<HTMLElement>(
        ".impact-description",
      );

    const metrics = Array.from(
      section.querySelectorAll<HTMLElement>(
        ".impact-metric",
      ),
    );

    const markers = Array.from(
      section.querySelectorAll<HTMLElement>(
        ".impact-marker",
      ),
    );

    const labels = Array.from(
      section.querySelectorAll<HTMLElement>(
        ".impact-label",
      ),
    );

    const counters = metrics.map(
      (metric) =>
        metric.querySelector<HTMLElement>(
          ":scope > div:nth-child(2)",
        ),
    );

    const icons = metrics.map(
      (metric) =>
        metric.querySelector<SVGElement>(
          ":scope > div:first-child svg",
        ),
    );

    const progressLines = metrics.map(
      (metric) =>
        metric.querySelector<HTMLElement>(
          ":scope > div:last-child > div",
        ),
    );

    const bottomStatement =
      section.querySelector<HTMLElement>(
        ".impact-metric:last-child",
      )?.parentElement
        ?.nextElementSibling as
        | HTMLElement
        | null;

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    /* =========================================================
       REDUCED MOTION
    ========================================================= */

    if (prefersReducedMotion) {
      gsap.set(
        [
          eyebrow,
          heading,
          description,
          ...metrics,
          ...counters,
          ...labels,
          bottomStatement,
        ],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "none",
        },
      );

      gsap.set(progressLines, {
        scaleX: 1,
      });

      return;
    }

    /* =========================================================
       DESKTOP
    ========================================================= */

    mm.add("(min-width: 768px)", () => {
      /* -------------------------------------------------------
         INITIAL
      ------------------------------------------------------- */

      gsap.set(eyebrow, {
        opacity: 0,
        y: 18,
      });

      gsap.set(heading, {
        opacity: 0,
        y: 35,
      });

      gsap.set(description, {
        opacity: 0,
        y: 20,
      });

      gsap.set(metrics, {
        opacity: 0,
        y: 40,
      });

      gsap.set(markers, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(counters, {
        opacity: 0,
        y: 18,
      });

      gsap.set(labels, {
        opacity: 0,
        y: 8,
      });

      gsap.set(progressLines, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /* -------------------------------------------------------
         HEADER
      ------------------------------------------------------- */

      const intro =
        gsap.timeline({
          scrollTrigger: {
            id: "impact-desktop-intro",
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

      intro
        .to(eyebrow, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        })
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.25",
        );

      /* -------------------------------------------------------
         METRICS
      ------------------------------------------------------- */

      ScrollTrigger.create({
        id: "impact-desktop-metrics",
        trigger: section,
        start: "top 58%",
        once: true,

        onEnter: () => {
          const tl =
            gsap.timeline();

          tl.to(metrics, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          });

          tl.to(
            markers,
            {
              opacity: 1,
              scale: 1,
              duration: 0.35,
              stagger: 0.07,
              ease: "back.out(2)",
            },
            "-=0.35",
          );

          tl.to(
            counters,
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              stagger: 0.07,
              ease: "power2.out",
            },
            "-=0.25",
          );

          tl.to(
            labels,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.07,
              ease: "power2.out",
            },
            "-=0.2",
          );

          tl.to(
            progressLines,
            {
              scaleX: 1,
              duration: 0.55,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.2",
          );
        },
      });

      /* -------------------------------------------------------
         AMBIENT MARKERS
      ------------------------------------------------------- */

      markers.forEach(
        (marker, index) => {
          gsap.to(marker, {
            scale: 1.5,
            opacity: 0.45,
            duration:
              1.1 + index * 0.12,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.15,
          });
        },
      );

      /* -------------------------------------------------------
         ICON AMBIENT
      ------------------------------------------------------- */

      icons.forEach(
        (icon, index) => {
          if (!icon) return;

          gsap.to(icon, {
            y: -3,
            duration:
              1.5 + index * 0.15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1,
          });
        },
      );

      /* -------------------------------------------------------
         BOTTOM STATEMENT
      ------------------------------------------------------- */

      if (bottomStatement) {
        gsap.fromTo(
          bottomStatement,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomStatement,
              start: "top 88%",
              once: true,
            },
          },
        );
      }
    });

    /* =========================================================
       MOBILE
    ========================================================= */

    mm.add("(max-width: 767px)", () => {
      /* -------------------------------------------------------
         MOBILE INITIAL
      ------------------------------------------------------- */

      gsap.set(eyebrow, {
        opacity: 0,
        x: -15,
      });

      gsap.set(heading, {
        opacity: 0,
        y: 45,
        scale: 0.94,
        filter: "blur(5px)",
      });

      gsap.set(description, {
        opacity: 0,
        y: 25,
      });

      gsap.set(metrics, {
        opacity: 0,
        y: 65,
        scale: 0.94,
        filter: "blur(5px)",
      });

      gsap.set(markers, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(counters, {
        opacity: 0,
        y: 22,
        scale: 0.9,
      });

      gsap.set(labels, {
        opacity: 0,
        y: 12,
      });

      gsap.set(icons, {
        opacity: 0,
        scale: 0.7,
        rotation: -20,
      });

      gsap.set(progressLines, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /* -------------------------------------------------------
         HEADER CINEMATIC REVEAL
      ------------------------------------------------------- */

      const mobileIntro =
        gsap.timeline({
          scrollTrigger: {
            id: "impact-mobile-header",
            trigger: section,
            start: "top 88%",
            end: "top 45%",
            scrub: 0.8,
          },
        });

      mobileIntro
        .to(eyebrow, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "power3.out",
          },
          0.05,
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          0.28,
        );

      /* -------------------------------------------------------
         EACH METRIC
      ------------------------------------------------------- */

      metrics.forEach(
        (metric, index) => {
          const marker = markers[index];
          const counter = counters[index];
          const label = labels[index];
          const icon = icons[index];
          const line =
            progressLines[index];

          ScrollTrigger.create({
            id: `impact-mobile-${index}`,
            trigger: metric,
            start: "top 88%",
            once: true,

            onEnter: () => {
              const tl =
                gsap.timeline();

              /* CARD */

              tl.to(metric, {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.65,
                ease: "power3.out",
              });

              /* MARKER */

              if (marker) {
                tl.to(
                  marker,
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(2)",
                  },
                  "-=0.4",
                );
              }

              /* ICON */

              if (icon) {
                tl.to(
                  icon,
                  {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                  },
                  "-=0.3",
                );
              }

              /* NUMBER */

              if (counter) {
                tl.to(
                  counter,
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.45,
                    ease: "power3.out",
                  },
                  "-=0.25",
                );
              }

              /* LABEL */

              if (label) {
                tl.to(
                  label,
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                  },
                  "-=0.2",
                );
              }

              /* LINE */

              if (line) {
                tl.to(
                  line,
                  {
                    scaleX: 1,
                    duration: 0.6,
                    ease: "power2.out",
                  },
                  "-=0.15",
                );
              }
            },
          });

          /* -----------------------------------------------------
             NUMBER SUBTLE FLOAT
          ----------------------------------------------------- */

          if (counter) {
            gsap.to(counter, {
              y: -3,
              duration:
                1.8 + index * 0.15,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay:
                1 + index * 0.2,
            });
          }

          /* -----------------------------------------------------
             MARKER PULSE
          ----------------------------------------------------- */

          if (marker) {
            gsap.to(marker, {
              scale: 1.5,
              opacity: 0.35,
              duration:
                1.1 + index * 0.12,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay:
                1.1 + index * 0.15,
            });
          }
        },
      );

      /* -------------------------------------------------------
         BOTTOM STATEMENT
      ------------------------------------------------------- */

      if (bottomStatement) {
        gsap.fromTo(
          bottomStatement,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",

            scrollTrigger: {
              trigger: bottomStatement,
              start: "top 88%",
              once: true,
            },
          },
        );
      }

      /* -------------------------------------------------------
         MOBILE CLEANUP
      ------------------------------------------------------- */

      return () => {
        gsap.killTweensOf([
          metrics,
          markers,
          counters,
          labels,
          icons,
          progressLines,
        ]);
      };
    });

    return () => {
      mm.revert();
    };
  }, section);

  return ctx;
}