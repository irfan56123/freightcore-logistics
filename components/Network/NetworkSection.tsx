"use client";

import { useLayoutEffect, useRef } from "react";
import NetworkPanel from "./NetworkPanel";
import { NETWORK_PANELS } from "@/lib/constants";
import { animateNetwork } from "../animations/NetworkAnimations";

export default function NetworkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const viewportRef =
    useRef<HTMLDivElement>(null);

  const trackRef =
    useRef<HTMLDivElement>(null);

  const routeRef =
    useRef<SVGPathElement>(null);

  const progressRef =
    useRef<HTMLDivElement>(null);

  const journeyRef =
    useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    const viewport =
      viewportRef.current;

    const track =
      trackRef.current;

    if (
      !section ||
      !viewport ||
      !track
    ) {
      return;
    }

    const ctx =
      animateNetwork({
        section,
        viewport,
        track,
        route:
          routeRef.current,
        progress:
          progressRef.current,
        journey:
          journeyRef.current,
      });

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="network"
      className="
        relative
        bg-[#080808]
      "
    >
      {/* =====================================================
          NETWORK VIEWPORT
      ====================================================== */}

      <div
        ref={viewportRef}
        className="
          network-viewport
          relative
          h-screen
          w-full
          overflow-hidden
          bg-[#080808]
        "
      >
        {/* ===================================================
            SUBTLE BACKGROUND GRID
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize:
              "60px 60px",
          }}
        />

        {/* ===================================================
            LEFT VERTICAL GUIDE
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-6
            top-0
            z-20
            w-px
            bg-white/[0.08]
            md:left-12
            lg:left-16
          "
        />

        {/* ===================================================
            TOP SECTION HEADER
        ==================================================== */}

        <header
          className="
            network-intro
            absolute
            left-0
            right-0
            top-0
            z-40
            px-6
            pt-7
            md:px-12
            md:pt-10
            lg:px-16
            lg:pt-12
          "
        >
          <div
            className="
              flex
              items-start
              justify-between
            "
          >
            {/* LEFT */}

            <div className="max-w-3xl">
              {/* Eyebrow */}

              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-[#FF6B2C]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.32em]
                    text-[#777]
                    md:text-[10px]
                  "
                >
                  02 / GLOBAL NETWORK
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  max-w-[760px]
                  text-[42px]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.055em]
                  text-[#F5F5F5]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[64px]
                  xl:text-[68px]
                "
              >
                INFRASTRUCTURE
                <br />
                <span className="text-[#777]">
                  WITHOUT BORDERS.
                </span>
              </h2>
            </div>

            {/* RIGHT DESCRIPTION */}

            <div
              className="
                hidden
                max-w-[280px]
                pt-12
                text-right
                md:block
                lg:pt-14
              "
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#777]
                "
              >
                A connected freight network engineered
                for real-time movement, visibility and
                precision.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-end
                  gap-2
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#FF6B2C]
                    shadow-[0_0_10px_rgba(255,107,44,.7)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    tracking-[0.25em]
                    text-[#555]
                  "
                >
                  NETWORK ONLINE
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ===================================================
            HORIZONTAL ROUTE BACKGROUND
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-[63%]
            z-0
            h-32
            w-full
            -translate-y-1/2
            opacity-70
          "
        >
          <svg
            viewBox="0 0 3000 180"
            preserveAspectRatio="none"
            className="
              h-full
              w-[3000px]
            "
            aria-hidden="true"
          >
            {/* Base */}

            <path
              d="
                M0 90
                C180 35 340 145 570 75
                C800 5 1000 155 1240 82
                C1490 10 1660 150 1900 72
                C2140 0 2310 145 2530 70
                C2700 25 2850 70 3000 48
              "
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />

            {/* Orange */}

            <path
              ref={routeRef}
              d="
                M0 90
                C180 35 340 145 570 75
                C800 5 1000 155 1240 82
                C1490 10 1660 150 1900 72
                C2140 0 2310 145 2530 70
                C2700 25 2850 70 3000 48
              "
              fill="none"
              stroke="#FF6B2C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Small route nodes */}

            <circle
              cx="570"
              cy="75"
              r="2.5"
              fill="#FF6B2C"
            />

            <circle
              cx="1240"
              cy="82"
              r="2.5"
              fill="#FF6B2C"
            />

            <circle
              cx="1900"
              cy="72"
              r="2.5"
              fill="#FF6B2C"
            />

            <circle
              cx="2530"
              cy="70"
              r="2.5"
              fill="#FF6B2C"
            />
          </svg>
        </div>

        {/* ===================================================
            HORIZONTAL CARD TRACK
        ==================================================== */}

        <div
          ref={trackRef}
          className="
            network-track
            absolute
            left-0
            top-[63%]
            z-10
            flex
            h-[55vh]
            w-max
            -translate-y-1/2
            items-stretch
            gap-5
            pl-16
            pr-[14vw]
            md:gap-7
            md:pl-24
            md:pr-[16vw]
            lg:pl-32
            lg:pr-[14vw]
          "
          style={{
            willChange:
              "transform",
          }}
        >
          {/* Opening space */}

          <div
            className="
              hidden
              w-[5vw]
              shrink-0
              lg:block
            "
          />

          {/* =================================================
              CARDS
          ================================================== */}

          {NETWORK_PANELS.map(
            (panel) => (
              <NetworkPanel
                key={panel.id}
                panel={panel}
              />
            )
          )}

          {/* =================================================
              FINAL STATEMENT
          ================================================== */}

          <div
            className="
              flex
              h-full
              w-[68vw]
              shrink-0
              items-center
              justify-center
              md:w-[50vw]
              lg:w-[40vw]
            "
          >
            <div className="max-w-xl">
              <span
                className="
                  mb-5
                  block
                  font-mono
                  text-[9px]
                  tracking-[0.3em]
                  text-[#FF6B2C]
                "
              >
                NETWORK COMPLETE
              </span>

              <h3
                className="
                  text-4xl
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.055em]
                  text-[#F5F5F5]
                  md:text-6xl
                "
              >
                EVERY ROUTE
                <br />

                <span className="text-[#777]">
                  IS INTELLIGENT.
                </span>
              </h3>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-sm
                  leading-7
                  text-[#777]
                "
              >
                FreightCore connects physical
                infrastructure with live operational
                intelligence to keep global commerce
                moving.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM HUD
        ==================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-50
            border-t
            border-white/[0.08]
            bg-[#080808]/95
            px-6
            py-3
            backdrop-blur-md
            md:px-12
            md:py-4
            lg:px-16
          "
        >
          <div
            className="
              flex
              items-center
            "
          >
            {/* Journey */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
              "
            >
              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.25em]
                  text-[#555]
                "
              >
                JOURNEY
              </span>

              <span
                ref={journeyRef}
                className="
                  font-mono
                  text-[11px]
                  text-[#F5F5F5]
                "
              >
                00%
              </span>
            </div>

            {/* Progress */}

            <div
              className="
                mx-5
                h-px
                flex-1
                overflow-hidden
                bg-white/[0.08]
                md:mx-8
              "
            >
              <div
                ref={progressRef}
                className="
                  h-full
                  origin-left
                  bg-[#FF6B2C]
                "
                style={{
                  transform:
                    "scaleX(0)",
                }}
              />
            </div>

            {/* Live */}

            <div
              className="
                hidden
                shrink-0
                items-center
                gap-2
                sm:flex
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#FF6B2C]
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.22em]
                  text-[#555]
                "
              >
                LIVE TELEMETRY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}