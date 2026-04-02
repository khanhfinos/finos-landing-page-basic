const features = [
  {
    title: "Bảo mật",
    description:
      "Toàn bộ dữ liệu được lưu trữ trên nền tảng an toàn đạt chứng nhận cao nhất (HIPAA, PCI DSS, SOC, ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018 và ISO 9001). Xác thực đa yếu tố (MFA). Mã hóa dữ liệu khi lưu trữ và truyền tải.",
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Độ tin cậy cao",
    description:
      "Không có điểm thất bại đơn lẻ nhờ phân cụm, cân bằng tải và dự phòng.",
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Hiệu năng cao",
    description:
      "Thiết kế tối ưu hiệu năng với bộ nhớ đệm đa tầng & tối ưu hóa mã nguồn. Thời gian phản hồi máy chủ trung bình dưới 1 giây.",
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Linh hoạt",
    description:
      "Xây dựng trên kiến trúc micro-services. Giải pháp cắm-và-chạy, dễ dàng triển khai với nỗ lực IT tối thiểu.",
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: "Khả năng mở rộng",
    description:
      "Tự động mở rộng giúp điều chỉnh công suất tự động để duy trì hiệu suất ổn định.",
    icon: (
      <svg
        className="w-10 h-10 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
        />
      </svg>
    ),
  },
];

export default function WhyFinOS() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a0f2e] to-[#0d1a4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tại sao chọn FinOS?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            FinOS tập trung cung cấp công nghệ tốt nhất để hỗ trợ doanh nghiệp của bạn,
            giúp bạn tập trung phát triển và mở rộng kinh doanh
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 rounded-xl p-8 hover:bg-white/15 transition-colors border border-white/10"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
