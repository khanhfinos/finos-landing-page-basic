import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu | FinOS - Hệ Điều Hành Tài Chính",
  description: "FinOS là công ty FinTech cung cấp năng lực cho các sản phẩm & dịch vụ tài chính kỹ thuật số tại Đông Nam Á.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/career-banner.png')" }}
      >
        <div className="absolute inset-0 bg-primary-dark/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Giới thiệu – FinOS
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            FinOS là công ty FinTech cung cấp năng lực cho các sản phẩm &amp; dịch vụ tài chính kỹ thuật số tại Đông Nam Á.
          </p>
        </div>
      </section>

      {/* About FinOS Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-5">
            Về Công Nghệ FinOS
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12">
            FinOS là công ty FinTech cung cấp năng lực cho các sản phẩm &amp; dịch vụ tài chính kỹ thuật số tại Đông Nam Á.
          </p>
          <div className="flex justify-center">
            <Image
              src="/eco-system-03.png"
              alt="FinOS Ecosystem"
              width={730}
              height={960}
              className="w-full max-w-2xl h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#eef4f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-12 items-start">
            {/* Our Vision */}
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-8 flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
                  <circle cx="80" cy="80" r="70" stroke="#00bcd4" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
                  <circle cx="80" cy="80" r="50" stroke="#00bcd4" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                  <circle cx="80" cy="80" r="30" stroke="#00bcd4" strokeWidth="2" opacity="0.8" />
                  <circle cx="80" cy="80" r="10" fill="#00bcd4" />
                  <line x1="80" y1="10" x2="80" y2="50" stroke="#00bcd4" strokeWidth="2" />
                  <line x1="80" y1="110" x2="80" y2="150" stroke="#00bcd4" strokeWidth="2" />
                  <line x1="10" y1="80" x2="50" y2="80" stroke="#00bcd4" strokeWidth="2" />
                  <line x1="110" y1="80" x2="150" y2="80" stroke="#00bcd4" strokeWidth="2" />
                  <polygon points="80,52 86,64 74,64" fill="#00bcd4" />
                </svg>
              </div>
              <p className="text-accent font-semibold text-base uppercase tracking-widest mb-3">
                Tầm Nhìn
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trở thành Hệ Điều Hành Tài Chính hàng đầu, cung cấp năng lực
                cho các sản phẩm &amp; dịch vụ tài chính kỹ thuật số tại Đông Nam Á.
              </p>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 mb-8 flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
                  <circle cx="80" cy="80" r="70" stroke="#00bcd4" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
                  <circle cx="80" cy="80" r="50" stroke="#00bcd4" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                  <circle cx="80" cy="80" r="30" stroke="#00bcd4" strokeWidth="2" opacity="0.8" />
                  <circle cx="80" cy="80" r="10" fill="#00bcd4" />
                  <line x1="95" y1="65" x2="145" y2="30" stroke="#00bcd4" strokeWidth="2" />
                  <polygon points="145,30 132,34 138,46" fill="#00bcd4" />
                </svg>
              </div>
              <p className="text-accent font-semibold text-base uppercase tracking-widest mb-3">
                Sứ Mệnh
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cung cấp các sản phẩm &amp; dịch vụ tài chính đơn giản, tiết kiệm
                và ứng dụng công nghệ cao — chỉ bằng một chạm — trên toàn bộ
                hệ sinh thái tại Đông Nam Á.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      <Footer />
    </>
  );
}
