import { trustBadges } from "@/data/siteContent";

export function TrustBar({ badges = trustBadges }) {
  const visibleBadges = badges.slice(0, 7);

  return (
    <section className="trust-bar" aria-label="Trust signals">
      <div className="container trust-list">
        {visibleBadges.map((badge) => (
          <span key={badge.title} title={badge.detail}>
            {badge.title}
            {badge.verificationStatus === "pending" ? <small>Pending verification</small> : null}
          </span>
        ))}
      </div>
    </section>
  );
}
