import { HOUSEHOLD_PRESETS } from "@/data/simulator/household-presets";
import { Users, Pencil } from "lucide-react";

type InputMode = "preset" | "manual";

interface UsageInputProps {
  mode: InputMode;
  onModeChange: (mode: InputMode) => void;
  presetId: string;
  onPresetChange: (id: string) => void;
  manualKwh: number;
  onManualKwhChange: (kwh: number) => void;
}

export function UsageInput({
  mode,
  onModeChange,
  presetId,
  onPresetChange,
  manualKwh,
  onManualKwhChange,
}: UsageInputProps) {
  return (
    <div>
      <h2 className="text-lg font-bold text-wt-text mb-4">
        ② 月間の電気使用量
      </h2>

      {/* タブ切り替え */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => onModeChange("preset")}
          className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            mode === "preset"
              ? "bg-wt-primary text-white"
              : "bg-wt-surface border border-wt-border text-wt-text-secondary hover:text-wt-primary"
          }`}
        >
          <Users size={14} />
          世帯タイプで選ぶ
        </button>
        <button
          type="button"
          onClick={() => onModeChange("manual")}
          className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            mode === "manual"
              ? "bg-wt-primary text-white"
              : "bg-wt-surface border border-wt-border text-wt-text-secondary hover:text-wt-primary"
          }`}
        >
          <Pencil size={14} />
          使用量を入力
        </button>
      </div>

      {mode === "preset" ? (
        <div className="grid grid-cols-2 gap-3">
          {HOUSEHOLD_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => onPresetChange(preset.id)}
              className={`rounded-xl p-4 text-left transition-all ${
                presetId === preset.id
                  ? "bg-wt-primary/10 border-2 border-wt-primary"
                  : "bg-wt-surface border border-wt-border hover:border-wt-primary/50"
              }`}
            >
              <p className="font-bold text-sm text-wt-text">{preset.label}</p>
              <p className="text-xs text-wt-text-secondary mt-1">
                {preset.description}
              </p>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={50}
              max={1500}
              step={10}
              value={manualKwh}
              onChange={(e) => onManualKwhChange(Number(e.target.value))}
              className="w-28 rounded-lg border border-wt-border bg-wt-surface px-3 py-2 text-right text-lg font-bold text-wt-text focus:border-wt-primary focus:outline-none focus:ring-2 focus:ring-wt-primary/20"
            />
            <span className="text-sm font-medium text-wt-text-secondary">
              kWh / 月
            </span>
          </div>
          <input
            type="range"
            min={50}
            max={1500}
            step={10}
            value={manualKwh}
            onChange={(e) => onManualKwhChange(Number(e.target.value))}
            className="w-full accent-wt-primary"
          />
          <div className="flex justify-between text-xs text-wt-text-muted">
            <span>50kWh</span>
            <span>1,500kWh</span>
          </div>
        </div>
      )}
    </div>
  );
}
