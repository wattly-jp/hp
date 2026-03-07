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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Wattly",
    locale: "ja_JP",
    type: "website",
    url: "https://wattly.jp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wattly | 電気のこと、もっとわかりやすく。",
    description:
      "電力会社の選び方から太陽光・蓄電池まで、暮らしのエネルギー情報をわかりやすくお届けするメディアサイトです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className={`${notoSansJP.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Wattly",
              url: "https://wattly.jp",
              description:
                "電力会社の選び方から太陽光・蓄電池まで、暮らしのエネルギー情報をわかりやすくお届けするメディアサイトです。",
              publisher: {
                "@type": "Organization",
                name: "Wattly",
                url: "https://wattly.jp",
              },
            }),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
