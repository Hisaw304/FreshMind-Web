import React from "react";

const clients = [
  { name: "Belmont Firearms", logo: "/images/belmont.png" },
  { name: "Bigfoot HVAC", logo: "/images/bigfoot.png" },
  { name: "Create Escapes", logo: "/images/createescapes.png" },
  { name: "Fair Spares NE", logo: "/images/fairspares.png" },
  { name: "Laconia Refrigeration", logo: "/images/laconia.png" },
  { name: "LaChance Water", logo: "/images/lachance.png" },
  { name: "Trini & Sons", logo: "/images/Trini-and-Sons-1024x1024.webp" },
  { name: "Trailer Outlet", logo: "/images/Trailer-Outlet-1024x1024.webp" },
  { name: "Total Concepts", logo: "/images/Total-Concepts-1024x1024.webp" },
  { name: "Sawin", logo: "/images/Sawin-1024x1024.webp" },
  {
    name: "Prime Sealcoating",
    logo: "/images/Prime-Sealcoating-1024x1024.webp",
  },
  { name: "NECC", logo: "/images/NECC-1024x1024.webp" },
  {
    name: "Lakes Region Epoxy",
    logo: "/images/Lakes-Region-Epoxy-1024x1024.webp",
  },
  {
    name: "Intervale Stove Shop",
    logo: "/images/Intervale-Stove-Shop-1024x1024.webp",
  },
  { name: "Grasshoppers", logo: "/images/Grasshoppers-1024x1024.webp" },
  {
    name: "Lakes Region Concierge",
    logo: "/images/Lakes-Region-Concierge-1024x1024.webp",
  },
];

export default function ClientsCarousel({
  speed = 28, // seconds per full loop
  rowHeight = 220, // base row height in px (bigger than before)
  gap = 15, // horizontal gap between items in px (reduced)
}) {
  const groups = [clients, clients]; // duplicate for seamless loop

  return (
    <section
      className="clients-loop-section py-8"
      aria-label="Companies we've worked with"
    >
      <div>
        <div className="max-w-5xl mx-auto px-6 ">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Companies We've <span className="text-orange-500">Worked With</span>
          </h2>
          <p className="text-lg text-slate-700 font-medium mb-6">
            Over the years, we’ve partnered with companies across New Hampshire
            and beyond — from small family-owned businesses to established
            regional brands. Each project, big or small, receives the same level
            of care, attention to detail, and commitment to results.
          </p>

          <p className="text-lg text-slate-700 font-medium mb-6">
            Our goal is simple: build long-term relationships by delivering
            digital experiences that genuinely help businesses grow. The
            companies below represent just a portion of the clients who continue
            to trust us with their websites, branding, and ongoing marketing.
          </p>
        </div>

        <div
          className="clients-marquee relative overflow-hidden"
          style={{
            ["--marquee-speed"]: `${speed}s`,
            ["--row-height"]: `${rowHeight}px`,
            ["--gap"]: `${gap}px`,
            // responsive desktop scale (can be overridden with CSS media queries)
          }}
        >
          <div className="clients-marquee__inner">
            {groups.map((group, gi) => (
              <div
                key={gi}
                className="clients-marquee__group inline-flex items-center"
              >
                {group.map((client, idx) => (
                  <div
                    key={`${gi}-${idx}`}
                    className="client-item flex flex-col items-center"
                  >
                    <span className="client-name">{client.name}</span>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="client-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="clients-fade-left" aria-hidden />
          <div className="clients-fade-right" aria-hidden />
        </div>
      </div>
    </section>
  );
}
