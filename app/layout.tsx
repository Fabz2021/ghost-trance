import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ghosttrance.com"),
  applicationName: "Ghost Trance",
  title: {
    default: "Ghost Trance / Ghostrance | YouTube Music Promotion",
    template: "%s | Ghost Trance",
  },
  description:
    "Ghost Trance / Ghostrance is a producer and promoter for trance music, electronic music, dance, house, hip hop, DnB, ambient, techno, and YouTube music promotion.",
  keywords: [
    "Ghost Trance",
    "Ghostrance",
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
    title: "Ghost Trance / Ghostrance | YouTube Music Promotion",
    description:
      "Producer and music promoter covering trance, dance, house, hip hop, DnB, ambient, techno, and YouTube-first electronic releases.",
    url: "https://ghosttrance.com",
    siteName: "Ghost Trance",
    images: [
      {
        url: "/ghost-trance-logo.jpg",
        width: 160,
        height: 160,
        alt: "Ghost Trance logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ghost Trance / Ghostrance | YouTube Music Promotion",
    description:
      "Trance music, electronic music, dance, house, hip hop, DnB, ambient, techno, and YouTube music promotion.",
    images: ["/ghost-trance-logo.jpg"],
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
