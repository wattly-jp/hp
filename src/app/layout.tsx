import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const GA_ID = "G-53CDDYYHW4";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wattly.jp"),
  title: {
    default: "Wattly | 電気のこと、もっとわかりやすく。",
    template: "%s | Wattly",
  },
  description:
    "電力会社の選び方から太陽光・蓄電池まで、暮らしのエネルギー情報をわかりやすくお届けするメディアサイトです。",
  openGraph: {
    siteName: "Wattly",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className={`${notoSansJP.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
