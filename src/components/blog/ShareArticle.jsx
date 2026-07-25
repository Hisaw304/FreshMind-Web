import { Facebook, Linkedin, Twitter, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

export default function ShareArticle() {
  const [copied, setCopied] = useState(false);

  const pageUrl = window.location.href;

  const encodedUrl = encodeURIComponent(pageUrl);

  const encodedTitle = encodeURIComponent(document.title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);

      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="fm-share-article">
      <div className="fm-container">
        <div className="fm-share-wrapper">
          <div className="fm-share-left">
            <h3>Share this article</h3>

            <p>
              Found this article helpful? Share it with your friends,
              colleagues, or team.
            </p>
          </div>

          <div className="fm-share-buttons">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fm-share-btn"
            >
              <Facebook size={18} />
              Facebook
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fm-share-btn"
            >
              <Twitter size={18} />X
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fm-share-btn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <button onClick={copyLink} className="fm-share-btn fm-copy-btn">
              <LinkIcon size={18} />

              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
