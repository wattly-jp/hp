import type { Metadata } from "next";
import { getAllArticles } from "@/lib/media";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "電力会社の選び方、電気代の節約、太陽光・蓄電池など暮らしのエネルギーに関する記事をまとめています。",
};

export default function ColumnPage() {
  const articles = getAllArticles();

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold mb-2">コラム</h1>
        <p className="text-wt-text-secondary mb-8">
          暮らしのエネルギーに関する情報をわかりやすくお届けします。
        </p>
        {articles.length === 0 ? (
          <p className="text-wt-text-muted">記事はまだありません。</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
