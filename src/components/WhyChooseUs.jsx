import {
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
  Code,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
const points = [
  {
    icon: <Users size={20} />,
    title: "Mutual Success",
    text: "Your success is our success. We don’t just deliver a project and move on—we focus on building solutions that continue to bring value over time. Every decision we make is aligned with helping your business grow, attract more clients, and achieve sustainable long-term results.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Problem Solvers",
    text: "We go beyond design and development—we solve real business problems. Whether it’s improving user experience, increasing conversions, or simplifying complex processes, we break challenges down and turn them into clear, effective, and practical solutions that actually work.",
  },
  {
    icon: <Handshake size={20} />,
    title: "Real Partnerships",
    text: "We believe in building relationships, not just completing projects. From the first conversation to long after launch, we work closely with you, offering guidance, support, and honest input. Our goal is to become a trusted partner you can rely on as your business evolves.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Trust & Transparency",
    text: "We keep everything clear and straightforward—no hidden costs, no confusing jargon, no surprises. You’ll always know what’s happening, what to expect, and where your project stands. Open communication and accountability are at the core of how we work.",
  },
  {
    icon: <Code size={20} />,
    title: "You Own Everything",
    text: "Once your project is complete, it’s fully yours—no restrictions, no lock-ins. You’ll have complete ownership of your website, code, and assets, giving you the freedom to scale, modify, or move your project however you choose in the future.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Built for Growth",
    text: "We don’t just build for today—we build for where your business is going. Every website and system is designed with scalability in mind, so as your traffic, services, or audience grows, your platform is ready to grow with it without needing a complete rebuild.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="fm-why">
      <div className="fm-why-grid-bg" />
      <div className="fm-why-container">
        {/* HEADER */}
        <div className="fm-why-header">
          <h2>
            Why Choose <span>FreshMind</span>
          </h2>
          <p>
            We’re more than just a web agency — we’re a partner focused on
            building long-term success through strategy, design, and technology.
          </p>
        </div>

        {/* GRID */}
        <div className="fm-why-grid">
          {/* LEFT */}
          <div className="fm-why-images-sticky">
            <div className="fm-why-images">
              <motion.div
                className="fm-why-img img-back"
                initial={{ opacity: 0, x: -40, rotate: -6 }}
                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/images/IMG_8842.AVIF" alt="Team working" />
              </motion.div>

              <motion.div
                className="fm-why-img img-front"
                initial={{ opacity: 0, x: 40, rotate: 6 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img src="/images/IMG_8837.AVIF" alt="Team collaboration" />
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fm-why-card">
            {points.map((item, i) => (
              <div key={i} className="fm-why-item">
                <div className="fm-why-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
