const solutions = [
  {
    category: "Plug-In",
    type: "API",
    description:
      "Giải pháp chuẩn để tích hợp với các đối tác hệ sinh thái nhằm cung cấp các sản phẩm & dịch vụ tài chính bổ sung.",
    icon: (
      <svg
        className="w-12 h-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    category: "In-App",
    type: "SDK",
    description:
      "Giải pháp dành cho các tổ chức tài chính và các đối tác hệ sinh thái chưa sẵn sàng hoàn toàn với API.",
    icon: (
      <svg
        className="w-12 h-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    category: "White-Label",
    type: "MOBILE APP",
    description:
      "Giải pháp dành cho các tổ chức tài chính và các đối tác hệ sinh thái chưa có nền tảng di động.",
    icon: (
      <svg
        className="w-12 h-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    category: "Partner Portal",
    type: "WEB",
    description:
      "Cổng quản trị dành cho các tổ chức tài chính và đối tác để quản lý sản phẩm tài chính, dịch vụ và hiệu suất liên quan.",
    icon: (
      <svg
        className="w-12 h-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Công nghệ là năng lực cốt lõi của chúng tôi
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Giải pháp công nghệ của FinOS có sẵn dưới dạng 3+1, được thiết kế cho các đối tác
            với các mức độ trưởng thành kỹ thuật số khác nhau.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.category}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-colors text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center border border-accent/40">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {solution.category}
              </h3>
              <p className="text-accent font-semibold text-sm mb-4">
                {solution.type}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
