import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `自社発電設備を持つ電力会社一覧 - ${BRAND.name}`,
  description:
    "自社発電設備（発電所）を持つ電力会社を一覧で紹介。大手電力・都市ガス系・独立系再エネ事業者まで、発電方式・設備概要・公式URLをまとめました。電力会社選びの参考にどうぞ。",
  alternates: { canonical: "https://wattly.jp/providers" },
  openGraph: {
    title: "自社発電設備を持つ電力会社一覧",
    description:
      "自社発電設備を持つ電力会社を発電方式・設備概要つきで一覧紹介。安定調達・再エネ比率を気にする方の参考に。",
    url: "https://wattly.jp/providers",
    type: "website",
    siteName: "Wattly",
    locale: "ja_JP",
  },
};

type GenerationType = "火力" | "水力" | "原子力" | "太陽光" | "風力" | "バイオマス" | "地熱" | "LNG" | "天然ガス";

type Provider = {
  name: string;
  category: "大手電力" | "都市ガス系" | "独立系再エネ" | "新電力";
  hasOwnGeneration: true;
  generationTypes: GenerationType[];
  overview: string;
  officialUrl: string;
};

const PROVIDERS: Provider[] = [
  // 大手電力（旧一般電気事業者）
  {
    name: "北海道電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "LNG"],
    overview: "石狩湾新港LNG火力（最新鋭）、苫東厚真火力、水力多数。泊原発は現在停止中。",
    officialUrl: "https://www.hepco.co.jp/",
  },
  {
    name: "東北電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "原子力"],
    overview: "女川原発（2号機再稼働）、仙台・新仙台火力、水力多数。",
    officialUrl: "https://www.tohoku-epco.co.jp/",
  },
  {
    name: "東京電力EP",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "原子力", "太陽光", "風力"],
    overview: "東京電力グループ全体で大規模発電資産を保有。柏崎刈羽原発・多数の火力・水力・再エネ施設。",
    officialUrl: "https://www.tepco.co.jp/ep/",
  },
  {
    name: "中部電力ミライズ",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "原子力"],
    overview: "中部電力グループで水力約200ヶ所。浜岡原発（停止中）。グループ全体の発電資産を活用。",
    officialUrl: "https://miraiz.chuden.co.jp/",
  },
  {
    name: "北陸電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "LNG"],
    overview: "富山・石川・福井の豊富な水力、富山新港LNG火力。志賀原発は現在停止中。",
    officialUrl: "https://www.rikuden.co.jp/",
  },
  {
    name: "関西電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "原子力", "太陽光", "風力"],
    overview: "水力152ヶ所（約825万kW）、美浜・高浜・大飯原発（稼働中）、火力多数。",
    officialUrl: "https://www.kepco.co.jp/",
  },
  {
    name: "中国電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力"],
    overview: "三隅石炭火力（国内最新鋭）、水力多数、島根原発2号機が2024年再稼働。",
    officialUrl: "https://www.energia.co.jp/",
  },
  {
    name: "四国電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "原子力"],
    overview: "伊方原発（稼働中）、坂出・橘湾火力、水力多数。",
    officialUrl: "https://www.yonden.co.jp/",
  },
  {
    name: "九州電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "水力", "原子力", "太陽光", "風力"],
    overview: "川内・玄海原発（稼働中）、松浦・苅田等の大型火力。再エネも積極展開。",
    officialUrl: "https://www.kyuden.co.jp/",
  },
  {
    name: "沖縄電力",
    category: "大手電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "LNG"],
    overview: "吉の浦LNG火力、具志川・金武等の石炭・石油火力。原発なし・離島の独立系統。",
    officialUrl: "https://www.okiden.co.jp/",
  },
  // 都市ガス系
  {
    name: "東京ガス",
    category: "都市ガス系",
    hasOwnGeneration: true,
    generationTypes: ["火力", "LNG", "太陽光"],
    overview: "レシプロエンジン発電約30万kW。姫路天然ガス発電所（2026年1月稼働）。メガソーラーも展開中。",
    officialUrl: "https://home.tokyo-gas.co.jp/gas_power/",
  },
  {
    name: "大阪ガス（Daigas）",
    category: "都市ガス系",
    hasOwnGeneration: true,
    generationTypes: ["火力", "LNG", "太陽光"],
    overview: "泉北天然ガス発電所110万kW（国内最大級）、国内約181万kW＋海外約120万kWの発電施設を保有。",
    officialUrl: "https://home.osakagas.co.jp/",
  },
  {
    name: "北海道ガス",
    category: "都市ガス系",
    hasOwnGeneration: true,
    generationTypes: ["天然ガス", "太陽光", "バイオマス"],
    overview: "石狩発電所（ガスエンジン12台・93.6MW）、札幌発電所（15.6MW）、苫小牧木質バイオマス（5.9MW）。",
    officialUrl: "https://www.hokkaido-gas.co.jp/",
  },
  // 新電力・独立系
  {
    name: "ENEOSでんき",
    category: "新電力",
    hasOwnGeneration: true,
    generationTypes: ["火力", "LNG", "バイオマス"],
    overview: "全国100ヶ所以上・計300万kW超の自社発電所。五井火力（LNG複合サイクル）、室蘭バイオマス等。",
    officialUrl: "https://www.eneos-power.co.jp/",
  },
  {
    name: "Looopでんき",
    category: "新電力",
    hasOwnGeneration: true,
    generationTypes: ["太陽光"],
    overview: "EPC事業を通じて全国に自社太陽光発電所を保有・運営。O&M実績400MW超。市場連動型プランが特徴。",
    officialUrl: "https://looop-denki.com/",
  },
  {
    name: "J-POWER（電源開発）",
    category: "独立系再エネ",
    hasOwnGeneration: true,
    generationTypes: ["水力", "火力", "風力", "地熱", "バイオマス", "太陽光"],
    overview: "全国約100ヶ所・発電設備容量約1,800万kW。石炭火力で国内シェア約4割。元国策発電会社。",
    officialUrl: "https://www.jpower.co.jp/",
  },
  {
    name: "レノバ",
    category: "独立系再エネ",
    hasOwnGeneration: true,
    generationTypes: ["バイオマス", "太陽光", "地熱", "風力"],
    overview: "東証上場の独立系再エネ事業者。秋田・石巻・苅田等のバイオマス、南阿蘇地熱（2023年）等を運営。",
    officialUrl: "https://www.renovainc.com/",
  },
  {
    name: "リニューアブル・ジャパン",
    category: "独立系再エネ",
    hasOwnGeneration: true,
    generationTypes: ["太陽光", "風力", "水力"],
    overview: "累計約1GW開発・取得実績。O&M受託は2GW超。2024年に東急不動産が子会社化。",
    officialUrl: "https://www.rn-j.com/",
  },
  {
    name: "ユーラスエナジー",
    category: "独立系再エネ",
    hasOwnGeneration: true,
    generationTypes: ["風力", "太陽光"],
    overview: "風力・太陽光の連系容量国内No.1（179プロジェクト・5.2GW）。2025年4月にSBエナジーと統合。",
    officialUrl: "https://www.eurus-energy.com/",
  },
  {
    name: "シン・エナジー",
    category: "新電力",
    hasOwnGeneration: true,
    generationTypes: ["太陽光", "風力", "水力", "地熱", "バイオマス"],
    overview: "兵庫県神戸市に本社。自社で多様な再エネ発電所を開発・運営。小水力・地熱まで幅広く展開。",
    officialUrl: "https://www.symenergy.co.jp/",
  },
];

const GENERATION_TYPE_COLORS: Record<GenerationType, string> = {
  火力: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  水力: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  原子力: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  太陽光: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  風力: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  バイオマス: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  地熱: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  LNG: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  天然ガス: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

const CATEGORIES = ["大手電力", "都市ガス系", "新電力", "独立系再エネ"] as const;

export default function ProvidersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "自社発電設備を持つ電力会社一覧",
    description: "自社発電設備を保有する電力会社のリスト",
    url: `${BRAND.url}/providers`,
    numberOfItems: PROVIDERS.length,
    itemListElement: PROVIDERS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.officialUrl,
    })),
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
            <Zap size={28} className="text-wt-amber" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            自社発電設備を持つ
            <span className="text-wt-amber">電力会社</span>一覧
          </h1>
          <p className="text-wt-on-dark-muted text-lg max-w-2xl mx-auto leading-relaxed">
            自社で発電所を保有・運営している電力会社を、
            <br className="hidden md:block" />
            発電方式・設備概要つきでまとめました。
          </p>
        </div>
      </section>

      {/* 解説 */}
      <section className="py-10 px-4 bg-wt-surface-alt">
        <div className="mx-auto max-w-3xl prose-wt text-sm">
          <p>
            電力会社はすべてが自前の発電所を持っているわけではありません。
            卸電力市場や他社からの調達だけで電力を調達する会社も多く、
            <strong>自社発電設備の有無は供給安定性や料金の透明性に影響する</strong>ことがあります。
            このページでは、自社発電設備（発電所）を保有・運営している会社のみを掲載しています。
          </p>
          <p className="mt-2 text-wt-text-muted text-xs">
            ※ 大手電力グループの場合、小売会社が直接発電するのではなく「グループ会社が発電、小売会社は調達」という構造が一般的です。ここでは「グループとして自社発電あり」の場合も掲載しています。情報は2025〜2026年時点の公開情報にもとづきます。
          </p>
        </div>
      </section>

      {/* 一覧 */}
      <section className="py-14 px-4">
        <div className="mx-auto max-w-4xl space-y-14">
          {CATEGORIES.map((cat) => {
            const items = PROVIDERS.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="text-xl font-bold text-wt-text mb-6 border-b border-wt-border pb-2">
                  {cat}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((provider) => (
                    <div
                      key={provider.name}
                      className="rounded-xl border border-wt-border bg-wt-surface p-5 flex flex-col gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold text-wt-text leading-snug">
                          {provider.name}
                        </h3>
                        <a
                          href={provider.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-xs text-wt-primary hover:underline"
                        >
                          公式サイト →
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {provider.generationTypes.map((type) => (
                          <span
                            key={type}
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${GENERATION_TYPE_COLORS[type]}`}
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-wt-text-muted leading-relaxed">
                        {provider.overview}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 関連リンク */}
      <section className="py-14 px-4 bg-wt-surface-alt">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-wt-text-muted text-sm mb-6">
            電力会社を実際に比較したい方は、料金シミュレーターもご活用ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/simulator"
              className="inline-block px-6 py-3 bg-wt-primary text-white rounded-lg hover:bg-wt-primary-dark transition-colors text-sm font-medium"
            >
              料金シミュレーターへ
            </Link>
            <Link
              href="/column"
              className="inline-block px-6 py-3 border border-wt-border text-wt-text rounded-lg hover:bg-wt-surface transition-colors text-sm font-medium"
            >
              コラム一覧へ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
