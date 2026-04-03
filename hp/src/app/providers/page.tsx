import type { Metadata } from "next";
import Link from "next/link";
import { Zap, ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `電力会社データベース - ${BRAND.name}`,
  description:
    "電力会社をカテゴリ別に調べられるデータベース。自社発電設備を持つ会社、再エネ特化の会社など、テーマ別一覧を掲載しています。",
  alternates: { canonical: "https://wattly.jp/providers" },
  openGraph: {
    title: "電力会社データベース",
    description: "電力会社をカテゴリ別に調べられるデータベース。",
    url: "https://wattly.jp/providers",
    type: "website",
    siteName: "Wattly",
    locale: "ja_JP",
  },
};

const LISTS = [
  {
    href: "/providers/own-generation",
    title: "自社発電設備を持つ電力会社",
    description: "大手電力・都市ガス系・独立系IPP・製造業系まで35社超を網羅。発電方式・設備概要つき。",
    count: "35社+",
  },
  // 今後追加予定
  // { href: "/providers/renewable", title: "再エネ100%の電力会社", ... },
  // { href: "/providers/new-power", title: "新電力一覧", ... },
];

export default function ProvidersPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-wt-hero-from to-wt-hero-to text-white">
        <div className="mx-auto max-w-3xl text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-5">
            <Zap size={28} className="text-wt-amber" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            電力会社
            <span className="text-wt-amber">データベース</span>
          </h1>
          <p className="text-wt-on-dark-muted text-lg max-w-2xl mx-auto leading-relaxed">
            電力会社をテーマ・特徴別に調べられる一覧ページです。
          </p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
          {LISTS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-wt-border bg-wt-surface p-6 flex flex-col gap-3 hover:border-wt-primary transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-bold text-wt-text leading-snug group-hover:text-wt-primary transition-colors">
                  {item.title}
                </h2>
                <ChevronRight size={18} className="shrink-0 text-wt-text-muted group-hover:text-wt-primary transition-colors mt-0.5" />
              </div>
              <p className="text-sm text-wt-text-muted leading-relaxed">
                {item.description}
              </p>
              <span className="text-xs text-wt-primary font-medium">{item.count}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
