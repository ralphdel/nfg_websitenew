import Link from "next/link";

export function Button({ href = "#contact", children, variant = "primary", icon: Icon, className = "" }) {
  const classes = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");

  return (
    <Link className={classes} href={href}>
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      <span>{children}</span>
    </Link>
  );
}
