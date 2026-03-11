import Link from "next/link";
import { Zap, ArrowRight, Calculator, BookOpen, Mail } from "lucide-react";
import { getAllArticles } from "@/lib/media";
import { ArticleCard } from "@/components/ArticleCard";
import { CATEGORIES } from "@/lib/constants";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

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
          <p className="text-wt-on-dark-muted text-lg max-w-xl mx-auto leading-relaxed">
            電力会社の選び方から太陽光・蓄電池まで、
            <br className="hidden md:block" />
            暮らしのエネルギー情報をお届けします。
          </p>
          <div className="mt-8">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 bg-wt-surface hover:bg-wt-surface-alt text-wt-primary-dark font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:shadow-xl"
            >
              記事を読む
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <span
                key={cat.slug}
                className="text-xs px-3 py-1 rounded-full bg-wt-on-dark/15 text-wt-on-dark-muted backdrop-blur"
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Simulator CTA */}
      <section className="py-14 px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/simulator"
            className="block rounded-2xl bg-gradient-to-r from-wt-primary/5 to-wt-sky/5 border border-wt-border p-8 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-wt-amber/10 text-wt-amber">
                <Calculator size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-wt-text group-hover:text-wt-primary transition-colors">
                  電気料金シミュレーター
                </h2>
                <p className="text-sm text-wt-text-secondary">
                  エリアと使用量を入力するだけ。最安の電力プランがすぐわかります。
                </p>
              </div>
              <ArrowRight className="shrink-0 text-wt-text-muted group-hover:text-wt-primary transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      {articles.length > 0 && (
        <section className="py-14 px-4 bg-wt-surface-alt">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-wt-primary/10 text-wt-primary">
                <BookOpen size={20} />
              </div>
              <h2 className="text-xl font-bold text-wt-text">最新コラム</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/column"
                className="inline-flex items-center gap-2 text-wt-primary hover:text-wt-primary-dark font-semibold text-sm transition-colors"
              >
                コラム一覧を見る
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-20 px-4 bg-wt-surface-alt">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-wt-primary/10 text-wt-primary mb-4">
            <Mail size={20} />
          </div>
          <h2 className="text-xl font-bold text-wt-text mb-2">お問い合わせ</h2>
          <p className="text-wt-text-secondary text-sm mb-6">
            記事に関するご質問や掲載のご相談など、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-wt-primary hover:bg-wt-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            お問い合わせフォームへ
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="bg-gradient-to-br from-wt-primary to-wt-hero-to text-white py-20 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-bold text-wt-amber mb-4">Wattlyについて</p>
          <p className="text-wt-on-dark-muted leading-relaxed">
            Wattlyは、電気料金や電力会社の選び方、太陽光・蓄電池など暮らしのエネルギーに関する情報をわかりやすくお届けするメディアです。
            電気に詳しくない方でも安心して判断できるよう、できるだけシンプルにまとめています。
          </p>
        </div>
      </section>
    </>
  );
}
