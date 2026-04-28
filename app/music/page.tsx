import type { Metadata } from "next";
import { TrackCard } from "@/components/track-card";
import { tracks } from "@/data/tracks";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Watch Ghost Trance YouTube tracks spanning trance, electronic music, drum and bass, dance, and underground promotion releases.",
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
            Ghost Trance music videos and promoted tracks.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A data-driven catalogue of Ghost Trance releases, built around
            embedded YouTube videos, direct listening links, and concise
            promotion copy for each track.
          </p>
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
                All Tracks
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
