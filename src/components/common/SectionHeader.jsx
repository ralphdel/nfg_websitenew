export function SectionHeader({ eyebrow, title, body, align = "center", inverse = false }) {
  return (
    <div className={`section-header section-header-${align} ${inverse ? "is-inverse" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
