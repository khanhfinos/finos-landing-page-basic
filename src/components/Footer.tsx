import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "Về chúng tôi",
    links: [
      { text: "Giới thiệu FinOS", url: "/about" },
      { text: "Liên hệ", url: "/contact" },
    ],
  },
  {
    title: "Sản phẩm",
    links: [
      { text: "eSignSuite", url: "/services/esign" },
      { text: "eKYC", url: "#ekyc" },
      { text: "eTMS", url: "#etms" },
      { text: "eMeeting", url: "#emeeting" },
      { text: "eConnect", url: "#econnect" },
      { text: "eDocAI", url: "#edocai" },
      { text: "Micro-Investment", url: "#micro-investment" },
      { text: "Micro-Lending", url: "#micro-lending" },
      { text: "Credit Scoring", url: "/services/credit-scoring" },
    ],
  },
  {
    title: "Pháp lý",
    links: [
      { text: "Chính sách quyền riêng tư", url: "#" },
      { text: "Điều khoản chung", url: "#" },
      { text: "Điều khoản cấp phép API", url: "#" },
      { text: "Điều khoản cấp phép SDK", url: "#" },
    ],
  },
  {
    title: "Mạng xã hội",
    links: [
      { text: "LinkedIn", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

const bottomLinks = [
  { text: "Điều khoản chung", url: "#" },
  { text: "Chính sách quyền riêng tư", url: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-8 lg:mb-0">
            <Image src="/Logo_Blue.png" alt="FinOS" width={120} height={40} className="h-auto" />
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              FinOS là công ty FinTech cung cấp năng lực cho các sản phẩm &amp; dịch vụ tài chính kỹ thuật số tại Đông Nam Á.
            </p>
          </div>

          {menuItems.map((section, i) => (
            <div key={i}>
              <h3 className="mb-4 font-bold text-white">{section.title}</h3>
              <ul className="space-y-3 text-white/60">
                {section.links.map((link, j) => (
                  <li key={j} className="text-sm font-medium hover:text-white transition-colors">
                    <Link href={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm font-medium text-white/40 md:flex-row md:items-center">
          <p>Copyright &copy; {new Date().getFullYear()} FinOS Technology. All rights reserved.</p>
          <ul className="flex gap-4">
            {bottomLinks.map((link, i) => (
              <li key={i} className="underline hover:text-white transition-colors">
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
