import Link from "next/link";
import { footerNavigation, siteSettings, trustBadges } from "@/data/siteContent";

export function Footer({
  footerNavigation: footerNavigationProp = footerNavigation,
  siteSettings: siteSettingsProp = siteSettings,
  trustBadges: trustBadgesProp = trustBadges
}) {
  const navigation = footerNavigationProp;
  const settings = siteSettingsProp;
  const badges = trustBadgesProp;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-mark">{settings.shortName}</span>
            <strong>{settings.siteTitle}</strong>
          </div>
          <p>{settings.footerText}</p>
          <div className="footer-contact">
            <Link href={`mailto:${settings.salesEmail || settings.primaryEmail}`}>{settings.salesEmail || settings.primaryEmail}</Link>
            <Link href={`tel:${settings.primaryPhone.replace(/\s/g, "")}`}>{settings.primaryPhone}</Link>
            <span>{settings.address}</span>
          </div>
        </div>

        {navigation.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer-proof">
        {badges.slice(0, 6).map((badge) => (
          <span key={badge.title}>{badge.title}</span>
        ))}
      </div>

      <div className="container footer-bottom">
        <span>Copyright 2026 Nigerian Foundries Group Limited. All rights reserved.</span>
        <span>
          <Link href="/privacy">Privacy policy</Link> <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
