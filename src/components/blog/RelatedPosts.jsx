import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

import { client, urlFor } from "../../lib/sanity";
import { getReadingTime } from "../../utils/readingTime";

const query = `*[_type == "post" && slug.current == $slug][0]{
  "category": category->title
}`;

export default function RelatedPosts() {
  const { slug } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const current = await client.fetch(query, { slug });

        if (!current?.category) return;

        const related = await client.fetch(
          `*[
            _type == "post" &&
            slug.current != $slug &&
            category->title == $category
          ] | order(publishedAt desc)[0...3]{
            _id,
            title,
            slug,
            excerpt,
            body,
            featuredImage,
            publishedAt,
            "category": category->title
          }`,
          {
            slug,
            category: current.category,
          }
        );

        const formatted = related.map((post) => ({
          ...post,
          readingTime: getReadingTime(post.body),
        }));

        setPosts(formatted);
      } catch (err) {
        console.error(err);
      }
    }

    loadPosts();
  }, [slug]);

  if (!posts.length) return null;

  return (
    <section className="fm-related-posts">
      <div className="fm-container">
        <div className="fm-related-header">
          <span className="fm-section-tag">Continue Reading</span>

          <h2>
            Related <span>Articles</span>
          </h2>

          <p>
            Discover more insights, guides, and practical resources from the
            FreshMind blog.
          </p>
        </div>

        <div className="fm-related-grid">
          {posts.map((post) => (
            <article key={post._id} className="fm-related-card">
              <Link
                to={`/blog/${post.slug.current}`}
                className="fm-related-image"
              >
                <img
                  src={urlFor(post.featuredImage).width(700).height(450).url()}
                  alt={post.title}
                />

                <span className="fm-related-category">{post.category}</span>
              </Link>

              <div className="fm-related-content">
                <div className="fm-related-meta">
                  <span>
                    <Calendar size={15} />

                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>

                  <span>{post.readingTime}</span>
                </div>

                <h3>
                  <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
                </h3>

                <p>{post.excerpt}</p>

                <Link
                  to={`/blog/${post.slug.current}`}
                  className="fm-related-link"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
