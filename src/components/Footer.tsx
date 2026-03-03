import Link from "next/link";
import { BRAND, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-wt-border bg-wt-surface">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-wt-blue">{BRAND.name}</p>
            <p className="text-sm text-wt-text-muted mt-1">
              {BRAND.description}
            </p>
          </div>
          <nav className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-wt-text-secondary hover:text-wt-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-wt-text-muted text-center">
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
