import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/career-banner.png')" }}
    >
      {/* overlay để chữ dễ đọc */}
      <div className="absolute inset-0 bg-primary-dark/40" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-relaxed">
          Chúng tôi đang tìm kiếm các tổ chức tài chính và các đối tác hệ sinh thái (đơn vị phân phối sản phẩm) để cùng hợp tác, gia nhập mạng lưới của chúng tôi và cùng nhau cách mạng hóa ngành tài chính
        </h2>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors text-lg"
        >
          Liên hệ để tìm hiểu thêm
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
