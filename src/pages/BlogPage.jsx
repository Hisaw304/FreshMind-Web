import { Helmet } from "react-helmet-async";
import { useState } from "react";
import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogSearch from "../components/blog/BlogSearch";
import BlogCategories from "../components/blog/BlogCategories";
import BlogGrid from "../components/blog/BlogGrid";
import FooterCTA from "../components/FooterCTA";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="fm-blog-page">
      <Helmet>
        <title>
          FreshMind Blog | Web Design, SEO, Development & Business Growth
        </title>

        <meta
          name="description"
          content="Explore expert articles from FreshMind on web design, web development, SEO, branding, digital marketing, and business growth. Practical insights to help your business succeed online."
        />

        <meta
          name="keywords"
          content="web design blog, web development blog, SEO tips, React development, business website, digital marketing, branding, website optimization"
        />

        <link rel="canonical" href="https://freshmindweb.online/blog" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreshMind Web" />
        <meta
          property="og:title"
          content="FreshMind Blog | Web Design, SEO & Business Growth"
        />
        <meta
          property="og:description"
          content="Read expert articles covering web design, web development, SEO, branding, and digital marketing."
        />
        <meta property="og:url" content="https://freshmindweb.online/blog" />
        <meta
          property="og:image"
          content="https://freshmindweb.online/images/blog-og.jpg"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FreshMind Blog | Web Design, SEO & Business Growth"
        />
        <meta
          name="twitter:description"
          content="Expert articles on web design, SEO, web development, branding and business growth."
        />
        <meta
          name="twitter:image"
          content="https://freshmindweb.online/images/blog-og.jpg"
        />
      </Helmet>
      <BlogHero />

      <FeaturedPost />

      <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <BlogCategories />

      <BlogGrid searchTerm={searchTerm} />

      <FooterCTA />
    </div>
  );
}
