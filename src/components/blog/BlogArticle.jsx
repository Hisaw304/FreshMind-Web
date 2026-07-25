import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

import { client, urlFor } from "../../lib/sanity";
import { getReadingTime } from "../../utils/readingTime";

const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  body,
  featuredImage,
  publishedAt,
  seoTitle,
  seoDescription,
  "category": category->title,
  "author": author->name,
  "authorImage": author->image,
  "authorBio": author->bio
}`;

const portableComponents = {
  block: {
    h1: ({ children }) => <h1 className="fm-article-h1">{children}</h1>,

    h2: ({ children }) => <h2 className="fm-article-h2">{children}</h2>,

    h3: ({ children }) => <h3 className="fm-article-h3">{children}</h3>,

    normal: ({ children }) => <p className="fm-article-p">{children}</p>,

    blockquote: ({ children }) => (
      <blockquote className="fm-article-quote">{children}</blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul className="fm-article-list">{children}</ul>,

    number: ({ children }) => (
      <ol className="fm-article-number-list">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong>{children}</strong>,

    em: ({ children }) => <em>{children}</em>,

    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default function BlogArticle() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(query, { slug })
      .then((data) => {
        if (!data) return;

        setPost({
          ...data,
          readingTime: getReadingTime(data.body),
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  // if (loading) {
  //   return (
  //     <section className="fm-blog-article">
  //       <div className="fm-container">
  //         <p>Loading article...</p>
  //       </div>
  //     </section>
  //   );
  // }

  if (!post) {
    return (
      <section className="fm-blog-article">
        <div className="fm-container">
          <h2>Article not found.</h2>

          <Link to="/blog" className="fm-back-link">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.seoTitle || `${post.title} | FreshMind Web`}</title>

        <meta
          name="description"
          content={post.seoDescription || post.excerpt}
        />

        <link
          rel="canonical"
          href={`https://freshmindweb.online/blog/${slug}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />

        <meta property="og:title" content={post.seoTitle || post.title} />

        <meta
          property="og:description"
          content={post.seoDescription || post.excerpt}
        />

        <meta
          property="og:url"
          content={`https://freshmindweb.online/blog/${slug}`}
        />

        <meta
          property="og:image"
          content={urlFor(post.featuredImage).width(1200).url()}
        />

        <meta property="og:image:alt" content={post.title} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={post.seoTitle || post.title} />

        <meta
          name="twitter:description"
          content={post.seoDescription || post.excerpt}
        />

        <meta
          name="twitter:image"
          content={urlFor(post.featuredImage).width(1200).url()}
        />
      </Helmet>

      <section className="fm-blog-article">
        <div className="fm-container">
          <div className="fm-article-top">
            <Link to="/blog" className="fm-back-link">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <span className="fm-article-category">{post.category}</span>
          </div>

          <h1 className="fm-article-title">{post.title}</h1>

          <p className="fm-article-excerpt">{post.excerpt}</p>

          <div className="fm-article-meta">
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

          <div className="fm-article-image">
            <img
              src={urlFor(post.featuredImage).width(1800).url()}
              alt={post.title}
            />
          </div>

          <article className="fm-article-body">
            <PortableText value={post.body} components={portableComponents} />
          </article>
        </div>
      </section>
    </>
  );
}
