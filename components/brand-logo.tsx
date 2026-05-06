import Image from "next/image";
import { logoAlt, logoPath } from "@/data/site";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  className = "h-20 w-28",
  priority = false,
  sizes = "112px",
}: BrandLogoProps) {
  return (
    <span
      className={`relative block overflow-hidden rounded-md border border-[#d8b45d]/35 bg-black shadow-[0_0_36px_rgba(216,180,93,0.18)] ${className}`}
    >
      <Image
        src={logoPath}
        alt={logoAlt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain p-1"
      />
    </span>
  );
}
