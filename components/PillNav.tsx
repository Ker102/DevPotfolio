"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

interface PillNavProps {
  logoSrc: string;
  logoAlt?: string;
  items: PillNavItem[];
  className?: string;
}

export default function PillNav({ logoSrc, logoAlt = "Logo", items, className = "" }: PillNavProps) {
  const pathname = usePathname();

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="flex items-center gap-4 rounded-full border border-white/30 bg-[#04030c]/80 px-4 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <Link
          href={items[0]?.href || "/"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10"
          aria-label={logoAlt}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt={logoAlt} className="h-6 w-6 rounded-full object-cover" />
        </Link>
        <div className="flex items-center rounded-full border border-white/30 bg-black/20 p-1">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition ${active ? "text-[#05060f]" : "text-slate-200 hover:text-white"
                  }`}
                aria-label={item.ariaLabel || item.label}
              >
                {active && (
                  <span
                    className="absolute inset-0 rounded-full border border-white bg-white"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 mix-blend-normal">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
