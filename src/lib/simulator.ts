import type {
  PowerPlan,
  SimulationResult,
  RegionId,
} from "@/data/simulator/types";
import { getPlansByRegion } from "@/data/simulator/plans";

/**
 * 月額電気料金を計算する（概算・燃料費調整額と再エネ賦課金は除外）
 */
export function calculateMonthlyCost(
  plan: PowerPlan,
  kwhPerMonth: number,
  amperage: number,
): { total: number; basicPart: number; consumptionPart: number } {
  let basicPart = 0;
  let consumptionStartKwh = 0;

  switch (plan.basicCharge.kind) {
    case "per-amperage":
      basicPart = plan.basicCharge.prices[amperage] ?? 0;
      break;
    case "minimum":
      basicPart = plan.basicCharge.price;
      consumptionStartKwh = plan.basicCharge.includedKwh;
      break;
    case "flat":
      basicPart = plan.basicCharge.price;
      break;
    case "zero":
      basicPart = 0;
      break;
  }

  // 従量料金の計算（段階制）
  let consumptionPart = 0;
  const billableKwh = Math.max(0, kwhPerMonth - consumptionStartKwh);
  let remainingKwh = billableKwh;

  // 段階の起点は consumptionStartKwh から
  let currentPosition = consumptionStartKwh;

  for (const tier of plan.consumptionTiers) {
    if (remainingKwh <= 0) break;

    if (tier.upToKwh === null) {
      // 最終段階: 残り全量
      consumptionPart += remainingKwh * tier.pricePerKwh;
      remainingKwh = 0;
    } else {
      // この段階で使えるkWhを計算
      const tierEnd = tier.upToKwh;
      if (currentPosition >= tierEnd) {
        // この段階は既に超えている
        continue;
      }
      const kwhInTier = Math.min(remainingKwh, tierEnd - currentPosition);
      consumptionPart += kwhInTier * tier.pricePerKwh;
      remainingKwh -= kwhInTier;
      currentPosition += kwhInTier;
    }
  }

  return {
    total: Math.floor(basicPart + consumptionPart),
    basicPart: Math.floor(basicPart),
    consumptionPart: Math.floor(consumptionPart),
  };
}

/**
 * 指定エリアの全プランでシミュレーションを実行し、安い順にソート
 */
export function simulateAll(
  regionId: RegionId,
  kwhPerMonth: number,
  amperage: number,
): SimulationResult[] {
  const plans = getPlansByRegion(regionId);
  const incumbentPlan = plans.find((p) => p.isIncumbent);
  const incumbentCost = incumbentPlan
    ? calculateMonthlyCost(incumbentPlan, kwhPerMonth, amperage).total
    : 0;

  return plans
    .map((plan) => {
      const { total, basicPart, consumptionPart } = calculateMonthlyCost(
        plan,
        kwhPerMonth,
        amperage,
      );
      return {
        plan,
        monthlyCost: total,
        basicChargePart: basicPart,
        consumptionPart,
        savingsVsIncumbent: total - incumbentCost,
      };
    })
    .sort((a, b) => a.monthlyCost - b.monthlyCost);
}
