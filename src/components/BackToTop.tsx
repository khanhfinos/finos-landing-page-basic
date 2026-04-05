"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-accent hover:bg-accent-light text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
