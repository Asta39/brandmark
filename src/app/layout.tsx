import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OrganizationJsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.brandmarkprintmedia.com";
const TITLE = "Branding & Print Company in Nairobi | Brandmark Print Media";
const DESCRIPTION =
  "Brandmark Print Media is Nairobi's partner for branding, signage, large-format printing, DTF apparel, UV printing, laser cutting and vehicle branding. Get a quote on WhatsApp today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "branding company Nairobi",
    "signage Nairobi",
    "printing company Kenya",
    "vehicle branding Nairobi",
    "DTF printing Kenya",
    "UV printing Nairobi",
    "laser cutting Nairobi",
    "large format printing Nairobi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Brandmark Print Media",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/services/signage-1.jpg",
        width: 2304,
        height: 1728,
        alt: "Brandmark Print Media — branding and signage in Nairobi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/services/signage-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <body className={`${inter.variable} antialiased`}>
        <OrganizationJsonLd />
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
