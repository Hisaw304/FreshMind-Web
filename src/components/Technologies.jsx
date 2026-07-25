import {
  Atom,
  Triangle,
  Database,
  Server,
  Wind,
  Cloud,
  Github,
  Code2,
  Globe,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    icon: <Atom size={32} />,
    name: "React",
    description:
      "Modern, fast, and interactive user interfaces built for performance.",
  },
  {
    icon: <Triangle size={32} />,
    name: "Next.js",
    description:
      "SEO-friendly React framework for high-performance business websites.",
  },
  {
    icon: <Server size={32} />,
    name: "Laravel",
    description:
      "Robust backend development for secure and scalable applications.",
  },
  {
    icon: <Code2 size={32} />,
    name: "Node.js",
    description:
      "Powerful server-side applications and custom API development.",
  },
  {
    icon: <Database size={32} />,
    name: "Supabase",
    description:
      "Modern backend with authentication, databases, storage, and realtime features.",
  },
  {
    icon: <Database size={32} />,
    name: "MongoDB",
    description: "Flexible NoSQL database for scalable business applications.",
  },
  {
    icon: <Wind size={32} />,
    name: "Tailwind CSS",
    description:
      "Beautiful, responsive interfaces with clean and maintainable code.",
  },
  {
    icon: <Cloud size={32} />,
    name: "Cloudinary",
    description: "Optimized image storage, delivery, and media management.",
  },
  {
    icon: <Globe size={32} />,
    name: "Vercel",
    description:
      "Fast global deployment with excellent performance and reliability.",
  },
  {
    icon: <Github size={32} />,
    name: "Git & GitHub",
    description:
      "Professional version control and collaborative development workflow.",
  },
  {
    icon: <ShieldCheck size={32} />,
    name: "Security Best Practices",
    description:
      "SSL, secure authentication, validation, and industry-standard protection.",
  },
  {
    icon: <Code2 size={32} />,
    name: "REST APIs",
    description:
      "Custom API integrations connecting your website with external services.",
  },
];

export default function Technologies() {
  return (
    <section className="fm-technologies">
      <div className="fm-container">
        <div className="fm-technologies-heading">
          <h2>
            Technologies We <span>Use</span>
          </h2>

          <p>
            We use modern, industry-leading technologies to build fast, secure,
            scalable, and future-proof websites and web applications for
            businesses of every size.
          </p>
        </div>

        <div className="fm-technologies-grid">
          {technologies.map((tech) => (
            <div className="fm-technology-card" key={tech.name}>
              <div className="fm-technology-icon">{tech.icon}</div>

              <h3>{tech.name}</h3>

              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
