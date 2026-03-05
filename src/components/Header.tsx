"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, BRAND } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-wt-surface/95 backdrop-blur border-b border-wt-border">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4 h-14">
        <Link href="/" className="text-lg font-bold text-wt-primary">
          {BRAND.name}
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-wt-text-secondary hover:text-wt-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-wt-text"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-wt-surface border-t border-wt-border px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-sm text-wt-text-secondary hover:text-wt-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
