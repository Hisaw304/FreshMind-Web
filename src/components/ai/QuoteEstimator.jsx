import { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";

const websiteTypes = [
  "Business Website",
  "Real Estate Website",
  "Law Firm Website",
  "Healthcare Website",
  "Restaurant Website",
  "Construction Website",
  "Startup Website",
  "E-commerce Website",
  "Custom Web Application",
];

const pageOptions = ["1-5 Pages", "6-10 Pages", "11-20 Pages", "20+ Pages"];

export default function QuoteEstimator({ onBack, onContinue }) {
  const [websiteType, setWebsiteType] = useState("");
  const [adminDashboard, setAdminDashboard] = useState(null);
  const [pages, setPages] = useState("");
  const [estimate, setEstimate] = useState(null);

  const calculateQuote = () => {
    let min = 1000;
    let max = 1800;

    switch (websiteType) {
      case "Business Website":
        min = 1000;
        max = 1800;
        break;

      case "Real Estate Website":
      case "Law Firm Website":
      case "Healthcare Website":
      case "Restaurant Website":
      case "Construction Website":
      case "Startup Website":
        min = 2000;
        max = 3000;
        break;

      case "E-commerce Website":
        min = 2500;
        max = 4000;
        break;

      case "Custom Web Application":
        min = 3500;
        max = 6000;
        break;

      default:
        min = 1000;
        max = 1800;
        break;
    }

    // Admin Dashboard
    if (adminDashboard) {
      min = Math.max(min, 3500);
      max = Math.max(max, 6000);
    }

    // Additional pages
    switch (pages) {
      case "6-10 Pages":
        min += 200;
        max += 400;
        break;

      case "11-20 Pages":
        min += 500;
        max += 800;
        break;

      case "20+ Pages":
        min += 900;
        max += 1400;
        break;

      default:
        break;
    }

    setEstimate({
      min,
      max,
    });
  };

  return (
    <div className="fm-quote">
      {onBack && (
        <button className="fm-ai-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          Back to Chat
        </button>
      )}
      <div className="fm-quote-header">
        <Calculator size={26} />

        <div>
          <h3>Project Cost Estimator</h3>

          <p>Answer a few quick questions to receive an instant estimate.</p>
        </div>
      </div>

      {/* WEBSITE */}

      <div className="fm-quote-group">
        <label>What type of website do you need?</label>

        <div className="fm-quote-options">
          {websiteTypes.map((item) => (
            <button
              key={item}
              className={websiteType === item ? "active" : ""}
              onClick={() => setWebsiteType(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ADMIN */}

      <div className="fm-quote-group">
        <label>Do you need an Admin Dashboard?</label>

        <div className="fm-quote-options">
          <button
            className={adminDashboard === true ? "active" : ""}
            onClick={() => setAdminDashboard(true)}
          >
            Yes
          </button>

          <button
            className={adminDashboard === false ? "active" : ""}
            onClick={() => setAdminDashboard(false)}
          >
            No
          </button>
        </div>
      </div>

      {/* PAGES */}

      <div className="fm-quote-group">
        <label>Approximately how many pages?</label>

        <select value={pages} onChange={(e) => setPages(e.target.value)}>
          <option value="">Select Pages</option>

          {pageOptions.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>

      <button
        className="fm-quote-btn"
        disabled={!websiteType || adminDashboard === null || !pages}
        onClick={calculateQuote}
      >
        Calculate Estimate
        <ArrowRight size={18} />
      </button>

      {estimate && (
        <div className="fm-quote-result">
          <CheckCircle2 size={40} />

          <h3>Estimated Project Cost</h3>

          <h2>
            ${estimate.min.toLocaleString()} — ${estimate.max.toLocaleString()}
          </h2>

          <ul>
            <li>✔ Responsive Design</li>

            <li>✔ Mobile Friendly</li>

            <li>✔ SEO Optimized</li>

            <li>✔ Fast Performance</li>

            <li>✔ Contact Forms</li>

            {adminDashboard && <li>✔ Custom Admin Dashboard</li>}
          </ul>

          <p>
            Estimated investment based on your selections. Final pricing depends
            on your project requirements, features, integrations, and overall
            scope. We'll provide a detailed proposal after discussing your
            goals.
          </p>

          <button
            className="fm-quote-btn"
            onClick={() => onContinue?.(estimate)}
          >
            Continue to Request Quote
          </button>
        </div>
      )}
    </div>
  );
}
