import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Users,
  Award,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Client First",
    description:
      "Every decision we make is centered around helping our clients achieve their business goals. Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern technologies, creative thinking, and continuous learning to deliver websites that stand out in today's digital world.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe in honest communication, transparency, and delivering exactly what we promise on every project.",
  },
  {
    icon: Rocket,
    title: "Results Driven",
    description:
      "Beautiful design is only the beginning. Every website we build is focused on generating leads, improving conversions, and driving business growth.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great projects are built through teamwork. We work closely with every client throughout the entire design and development process.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "From design to deployment, we maintain high standards to ensure every website is fast, secure, responsive, and built to last.",
  },
];

export default function CompanyValues() {
  return (
    <section className="fm-values-section">
      <div className="fm-container">
        {/* HEADER */}
        <div className="fm-values-header">
          <span className="fm-section-tag">Our Values</span>

          <h2>
            The Principles That <span>Guide Everything</span> We Do
          </h2>

          <p>
            Our values define how we work, collaborate, and build lasting
            relationships with our clients. They are the foundation of every
            website and digital solution we create.
          </p>
        </div>

        {/* GRID */}
        <div className="fm-values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div className="fm-value-card" key={index}>
                <div className="fm-value-icon">
                  <Icon size={28} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
