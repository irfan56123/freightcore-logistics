"use client";

import React from "react";

export default function WebGLFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-secondary/30 p-6 text-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-full border-2 border-accent border-t-transparent animate-spin" />
        <span className="text-xs font-mono uppercase text-muted tracking-widest">
          INITIALIZING FREIGHTCORE WEBGL...
        </span>
      </div>
    </div>
  );
}
