"use client";

import { Features } from "@/components/ui/features";
import {
  ShieldCheck,
  CheckCircle,
  Zap,
  Puzzle,
  Scaling,
} from "lucide-react";

const whyFeatures = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Bảo mật",
    description:
      "Toàn bộ dữ liệu được lưu trữ trên nền tảng an toàn đạt chứng nhận cao nhất (HIPAA, PCI DSS, SOC, ISO/IEC 27001). Xác thực đa yếu tố và mã hóa dữ liệu đầu cuối.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    icon: CheckCircle,
    title: "Độ tin cậy cao",
    description:
      "Không có điểm thất bại đơn lẻ nhờ phân cụm, cân bằng tải và dự phòng. Uptime 99.9% được cam kết trong SLA.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    icon: Zap,
    title: "Hiệu năng cao",
    description:
      "Thiết kế tối ưu hiệu năng với bộ nhớ đệm đa tầng & tối ưu hóa mã nguồn. Thời gian phản hồi trung bình dưới 1 giây.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    icon: Puzzle,
    title: "Linh hoạt",
    description:
      "Xây dựng trên kiến trúc micro-services. Giải pháp cắm-và-chạy, dễ dàng triển khai với nỗ lực IT tối thiểu.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    icon: Scaling,
    title: "Khả năng mở rộng",
    description:
      "Tự động mở rộng giúp điều chỉnh công suất tự động để duy trì hiệu suất ổn định khi lưu lượng tăng đột biến.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WhyFinOS() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0a0f2e] to-[#0d1a4a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nền tảng đáng tin cậy
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4">
            Tại sao chọn FinOS?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            FinOS tập trung cung cấp công nghệ tốt nhất để hỗ trợ doanh nghiệp
            của bạn, giúp bạn tập trung phát triển và mở rộng kinh doanh.
          </p>
        </div>

        <Features
          features={whyFeatures}
          progressGradientLight="bg-gradient-to-r from-cyan-400 to-cyan-500"
          progressGradientDark="bg-gradient-to-r from-cyan-300 to-cyan-400"
        />
      </div>
    </section>
  );
}
