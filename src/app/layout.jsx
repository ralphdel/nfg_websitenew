import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Nigerian Foundries Group | Industrial Manufacturing and Reverse Engineering",
  description:
    "Nigerian Foundries Group manufactures industrial castings, sacrificial anodes, wear parts, machined components, fabricated assemblies and 3D-printed parts for cement, mining, oil & gas, marine, power and infrastructure industries across Nigeria and West Africa."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
