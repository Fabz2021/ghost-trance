import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrackDetail } from "@/components/track-detail";
import {
  getTrackBySlug,
  ghostranceYouTubeChannelName,
  tracks,
} from "@/data/tracks";
import { brandName } from "@/data/site";

type TrackPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return tracks.map((track) => ({
    slug: track.slug,
  }));
}

export async function generateMetadata({
  params,
}: TrackPageProps): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) {
    return {
      title: "Track Not Found",
      description: `The requested ${brandName} track could not be found.`,
    };
  }

  return {
    title: track.title,
    description: `${track.description} Watch the ${ghostranceYouTubeChannelName} video on ${brandName}.`,
    alternates: {
      canonical: `/tracks/${track.slug}`,
    },
    openGraph: {
      title: track.title,
      description: track.description,
      url: `/tracks/${track.slug}`,
      siteName: brandName,
      images: [
        {
          url: `https://img.youtube.com/vi/${track.youtubeVideoId}/hqdefault.jpg`,
          width: 480,
          height: 360,
          alt: `${track.title} video thumbnail`,
        },
      ],
      type: "video.other",
      videos: [
        {
          url: track.youtubeUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: track.title,
      description: track.description,
      images: [
        `https://img.youtube.com/vi/${track.youtubeVideoId}/hqdefault.jpg`,
      ],
    },
  };
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) {
    notFound();
  }

  return <TrackDetail track={track} />;
}
