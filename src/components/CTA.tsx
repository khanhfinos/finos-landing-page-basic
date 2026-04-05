"use client";

import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Mail, Users } from "lucide-react";

interface PartnerLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  text: string;
}

const partnerLinks: PartnerLink[] = [
  {
    href: "/contact",
    label: "Liên hệ ngay",
    icon: <Mail size={22} />,
    bg: "bg-accent",
    text: "text-white",
  },
  {
    href: "/about",
    label: "Về chúng tôi",
    icon: <Users size={22} />,
    bg: "bg-white/10",
    text: "text-white",
  },
];

const ConnectForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    setShowToast(true);
    setMessage("");
    setEmail("");
    setError("");
    if (inputRef.current) inputRef.current.blur();
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="w-full flex flex-col items-center gap-4 mt-2">
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-accent text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-base animate-fade-in">
          Tin nhắn đã được gửi!
        </div>
      )}
      <p className="text-base text-white/60 max-w-md mx-auto text-center">
        Để lại thông tin và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
      </p>
      <form onSubmit={handleSend} className="flex flex-col sm:flex-row w-full max-w-lg gap-2 items-center">
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          placeholder="Email của bạn..."
          className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-base text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors w-full sm:w-auto"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => { setMessage(e.target.value); setError(""); }}
          placeholder="Tin nhắn ngắn..."
          className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-base text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors w-full sm:w-auto"
          maxLength={200}
        />
        <button
          type="submit"
          className={twMerge(
            "rounded-full bg-accent px-7 py-3 text-base font-semibold text-white shadow-lg transition-all",
            message.trim() && email.trim()
              ? "hover:scale-105 hover:bg-accent-light cursor-pointer opacity-100"
              : "opacity-50 cursor-not-allowed"
          )}
          disabled={!message.trim() || !email.trim()}
        >
          Gửi
        </button>
      </form>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </section>
  );
};

export default function CTA() {
  return (
    <div className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#0a0f2e] via-primary-dark to-[#0d1a4a] px-4 py-20 text-white overflow-hidden">
      {/* Animated accent blob */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-primary/30 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-10">
        {/* Icon + heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Cách mạng tài chính số
          </h2>
          <p className="text-lg text-white/70 max-w-2xl">
            Hiện tại, chúng tôi đang tìm kiếm các tổ chức tài chính và các đối tác trong hệ sinh thái (nhà phân phối sản phẩm) để hợp tác và/hoặc tham gia mạng lưới của chúng tôi, cùng nhau cách mạng hóa ngành tài chính.
          </p>
        </div>

        {/* Partner link pills */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {partnerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className={twMerge(
                "flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent",
                link.bg,
                link.text
              )}
              style={{ minWidth: 140, minHeight: 52 }}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

