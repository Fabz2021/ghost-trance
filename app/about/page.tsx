import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ghost Trance / Ghostrance, a producer and music promoter covering dance, house, hip hop, trance, trap, reggae, jungle, DnB, ambient, and techno.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#050505]">
      <section className="border-b border-white/10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
            About the brand
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold text-zinc-50">
            Ghost Trance / Ghostrance is a producer and music promoter with a
            wide underground electronic range.
          </h1>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-lg border border-[#d8b45d]/25 bg-[#111111] p-6">
            <p className="text-sm font-semibold uppercase text-[#f0d38a]">
              Ghost Trance
            </p>
            <p className="mt-4 text-3xl font-semibold text-zinc-50">
              Dance, house, hip hop, trance, trap, reggae, jungle, DnB,
              ambient, techno, and YouTube music promotion.
            </p>
          </aside>
          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              Ghost Trance is the website name for the Ghostrance music channel:
              a producer and promoter focused on original tracks, visual
              releases, and artist-facing music promotion. The brand moves
              across dance, house, hip hop, trance, trap, reggae, jungle, DnB,
              ambient, and techno without losing its dark black-and-gold
              identity.
            </p>
            <p>
              The sound and presentation are premium, underground, and
              cinematic: strong video placement, clean release pages, and a
              professional platform for YouTube-first music videos and track
              campaigns.
            </p>
            <p>
              This site keeps that catalogue simple and fast, while giving
              future releases, remixes, collaborations, playlists, and
              promotional campaigns a clear home at ghosttrance.com.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d8b45d] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Contact Ghost Trance
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
