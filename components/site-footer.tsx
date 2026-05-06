import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ghostranceYouTubeChannelUrl } from "@/data/tracks";
import {
  brandName,
  brandSentenceName,
  contactEmail,
  contactEmailHref,
  contactPhone,
  contactPhoneHref,
} from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-zinc-400 sm:px-8 md:grid-cols-[1fr_auto]">
        <div className="max-w-xl space-y-4">
          <Link href="/" className="flex w-fit items-center gap-3">
            <BrandLogo className="h-16 w-20" sizes="80px" />
          </Link>
          <p className="leading-6">
            {brandSentenceName} is a producer and music promoter covering
            electronic releases, YouTube-first videos, and cinematic track
            campaigns under the {brandName} brand.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={contactEmailHref}
            className="text-[#f0d38a] transition hover:text-white"
          >
            {contactEmail}
          </a>
          <a
            href={contactPhoneHref}
            className="text-[#f0d38a] transition hover:text-white"
          >
            {contactPhone}
          </a>
          <a
            href={ghostranceYouTubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#f0d38a] transition hover:text-white"
          >
            YouTube: Ghostrance
          </a>
          <p>ghostrance.com</p>
          <p>&copy; 2026 {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
