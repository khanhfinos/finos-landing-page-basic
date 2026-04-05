"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function CreditScoringPage() {
  const [activeTab, setActiveTab] = useState<"banks" | "ecosystem">("banks");

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <PageHero
        badge="Sản phẩm"
        title="Credit Scoring Engine"
        description="FinOS sử dụng machine learning để xử lý dữ liệu truyền thống và hành vi, dự đoán khả năng tín dụng của người vay."
      />

      {/* Stats + Graphic */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-14 max-w-3xl mx-auto leading-snug">
            Credit Scoring Engine của chúng tôi đã được chứng minh vượt trội hơn
            mô hình dựa trên nhân khẩu học hơn{" "}
            <span className="text-primary">30%</span>
          </h2>
          <div className="flex justify-center">
            <Image
              src="/credit-scoring-graphic-03.png"
              alt="Credit Scoring Engine"
              width={700}
              height={500}
              className="w-full max-w-xl h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-md">
            {/* Traditional */}
            <div className="bg-white p-8">
              <h3 className="text-center text-gray-700 font-semibold text-base mb-8 pb-4 border-b border-gray-100">
                Chấm điểm tín dụng truyền thống
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Nguồn dữ liệu</p>
                  <p className="text-gray-600 text-sm">Thông tin chủ yếu được thu thập bởi các tổ chức tín dụng hoặc cục tín dụng.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Phạm vi dữ liệu</p>
                  <p className="text-gray-600 text-sm">Chỉ những cá nhân có thông tin khoản vay tại tổ chức tài chính.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Tần suất dữ liệu</p>
                  <p className="text-gray-600 text-sm">Cập nhật không thường xuyên — thường hàng tháng (ít nhất 3 ngày).</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Khuyến nghị</p>
                  <p className="text-gray-600 text-sm">Chủ yếu dựa trên các quy tắc cố định.</p>
                </div>
              </div>
            </div>

            {/* FinOS */}
            <div className="bg-[#00bcd4] p-8">
              <h3 className="text-center text-white font-semibold text-base mb-8 pb-4 border-b border-white/20">
                FinOS Credit Scoring
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-1">Nguồn dữ liệu</p>
                  <p className="text-white text-sm">Dữ liệu tần số cao từ mobile, web, telco và thiết bị cầm tay.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-1">Phạm vi dữ liệu</p>
                  <p className="text-white text-sm">Tất cả cá nhân có điện thoại di động và kết nối internet.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-1">Tần suất dữ liệu</p>
                  <p className="text-white text-sm">Cập nhật thời gian thực hoặc gần thời gian thực.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-1">Khuyến nghị</p>
                  <p className="text-white text-sm">Khuyến nghị dựa trên machine learning, tự thích nghi với các xu hướng thay đổi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute left-0 top-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" stroke="#1a237e" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="#1a237e" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="#1a237e" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
            Lợi ích Đối tác
          </h2>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => setActiveTab("banks")}
              className={`px-6 py-3 rounded text-sm font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
                activeTab === "banks"
                  ? "bg-[#00bcd4] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Dành cho Ngân hàng / TCTD
            </button>
            <button
              onClick={() => setActiveTab("ecosystem")}
              className={`px-6 py-3 rounded text-sm font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
                activeTab === "ecosystem"
                  ? "bg-[#00bcd4] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Dành cho Đối tác Hệ sinh thái
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-8">
            {activeTab === "banks" ? (
              <div>
                <p className="text-[#00bcd4] font-semibold text-lg mb-5">
                  Bằng cách tích hợp Credit Scoring Engine của FinOS vào nền tảng hoặc
                  ứng dụng của bạn, bạn có thể:
                </p>
                <ul className="space-y-4">
                  {[
                    "Mở rộng tập khách hàng tín dụng bằng cách tiếp cận những cá nhân chưa có lịch sử tín dụng truyền thống.",
                    "Giảm rủi ro nợ xấu nhờ mô hình dự đoán chính xác hơn dựa trên dữ liệu đa chiều.",
                    "Tăng tốc độ phê duyệt khoản vay với hệ thống chấm điểm tự động, thời gian thực.",
                    "Tùy chỉnh chiến lược tín dụng phù hợp với từng phân khúc khách hàng.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#00bcd4] flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <p className="text-[#00bcd4] font-semibold text-lg mb-5">
                  Bằng cách nhúng Credit Scoring Engine của FinOS vào nền tảng
                  hoặc ứng dụng white-label, bạn có thể:
                </p>
                <ul className="space-y-4">
                  {[
                    "Tự cung cấp chương trình mua trả góp hoặc trả chậm mà không cần qua tổ chức tín dụng.",
                    "Giới thiệu khách hàng đủ điều kiện đến các tổ chức tín dụng để nhận hoa hồng.",
                    "Sử dụng điểm tín dụng ngoài mục đích cho vay — ví dụ trong marketplace C2C, điểm tín dụng có thể ảnh hưởng đến thứ hạng và chi phí giao dịch của người bán.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#00bcd4] flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
