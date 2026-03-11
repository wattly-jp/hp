import type { DataMeta } from "@/data/simulator/types";
import { Info } from "lucide-react";

interface DisclaimerBannerProps {
  meta: DataMeta;
}

export function DisclaimerBanner({ meta }: DisclaimerBannerProps) {
  return (
    <div className="mt-8 rounded-xl border border-wt-border bg-wt-surface-alt p-4">
      <div className="flex gap-2">
        <Info size={16} className="mt-0.5 shrink-0 text-wt-text-muted" />
        <div>
          <p className="text-xs text-wt-text-secondary leading-relaxed">
            {meta.disclaimer}
          </p>
          <p className="text-xs text-wt-text-muted mt-2">
            料金データ: {meta.lastUpdated} 時点 ・ β版（料金データ未検証）
          </p>
        </div>
      </div>
    </div>
  );
}
