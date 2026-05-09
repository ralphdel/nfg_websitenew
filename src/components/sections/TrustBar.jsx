import { trustBadges } from "@/data/siteContent";

export function TrustBar({ badges = trustBadges }) {
  return (
    <section className="trust-bar" aria-label="Trust signals">
      <div className="container trust-list">
        {badges.map((badge) => (
          <span key={badge.title} title={badge.detail}>
            {badge.title}
            {badge.verificationStatus === "pending" ? <small>Pending verification</small> : null}
          </span>
        ))}
      </div>
    </section>
  );
}
