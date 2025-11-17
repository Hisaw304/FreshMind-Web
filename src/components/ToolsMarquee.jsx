// src/components/ToolsMarquee.jsx
import React from "react";
import { Code, Database, Layers, Moon } from "lucide-react";

/*
  ToolsMarquee: an infinite horizontal scroll (marquee) of tool "chips".
  - Duplicate group technique for infinite loop
  - Each chip contains an SVG logo (inline) or lucide icon as fallback
  - A position-absolute .fade overlay sits on top (inset-0, pointer-events-none)
*/

const Tool = ({ name, logo }) => (
  <div className="tool-card inline-flex items-center gap-3 px-4 py-2 rounded-2xl border border-slate-800/40 bg-slate-800/20 backdrop-blur-sm text-sm font-medium select-none mr-4">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      {logo}
    </div>
    <span className="whitespace-nowrap">{name}</span>
  </div>
);

// Inline simple SVGs for brand logos (keeps bundle small and consistent)
const Logos = {
  HTML: (
    <svg viewBox="0 0 128 128" className="w-6 h-6" aria-hidden>
      <path fill="#e44d26" d="M19 0h90l-8 90-37 12-37-12z" />
      <path fill="#f16529" d="M64 111v-34h16l1-25H64V31h36l-4 44H64v36z" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 128 128" className="w-6 h-6" aria-hidden>
      <path fill="#0db7ed" d="M19 0h90l-8 90-37 12-37-12z" />
      <path fill="#2965f1" d="M64 111v-34h16l1-25H64V31h36l-4 44H64v36z" />
    </svg>
  ),
  JS: (
    <svg viewBox="0 0 128 128" className="w-6 h-6" aria-hidden>
      <path fill="#f7df1e" d="M0 0h128v128H0z" />
      <path d="M24 24h22v80H24zM82 24h22v80H82z" fill="#000" opacity="0.06" />
      <text x="18" y="88" fontSize="60" fontWeight="700" fill="#000">
        JS
      </text>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 128 128" className="w-6 h-6" aria-hidden>
      <g
        fill="none"
        stroke="#61dafb"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="64" cy="64" rx="44" ry="18" transform="rotate(0 64 64)" />
        <ellipse cx="64" cy="64" rx="44" ry="18" transform="rotate(60 64 64)" />
        <ellipse
          cx="64"
          cy="64"
          rx="44"
          ry="18"
          transform="rotate(120 64 64)"
        />
      </g>
      <circle cx="64" cy="64" r="8" fill="#61dafb" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
      <path
        fill="currentColor"
        d="M12 4C6 4 4 7 4 7s2-1 5-1 4 2 6 2 4-2 6-2-2-3-9-3zM4 13s2-1 5-1 4 2 6 2 4-2 6-2-2 3-9 3S4 13 4 13z"
      />
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 256 256" className="w-6 h-6" aria-hidden>
      <rect width="256" height="256" rx="48" fill="#7952b3" />
      <path
        d="M164 80c22 0 28 12 28 30s-8 30-28 30h-48v-60h48zM96 60h44c28 0 44 16 44 44s-16 44-44 44H96z"
        fill="#fff"
        opacity="0.95"
      />
    </svg>
  ),
  NextJS: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
      <path d="M2 3h20v18H2z" fill="#000" />
      <path d="M7 7v10h2V7H7zm8 0l-4 6v4h2v-3l4-6h-2z" fill="#fff" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 128 128" className="w-6 h-6" aria-hidden>
      <path
        d="M64 12s22 8 18 32c0 0-4 6-10 8 0 0 1 12-8 18 0 0-6-5-7-18 0 0-9-6-9-18 0 0-8-22 16-40z"
        fill="#47A248"
      />
    </svg>
  ),
};

export default function ToolsMarquee() {
  const tools = [
    { name: "HTML", logo: Logos.HTML },
    { name: "CSS", logo: Logos.CSS },
    { name: "JavaScript", logo: Logos.JS },
    { name: "React", logo: Logos.React },
    { name: "Tailwind", logo: Logos.Tailwind },
    { name: "Bootstrap", logo: Logos.Bootstrap },
    { name: "Next.js", logo: Logos.NextJS },
    { name: "MongoDB", logo: Logos.MongoDB },
    // extra/utility icons using lucide
    { name: "API / DB", logo: <Database size={18} /> },
    { name: "Components", logo: <Layers size={18} /> },
    { name: "Code", logo: <Code size={18} /> },
    { name: "Dark UI", logo: <Moon size={18} /> },
  ];

  // duplicate list for smooth infinite effect
  const groups = [tools, tools];

  return (
    <div className="relative overflow-hidden mt-2">
      <div className="marquee h-20 flex items-center">
        {groups.map((group, gi) => (
          <div
            key={gi}
            className="marquee__group flex items-center whitespace-nowrap will-change-transform"
          >
            {group.map((t) => (
              <Tool key={t.name + Math.random()} name={t.name} logo={t.logo} />
            ))}
          </div>
        ))}
      </div>

      {/* Fade overlay (pointer-events-none, absolute inset) */}
      <div className="absolute inset-0 pointer-events-none fade" aria-hidden />
    </div>
  );
}
