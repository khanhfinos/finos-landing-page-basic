import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DOC_META: Record<string, { title: string; description: string; icon: string }> = {
  "esign-quickstart": {
    title: "Bắt đầu nhanh",
    description: "Hướng dẫn tích hợp FinOS eSign từ A–Z — từ tạo tài khoản, gọi API đến nhận gói bằng chứng.",
    icon: "🚀",
  },
  "esign-api": {
    title: "API Reference",
    description: "Tài liệu REST API, Webhook và SDK đa nền tảng cho FinOS eSignSuite.",
    icon: "📡",
  },
  "esign-workflow": {
    title: "Luồng ký số",
    description: "Hướng dẫn cấu hình workflow ký: thứ tự người ký, phương thức xác thực và quy tắc phê duyệt.",
    icon: "📋",
  },
};

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = DOC_META[slug] ?? {
    title: "Tài liệu",
    description: "Tài liệu kỹ thuật FinOS đang được biên soạn.",
    icon: "📄",
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center px-6">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">{meta.icon}</div>

          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/50 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
            FinOS Docs · {meta.title}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Sắp ra mắt
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            {meta.description}
            <br />
            Tài liệu đang được hoàn thiện — vui lòng liên hệ đội ngũ FinOS để được hỗ trợ trực tiếp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-sm transition-colors shadow-lg"
            >
              Liên hệ hỗ trợ
            </Link>
            <Link
              href="/services/esign"
              className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
            >
              ← Quay lại eSignSuite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
