import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { client } from "../lib/sanity";
import BlogCard from "./blog/BlogCard";

const query = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  featuredImage,
  "category": category->title,
  "author": author->name
}`;

function getReadingTime(body) {
  if (!body) return "1 min read";

  const text = body
    .map((block) => {
      if (block._type !== "block") return "";

      return block.children?.map((child) => child.text).join(" ") || "";
    })
    .join(" ");

  const words = text.trim().split(/\s+/).filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

export default function BlogHomeGrid() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        const formatted = data.map((article) => ({
          ...article,
          readingTime: getReadingTime(article.body),
        }));

        setArticles(formatted);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="fm-blog-grid-section">
      <div className="fm-container">
        <div className="fm-blog-grid-header">
          <span className="fm-section-tag">Latest Articles</span>

          <h2>
            Fresh <span>Insights & Resources</span>
          </h2>

          <p>
            Stay informed with expert articles covering web design, development,
            SEO, digital marketing, AI, and practical strategies to help your
            business succeed online.
          </p>
        </div>

        {loading ? (
          <p className="article-not-found">Loading articles...</p>
        ) : (
          <>
            <div ref={sliderRef} className="fm-blog-home-slider fm-blog-grid">
              {articles.map((article) => (
                <div key={article._id} className="fm-blog-home-slide">
                  <BlogCard article={article} />
                </div>
              ))}
            </div>

            <div className="fm-blog-home-controls">
              <button className="fm-blog-home-arrow" onClick={scrollLeft}>
                <ChevronLeft size={20} />
              </button>

              <button className="fm-blog-home-arrow" onClick={scrollRight}>
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="fm-blog-home-footer">
              <Link to="/blog" className="fm-blog-home-viewall">
                View All Articles
                <ArrowRight size={18} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
