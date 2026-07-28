// src/utils/markdown.js

/**
 * Escapes HTML to prevent XSS.
 */
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Converts chatbot markdown into HTML.
 */
export function parseMarkdown(content = "") {
  let html = escapeHtml(content);

  /* -----------------------------
     Code Blocks
  ----------------------------- */

  html = html.replace(
    /```([\s\S]*?)```/g,
    (_, code) => `
      <pre class="fm-md-code">
        <code>${code.trim()}</code>
      </pre>
    `
  );

  /* -----------------------------
     Inline Code
  ----------------------------- */

  html = html.replace(/`([^`]+)`/g, `<code class="fm-md-inline">$1</code>`);

  /* -----------------------------
     Headers
  ----------------------------- */

  html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");

  /* -----------------------------
     Bold
  ----------------------------- */

  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  /* -----------------------------
     Italics
  ----------------------------- */

  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  /* -----------------------------
     Links
  ----------------------------- */

  html = html.replace(
    /\[(.*?)\]\((.*?)\)/g,
    `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
  );

  /* -----------------------------
     Bullet Lists
  ----------------------------- */

  html = html.replace(/(?:^- .*(?:\n|$))+?/gm, (match) => {
    const items = match
      .trim()
      .split("\n")
      .map((item) => `<li>${item.replace(/^- /, "")}</li>`)
      .join("");

    return `<ul>${items}</ul>`;
  });

  /* -----------------------------
     Numbered Lists
  ----------------------------- */

  html = html.replace(/(?:^\d+\. .*(?:\n|$))+?/gm, (match) => {
    const items = match
      .trim()
      .split("\n")
      .map((item) => `<li>${item.replace(/^\d+\.\s/, "")}</li>`)
      .join("");

    return `<ol>${items}</ol>`;
  });

  /* -----------------------------
     Line Breaks
  ----------------------------- */

  html = html.replace(/\n/g, "<br>");

  return html;
}
