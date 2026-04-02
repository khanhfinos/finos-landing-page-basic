import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "credit-scoring",
    title: "Credit Scoring Engine",
    description:
      "Công cụ Chấm điểm Tín dụng của chúng tôi là một động cơ học máy xử lý dữ liệu từ cả nguồn truyền thống lẫn các nguồn mới độc quyền của FinOS.",
    image: "/credit-scoring-graphic-03.png",
    icon: null,
  },
  {
    id: "micro-lending",
    title: "Micro-Lending Solution",
    description:
      "Giải pháp Cho vay Vi mô của chúng tôi là giải pháp công nghệ cắm-và-chạy hỗ trợ toàn bộ vòng đời cho vay, kết hợp với mạng lưới rộng lớn các tổ chức cho vay và nhà phân phối sản phẩm đã được cấu hình sẵn.",
    image: "/micro-investment-graphic-03.png",
    icon: null,
  },
  {
    id: "micro-investment",
    title: "Micro-Investment Solution",
    description:
      "Giải pháp Đầu tư Vi mô của chúng tôi là giải pháp công nghệ cắm-và-chạy hỗ trợ toàn bộ vòng đời đầu tư, kết hợp với mạng lưới rộng lớn các công ty quản lý tài sản và nhà phân phối sản phẩm đã được cấu hình sẵn.",
    image: "/micro-lending-graphic-03.png",
    icon: null,
  },
];

export default function Products() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0d1a4a] to-[#0a0f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Icon/Graphic */}
              <div className="flex-1 flex items-center justify-center">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={450}
                    className="w-full max-w-md h-auto"
                  />
                ) : (
                  <div className="w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl flex items-center justify-center border border-gray-100">
                    {product.icon}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {product.title}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                <Link
                  href={`#${product.id}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold transition-colors"
                >
                  Tìm hiểu thêm
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
