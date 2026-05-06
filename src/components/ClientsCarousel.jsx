import { motion } from "framer-motion";

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

export default function Clients() {
  return (
    <section className="fm-clients">
      <div className="fm-clients-container">
        {/* HEADER */}
        <motion.div
          className="fm-clients-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            Companies We’ve <span>Worked With</span>
          </h2>

          <p>
            Over the years, we’ve partnered with companies — from small
            family-owned businesses to established regional brands. Each
            project, big or small, receives the same level of care, attention to
            detail, and commitment to results.
          </p>

          <p>
            Our goal is simple: build long-term relationships by delivering
            digital experiences that genuinely help businesses grow. The
            companies below represent just a portion of the clients who continue
            to trust us with their websites, branding, and ongoing marketing.
          </p>
        </motion.div>

        {/* LOGO SCROLLER */}
        <div className="fm-clients-marquee">
          <div className="fm-clients-track">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="fm-client-item">
                <img src={client.logo} alt={client.name} />
                <p className="fm-client-name">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
