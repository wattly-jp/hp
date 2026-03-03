"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, BRAND } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-wt-header/95 backdrop-blur border-b border-wt-header">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4 h-14">
        <Link href="/" className="text-lg font-bold text-wt-yellow">
          {BRAND.name}
        </Link>
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-wt-header border-t border-gray-700 px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-gray-300 hover:text-white"
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
