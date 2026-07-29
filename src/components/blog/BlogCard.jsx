import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { urlFor } from "../../lib/sanity";

export default function BlogCard({ article }) {
  return (
    <Link to={`/blog/${article.slug.current}`} className="fm-blog-card">
      <img
        src={urlFor(article.featuredImage).width(900).url()}
        alt={article.title}
        className="fm-blog-image"
      />

      <div className="fm-blog-overlay" />

      <span className="fm-blog-category">{article.category}</span>

      <div className="fm-blog-content">
        <h3>{article.title}</h3>

        {/* <p>{article.excerpt}</p> */}

        <div className="fm-blog-meta">
          <span>
            By <strong>{article.author}</strong>
          </span>

          <span>
            <Calendar size={14} />
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="fm-blog-reading">
          <Clock size={14} />
          <span>{article.readingTime}</span>
        </div>

        <div className="fm-blog-readmore">
          Read Article
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
