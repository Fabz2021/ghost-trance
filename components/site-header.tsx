import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d38a]"
          aria-label="Ghost Trance home"
        >
          <Image
            src="/ghost-trance-logo.jpg"
            alt="Ghost Trance logo"
            width={44}
            height={44}
            priority
            className="rounded-full border border-[#d8b45d]/40"
          />
          <span className="text-lg font-semibold text-zinc-50">Ghost Trance</span>
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
