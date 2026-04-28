import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ghost Trance, a premium underground trance and electronic music promotion brand for YouTube-first releases.",
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
            A premium underground channel for electronic music with cinematic
            intent.
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
              Trance, electronic, drum and bass, dance, and underground video
              promotion.
            </p>
          </aside>
          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              Ghost Trance is a music promotion brand focused on dark,
              cinematic, and high-energy electronic releases. The site exists as
              a home for YouTube-first tracks, visual campaigns, and artist
              promotion across trance-adjacent electronic music.
            </p>
            <p>
              The brand direction is premium and underground: black and gold
              visuals, clean presentation, strong video placement, and copy that
              can be refined as future releases, playlists, and collaborations
              are confirmed.
            </p>
            <p>
              This first version keeps the structure simple and fast. Track
              content is stored locally, pages are static, and the site is ready
              to connect to ghosttrance.com when the domain is configured.
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
