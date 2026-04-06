"use client";

import { Webhook, PackageOpen, Smartphone, LayoutDashboard, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import React from "react";

const features = [
  {
    title: "Plug-In API",
    icon: Webhook,
    description:
      "Giải pháp chuẩn để tích hợp với các đối tác hệ sinh thái nhằm cung cấp các sản phẩm & dịch vụ tài chính bổ sung.",
  },
  {
    title: "In-App SDK",
    icon: PackageOpen,
    description:
      "Giải pháp dành cho các tổ chức tài chính và các đối tác hệ sinh thái chưa sẵn sàng hoàn toàn với API.",
  },
  {
    title: "White-Label Mobile App",
    icon: Smartphone,
    description:
      "Giải pháp dành cho các tổ chức tài chính và các đối tác hệ sinh thái chưa có nền tảng di động.",
  },
  {
    title: "Partner Portal",
    icon: LayoutDashboard,
    description:
      "Cổng quản trị dành cho các tổ chức tài chính và đối tác để quản lý sản phẩm, dịch vụ và hiệu suất liên quan.",
  },
  {
    title: "Bảo mật Doanh nghiệp",
    icon: ShieldCheck,
    description:
      "Kiến trúc zero-trust, mã hóa đầu cuối và tuân thủ tiêu chuẩn bảo mật quốc tế ISO 27001 & PCI-DSS.",
  },
  {
    title: "AI & Phân tích Dữ liệu",
    icon: Sparkles,
    description:
      "Mô hình AI/ML tích hợp sẵn cho chấm điểm tín dụng, phát hiện gian lận và phân tích hành vi khách hàng theo thời gian thực.",
  },
];

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Technology() {
  return (
    <section className="py-16 md:py-24 pb-8 md:pb-12 bg-transparent">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-balance text-white">
            Công nghệ là năng lực cốt lõi của chúng tôi
          </h2>
          <p className="text-white/60 mt-4 text-base tracking-wide text-balance md:text-lg">
            Giải pháp công nghệ của FinOS có sẵn dưới dạng 3+1, được thiết kế cho các đối tác
            với các mức độ trưởng thành kỹ thuật số khác nhau.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
