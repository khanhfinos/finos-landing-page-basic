"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Feature108 } from "@/components/blocks/feature108";
import { Casestudy5 } from "@/components/ui/casestudy-5";
import { AccordionFeatureSection } from "@/components/blocks/accordion-feature-section";

// ─── 2. HOW IT WORKS ─────────────────────────────────────────────────────────
const FEATURED_STEP = {
  step: "01",
  tags: "BƯỚC 1 / KHỞI ĐẦU",
  title: "Tải tài liệu lên.",
  subtitle: "Tải hợp đồng hoặc tài liệu lên portal hoặc qua API — hỗ trợ PDF, Word và các định dạng phổ biến.",
  image: "/credit-scoring-graphic-03.png",
  link: "#how-it-works",
};

const JOURNEY_STEPS = [
  {
    step: "02",
    tags: "BƯỚC 2 / CẤU HÌNH",
    title: "Thiết lập luồng ký.",
    subtitle: "Chọn người ký, thứ tự ký và phương thức xác thực danh tính phù hợp với từng loại hợp đồng.",
    link: "#how-it-works",
  },
  {
    step: "03",
    tags: "BƯỚC 3 / MỜI KÝ",
    title: "Gửi yêu cầu ký.",
    subtitle: "Người ký nhận đường dẫn qua email — không cần cài app, không cần tạo tài khoản.",
    link: "#how-it-works",
  },
  {
    step: "04",
    tags: "BƯỚC 4 / KÝ SỐ",
    title: "Xác thực & ký số.",
    subtitle: "Xác thực danh tính bằng OTP, VNeID hoặc USB Token — sau đó ký trực tiếp ngay trên trình duyệt.",
    link: "#how-it-works",
  },
  {
    step: "05",
    tags: "BƯỚC 5 / HOÀN TẤT",
    title: "Nhận gói bằng chứng.",
    subtitle: "Tài liệu đã ký kèm audit trail và timestamp — lưu trữ an toàn, có thể xác minh bất cứ lúc nào.",
    link: "#how-it-works",
  },
];

// ─── 3. WHO BENEFITS ─────────────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    id: 1,
    title: "Doanh nghiệp & tổ chức tài chính",
    image: "/kling_20260403_作品_A_triptych_452_0.png",
    description:
      "Số hóa toàn bộ quy trình duyệt, ký, xác nhận hồ sơ — không còn giấy tờ, không còn chờ đợi. Rút ngắn thời gian ký hợp đồng từ ngày xuống giờ, giảm 80% chi phí xử lý. Audit trail đầy đủ phục vụ kiểm toán và xử lý tranh chấp.",
  },
  {
    id: 2,
    title: "Người ký & khách hàng cuối",
    image: "/kling_20260403_作品_A_triptych_452_0.png",
    description:
      "Ký mọi lúc, mọi nơi — trên bất kỳ thiết bị nào, không cần cài app, không cần tạo tài khoản. Quy trình xác thực rõ ràng, đơn giản dưới 2 phút. Trải nghiệm ký số mượt mà như ký trực tiếp.",
  },
  {
    id: 3,
    title: "Đối tác & đội ngũ kỹ thuật",
    image: "/kling_20260403_作品_A_triptych_452_0.png",
    description:
      "REST API + SDK + Webhook — tích hợp vào hệ thống hiện có trong vòng dưới 1 tuần. Multi-tenant, white-label, phân quyền RBAC linh hoạt. Hỗ trợ lộ trình in-house cho tổ chức muốn làm chủ nền tảng hoàn toàn.",
  },
];

export default function ESignSuitePage() {

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-br from-[#0a7b8c] via-[#1a8fa0] to-[#2ab5c4]">
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
        <div className="absolute bottom-0 left-0 w-1/2 h-24 bg-[#0d3a45]/40 rounded-tr-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            FinOS eSignSuite
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ký đúng người · Đúng tài liệu · Đủ bằng chứng pháp lý
          </p>
        </div>
      </section>

      {/* ─── 1. WHAT IT IS ──────────────────────────────────────────────────── */}
      <Feature108 />

      {/* ─── 2. HOW IT WORKS (User Journey) ────────────────────────────────── */}
      <div id="how-it-works">
        <Casestudy5
          badge="Quy trình hoạt động"
          heading="Hành trình ký số từ đầu đến cuối"
          description="Từ lúc tải tài liệu đến khi nhận gói bằng chứng — khép kín trong một quy trình liền mạch."
          featuredCasestudy={FEATURED_STEP}
          casestudies={JOURNEY_STEPS}
        />
      </div>

      {/* ─── 3. WHO BENEFITS ──────────────────────────────────────────────── */}
      <AccordionFeatureSection
        badge="Dành cho ai"
        heading="Giá trị thực tế cho từng vai trò"
        description="Dù là doanh nghiệp, người ký hay đội ngũ kỹ thuật — FinOS eSign đều có câu trả lời cụ thể."
        features={STAKEHOLDERS}
      />

      {/* ─── 4. PARTNER LOGOS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
            Đối tác & khách hàng tiêu biểu
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {[
              { name: "HDBank", color: "#003087", bg: "#e8f0fe", short: "HD" },
              { name: "Galaxy Holdings", color: "#1a1a2e", bg: "#eee8f8", short: "GH" },
              { name: "Galaxy Joys", color: "#e91e8c", bg: "#fde8f3", short: "GJ" },
              { name: "Galaxy One", color: "#0077b6", bg: "#e0f2fe", short: "G1" },
              { name: "Galaxy Connects", color: "#00897b", bg: "#e0f5f1", short: "GC" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 group"
              >
                <div
                  className="w-20 h-12 rounded-lg flex items-center justify-center px-3 transition-all duration-300"
                  style={{ backgroundColor: partner.bg }}
                >
                  <span
                    className="font-black text-sm tracking-tight whitespace-nowrap"
                    style={{ color: partner.color }}
                  >
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
