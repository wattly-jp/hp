import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function href(page: number) {
    return page === 1 ? "/column" : `/column/page/${page}`;
  }

  return (
    <nav aria-label="ページネーション" className="flex justify-center gap-2 mt-10">
      {currentPage > 1 && (
        <Link
          href={href(currentPage - 1)}
          className="px-3 py-2 rounded-lg text-sm border border-wt-border hover:bg-wt-emerald-50 transition-colors"
        >
          前へ
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={href(page)}
          className={`px-3 py-2 rounded-lg text-sm transition-colors ${
            page === currentPage
              ? "bg-wt-primary text-white font-bold"
              : "border border-wt-border hover:bg-wt-emerald-50"
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={href(currentPage + 1)}
          className="px-3 py-2 rounded-lg text-sm border border-wt-border hover:bg-wt-emerald-50 transition-colors"
        >
          次へ
        </Link>
      )}
    </nav>
  );
}
