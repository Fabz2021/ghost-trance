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
    default: "Ghost Trance | Trance & Electronic Music",
    template: "%s | Ghost Trance",
  },
  description:
    "Ghost Trance promotes premium trance, electronic music, YouTube tracks, drum and bass, dance releases, and underground music videos.",
  keywords: [
    "Ghost Trance",
    "trance music",
    "electronic music",
    "YouTube tracks",
    "music promotion",
    "drum and bass",
    "dance music",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ghost Trance | Trance & Electronic Music",
    description:
      "Premium underground trance and electronic music promotion built around YouTube tracks and cinematic releases.",
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
    title: "Ghost Trance | Trance & Electronic Music",
    description:
      "Trance, electronic music, YouTube tracks, and underground music promotion.",
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
