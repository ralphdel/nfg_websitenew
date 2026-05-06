import { trustBadges } from "@/data/siteContent";

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trust signals">
      <div className="container trust-list">
        {trustBadges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>
    </section>
  );
}
