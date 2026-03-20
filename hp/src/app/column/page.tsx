import type { Metadata } from "next";
import { getArticlesByPage, getTotalPages } from "@/lib/media";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "電力会社の選び方、電気代の節約、太陽光・蓄電池など暮らしのエネルギーに関する記事をまとめています。",
  alternates: { canonical: "https://wattly.jp/column" },
  openGraph: {
    title: "コラム",
    description:
      "電力会社の選び方、電気代の節約、太陽光・蓄電池など暮らしのエネルギーに関する記事をまとめています。",
    url: "https://wattly.jp/column",
    type: "website",
    siteName: "Wattly",
    locale: "ja_JP",
  },
};

export default function ColumnPage() {
  const articles = getArticlesByPage(1);
  const totalPages = getTotalPages();

  return (
    <>
      <section className="pt-28 pb-12 px-4 bg-gradient-to-br from-wt-forest to-wt-forest-deep text-wt-on-dark text-center">
        <h1 className="text-3xl font-bold mb-2">コラム</h1>
        <p className="text-wt-on-dark-muted">
          暮らしのエネルギーに関する情報をわかりやすくお届けします。
        </p>
      </section>
      <section className="py-14 px-4">
        <div className="mx-auto max-w-2xl">
          {articles.length === 0 ? (
            <p className="text-wt-text-muted">記事はまだありません。</p>
          ) : (
            <>
              <div className="grid gap-4">
                {articles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
              <Pagination currentPage={1} totalPages={totalPages} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
