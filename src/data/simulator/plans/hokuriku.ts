import type { PowerPlan } from "../types";

// 2024年4月1日〜適用の料金
export const HOKURIKU_PLANS: PowerPlan[] = [
  {
    id: "rikuden-juryou-b",
    providerName: "北陸電力",
    planName: "従量電灯B",
    isIncumbent: true,
    regionId: "hokuriku",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 302.5,
        15: 453.75,
        20: 605.0,
        30: 907.5,
        40: 1210.0,
        50: 1512.5,
        60: 1815.0,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 30.86 },
      { upToKwh: 300, pricePerKwh: 34.75 },
      { upToKwh: null, pricePerKwh: 36.46 },
    ],
    officialUrl: "https://www.rikuden.co.jp/ryokin/minsei.html",
  },
];
