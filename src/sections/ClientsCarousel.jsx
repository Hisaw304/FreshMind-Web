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
    <section className="bg-gradient-to-b mb-8 py-10  from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* <h2 className="section-title text-3xl md:text-5xl font-extrabold text-center text-slate-800">
          Companies We’ve Worked With
        </h2> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          Companies We've <span className="text-orange-500">Worked With</span>
        </h1>

        <div>
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              gap: "1.5rem",
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
            onAutoplayPlaying={(_, rate) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${rate * 100}%`;
              }
            }}
            onMoved={() => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = "0%";
              }
            }}
          >
            {clients.map((client, idx) => (
              <SplideSlide key={idx}>
                <div className="client-slide">
                  <img
                    src={client.logo}
                    alt={`${client.name} image`}
                    className="client-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="client-overlay" aria-hidden="true" />
                </div>
              </SplideSlide>
            ))}
          </Splide>

          {/* Progress Bar (teal -> orange gradient to match hero accents) */}
          {/* <div className="splide__progress h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="splide__progress__bar h-full transition-all duration-300"
              // Tailwind gradient classes; replace with CSS if you prefer external styles
              style={{
                background: "linear-gradient(90deg,#14b8a6,#14b8a6",
                width: "0%",
              }}
            ></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
