import type { PowerPlan } from "../types";

// 2024年4月1日〜適用の料金
export const OKINAWA_PLANS: PowerPlan[] = [
  {
    id: "okiden-juryou",
    providerName: "沖縄電力",
    planName: "従量電灯",
    isIncumbent: true,
    regionId: "okinawa",
    basicCharge: {
      kind: "minimum",
      price: 643.05,
      includedKwh: 10,
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 40.2 },
      { upToKwh: 300, pricePerKwh: 45.74 },
      { upToKwh: null, pricePerKwh: 47.72 },
    ],
    officialUrl: "https://www.okiden.co.jp/individual/price-menu/specific/",
  },
];
