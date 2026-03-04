import type { Region, RegionId } from "./types";

export const REGIONS: Region[] = [
  { id: "hokkaido", label: "北海道電力エリア", shortLabel: "北海道" },
  { id: "tohoku", label: "東北電力エリア", shortLabel: "東北" },
  { id: "tokyo", label: "東京電力エリア", shortLabel: "東京" },
  { id: "chubu", label: "中部電力エリア", shortLabel: "中部" },
  { id: "hokuriku", label: "北陸電力エリア", shortLabel: "北陸" },
  { id: "kansai", label: "関西電力エリア", shortLabel: "関西" },
  { id: "chugoku", label: "中国電力エリア", shortLabel: "中国" },
  { id: "shikoku", label: "四国電力エリア", shortLabel: "四国" },
  { id: "kyushu", label: "九州電力エリア", shortLabel: "九州" },
  { id: "okinawa", label: "沖縄電力エリア", shortLabel: "沖縄" },
];

export const REGION_MAP: Record<RegionId, Region> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r]),
) as Record<RegionId, Region>;
