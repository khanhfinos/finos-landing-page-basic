"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo_Blue.png"
              alt="FinOS"
              width={120}
              height={40}
              className="brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors text-base font-medium"
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white transition-colors text-base font-medium"
            >
              Giới thiệu
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white/90 hover:text-white transition-colors text-base font-medium flex items-center gap-1"
              >
                Dịch vụ
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl py-2">
                  <Link
                    href="/services/credit-scoring"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Credit Scoring Engine
                  </Link>
                  <Link
                    href="#micro-lending"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Micro-Lending Solution
                  </Link>
                  <Link
                    href="#micro-investment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Micro-Investment Solution
                  </Link>
                  <Link
                    href="/services/esign"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    eSignSuite
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white transition-colors text-base font-medium"
            >
              Liên hệ
            </Link>
            <div className="relative">
              <button
                onClick={() => setDocsOpen(!docsOpen)}
                className="text-white/90 hover:text-white transition-colors text-base font-medium flex items-center gap-1"
              >
                Tài liệu
                <svg
                  className={`w-4 h-4 transition-transform ${docsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {docsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">Hướng dẫn sử dụng</div>
                  <Link
                    href="/docs/esign-quickstart"
                    className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors"
                    onClick={() => setDocsOpen(false)}
                  >
                    <p className="text-sm font-semibold text-gray-800">Bắt đầu nhanh</p>
                    <p className="text-xs text-gray-400">Hướng dẫn tích hợp eSign từ A–Z</p>
                  </Link>
                  <Link
                    href="/docs/esign-api"
                    className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors"
                    onClick={() => setDocsOpen(false)}
                  >
                    <p className="text-sm font-semibold text-gray-800">API Reference</p>
                    <p className="text-xs text-gray-400">REST API, Webhook & SDK</p>
                  </Link>
                  <Link
                    href="/docs/esign-workflow"
                    className="flex flex-col px-4 py-2.5 hover:bg-gray-50 transition-colors"
                    onClick={() => setDocsOpen(false)}
                  >
                    <p className="text-sm font-semibold text-gray-800">Luồng ký số</p>
                    <p className="text-xs text-gray-400">Cấu hình workflow & phương thức ký</p>
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/demo-portal"
                      className="flex items-center px-4 py-2.5 hover:bg-gray-50 transition-colors"
                      onClick={() => setDocsOpen(false)}
                    >
                      <p className="text-sm font-semibold text-[#00bcd4]">Mở Demo Portal →</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Mở/đóng menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-white/90 hover:text-white py-2 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="block text-white/90 hover:text-white py-2 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link
              href="/services/credit-scoring"
              className="block text-white/90 hover:text-white py-2 text-sm pl-4"
              onClick={() => setMobileOpen(false)}
            >
              Credit Scoring Engine
            </Link>
            <Link
              href="#micro-lending"
              className="block text-white/90 hover:text-white py-2 text-sm pl-4"
              onClick={() => setMobileOpen(false)}
            >
              Micro-Lending Solution
            </Link>
            <Link
              href="#micro-investment"
              className="block text-white/90 hover:text-white py-2 text-sm pl-4"
              onClick={() => setMobileOpen(false)}
            >
              Micro-Investment Solution
            </Link>
            <Link
              href="/services/esign"
              className="block text-white/90 hover:text-white py-2 text-sm pl-4"
              onClick={() => setMobileOpen(false)}
            >
              eSignSuite
            </Link>
            <Link
              href="/contact"
              className="block text-white/90 hover:text-white py-2 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Liên hệ
            </Link>
            <div className="pt-1 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-widest py-2">Tài liệu</p>
              <Link href="/docs/esign-quickstart" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Bắt đầu nhanh</Link>
              <Link href="/docs/esign-api" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>API Reference</Link>
              <Link href="/docs/esign-workflow" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Luồng ký số</Link>
              <Link href="/demo-portal" className="block text-[#00bcd4] hover:text-accent-light py-2 text-sm pl-2 font-semibold" onClick={() => setMobileOpen(false)}>Demo Portal →</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
