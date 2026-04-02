import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FinOS</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              FinOS là công ty FinTech cung cấp năng lực cho các sản phẩm &amp;
              dịch vụ tài chính kỹ thuật số tại Đông Nam Á
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Về chúng tôi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Giới thiệu FinOS
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Dịch vụ của chúng tôi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#credit-scoring"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Credit Scoring Engine
                </Link>
              </li>
              <li>
                <Link
                  href="#micro-lending"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Micro-Lending Solution
                </Link>
              </li>
              <li>
                <Link
                  href="#micro-investment"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Micro-Investment Solution
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Pháp lý &amp; Quyền riêng tư</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Chính sách quyền riêng tư
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Điều khoản chung
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Điều khoản cấp phép API
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Điều khoản cấp phép SDK
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            Copyright &copy; {new Date().getFullYear()} FinOS Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
