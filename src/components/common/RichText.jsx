function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function normalizeStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => (typeof item === "string" ? item.trim() : "")).filter(Boolean);
}

function normalizeBlockChildren(children) {
  if (!Array.isArray(children)) return [];

  return children.filter((child) => {
    if (child?._type !== "span") return false;
    return typeof child.text === "string" && child.text.trim();
  });
}

function isPortableTextBlock(value) {
  return value?._type === "block" && normalizeBlockChildren(value.children).length > 0;
}

export function hasMeaningfulPortableText(value) {
  if (!Array.isArray(value) || !value.length) return false;
  return value.some((block) => isPortableTextBlock(block));
}

export function normalizeMeaningfulPortableText(value) {
  if (!hasMeaningfulPortableText(value)) return [];
  return value
    .filter((block) => block?._type === "block")
    .map((block) => ({
      ...block,
      children: normalizeBlockChildren(block.children)
    }))
    .filter((block) => block.children.length > 0);
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
  return normalizeBlockChildren(children).map((child, childIndex) => {
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

  const blocks = normalizeMeaningfulPortableText(value);
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
