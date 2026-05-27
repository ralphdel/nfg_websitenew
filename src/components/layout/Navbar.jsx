"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/common/Button";
import { navItems, siteSettings } from "@/data/siteContent";

export function Navbar({ navItems: navItemsProp = navItems, siteSettings: siteSettingsProp = siteSettings }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileSection, setMobileSection] = useState(navItemsProp[0]?.label || "Solutions");
  const [scrolled, setScrolled] = useState(false);
  const navigation = navItemsProp;
  const settings = siteSettingsProp;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setActiveMenu(null);
  };

  const onMenuKeyDown = (event) => {
    if (event.key === "Escape") {
      setActiveMenu(null);
      event.currentTarget.querySelector(".nav-main-link")?.focus();
    }
  };

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={close}>
          <span className="brand-mark">{settings.shortName}</span>
          <span className="brand-copy">
            <strong>{settings.siteTitle}</strong>
            <small>Integrated industrial manufacturing</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div
              className="nav-menu-item"
              key={item.label}
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
              onFocus={() => setActiveMenu(item.label)}
              onKeyDown={onMenuKeyDown}
            >
              <div className="nav-trigger">
                <Link className="nav-main-link" href={item.href} onClick={close}>
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="nav-chevron"
                  aria-label={`Open ${item.label} menu`}
                  aria-expanded={activeMenu === item.label}
                  aria-controls={`mega-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setActiveMenu((current) => (current === item.label ? null : item.label))}
                >
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
              </div>
              <div
                className={`mega-menu ${activeMenu === item.label ? "is-open" : ""}`}
                id={`mega-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="mega-intro">
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                  <Link href={item.href} onClick={close}>
                    View overview
                  </Link>
                </div>
                <div className="mega-links">
                  {item.items.map((child) => (
                    <Link className={child.featured ? "is-featured" : ""} href={child.href} key={child.href} onClick={close}>
                      <strong>{child.label}</strong>
                      <span>{child.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <Button href={settings.globalCta?.href || "/rfq"} variant="primary">{settings.globalCta?.label || "Send Part / Drawing"}</Button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => {
            const expanded = mobileSection === item.label;
            return (
              <div className="mobile-nav-group" key={item.label}>
                <div className="mobile-nav-heading">
                  <Link href={item.href} onClick={close}>{item.label}</Link>
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} links`}
                    aria-expanded={expanded}
                    onClick={() => setMobileSection((current) => (current === item.label ? "" : item.label))}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                </div>
                <div className={`mobile-nav-links ${expanded ? "is-open" : ""}`}>
                  {item.items.map((child) => (
                    <Link className={child.featured ? "is-featured" : ""} href={child.href} key={child.href} onClick={close}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <Link href={settings.globalCta?.href || "/rfq"} className="mobile-cta" onClick={close}>
            {settings.globalCta?.label || "Send Part / Drawing"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
