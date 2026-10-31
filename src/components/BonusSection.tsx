import React from "react";
import { BONUSES, CHECKOUT_URL } from "../data";
import { Gift, ArrowRight } from "lucide-react";

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="relative py-24 md:py-36 bg-[#08090B] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#E5A823]/6 blur-[190px]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#E5A823] mb-4">
            <Gift className="w-4 h-4 text-[#E5A823]" />
            <span>Presentes Especiais Inclusos</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F4EF] leading-tight mb-4">
            GARANTA O ESTUDO HOJE E LEVE{" "}
            <span className="gold-gradient-text block sm:inline">
              5 BÔNUS EXCLUSIVOS
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A7AD] font-light leading-relaxed max-w-2xl mx-auto">
            Além do livro digital completo, você receberá gratuitamente estes 5 materiais
            complementares para fortalecer sua caminhada bíblica.
          </p>
        </div>

        {/* 5 Alternating Bonus Cards */}
        <div className="space-y-8 sm:space-y-12">
          {BONUSES.map((bonus, idx) => {
            // Even: Image Left, Text Right | Odd: Image Right, Text Left
            const isReverse = idx % 2 === 1;

            return (
              <div
                key={bonus.id}
                className="relative rounded-[32px] sm:rounded-[36px] border-[3px] border-[#E5A823] bg-[#000000] p-6 sm:p-8 lg:p-10 shadow-[0_0_30px_rgba(229,168,35,0.12)] hover:shadow-[0_0_45px_rgba(229,168,35,0.25)] transition-all duration-300"
              >
                <div
                  className={`flex flex-col ${
                    isReverse ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center justify-between gap-8 lg:gap-12`}
                >
                  
                  {/* Book / Material Cover */}
                  <div className="w-full md:w-auto flex justify-center shrink-0">
                    <div className="relative w-48 sm:w-56 lg:w-60 aspect-[2/3] rounded-[20px] overflow-hidden shadow-2xl border border-[#E5A823]/30 bg-[#111318]">
                      <img
                        src={bonus.image}
                        alt={bonus.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Description & Price block */}
                  <div className="flex-1 flex flex-col justify-center text-left">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#E5A823] mb-3 block">
                      Bônus Exclusivo #{bonus.number}
                    </span>

                    <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F7F4EF] leading-snug sm:leading-relaxed">
                      {bonus.description}
                    </p>

                    {/* Price comparison: De R$XX,XX por R$0,00 */}
                    <div className="text-xl sm:text-2xl font-bold mt-6 text-[#F7F4EF] flex items-center flex-wrap gap-2">
                      <span>De</span>
                      <span className="text-[#FF3B30] line-through font-extrabold">
                        {bonus.originalPrice}
                      </span>
                      <span>por</span>
                      <span className="text-[#F7F4EF] font-extrabold">
                        {bonus.freePrice}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to claim all bonuses */}
        <div className="mt-14 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D9AD62] via-[#F0C77C] to-[#D9AD62] px-10 py-5 text-base sm:text-lg font-extrabold text-[#08090B] tracking-wide shadow-[0_12px_45px_rgba(217,173,98,0.45)] hover:shadow-[0_16px_55px_rgba(240,199,124,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <span>QUERO MEU LIVRO + OS 5 BÔNUS</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="text-xs text-[#A5A7AD]/80 mt-3">
            Acesso imediato liberado para o livro e todos os 5 bônus na confirmação
          </p>
        </div>

      </div>
    </section>
  );
};
