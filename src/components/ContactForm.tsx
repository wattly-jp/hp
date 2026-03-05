"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="mx-auto max-w-lg rounded-2xl bg-wt-surface p-10 text-center border border-wt-border">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-wt-primary/10">
          <CheckCircle2 size={28} className="text-wt-primary" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-wt-text">送信しました</h3>
        <p className="mt-2 text-wt-text-secondary">
          お問い合わせありがとうございます。折り返しご連絡いたします。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-wt-primary underline hover:no-underline"
        >
          続けてお問い合わせする
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-1 w-full rounded-xl border border-wt-border bg-wt-surface px-4 py-2.5 text-sm text-wt-text transition-all focus:border-wt-primary focus:outline-none focus:ring-2 focus:ring-wt-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg rounded-2xl bg-wt-surface p-8 border border-wt-border"
    >
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-wt-text">
              お名前 <span className="text-wt-danger">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-wt-text">
              メールアドレス <span className="text-wt-danger">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-wt-text">
            お問い合わせ内容 <span className="text-wt-danger">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-wt-danger">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-wt-primary to-wt-primary-dark py-3.5 text-sm font-bold text-white transition-all hover:shadow-lg disabled:opacity-50"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
