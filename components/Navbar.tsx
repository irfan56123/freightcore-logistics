"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

const navItems = [
  { label: "NETWORKS", href: "#network" },
  { label: "FLEET", href: "#fleet" },
  { label: "IMPACT", href: "#impact" },
  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP + MOBILE HEADER
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          w-full
          transition-all
          duration-300

          ${
            scrolled
              ? "border-b border-border/40 bg-background/85 py-4 backdrop-blur-xl"
              : "bg-transparent py-6"
          }

          max-md:py-4
        `}
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-between
            px-6

            md:px-12

            max-md:px-5
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <a
            href="#top"
            onClick={closeMenu}
            className="
              relative
              z-[110]
              flex
              shrink-0
              items-center
              gap-2
              font-editorial
              text-xl
              font-extrabold
              tracking-tighter
              text-primary-text

              max-md:text-[17px]
            "
          >
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-accent

                max-md:h-1.5
                max-md:w-1.5
              "
            />

            FREIGHT
            <span className="text-accent">CORE</span>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            aria-label="Primary navigation"
            className="
              hidden
              items-center
              gap-8
              text-xs
              font-mono
              tracking-widest
              text-muted

              md:flex
            "
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  transition-colors
                  duration-300
                  hover:text-primary-text
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          {/* <div className="hidden md:block">
            <MagneticButton>
              <a
                href="#quote"
                className="
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-border/80
                  bg-secondary/80
                  px-5
                  py-2.5
                  font-mono
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-primary-text
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:text-accent
                "
              >
                GET A QUOTE

                <ArrowUpRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </div> */}

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isOpen}
            className="
              relative
              z-[110]
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              border
              border-white/10
              bg-background/50
              text-primary-text
              transition-colors
              duration-300
              hover:border-accent
              hover:text-accent

              md:hidden
            "
          >
            {isOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[90]
          w-full
          bg-background/98
          backdrop-blur-2xl
          transition-all
          duration-500

          md:hidden

          ${
            isOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
        aria-hidden={!isOpen}
      >
        {/* Top separator */}

        <div
          className="
            absolute
            left-0
            right-0
            top-[72px]
            h-px
            bg-white/[0.08]
          "
        />

        {/* Menu content */}

        <div
          className="
            flex
            h-full
            w-full
            flex-col
            justify-between
            px-6
            pb-8
            pt-28
          "
        >
          {/* Navigation */}

          <nav
            aria-label="Mobile navigation"
            className="flex flex-col"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.08]
                  py-5
                  font-editorial
                  text-4xl
                  font-extrabold
                  tracking-tight
                  text-primary-text
                  transition-colors
                  duration-300

                  hover:text-accent

                  max-[380px]:text-3xl
                "
              >
                <span>
                  {item.label}
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.2em]
                    text-muted
                    transition-colors
                    duration-300
                    group-hover:text-accent
                  "
                >
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}

          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-muted
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />

              MOVE THE WORLD. INTELLIGENTLY.
            </div>

            <a
              href="#quote"
              onClick={closeMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                border
                border-accent
                bg-accent
                px-5
                py-4
                text-center
                font-mono
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-accent
              "
            >
              GET A QUOTE

              <ArrowUpRight
                className="h-5 w-5"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}