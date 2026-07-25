import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../lib/sanity";

const query = `*[_type == "post" && featured == true] | order(publishedAt desc)[0]{
  _id,
  title,
  excerpt,
  body,
  slug,
  featuredImage,
  publishedAt,
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

export default function FeaturedPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        if (!data) return;

        setPost({
          ...data,
          readingTime: getReadingTime(data.body),
        });
      })
      .catch(console.error);
  }, []);

  if (!post) return null;

  return (
    <section className="fm-featured-post">
      <div className="fm-container">
        <div className="fm-featured-wrapper">
          {/* IMAGE */}

          <div className="fm-featured-image">
            <img
              src={urlFor(post.featuredImage).width(1200).url()}
              alt={post.title}
            />

            <span className="fm-featured-badge">{post.category}</span>
          </div>

          {/* CONTENT */}

          <div className="fm-featured-content">
            <span className="fm-section-tag">Editor's Pick</span>

            <h2>{post.title}</h2>

            <p>{post.excerpt}</p>

            <div className="fm-featured-meta">
              <span>
                <Calendar size={16} />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <span>
                <Clock size={16} />
                {post.readingTime}
              </span>

              <span>
                By <strong>{post.author}</strong>
              </span>
            </div>

            <Link to={`/blog/${post.slug.current}`} className="fm-featured-btn">
              Read Full Article
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
