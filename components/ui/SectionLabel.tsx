import React from "react";

export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-mono tracking-widest text-accent uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
      {text}
    </div>
  );
}
