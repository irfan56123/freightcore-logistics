"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FleetAnimationOptions = {
  section: HTMLElement;
  stage: HTMLElement;
  map: SVGSVGElement;
  core: HTMLElement;
  coreGlow: HTMLElement;
  setActiveCapability: (index: number) => void;
};

export function animateFleet({
  section,
  stage,
  map,
  core,
  coreGlow,
  setActiveCapability,
}: FleetAnimationOptions) {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    /* =========================================================
       DESKTOP
    ========================================================= */

    mm.add("(min-width: 768px)", () => {
      const vehicles =
        Array.from(
          section.querySelectorAll<SVGGElement>(
            ".fleet-vehicle"
          )
        );

      const routes =
        Array.from(
          section.querySelectorAll<SVGPathElement>(
            ".fleet-route-active"
          )
        );

      const nodes =
        Array.from(
          section.querySelectorAll<SVGCircleElement>(
            ".fleet-map-node"
          )
        );

      const telemetryValues =
        section.querySelectorAll<HTMLElement>(
          ".fleet-live-value"
        );

      const titleWords =
        section.querySelectorAll<HTMLElement>(
          ".fleet-title-word"
        );

      const eyebrow =
        section.querySelector<HTMLElement>(
          ".fleet-eyebrow"
        );

      const capabilities =
        section.querySelector<HTMLElement>(
          ".fleet-capabilities"
        );

      const telemetry =
        section.querySelector<HTMLElement>(
          ".fleet-telemetry"
        );

      const scanLine =
        section.querySelector<HTMLElement>(
          ".fleet-scan-line"
        );

      /*
      ----------------------------------------------------------
      INITIAL STATES
      ----------------------------------------------------------
      */

      gsap.set(titleWords, {
        y: 45,
        opacity: 0,
      });

      gsap.set(eyebrow, {
        y: 20,
        opacity: 0,
      });

      /*
      Capabilities remain visible.
      */

      gsap.set(capabilities, {
        x: -25,
        opacity: 1,
      });

      gsap.set(telemetry, {
        x: 25,
        opacity: 0,
      });

      gsap.set(core, {
        scale: 0.65,
        opacity: 0,
      });

      gsap.set(coreGlow, {
        scale: 0.5,
        opacity: 0,
      });

      /*
      CONSTANT NODES
      */

      gsap.set(nodes, {
        scale: 1,
        opacity: 0.8,
        transformOrigin: "center center",
      });

      /*
      ROUTE INITIAL STATE
      */

      routes.forEach((route) => {
        try {
          const length =
            route.getTotalLength();

          gsap.set(route, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        } catch {
          // Ignore unsupported SVG measurements.
        }
      });

      /*
      ----------------------------------------------------------
      INTRO ANIMATION
      ----------------------------------------------------------
      */

      const intro =
        gsap.timeline({
          scrollTrigger: {
            id: "fleet-intro",

            trigger: section,

            start: "top 75%",

            end: "top 30%",

            scrub: 1,

            invalidateOnRefresh: true,
          },
        });

      intro
        .to(
          eyebrow,
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
          },
          0
        )

        .to(
          titleWords,
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.45,
            ease: "power3.out",
          },
          0.05
        )

        .to(
          capabilities,
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          },
          0.15
        )

        .to(
          telemetry,
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
          },
          0.2
        )

        .to(
          core,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.5)",
          },
          0.25
        )

        .to(
          coreGlow,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
          },
          0.25
        );

      /*
      ----------------------------------------------------------
      MAIN LOCKED / PINNED EXPERIENCE
      ----------------------------------------------------------
      */

      const main =
        ScrollTrigger.create({
          id: "fleet-main",

          trigger: section,

          start: "top top",

          end: () =>
            `+=${window.innerHeight * 3.2}`,

          /*
          THIS IS THE DESKTOP LOCK.
          */

          pin: stage,

          pinSpacing: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress =
              self.progress;

            /*
            ================================================
            CORE ROTATION
            ================================================
            */

            gsap.set(core, {
              rotation:
                progress * 540,

              scale:
                1 +
                Math.sin(
                  progress * Math.PI
                ) *
                  0.08,
            });

            /*
            ================================================
            MAP ROTATION
            ================================================
            */

            gsap.set(map, {
              rotation:
                progress * -5,
            });

            /*
            ================================================
            SCAN LINE
            ================================================
            */

            if (scanLine) {
              gsap.set(scanLine, {
                y:
                  -140 +
                  progress * 280,
              });
            }

            /*
            ================================================
            ROUTE DRAW
            ================================================
            */

            routes.forEach(
              (route, index) => {
                try {
                  const length =
                    route.getTotalLength();

                  const start =
                    index * 0.08;

                  const local =
                    gsap.utils.clamp(
                      0,
                      1,
                      (progress - start) /
                        0.75
                    );

                  gsap.set(route, {
                    strokeDashoffset:
                      length *
                      (1 - local),
                  });
                } catch {
                  // Ignore.
                }
              }
            );

            /*
            ================================================
            MOVING VEHICLES
            ================================================
            */

            vehicles.forEach(
              (vehicle, index) => {
                const offset =
                  index * 0.21;

                const local =
                  (progress + offset) %
                  1;

                const x =
                  local * 480;

                const y =
                  Math.sin(
                    local *
                      Math.PI *
                      2
                  ) * 32;

                gsap.set(vehicle, {
                  x,
                  y,
                });
              }
            );

            /*
            ================================================
            TELEMETRY
            ================================================
            */

            const speed =
              Math.round(
                58 +
                  progress * 54
              );

            const efficiency = (
              91.2 +
              progress * 7.4
            ).toFixed(1);

            const uptime = (
              98.1 +
              progress * 1.7
            ).toFixed(1);

            const telemetryData = [
              `${speed} KM/H`,
              `${efficiency}%`,
              `${uptime}%`,
            ];

            telemetryValues.forEach(
              (element, index) => {
                if (
                  telemetryData[index]
                ) {
                  element.textContent =
                    telemetryData[index];
                }
              }
            );
          },
        });

      /*
      ----------------------------------------------------------
      CONSTANT CORE GLOW
      ----------------------------------------------------------
      */

      const glowTween =
        gsap.to(coreGlow, {
          scale: 1.22,
          opacity: 0.3,

          duration: 1.5,

          repeat: -1,

          yoyo: true,

          ease: "sine.inOut",
        });

      /*
      ----------------------------------------------------------
      CONSTANT NODE PULSE
      ----------------------------------------------------------
      */

      const nodeTweens =
        nodes.map(
          (node, index) =>
            gsap.to(node, {
              scale: 1.35,

              opacity: 0.45,

              duration:
                1.1 +
                index * 0.08,

              repeat: -1,

              yoyo: true,

              ease: "sine.inOut",

              delay:
                index * 0.1,
            })
        );

      /*
      ----------------------------------------------------------
      RESIZE
      ----------------------------------------------------------
      */

      const resizeObserver =
        new ResizeObserver(() => {
          ScrollTrigger.refresh();
        });

      resizeObserver.observe(stage);

      /*
      ----------------------------------------------------------
      DESKTOP CLEANUP
      ----------------------------------------------------------
      */

      return () => {
        resizeObserver.disconnect();

        intro.kill();

        main.kill();

        glowTween.kill();

        nodeTweens.forEach(
          (tween) => tween.kill()
        );

        gsap.killTweensOf(core);

        gsap.killTweensOf(
          coreGlow
        );

        gsap.killTweensOf(nodes);

        gsap.killTweensOf(
          vehicles
        );

        gsap.killTweensOf(routes);
      };
    });

    /* =========================================================
       MOBILE
    ========================================================= */

    mm.add("(max-width: 767px)", () => {
      const titleWords =
        Array.from(
          section.querySelectorAll<HTMLElement>(
            ".fleet-title-word"
          )
        );

      const eyebrow =
        section.querySelector<HTMLElement>(
          ".fleet-eyebrow"
        );

      const mapWrapper =
        section.querySelector<HTMLElement>(
          ".fleet-map-wrapper"
        );

      const routes =
        Array.from(
          section.querySelectorAll<SVGPathElement>(
            ".fleet-route-active"
          )
        );

      const nodes =
        Array.from(
          section.querySelectorAll<SVGCircleElement>(
            ".fleet-map-node"
          )
        );

      const vehicles =
        Array.from(
          section.querySelectorAll<SVGGElement>(
            ".fleet-vehicle"
          )
        );

      const capabilities =
        Array.from(
          section.querySelectorAll<HTMLElement>(
            ".fleet-capability"
          )
        );

      const scanLine =
        section.querySelector<HTMLElement>(
          ".fleet-scan-line"
        );

      /*
      ----------------------------------------------------------
      MOBILE INITIAL STATES
      ----------------------------------------------------------
      */

      gsap.set(eyebrow, {
        opacity: 0,
        y: 18,
      });

      gsap.set(titleWords, {
        opacity: 0,
        y: 28,
      });

      gsap.set(mapWrapper, {
        opacity: 0,
        scale: 0.88,
      });

      gsap.set(capabilities, {
        opacity: 0,
        y: 35,
        filter: "blur(7px)",
      });

      gsap.set(nodes, {
        scale: 0,
        opacity: 0,
        transformOrigin:
          "center center",
      });

      gsap.set(vehicles, {
        opacity: 0,
      });

      gsap.set(core, {
        scale: 0.5,
        opacity: 0,
      });

      gsap.set(coreGlow, {
        scale: 0.5,
        opacity: 0,
      });

      /*
      ----------------------------------------------------------
      MOBILE INTRO
      ----------------------------------------------------------
      */

      const intro =
        gsap.timeline({
          scrollTrigger: {
            id: "fleet-mobile-intro",

            trigger: section,

            start: "top 90%",

            end: "top 45%",

            scrub: 0.8,

            invalidateOnRefresh: true,
          },
        });

      intro
        .to(
          eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          0
        )

        .to(
          titleWords,
          {
            opacity: 1,
            y: 0,

            stagger: 0.06,

            duration: 0.4,

            ease: "power3.out",
          },
          0.05
        )

        .to(
          mapWrapper,
          {
            opacity: 1,

            scale: 1,

            duration: 0.5,

            ease: "power3.out",
          },
          0.22
        )

        .to(
          core,
          {
            opacity: 1,

            scale: 1,

            duration: 0.4,

            ease: "back.out(1.7)",
          },
          0.3
        )

        .to(
          coreGlow,
          {
            opacity: 1,

            scale: 1,

            duration: 0.4,
          },
          0.3
        )

        .to(
          nodes,
          {
            opacity: 1,

            scale: 1,

            stagger: 0.04,

            duration: 0.25,

            ease: "back.out(2)",
          },
          0.34
        );

      /*
      ----------------------------------------------------------
      MOBILE ROUTE DRAW
      ----------------------------------------------------------
      */

      routes.forEach(
        (route, index) => {
          try {
            const length =
              route.getTotalLength();

            gsap.set(route, {
              strokeDasharray:
                length,

              strokeDashoffset:
                length,
            });

            gsap.to(route, {
              strokeDashoffset: 0,

              ease: "none",

              scrollTrigger: {
                id:
                  `fleet-mobile-route-${index}`,

                trigger: mapWrapper,

                start: "top 78%",

                end: "bottom 55%",

                scrub: 0.8,

                invalidateOnRefresh: true,
              },
            });
          } catch {
            // Ignore.
          }
        }
      );

      /*
      ----------------------------------------------------------
      MOBILE NODE PULSE
      ----------------------------------------------------------
      */

      nodes.forEach(
        (node, index) => {
          gsap.to(node, {
            scale: 1.3,

            opacity: 0.45,

            duration:
              1.1 +
              index * 0.08,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut",

            delay:
              index * 0.12,
          });
        }
      );

      /*
      ----------------------------------------------------------
      MOBILE VEHICLES
      ----------------------------------------------------------
      */

      vehicles.forEach(
        (vehicle, index) => {
          gsap.to(vehicle, {
            opacity: 1,

            duration: 0.5,

            scrollTrigger: {
              trigger: mapWrapper,

              start: "top 72%",

              toggleActions:
                "play none none reverse",
            },
          });

          gsap.to(vehicle, {
            x:
              90 +
              index * 55,

            y:
              index % 2 === 0
                ? 10
                : -10,

            duration:
              2.8 +
              index * 0.4,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut",
          });
        }
      );

      /*
      ----------------------------------------------------------
      MOBILE CORE ROTATION
      ----------------------------------------------------------
      */

      gsap.to(core, {
        rotation: 360,

        duration: 12,

        repeat: -1,

        ease: "none",
      });

      /*
      ----------------------------------------------------------
      MOBILE CORE GLOW
      ----------------------------------------------------------
      */

      gsap.to(coreGlow, {
        scale: 1.18,

        opacity: 0.3,

        duration: 1.6,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });

      /*
      ----------------------------------------------------------
      MOBILE SCAN
      ----------------------------------------------------------
      */

      if (scanLine) {
        gsap.to(scanLine, {
          y: 90,

          duration: 2.2,

          repeat: -1,

          yoyo: true,

          ease: "sine.inOut",
        });
      }

      /*
      ----------------------------------------------------------
      MOBILE CAPABILITIES
      ----------------------------------------------------------
      */

      capabilities.forEach(
        (capability, index) => {
          ScrollTrigger.create({
            id:
              `fleet-mobile-capability-${index}`,

            trigger: capability,

            start: "top 88%",

            end: "top 55%",

            onEnter: () => {
              setActiveCapability(index);

              gsap.to(capability, {
                opacity: 1,

                y: 0,

                filter:
                  "blur(0px)",

                duration: 0.7,

                ease: "power3.out",
              });
            },

            onEnterBack: () => {
              setActiveCapability(index);
            },

            onLeaveBack: () => {
              gsap.to(capability, {
                opacity: 0,

                y: 35,

                filter:
                  "blur(7px)",

                duration: 0.5,

                ease: "power2.out",
              });
            },
          });
        }
      );

      /*
      ----------------------------------------------------------
      REDUCED MOTION
      ----------------------------------------------------------
      */

      const reduceMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            eyebrow,
            titleWords,
            mapWrapper,
            capabilities,
            nodes,
            vehicles,
            core,
            coreGlow,
          ],
          {
            clearProps: "all",
          }
        );

        gsap.set(routes, {
          clearProps:
            "strokeDasharray,strokeDashoffset",
        });
      }

      /*
      ----------------------------------------------------------
      MOBILE CLEANUP
      ----------------------------------------------------------
      */

      return () => {
        intro.kill();

        gsap.killTweensOf([
          eyebrow,
          titleWords,
          mapWrapper,
          capabilities,
          nodes,
          vehicles,
          core,
          coreGlow,
          routes,
          scanLine,
        ]);
      };
    });
  }, section);

  return ctx;
}