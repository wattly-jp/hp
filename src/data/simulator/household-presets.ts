import type { HouseholdPreset } from "./types";

export const HOUSEHOLD_PRESETS: HouseholdPreset[] = [
  {
    id: "single",
    label: "一人暮らし",
    estimatedKwh: 170,
    typicalAmperage: 30,
    description: "月170kWh程度",
  },
  {
    id: "couple",
    label: "二人暮らし",
    estimatedKwh: 300,
    typicalAmperage: 30,
    description: "月300kWh程度",
  },
  {
    id: "family",
    label: "ファミリー（3〜4人）",
    estimatedKwh: 400,
    typicalAmperage: 40,
    description: "月400kWh程度",
  },
  {
    id: "large-family",
    label: "大家族（5人以上）",
    estimatedKwh: 550,
    typicalAmperage: 50,
    description: "月550kWh程度",
  },
];
