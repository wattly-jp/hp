import Link from "next/link";
import { Zap, ArrowRight, Scale, Sun, Building2, BookOpen } from "lucide-react";
import { getAllArticles } from "@/lib/media";
import { ArticleCard } from "@/components/ArticleCard";
import { CATEGORIES } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, typeof Scale> = {
  "比較・おすすめ": Scale,
  "太陽光・蓄電池": Sun,
  "法人向け": Building2,
  "電力の基礎知識": BookOpen,
};

export default function HomePage() {
  const articles = getAllArticles();
  const categorized = CATEGORIES.map((cat) => ({
    ...cat,
    articles: articles.filter((a) => a.category === cat.slug).slice(0, 3),
  })).filter((c) => c.articles.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-wt-hero-from to-wt-hero-to text-white">
        <div className="mx-auto max-w-3xl text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-5">
            <Zap size={28} className="text-wt-amber" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            電気のこと、もっと
            <br className="sm:hidden" />
            <span className="text-wt-amber">わかりやすく。</span>
          </h1>
          <p className="text-emerald-100 text-lg max-w-xl mx-auto leading-relaxed">
            電力会社の選び方から太陽光・蓄電池まで、
            <br className="hidden md:block" />
            暮らしのエネルギー情報をお届けします。
          </p>
          <div className="mt-8">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-wt-primary-dark font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:shadow-xl"
            >
              記事を読む
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <span
                key={cat.slug}
                className="text-xs px-3 py-1 rounded-full bg-white/15 text-emerald-100 backdrop-blur"
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categorized.map((cat, i) => {
        const Icon = CATEGORY_ICONS[cat.slug] || BookOpen;
        return (
          <section
            key={cat.slug}
            className={`py-14 px-4 ${i % 2 === 0 ? "bg-wt-surface-alt" : ""}`}
          >
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-wt-primary/10 text-wt-primary">
                  <Icon size={20} />
                </div>
                <h2 className="text-xl font-bold text-wt-text">{cat.label}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {cat.articles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* About */}
      <section className="bg-gradient-to-br from-wt-primary to-wt-hero-to text-white py-20 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-bold text-wt-amber mb-4">Wattlyについて</p>
          <p className="text-emerald-100 leading-relaxed">
            Wattlyは、電気料金や電力会社の選び方、太陽光・蓄電池など暮らしのエネルギーに関する情報をわかりやすくお届けするメディアです。
            電気に詳しくない方でも安心して判断できるよう、できるだけシンプルにまとめています。
          </p>
        </div>
      </section>
    </>
  );
}
