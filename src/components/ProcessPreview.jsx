import {
  Search,
  FileText,
  PencilRuler,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const process = [
  {
    number: "01",
    icon: <Search size={26} />,
    title: "Discovery",
    description:
      "We begin by understanding your business, goals, target audience, competitors, and project requirements to create the right strategy.",
  },

  {
    number: "02",
    icon: <FileText size={26} />,
    title: "Planning",
    description:
      "We organize your website structure, user journey, content, features, and technical requirements before development begins.",
  },

  {
    number: "03",
    icon: <PencilRuler size={26} />,
    title: "Design",
    description:
      "Our designers create modern, user-focused layouts that reflect your brand and maximize engagement and conversions.",
  },

  {
    number: "04",
    icon: <Code2 size={26} />,
    title: "Development",
    description:
      "Using modern technologies, we build a fast, responsive, secure, and scalable website tailored to your business.",
  },

  {
    number: "05",
    icon: <ShieldCheck size={26} />,
    title: "Testing",
    description:
      "Every page is carefully tested across devices and browsers to ensure performance, functionality, and reliability.",
  },

  {
    number: "06",
    icon: <Rocket size={26} />,
    title: "Launch & Support",
    description:
      "After launch, we provide guidance, monitoring, and ongoing support to help your website continue growing with your business.",
  },
];

export default function ProcessPreview() {
  return (
    <section className="fm-process-preview">
      <div className="fm-container">
        <div className="fm-process-heading">
          <h2>
            Our <span>Process</span>
          </h2>

          <p>
            Every successful project follows a proven process. From discovery to
            launch, we work closely with you to deliver a website that's
            beautiful, functional, and built for long-term growth.
          </p>
        </div>

        <div className="fm-process-grid">
          {process.map((step) => (
            <div className="fm-process-card" key={step.number}>
              <div className="fm-process-top">
                <div className="fm-process-icon">{step.icon}</div>

                <span className="fm-process-number">{step.number}</span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
