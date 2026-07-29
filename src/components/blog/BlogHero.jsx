import { Link } from "react-router-dom";
import blogHero from "../../assets/blog.avif";

export default function BlogHero() {
  return (
    <section
      className="fm-blog-hero"
      style={{
        backgroundImage: `url(${blogHero})`,
      }}
    >
      <div className="fm-blog-hero-overlay" />

      <div className="fm-container">
        <div className="fm-blog-hero-content">
          <span className="fm-blog-tag">FreshMind Blog</span>

          <h1>
            Insights That Help Your <span>Business Grow Online</span>
          </h1>

          <p>
            Explore expert articles on web design, website development, SEO,
            digital marketing, branding, and business growth. Learn practical
            strategies that help you attract more customers, improve your online
            presence, and build a website that delivers real results.
          </p>

          <div className="fm-blog-hero-actions">
            <Link to="/contact" className="fm-blog-primary-btn">
              Start Your Project
            </Link>

            <a href="#latest-posts" className="fm-blog-secondary-btn">
              Read Articles
            </a>
          </div>

          {/* <div className="fm-blog-stats">
            <div className="fm-blog-stat">
              <h3>100+</h3>
              <span>Expert Articles</span>
            </div>

            <div className="fm-blog-stat">
              <h3>6</h3>
              <span>Categories</span>
            </div>

            <div className="fm-blog-stat">
              <h3>Weekly</h3>
              <span>Fresh Content</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
