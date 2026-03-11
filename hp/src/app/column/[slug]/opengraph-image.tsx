import { ImageResponse } from "next/og";
import { getArticle, getAllSlugs } from "@/lib/media";

export const alt = "Wattly コラム";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  const title = article?.title ?? "Wattly コラム";
  const category = article?.category ?? "";
  const date = article?.date ?? "";

  const fontData = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
  )
    .then((res) => res.text())
    .then((css) => {
      const match = css.match(/src: url\(([^)]+)\)/);
      if (!match) throw new Error("Font URL not found");
      return fetch(match[1]);
    })
    .then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 100%)",
          padding: "48px",
        }}
      >
        {/* サービス名（左上） */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
            fontFamily: '"Noto Sans JP"',
          }}
        >
          Wattly
        </div>

        {/* 記事タイトル（中央） */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: title.length > 30 ? "40px" : "48px",
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: '"Noto Sans JP"',
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: "1000px",
              wordBreak: "break-word",
            }}
          >
            {title}
          </div>
        </div>

        {/* カテゴリ・日付（下部） */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {category ? (
            <div
              style={{
                fontSize: "18px",
                color: "#f5c542",
                fontFamily: '"Noto Sans JP"',
                background: "rgba(245,197,66,0.15)",
                padding: "6px 16px",
                borderRadius: "8px",
              }}
            >
              {category}
            </div>
          ) : (
            <div />
          )}
          {date ? (
            <div
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.5)",
                fontFamily: '"Noto Sans JP"',
              }}
            >
              {date}
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Noto Sans JP",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
