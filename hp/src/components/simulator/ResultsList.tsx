import type { SimulationResult } from "@/data/simulator/types";
import { ProviderCard } from "./ProviderCard";

interface ResultsListProps {
  results: SimulationResult[];
  kwh: number;
  amperage: number;
  showAmperage: boolean;
}

export function ResultsList({ results, kwh, amperage, showAmperage }: ResultsListProps) {
  return (
    <div className="mt-8 animate-fade-in">
      <h2 className="text-lg font-bold text-wt-text mb-1">
        シミュレーション結果
      </h2>
      <p className="text-xs text-wt-text-muted mb-5">
        月間使用量 {kwh}kWh{showAmperage ? ` ・ ${amperage}A` : ""} で試算
      </p>
      <div className="grid gap-4">
        {results.map((result, i) => (
          <ProviderCard key={result.plan.id} result={result} rank={i + 1} />
        ))}
      </div>
    </div>
  );
}
