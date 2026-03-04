import type { PowerPlan } from "../types";

// 2024年4月1日〜適用の料金
export const SHIKOKU_PLANS: PowerPlan[] = [
  {
    id: "yonden-juryou-a",
    providerName: "四国電力",
    planName: "従量電灯A",
    isIncumbent: true,
    regionId: "shikoku",
    basicCharge: {
      kind: "minimum",
      price: 666.89,
      includedKwh: 11,
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 30.65 },
      { upToKwh: 300, pricePerKwh: 37.27 },
      { upToKwh: null, pricePerKwh: 40.78 },
    ],
    officialUrl: "https://www.yonden.co.jp/customer/price/plan/juryo_a.html",
  },
];
