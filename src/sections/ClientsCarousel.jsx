import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const clients = [
  { name: "Belmont Firearms", logo: "/images/belmont.png" },
  { name: "Bigfoot HVAC", logo: "/images/bigfoot.png" },
  { name: "Create Escapes", logo: "/images/createescapes.png" },
  { name: "Fair Spares NE", logo: "/images/fairspares.png" },
  { name: "Laconia Refrigeration", logo: "/images/laconia.png" },
  { name: "LaChance Water", logo: "/images/lachance.png" },
  // add more here
];

export default function ClientsCarousel() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 text-slate-800">
          Companies We’ve Worked With
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              gap: "1rem",
              autoplay: true,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 },
              },
            }}
            aria-label="Client logos carousel"
          >
            {clients.map((client, idx) => (
              <SplideSlide key={idx}>
                <div className="flex items-center justify-center border rounded-lg overflow-hidden shadow-md h-[220px] md:h-[280px]">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain md:object-cover max-h-[280px]"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
