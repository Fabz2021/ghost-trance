import Image from "next/image";
import Link from "next/link";
import { TrackCard } from "@/components/track-card";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { tracks } from "@/data/tracks";

export default function Home() {
  const featuredTrack = tracks.find((track) => track.featured) ?? tracks[0];
  const latestTracks = tracks.filter((track) => !track.featured).slice(0, 4);

  return (
    <main className="bg-[#050505]">
      <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-20 sm:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#050505_0%,#0d0b06_42%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(216,180,93,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(216,180,93,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="mx-auto flex min-h-[68vh] max-w-7xl flex-col items-center justify-center text-center">
          <Image
            src="/ghost-trance-logo.jpg"
            alt="Ghost Trance logo"
            width={132}
            height={132}
            priority
            className="mb-8 rounded-full border border-[#d8b45d]/40 shadow-[0_0_80px_rgba(216,180,93,0.26)]"
          />
          <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
            Premium underground music promotion
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold text-zinc-50">
            Ghost Trance
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Black-and-gold electronic music promotion for trance, drum and
            bass, dance, techno, and cinematic YouTube-first releases.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/music"
              className="inline-flex items-center justify-center rounded-full bg-[#d8b45d] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Watch the Music
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d8b45d]/40 px-6 py-3 text-sm font-semibold text-[#f0d38a] transition hover:border-[#f0d38a] hover:bg-[#d8b45d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Submit a Track
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8" aria-labelledby="featured-video">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
              Featured YouTube track
            </p>
            <h2 id="featured-video" className="text-3xl font-semibold">
              {featuredTrack.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              {featuredTrack.description}
            </p>
            <a
              href={featuredTrack.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-full border border-[#d8b45d]/35 px-5 py-3 text-sm font-semibold text-[#f0d38a] transition hover:border-[#f0d38a] hover:bg-[#d8b45d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Open on YouTube
            </a>
          </div>
          <YouTubeEmbed
            videoId={featuredTrack.youtubeId}
            title={featuredTrack.title}
          />
        </div>
      </section>

      <section
        className="border-y border-white/10 bg-[#090909] px-5 py-16 sm:px-8"
        aria-labelledby="latest-tracks"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#f0d38a]">
                Latest tracks
              </p>
              <h2 id="latest-tracks" className="mt-2 text-3xl font-semibold">
                Built for dark rooms, headphones, and late-night playlists.
              </h2>
            </div>
            <Link
              href="/music"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-[#d8b45d]/50 hover:text-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              View all music
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {latestTracks.map((track) => (
              <TrackCard key={track.slug} track={track} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8" aria-labelledby="about-preview">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
              About Ghost Trance
            </p>
            <h2 id="about-preview" className="text-3xl font-semibold">
              A focused home for trance-adjacent electronic promotion.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              Ghost Trance packages electronic music with a premium underground
              visual direction: black, gold, cinematic, and direct. The site is
              built to make YouTube releases easy to watch, share, and promote.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-[#d8b45d] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Read About Ghost Trance
            </Link>
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/10 bg-[linear-gradient(90deg,#090909_0%,#141008_50%,#090909_100%)] px-5 py-14 sm:px-8"
        aria-labelledby="promotion-cta"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
              SEO and promotion ready
            </p>
            <h2 id="promotion-cta" className="text-3xl font-semibold">
              Simple static pages for a fast music brand launch.
            </h2>
            <p className="mt-5 leading-7 text-zinc-400">
              Metadata, sitemap, robots configuration, semantic sections, and
              local track data are in place for ghosttrance.com.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/music"
              className="inline-flex items-center justify-center rounded-full bg-[#d8b45d] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Explore Tracks
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d8b45d]/40 px-5 py-3 text-sm font-semibold text-[#f0d38a] transition hover:border-[#f0d38a] hover:bg-[#d8b45d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Contact for Promotion
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
