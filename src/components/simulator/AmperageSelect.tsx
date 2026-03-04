import { AMPERAGE_OPTIONS } from "@/data/simulator/amperage";

interface AmperageSelectProps {
  value: number;
  onChange: (amperage: number) => void;
}

export function AmperageSelect({ value, onChange }: AmperageSelectProps) {
  return (
    <div>
      <h2 className="text-lg font-bold text-wt-text mb-2">
        ③ 契約アンペア数
      </h2>
      <p className="text-xs text-wt-text-muted mb-3">
        ※ わからない場合は30Aのままで大丈夫です
      </p>
      <div className="flex gap-2">
        {AMPERAGE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
              value === opt.value
                ? "bg-wt-primary text-white shadow-md"
                : "bg-wt-surface border border-wt-border text-wt-text hover:border-wt-primary hover:text-wt-primary"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
