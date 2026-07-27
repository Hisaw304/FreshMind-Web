import { useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import { client } from "../../lib/sanity";

const POSTS_PER_PAGE = 6;

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
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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

  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);

  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

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
          <p className="article-not-found">Loading articles...</p>
        ) : filteredArticles.length === 0 ? (
          <p className="article-not-found">No articles found.</p>
        ) : (
          <>
            <div className="fm-blog-grid">
              {currentArticles.map((article) => (
                <BlogCard key={article._id} article={article} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="fm-blog-pagination">
                <button
                  className="fm-pagination-btn"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => page - 1)}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`fm-pagination-number ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="fm-pagination-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((page) => page + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
