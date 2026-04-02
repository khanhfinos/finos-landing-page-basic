"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-br from-[#0a7b8c] via-[#1a8fa0] to-[#2ab5c4]">
        {/* Decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <line x1="0" y1="80" x2="720" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="720" y1="160" x2="1440" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <circle cx="155" cy="80" r="5" fill="rgba(255,255,255,0.6)" />
          <circle cx="450" cy="120" r="4" fill="rgba(255,255,255,0.5)" />
          <circle cx="1075" cy="65" r="5" fill="rgba(255,255,255,0.6)" />
        </svg>
        {/* Dark curve at bottom */}
        <div className="absolute bottom-0 left-0 w-1/2 h-24 bg-[#0d3a45]/40 rounded-tr-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Liên hệ FinOS
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Liên hệ với chúng tôi để tìm hiểu thêm về các giải pháp &amp; dịch vụ tài chính.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Gửi yêu cầu của bạn
            </h2>
            {submitted ? (
              <p className="text-green-600 font-medium py-6 text-center">
                Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất có thể.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Họ và tên của bạn?"
                  required
                  className="w-full border border-gray-200 rounded px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại của bạn (VD: +84...)"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email của bạn"
                  required
                  className="w-full border border-gray-200 rounded px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Tên công ty của bạn"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] transition-colors"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Nội dung tin nhắn . . ."
                  rows={5}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] transition-colors resize-y"
                />
                <button
                  type="submit"
                  className="bg-[#00bcd4] hover:bg-[#0097a7] text-white font-medium px-6 py-3 rounded transition-colors cursor-pointer"
                >
                  Gửi yêu cầu
                </button>
              </form>
            )}
          </div>

          {/* Office Address */}
          <div className="mb-8">
            <h3 className="text-[#00bcd4] font-semibold text-lg mb-2">
              Địa chỉ văn phòng
            </h3>
            <p className="text-[#00bcd4] font-medium text-base mb-2">Việt Nam</p>
            <p className="text-gray-700 text-base mb-1">
              FinOS Technology Vietnam Single-Member LLC.
            </p>
            <p className="text-gray-600 text-base mb-1">
              - Giấy chứng nhận đăng ký đầu tư số: 5421840814
            </p>
            <p className="text-gray-600 text-base mb-1">
              - Mã số đăng ký: 0315635726
            </p>
            <p className="text-gray-600 text-base">
              - Địa chỉ: Tầng 9, Galaxy Innovation Hub - Đường D1,
              Khu Công nghệ cao, Phường Tăng Nhơn Phú, TP. Hồ Chí Minh, Việt Nam.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#00bcd4] font-semibold text-lg mb-2">
              Thông tin liên hệ
            </h3>
            <p className="text-gray-600 text-base">
              <span className="text-[#00bcd4] font-medium">Email</span>{" "}
              <a
                href="mailto:operation@finos.asia"
                className="hover:underline text-gray-700"
              >
                operation@finos.asia
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
