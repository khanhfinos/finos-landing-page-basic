"use client";

import ComingSoon from "@/components/ComingSoon";
import { FileSignature, ShieldCheck, Zap, Users } from "lucide-react";

const FEATURES = [
  { icon: FileSignature, label: "Ký số điện tử toàn luồng — không cần cài đặt" },
  { icon: ShieldCheck, label: "Xác thực danh tính eKYC tích hợp sẵn" },
  { icon: Users, label: "Ký hàng loạt & quản lý người ký nhiều bên" },
  { icon: Zap, label: "API sandbox để tích hợp & thử nghiệm" },
];

export default function DemoPortalPage() {
  return (
    <ComingSoon
      badge="FinOS eSignSuite · Demo Portal"
      title="Sắp ra mắt"
      description="Chúng tôi đang hoàn thiện Demo Portal — nơi bạn trải nghiệm toàn bộ luồng ký số điện tử trực tiếp, không cần cài đặt hay đăng ký tài khoản."
      heroIcon={FileSignature}
      features={FEATURES}
      backHref="/services/esign"
      backLabel="Quay lại trang eSignSuite"
    />
  );
}
