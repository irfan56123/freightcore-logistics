"use client";

import {
  Activity,
  ArrowUpRight,
  MapPin,
  Radio,
} from "lucide-react";

type NetworkPanelProps = {
  panel: {
    id: string;
    number: string;
    title: string;
    metric: string;
    description: string;
  };
};

export default function NetworkPanel({
  panel,
}: NetworkPanelProps) {
  return (
    <article
      className="
        network-panel
        group
        relative
        flex
        h-full
        w-[76vw]
        min-w-[76vw]
        shrink-0
        overflow-hidden
        border
        border-white/[0.10]
        bg-[#0c0c0c]
        md:w-[68vw]
        md:min-w-[68vw]
        lg:w-[64vw]
        lg:min-w-[64vw]
      "
      data-panel-index={
        panel.number
      }
    >
      {/* =====================================================
          ORANGE TOP LINE
      ====================================================== */}

      <div
        className="
          network-panel-progress
          absolute
          left-0
          top-0
          z-50
          h-[2px]
          w-full
          origin-left
          bg-[#FF6B2C]
        "
        style={{
          transform:
            "scaleX(0)",
        }}
      />

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize:
            "42px 42px",
        }}
      />

      {/* =====================================================
          SCAN LINE
      ====================================================== */}

      <div
        className="
          network-panel-scan
          pointer-events-none
          absolute
          bottom-0
          left-0
          top-0
          z-30
          w-px
          bg-[#FF6B2C]/50
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          absolute
          left-6
          right-6
          top-6
          z-40
          flex
          items-center
          justify-between
          md:left-8
          md:right-8
          md:top-8
        "
      >
        {/* Left */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              network-panel-number
              font-mono
              text-[10px]
              tracking-[0.18em]
              text-[#8A8A8A]
            "
          >
            {panel.number}
          </span>

          <span
            className="
              network-live-dot
              h-2
              w-2
              rounded-full
              bg-[#FF6B2C]
            "
          />

          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.28em]
              text-[#555]
            "
          >
            LIVE NETWORK
          </span>
        </div>

        {/* Right */}

        <ArrowUpRight
          size={19}
          strokeWidth={1.2}
          className="
            text-[#444]
            transition-colors
            duration-500
            group-hover:text-[#FF6B2C]
          "
        />
      </div>

      {/* =====================================================
          RADAR
      ====================================================== */}

      <div
        className="
          network-radar-ring
          pointer-events-none
          absolute
          right-[-8%]
          top-1/2
          h-[290px]
          w-[290px]
          -translate-y-1/2
          rounded-full
          border
          border-[#FF6B2C]/15
          md:right-[2%]
          md:h-[350px]
          md:w-[350px]
        "
      >
        {/* Rings */}

        <div
          className="
            absolute
            inset-8
            rounded-full
            border
            border-[#FF6B2C]/10
          "
        />

        <div
          className="
            absolute
            inset-16
            rounded-full
            border
            border-[#FF6B2C]/10
          "
        />

        {/* Crosshair */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            -translate-x-1/2
            bg-[#FF6B2C]/10
          "
        />

        <div
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-full
            -translate-y-1/2
            bg-[#FF6B2C]/10
          "
        />

        {/* Center */}

        <div
          className="
            network-center-node
            absolute
            left-1/2
            top-1/2
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#FF6B2C]
            shadow-[0_0_35px_rgba(255,107,44,.8)]
          "
        />
      </div>

      {/* =====================================================
          RADAR POINTS
      ====================================================== */}

      <span
        className="
          network-data-point
          absolute
          right-[28%]
          top-[27%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#FF6B2C]
        "
      />

      <span
        className="
          network-data-point
          absolute
          right-[19%]
          top-[68%]
          h-1
          w-1
          rounded-full
          bg-[#FF6B2C]
        "
      />

      <span
        className="
          network-data-point
          absolute
          right-[37%]
          top-[55%]
          h-1
          w-1
          rounded-full
          bg-white/40
        "
      />

      <span
        className="
          network-data-point
          absolute
          right-[34%]
          top-[22%]
          h-1
          w-1
          rounded-full
          bg-white/25
        "
      />

      {/* =====================================================
          DATA PACKET
      ====================================================== */}

      <span
        className="
          network-data-packet
          absolute
          right-[17%]
          top-[43%]
          h-px
          w-10
          bg-[#FF6B2C]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          h-full
          w-full
          flex-col
          justify-between
          p-6
          md:p-10
          lg:p-12
        "
      >
        {/* Top */}

        <div />

        {/* =================================================
            TEXT
        ================================================== */}

        <div
          className="
            max-w-[62%]
            md:max-w-[60%]
          "
        >
          {/* Metric */}

          <p
            className="
              mb-4
              font-mono
              text-[9px]
              tracking-[0.3em]
              text-[#FF6B2C]
              md:text-[10px]
            "
          >
            {panel.metric}
          </p>

          {/* Title */}

          <h3
            className="
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
            {panel.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              text-[13px]
              leading-6
              text-[#777]
              md:mt-6
              md:text-sm
              md:leading-7
            "
          >
            {panel.description}
          </p>
        </div>

        {/* =================================================
            TELEMETRY
        ================================================== */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-3
            border-t
            border-white/[0.08]
            pt-4
            md:gap-8
            md:pt-5
          "
        >
          {/* Telemetry */}

          <div className="flex items-center gap-2">
            <Radio
              size={13}
              className="text-[#FF6B2C]"
            />

            <span
              className="
                font-mono
                text-[8px]
                tracking-[0.16em]
                text-[#555]
              "
            >
              TELEMETRY ONLINE
            </span>
          </div>

          {/* Real time */}

          <div className="flex items-center gap-2">
            <Activity
              size={13}
              className="text-[#FF6B2C]"
            />

            <span
              className="
                font-mono
                text-[8px]
                tracking-[0.16em]
                text-[#555]
              "
            >
              REAL TIME
            </span>
          </div>

          {/* Global */}

          <div className="flex items-center gap-2">
            <MapPin
              size={13}
              className="text-[#FF6B2C]"
            />

            <span
              className="
                font-mono
                text-[8px]
                tracking-[0.16em]
                text-[#555]
              "
            >
              GLOBAL NODE
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          CORNER LABEL
      ====================================================== */}

      <span
        className="
          absolute
          bottom-24
          right-8
          z-20
          font-mono
          text-[7px]
          tracking-[0.3em]
          text-white/15
        "
      >
        FRC / NETWORK
      </span>
    </article>
  );
}