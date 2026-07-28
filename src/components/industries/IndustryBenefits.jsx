import { Target, Search, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Tailored User Experience",
    description:
      "Every website is designed around how your customers think, search, and make decisions, creating a seamless experience that builds trust and increases conversions.",
  },
  {
    icon: Search,
    title: "Industry-Focused SEO",
    description:
      "We optimize every page with the keywords, structure, and content your industry needs to rank higher and attract qualified traffic.",
  },
  {
    icon: Users,
    title: "Higher Customer Trust",
    description:
      "Professional design, clear messaging, and strategic layouts position your business as the trusted choice in your industry.",
  },
  {
    icon: TrendingUp,
    title: "Built for Business Growth",
    description:
      "From lead generation to online bookings and sales, every website is built with measurable business goals in mind.",
  },
];

export default function IndustryBenefits() {
  return (
    <section className="fm-industry-benefits">
      <div className="fm-container">
        <div className="fm-industry-benefits-heading">
          <h2>
            Why <span>Industry-Specific</span> Websites Matter
          </h2>

          <p>
            A great website isn't just visually appealing—it understands your
            audience, communicates your value, and helps your business stand out
            in a competitive market.
          </p>
        </div>

        <div className="fm-industry-benefits-grid">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="fm-industry-benefit-card">
                <div className="fm-industry-benefit-icon">
                  <Icon size={26} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
