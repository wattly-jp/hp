import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByPage, getTotalPages } from "@/lib/media";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";

interface Props {
  params: Promise<{ num: string }>;
}

export async function generateStaticParams() {
  const totalPages = getTotalPages();
  return Array.from({ length: totalPages }, (_, i) => ({
    num: String(i + 1),
  })).filter((p) => p.num !== "1");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { num } = await params;
  const page = parseInt(num, 10);
  return {
    title: `コラム（${page}ページ目）`,
    description:
      "電力会社の選び方、電気代の節約、太陽光・蓄電池など暮らしのエネルギーに関する記事をまとめています。",
    alternates: { canonical: `https://wattly.jp/column/page/${page}` },
  };
}

export default async function ColumnPaginatedPage({ params }: Props) {
  const { num } = await params;
  const page = parseInt(num, 10);
  const totalPages = getTotalPages();

  if (isNaN(page) || page < 1 || page > totalPages) {
    notFound();
  }

  if (page === 1) {
    notFound();
  }

  const articles = getArticlesByPage(page);

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
              <Pagination currentPage={page} totalPages={totalPages} />
            </>
          )}
        </div>
      </section>
    </>
  );
}
