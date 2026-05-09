import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteSettings } from "@/data/siteContent";
import { getLayoutContent, getSiteSettings } from "@/lib/content";

export const revalidate = 60;

export async function generateMetadata() {
  const settings = await getSiteSettings();
  const title = settings.defaultSeoTitle || siteSettings.defaultSeoTitle;
  const description = settings.defaultSeoDescription || siteSettings.defaultSeoDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website"
    }
  };
}

export default async function RootLayout({ children }) {
  const { siteSettings, navItems, footerNavigation, trustBadges } = await getLayoutContent();

  return (
    <html lang="en">
      <body>
        <Navbar navItems={navItems} siteSettings={siteSettings} />
        {children}
        <Footer footerNavigation={footerNavigation} siteSettings={siteSettings} trustBadges={trustBadges} />
      </body>
    </html>
  );
}
