import { useEffect, useState } from "react";
import { Layers } from "lucide-react";
import { client } from "../../lib/sanity";

const query = `*[_type == "category"] | order(title asc){
  _id,
  title,
  "count": count(*[_type == "post" && references(^._id)])
}`;

export default function BlogCategories({ selectedCategory, onCategoryChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        const total = data.reduce((sum, cat) => sum + cat.count, 0);

        setCategories([
          {
            _id: "all",
            title: "All Articles",
            count: total,
          },
          ...data,
        ]);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="fm-blog-categories-section">
      <div className="fm-container">
        <div className="fm-blog-categories-header">
          <span className="fm-section-tag">Browse Topics</span>

          <h2>
            Explore by <span>Category</span>
          </h2>

          <p>
            Whether you're looking for design inspiration, SEO strategies,
            website development, or digital marketing insights, explore our
            articles by category.
          </p>
        </div>

        <div className="fm-blog-categories-grid">
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => {
                onCategoryChange(
                  category._id === "all" ? "all" : category.title
                );
              }}
              className={`fm-blog-category-card ${
                selectedCategory ===
                (category._id === "all" ? "all" : category.title)
                  ? "active"
                  : ""
              }`}
            >
              <div className="fm-blog-category-icon">
                <Layers size={22} />
              </div>

              <h3>{category.title}</h3>

              <span>
                {category.count} {category.count === 1 ? "Article" : "Articles"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
