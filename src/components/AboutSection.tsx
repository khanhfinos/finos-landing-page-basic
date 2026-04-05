import MinimalModernHero from "@/components/ui/minimal";

const stats = [
  { value: "10+", label: "Đối tác tích hợp" },
  { value: "100K+", label: "Người dùng cuối" },
  { value: "9", label: "Sản phẩm & giải pháp" },
  { value: "99.9%", label: "Uptime đảm bảo" },
];

export default function AboutSection() {
  return (
    <MinimalModernHero
      badge="Về chúng tôi"
      title="Hạ tầng tài chính số cho Việt Nam"
      subtitle="Công nghệ cốt lõi để xây dựng sản phẩm tài chính thế hệ mới"
      description="FinOS là công ty FinTech Việt Nam cung cấp nền tảng hạ tầng số cho các tổ chức tài chính, ngân hàng và doanh nghiệp. Chúng tôi giúp đối tác triển khai sản phẩm tài chính — từ ký số, định danh điện tử đến chấm điểm tín dụng — nhanh chóng, an toàn và đúng chuẩn pháp lý Việt Nam."
      primaryButton={{ label: "Tìm hiểu về FinOS", href: "/about" }}
      secondaryButton={{ label: "Liên hệ hợp tác", href: "/contact" }}
      stats={stats}
      accentColor="#00bcd4"
    />
  );
}
