import type { PowerPlan } from "../types";

// 2025年時点の料金
export const KANSAI_PLANS: PowerPlan[] = [
  {
    id: "kepco-juryou-a",
    providerName: "関西電力",
    planName: "従量電灯A",
    isIncumbent: true,
    regionId: "kansai",
    basicCharge: {
      kind: "minimum",
      price: 522.58,
      includedKwh: 15,
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 20.21 },
      { upToKwh: 300, pricePerKwh: 25.61 },
      { upToKwh: null, pricePerKwh: 28.59 },
    ],
    officialUrl: "https://kepco.jp/ryokin/menu/dento_a/",
  },
  {
    id: "osaka-gas-base-a-g",
    providerName: "大阪ガス",
    planName: "ベースプランA-G",
    isIncumbent: false,
    regionId: "kansai",
    basicCharge: {
      kind: "minimum",
      price: 466.57,
      includedKwh: 15,
    },
    consumptionTiers: [
      { upToKwh: 120, pricePerKwh: 20.21 },
      { upToKwh: 350, pricePerKwh: 24.8 },
      { upToKwh: null, pricePerKwh: 27.72 },
    ],
    notes: "大阪ガスのガスセットプラン。最低料金・第1段階は関電と同額",
    officialUrl: "https://home.osakagas.co.jp/energy/electricity/price/plan_ag/",
  },
];
