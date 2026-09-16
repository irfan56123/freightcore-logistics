import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ArrowLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase hover:bg-accent/90 transition-colors"
    >
      {text} <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
