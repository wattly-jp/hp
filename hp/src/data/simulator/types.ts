/** 電力エリアID */
export type RegionId =
  | "hokkaido"
  | "tohoku"
  | "tokyo"
  | "chubu"
  | "hokuriku"
  | "kansai"
  | "chugoku"
  | "shikoku"
  | "kyushu"
  | "okinawa";

/** 電力エリア */
export interface Region {
  id: RegionId;
  label: string; // "東京電力エリア"
  shortLabel: string; // "東京"
}

/** アンペア選択肢 */
export interface AmperageOption {
  value: number; // 20, 30, 40, 50, 60
  label: string; // "30A"
}

/** 世帯タイプ（プリセット） */
export interface HouseholdPreset {
  id: string;
  label: string; // "一人暮らし"
  estimatedKwh: number; // 月間推定使用量
  typicalAmperage: number; // 推奨アンペア
  description: string; // "月170kWh程度"
}

/** 従量料金の1段階分 */
export interface ConsumptionTier {
  /** 上限kWh（null = 上限なし・最終段階） */
  upToKwh: number | null;
  /** 円/kWh（税込） */
  pricePerKwh: number;
}

/** 基本料金体系 */
export type BasicChargeType =
  | { kind: "per-amperage"; prices: Record<number, number> }
  | { kind: "minimum"; price: number; includedKwh: number } // 最低料金制（関西・中国・四国・沖縄）
  | { kind: "flat"; price: number }
  | { kind: "zero" };

/** 電力プラン */
export interface PowerPlan {
  id: string;
  providerName: string;
  planName: string;
  /** 大手電力かどうか */
  isIncumbent: boolean;
  regionId: RegionId;
  basicCharge: BasicChargeType;
  consumptionTiers: ConsumptionTier[];
  /** 特記事項 */
  notes?: string;
  /** 公式サイトURL */
  officialUrl: string;
  /** アフィリエイトURL（ASP登録後に追加） */
  affiliateUrl?: string;
}

/** シミュレーション結果 */
export interface SimulationResult {
  plan: PowerPlan;
  /** 概算月額（円） */
  monthlyCost: number;
  /** うち基本料金 */
  basicChargePart: number;
  /** うち従量料金 */
  consumptionPart: number;
  /** 大手電力比の差額（マイナスなら安い） */
  savingsVsIncumbent: number;
}

/** データのメタ情報 */
export interface DataMeta {
  /** データ更新日 YYYY-MM-DD */
  lastUpdated: string;
  /** 免責文言 */
  disclaimer: string;
}
