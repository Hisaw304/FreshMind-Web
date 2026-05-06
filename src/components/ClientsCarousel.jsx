import { motion } from "framer-motion";
import belmont from "../assets/belmont.png";
import bigfoot from "../assets/bigfoot.png";
import createescapes from "../assets/createescapes.png";
import fairspares from "../assets/fairspares.png";
import laconia from "../assets/laconia.png";
import lachance from "../assets/lachance.png";
import trini from "../assets/Trini-and-Sons-1024x1024.webp";
import trailer from "../assets/Trailer-Outlet-1024x1024.webp";
import total from "../assets/Total-Concepts-1024x1024.webp";
import sawin from "../assets/Sawin-1024x1024.webp";
import prime from "../assets/Prime-Sealcoating-1024x1024.webp";
import necc from "../assets/NECC-1024x1024.webp";
import epoxy from "../assets/Lakes-Region-Epoxy-1024x1024.webp";
import intervale from "../assets/Intervale-Stove-Shop-1024x1024.webp";
import grasshoppers from "../assets/Grasshoppers-1024x1024.webp";
import concierge from "../assets/Lakes-Region-Concierge-1024x1024.webp";
const clients = [
  { name: "Belmont Firearms", logo: belmont },
  { name: "Bigfoot HVAC", logo: bigfoot },
  { name: "Create Escapes", logo: createescapes },
  { name: "Fair Spares NE", logo: fairspares },
  { name: "Laconia Refrigeration", logo: laconia },
  { name: "LaChance Water", logo: lachance },
  { name: "Trini & Sons", logo: trini },
  { name: "Trailer Outlet", logo: trailer },
  { name: "Total Concepts", logo: total },
  { name: "Sawin", logo: sawin },
  { name: "Prime Sealcoating", logo: prime },
  { name: "NECC", logo: necc },
  { name: "Lakes Region Epoxy", logo: epoxy },
  { name: "Intervale Stove Shop", logo: intervale },
  { name: "Grasshoppers", logo: grasshoppers },
  { name: "Lakes Region Concierge", logo: concierge },
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
              <div key={i} className="fm-client-card">
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
