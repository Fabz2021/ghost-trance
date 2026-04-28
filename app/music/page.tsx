import type { Metadata } from "next";
import { TrackCard } from "@/components/track-card";
import {
  ghostranceYouTubeChannelName,
  ghostranceYouTubeChannelUrl,
  tracks,
} from "@/data/tracks";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Watch Ghost Trance / Ghostrance tracks on YouTube, with music videos spanning dance, house, hip hop, trance, trap, reggae, jungle, DnB, ambient, and techno.",
  alternates: {
    canonical: "/music",
  },
};

export default function MusicPage() {
  return (
    <main className="bg-[#050505]">
      <section className="border-b border-white/10 bg-[linear-gradient(180deg,#0b0b0b_0%,#050505_100%)] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
            YouTube releases
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold text-zinc-50">
            Ghost Trance music videos are available on YouTube.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            This catalogue highlights Ghost Trance / Ghostrance tracks with
            embedded YouTube videos, direct listening links, and SEO-friendly
            context around the production and promotion work behind each
            release.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 rounded-lg border border-[#d8b45d]/25 bg-[#111111] p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f0d38a]">
              Official channel
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-50">
              Watch the full {ghostranceYouTubeChannelName} catalogue.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
              Follow the YouTube channel for new music videos, promoted tracks,
              production updates, and releases across dance, trance, DnB,
              techno, hip hop, and adjacent underground styles.
            </p>
          </div>
          <a
            href={ghostranceYouTubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#d8b45d] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
          >
            Visit YouTube Channel
          </a>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8" aria-labelledby="all-tracks">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#f0d38a]">
                Catalogue
              </p>
              <h2 id="all-tracks" className="mt-2 text-3xl font-semibold">
                YouTube Tracks
              </h2>
            </div>
            <p className="text-sm text-zinc-500">{tracks.length} videos</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {tracks.map((track) => (
              <TrackCard key={track.slug} track={track} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
