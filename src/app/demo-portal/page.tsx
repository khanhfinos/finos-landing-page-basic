"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DemoPortalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center px-6">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/50 text-accent text-xs font-semibold uppercase tracking-widest mb-8">
            FinOS eSignSuite · Demo Portal
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sắp ra mắt
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10">
            Demo Portal đang được hoàn thiện — nơi bạn có thể trải nghiệm toàn bộ luồng ký số trực tiếp mà không cần cài đặt hay đăng ký tài khoản.
          </p>

          {/* Email notify */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 max-w-sm px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent focus:bg-white/15 transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-sm transition-colors shadow-lg"
            >
              Nhận thông báo
            </button>
          </form>

          {/* Back link */}
          <Link
            href="/services/esign"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            ← Quay lại trang eSignSuite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
