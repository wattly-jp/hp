import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "Wattlyへのお問い合わせはこちら。記事に関するご質問や掲載のご相談など、お気軽にご連絡ください。",
  alternates: { canonical: "https://wattly.jp/contact" },
  openGraph: {
    title: "お問い合わせ",
    description:
      "Wattlyへのお問い合わせはこちら。記事に関するご質問や掲載のご相談など、お気軽にご連絡ください。",
    url: "https://wattly.jp/contact",
    type: "website",
    siteName: "Wattly",
    locale: "ja_JP",
  },
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 px-4">
      <div className="mx-auto max-w-4xl text-center mb-10">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-wt-primary/10 text-wt-primary mb-4">
          <Mail size={20} />
        </div>
        <h1 className="text-2xl font-bold text-wt-text mb-2">お問い合わせ</h1>
        <p className="text-wt-text-secondary text-sm">
          記事に関するご質問や掲載のご相談など、お気軽にお問い合わせください。
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
