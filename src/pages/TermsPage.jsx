import TermsContent from "../components/TermsContent";

export default function TermsPage() {
  return (
    <div className="fm-terms-page">
      {/* HERO */}
      <section className="fm-about-hero">
        <div className="fm-about-hero-overlay" />

        <div className="fm-about-hero-container">
          <h2>
            Terms & <span>Conditions</span>
          </h2>

          <p>
            Please read these Terms and Conditions carefully before using our
            website or engaging our web design and development services.
          </p>

          <a href="/contact" className="fm-about-hero-btn">
            Contact Us
          </a>
        </div>
      </section>

      <TermsContent />
    </div>
  );
}
