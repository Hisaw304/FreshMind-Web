import { parseMarkdown } from "../../utils/markdown";

export default function MarkdownMessage({ text }) {
  return (
    <div
      className="fm-markdown"
      dangerouslySetInnerHTML={{
        __html: parseMarkdown(text),
      }}
    />
  );
}
