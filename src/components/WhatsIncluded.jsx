import {
  MonitorSmartphone,
  Search,
  Gauge,
  ShieldCheck,
  Lock,
  BarChart3,
  Globe,
  Headphones,
  CheckCircle2,
  Smartphone,
  Mail,
  Rocket,
} from "lucide-react";

const included = [
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Responsive Design",
    description:
      "Your website will look and perform perfectly on desktops, tablets, and smartphones.",
  },
  {
    icon: <Search size={28} />,
    title: "SEO Ready",
    description:
      "Built with clean code, proper metadata, schema, and best practices to help search engines understand your website.",
  },
  {
    icon: <Gauge size={28} />,
    title: "Fast Performance",
    description:
      "Optimized images, modern code, and fast loading speeds for a better user experience.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Website Security",
    description:
      "Security best practices, SSL support, spam protection, and secure development standards.",
  },
  {
    icon: <Lock size={28} />,
    title: "Privacy & Compliance",
    description:
      "Privacy Policy, Terms & Conditions, cookie-friendly implementation, and secure forms.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Analytics Setup",
    description:
      "Google Analytics and Search Console integration to monitor visitors and website performance.",
  },
  {
    icon: <Globe size={28} />,
    title: "Domain & Hosting Support",
    description:
      "Assistance connecting your domain, hosting, DNS, SSL certificates, and deployment.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Post Launch Support",
    description:
      "We'll help after launch with guidance, fixes, and technical assistance.",
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Cross Browser Compatibility",
    description:
      "Your website is tested to work across Chrome, Safari, Edge, Firefox, and modern browsers.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Optimization",
    description:
      "Designed with a mobile-first approach for excellent usability on every screen size.",
  },
  {
    icon: <Mail size={28} />,
    title: "Contact Forms",
    description:
      "Professional contact forms, inquiry forms, lead capture, and WhatsApp integration if required.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Launch & Deployment",
    description:
      "We handle deployment, testing, final optimization, and getting your website live.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="fm-whats-included">
      <div className="fm-container">
        <div className="fm-whats-heading">
          <h2>
            What's <span>Included</span>
          </h2>

          <p>
            Every FreshMind Web project includes everything you need for a
            professional, secure, and high-performing website—no hidden
            essentials or surprise costs.
          </p>
        </div>

        <div className="fm-whats-grid">
          {included.map((item) => (
            <div className="fm-whats-card" key={item.title}>
              <div className="fm-whats-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
