import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../data";

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#08090B]/95 backdrop-blur-lg px-4 py-3 shadow-[0_-10px_35px_rgba(0,0,0,0.9)] transition-all">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="min-w-0 flex-1">
          <p className="font-editorial text-xs font-bold text-[#F7F4EF] truncate">
            A Paz do Diabo
          </p>
          <p className="text-[10px] text-[#D9AD62] font-medium truncate">
            Estudo Bíblico Digital
          </p>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#D9AD62] to-[#F0C77C] px-5 py-2.5 text-xs font-bold text-[#08090B] tracking-wide shadow-md whitespace-nowrap shrink-0 active:scale-95 transition-transform"
        >
          <span>QUERO MEU LIVRO</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
