import type { Metadata } from "next";
import { TracksIndex } from "@/components/tracks-index";
import { brandName, brandSentenceName } from "@/data/site";

export const metadata: Metadata = {
  title: "Tracks",
  description:
    `Watch ${brandName} tracks on YouTube, with videos spanning dance, house, hip hop, trance, trap, reggae, jungle, DnB, ambient, and techno.`,
  alternates: {
    canonical: "/tracks",
  },
  openGraph: {
    title: `${brandName} Tracks`,
    description:
      `${brandSentenceName} tracks and videos from the official Ghostrance YouTube catalogue.`,
    url: "/tracks",
    siteName: brandName,
    type: "website",
  },
};

export default function TracksPage() {
  return <TracksIndex />;
}
