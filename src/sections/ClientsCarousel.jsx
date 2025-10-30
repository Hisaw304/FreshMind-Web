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

export default function ClientsCarousel() {
  const progressBarRef = useRef(null);

  return (
    <section className="clients-carousel-section">
      <div className="container">
        <div className="max-w-5xl mx-auto px-6 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Companies We've <span className="text-orange-500">Worked With</span>
          </h1>
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "1.5rem",
            autoplay: true,
            interval: 3200,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            drag: true,
            keyboard: "global",
            breakpoints: {
              1400: { perPage: 3 },
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
            accessibility: true,
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
            <SplideSlide key={client.name + idx}>
              <figure
                className="client-card"
                tabIndex={0}
                aria-label={client.name}
              >
                {/* animated ring (behind) */}
                <div className="ring" aria-hidden="true" />

                {/* image (the hero) */}
                <div className="media-wrap" aria-hidden="true">
                  <img
                    className="client-image"
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                  />
                </div>

                {/* caption / overlay */}
                <figcaption className="client-caption">
                  <div className="client-title">
                    <span className="client-name">{client.name}</span>
                    <span className="client-index">#{idx + 1}</span>
                  </div>
                </figcaption>
              </figure>
            </SplideSlide>
          ))}
        </Splide>

        <div className="splide-progress" aria-hidden>
          <div ref={progressBarRef} className="splide-progress-bar" />
        </div>
      </div>
    </section>
  );
}
