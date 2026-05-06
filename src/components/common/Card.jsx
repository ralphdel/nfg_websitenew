export function Card({ title, body, icon: Icon, label, children, className = "" }) {
  return (
    <article className={`card ${className}`}>
      {Icon ? (
        <div className="card-icon">
          <Icon size={24} aria-hidden="true" />
        </div>
      ) : null}
      {label ? <div className="card-label">{label}</div> : null}
      <h3>{title}</h3>
      {body ? <p>{body}</p> : null}
      {children}
    </article>
  );
}
