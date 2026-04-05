import { LogoCloud } from "@/components/ui/logo-cloud-3";

const partnerLogos = [
  {
    src: "https://svgl.app/library/visa.svg",
    alt: "Visa",
  },
  {
    src: "https://svgl.app/library/mastercard.svg",
    alt: "Mastercard",
  },
  {
    src: "https://svgl.app/library/aws.svg",
    alt: "Amazon Web Services",
  },
  {
    src: "https://svgl.app/library/microsoft_azure.svg",
    alt: "Microsoft Azure",
  },
  {
    src: "https://svgl.app/library/google_cloud.svg",
    alt: "Google Cloud",
  },
  {
    src: "https://svgl.app/library/stripe.svg",
    alt: "Stripe",
  },
  {
    src: "https://svgl.app/library/twilio.svg",
    alt: "Twilio",
  },
  {
    src: "https://svgl.app/library/mongodb.svg",
    alt: "MongoDB",
  },
  {
    src: "https://svgl.app/library/postgresql.svg",
    alt: "PostgreSQL",
  },
  {
    src: "https://svgl.app/library/redis.svg",
    alt: "Redis",
  },
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
