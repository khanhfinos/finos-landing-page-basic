import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Zap,
  Users,
  Globe,
  Target,
  Lightbulb,
  Building2,
  BarChart3,
  Lock,
  Puzzle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Giới thiệu | FinOS - Hệ Điều Hành Tài Chính",
  description: "FinOS là công ty FinTech Việt Nam xây dựng nền tảng hạ tầng tài chính số cho ngân hàng, fintech và hệ sinh thái.",
};

const stats = [
  { value: "2021", label: "Năm thành lập" },
  { value: "9+", label: "Sản phẩm & giải pháp" },
  { value: "10+", label: "Đối tác tích hợp" },
  { value: "99.9%", label: "Uptime đảm bảo" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Bảo mật là ưu tiên",
    description: "Mọi sản phẩm đều được thiết kế với bảo mật từ nền tảng — tuân thủ chuẩn quốc tế và pháp lý Việt Nam.",
  },
  {
    icon: Zap,
    title: "Tốc độ triển khai",
    description: "API-first, plug-and-play — đối tác có thể tích hợp và ra sản phẩm trong vài tuần thay vì vài tháng.",
  },
  {
    icon: Puzzle,
    title: "Linh hoạt & mở",
    description: "Kiến trúc module hóa cho phép đối tác chọn đúng giải pháp cần thiết, không bị ràng buộc toàn bộ stack.",
  },
  {
    icon: Users,
    title: "Hướng đến đối tác",
    description: "Chúng tôi xây dựng mối quan hệ dài hạn — hỗ trợ kỹ thuật, tư vấn nghiệp vụ và đồng hành triển khai.",
  },
  {
    icon: BarChart3,
    title: "Dựa trên dữ liệu",
    description: "Mọi quyết định sản phẩm đều dựa trên dữ liệu thực tế từ thị trường và phản hồi từ đối tác.",
  },
  {
    icon: Globe,
    title: "Tư duy khu vực",
    description: "Xây dựng cho Việt Nam, thiết kế để mở rộng ra Đông Nam Á — hiểu thị trường địa phương sâu sắc.",
  },
];

const products = [
  { icon: Lock, name: "eSignSuite", desc: "Ký điện tử & ký số pháp lý" },
  { icon: Users, name: "eKYC", desc: "Định danh khách hàng điện tử" },
  { icon: BarChart3, name: "Credit Scoring", desc: "Chấm điểm tín dụng bằng AI" },
  { icon: Building2, name: "Micro-Lending", desc: "Giải pháp cho vay vi mô" },
  { icon: Globe, name: "Micro-Investment", desc: "Nền tảng đầu tư vi mô" },
  { icon: Target, name: "eMeeting", desc: "Họp & ký số trực tuyến" },
  { icon: Puzzle, name: "eConnect", desc: "Kết nối đối tác & phân phối" },
  { icon: Zap, name: "eTMS", desc: "Quản lý giao dịch tập trung" },
  { icon: Lightbulb, name: "eDocAI", desc: "Xử lý tài liệu bằng AI" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <PageHero
        badge="Về chúng tôi"
        title="Hạ tầng tài chính số cho Việt Nam"
        description="FinOS xây dựng nền tảng công nghệ giúp các tổ chức tài chính, ngân hàng và doanh nghiệp triển khai sản phẩm số nhanh hơn, an toàn hơn."
      />

      {/* Stats */}
      <section className="bg-primary-dark py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{s.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Chúng tôi là ai</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-6 leading-tight">
                Công ty FinTech hạ tầng
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                FinOS là công ty công nghệ tài chính Việt Nam, thành lập năm 2021, tập trung vào xây dựng hạ tầng số cho ngành tài chính. Chúng tôi không trực tiếp phục vụ người dùng cuối — thay vào đó, chúng tôi trang bị cho các đối tác ngân hàng, công ty fintech và doanh nghiệp hệ sinh thái những công cụ để xây dựng và phân phối sản phẩm tài chính số.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Từ ký số pháp lý, định danh điện tử đến chấm điểm tín dụng và cho vay vi mô — FinOS cung cấp bộ sản phẩm toàn diện, sẵn sàng tích hợp qua API, tuân thủ quy định Việt Nam.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/eco-system-03.png"
                alt="FinOS Ecosystem"
                width={600}
                height={600}
                className="w-full max-w-lg h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#f5f7fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Định hướng</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-3">Tầm nhìn & Sứ mệnh</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Tầm nhìn</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Trở thành hạ tầng tài chính số cốt lõi của Việt Nam và Đông Nam Á — nơi mọi tổ chức tài chính có thể nhanh chóng xây dựng, triển khai và mở rộng dịch vụ số với chi phí tối ưu.
              </p>
            </div>
            <div className="bg-primary-dark rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sứ mệnh</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Cung cấp các sản phẩm tài chính số đơn giản, an toàn và hiệu quả — chỉ bằng một lần tích hợp — giúp đối tác rút ngắn thời gian ra thị trường và tập trung vào giá trị cốt lõi của họ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Văn hóa</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mt-3">Giá trị cốt lõi</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="py-24 bg-primary-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Sản phẩm</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3">Bộ giải pháp toàn diện</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">9 sản phẩm — sẵn sàng tích hợp qua API, tuân thủ pháp lý Việt Nam.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{p.name}</p>
                    <p className="text-white/50 text-xs">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
