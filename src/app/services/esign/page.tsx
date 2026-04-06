"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Feature108 } from "@/components/blocks/feature108";
import { AccordionFeatureSection } from "@/components/blocks/accordion-feature-section";
import PageHero from "@/components/PageHero";

// ─── 2. HOW IT WORKS ─────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tải tài liệu lên",
    description: "Tải hợp đồng hoặc tài liệu lên portal hoặc qua API — hỗ trợ PDF, Word và các định dạng phổ biến.",
    icon: "📄",
  },
  {
    step: "02",
    title: "Thiết lập luồng ký",
    description: "Chọn người ký, thứ tự ký và phương thức xác thực danh tính phù hợp với từng loại hợp đồng.",
    icon: "⚙️",
  },
  {
    step: "03",
    title: "Gửi yêu cầu ký",
    description: "Người ký nhận đường dẫn qua email — không cần cài app, không cần tạo tài khoản.",
    icon: "✉️",
  },
  {
    step: "04",
    title: "Xác thực & ký số",
    description: "Xác thực danh tính bằng OTP, VNeID hoặc USB Token — sau đó ký trực tiếp ngay trên trình duyệt.",
    icon: "✍️",
  },
  {
    step: "05",
    title: "Nhận gói bằng chứng",
    description: "Tài liệu đã ký kèm audit trail và timestamp — lưu trữ an toàn, có thể xác minh bất cứ lúc nào.",
    icon: "🔒",
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

      {/* ─── 2. HOW IT WORKS (Process) ──────────────────────────────────── */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Quy trình hoạt động</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">Hành trình ký số từ đầu đến cuối</h2>
            <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">Từ lúc tải tài liệu đến khi nhận gói bằng chứng — khép kín trong một quy trình liền mạch.</p>
          </div>

          {/* Desktop: horizontal steps */}
          <div className="hidden md:flex items-start gap-0">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative">
                {/* connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-px bg-accent/40" />
                )}
                {/* circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-accent/50 shadow-md flex items-center justify-center text-2xl mb-4">
                  {s.icon}
                </div>
                <div className="text-accent text-xs font-bold tracking-widest mb-1">BƯỚC {s.step}</div>
                <h3 className="text-gray-900 font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">{s.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical steps */}
          <div className="flex md:hidden flex-col gap-8">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-accent/50 shadow-md flex items-center justify-center text-xl shrink-0">
                    {s.icon}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && <div className="w-px flex-1 bg-accent/20 mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="text-accent text-xs font-bold tracking-widest mb-1">BƯỚC {s.step}</div>
                  <h3 className="text-gray-900 font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WHO BENEFITS ──────────────────────────────────────────────── */}
      <AccordionFeatureSection
        badge="Dành cho ai"
        heading="Giá trị thực tế cho từng vai trò"
        description="Dù là doanh nghiệp, người ký hay đội ngũ kỹ thuật — FinOS eSign đều có câu trả lời cụ thể."
        features={STAKEHOLDERS}
      />

      {/* ─── 4. METRICS ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Hiệu quả đã được chứng minh</h2>
            <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">Các chỉ số thực tế từ triển khai với đối tác.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "< 5 phút", label: "Hoàn thành một luồng ký số từ đầu đến cuối" },
              { value: "80%", label: "Giảm chi phí xử lý và lưu trữ tài liệu" },
              { value: "99.9%", label: "Uptime hệ thống đảm bảo" },
              { value: "100%", label: "Tuân thủ pháp lý Việt Nam (NĐ 130, Luật GDĐT 2023)" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. COMPARISON ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tại sao chuyển sang ký số?</h2>
            <p className="mt-3 text-gray-600 text-lg">So sánh quy trình truyền thống và giải pháp FinOS eSign.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-lg font-bold text-gray-700 mb-6 uppercase tracking-wider">Ký truyền thống</h3>
              <ul className="space-y-4">
                {[
                  "In tài liệu, ký tay, scan lại",
                  "Gửi qua email hoặc fax — dễ thất lạc",
                  "Không có audit trail rõ ràng",
                  "Lưu trữ vật lý — khó tra cứu",
                  "Thời gian hoàn thành: 2–7 ngày",
                  "Chi phí in ấn, vận chuyển, lưu trữ cao",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* FinOS */}
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
              <h3 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">FinOS eSignSuite</h3>
              <ul className="space-y-4">
                {[
                  "Ký trực tiếp trên trình duyệt, không cần cài app",
                  "Gửi link qua email — ký ngay trong 1 click",
                  "Nhật ký thao tác đầy đủ, gói bằng chứng kỹ thuật số",
                  "Lưu trữ đám mây bảo mật, tra cứu tức thì",
                  "Thời gian hoàn thành: dưới 5 phút",
                  "Giảm đến 80% chi phí vận hành tài liệu",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PARTNER LOGOS ─────────────────────────────────────────────── */}
      {/* <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-10">
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
