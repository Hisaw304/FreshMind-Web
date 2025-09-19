import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const clients = [
  { name: "Belmont Firearms", logo: "/images/belmont.png" },
  { name: "Bigfoot HVAC", logo: "/images/bigfoot.png" },
  { name: "Create Escapes", logo: "/images/createescapes.png" },
  { name: "Fair Spares NE", logo: "/images/fairspares.png" },
  { name: "Laconia Refrigeration", logo: "/images/laconia.png" },
  { name: "LaChance Water", logo: "/images/lachance.png" },
  {
    name: "LaChance Water",
    logo: "/images/Belmont-Firearms-1024x1024.webp",
  },
  { name: "LaChance Water", logo: "/images/Trini-and-Sons-1024x1024.webp" },
  { name: "LaChance Water", logo: "/images/Trailer-Outlet-1024x1024.webp" },
  { name: "LaChance Water", logo: "/images/Total-Concepts-1024x1024.webp" },
  { name: "LaChance Water", logo: "/images/Sawin-1024x1024.webp" },
  { name: "LaChance Water", logo: "/images/Prime-Sealcoating-1024x1024.webp" },
  { name: "LaChance Water", logo: "/images/NECC-1024x1024.webp" },
  { name: "LaChance Water", logo: "/images/Lakes-Region-Epoxy-1024x1024.webp" },
  {
    name: "LaChance Water",
    logo: "/images/Intervale-Stove-Shop-1024x1024.webp",
  },
  { name: "LaChance Water", logo: "/images/Grasshoppers-1024x1024.webp" },
  {
    name: "LaChance Water",
    logo: "/images/Lakes-Region-Concierge-1024x1024.webp",
  },
];

export default function ClientsCarousel() {
  const progressBarRef = useRef(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-3xl md:text-5xl font-extrabold text-center mb-14 text-slate-800">
          Companies We’ve Worked With
        </h2>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10">
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              gap: "2rem",
              autoplay: true,
              interval: 3000,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              drag: true,
              breakpoints: {
                1280: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 },
              },
            }}
            aria-label="Client logos carousel"
            // update the bar while autoplay is running
            onAutoplayPlaying={(_, rate) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${rate * 100}%`;
              }
            }}
            // reset the bar immediately when a slide finishes moving (keeps timing consistent)
            onMoved={() => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = "0%";
              }
            }}
          >
            {clients.map((client, idx) => (
              <SplideSlide key={idx}>
                <div className="client-card border border-slate-200/60 rounded-xl overflow-hidden h-[200px] md:h-[260px] bg-white">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>

          {/* Progress Bar (teal -> orange gradient to match hero accents) */}
          <div className="splide__progress mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="splide__progress__bar h-full transition-all duration-300"
              // Tailwind gradient classes; replace with CSS if you prefer external styles
              style={{
                background: "linear-gradient(90deg,#14b8a6,#f97316)",
                width: "0%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
