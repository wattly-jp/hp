import type { RegionId } from "@/data/simulator/types";
import { REGIONS } from "@/data/simulator/regions";

interface RegionSelectProps {
  value: RegionId | null;
  onChange: (region: RegionId) => void;
}

export function RegionSelect({ value, onChange }: RegionSelectProps) {
  return (
    <div>
      <h2 className="text-lg font-bold text-wt-text mb-4">
        ① お住まいのエリアを選択
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {REGIONS.map((region) => (
          <button
            key={region.id}
            type="button"
            onClick={() => onChange(region.id)}
            className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
              value === region.id
                ? "bg-wt-primary text-white shadow-md"
                : "bg-wt-surface border border-wt-border text-wt-text hover:border-wt-primary hover:text-wt-primary"
            }`}
          >
            {region.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
