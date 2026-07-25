import { Search } from "lucide-react";

export default function BlogSearch({ searchTerm, setSearchTerm }) {
  return (
    <section className="fm-blog-search-section">
      <div className="fm-container">
        <div className="fm-blog-search-wrapper">
          <div className="fm-blog-search-content">
            <span className="fm-section-tag">Search Articles</span>

            <h2>
              Find the Right <span>Insights</span>
            </h2>

            <p>
              Browse expert articles on web design, website development, SEO,
              digital marketing, branding, and business growth.
            </p>
          </div>

          <div className="fm-blog-search-box">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search articles..."
              className="fm-blog-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
