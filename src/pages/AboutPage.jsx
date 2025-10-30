// src/pages/AboutPage.jsx
import React from "react";
import {
  Monitor,
  Search,
  ShoppingCart,
  FileText,
  Zap,
  Users,
} from "lucide-react";
import FloatingActions from "../sections/FloatingActions";
import About from "../sections/About";

/**
 * AboutPage — improved, premium visual treatment
 * - Uses local small subcomponents for clarity
 * - Keeps consistent max width and spacing
 */

const SERVICES = [
  {
    title: "Web Design",
    desc: "Tailored, clean designs reflecting your business.",
    icon: <Monitor />,
  },
  {
    title: "Content & SEO",
    desc: "Optimized messaging that gets found and resonates.",
    icon: <Search />,
  },
  {
    title: "E-Commerce",
    desc: "User-friendly stores built to sell.",
    icon: <ShoppingCart />,
  },
  {
    title: "Strategy",
    desc: "Roadmaps, positioning, and measurable outcomes.",
    icon: <FileText />,
  },
  {
    title: "Growth",
    desc: "Paid & organic campaigns that scale revenue.",
    icon: <Zap />,
  },
  {
    title: "UX Research",
    desc: "User-first discoveries that reduce risk.",
    icon: <Users />,
  },
];

// src/data/portfolio.js (or inline in AboutPage)
export const PORTFOLIO = [
  {
    src: "/images/belmont.png",
    alt: "Belmont Firearms website screenshot",
    title: "Belmont Firearms",
  },
  {
    src: "/images/bigfoot.png",
    alt: "Bigfoot HVAC website screenshot",
    title: "Bigfoot HVAC",
  },
  {
    src: "/images/createescapes.png",
    alt: "CreateEscapes travel platform screenshot",
    title: "CreateEscapes",
  },
  {
    src: "/images/fairspares.png",
    alt: "Fair Spares NE website screenshot",
    title: "Fair Spares NE",
  },
  {
    src: "/images/laconia.png",
    alt: "Laconia Refrigeration website screenshot",
    title: "Laconia Refrigeration",
  },
  {
    src: "/images/lachance.png",
    alt: "LaChance Water website screenshot",
    title: "LaChance Water",
  },

  // extra / additional project images you listed (clean titles from filenames)
  {
    src: "/images/Belmont-Firearms-1024x1024.webp",
    alt: "Belmont Firearms project image",
    title: "Belmont Firearms (alt)",
  },
  {
    src: "/images/Trini-and-Sons-1024x1024.webp",
    alt: "Trini & Sons project screenshot",
    title: "Trini & Sons",
  },
  {
    src: "/images/Trailer-Outlet-1024x1024.webp",
    alt: "Trailer Outlet project screenshot",
    title: "Trailer Outlet",
  },
  {
    src: "/images/Total-Concepts-1024x1024.webp",
    alt: "Total Concepts project screenshot",
    title: "Total Concepts",
  },
  {
    src: "/images/Sawin-1024x1024.webp",
    alt: "Sawin project screenshot",
    title: "Sawin",
  },
  {
    src: "/images/Prime-Sealcoating-1024x1024.webp",
    alt: "Prime Sealcoating project screenshot",
    title: "Prime Sealcoating",
  },
  {
    src: "/images/NECC-1024x1024.webp",
    alt: "NECC project screenshot",
    title: "NECC",
  },
  {
    src: "/images/Lakes-Region-Epoxy-1024x1024.webp",
    alt: "Lakes Region Epoxy project screenshot",
    title: "Lakes Region Epoxy",
  },
  {
    src: "/images/Intervale-Stove-Shop-1024x1024.webp",
    alt: "Intervale Stove Shop project screenshot",
    title: "Intervale Stove Shop",
  },
  {
    src: "/images/Grasshoppers-1024x1024.webp",
    alt: "Grasshoppers project screenshot",
    title: "Grasshoppers",
  },
  {
    src: "/images/Lakes-Region-Concierge-1024x1024.webp",
    alt: "Lakes Region Concierge project screenshot",
    title: "Lakes Region Concierge",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      {/* About CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Ready to Grow With a Team That Cares?
          </h2>
          <p className="text-lg opacity-85 mb-8">
            We don’t just build digital experiences — we build long-term
            partnerships. Let’s talk about how we can help your business scale
            with confidence.
          </p>

          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Let’s Connect
          </a>
        </div>
      </section>

      {/* Hero / intro — reuse your existing About hero */}
      <About />

      {/* Consulting overview */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
            Website Strategy & Consulting
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We help you unlock your online potential — from brand strategy to
            user-first product design and measurable growth.
          </p>
        </div>
      </section>

      {/* Full-service offerings — responsive grid */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-800">
            What We Do
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={i}
                title={s.title}
                desc={s.desc}
                icon={s.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Visual Work */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                Our Work in Action
              </h3>
              <p className="text-slate-600">
                Selected projects showcasing brand and product work — hover or
                tap to view details.
              </p>
            </div>
            <a
              href="/contact"
              className="hidden md:inline-block rounded-xl border border-orange-500/60 px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-200 hover:text-orange-500 transition active:scale-[0.98] rounded-lg shadow-lg hover:shadow-xl transition"
            >
              Want To More Past Project?
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {PORTFOLIO.map((p, i) => (
              <PortfolioItem key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters - compact card */}
      <section className="py-16 ">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-800">
            Why Strong Design Matters
          </h3>
          <p className="text-lg text-slate-600">
            A thoughtful website builds credibility, improves discoverability,
            and increases conversions. We craft designs that earn trust and
            deliver measurable results.
          </p>
        </div>
      </section>

      {/* Services List + CTA */}
      <section className="py-10 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h3 className="text-2xl section-title md:text-3xl font-semibold text-white mb-4">
            How We Can Help You
          </h3>
          <p className="text-lg text-slate-300 mb-10">
            Contact us today — we’ll help you build a brand and website that
            drives real results.
          </p>

          {/* Trust signal */}
          <div className="mb-10">
            <span className="trust-pill inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold shadow">
              ⭐ Trusted by businesses across the region
            </span>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
            {[
              "Naming",
              "Brand Strategy",
              "Positioning",
              "Visual Identity",
              "Brand Refresh",
              "Websites",
              "Rapid Prototyping",
              "User Research",
              "Marketing",
              "Digital Campaigns",
              "Print Work",
              "Copywriting",
            ].map((label, idx) => (
              <div key={idx} className="p-4">
                <div
                  className="
              service-tags relative bg-white rounded-lg p-4 shadow
              border-r-4 border-orange-500
              hover:shadow-lg hover:border-orange-600
              transition
            "
                >
                  <p className="font-medium text-slate-800">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="/contact"
              className="inline-block rounded-xl border border-orange-500/60 px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-200 hover:text-orange-600 transition active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Let’s Talk Today
            </a>
          </div>
        </div>
      </section>

      <FloatingActions />
    </div>
  );
}

/* ---------- small inline components ---------- */

function ServiceCard({ title, desc, icon }) {
  return (
    <article
      role="article"
      className="service-cards group flex flex-col gap-4 p-6 rounded-2xl"
      aria-label={title}
    >
      <div className="icon w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-[var(--accent-start)]">
        {icon}
      </div>
      <h4 className="font-semibold text-lg text-slate-800">{title}</h4>
      <p className="text-slate-600 flex-1">{desc}</p>
      <div className="mt-2">
        <a
          className="text-sm font-semibold text-[var(--accent-end)] hover:underline"
          href={`/contact#${slugify(title)}`}
        >
          Learn more →
        </a>
      </div>
    </article>
  );
}

function PortfolioItem({ src, alt, title }) {
  return (
    <figure
      className="
        group relative overflow-hidden rounded-xl
        shadow-md hover:shadow-2xl transition-all duration-500
      "
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="
          w-full aspect-[4/3] object-cover
          transform transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay with title */}
      <figcaption
        className="
          absolute inset-0 flex items-end
          bg-gradient-to-t from-black/70 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      >
        <div className="p-4 text-white">
          <div className="text-lg font-semibold tracking-wide drop-shadow-md">
            {title}
          </div>
        </div>
      </figcaption>

      {/* Clickable area */}
      <a
        href={`/portfolio/${slugify(title)}`}
        className="absolute inset-0"
        aria-label={`Open ${title} project`}
      />
    </figure>
  );
}

/* tiny util */
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
