import type { SimulationResult } from "@/data/simulator/types";
import { ExternalLink } from "lucide-react";

interface ProviderCardProps {
  result: SimulationResult;
  rank: number;
}

export function ProviderCard({ result, rank }: ProviderCardProps) {
  const { plan, monthlyCost, basicChargePart, consumptionPart, savingsVsIncumbent } = result;
  const annualCost = monthlyCost * 12;
  const annualSavings = savingsVsIncumbent * 12;
  const linkUrl = plan.affiliateUrl ?? plan.officialUrl;

  return (
    <div className="rounded-2xl border border-wt-border bg-wt-surface p-5 transition-all hover:shadow-md">
      {/* ヘッダー */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-wt-primary bg-wt-primary/10 px-2 py-0.5 rounded-full">
              {rank}位
            </span>
            <h3 className="font-bold text-wt-text">{plan.providerName}</h3>
          </div>
          <p className="text-sm text-wt-text-secondary mt-0.5">
            {plan.planName}
          </p>
        </div>
        {plan.isIncumbent && (
          <span className="text-xs bg-wt-surface-alt text-wt-text-secondary px-2 py-0.5 rounded-full">
            大手電力
          </span>
        )}
      </div>

      {/* 金額 */}
      <div className="flex items-baseline gap-4 mb-3">
        <div>
          <p className="text-xs text-wt-text-muted">月額概算</p>
          <p className="text-2xl font-bold text-wt-text">
            ¥{monthlyCost.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-wt-text-muted">年間概算</p>
          <p className="text-sm font-semibold text-wt-text-secondary">
            ¥{annualCost.toLocaleString()}
          </p>
        </div>
      </div>

      {/* 内訳 */}
      <p className="text-xs text-wt-text-muted mb-3">
        基本料金 ¥{basicChargePart.toLocaleString()} ／ 従量料金 ¥
        {consumptionPart.toLocaleString()}
      </p>

      {/* 節約バッジ */}
      {plan.isIncumbent ? (
        <p className="text-xs text-wt-text-muted mb-3">比較基準（大手電力）</p>
      ) : annualSavings < 0 ? (
        <p className="inline-block text-xs font-bold text-wt-primary bg-wt-primary/10 px-3 py-1 rounded-full mb-3">
          年間 ¥{Math.abs(annualSavings).toLocaleString()} おトク
        </p>
      ) : annualSavings > 0 ? (
        <p className="text-xs text-wt-text-muted mb-3">
          大手電力より年間 ¥{annualSavings.toLocaleString()} 高い
        </p>
      ) : null}

      {/* 特記事項 */}
      {plan.notes && (
        <p className="text-xs text-wt-text-muted bg-wt-surface-alt rounded-lg p-2 mb-3">
          {plan.notes}
        </p>
      )}

      {/* CTA */}
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex items-center justify-center gap-1.5 w-full rounded-lg border border-wt-primary text-wt-primary hover:bg-wt-primary hover:text-white py-2 text-sm font-semibold transition-all"
      >
        公式サイトで詳しく見る
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
