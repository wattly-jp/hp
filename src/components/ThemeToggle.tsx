"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="w-14 h-7" />;

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer"
      style={{
        backgroundColor: dark
          ? "var(--color-wt-border)"
          : "rgba(5, 150, 105, 0.2)",
      }}
      aria-label={dark ? "ライトモードに切替" : "ダークモードに切替"}
    >
      <span
        className="absolute left-1 flex items-center justify-center w-5 h-5 rounded-full shadow-sm transition-transform duration-300"
        style={{
          transform: dark ? "translateX(0)" : "translateX(28px)",
          backgroundColor: dark
            ? "var(--color-wt-text-muted)"
            : "var(--color-wt-primary)",
        }}
      >
        {dark ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-white" />
        )}
      </span>
    </button>
  );
}
