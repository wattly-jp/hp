import type { PowerPlan } from "../types";

// 2024年4月1日〜適用の料金
export const TOHOKU_PLANS: PowerPlan[] = [
  {
    id: "tohoku-epco-juryou-b",
    providerName: "東北電力",
    planName: "従量電灯B",
    isIncumbent: true,
    regionId: "tohoku",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 369.6,
        15: 554.4,
        20: 739.2,
        30: 1108.8,
        40: 1478.4,
        50: 1848.0,
        60: 2217.6,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 29.62 },
      { upToKwh: 300, pricePerKwh: 36.37 },
      { upToKwh: null, pricePerKwh: 40.32 },
    ],
    officialUrl: "https://www.tohoku-epco.co.jp/dprivate/plan/home/lightb/",
  },
];
