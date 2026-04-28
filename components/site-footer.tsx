import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-zinc-400 sm:px-8 md:grid-cols-[1fr_auto]">
        <div className="max-w-xl space-y-4">
          <Link href="/" className="flex w-fit items-center gap-3">
            <Image
              src="/ghost-trance-logo.jpg"
              alt="Ghost Trance logo"
              width={38}
              height={38}
              className="rounded-full border border-[#d8b45d]/35"
            />
            <span className="text-base font-semibold text-zinc-50">
              Ghost Trance
            </span>
          </Link>
          <p className="leading-6">
            Premium trance, electronic, drum and bass, and underground music
            promotion for YouTube-first releases and cinematic track campaigns.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="mailto:contact@ghosttrance.com"
            className="text-[#f0d38a] transition hover:text-white"
          >
            contact@ghosttrance.com
          </a>
          <p>ghosttrance.com</p>
          <p>&copy; 2026 Ghost Trance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
