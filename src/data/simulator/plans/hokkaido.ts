import type { PowerPlan } from "../types";

// 2025年10月1日〜適用の料金
export const HOKKAIDO_PLANS: PowerPlan[] = [
  {
    id: "hepco-juryou-b",
    providerName: "北海道電力",
    planName: "従量電灯B",
    isIncumbent: true,
    regionId: "hokkaido",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 418.0,
        15: 627.0,
        20: 836.0,
        30: 1254.0,
        40: 1672.0,
        50: 2090.0,
        60: 2508.0,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 35.69 },
      { upToKwh: 280, pricePerKwh: 41.98 },
      { upToKwh: null, pricePerKwh: 45.7 },
    ],
    officialUrl: "https://www.hepco.co.jp/home/price/ratemenu/meterratelight.html",
  },
  {
    id: "hokkaido-gas-juryou-b-plus",
    providerName: "北海道ガス",
    planName: "従量電灯Bプラス",
    isIncumbent: false,
    regionId: "hokkaido",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 418.0,
        15: 627.0,
        20: 836.0,
        30: 1254.0,
        40: 1672.0,
        50: 2090.0,
        60: 2508.0,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 34.27 },
      { upToKwh: 280, pricePerKwh: 40.31 },
      { upToKwh: null, pricePerKwh: 43.88 },
    ],
    notes: "北海道ガスの都市ガス契約が必要。基本料金は同額で従量料金が安い",
    officialUrl: "https://www.hokkaido-gas.co.jp/denki/",
  },
];
