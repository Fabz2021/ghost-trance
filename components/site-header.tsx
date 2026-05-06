import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/tracks", label: "Tracks" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d38a]"
          aria-label="GHOSTRANCE home"
        >
          <BrandLogo
            priority
            className="h-16 w-20 sm:h-[4.5rem] sm:w-24"
            sizes="(min-width: 640px) 96px, 80px"
          />
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-zinc-300 sm:justify-end">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-[#d8b45d]/12 hover:text-[#f0d38a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d38a]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
