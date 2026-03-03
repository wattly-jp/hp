import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY が設定されていません");
  return new Resend(key);
}

export async function POST(request: NextRequest) {
  try {
    const resend = getResend();
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "お名前・メールアドレス・お問い合わせ内容は必須です" },
        { status: 400 },
      );
    }

    const { data, error: sendError } = await resend.emails.send({
      from: "Wattly <noreply@wattly.jp>",
      replyTo: "contact@wattly.jp",
      to: [email],
      cc: ["contact@wattly.jp"],
      subject: "【Wattly】お問い合わせを受け付けました",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #14532d, #166534); padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 900;">Wattly</h1>
          </div>
          <div style="padding: 30px;">
            <p>${name} 様</p>
            <p>お問い合わせいただきありがとうございます。<br>以下の内容で受け付けました。折り返しご連絡いたします。</p>
            <div style="margin: 24px 0; padding: 16px; background: #f7faf8; border-radius: 8px; border-left: 4px solid #16a34a;">
              <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${message}</p>
            </div>
            <p style="color: #6b8a6f; font-size: 13px;">※ このメールは自動送信です。ご返信は contact@wattly.jp までお願いいたします。</p>
          </div>
          <div style="padding: 15px; text-align: center; color: #6b8a6f; font-size: 12px; border-top: 1px solid #d1e7d6;">
            &copy; Wattly — 電気のこと、もっとわかりやすく。
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resendエラー:", sendError);
      return NextResponse.json({ error: sendError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("お問い合わせメール送信エラー:", error);
    const message =
      error instanceof Error ? error.message : "送信に失敗しました";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
