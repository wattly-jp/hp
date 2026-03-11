import type { PowerPlan } from "../types";

// 2024年4月1日〜適用の料金
export const CHUBU_PLANS: PowerPlan[] = [
  {
    id: "chuden-juryou-b",
    providerName: "中部電力ミライズ",
    planName: "従量電灯B",
    isIncumbent: true,
    regionId: "chubu",
    basicCharge: {
      kind: "per-amperage",
      prices: {
        10: 321.14,
        15: 481.71,
        20: 642.28,
        30: 963.42,
        40: 1284.56,
        50: 1605.7,
        60: 1926.84,
      },
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 21.2 },
      { upToKwh: 300, pricePerKwh: 25.67 },
      { upToKwh: null, pricePerKwh: 28.62 },
    ],
    officialUrl: "https://miraiz.chuden.co.jp/home/electric/menu/basic/meterrate_hba/",
  },
];
