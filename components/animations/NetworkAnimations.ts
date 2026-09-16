"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type NetworkAnimationArgs = {
  section: HTMLElement;
  viewport: HTMLElement;
  track: HTMLElement;
  route?: SVGPathElement | null;
  progress?: HTMLElement | null;
  journey?: HTMLElement | null;
};

export const animateNetwork = ({
  section,
  viewport,
  track,
  route,
  progress,
  journey,
}: NetworkAnimationArgs) => {
  const ctx = gsap.context(() => {
    const panels = Array.from(
      track.querySelectorAll<HTMLElement>(".network-panel"),
    );

    if (!panels.length) return;

    const mm = gsap.matchMedia();

    /* =========================================================
       MOBILE
       ========================================================= */

   mm.add("(max-width: 767px)", () => {
  const intro =
    section.querySelector<HTMLElement>(
      ".network-intro",
    );

  const radarRings =
    section.querySelectorAll<HTMLElement>(
      ".network-radar-ring",
    );

  const centerNodes =
    section.querySelectorAll<HTMLElement>(
      ".network-center-node",
    );

  const liveDots =
    section.querySelectorAll<HTMLElement>(
      ".network-live-dot",
    );

  const dataPoints =
    section.querySelectorAll<HTMLElement>(
      ".network-data-point",
    );

  const packets =
    section.querySelectorAll<HTMLElement>(
      ".network-data-packet",
    );

  const panelProgressBars =
    section.querySelectorAll<HTMLElement>(
      ".network-panel-progress",
    );

  /* =========================================================
     MOBILE RESET
  ========================================================= */

  gsap.set(track, {
    position: "relative",
    left: "auto",
    right: "auto",
    top: "auto",
    bottom: "auto",

    display: "flex",
    flexDirection: "column",

    width: "100%",
    minWidth: 0,

    height: "auto",
    minHeight: 0,

    x: 0,
    y: 0,

    rotation: 0,
    scale: 1,

    clearProps: "transform",
  });

  gsap.set(panels, {
    position: "relative",

    width: "calc(100% - 32px)",
    minWidth: 0,
    maxWidth: "none",

    height: "420px",
    minHeight: "420px",

    marginLeft: "16px",
    marginRight: "16px",
    marginBottom: 0,

    x: 0,
    y: 0,

    rotation: 0,
    scale: 1,

    opacity: 1,

    filter: "none",

    clearProps:
      "right,bottom,transform",
  });

  /* =========================================================
     REMOVE DESKTOP OPENING SPACE
  ========================================================= */

  const openingSpace =
    track.querySelector<HTMLElement>(
      ":scope > div:first-child",
    );

  if (openingSpace) {
    gsap.set(openingSpace, {
      display: "none",
    });
  }

  /* =========================================================
     HEADER — CINEMATIC REVEAL
  ========================================================= */

  if (intro) {
    gsap.set(intro, {
      opacity: 0,
      y: 35,
    });

    gsap.to(intro, {
      opacity: 1,
      y: 0,

      duration: 0.9,

      ease: "power3.out",

      scrollTrigger: {
        trigger: section,

        start: "top 88%",

        once: true,
      },
    });
  }

  /* =========================================================
     BACKGROUND ROUTE
  ========================================================= */

  if (route) {
    let routeLength = 0;

    try {
      routeLength =
        route.getTotalLength();
    } catch {
      routeLength = 0;
    }

    if (routeLength > 0) {
      gsap.set(route, {
        strokeDasharray: routeLength,
        strokeDashoffset: routeLength,
      });

      gsap.to(route, {
        strokeDashoffset: 0,

        duration: 2.2,

        ease: "power2.out",

        scrollTrigger: {
          trigger: section,

          start: "top 80%",

          once: true,
        },
      });
    }
  }

  /* =========================================================
     MOBILE PANELS
     
     Each card gets its OWN animation.
  ========================================================= */

  panels.forEach((panel, index) => {
    const radar =
      panel.querySelector<HTMLElement>(
        ".network-radar-ring",
      );

    const center =
      panel.querySelector<HTMLElement>(
        ".network-center-node",
      );

    const dot =
      panel.querySelector<HTMLElement>(
        ".network-live-dot",
      );

    const number =
      panel.querySelector<HTMLElement>(
        ".network-panel-number",
      );

    const title =
      panel.querySelector<HTMLElement>(
        "h3",
      );

    const metric =
      panel.querySelector<HTMLElement>(
        "p",
      );

    const description =
      panel.querySelector<HTMLElement>(
        "p.mt-5",
      );

    const bar =
      panel.querySelector<HTMLElement>(
        ".network-panel-progress",
      );

    const arrow =
      panel.querySelector<SVGElement>(
        ":scope > svg",
      );

    /* ---------------------------------------------------------
       INITIAL CARD STATE
    --------------------------------------------------------- */

    gsap.set(panel, {
      opacity: 0,
      y: 70,
      scale: 0.94,
      filter: "blur(5px)",
    });

    if (title) {
      gsap.set(title, {
        opacity: 0,
        y: 25,
      });
    }

    if (metric) {
      gsap.set(metric, {
        opacity: 0,
        y: 15,
      });
    }

    if (description) {
      gsap.set(description, {
        opacity: 0,
        y: 18,
      });
    }

    if (number) {
      gsap.set(number, {
        opacity: 0,
        x: -10,
      });
    }

    if (arrow) {
      gsap.set(arrow, {
        opacity: 0,
        scale: 0.7,
        rotation: -20,
      });
    }

    if (bar) {
      gsap.set(bar, {
        scaleX: 0,
        transformOrigin: "left center",
      });
    }

    if (radar) {
      gsap.set(radar, {
        opacity: 0,
        scale: 0.65,
        rotation: -35,
      });
    }

    if (center) {
      gsap.set(center, {
        opacity: 0,
        scale: 0,
      });
    }

    if (dot) {
      gsap.set(dot, {
        opacity: 0,
        scale: 0,
      });
    }

    /* ---------------------------------------------------------
       CARD ENTER
    --------------------------------------------------------- */

    ScrollTrigger.create({
      id: `network-mobile-card-${index}`,

      trigger: panel,

      start: "top 88%",

      once: true,

      onEnter: () => {
        const tl =
          gsap.timeline();

        /* CARD */

        tl.to(panel, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",

          duration: 0.7,

          ease: "power3.out",
        });

        /* NUMBER */

        if (number) {
          tl.to(
            number,
            {
              opacity: 1,
              x: 0,

              duration: 0.35,

              ease: "power2.out",
            },
            "-=0.45",
          );
        }

        /* METRIC */

        if (metric) {
          tl.to(
            metric,
            {
              opacity: 1,
              y: 0,

              duration: 0.35,

              ease: "power2.out",
            },
            "-=0.25",
          );
        }

        /* TITLE */

        if (title) {
          tl.to(
            title,
            {
              opacity: 1,
              y: 0,

              duration: 0.55,

              ease: "power3.out",
            },
            "-=0.25",
          );
        }

        /* DESCRIPTION */

        if (description) {
          tl.to(
            description,
            {
              opacity: 1,
              y: 0,

              duration: 0.45,

              ease: "power2.out",
            },
            "-=0.3",
          );
        }

        /* ARROW */

        if (arrow) {
          tl.to(
            arrow,
            {
              opacity: 1,
              scale: 1,
              rotation: 0,

              duration: 0.4,

              ease: "back.out(1.7)",
            },
            "-=0.35",
          );
        }

        /* RADAR */

        if (radar) {
          tl.to(
            radar,
            {
              opacity: 1,
              scale: 1,
              rotation: 0,

              duration: 0.8,

              ease: "power3.out",
            },
            "-=0.5",
          );
        }

        /* CENTER */

        if (center) {
          tl.to(
            center,
            {
              opacity: 1,
              scale: 1,

              duration: 0.4,

              ease: "back.out(2)",
            },
            "-=0.45",
          );
        }

        /* LIVE DOT */

        if (dot) {
          tl.to(
            dot,
            {
              opacity: 1,
              scale: 1,

              duration: 0.3,

              ease: "back.out(2)",
            },
            "-=0.3",
          );
        }

        /* ORANGE LINE */

        if (bar) {
          tl.to(
            bar,
            {
              scaleX: 1,

              duration: 0.7,

              ease: "power2.out",
            },
            "-=0.2",
          );
        }
      },
    });

    /* =======================================================
       RADAR CONTINUOUS ROTATION
    ======================================================= */

    if (radar) {
      gsap.to(radar, {
        rotation: 360,

        duration:
          18 + index * 3,

        repeat: -1,

        ease: "none",
      });
    }

    /* =======================================================
       CENTER NODE PULSE
    ======================================================= */

    if (center) {
      gsap.to(center, {
        scale: 1.5,
        opacity: 0.45,

        duration: 1.1,

        repeat: -1,
        yoyo: true,

        ease: "sine.inOut",

        delay:
          0.8 + index * 0.15,
      });
    }

    /* =======================================================
       LIVE DOT PULSE
    ======================================================= */

    if (dot) {
      gsap.to(dot, {
        scale: 1.7,
        opacity: 0.35,

        duration: 0.8,

        repeat: -1,
        yoyo: true,

        ease: "sine.inOut",

        delay:
          index * 0.15,
      });
    }

    /* =======================================================
       CARD PARALLAX
    ======================================================= */

    gsap.to(panel, {
      y: -8,

      ease: "none",

      scrollTrigger: {
        trigger: panel,

        start: "top bottom",

        end: "bottom top",

        scrub: 1,
      },
    });
  });

  /* =========================================================
     FLOATING DATA POINTS
  ========================================================= */

  dataPoints.forEach(
    (point, index) => {
      gsap.to(point, {
        x:
          index % 2 === 0
            ? 10
            : -10,

        y:
          index % 2 === 0
            ? -8
            : 8,

        opacity: 0.35,

        duration:
          1.5 + index * 0.15,

        repeat: -1,
        yoyo: true,

        ease: "sine.inOut",

        delay:
          index * 0.12,
      });
    },
  );

  /* =========================================================
     DATA PACKETS
  ========================================================= */

  packets.forEach(
    (packet, index) => {
      gsap.fromTo(
        packet,

        {
          x: -30,
          opacity: 0,
        },

        {
          x: 35,
          opacity: 1,

          duration:
            1.4 + index * 0.2,

          repeat: -1,

          repeatDelay: 0.35,

          ease: "power1.inOut",

          delay:
            index * 0.25,
        },
      );
    },
  );

  /* =========================================================
     GLOBAL JOURNEY
  ========================================================= */

  if (journey) {
    ScrollTrigger.create({
      trigger: section,

      start: "top 80%",

      end: "bottom 70%",

      scrub: 0.8,

      onUpdate: (self) => {
        journey.textContent =
          `${Math.round(
            self.progress * 100,
          )
            .toString()
            .padStart(2, "0")}%`;
      },
    });
  }

  /* =========================================================
     GLOBAL PROGRESS
  ========================================================= */

  if (progress) {
    gsap.set(progress, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.to(progress, {
      scaleX: 1,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top 80%",

        end: "bottom 70%",

        scrub: 0.8,
      },
    });
  }

  /* =========================================================
     CLEANUP
  ========================================================= */

  return () => {
    gsap.killTweensOf([
      panels,
      radarRings,
      centerNodes,
      liveDots,
      dataPoints,
      packets,
      route,
      progress,
      journey,
    ]);
  };
});

    /* =========================================================
       DESKTOP
       ========================================================= */

    mm.add("(min-width: 768px)", () => {
      const getDistance = () => {
        return Math.max(
          0,
          track.scrollWidth -
            viewport.clientWidth,
        );
      };

      /* ---------------------------------------------------------
         INITIAL
         --------------------------------------------------------- */

      gsap.set(track, {
        x: 0,
        force3D: true,
      });

      gsap.set(panels, {
        opacity: 0.3,
        scale: 0.94,
        y: 30,
        filter: "blur(2px)",
        transformOrigin: "center center",
        force3D: true,
      });

      gsap.set(panels[0], {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      });

      /* ---------------------------------------------------------
         ROUTE
         --------------------------------------------------------- */

      let routeLength = 0;

      if (route) {
        try {
          routeLength =
            route.getTotalLength();

          gsap.set(route, {
            strokeDasharray:
              routeLength,
            strokeDashoffset:
              routeLength,
          });
        } catch {
          routeLength = 0;
        }
      }

      /* ---------------------------------------------------------
         PANEL PROGRESS POSITION
         --------------------------------------------------------- */

      const getPanelProgress = (
        index: number,
      ) => {
        const panel = panels[index];

        if (!panel) return 0;

        const distance =
          getDistance();

        if (distance <= 0) return 0;

        const panelCenter =
          panel.offsetLeft +
          panel.offsetWidth / 2;

        const viewportCenter =
          viewport.clientWidth / 2;

        const target =
          panelCenter -
          viewportCenter;

        return gsap.utils.clamp(
          0,
          1,
          target / distance,
        );
      };

      /* ---------------------------------------------------------
         MAIN PIN
         --------------------------------------------------------- */

      const mainTrigger =
        ScrollTrigger.create({
          id: "network-main",
          trigger: section,
          start: "top top",

          end: () => {
            const distance =
              getDistance();

            return `+=${Math.max(
              distance * 1.15,
              window.innerHeight * 2.5,
            )}`;
          },

          pin: viewport,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const p =
              self.progress;

            const distance =
              getDistance();

            /* HORIZONTAL */

            gsap.set(track, {
              x: -distance * p,
            });

            /* JOURNEY */

            if (journey) {
              journey.textContent =
                `${Math.round(
                  p * 100,
                )
                  .toString()
                  .padStart(2, "0")}%`;
            }

            /* GLOBAL PROGRESS */

            if (progress) {
              gsap.set(progress, {
                scaleX: p,
              });
            }

            /* ROUTE */

            if (
              route &&
              routeLength > 0
            ) {
              gsap.set(route, {
                strokeDashoffset:
                  routeLength *
                  (1 - p),
              });
            }

            /* PANELS */

            panels.forEach(
              (panel, index) => {
                const cardProgress =
                  getPanelProgress(
                    index,
                  );

                const difference =
                  Math.abs(
                    p -
                      cardProgress,
                  );

                const influence =
                  gsap.utils.clamp(
                    0,
                    1,
                    1 -
                      difference *
                        4,
                  );

                const opacity =
                  gsap.utils.interpolate(
                    0.3,
                    1,
                    influence,
                  );

                const scale =
                  gsap.utils.interpolate(
                    0.94,
                    1,
                    influence,
                  );

                const y =
                  gsap.utils.interpolate(
                    30,
                    0,
                    influence,
                  );

                const blur =
                  gsap.utils.interpolate(
                    2,
                    0,
                    influence,
                  );

                gsap.set(panel, {
                  opacity,
                  scale,
                  y,
                  filter:
                    `blur(${blur}px)`,
                });

                const bar =
                  panel.querySelector<HTMLElement>(
                    ".network-panel-progress",
                  );

                if (bar) {
                  const local =
                    gsap.utils.clamp(
                      0,
                      1,
                      1 -
                        difference *
                          5,
                    );

                  gsap.set(bar, {
                    scaleX: local,
                  });
                }

                const number =
                  panel.querySelector<HTMLElement>(
                    ".network-panel-number",
                  );

                if (number) {
                  gsap.set(number, {
                    color:
                      influence > 0.5
                        ? "#FF6B2C"
                        : "#8A8A8A",
                  });
                }

                const dot =
                  panel.querySelector<HTMLElement>(
                    ".network-live-dot",
                  );

                if (dot) {
                  gsap.set(dot, {
                    opacity:
                      influence > 0.5
                        ? 1
                        : 0.3,
                    scale:
                      influence > 0.5
                        ? 1.35
                        : 1,
                  });
                }

                const radar =
                  panel.querySelector<HTMLElement>(
                    ".network-radar-ring",
                  );

                if (radar) {
                  gsap.set(radar, {
                    opacity:
                      gsap.utils.interpolate(
                        0.2,
                        1,
                        influence,
                      ),
                    scale:
                      gsap.utils.interpolate(
                        0.94,
                        1,
                        influence,
                      ),
                  });
                }

                const node =
                  panel.querySelector<HTMLElement>(
                    ".network-center-node",
                  );

                if (node) {
                  gsap.set(node, {
                    opacity:
                      gsap.utils.interpolate(
                        0.25,
                        1,
                        influence,
                      ),
                  });
                }
              },
            );
          },
        });

      /* ---------------------------------------------------------
         DESKTOP INTRO
         --------------------------------------------------------- */

      const intro =
        section.querySelector<HTMLElement>(
          ".network-intro",
        );

      let introTrigger:
        | ScrollTrigger
        | undefined;

      if (intro) {
        gsap.set(intro, {
          opacity: 0,
          y: 35,
        });

        introTrigger =
          ScrollTrigger.create({
            id: "network-intro",
            trigger: section,
            start: "top 80%",
            end: "top top",
            scrub: 1,

            onUpdate: (self) => {
              gsap.set(intro, {
                opacity:
                  self.progress,
                y:
                  35 *
                  (1 -
                    self.progress),
              });
            },
          });
      }

      /* ---------------------------------------------------------
         DESKTOP AMBIENT
         --------------------------------------------------------- */

      const radarRings =
        section.querySelectorAll<HTMLElement>(
          ".network-radar-ring",
        );

      radarRings.forEach(
        (ring, index) => {
          gsap.to(ring, {
            rotation:
              index % 2 === 0
                ? 360
                : -360,
            duration:
              20 + index * 4,
            repeat: -1,
            ease: "none",
          });
        },
      );

      const nodes =
        section.querySelectorAll<HTMLElement>(
          ".network-center-node",
        );

      nodes.forEach((node) => {
        gsap.to(node, {
          scale: 1.5,
          opacity: 0.45,
          duration: 1.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      const dots =
        section.querySelectorAll<HTMLElement>(
          ".network-live-dot",
        );

      dots.forEach((dot) => {
        gsap.to(dot, {
          scale: 1.6,
          opacity: 0.3,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      const points =
        section.querySelectorAll<HTMLElement>(
          ".network-data-point",
        );

      points.forEach(
        (point, index) => {
          gsap.to(point, {
            x:
              index % 2 === 0
                ? 14
                : -14,
            y:
              index % 2 === 0
                ? -12
                : 12,
            opacity: 0.35,
            duration:
              1.5 +
              index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      );

      const packets =
        section.querySelectorAll<HTMLElement>(
          ".network-data-packet",
        );

      packets.forEach(
        (packet, index) => {
          gsap.fromTo(
            packet,
            {
              x: -35,
              opacity: 0,
            },
            {
              x: 45,
              opacity: 1,
              duration:
                1.3 +
                index * 0.15,
              repeat: -1,
              repeatDelay: 0.25,
              ease: "power1.inOut",
            },
          );
        },
      );

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener(
        "resize",
        handleResize,
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });

      return () => {
        window.removeEventListener(
          "resize",
          handleResize,
        );

        mainTrigger.kill();
        introTrigger?.kill();

        gsap.killTweensOf(
          radarRings,
        );
        gsap.killTweensOf(nodes);
        gsap.killTweensOf(dots);
        gsap.killTweensOf(points);
        gsap.killTweensOf(packets);
      };
    });

    return () => {
      mm.revert();
    };
  }, section);

  return ctx;
};