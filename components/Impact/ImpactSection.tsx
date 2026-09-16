"use client";

import { useLayoutEffect, useRef } from "react";

import {
  ArrowUpRight,
  Globe2,
  Radio,
  Timer,
  Truck,
} from "lucide-react";

import AnimatedCounter from "./AnimatedCounter";
import { IMPACT_METRICS } from "@/lib/constants";
import { animateImpact } from "../animations/ImpactAnimations";

export default function ImpactSection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const ctx =
      animateImpact({
        section,
      });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="
        relative
        min-h-screen
        bg-[#080808]
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-[#080808]
          px-6
          py-24
          md:px-12
          md:py-28
          lg:px-16
          lg:py-32
        "
      >
        {/* ===================================================
            SUBTLE GRID
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
            LEFT GUIDE
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-6
            top-0
            w-px
            bg-white/[0.07]
            md:left-12
            lg:left-16
          "
        />

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1600px]
          "
        >
          <div
            className="
              flex
              flex-col
              justify-between
              gap-10
              lg:flex-row
            "
          >
            {/* LEFT */}

            <div>
              {/* Eyebrow */}

              <div
                className="
                  impact-eyebrow
                  mb-5
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
                  04 / IMPACT
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  impact-heading
                  text-[46px]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-[#F5F5F5]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[82px]
                "
              >
                BUILT FOR
                <br />

                <span className="text-[#777]">
                  SCALE.
                </span>
              </h2>
            </div>

            {/* RIGHT */}

            <div
              className="
                impact-description
                max-w-md
                lg:pt-14
                lg:text-right
              "
            >
              <p
                className="
                  text-sm
                  leading-7
                  text-[#777]
                  md:text-base
                "
              >
                Measurable infrastructure connecting
                people, freight and commerce across
                the world.
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  lg:justify-end
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
                    tracking-[0.25em]
                    text-[#555]
                  "
                >
                  PERFORMANCE INDEX
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className="
              mt-20
              h-px
              w-full
              bg-white/[0.10]
              md:mt-24
            "
          />

          {/* =================================================
              METRICS
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {IMPACT_METRICS.map(
              (metric, index) => {
                const Icon =
                  index === 0
                    ? Globe2
                    : index === 1
                      ? Truck
                      : index === 2
                        ? Timer
                        : Radio;

                return (
                  <article
                    key={metric.id}
                    className="
                      impact-metric
                      relative
                      border-b
                      border-white/[0.08]
                      py-9
                      md:px-6
                      md:py-10
                      lg:border-b-0
                      lg:border-r
                      lg:first:pl-0
                      lg:last:border-r-0
                      lg:last:pr-0
                    "
                  >
                    {/* Number / Icon */}

                    <div
                      className="
                        mb-6
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            impact-marker
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
                            tracking-[0.25em]
                            text-[#555]
                          "
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <Icon
                        size={16}
                        strokeWidth={1.2}
                        className="
                          text-[#444]
                        "
                      />
                    </div>

                    {/* Value */}

                    <AnimatedCounter
                      value={
                        metric.value
                      }
                      suffix={
                        metric.suffix
                      }
                    />

                    {/* Label */}

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >
                      <p
                        className="
                          impact-label
                          font-mono
                          text-[9px]
                          tracking-[0.16em]
                          text-[#666]
                          md:text-[10px]
                        "
                      >
                        {metric.label}
                      </p>

                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.2}
                        className="
                          text-[#333]
                        "
                      />
                    </div>

                    {/* Small metric line */}

                    <div
                      className="
                        mt-6
                        h-px
                        w-full
                        bg-white/[0.06]
                      "
                    >
                      <div
                        className="
                          h-full
                          w-1/3
                          bg-[#FF6B2C]
                        "
                      />
                    </div>
                  </article>
                );
              }
            )}
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}

          <div
            className="
              mt-16
              flex
              flex-col
              justify-between
              gap-6
              border-t
              border-white/[0.08]
              pt-6
              sm:flex-row
              sm:items-center
            "
          >
            <p
              className="
                max-w-xl
                text-xs
                leading-6
                text-[#555]
              "
            >
              From the first mile to the final delivery,
              every movement contributes to a smarter
              global freight network.
            </p>

            <div
              className="
                flex
                items-center
                gap-3
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
                  tracking-[0.25em]
                  text-[#555]
                "
              >
                24 / 7 / 365
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}