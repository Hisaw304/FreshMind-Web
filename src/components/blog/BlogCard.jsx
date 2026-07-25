import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { urlFor } from "../../lib/sanity";
export default function BlogCard({ article }) {
  return (
    <article className="fm-blog-card">
      {/* IMAGE */}
      <div className="fm-blog-card-image">
        <Link to={`/blog/${article.slug.current}`}>
          <img
            src={urlFor(article.featuredImage).width(800).url()}
            alt={article.title}
          />
        </Link>

        <span className="fm-blog-category-badge">{article.category}</span>
      </div>

      {/* CONTENT */}
      <div className="fm-blog-card-content">
        {/* META */}
        <div className="fm-blog-card-meta">
          <span>
            <Calendar size={15} />
            {article.date}
          </span>

          <span>
            <Clock size={15} />
            {article.readingTime}
          </span>
        </div>

        {/* TITLE */}
        <h3>
          <Link to={article.slug}>{article.title}</Link>
        </h3>

        {/* EXCERPT */}
        <p>{article.excerpt}</p>

        {/* FOOTER */}
        <div className="fm-blog-card-footer">
          <span className="fm-blog-author">
            By <strong>{article.author}</strong>
          </span>

          <Link to={article.slug} className="fm-blog-read-more">
            Read More
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}
