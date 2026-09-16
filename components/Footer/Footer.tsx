"use client";

import React from "react";
import ArrowLink from "../ui/ArrowLink";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        border-t border-border/40
        bg-secondary/40
        px-5
        pt-16
        pb-8

        sm:px-6
        sm:pt-20

        md:px-12
        md:pt-24
        md:pb-10
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          mb-14

          sm:mb-16
          md:mb-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12

            md:gap-16
            lg:grid-cols-12
          "
        >
          {/* ================= LEFT ================= */}
          <div
            className="
              flex
              flex-col
              justify-between
              gap-10

              lg:col-span-6
              lg:gap-0
            "
          >
            <div>
              {/* Brand */}
              <div
                className="
                  mb-4
                  text-lg
                  font-black
                  tracking-[-0.04em]
                  text-primary-text

                  sm:text-xl
                  md:text-2xl
                "
              >
                FREIGHT<span className="text-accent">CORE</span>{" "}
                LOGISTICS
              </div>

              {/* Main heading */}
              <h2
                className="
                  max-w-xl
                  text-[2rem]
                  font-black
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-primary-text

                  sm:text-4xl
                  md:text-5xl
                "
              >
                MOVE THE WORLD.
                <br />
                <span className="text-accent">
                  INTELLIGENTLY.
                </span>
              </h2>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <ArrowLink
                href="mailto:ia9412738@gmail.com"
                text="LET'S MOVE"
              />
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
              grid
              grid-cols-2
              gap-x-6
              gap-y-10

              sm:grid-cols-3
              sm:gap-8

              lg:col-span-6
            "
          >
            {/* Navigation */}
            <div>
              <h4
                className="
                  mb-4
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                NAVIGATION
              </h4>

              <ul
                className="
                  space-y-3
                  font-mono
                  text-[10px]
                  text-muted

                  sm:text-xs
                "
              >
                <li>
                  <a
                    href="#network"
                    className="transition-colors hover:text-accent"
                  >
                    01. NETWORK
                  </a>
                </li>

                <li>
                  <a
                    href="#fleet"
                    className="transition-colors hover:text-accent"
                  >
                    02. FLEET
                  </a>
                </li>

                <li>
                  <a
                    href="#impact"
                    className="transition-colors hover:text-accent"
                  >
                    03. IMPACT
                  </a>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div>
              <h4
                className="
                  mb-4
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                TECHNOLOGY
              </h4>

              <ul
                className="
                  space-y-3
                  font-mono
                  text-[10px]
                  text-muted

                  sm:text-xs
                "
              >
                <li>ROUTE AI</li>
                <li>TELEMETRY</li>
                <li>AUTONOMOUS</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4
                className="
                  mb-4
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                LEGAL
              </h4>

              <ul
                className="
                  space-y-3
                  font-mono
                  text-[10px]
                  text-muted

                  sm:text-xs
                "
              >
                <li>PRIVACY</li>
                <li>TERMS</li>
                <li>SECURITY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="
          mx-auto
          max-w-7xl
          border-t
          border-border/20
          pt-6

          flex
          flex-col
          gap-3

          text-center
          font-mono
          text-[9px]
          leading-5
          text-muted

          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:text-left
          sm:text-[10px]

          md:pt-8
          md:text-xs
        "
      >
        <p>
          © 2026 FREIGHTCORE LOGISTICS.
          <span className="hidden sm:inline"> </span>
          <span className="sm:hidden block" />
          ALL RIGHTS RESERVED.
        </p>

        <p className="tracking-wide">
          FICTIONAL ENTERPRISE MANAGEMENT PORTFOLIO
        </p>
      </div>
    </footer>
  );
}