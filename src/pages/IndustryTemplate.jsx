import { Navigate, useParams } from "react-router-dom";

import industriesData from "../data/industriesData";

import IndustryHero from "../components/IndustryHero";
import IndustryChallenges from "../components/IndustryChallenges";
import IndustryFeatures from "../components/IndustryFeatures";
import IndustryCaseStudy from "../components/IndustryCaseStudy";
import IndustryFAQ from "../components/IndustryFAQ";
import Testimonials from "../components/Testimonials";
import FooterCTA from "../components/FooterCTA";

export default function IndustryTemplate() {
  const { slug } = useParams();

  const industry = industriesData[slug];

  // Redirect back to Industries page if slug doesn't exist
  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="fm-industry-page">
      {/* Hero */}
      <IndustryHero industry={industry} />

      {/* Challenges */}
      <IndustryChallenges industry={industry} />

      {/* Features */}
      <IndustryFeatures industry={industry} />

      {/* Case Study */}
      <IndustryCaseStudy industry={industry} />

      {/* FAQ */}
      <IndustryFAQ industry={industry} />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <FooterCTA />
    </div>
  );
}
