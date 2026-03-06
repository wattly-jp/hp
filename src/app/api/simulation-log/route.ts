import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const url = process.env.INQUIRY_SUPABASE_URL;
    const key = process.env.INQUIRY_SUPABASE_ANON_KEY;
    if (!url || !key) {
      return NextResponse.json({ success: true }); // 静かに無視
    }

    const supabase = createClient(url, key);
    await supabase.from("simulation_logs").insert({
      region: body.region,
      kwh_per_month: body.kwhPerMonth,
      amperage: body.amperage,
      input_mode: body.inputMode,
      preset_id: body.presetId,
      top_provider: body.topProvider,
      top_cost: body.topCost,
      incumbent_cost: body.incumbentCost,
      savings: body.savings,
      result_count: body.resultCount,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: true }); // ログ保存失敗は無視
  }
}
