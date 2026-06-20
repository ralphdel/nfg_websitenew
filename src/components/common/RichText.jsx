function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function normalizeStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => (typeof item === "string" ? item.trim() : "")).filter(Boolean);
}

function isPortableTextBlock(value) {
  return value?._type === "block" && hasItems(value.children);
}

function getMarkKey(mark) {
  return typeof mark === "string" ? mark : "";
}

function applyMarks(text, marks = [], keyPrefix = "mark") {
  return marks.reduce((content, mark, index) => {
    const markKey = getMarkKey(mark);
    const key = `${keyPrefix}-${markKey || index}`;

    if (markKey === "strong") return <strong key={key}>{content}</strong>;
    if (markKey === "em") return <em key={key}>{content}</em>;
    if (markKey === "highlight") return <span key={key} className="text-highlight">{content}</span>;

    return <span key={key}>{content}</span>;
  }, text);
}

function renderBlockChildren(children = [], blockIndex = 0) {
  return children.map((child, childIndex) => {
    if (child?._type !== "span") return null;

    const text = child.text || "";
    const marks = Array.isArray(child.marks) ? child.marks : [];
    const content = marks.length ? applyMarks(text, marks, `block-${blockIndex}-child-${childIndex}`) : text;

    return <span key={child._key || `child-${blockIndex}-${childIndex}`}>{content}</span>;
  });
}

export function RichText({ value, className = "", paragraphClassName = "" }) {
  const paragraphs = normalizeStringArray(value);
  const classes = className ? `rich-text ${className}` : "rich-text";
  const paragraphClasses = paragraphClassName ? `rich-text-paragraph ${paragraphClassName}` : "rich-text-paragraph";

  if (typeof value === "string" && value.trim()) {
    return (
      <div className={classes}>
        <p className={paragraphClasses}>{value}</p>
      </div>
    );
  }

  if (paragraphs.length) {
    return (
      <div className={classes}>
        {paragraphs.map((paragraph, index) => (
          <p className={paragraphClasses} key={`paragraph-${index}`}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (!hasItems(value)) return null;

  const blocks = value.filter(isPortableTextBlock);
  if (!blocks.length) return null;

  return (
    <div className={classes}>
      {blocks.map((block, index) => (
        <p className={paragraphClasses} key={block._key || `block-${index}`}>
          {renderBlockChildren(block.children, index)}
        </p>
      ))}
    </div>
  );
}
