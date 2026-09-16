"use client";

import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: string;
  suffix?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const valueRef = useRef<HTMLSpanElement>(null);

  const isNumeric = /^[0-9]+(\.[0-9]+)?$/.test(value);

  useEffect(() => {
    if (!valueRef.current) return;

    if (!isNumeric) {
      valueRef.current.textContent = value;
      return;
    }

    valueRef.current.textContent = "0";

    const target = Number(value);
    const duration = 1500;
    const startTime = performance.now();

    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // easeOutCubic
      const eased =
        1 - Math.pow(1 - progress, 3);

      const current =
        target * eased;

      if (valueRef.current) {
        valueRef.current.textContent =
          value.includes(".")
            ? current.toFixed(1)
            : Math.round(current).toString();
      }

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(
        animationFrame
      );
    };
  }, [value, isNumeric]);

  return (
    <div className="flex items-baseline">
      <span
        ref={valueRef}
        className="
          font-mono
          text-[52px]
          font-medium
          leading-none
          tracking-[-0.06em]
          text-[#F5F5F5]
          sm:text-[62px]
          md:text-[72px]
          lg:text-[82px]
        "
      >
        {isNumeric ? "0" : value}
      </span>

      {suffix && (
        <span
          className="
            ml-1
            font-mono
            text-2xl
            font-medium
            leading-none
            text-[#FF6B2C]
            md:text-3xl
          "
        >
          {suffix}
        </span>
      )}
    </div>
  );
}