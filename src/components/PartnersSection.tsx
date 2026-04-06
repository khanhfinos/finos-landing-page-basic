import { LogoCloud } from "@/components/ui/logo-cloud-3";

const partnerLogos = [
  { src: "/image-partner/0.-Logo-CTY-Galaxy-Pay-Color.png", alt: "Galaxy Pay" },
  { src: "/image-partner/Galaxy-Technology-01.png", alt: "Galaxy Technology" },
  { src: "/image-partner/Logo-AI.png", alt: "AI Partner" },
  { src: "/image-partner/Logo-GC-2023-Cut.png", alt: "GC Partner" },
  { src: "/image-partner/Logo-JOY-2023-Cut.png", alt: "JOY Partner" },
  { src: "/image-partner/Logo-ONE-2023-Cut.png", alt: "ONE Partner" },
  { src: "/image-partner/Logo_website_01.png", alt: "Partner Logo" },
  { src: "/image-partner/galaxyholdings-logo.png", alt: "Galaxy Holdings" },
  { src: "/image-partner/logo-telecom.png", alt: "Telecom Partner" },
  { src: "/image-partner/logo_1645778839158.png", alt: "FinOS Partner" },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0d1a4a] to-[#0a0f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Đối tác
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Đối tác tin dùng
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            FinOS tích hợp với hệ sinh thái công nghệ và tài chính toàn cầu để mang lại giải pháp tốt nhất cho đối tác.
          </p>
        </div>

        <div className="mx-auto my-6 h-px max-w-sm bg-white/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={partnerLogos} />

        <div className="mt-6 h-px bg-white/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
