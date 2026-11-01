import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { CHECKOUT_URL, IMAGES } from "../data";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-28 md:py-40 bg-transparent overflow-hidden flex items-center justify-center text-center">
      {/* Background visual asset: figure walking towards divine light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.walkingLight}
          alt="Figura caminhando em direção à luz divina, representando esperança e confiança em Deus"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 filter brightness-70 contrast-125"
        />
        {/* Gradients to melt seamlessly into #08090B with zero harsh division */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090B] via-transparent to-[#08090B]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08090B]/75 to-[#08090B]" />
      </div>

      {/* Central Golden Halo */}
      <div className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-[#D9AD62]/10 blur-[170px] z-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD62] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9AD62]" />
          <span>O Próximo Passo</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F4EF] leading-tight mb-6">
          NÃO SE CONTENTE APENAS COM A{" "}
          <span className="gold-gradient-text block sm:inline">
            APARÊNCIA DE PAZ.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-[#A5A7AD] font-light leading-relaxed mb-10 max-w-xl mx-auto">
          Aprofunde sua compreensão sobre a verdadeira confiança em Deus.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full btn-3d-gold px-10 py-5 text-lg font-black tracking-wide text-[#08090B] group cursor-pointer"
          >
            <span>QUERO COMEÇAR MINHA LEITURA</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-2 text-xs text-[#A5A7AD]/80 mt-2">
            <BookOpen className="w-3.5 h-3.5 text-[#D9AD62]" />
            <span>Livro digital oficial · Liberação instantânea</span>
          </div>
        </div>
      </div>
    </section>
  );
};
