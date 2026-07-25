export function getReadingTime(body) {
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
