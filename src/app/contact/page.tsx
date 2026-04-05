"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] focus:bg-white transition-all";
  const labelClass = "block text-sm font-medium text-gray-600 mb-1.5";

  return (
    <>
      <Navbar />

      <PageHero
        badge="Liên hệ"
        title="Liên hệ FinOS"
        description="Liên hệ với chúng tôi để tìm hiểu thêm về các giải pháp & dịch vụ tài chính."
      />

      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#00bcd4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00bcd4]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* Left — Info */}
          <div className="flex flex-col gap-10 w-full max-w-sm mx-auto lg:mx-0 lg:pt-4">
            <div>
              <span className="text-[#00bcd4] text-xs font-semibold uppercase tracking-widest mb-3 block">Kết nối với chúng tôi</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Chúng tôi luôn sẵn sàng lắng nghe
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Dù bạn muốn tìm hiểu sản phẩm, thảo luận hợp tác hay cần tư vấn triển khai — đội ngũ FinOS sẽ phản hồi trong vòng 1 ngày làm việc.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
              <ul className="ml-5 list-disc space-y-3 text-base text-gray-600">
                <li>
                  <span className="font-bold text-gray-800">Email: </span>
                  <a href="mailto:operation@finos.asia" className="underline hover:text-[#00bcd4] transition-colors">
                    operation@finos.asia
                  </a>
                </li>
                <li>
                  <span className="font-bold text-gray-800">Website: </span>
                  <a href="https://finos.asia" target="_blank" className="underline hover:text-[#00bcd4] transition-colors">
                    finos.asia
                  </a>
                </li>
                <li>
                  <span className="font-bold text-gray-800">Địa chỉ: </span>
                  Tầng 9, Galaxy Innovation Hub, Đường D1, Khu Công nghệ cao, TP. Hồ Chí Minh
                </li>
                <li>
                  <span className="font-bold text-gray-800">MST: </span>
                  0315635726
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div className="w-full max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <CheckCircle2 className="w-14 h-14 text-[#00bcd4]" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-gray-900">Gửi thành công!</h3>
                <p className="text-gray-500 text-base max-w-sm">Cảm ơn bạn đã liên hệ. Đội ngũ FinOS sẽ phản hồi trong vòng 1 ngày làm việc.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Họ &amp; Tên</label>
                  <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Nguyễn Văn A" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="ban@congty.com" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>Số điện thoại</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+84 9xx xxx xxx" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>Công ty</label>
                  <input type="text" id="company" name="company" value={form.company} onChange={handleChange} placeholder="Tên công ty của bạn" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Nội dung</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Mô tả nhu cầu hoặc câu hỏi của bạn..." rows={5} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all cursor-pointer mt-1 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  Gửi yêu cầu
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}


