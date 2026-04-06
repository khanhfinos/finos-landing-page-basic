"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileSignature,
  UserCheck,
  BarChart2,
  Coins,
  TrendingUp,
  Video,
  Rocket,
  Code2,
  GitBranch,
  MonitorPlay,
  Building2,
  Network,
} from "lucide-react";
import { DropdownNavigation, NavItem } from "@/components/ui/dropdown-navigation";

const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    label: "Giới thiệu",
    link: "/about",
  },
  {
    id: 3,
    label: "Sản phẩm",
    dropdownAlign: "right",
    subMenus: [
      {
        title: "Ký số & Định danh",
        items: [
          {
            label: "eSignSuite",
            description: "Ký điện tử & ký số pháp lý",
            icon: FileSignature,
            href: "/services/esign",
          },
          {
            label: "eKYC",
            description: "Định danh khách hàng điện tử",
            icon: UserCheck,
            href: "#ekYC",
          },
        ],
      },
      {
        title: "Giải pháp Fintech",
        items: [
          {
            label: "Credit Scoring",
            description: "Chấm điểm tín dụng bằng AI",
            icon: BarChart2,
            href: "/services/credit-scoring",
          },
          {
            label: "Micro-Lending",
            description: "Giải pháp cho vay vi mô",
            icon: Coins,
            href: "#micro-lending",
          },
          {
            label: "Micro-Investment",
            description: "Nền tảng đầu tư vi mô",
            icon: TrendingUp,
            href: "#micro-investment",
          },
          {
            label: "eMeeting",
            description: "Họp & ký số trực tuyến",
            icon: Video,
            href: "#eMeeting",
          },
        ],
      },
      {
        title: "Hệ sinh thái",
        items: [
          {
            label: "eConnect",
            description: "Kết nối đối tác & phân phối",
            icon: Network,
            href: "#eConnect",
          },
          {
            label: "eTMS",
            description: "Quản lý giao dịch tập trung",
            icon: Building2,
            href: "#eTMS",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Tài liệu",
    dropdownAlign: "right",
    subMenus: [
      {
        title: "Hướng dẫn",
        items: [
          {
            label: "Bắt đầu nhanh",
            description: "Hướng dẫn tích hợp từ A–Z",
            icon: Rocket,
            href: "/docs/esign-quickstart",
          },
          {
            label: "API Reference",
            description: "REST API, Webhook & SDK",
            icon: Code2,
            href: "/docs/esign-api",
          },
          {
            label: "Luồng ký số",
            description: "Cấu hình workflow & phương thức ký",
            icon: GitBranch,
            href: "/docs/esign-workflow",
          },
        ],
      },
      {
        title: "Công cụ",
        items: [
          {
            label: "Demo Portal",
            description: "Trải nghiệm sản phẩm trực tiếp",
            icon: MonitorPlay,
            href: "/demo-portal",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Liên hệ",
    link: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/Logo_Blue.png"
              alt="FinOS"
              width={120}
              height={40}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center ml-auto">
            <DropdownNavigation navItems={NAV_ITEMS} />
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
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block text-white/90 hover:text-white py-2 text-sm" onClick={() => setMobileOpen(false)}>Trang chủ</Link>
            <Link href="/about" className="block text-white/90 hover:text-white py-2 text-sm" onClick={() => setMobileOpen(false)}>Giới thiệu</Link>
            <div className="pt-1 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-widest py-2">Sản phẩm</p>
              <Link href="/services/esign" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>eSignSuite</Link>
              <Link href="#eKYC" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>eKYC</Link>
              <Link href="/services/credit-scoring" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Credit Scoring</Link>
              <Link href="#micro-lending" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Micro-Lending</Link>
              <Link href="#micro-investment" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Micro-Investment</Link>
              <Link href="#eMeeting" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>eMeeting</Link>
            </div>
            <div className="pt-1 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-widest py-2">Tài liệu</p>
              <Link href="/docs/esign-quickstart" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Bắt đầu nhanh</Link>
              <Link href="/docs/esign-api" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>API Reference</Link>
              <Link href="/docs/esign-workflow" className="block text-white/90 hover:text-white py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Luồng ký số</Link>
              <Link href="/demo-portal" className="block text-[#00bcd4] hover:text-accent-light py-2 text-sm pl-2 font-semibold" onClick={() => setMobileOpen(false)}>Demo Portal →</Link>
            </div>
            <div className="pt-2 border-t border-white/10">
              <Link href="/contact" className="block text-white font-semibold py-2 text-sm" onClick={() => setMobileOpen(false)}>Liên hệ</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
