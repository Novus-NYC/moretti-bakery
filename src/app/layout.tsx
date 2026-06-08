import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteInfo.name} — ${siteInfo.tagline}`,
  description:
    "Moretti Bakery — Staten Island's favorite bakery. Carrying on my mother's dream with freshly baked cakes, pastries, signature creations, and seasonal specials.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bakery-bg font-body text-bakery-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
