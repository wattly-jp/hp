import Link from "next/link";
import { BRAND, NAV_ITEMS } from "@/lib/constants";

const ZH_SITES = [
  { name: "LunaPos", url: "https://lunapos.jp", desc: "ナイト業界向けPOS" },
  { name: "Casinohub", url: "https://casinohub.jp", desc: "カジノ向け管理SaaS" },
  { name: "Roomly", url: "https://hp.roomly.jp", desc: "賃貸管理SaaS" },
];

export function Footer() {
  return (
    <footer className="bg-wt-primary-dark">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-wt-on-dark">{BRAND.name}</p>
            <p className="text-sm text-wt-on-dark-muted mt-1">
              {BRAND.description}
            </p>
          </div>
          <nav className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-wt-on-dark-muted hover:text-wt-on-dark transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-wt-on-dark/20">
          <p className="text-xs text-wt-on-dark-subtle mb-2">zh グループ</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {ZH_SITES.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-wt-on-dark-subtle hover:text-wt-on-dark transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-wt-on-dark-subtle text-center">
          &copy; {new Date().getFullYear()} {BRAND.name}
        </p>
      </div>
    </footer>
  );
}
