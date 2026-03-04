"use client";

import { useState, useMemo } from "react";
import type { RegionId } from "@/data/simulator/types";
import { HOUSEHOLD_PRESETS } from "@/data/simulator/household-presets";
import { DATA_META } from "@/data/simulator/meta";
import { isAmperageRegion } from "@/data/simulator/plans";
import { simulateAll } from "@/lib/simulator";
import { RegionSelect } from "./RegionSelect";
import { UsageInput } from "./UsageInput";
import { AmperageSelect } from "./AmperageSelect";
import { ResultsList } from "./ResultsList";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { Search } from "lucide-react";

type InputMode = "preset" | "manual";

export function SimulatorForm() {
  const [region, setRegion] = useState<RegionId | null>(null);
  const [inputMode, setInputMode] = useState<InputMode>("preset");
  const [presetId, setPresetId] = useState("family");
  const [manualKwh, setManualKwh] = useState(400);
  const [amperage, setAmperage] = useState(40);
  const [showResults, setShowResults] = useState(false);

  const selectedPreset = HOUSEHOLD_PRESETS.find((p) => p.id === presetId);
  const effectiveKwh =
    inputMode === "preset"
      ? (selectedPreset?.estimatedKwh ?? 400)
      : manualKwh;

  const needsAmperage = region ? isAmperageRegion(region) : true;

  const results = useMemo(() => {
    if (!region || !showResults) return [];
    return simulateAll(region, effectiveKwh, amperage);
  }, [region, effectiveKwh, amperage, showResults]);

  const handlePresetChange = (id: string) => {
    setPresetId(id);
    const preset = HOUSEHOLD_PRESETS.find((p) => p.id === id);
    if (preset) setAmperage(preset.typicalAmperage);
    setShowResults(false);
  };

  const handleSimulate = () => {
    if (!region) return;
    setShowResults(true);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="space-y-8 rounded-2xl border border-wt-border bg-wt-surface p-6 md:p-8">
        <RegionSelect
          value={region}
          onChange={(r) => {
            setRegion(r);
            setShowResults(false);
          }}
        />

        <UsageInput
          mode={inputMode}
          onModeChange={setInputMode}
          presetId={presetId}
          onPresetChange={handlePresetChange}
          manualKwh={manualKwh}
          onManualKwhChange={(v) => {
            setManualKwh(v);
            setShowResults(false);
          }}
        />

        {needsAmperage && (
          <AmperageSelect
            value={amperage}
            onChange={(a) => {
              setAmperage(a);
              setShowResults(false);
            }}
          />
        )}

        <button
          type="button"
          onClick={handleSimulate}
          disabled={!region}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-wt-primary to-wt-primary-dark py-4 text-lg font-bold text-white transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Search size={20} />
          シミュレーション結果を見る
        </button>
      </div>

      {showResults && results.length > 0 && (
        <ResultsList results={results} kwh={effectiveKwh} amperage={amperage} showAmperage={needsAmperage} />
      )}

      <DisclaimerBanner meta={DATA_META} />
    </div>
  );
}
