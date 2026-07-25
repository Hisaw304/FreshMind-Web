import { useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import { client } from "../../lib/sanity";

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

export default function BlogGrid({ searchTerm = "" }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const filteredArticles = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return articles.filter((article) => {
      return (
        article.title?.toLowerCase().includes(search) ||
        article.excerpt?.toLowerCase().includes(search) ||
        article.category?.toLowerCase().includes(search) ||
        article.author?.toLowerCase().includes(search)
      );
    });
  }, [articles, searchTerm]);

  return (
    <section id="latest-posts" className="fm-blog-grid-section">
      <div className="fm-container">
        <div className="fm-blog-grid-header">
          <span className="fm-section-tag">Latest Articles</span>

          <h2>
            Fresh <span>Insights & Resources</span>
          </h2>

          <p>
            Stay informed with expert articles covering web design, development,
            SEO, digital marketing, and practical strategies to help your
            business succeed online.
          </p>
        </div>

        {loading ? (
          <p>Loading articles...</p>
        ) : filteredArticles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          <div className="fm-blog-grid">
            {filteredArticles.map((article) => (
              <BlogCard key={article._id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
