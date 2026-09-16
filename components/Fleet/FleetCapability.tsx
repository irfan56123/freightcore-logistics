"use client";

import {
  Activity,
  ArrowUpRight,
  Cpu,
  Radar,
} from "lucide-react";

type FleetCapabilityProps = {
  capability: {
    id: string;
    number: string;
    title: string;
    description: string;
  };

  active: boolean;
};

export default function FleetCapability({
  capability,
  active,
}: FleetCapabilityProps) {
  const Icon =
    capability.number === "01"
      ? Activity
      : capability.number === "02"
        ? Radar
        : capability.number === "03"
          ? Cpu
          : Activity;

  return (
    <div
      className={`
        fleet-capability
        relative
        w-full
        border-t
        border-white/[0.08]
        py-5
        pl-4
        transition-all
        duration-500

        md:py-6
        md:pl-5

        ${active
          ? "bg-white/[0.025]"
          : ""
        }
      `}
    >
      {/* =====================================================
          ACTIVE INDICATOR
      ====================================================== */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          top-0
          w-[2px]
          origin-top
          bg-[#FF6B2C]
          transition-transform
          duration-500

          ${active
            ? "scale-y-100"
            : "scale-y-0"
          }
        `}
      />

      <div className="flex items-start gap-4">
        {/* =================================================
            NUMBER
        ================================================== */}

        <span
          className={`
            shrink-0
            pt-1
            font-mono
            text-[9px]
            tracking-[0.2em]
            transition-colors
            duration-500

            ${active
              ? "text-[#FF6B2C]"
              : "text-[#444]"
            }
          `}
        >
          {capability.number}
        </span>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="min-w-0 flex-1">
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
            "
          >
            <h3
              className={`
                min-w-0
                text-xs
                font-medium
                leading-5
                tracking-[0.04em]
                transition-colors
                duration-500

                md:text-sm

                ${active
                  ? "text-[#F5F5F5]"
                  : "text-[#777]"
                }
              `}
            >
              {capability.title}
            </h3>

            <ArrowUpRight
              size={14}
              strokeWidth={1.3}
              className={`
                shrink-0
                transition-all
                duration-500

                ${active
                  ? "translate-x-0 text-[#FF6B2C]"
                  : "-translate-x-1 text-[#333]"
                }
              `}
            />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <div
            className={`
              grid
              transition-[grid-template-rows]
              duration-500

              ${active
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
              }
            `}
          >
            <div className="overflow-hidden">
              <p
                className="
                  max-w-md
                  pt-3
                  text-[11px]
                  leading-6
                  text-[#666]

                  md:text-xs
                "
              >
                {capability.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SYSTEM ICON
      ====================================================== */}

      <div className="absolute bottom-3 right-3">
        <Icon
          size={11}
          className={
            active
              ? "text-[#FF6B2C]"
              : "text-white/10"
          }
        />
      </div>
    </div>
  );
}