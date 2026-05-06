import { permanentRedirect } from "next/navigation";
import { tracks } from "@/data/tracks";

type MusicTrackPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return tracks.map((track) => ({
    slug: track.slug,
  }));
}

export default async function MusicTrackPage({ params }: MusicTrackPageProps) {
  const { slug } = await params;

  permanentRedirect(`/tracks/${slug}`);
}
