import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-accent/20 rotate-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              FinOS - Hệ Điều Hành Tài Chính
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
              Cung cấp năng lực cho thế hệ sản phẩm &amp; dịch vụ tài chính kỹ thuật số tại Đông Nam Á
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#credit-scoring"
                className="px-5 py-2.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Credit Scoring
              </Link>
              <Link
                href="#micro-lending"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                Micro-Lending
              </Link>
              <Link
                href="#micro-investment"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                Micro-Investment
              </Link>
              <Link
                href="#etms"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                eTMS
              </Link>
              <Link
                href="#econnect"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                eConnect
              </Link>
              <Link
                href="#edocai"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                eDocAI
              </Link>
              <Link
                href="#emeeting"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                eMeeting
              </Link>
              <Link
                href="#ekyc"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                eKYC
              </Link>
              <Link
                href="#esignsuite"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/30 text-sm"
              >
                eSignSuite
              </Link>
            </div>
          </div>

          {/* Ecosystem Graphic Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Central circle */}
              <div className="absolute inset-16 bg-white/10 rounded-full border-2 border-accent/40 flex items-center justify-center">
                <span className="text-white font-bold text-lg">FinOS</span>
              </div>
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent/20 border border-accent/50 rounded-xl px-4 py-2">
                <span className="text-white text-xs font-medium">Ngân hàng</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-accent/20 border border-accent/50 rounded-xl px-4 py-2">
                <span className="text-white text-xs font-medium">
                  Bảo hiểm
                </span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-accent/20 border border-accent/50 rounded-xl px-4 py-2">
                <span className="text-white text-xs font-medium">
                  Cho vay
                </span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-accent/20 border border-accent/50 rounded-xl px-4 py-2">
                <span className="text-white text-xs font-medium">
                  Bán lẻ
                </span>
              </div>
              <div className="absolute top-12 right-8 bg-accent/20 border border-accent/50 rounded-xl px-4 py-2">
                <span className="text-white text-xs font-medium">
                  Viễn thông
                </span>
              </div>
              <div className="absolute bottom-12 left-8 bg-accent/20 border border-accent/50 rounded-xl px-4 py-2">
                <span className="text-white text-xs font-medium">
                  Ví điện tử
                </span>
              </div>
              {/* Connecting lines (decorative) */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 384 384"
              >
                <circle
                  cx="192"
                  cy="192"
                  r="140"
                  fill="none"
                  stroke="rgba(0,188,212,0.15)"
                  strokeWidth="1"
                  strokeDasharray="8 4"
                />
                <circle
                  cx="192"
                  cy="192"
                  r="180"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
