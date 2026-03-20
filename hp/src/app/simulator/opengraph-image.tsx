import { ImageResponse } from "next/og";

export const alt = "電気料金シミュレーター | Wattly";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const fontData = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap"
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "48px",
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
            fontFamily: '"Noto Sans JP"',
          }}
        >
          Wattly
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: '"Noto Sans JP"',
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          電気料金シミュレーター
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: '"Noto Sans JP"',
            marginTop: "16px",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          エリアと使用量で電力会社の料金を比較。最安プランが一目でわかります。
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
