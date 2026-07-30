import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    slug: "real-estate",
    industry: "Real Estate",
    title: "Helping a Real Estate Agency Generate More Qualified Leads",
    description:
      "Designed a modern property website focused on lead generation, faster property discovery, and improved customer trust.",
    results: [
      "Modern property showcase",
      "Lead capture forms",
      "Mobile-first experience",
    ],
  },
  {
    slug: "law-firms",
    industry: "Law Firm",
    title: "Building a Professional Website That Inspires Client Confidence",
    description:
      "Created a clean, trustworthy website with clear practice areas, consultation booking, and improved user experience.",
    results: [
      "Consultation booking",
      "Practice area pages",
      "Professional branding",
    ],
  },
  {
    slug: "restaurant",
    industry: "Restaurant",
    title: "Helping a Restaurant Increase Online Reservations",
    description:
      "Designed a conversion-focused website featuring an interactive menu, reservations, and strong local SEO foundations.",
    results: ["Online reservations", "Digital menu", "Local SEO ready"],
  },
];

export default function IndustryCaseStudies() {
  return (
    <section className="fm-case-studies">
      <div className="fm-container">
        <div className="fm-case-heading">
          <h2>
            Featured <span>Case Studies</span>
          </h2>

          <p>
            Every project is built around business goals. Explore how our
            tailored solutions help businesses improve their online presence,
            attract customers, and grow with confidence.
          </p>
        </div>

        <div className="fm-case-grid">
          {caseStudies.map((study) => (
            <article key={study.title} className="fm-case-card">
              <span className="fm-case-tag">{study.industry}</span>

              <h3>{study.title}</h3>

              <p>{study.description}</p>

              <ul className="fm-case-results">
                {study.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              <Link to={`/industries/${study.slug}`} className="fm-case-link">
                View Portfolio
                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
