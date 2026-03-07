import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getArticle, getAllSlugs } from "@/lib/media";
import { notFound } from "next/navigation";
import Comments from "@/components/Comments";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `https://wattly.jp/column/${slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/column/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.date || undefined,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date || undefined,
    author: {
      "@type": "Organization",
      name: "Wattly",
      url: "https://wattly.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "Wattly",
      url: "https://wattly.jp",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://wattly.jp/column/${slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "トップ",
        item: "https://wattly.jp",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "コラム",
        item: "https://wattly.jp/column",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://wattly.jp/column/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    <section className="pt-24 pb-16 px-4">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/column"
          className="inline-flex items-center gap-1 text-sm text-wt-text-muted hover:text-wt-primary mb-6 transition-colors"
        >
          <ArrowLeft size={14} />
          コラム一覧へ
        </Link>
        <p className="text-xs text-wt-text-muted mb-2">
          {article.date} ・ {article.category}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-wt-text mb-6">
          {article.title}
        </h1>
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded bg-wt-emerald-50 border border-wt-border text-wt-primary-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="prose-wt">
          <MDXRemote source={article.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
        <Comments project="wattly" articleSlug={slug} />
      </article>
    </section>
    </>
  );
}
