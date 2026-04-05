"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LucideIcon, ArrowLeft, CheckCircle2 } from "lucide-react";

export interface ComingSoonFeature {
  icon: LucideIcon;
  label: string;
}

interface ComingSoonProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: ComingSoonFeature[];
  backHref?: string;
  backLabel?: string;
  /** Icon shown in the hero card (default: none) */
  heroIcon?: LucideIcon;
}

export default function ComingSoon({
  badge = "Sắp ra mắt",
  title = "Sắp ra mắt",
  description = "Tính năng này đang được hoàn thiện. Đăng ký email để nhận thông báo ngay khi ra mắt.",
  features = [],
  backHref,
  backLabel = "Quay lại",
  heroIcon: HeroIcon,
}: ComingSoonProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden flex flex-col items-center justify-center px-6 py-24">
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-white/5 animate-pulse" />
          <div className="absolute w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
          <div className="absolute w-[1200px] h-[1200px] rounded-full border border-white/[0.02]" />
        </div>
        <div className="absolute top-24 left-12 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 right-12 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/50 text-accent text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
            {badge}
          </span>

          {/* Hero icon */}
          {HeroIcon && (
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                <HeroIcon className="w-10 h-10 text-accent" />
              </div>
            </div>
          )}

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            {description}
          </p>

          {/* Feature list */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12 text-left max-w-2xl mx-auto">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-snug">{label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Email notify */}
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-accent font-semibold text-base mb-10">
              <CheckCircle2 className="w-5 h-5" />
              Cảm ơn! Chúng tôi sẽ thông báo khi tính năng ra mắt.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email để nhận thông báo ra mắt"
                className="flex-1 max-w-sm px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent focus:bg-white/15 transition-colors"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-sm transition-colors shadow-lg whitespace-nowrap"
              >
                Nhận thông báo
              </button>
            </form>
          )}

          {/* Back link */}
          {backHref && (
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
