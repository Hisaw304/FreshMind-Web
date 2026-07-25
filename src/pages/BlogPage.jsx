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
      <BlogHero />

      <FeaturedPost />

      <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <BlogCategories />

      <BlogGrid />

      <FooterCTA />
    </div>
  );
}
