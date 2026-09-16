"use client";

import {
  Activity,
  Gauge,
  Radio,
  Satellite,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import FleetCapability from "./FleetCapability";
import { FLEET_CAPABILITIES } from "@/lib/constants";
import { animateFleet } from "../animations/FleetAnimations";

export default function FleetSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const mapRef = useRef<SVGSVGElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const coreGlowRef = useRef<HTMLDivElement>(null);

  const [activeCapability, setActiveCapability] =
    useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const map = mapRef.current;
    const core = coreRef.current;
    const coreGlow = coreGlowRef.current;

    if (
      !section ||
      !stage ||
      !map ||
      !core ||
      !coreGlow
    ) {
      return;
    }

    const ctx = animateFleet({
      section,
      stage,
      map,
      core,
      coreGlow,
      setActiveCapability,
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fleet"
      className="
        relative
        h-auto
        bg-[#080808]
        md:h-[380vh]
      "
    >
      {/* =====================================================
          FLEET STAGE
      ====================================================== */}

      <div
        ref={stageRef}
        className="
          fleet-stage
          relative
          min-h-screen
          w-full
          bg-[#080808]
          md:h-screen
          md:min-h-0
        "
      >
        {/* ===================================================
            BACKGROUND GRID
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* ===================================================
            TOP HEADER
        ==================================================== */}

        <div
          className="
            fleet-header
            relative
            z-40
            px-6
            pt-24

            md:absolute
            md:left-12
            md:right-12
            md:top-10
            md:px-0
            md:pt-0

            lg:left-16
            lg:right-16
          "
        >
          <div className="flex justify-between">
            {/* LEFT */}

            <div>
              <div
                className="
                  fleet-eyebrow
                  mb-4
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-[#FF6B2C]" />

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.3em]
                    text-[#777]
                  "
                >
                  03 / FLEET INTELLIGENCE
                </span>
              </div>

              <h2
                className="
                  max-w-3xl
                  text-[42px]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.055em]
                  text-[#F5F5F5]

                  sm:text-5xl
                  md:text-6xl
                  lg:text-[68px]
                "
              >
                <span className="fleet-title-word inline-block">
                  A FLEET
                </span>{" "}
                <span className="fleet-title-word inline-block text-[#777]">
                  THAT
                </span>{" "}
                <span className="fleet-title-word inline-block">
                  THINKS
                </span>{" "}
                <span className="fleet-title-word inline-block">
                  AHEAD.
                </span>
              </h2>
            </div>

            {/* STATUS */}

            <div
              className="
                hidden
                items-center
                gap-3
                pt-2
                md:flex
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#FF6B2C]
                  shadow-[0_0_14px_rgba(255,107,44,.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.25em]
                  text-[#666]
                "
              >
                SYSTEMS NOMINAL
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            CENTER MAP
        ==================================================== */}

        <div
          className="
            fleet-map-wrapper
            relative
            z-10
            mx-auto
            mt-12
            h-[300px]
            w-[92vw]
            max-w-[520px]

            md:absolute
            md:left-1/2
            md:top-[55%]
            md:mx-0
            md:mt-0
            md:h-[55vh]
            md:w-[54vw]
            md:-translate-x-1/2
            md:-translate-y-1/2

            lg:h-[58vh]
            lg:w-[52vw]
          "
        >
          <svg
            ref={mapRef}
            viewBox="0 0 800 520"
            className="
              h-full
              w-full
              overflow-visible
            "
            role="img"
            aria-label="Fleet intelligence network"
          >
            {/* =================================================
                BASE ROUTES
            ================================================== */}

            <path
              d="
                M70 260
                C180 90 290 120 400 260
                C510 400 620 420 730 245
              "
              fill="none"
              stroke="rgba(255,255,255,.08)"
              strokeWidth="2"
            />

            <path
              d="
                M400 40
                C300 130 320 210 400 260
                C480 310 500 390 400 480
              "
              fill="none"
              stroke="rgba(255,255,255,.07)"
              strokeWidth="1.5"
            />

            <path
              d="
                M120 430
                C230 350 300 340 400 260
                C500 180 590 175 690 100
              "
              fill="none"
              stroke="rgba(255,255,255,.05)"
              strokeWidth="1"
            />

            {/* =================================================
                ACTIVE ROUTES
            ================================================== */}

            <path
              className="fleet-route-active"
              d="
                M70 260
                C180 90 290 120 400 260
                C510 400 620 420 730 245
              "
              fill="none"
              stroke="#FF6B2C"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              className="fleet-route-active"
              d="
                M400 40
                C300 130 320 210 400 260
                C480 310 500 390 400 480
              "
              fill="none"
              stroke="#FF6B2C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              className="fleet-route-active"
              d="
                M120 430
                C230 350 300 340 400 260
                C500 180 590 175 690 100
              "
              fill="none"
              stroke="#FF6B2C"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* =================================================
                NETWORK NODES
            ================================================== */}

            <circle
              className="fleet-map-node"
              cx="70"
              cy="260"
              r="5"
              fill="#FF6B2C"
            />

            <circle
              className="fleet-map-node"
              cx="180"
              cy="100"
              r="4"
              fill="#FF6B2C"
            />

            <circle
              className="fleet-map-node"
              cx="400"
              cy="40"
              r="4"
              fill="#FF6B2C"
            />

            <circle
              className="fleet-map-node"
              cx="730"
              cy="245"
              r="5"
              fill="#FF6B2C"
            />

            <circle
              className="fleet-map-node"
              cx="400"
              cy="480"
              r="4"
              fill="#FF6B2C"
            />

            <circle
              className="fleet-map-node"
              cx="120"
              cy="430"
              r="3"
              fill="#FF6B2C"
            />

            <circle
              className="fleet-map-node"
              cx="690"
              cy="100"
              r="3"
              fill="#FF6B2C"
            />

            {/* =================================================
                VEHICLE 01
            ================================================== */}

            <g
              className="fleet-vehicle"
              transform="translate(0 0)"
            >
              <circle
                cx="0"
                cy="0"
                r="5"
                fill="#F5F5F5"
              />

              <circle
                cx="0"
                cy="0"
                r="11"
                fill="none"
                stroke="#FF6B2C"
                strokeOpacity=".35"
              />

              <circle
                cx="0"
                cy="0"
                r="17"
                fill="none"
                stroke="#FF6B2C"
                strokeOpacity=".08"
              />
            </g>

            {/* =================================================
                VEHICLE 02
            ================================================== */}

            <g
              className="fleet-vehicle"
              transform="translate(0 0)"
            >
              <circle
                cx="0"
                cy="0"
                r="4"
                fill="#FF6B2C"
              />

              <circle
                cx="0"
                cy="0"
                r="9"
                fill="none"
                stroke="#FF6B2C"
                strokeOpacity=".3"
              />
            </g>

            {/* =================================================
                VEHICLE 03
            ================================================== */}

            <g
              className="fleet-vehicle"
              transform="translate(0 0)"
            >
              <circle
                cx="0"
                cy="0"
                r="4"
                fill="#F5F5F5"
              />

              <circle
                cx="0"
                cy="0"
                r="9"
                fill="none"
                stroke="#FF6B2C"
                strokeOpacity=".25"
              />
            </g>
          </svg>

          {/* =================================================
              CORE GLOW
          ================================================== */}

          <div
            ref={coreGlowRef}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-44
              w-44
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#FF6B2C]/10
              blur-3xl
            "
          />

          {/* =================================================
              CORE
          ================================================== */}

          <div
            ref={coreRef}
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#FF6B2C]/50
              bg-[#101010]
              shadow-[0_0_55px_rgba(255,107,44,.18)]
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#FF6B2C]
              "
            >
              <Zap
                size={18}
                className="text-[#FF6B2C]"
              />
            </div>
          </div>

          {/* =================================================
              SCAN LINE
          ================================================== */}

          <div
            className="
              fleet-scan-line
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-px
              w-[80%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#FF6B2C]/40
              to-transparent
            "
          />
        </div>

        {/* ===================================================
            CAPABILITIES
        ==================================================== */}

        <div
          className="
            fleet-capabilities
            relative
            z-30
            w-full
            px-6
            pb-10

            md:absolute
            md:bottom-10
            md:left-6
            md:w-[40%]
            md:max-w-[430px]
            md:px-0
            md:pb-0

            lg:left-16
          "
        >
          {FLEET_CAPABILITIES.map(
            (capability, index) => (
              <button
                key={capability.id}
                type="button"
                onClick={() =>
                  setActiveCapability(index)
                }
                className="
                  fleet-capability-button
                  block
                  w-full
                  text-left
                "
                aria-label={`Select ${capability.title}`}
              >
                <FleetCapability
                  capability={capability}
                  active={
                    activeCapability === index
                  }
                />
              </button>
            )
          )}
        </div>

        {/* ===================================================
            DESKTOP TELEMETRY
        ==================================================== */}

        <aside
          className="
            fleet-telemetry
            absolute
            right-6
            top-[55%]
            z-30
            hidden
            w-[190px]
            -translate-y-1/2

            lg:block
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/[0.08]
              pb-3
            "
          >
            <span
              className="
                font-mono
                text-[8px]
                tracking-[0.28em]
                text-[#666]
              "
            >
              LIVE TELEMETRY
            </span>

            <Radio
              size={13}
              className="text-[#FF6B2C]"
            />
          </div>

          {/* SPEED */}

          <div className="border-b border-white/[0.08] py-4">
            <div className="mb-2 flex items-center gap-2">
              <Gauge
                size={12}
                className="text-[#FF6B2C]"
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.2em]
                  text-[#444]
                "
              >
                AVG SPEED
              </span>
            </div>

            <div
              className="
                fleet-live-value
                font-mono
                text-lg
                text-[#F5F5F5]
              "
            >
              58 KM/H
            </div>
          </div>

          {/* EFFICIENCY */}

          <div className="border-b border-white/[0.08] py-4">
            <div className="mb-2 flex items-center gap-2">
              <Activity
                size={12}
                className="text-[#FF6B2C]"
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.2em]
                  text-[#444]
                "
              >
                EFFICIENCY
              </span>
            </div>

            <div
              className="
                fleet-live-value
                font-mono
                text-lg
                text-[#F5F5F5]
              "
            >
              91.2%
            </div>
          </div>

          {/* UPTIME */}

          <div className="border-b border-white/[0.08] py-4">
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck
                size={12}
                className="text-[#FF6B2C]"
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.2em]
                  text-[#444]
                "
              >
                UPTIME
              </span>
            </div>

            <div
              className="
                fleet-live-value
                font-mono
                text-lg
                text-[#F5F5F5]
              "
            >
              98.1%
            </div>
          </div>

          {/* SATELLITE */}

          <div className="pt-4">
            <div className="flex items-center gap-2">
              <Satellite
                size={12}
                className="text-[#FF6B2C]"
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.18em]
                  text-[#444]
                "
              >
                SATELLITE LINK ACTIVE
              </span>
            </div>
          </div>
        </aside>

        {/* ===================================================
            MOBILE TELEMETRY
        ==================================================== */}

        <div
          className="
            relative
            z-30
            flex
            items-center
            justify-end
            gap-2
            px-6
            pb-8
            lg:hidden
          "
        >
          <Truck
            size={12}
            className="text-[#FF6B2C]"
          />

          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.2em]
              text-[#555]
            "
          >
            18.6K UNITS ONLINE
          </span>
        </div>

        {/* ===================================================
            DESKTOP BOTTOM LABEL
        ==================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-6
            z-30
            hidden
            md:block
            md:left-12
            lg:left-16
          "
        >
          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.28em]
              text-[#444]
            "
          >
            FRC / COMMAND CENTER
          </span>
        </div>
      </div>
    </section>
  );
}