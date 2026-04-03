import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `自社発電設備を持つ電力会社一覧 - ${BRAND.name}`,
  description:
    "自社発電設備（発電所）を持つ電力会社を網羅的に一覧紹介。大手電力・都市ガス系・独立系発電事業者（IPP）・再エネ系新電力・製造業系まで、発電方式・設備概要・公式URLをまとめました。",
  alternates: { canonical: "https://wattly.jp/providers" },
  openGraph: {
    title: "自社発電設備を持つ電力会社一覧",
    description:
      "自社発電設備を持つ電力会社を発電方式・設備概要つきで網羅的に紹介。大手電力から再エネIPPまで。",
    url: "https://wattly.jp/providers",
    type: "website",
    siteName: "Wattly",
    locale: "ja_JP",
  },
};

type GenerationType =
  | "火力"
  | "水力"
  | "原子力"
  | "太陽光"
  | "風力"
  | "バイオマス"
  | "地熱"
  | "LNG"
  | "天然ガス"
  | "石炭"
  | "バイオガス"
  | "小水力"
  | "廃熱回収"
  | "副生ガス";

type Provider = {
  name: string;
  category:
    | "大手電力"
    | "大手電力グループ"
    | "都市ガス系"
    | "石油系"
    | "独立系発電事業者（IPP）"
    | "再エネ系新電力"
    | "製造業・インフラ系"
    | "商社系";
  generationTypes: GenerationType[];
  overview: string;
  officialUrl: string;
  note?: string;
};

const PROVIDERS: Provider[] = [
  // 大手電力
  {
    name: "北海道電力",
    category: "大手電力",
    generationTypes: ["火力", "水力", "LNG", "石炭"],
    overview: "石狩湾新港LNG火力（新設稼働）、苫東厚真石炭火力、水力多数。泊原発は現在停止中。",
    officialUrl: "https://www.hepco.co.jp/",
  },
  {
    name: "東北電力",
    category: "大手電力",
    generationTypes: ["火力", "水力", "原子力", "風力", "地熱"],
    overview: "女川原発2号機（2024年11月再稼働）、東通原発（停止中）、水力・火力多数。2030年代再エネ200万kW開発目標。",
    officialUrl: "https://www.tohoku-epco.co.jp/",
  },
  {
    name: "東京電力EP",
    category: "大手電力",
    generationTypes: ["火力", "水力", "原子力", "太陽光", "風力"],
    overview: "発電部門はJERAに移管。グループ全体で柏崎刈羽原発・多数の火力・水力・再エネ設備を保有。",
    officialUrl: "https://www.tepco.co.jp/ep/",
    note: "発電はグループ会社（JERA等）が担当",
  },
  {
    name: "中部電力ミライズ",
    category: "大手電力",
    generationTypes: ["火力", "水力", "原子力"],
    overview: "発電部門はJERAに移管。グループで水力約200ヶ所、浜岡原発（停止中）。小売部門が主体。",
    officialUrl: "https://miraiz.chuden.co.jp/",
    note: "発電はグループ会社（JERA等）が担当",
  },
  {
    name: "北陸電力",
    category: "大手電力",
    generationTypes: ["火力", "水力", "LNG"],
    overview: "旧一般電気事業者中最大級の水力比率（約25%）。富山新港LNG火力、志賀原発（停止中）。",
    officialUrl: "https://www.rikuden.co.jp/",
  },
  {
    name: "関西電力",
    category: "大手電力",
    generationTypes: ["火力", "水力", "原子力", "太陽光", "風力"],
    overview: "大飯・高浜・美浜原発（稼働中）、水力1.9GW超（152ヶ所）、LNG・石炭火力多数。",
    officialUrl: "https://www.kepco.co.jp/",
  },
  {
    name: "中国電力",
    category: "大手電力",
    generationTypes: ["火力", "水力", "石炭"],
    overview: "三隅石炭火力（国内最新鋭）、水力多数、島根原発2号機（2024年再稼働）。",
    officialUrl: "https://www.energia.co.jp/",
  },
  {
    name: "四国電力",
    category: "大手電力",
    generationTypes: ["火力", "水力", "原子力"],
    overview: "伊方原発（稼働中）、坂出・橘湾LNG火力、水力多数。",
    officialUrl: "https://www.yonden.co.jp/",
  },
  {
    name: "九州電力",
    category: "大手電力",
    generationTypes: ["火力", "水力", "原子力", "太陽光", "風力", "地熱"],
    overview: "川内・玄海原発（稼働中）、水力154ヶ所、松浦・苅田等の大型火力。再エネも積極展開。",
    officialUrl: "https://www.kyuden.co.jp/",
  },
  {
    name: "沖縄電力",
    category: "大手電力",
    generationTypes: ["火力", "LNG", "石炭"],
    overview: "吉の浦LNG火力、具志川・金武等の石炭・石油火力。離島型独立系統。原発なし。",
    officialUrl: "https://www.okiden.co.jp/",
  },
  // 大手電力グループ
  {
    name: "JERA",
    category: "大手電力グループ",
    generationTypes: ["火力", "LNG", "石炭"],
    overview: "東京電力・中部電力の発電部門合弁。国内発電容量約6,576万kW（日本最大）。発電電力量は国内の約1/3。",
    officialUrl: "https://www.jera.co.jp/",
  },
  {
    name: "九電みらいエナジー",
    category: "大手電力グループ",
    generationTypes: ["太陽光", "風力", "バイオマス", "地熱", "水力"],
    overview: "九州電力100%子会社。再エネ5電源を自社保有。発電最大出力306,313kW、発電実績10,284万kWh。",
    officialUrl: "https://www.q-mirai.co.jp/",
  },
  // 都市ガス系
  {
    name: "東京ガス",
    category: "都市ガス系",
    generationTypes: ["LNG", "天然ガス", "太陽光"],
    overview: "袖ケ浦LNG基地内ガスエンジン発電所（2025年3月竣工）。合計約30万kWのガスエンジン発電所を保有。大型LNG火力（195万kW）も建設中（2029年度稼働予定）。",
    officialUrl: "https://www.tokyo-gas.co.jp/",
  },
  {
    name: "大阪ガス（Daigas）",
    category: "都市ガス系",
    generationTypes: ["LNG", "太陽光", "風力"],
    overview: "泉北天然ガス発電所（277,500kW×2基）。国内約300万kW＋海外約120万kWの発電施設を保有。",
    officialUrl: "https://www.osakagas.co.jp/",
  },
  {
    name: "東邦ガス",
    category: "都市ガス系",
    generationTypes: ["天然ガス", "LNG"],
    overview: "四日市工場でガスエンジンCGS（16,500kW、2018年稼働）。JERAと知多火力発電所7・8号機を共同開発中（出資25%、2029年度稼働予定）。",
    officialUrl: "https://www.tohogas.co.jp/",
  },
  {
    name: "北海道ガス",
    category: "都市ガス系",
    generationTypes: ["天然ガス", "太陽光", "バイオマス"],
    overview: "石狩発電所（ガスエンジン12台・93.6MW）、札幌発電所（15.6MW）、苫小牧木質バイオマス（5.9MW）。",
    officialUrl: "https://www.hokkaido-gas.co.jp/",
  },
  // 石油系
  {
    name: "ENEOSでんき（ENEOS Power）",
    category: "石油系",
    generationTypes: ["火力", "LNG", "太陽光", "風力", "バイオマス"],
    overview: "全国100ヶ所以上・発電容量300万kW超の自社発電所。五井火力（LNG複合サイクル）、室蘭バイオマス等。",
    officialUrl: "https://www.eneos-power.co.jp/",
  },
  {
    name: "出光グリーンパワー（出光興産系）",
    category: "石油系",
    generationTypes: ["風力", "太陽光", "地熱"],
    overview: "六ケ所村二又風力発電所（51MW）、姫路太陽光発電所、大分地熱バイナリー発電。グループで太陽光3ヶ所・計約14MW。",
    officialUrl: "https://power.idemitsu.com/",
  },
  {
    name: "ENEOSリニューアブル・エナジー（JRE）",
    category: "石油系",
    generationTypes: ["太陽光", "風力"],
    overview: "ENEOS傘下の再エネIPP。稼働中約79万kWを含む国内外合計100万kW超の再エネ発電所を開発・運営。",
    officialUrl: "https://www.eneos-re.com/",
  },
  // IPP
  {
    name: "J-POWER（電源開発）",
    category: "独立系発電事業者（IPP）",
    generationTypes: ["水力", "石炭", "風力", "地熱", "バイオマス", "太陽光"],
    overview: "国内98発電所・約1,800万kW（2025年3月）。水力・石炭火力で国内トップシェア級。海外も32プロジェクト稼働。",
    officialUrl: "https://www.jpower.co.jp/",
  },
  {
    name: "レノバ",
    category: "独立系発電事業者（IPP）",
    generationTypes: ["バイオマス", "太陽光", "地熱", "風力"],
    overview: "東証上場の独立系再エネ事業者。秋田・石巻・苅田等のバイオマス、南阿蘇地熱（2023年）等を運営。",
    officialUrl: "https://www.renovainc.com/",
  },
  {
    name: "リニューアブル・ジャパン",
    category: "独立系発電事業者（IPP）",
    generationTypes: ["太陽光", "風力", "水力"],
    overview: "累計約1GW開発・取得実績。O&M受託2GW超。2024年に東急不動産が子会社化。",
    officialUrl: "https://www.rn-j.com/",
  },
  {
    name: "ユーラスエナジー（豊田通商系）",
    category: "独立系発電事業者（IPP）",
    generationTypes: ["風力", "太陽光"],
    overview: "国内外で風力・太陽光を大規模運営。2025年4月にSBエナジーと統合し国内最大規模の再エネ事業者に。",
    officialUrl: "https://www.eurus-energy.com/",
  },
  {
    name: "SBエナジー（ソフトバンクグループ）",
    category: "独立系発電事業者（IPP）",
    generationTypes: ["太陽光", "風力"],
    overview: "苫東安平ソーラーパーク（約111MW、国内最大級）ほか全国にメガソーラー多数。太陽光667MW・風力60MW運営（2023年時点）。",
    officialUrl: "https://www.sbenergy.co.jp/",
  },
  {
    name: "日本風力開発（JWD）",
    category: "独立系発電事業者（IPP）",
    generationTypes: ["風力"],
    overview: "陸上・洋上風力発電所の開発・運営に特化したIPP。全国各地で風力発電事業を展開。",
    officialUrl: "https://www.jwd.co.jp/",
  },
  {
    name: "自然電力",
    category: "独立系発電事業者（IPP）",
    generationTypes: ["太陽光", "風力", "小水力"],
    overview: "全国70ヶ所超の発電所を開発・運営（太陽光・風力・小水力）。海外（ブラジル・東南アジア等）にも展開。",
    officialUrl: "https://shizen-energy.com/",
  },
  // 再エネ系新電力
  {
    name: "Looopでんき",
    category: "再エネ系新電力",
    generationTypes: ["太陽光", "風力", "水力"],
    overview: "全国41ヶ所・合計64MW保有（2023年6月）、129MW開発中。EPC事業でIPP機能を持つ市場連動型プランで有名。",
    officialUrl: "https://looop-denki.com/",
  },
  {
    name: "シン・エナジー",
    category: "再エネ系新電力",
    generationTypes: ["太陽光", "バイオマス", "バイオガス", "水力", "地熱", "風力"],
    overview: "全国合計74,685kW保有。西宮バイオガス発電（720kW）、生野銀山バイオマス（900kW）等、多方式の再エネを展開。",
    officialUrl: "https://www.symenergy.co.jp/",
  },
  {
    name: "HTBエナジー（H.I.S.グループ）",
    category: "再エネ系新電力",
    generationTypes: ["地熱", "天然ガス", "太陽光", "風力"],
    overview: "大分県別府市の地熱発電所（40kW）、ハウステンボス敷地内のガスタービン発電機を保有。太陽光・風力も開発。",
    officialUrl: "https://htb-energy.co.jp/",
  },
  {
    name: "グリーンエナジー＆カンパニー",
    category: "再エネ系新電力",
    generationTypes: ["太陽光"],
    overview: "土地所有者と連携した太陽光発電所を開発・運営するモデル。全国に発電所を保有。",
    officialUrl: "https://green-energy.co.jp/",
  },
  // 製造業・インフラ系
  {
    name: "日本製鉄（日鉄エンジニアリング）",
    category: "製造業・インフラ系",
    generationTypes: ["副生ガス", "石炭", "廃熱回収"],
    overview: "高炉副生ガス活用の自家発電で消費電力の約88%を自給。室蘭・釜石・広畑・八幡・大分等で約80万kWをIPPとして電力会社へ卸売。法人向け小売も展開。",
    officialUrl: "https://www.nipponsteel.com/",
  },
  {
    name: "JFEスチール",
    category: "製造業・インフラ系",
    generationTypes: ["副生ガス", "石炭", "廃熱回収"],
    overview: "東日本（千葉・京浜）・西日本（倉敷・福山）製鉄所で大規模自家発。JFE千葉クリーンパワーステーションでIPP事業（全量を東電に卸売）。",
    officialUrl: "https://www.jfe-steel.co.jp/",
  },
  {
    name: "王子ホールディングス（王子製紙）",
    category: "製造業・インフラ系",
    generationTypes: ["バイオマス", "廃熱回収"],
    overview: "製紙工場で黒液・木質バイオマスボイラーにより自家発。余剰電力を電力会社・市場へ販売。小売電気事業者として登録済み。",
    officialUrl: "https://www.ojipaper.co.jp/",
  },
  {
    name: "日本製紙グループ",
    category: "製造業・インフラ系",
    generationTypes: ["バイオマス", "廃熱回収"],
    overview: "石巻工場（自家発電率約99%・約170MW）。石巻・八代にバイオマス発電設備新設。余剰電力を販売。小売電気事業者登録済み。",
    officialUrl: "https://www.nipponpapergroup.com/",
  },
  {
    name: "北越コーポレーション",
    category: "製造業・インフラ系",
    generationTypes: ["バイオマス", "廃熱回収"],
    overview: "関東工場（勝田）で木質バイオマスボイラーを稼働。工場内エネルギーをほぼ自己完結し、余剰電力を電力会社に販売。",
    officialUrl: "https://www.hokuetsucorp.com/",
  },
  {
    name: "NTTアノードエナジー",
    category: "製造業・インフラ系",
    generationTypes: ["太陽光", "風力", "地熱", "バイオマス"],
    overview: "NTT通信局舎・データセンター屋根等を活用した再エネ発電所を全国で開発。2030年に26.9億kWhの再エネ発電量を目標。蓄電所も全国18ヶ所建設中。",
    officialUrl: "https://www.ntt-ae.co.jp/",
  },
  // 商社系
  {
    name: "丸紅新電力",
    category: "商社系",
    generationTypes: ["水力", "風力", "太陽光", "バイオマス", "火力"],
    overview: "国内21地点の発電所建設実績。水力30MW超（新電力業界で希少）。丸紅グループは国内外でIPP最大規模の開発実績を持つ。",
    officialUrl: "https://denki.marubeni.co.jp/",
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
  石炭: "bg-stone-100 text-stone-700 dark:bg-stone-900/30 dark:text-stone-300",
  バイオガス: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300",
  小水力: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  廃熱回収: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  副生ガス: "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-300",
};

const CATEGORIES: Provider["category"][] = [
  "大手電力",
  "大手電力グループ",
  "都市ガス系",
  "石油系",
  "独立系発電事業者（IPP）",
  "再エネ系新電力",
  "製造業・インフラ系",
  "商社系",
];

const CATEGORY_DESCRIPTIONS: Record<Provider["category"], string> = {
  "大手電力": "旧一般電気事業者（地域独占の大手10社）。全社が大規模な発電設備を自社保有。",
  "大手電力グループ": "大手電力の発電部門が分社・合弁化した会社。実態上の発電主体。",
  "都市ガス系": "都市ガス会社が電力小売参入にあたって自社発電設備を整備・保有。",
  "石油系": "石油会社・石油系グループが運営する発電事業者。",
  "独立系発電事業者（IPP）": "電力会社グループや製造業とは独立して発電事業を営む事業者。再エネ中心。",
  "再エネ系新電力": "発電設備を自社保有する再エネ特化の新電力。小売も兼業。",
  "製造業・インフラ系": "製造プロセスの副産物・廃熱等を活用した自家発電を持ち、余剰分を販売。",
  "商社系": "総合商社グループが電力小売と発電を一体で展開。",
};

export default function ProvidersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "自社発電設備を持つ電力会社一覧",
    description: "自社発電設備を保有する電力会社の網羅的リスト",
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
            自社で発電所を保有・運営する電力会社を、
            <br className="hidden md:block" />
            発電方式・設備概要つきで網羅的にまとめました。
          </p>
          <p className="mt-4 text-wt-on-dark-muted text-sm">
            掲載 {PROVIDERS.length} 社 ／ 情報は2025〜2026年時点の公開情報にもとづきます
          </p>
        </div>
      </section>

      {/* 解説 */}
      <section className="py-10 px-4 bg-wt-surface-alt">
        <div className="mx-auto max-w-3xl text-sm text-wt-text-muted leading-relaxed space-y-3">
          <p>
            電力会社はすべてが自前の発電所を持っているわけではありません。
            卸電力市場や他社からの調達だけで電力を供給する会社も多く、
            <strong className="text-wt-text">自社発電設備の有無は供給安定性や電源構成の透明性に影響する</strong>ことがあります。
            このページでは、自社発電設備（発電所）を保有・運営している会社のみを掲載しています。
          </p>
          <p>
            大手電力グループの場合、小売会社と発電会社が分離されているケースが多く（例: 東京電力EP＋JERA）、
            「グループとして自社発電あり」の場合もここに含めています。
            製造業系は自家発電の余剰分を販売するモデルです。
          </p>
        </div>
      </section>

      {/* 一覧 */}
      <section className="py-14 px-4">
        <div className="mx-auto max-w-4xl space-y-16">
          {CATEGORIES.map((cat) => {
            const items = PROVIDERS.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <div className="mb-6 border-b border-wt-border pb-3">
                  <h2 className="text-xl font-bold text-wt-text">{cat}</h2>
                  <p className="text-sm text-wt-text-muted mt-1">
                    {CATEGORY_DESCRIPTIONS[cat]}
                  </p>
                </div>
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
                      {provider.note && (
                        <p className="text-xs text-wt-text-muted bg-wt-surface-alt rounded px-3 py-1.5">
                          ※ {provider.note}
                        </p>
                      )}
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
            電力会社を実際に料金で比較したい方は、シミュレーターもご活用ください。
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
