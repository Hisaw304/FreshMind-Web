import RelatedPosts from "../components/blog/RelatedPosts";
import BlogArticle from "../components/blog/BlogArticle";
import BlogAuthor from "../components/blog/BlogAuthor";
import ShareArticle from "../components/blog/ShareArticle";
import FooterCTA from "../components/FooterCTA";

export default function BlogPost() {
  return (
    <>
      <BlogArticle />

      <ShareArticle />

      <BlogAuthor />
      <RelatedPosts />
      <FooterCTA />
    </>
  );
}
