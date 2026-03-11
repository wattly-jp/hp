import type { PowerPlan, RegionId } from "../types";
import { HOKKAIDO_PLANS } from "./hokkaido";
import { TOHOKU_PLANS } from "./tohoku";
import { TOKYO_PLANS } from "./tokyo";
import { CHUBU_PLANS } from "./chubu";
import { HOKURIKU_PLANS } from "./hokuriku";
import { KANSAI_PLANS } from "./kansai";
import { CHUGOKU_PLANS } from "./chugoku";
import { SHIKOKU_PLANS } from "./shikoku";
import { KYUSHU_PLANS } from "./kyushu";
import { OKINAWA_PLANS } from "./okinawa";

const PLANS_BY_REGION: Record<RegionId, PowerPlan[]> = {
  hokkaido: HOKKAIDO_PLANS,
  tohoku: TOHOKU_PLANS,
  tokyo: TOKYO_PLANS,
  chubu: CHUBU_PLANS,
  hokuriku: HOKURIKU_PLANS,
  kansai: KANSAI_PLANS,
  chugoku: CHUGOKU_PLANS,
  shikoku: SHIKOKU_PLANS,
  kyushu: KYUSHU_PLANS,
  okinawa: OKINAWA_PLANS,
};

export function getPlansByRegion(regionId: RegionId): PowerPlan[] {
  return PLANS_BY_REGION[regionId] ?? [];
}

/** エリアがアンペア制かどうか */
export function isAmperageRegion(regionId: RegionId): boolean {
  const plans = PLANS_BY_REGION[regionId];
  const incumbent = plans?.find((p) => p.isIncumbent);
  if (!incumbent) return true;
  return incumbent.basicCharge.kind === "per-amperage";
}
