import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/media";
import { ArticleCard } from "@/components/ArticleCard";
import { CATEGORIES } from "@/lib/constants";

export default function HomePage() {
  const articles = getAllArticles();
  const latest = articles.slice(0, 6);
  const categorized = CATEGORIES.map((cat) => ({
    ...cat,
    articles: articles.filter((a) => a.category === cat.slug).slice(0, 3),
  })).filter((c) => c.articles.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-wt-header text-white">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap size={24} className="text-wt-yellow" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            電気のこと、もっと
            <span className="text-wt-yellow">わかりやすく。</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            電力会社の選び方から太陽光・蓄電池まで、
            <br className="hidden md:block" />
            暮らしのエネルギー情報をお届けします。
          </p>
          <div className="mt-6">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 bg-wt-blue hover:bg-wt-blue-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              記事を読む
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {latest.length > 0 && (
        <section className="py-14 px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">最新記事</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {latest.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/column"
                className="text-sm text-wt-blue hover:text-wt-blue-light transition-colors"
              >
                すべての記事を見る →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      {categorized.map((cat) => (
        <section key={cat.slug} className="py-10 px-4 even:bg-wt-surface">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-bold mb-5">{cat.label}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {cat.articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* About */}
      <section className="py-14 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold mb-4">Wattlyについて</h2>
          <p className="text-wt-text-secondary leading-relaxed">
            Wattlyは、電気料金や電力会社の選び方、太陽光・蓄電池など暮らしのエネルギーに関する情報をわかりやすくお届けするメディアです。
            電気に詳しくない方でも安心して判断できるよう、できるだけシンプルにまとめています。
          </p>
        </div>
      </section>
    </>
  );
}
