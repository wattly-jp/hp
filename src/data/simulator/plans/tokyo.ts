import type { PowerPlan } from "../types";

// 各社の料金は2024〜2025年時点の公開情報に基づく
export const TOKYO_PLANS: PowerPlan[] = [
  {
    id: "tepco-juryou-b",
    providerName: "東京電力EP",
    planName: "従量電灯B",
    isIncumbent: true,
    regionId: "tokyo",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 311.75,
        15: 467.63,
        20: 623.5,
        30: 935.25,
        40: 1247.0,
        50: 1558.75,
        60: 1870.5,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 29.8 },
      { upToKwh: 300, pricePerKwh: 36.4 },
      { upToKwh: null, pricePerKwh: 40.49 },
    ],
    officialUrl: "https://www.tepco.co.jp/ep/private/plan/old01.html",
  },
  {
    id: "tokyo-gas-basic",
    providerName: "東京ガス",
    planName: "基本プラン",
    isIncumbent: false,
    regionId: "tokyo",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 311.74,
        15: 467.61,
        20: 623.48,
        30: 935.22,
        40: 1246.96,
        50: 1558.7,
        60: 1870.44,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 29.7 },
      { upToKwh: 300, pricePerKwh: 35.69 },
      { upToKwh: null, pricePerKwh: 39.5 },
    ],
    notes: "ガスとセットで契約するとさらに割引あり",
    officialUrl: "https://home.tokyo-gas.co.jp/gas_power/plan/power/menu_basic.html",
  },
  {
    id: "eneos-denki-tokyo-v",
    providerName: "ENEOSでんき",
    planName: "東京Vプラン",
    isIncumbent: false,
    regionId: "tokyo",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 311.75,
        15: 467.63,
        20: 623.5,
        30: 935.25,
        40: 1247.0,
        50: 1558.75,
        60: 1870.5,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 29.8 },
      { upToKwh: 300, pricePerKwh: 34.85 },
      { upToKwh: null, pricePerKwh: 36.9 },
    ],
    notes: "にねんとくとく割でさらに0.20円/kWh引き（3年目以降0.30円/kWh引き）",
    officialUrl: "https://www.eneos-power.co.jp/denki/plan/v/",
  },
  {
    id: "octopus-green-tokyo",
    providerName: "オクトパスエナジー",
    planName: "グリーンオクトパス",
    isIncumbent: false,
    regionId: "tokyo",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 295.0,
        15: 442.5,
        20: 590.0,
        30: 885.0,
        40: 1180.0,
        50: 1475.0,
        60: 1770.0,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 20.62 },
      { upToKwh: 300, pricePerKwh: 25.29 },
      { upToKwh: null, pricePerKwh: 27.44 },
    ],
    notes: "実質再エネ100%。基本料金・従量単価はTEPCOより安いが、燃料費調整額が高めの傾向あり",
    officialUrl: "https://octopusenergy.co.jp/",
  },
  {
    // 2025年4月リニューアル後の料金体系
    // 基本料金 = 実量制（287.09円/kW = 託送基本料金230.67円 + 容量拠出金56.42円）
    // アンペア→kW換算: 10A≒1kW で近似
    // 従量料金 = 固定従量料金15.28円/kWh（サービス料7円+託送従量8.28円）+ 電源料金（JEPX連動・平均約12〜13円/kWh）
    id: "looop-smart-time-one-tokyo",
    providerName: "Looopでんき",
    planName: "スマートタイムONE",
    isIncumbent: false,
    regionId: "tokyo",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 287.09,
        15: 430.64,
        20: 574.18,
        30: 861.27,
        40: 1148.36,
        50: 1435.45,
        60: 1722.54,
      },
    },
    consumptionTiers: [
      { upToKwh: null, pricePerKwh: 28.0 },
    ],
    notes: "市場連動型プラン。基本料金は実量制（10A≒1kWで換算した概算値）。従量単価は固定分15.28円+電源料金（JEPX平均）の概算で、実際は30分ごとに変動します",
    officialUrl: "https://looop-denki.com/",
  },
];
