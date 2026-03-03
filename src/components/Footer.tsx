import Link from "next/link";
import { BRAND, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-wt-primary-dark">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-white">{BRAND.name}</p>
            <p className="text-sm text-emerald-200 mt-1">
              {BRAND.description}
            </p>
          </div>
          <nav className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-emerald-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 text-xs text-emerald-300 text-center">
          &copy; {new Date().getFullYear()} {BRAND.name}
        </p>
      </div>
    </footer>
  );
}
