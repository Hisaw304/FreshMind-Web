// src/sections/Services.jsx
import {
  Code2,
  BarChart3,
  Palette,
  Search,
  Smartphone,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Website Design & Management",
    intro: "Make the right first impression.",
    desc: "For many customers, your website is the first interaction with your business. Outdated or poorly designed websites can hurt your credibility. Our team builds modern, mobile-friendly websites that are tailored to your brand and optimized for performance, ensuring your online presence works as hard as you do.",
    icon: <Palette className="w-6 h-6 text-teal-400" />,
  },
  {
    title: "Search Engine Optimization (SEO)",
    intro: "Be found when it matters most.",
    desc: "More and more people search online—especially on mobile—when looking for businesses and services. We help your website rank higher by optimizing content, improving technical SEO, and building strategies that drive local and global visibility so the right customers can find you.",
    icon: <Search className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "Digital Marketing",
    intro: "Reach your audience with impact.",
    desc: "From targeted ads to engaging content, we develop strategies that connect you with your ideal audience. Our digital marketing services are designed to maximize ROI, helping you attract, engage, and convert customers across multiple channels.",
    icon: <BarChart3 className="w-6 h-6 text-teal-400" />,
  },
  {
    title: "Web Development",
    intro: "Scalable solutions for growth.",
    desc: "We don’t just build websites—we engineer digital solutions that grow with your business. Whether you need custom features, e-commerce integration, or backend systems, our developers deliver clean, scalable, and secure solutions.",
    icon: <Code2 className="w-6 h-6 text-orange-400" />,
  },
  {
    title: "Mobile-Ready Solutions",
    intro: "Engage customers on the go.",
    desc: "With most users browsing from their phones, mobile-first design isn’t optional—it’s essential. We ensure your site and applications look and perform beautifully on every device, giving your customers a seamless experience anywhere.",
    icon: <Smartphone className="w-6 h-6 text-teal-400" />,
  },
  {
    title: "Global Reach",
    intro: "Expand beyond borders.",
    desc: "Whether you’re targeting local cities or international markets, our team builds strategies that break barriers. We tailor content and marketing tactics to connect your business with the right audience no matter where they are.",
    icon: <Globe className="w-6 h-6 text-orange-400" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-slate-900 services-section"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* heading */}
        <div className="text-center mb-14 relative z-10">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What We Do
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our digital services are designed to build your online presence,
            connect with the right customers, and grow your business
            effectively.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((svc, idx) => (
            <article
              key={idx}
              className="service-card service-shadow focus-within:outline-none"
              tabIndex={0}
              aria-labelledby={`svc-${idx}-title`}
            >
              {/* number badge */}
              <div className="service-badge" aria-hidden>
                {idx + 1}
              </div>

              {/* card top: icon + title */}
              <div className="flex items-start gap-4">
                <div className="icon-wrap">
                  {/* icon color retained from services array (teal/orange) */}
                  {svc.icon}
                </div>

                <div className="ml-2">
                  <h3 id={`svc-${idx}-title`} className="service-title">
                    {svc.title}
                  </h3>
                  <div className="service-intro">{svc.intro}</div>
                </div>
              </div>

              {/* divider like the example */}
              <div className="service-divider" />

              <p className="service-desc">{svc.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
