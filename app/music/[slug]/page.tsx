import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrackCard } from "@/components/track-card";
import { YouTubeEmbed } from "@/components/youtube-embed";
import {
  getRelatedTracks,
  getTrackBySlug,
  ghostranceYouTubeChannelName,
  tracks,
} from "@/data/tracks";

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
      description: "The requested Ghost Trance track could not be found.",
    };
  }

  return {
    title: track.title,
    description: `${track.description} Watch the official ${ghostranceYouTubeChannelName} video on Ghost Trance.`,
    alternates: {
      canonical: `/music/${track.slug}`,
    },
    openGraph: {
      title: track.title,
      description: track.description,
      url: `/music/${track.slug}`,
      siteName: "Ghost Trance",
      images: [
        {
          url: `https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`,
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
      images: [`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`],
    },
  };
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) {
    notFound();
  }

  const relatedTracks = getRelatedTracks(track.slug, 3);

  return (
    <main className="bg-[#050505]">
      <section className="border-b border-white/10 bg-[linear-gradient(180deg,#0b0b0b_0%,#050505_100%)] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/music"
            className="mb-8 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-[#d8b45d]/50 hover:text-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
          >
            Back to Music
          </Link>
          <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
            Ghostrance track page
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold text-zinc-50">
            {track.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {track.description}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8" aria-label={`${track.title} video`}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <YouTubeEmbed
            videoId={track.youtubeId}
            title={track.title}
            className="lg:sticky lg:top-28"
          />

          <article className="rounded-lg border border-[#d8b45d]/25 bg-[#111111] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.42)]">
            <p className="text-sm font-semibold uppercase text-[#f0d38a]">
              Release details
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-50">
              Watch {track.title} on YouTube
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              This Ghost Trance / Ghostrance page gives the track a dedicated
              SEO-friendly home with the official video embed, direct YouTube
              link, genre context, and related tracks from the catalogue.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {track.genreTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#d8b45d]/30 bg-[#d8b45d]/10 px-3 py-1 text-xs font-semibold uppercase text-[#f0d38a]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={track.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#d8b45d] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
              >
                Watch on YouTube
              </a>
              <Link
                href="/music"
                className="inline-flex items-center justify-center rounded-full border border-[#d8b45d]/40 px-5 py-3 text-sm font-semibold text-[#f0d38a] transition hover:border-[#f0d38a] hover:bg-[#d8b45d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
              >
                Back to Music
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section
        className="border-t border-white/10 bg-[#090909] px-5 py-14 sm:px-8"
        aria-labelledby="related-tracks"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#f0d38a]">
            Keep listening
          </p>
          <h2 id="related-tracks" className="mt-2 text-3xl font-semibold">
            Related Ghostrance Tracks
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {relatedTracks.map((relatedTrack) => (
              <TrackCard key={relatedTrack.slug} track={relatedTrack} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
