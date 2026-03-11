import type { PowerPlan } from "../types";

// 2024年4月1日〜適用の料金
export const CHUGOKU_PLANS: PowerPlan[] = [
  {
    id: "energia-juryou-a",
    providerName: "中国電力",
    planName: "従量電灯A",
    isIncumbent: true,
    regionId: "chugoku",
    basicCharge: {
      kind: "minimum",
      price: 759.68,
      includedKwh: 15,
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 32.75 },
      { upToKwh: 300, pricePerKwh: 39.43 },
      { upToKwh: null, pricePerKwh: 41.55 },
    ],
    officialUrl: "https://www.energia-support.com/pricemenu/meter_a.html",
  },
];
