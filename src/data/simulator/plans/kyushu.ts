import type { PowerPlan } from "../types";

// 2024年4月1日〜適用の料金
export const KYUSHU_PLANS: PowerPlan[] = [
  {
    id: "kyuden-juryou-b",
    providerName: "九州電力",
    planName: "従量電灯B",
    isIncumbent: true,
    regionId: "kyushu",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 316.24,
        15: 474.36,
        20: 632.48,
        30: 948.72,
        40: 1264.96,
        50: 1581.2,
        60: 1897.44,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 18.37 },
      { upToKwh: 300, pricePerKwh: 23.97 },
      { upToKwh: null, pricePerKwh: 26.97 },
    ],
    officialUrl: "https://customer.kyuden.co.jp/ja/electricity/home-plan/jyuryo-b.html",
  },
];
