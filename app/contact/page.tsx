import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ghost Trance for promotion, collaborations, music videos, artist promotion, remixes, YouTube releases, and electronic music enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#050505]">
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-[#f0d38a]">
              Promotion and collaboration enquiries
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold text-zinc-50">
              Send music, video ideas, remixes, and artist promotion requests.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Ghost Trance / Ghostrance is open to relevant promotion,
              collaborations, music videos, artist promotion, remixes, and
              general enquiries across electronic, club, bass, and
              hip-hop-adjacent releases. Share a concise note, links to the
              music, and the release timeline.
            </p>
          </div>

          <section
            className="rounded-lg border border-[#d8b45d]/25 bg-[#111111] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.45)]"
            aria-labelledby="contact-email"
          >
            <p className="text-sm font-semibold uppercase text-[#f0d38a]">
              Email
            </p>
            <h2 id="contact-email" className="mt-3 text-2xl font-semibold">
              contact@ghosttrance.com
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Include artist name, track or video links, release date, preferred
              promotion window, remix or collaboration details, and any artwork
              assets already available.
            </p>
            <a
              href="mailto:contact@ghosttrance.com?subject=Ghost%20Trance%20Promotion%20Enquiry"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#d8b45d] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
            >
              Email Ghost Trance
            </a>
          </section>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 rounded-lg border border-white/10 bg-black/40 p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-50">
              Explore the music first.
            </h2>
            <p className="mt-2 text-zinc-400">
              Review current Ghost Trance / Ghostrance YouTube tracks before
              sending a promotion enquiry.
            </p>
          </div>
          <Link
            href="/music"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[#d8b45d]/35 px-5 py-3 text-sm font-semibold text-[#f0d38a] transition hover:border-[#f0d38a] hover:bg-[#d8b45d] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
          >
            View Music
          </Link>
        </div>
      </section>
    </main>
  );
}
