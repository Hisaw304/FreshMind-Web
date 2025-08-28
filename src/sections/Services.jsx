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
    icon: <Palette className="w-10 h-10 text-teal-500" />,
  },
  {
    title: "Search Engine Optimization (SEO)",
    intro: "Be found when it matters most.",
    desc: "More and more people search online—especially on mobile—when looking for businesses and services. We help your website rank higher by optimizing content, improving technical SEO, and building strategies that drive local and global visibility so the right customers can find you.",
    icon: <Search className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Digital Marketing",
    intro: "Reach your audience with impact.",
    desc: "From targeted ads to engaging content, we develop strategies that connect you with your ideal audience. Our digital marketing services are designed to maximize ROI, helping you attract, engage, and convert customers across multiple channels.",
    icon: <BarChart3 className="w-10 h-10 text-teal-500" />,
  },
  {
    title: "Web Development",
    intro: "Scalable solutions for growth.",
    desc: "We don’t just build websites—we engineer digital solutions that grow with your business. Whether you need custom features, e-commerce integration, or backend systems, our developers deliver clean, scalable, and secure solutions.",
    icon: <Code2 className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Mobile-Ready Solutions",
    intro: "Engage customers on the go.",
    desc: "With most users browsing from their phones, mobile-first design isn’t optional—it’s essential. We ensure your site and applications look and perform beautifully on every device, giving your customers a seamless experience anywhere.",
    icon: <Smartphone className="w-10 h-10 text-teal-500" />,
  },
  {
    title: "Global Reach",
    intro: "Expand beyond borders.",
    desc: "Whether you’re targeting local cities or international markets, our team builds strategies that break barriers. We tailor content and marketing tactics to connect your business with the right audience no matter where they are.",
    icon: <Globe className="w-10 h-10 text-orange-500" />,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What We Do
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our digital services are designed to build your online presence,
            connect with the right customers, and grow your business
            effectively.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-500"
            >
              <div className="flex items-center gap-3 mb-5">
                {service.icon}
                <h3 className="text-2xl font-semibold text-slate-800">
                  {service.title}
                </h3>
              </div>
              <p className="font-medium text-teal-600 mb-3">{service.intro}</p>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
