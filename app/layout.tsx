import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandName, brandSentenceName, siteUrl } from "@/data/site";
import "./globals.css";

const siteTitle = `${brandName} | YouTube Music Promotion`;
const siteDescription =
  `${brandSentenceName} is a producer and promoter for trance music, electronic music, dance, house, hip hop, DnB, ambient, techno, and YouTube music promotion.`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brandName,
  title: {
    default: siteTitle,
    template: `%s | ${brandName}`,
  },
  description: siteDescription,
  keywords: [
    "GHOSTRANCE",
    "Ghostrance",
    "Ghostrance101",
    "trance music",
    "electronic music",
    "dance",
    "house",
    "hip hop",
    "trap",
    "reggae",
    "jungle",
    "DnB",
    "ambient",
    "techno",
    "YouTube music promotion",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: brandName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GHOSTRANCE logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#050505] text-zinc-100">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
