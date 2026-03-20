import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import { SimulatorForm } from "@/components/simulator/SimulatorForm";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `電気料金シミュレーター｜電力会社を比較 - ${BRAND.name}`,
  description:
    "お住まいのエリアと使用量を入力するだけで、各電力会社の月額料金を比較できます。最安プランが一目でわかる無料シミュレーター。",
  alternates: { canonical: "https://wattly.jp/simulator" },
  openGraph: {
    title: "電気料金シミュレーター｜電力会社を比較",
    description:
      "エリアと使用量で電力会社の料金を比較。最安プランが一目でわかります。",
    url: "https://wattly.jp/simulator",
    type: "website",
    siteName: "Wattly",
    locale: "ja_JP",
  },
};

export default function SimulatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Wattly 電気料金シミュレーター",
    description:
      "エリアと使用量から電力会社の料金を比較できる無料ツール",
    url: `${BRAND.url}/simulator`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-wt-hero-from to-wt-hero-to text-white">
        <div className="mx-auto max-w-3xl text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-5">
            <Calculator size={28} className="text-wt-amber" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            電気料金
            <span className="text-wt-amber">シミュレーター</span>
            <span className="ml-2 align-middle text-xs font-semibold bg-wt-on-dark/20 text-wt-on-dark px-2 py-0.5 rounded-full">
              β版
            </span>
          </h1>
          <p className="text-wt-on-dark-muted text-lg max-w-xl mx-auto leading-relaxed">
            エリアと使用量を選ぶだけで、
            <br className="hidden md:block" />
            各電力会社の月額料金を比較できます。
          </p>
        </div>
      </section>

      {/* Simulator */}
      <section className="py-14 px-4">
        <SimulatorForm />
      </section>

      {/* SEO Content */}
      <section className="py-14 px-4 bg-wt-surface-alt">
        <div className="mx-auto max-w-3xl prose-wt">
          <h2>電気料金シミュレーターの使い方</h2>
          <p>
            3つのステップで、あなたに合った電力プランを見つけられます。
          </p>
          <ol>
            <li>
              お住まいのエリア（電力会社の管轄エリア）を選びます。
            </li>
            <li>
              世帯タイプを選ぶか、月間の使用量（kWh）を直接入力します。使用量がわからない場合は、世帯タイプから選ぶのがおすすめです。
            </li>
            <li>
              契約アンペア数を選んで「シミュレーション結果を見る」をクリック。各電力会社の概算月額が安い順に表示されます。
            </li>
          </ol>

          <h2>電気料金の仕組み</h2>
          <p>
            電気料金は主に「基本料金」と「電力量料金（従量料金）」の合計で決まります。基本料金は契約アンペア数によって変わり、電力量料金は使った電気の量に応じて3段階で単価が上がっていく仕組みです。
          </p>
          <p>
            これに加えて「燃料費等調整額」と「再生可能エネルギー発電促進賦課金（再エネ賦課金）」が毎月加算されます。本シミュレーターでは、毎月変動するこれらの項目は除外して概算を表示しています。
          </p>
        </div>
      </section>
    </>
  );
}
