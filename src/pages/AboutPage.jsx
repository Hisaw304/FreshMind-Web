import About from "../sections/About";

export default function AboutPage() {
  return (
    <div>
      {/* Reuse your existing hero section */}
      <About />

      {/* 1. Consulting Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
            Website Strategy & Consulting
          </h3>
          <p className="text-lg text-slate-600">
            We help you unlock your online potential — from building your brand
            footprint to integrating social channels that drive growth.
          </p>
        </div>
      </section>

      {/* 2. Full-Service Offerings */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-800">
            What We Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-slate-700">
            {[
              {
                title: "Web Design",
                desc: "Tailored, clean designs reflecting your business.",
              },
              {
                title: "Content & SEO",
                desc: "Optimized messaging that gets found and resonates.",
              },
              {
                title: "E-Commerce",
                desc: "User-friendly stores built to sell.",
              },
            ].map((svc, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-orange-500 mb-2">
                  {svc.title}
                </h4>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Visual Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-800">
            Our Work in Action
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Replace with your project screenshots */}
            <img
              src="/images/bigfoot.png"
              alt="Project 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="/images/createescapes.png"
              alt="Project 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="/images/laconia.png"
              alt="Project 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 4. Why It Matters / Value Proposition */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-800">
            Why Strong Design Matters
          </h3>
          <p className="text-lg text-slate-600">
            A thoughtful website isn't just a page—it builds credibility,
            improves discoverability, and generates trust. We ensure that your
            digital presence positions your business for steady growth.
          </p>
        </div>
      </section>

      {/* 5. How We Can Help You */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
            How We Can Help You
          </h3>
          <p className="text-lg text-slate-600 mb-10">
            Contact us today to get started — we’ll help you build a brand and
            website that drives real results.
          </p>

          {/* Trust signal (instead of award) */}
          <div className="mb-12">
            <p className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-semibold shadow">
              ⭐ Trusted by businesses across the region
            </p>
          </div>

          {/* Services List */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              "Naming",
              "Brand Strategy",
              "Positioning",
              "Visual Identity",
              "Brand Refresh",
              "Websites",
              "Rapid Prototyping",
              "User Research",
              "Marketing",
              "Digital Marketing",
              "Print Advertising",
              "Copywriting",
              "Campaign Concepts",
              "Campaign Visuals",
              "Social Media",
              "Print Media",
              "Rollout",
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <p className="font-medium text-slate-700">{service}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-600 transition"
            >
              Let’s Talk Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
