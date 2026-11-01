import React from "react";
import { Sparkles } from "lucide-react";

interface BookPage {
  src: string;
  alt: string;
  pageNumber: number;
}

const TIER_ONE_PAGES: BookPage[] = [
  { src: "/images/page_1.png", alt: "Página 1 do Livro A Paz do Diabo", pageNumber: 1 },
  { src: "/images/page_2.png", alt: "Página 2 do Livro A Paz do Diabo", pageNumber: 2 },
  { src: "/images/page_3.png", alt: "Página 3 do Livro A Paz do Diabo", pageNumber: 3 },
  { src: "/images/page_4.png", alt: "Página 4 do Livro A Paz do Diabo", pageNumber: 4 },
  { src: "/images/page_5.png", alt: "Página 5 do Livro A Paz do Diabo", pageNumber: 5 },
  { src: "/images/page_6.png", alt: "Página 6 do Livro A Paz do Diabo", pageNumber: 6 },
  { src: "/images/page_7.png", alt: "Página 7 do Livro A Paz do Diabo", pageNumber: 7 },
];

const TIER_TWO_PAGES: BookPage[] = [
  { src: "/images/page_8.png", alt: "Página 8 do Livro A Paz do Diabo", pageNumber: 8 },
  { src: "/images/page_9.png", alt: "Página 9 do Livro A Paz do Diabo", pageNumber: 9 },
  { src: "/images/page_10.png", alt: "Página 10 do Livro A Paz do Diabo", pageNumber: 10 },
  { src: "/images/page_11.png", alt: "Página 11 do Livro A Paz do Diabo", pageNumber: 11 },
  { src: "/images/page_12.png", alt: "Página 12 do Livro A Paz do Diabo", pageNumber: 12 },
  { src: "/images/page_13.png", alt: "Página 13 do Livro A Paz do Diabo", pageNumber: 13 },
  { src: "/images/page_14.png", alt: "Página 14 do Livro A Paz do Diabo", pageNumber: 14 },
];

export const FalsePeaceSection: React.FC = () => {
  return (
    <section id="estudo" className="relative py-20 md:py-32 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#D9AD62] mb-4">
            <Sparkles className="w-4 h-4 text-[#D9AD62]" />
            <span>Por Dentro do Livro</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F4EF] leading-tight max-w-3xl mx-auto">
            Confira algumas das páginas que você{" "}
            <span className="gold-gradient-text">encontrará lá dentro.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#A5A7AD] font-light mt-4 max-w-2xl mx-auto leading-relaxed">
            O livro A Paz do Diabo conduz você por reflexões bíblicas para reconhecer a falsa paz,
            enfrentar os pecados que aprisionam a alma e aprender a descansar verdadeiramente em Deus.
          </p>
        </div>

      </div>

      {/* Two-Tier Continuous Infinite Image Marquee */}
      <div className="relative w-full space-y-6 sm:space-y-8 overflow-hidden select-none">
        
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#08090B] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#08090B] to-transparent z-20" />

        {/* Tier 1 (Andar Superior): Páginas 1 a 7 */}
        <div className="animate-marquee-left flex gap-5 sm:gap-6">
          {[...TIER_ONE_PAGES, ...TIER_ONE_PAGES, ...TIER_ONE_PAGES].map((page, idx) => (
            <div
              key={`t1-${idx}`}
              className="w-[220px] sm:w-[260px] md:w-[280px] aspect-[494/701] shrink-0 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-white shadow-[0_12px_45px_rgba(0,0,0,0.9)] border border-[#D9AD62]/35 hover:border-[#D9AD62] hover:scale-[1.02] transition-all duration-300 relative group"
            >
              <img
                src={page.src}
                alt={page.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain block bg-white"
              />
            </div>
          ))}
        </div>

        {/* Tier 2 (Andar Inferior): Páginas 8 a 14 */}
        <div className="animate-marquee-left-fast flex gap-5 sm:gap-6">
          {[...TIER_TWO_PAGES, ...TIER_TWO_PAGES, ...TIER_TWO_PAGES].map((page, idx) => (
            <div
              key={`t2-${idx}`}
              className="w-[220px] sm:w-[260px] md:w-[280px] aspect-[494/701] shrink-0 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-white shadow-[0_12px_45px_rgba(0,0,0,0.9)] border border-[#D9AD62]/35 hover:border-[#D9AD62] hover:scale-[1.02] transition-all duration-300 relative group"
            >
              <img
                src={page.src}
                alt={page.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain block bg-white"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
