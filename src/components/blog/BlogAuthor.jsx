import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { User, ArrowRight } from "lucide-react";

import { client, urlFor } from "../../lib/sanity";

const query = `*[_type == "post" && slug.current == $slug][0]{
  "author": author->{
    name,
    bio,
    image
  }
}`;

export default function BlogAuthor() {
  const { slug } = useParams();

  const [author, setAuthor] = useState(null);

  useEffect(() => {
    client
      .fetch(query, { slug })
      .then((data) => {
        if (data?.author) {
          setAuthor(data.author);
        }
      })
      .catch(console.error);
  }, [slug]);

  if (!author) return null;

  return (
    <section className="fm-blog-author">
      <div className="fm-container">
        <div className="fm-blog-author-card">
          {/* IMAGE */}

          <div className="fm-blog-author-image">
            {author.image ? (
              <img
                src={urlFor(author.image).width(300).height(300).url()}
                alt={author.name}
              />
            ) : (
              <div className="fm-blog-author-placeholder">
                <User size={50} />
              </div>
            )}
          </div>

          {/* CONTENT */}

          <div className="fm-blog-author-content">
            <span className="fm-section-tag">About the Author</span>

            <h3>{author.name}</h3>

            <p>
              {author.bio ||
                "FreshMind creates educational content focused on web design, development, SEO, branding, and digital marketing to help businesses grow online."}
            </p>

            <Link to="/blog" className="fm-blog-author-link">
              View All Articles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
