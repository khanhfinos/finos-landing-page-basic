"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Feature108 } from "@/components/blocks/feature108";
import { Casestudy5 } from "@/components/ui/casestudy-5";
import { AccordionFeatureSection } from "@/components/blocks/accordion-feature-section";
import PageHero from "@/components/PageHero";

// ─── 2. HOW IT WORKS ─────────────────────────────────────────────────────────
const FEATURED_STEP = {
  step: "01",
  tags: "BƯỚC 1 / KHỞI ĐẦU",
  title: "Tải tài liệu lên.",
  subtitle: "Tải hợp đồng hoặc tài liệu lên portal hoặc qua API — hỗ trợ PDF, Word và các định dạng phổ biến.",
  image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    description:
      "Số hóa toàn bộ quy trình duyệt, ký và xác nhận hồ sơ — loại bỏ hoàn toàn thao tác thủ công trên giấy tờ.\n\nRút ngắn thời gian ký hợp đồng từ nhiều ngày xuống chỉ còn vài giờ, giảm đến 80% chi phí xử lý và lưu trữ tài liệu.\n\nMỗi phiên ký được ghi lại đầy đủ trong nhật ký thao tác và gói bằng chứng kỹ thuật số — sẵn sàng phục vụ kiểm toán nội bộ và xử lý tranh chấp pháp lý.",
  },
  {
    id: 2,
    title: "Người ký & khách hàng cuối",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=80",
    description:
      "Ký mọi lúc, mọi nơi — trên điện thoại, máy tính bảng hay laptop, không cần cài thêm bất kỳ ứng dụng nào.\n\nQuy trình xác thực danh tính rõ ràng, trực quan và hoàn thành trong dưới 2 phút. Người ký chỉ cần nhấp vào đường dẫn nhận qua email, không cần đăng ký tài khoản.\n\nGiao diện hướng dẫn từng bước giúp ngay cả người dùng ít quen công nghệ cũng có thể ký số thành công ngay lần đầu.",
  },
  {
    id: 3,
    title: "Đối tác & đội ngũ kỹ thuật",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
    description:
      "REST API đầy đủ tài liệu, SDK đa ngôn ngữ và Webhook theo thời gian thực — cho phép tích hợp vào hệ thống hiện có trong vòng dưới 1 tuần.\n\nHỗ trợ multi-tenant, white-label theo thương hiệu và phân quyền RBAC linh hoạt theo từng tổ chức.\n\nCung cấp môi trường sandbox để kiểm thử trước khi lên production. Đội ngũ kỹ thuật FinOS hỗ trợ trực tiếp trong suốt quá trình tích hợp và vận hành.",
  },
];

export default function ESignSuitePage() {

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <PageHero
        badge="Sản phẩm"
        title="FinOS eSignSuite"
        description="Ký đúng người · Đúng tài liệu · Đủ bằng chứng pháp lý"
      />

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
      {/* <section className="py-16 bg-white border-t border-gray-100">
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
      </section> */}

      <CTA />
      <Footer />
    </>
  );
}
