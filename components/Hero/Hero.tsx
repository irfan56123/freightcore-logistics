"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroScene from "./HeroScene";
import WebGLFallback from "./WebGLFallback";
import ArrowLink from "../ui/ArrowLink";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const stats = [
  {
    value: "2.4M+",
    label: "Miles Managed",
  },
  {
    value: "98.7%",
    label: "On-Time Delivery",
  },
  {
    value: "24/7",
    label: "Fleet Visibility",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const sceneX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const sceneY = useTransform(smoothY, [-1, 1], [-10, 10]);

  useEffect(() => {
    setLoaded(true);

    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const hero = heroRef.current;

      if (!hero) {
        return;
      }

      const rect = hero.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;

      const y =
        ((event.clientY - rect.top) / rect.height) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="
        freight-hero
        relative
        min-h-[100svh]
        overflow-hidden
        bg-background
        text-primary-text
        md:min-h-screen
      "
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="freight-grid absolute inset-0 opacity-[0.045]" />

        {/* Main orange glow */}
        <div
          className="
            absolute
            left-[45%]
            top-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-accent/10
            blur-[150px]
            max-md:left-[25%]
            max-md:top-[15%]
            max-md:h-[330px]
            max-md:w-[330px]
            max-md:bg-accent/[0.075]
            max-md:blur-[100px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            right-[-200px]
            bottom-[-200px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-accent/5
            blur-[130px]
            max-md:right-[-180px]
            max-md:bottom-[-180px]
            max-md:h-[380px]
            max-md:w-[380px]
          "
        />

        {/* Mobile subtle ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-[-120px]
            top-[40%]
            hidden
            h-[240px]
            w-[240px]
            rounded-full
            bg-accent/[0.035]
            blur-[90px]
            max-md:block
          "
        />
      </div>

      {/* =====================================================
          DECORATIVE TOP LINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-[92px]
          z-10
          h-px
          bg-white/[0.06]
          max-md:top-[72px]
        "
      />

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1600px]
          flex-col
          justify-center
          px-6
          pb-32
          pt-28
          md:min-h-screen
          md:px-10
          lg:px-14

          max-md:justify-start
          max-md:pt-[99px]
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-30
            max-w-[900px]
            max-md:flex
            max-md:flex-col
          "
        >
          {/* Mobile decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-10
              top-[55px]
              hidden
              h-[180px]
              w-[280px]
              rounded-full
              bg-accent/[0.035]
              blur-[65px]
              max-md:block
            "
          />

          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              mb-7
              flex
              items-center
              gap-3
              max-md:mb-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-accent
                max-md:w-5
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-muted
                max-md:text-[7px]
                max-md:tracking-[0.28em]
              "
            >
              FREIGHT • FLEET • INTELLIGENCE
            </span>
          </motion.div>

          {/* =================================================
              HEADLINE
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              hero-heading
              relative
              font-editorial
              text-[17vw]
              font-black
              uppercase
              leading-[0.76]
              tracking-[-0.075em]
              sm:text-[13vw]
              lg:text-[9.7rem]

              max-md:text-[16.2vw]
              max-md:leading-[0.79]
              max-md:tracking-[-0.07em]
            "
          >
            Moving
            <br />

            <span className="relative text-accent">
              What

              <span
                className="
                  absolute
                  -right-3
                  top-[8%]
                  h-3
                  w-3
                  rounded-full
                  bg-accent
                  shadow-[0_0_25px_rgba(255,107,44,0.8)]
                  max-md:-right-1
                  max-md:top-[2%]
                  max-md:h-1.5
                  max-md:w-1.5
                "
              />
            </span>

            <br />

            Matters.
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="
              hero-desc
              mt-8
              max-w-[500px]
              text-sm
              leading-7
              text-muted
              max-md:mt-5
              max-md:max-w-[310px]
              max-md:text-[10px]
              max-md:leading-[1.65]
              md:text-base
            "
          >
            End-to-end freight and fleet infrastructure built
            for businesses that demand reliability,
            visibility and scale.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="
              hero-cta
              mt-8
              flex
              flex-wrap
              gap-3
              max-md:mt-5
              max-md:w-full
              max-md:flex-col
              max-md:gap-2
            "
          >
            <ArrowLink
              href="#network"
              text="EXPLORE SOLUTIONS"
            />

            <a
              href="#fleet"
              className="
                group
                flex
                items-center
                gap-3
                border
                border-border
                bg-secondary/40
                px-7
                py-4
                font-mono
                text-[10px]
                font-bold
                tracking-[0.2em]
                text-primary-text
                transition-all
                duration-300
                hover:border-accent
                hover:bg-accent
                hover:text-white
                max-md:w-full
                max-md:justify-center
                max-md:px-5
                max-md:py-3
                max-md:text-[8px]
                max-md:tracking-[0.18em]
              "
            >
              VIEW OUR FLEET

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </motion.div>

          {/* =================================================
              MOBILE NETWORK ACTIVITY
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
            className="
              relative
              mt-8
              hidden
              max-md:block
            "
          >
            <div
              className="
                relative
                overflow-hidden
                border
                border-white/[0.07]
                bg-white/[0.018]
                px-3
                py-3
              "
            >
              {/* Top status */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-accent
                      shadow-[0_0_10px_rgba(255,107,44,0.8)]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[6px]
                      uppercase
                      tracking-[0.28em]
                      text-white/45
                    "
                  >
                    NETWORK STATUS
                  </span>
                </div>

                <span
                  className="
                    font-mono
                    text-[6px]
                    uppercase
                    tracking-[0.2em]
                    text-accent
                  "
                >
                  LIVE
                </span>
              </div>

              {/* Route visualization */}
              <div className="relative h-[24px]">
                {/* Base route */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-1/2
                    h-px
                    -translate-y-1/2
                    bg-white/[0.08]
                  "
                />

                {/* Active route */}
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={
                    loaded
                      ? {
                          width: [
                            "18%",
                            "72%",
                            "45%",
                            "88%",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-0
                    top-1/2
                    h-px
                    -translate-y-1/2
                    bg-accent
                    shadow-[0_0_8px_rgba(255,107,44,0.7)]
                  "
                />

                {/* Node 1 */}
                <span
                  className="
                    absolute
                    left-[12%]
                    top-1/2
                    h-1.5
                    w-1.5
                    -translate-y-1/2
                    rounded-full
                    bg-accent
                    shadow-[0_0_8px_rgba(255,107,44,0.7)]
                  "
                />

                {/* Node 2 */}
                <span
                  className="
                    absolute
                    left-[42%]
                    top-1/2
                    h-1
                    w-1
                    -translate-y-1/2
                    rounded-full
                    bg-white/40
                  "
                />

                {/* Node 3 */}
                <span
                  className="
                    absolute
                    left-[68%]
                    top-1/2
                    h-1.5
                    w-1.5
                    -translate-y-1/2
                    rounded-full
                    bg-accent
                  "
                />

                {/* Node 4 */}
                <span
                  className="
                    absolute
                    right-[4%]
                    top-1/2
                    h-1
                    w-1
                    -translate-y-1/2
                    rounded-full
                    bg-white/30
                  "
                />
              </div>

              {/* Bottom metrics */}
              <div
                className="
                  mt-3
                  grid
                  grid-cols-2
                  border-t
                  border-white/[0.06]
                  pt-3
                "
              >
                <div>
                  <div
                    className="
                      font-mono
                      text-[10px]
                      font-bold
                      tracking-tight
                      text-white/80
                    "
                  >
                    42
                  </div>

                  <div
                    className="
                      mt-1
                      font-mono
                      text-[5px]
                      uppercase
                      tracking-[0.2em]
                      text-white/25
                    "
                  >
                    Countries Connected
                  </div>
                </div>

                <div
                  className="
                    border-l
                    border-white/[0.06]
                    pl-4
                  "
                >
                  <div
                    className="
                      font-mono
                      text-[10px]
                      font-bold
                      tracking-tight
                      text-white/80
                    "
                  >
                    18.6K
                  </div>

                  <div
                    className="
                      mt-1
                      font-mono
                      text-[5px]
                      uppercase
                      tracking-[0.2em]
                      text-white/25
                    "
                  >
                    Active Fleet Units
                  </div>
                </div>
              </div>

              {/* Scanning line */}
              <motion.div
                animate={{
                  x: ["-100%", "400%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-1/4
                  bg-accent/70
                  blur-[1px]
                "
              />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            3D TRUCK / WEBGL
            Hidden on mobile
        ====================================================== */}

        <motion.div
          style={{
            x: sceneX,
            y: sceneY,
          }}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={
            loaded
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1.3,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            pointer-events-none
            absolute
            hidden
            right-[-12%]
            top-[17%]
            z-10
            h-[60vh]
            w-[68vw]
            md:block
            lg:right-[-8%]
            lg:h-[70vh]
            lg:w-[64vw]
          "
        >
          <React.Suspense fallback={<WebGLFallback />}>
            <HeroScene />
          </React.Suspense>
        </motion.div>

        {/* =====================================================
            LIVE TELEMETRY
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={
            loaded
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="
            absolute
            right-6
            top-[43%]
            z-40
            hidden
            w-[225px]
            border
            border-border
            bg-background/70
            p-5
            backdrop-blur-xl
            lg:block
            lg:right-6
          "
        >
          <div className="mb-5 flex items-center justify-between">
            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-muted
              "
            >
              LIVE TELEMETRY
            </span>

            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-accent
                shadow-[0_0_12px_rgba(255,107,44,0.8)]
              "
            />
          </div>

          {/* Fleet */}

          <div className="mb-5">
            <div className="mb-2 flex justify-between font-mono text-[8px] uppercase">
              <span className="text-muted">
                Fleet Status
              </span>

              <span className="text-accent">
                ONLINE
              </span>
            </div>

            <div className="h-[2px] bg-white/10">
              <div className="h-full w-[88%] bg-accent" />
            </div>
          </div>

          {/* Network */}

          <div className="mb-6">
            <div className="mb-2 flex justify-between font-mono text-[8px] uppercase">
              <span className="text-muted">
                Network Load
              </span>

              <span className="text-white/60">
                64%
              </span>
            </div>

            <div className="h-[2px] bg-white/10">
              <div className="h-full w-[64%] bg-white/50" />
            </div>
          </div>

          {/* Numbers */}

          <div className="grid grid-cols-2 gap-5 border-t border-border pt-5">
            <div>
              <div className="text-2xl font-bold">
                18.6K
              </div>

              <div
                className="
                  mt-1
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-widest
                  text-muted
                "
              >
                Active Units
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold">
                42
              </div>

              <div
                className="
                  mt-1
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-widest
                  text-muted
                "
              >
                Routes
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            LIVE ROUTE LABEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            loaded
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 1.1,
          }}
          className="
            absolute
            bottom-[190px]
            right-[35%]
            z-30
            hidden
            font-mono
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-muted
            lg:block
          "
        >
          <span
            className="
              mr-2
              inline-block
              h-1.5
              w-1.5
              rounded-full
              bg-accent
            "
          />

          ROUTE 04 — ACTIVE
        </motion.div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div
          className="
            hero-meta
            absolute
            bottom-10
            left-6
            right-6
            z-40
            md:left-10
            md:right-10
            lg:left-14
            lg:right-14

            max-md:bottom-4
            max-md:left-4
            max-md:right-4
          "
        >
          <div
            className="
              grid
              grid-cols-1
              border-t
              border-border
              sm:grid-cols-3
              max-md:bg-white/[0.012]
            "
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  loaded
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  delay: 0.8 + index * 0.12,
                  duration: 0.7,
                }}
                className="
                  group
                  relative
                  border-b
                  border-border
                  py-3.5
                  sm:border-b-0
                  sm:border-r
                  sm:px-7
                  sm:py-4
                  first:sm:pl-0
                  last:sm:border-r-0

                  max-md:px-2
                  max-md:py-3
                "
              >
                {/* Mobile active indicator */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    hidden
                    w-[2px]
                    bg-accent
                    max-md:block
                    max-md:opacity-40
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    sm:items-end
                    max-md:pl-2
                  "
                >
                  <span
                    className="
                      text-2xl
                      font-black
                      tracking-tight
                      sm:text-3xl
                      md:text-4xl
                      max-md:text-[17px]
                    "
                  >
                    {stat.value}
                  </span>

                  <span
                    className="
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.16em]
                      text-muted
                      transition-colors
                      duration-300
                      group-hover:text-accent
                      sm:mb-1
                      sm:text-[8px]
                      sm:tracking-[0.18em]

                      max-md:mb-0.5
                      max-md:text-[5px]
                      max-md:tracking-[0.18em]
                    "
                  >
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-12
            right-6
            z-40
            hidden
            items-center
            gap-4
            lg:flex
          "
        >
          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-muted
            "
          >
            Scroll to explore
          </span>

          <div
            className="
              relative
              h-12
              w-px
              overflow-hidden
              bg-white/10
            "
          >
            <motion.div
              animate={{
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-1/2
                w-full
                bg-accent
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}