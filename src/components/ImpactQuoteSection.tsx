import React from "react";
import { IMAGES } from "../data";

export const ImpactQuoteSection: React.FC = () => {
  return (
    <section className="relative py-28 md:py-44 bg-[#08090B] overflow-hidden flex items-center justify-center text-center">
      {/* Background Bible with controlled opacity and radial fade */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          src={IMAGES.bible}
          alt="Bíblia sagrada aberta com páginas iluminadas por partículas douradas"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75 contrast-125"
        />
        {/* Full opacity fade into #08090B at top and bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090B] via-transparent to-[#08090B]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08090B]/70 to-[#08090B]" />
      </div>

      {/* Central Golden Halo */}
      <div className="pointer-events-none absolute w-[550px] h-[350px] rounded-full bg-[#D9AD62]/10 blur-[160px] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <blockquote className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F4EF] leading-[1.2] mb-10">
          &ldquo;A VERDADEIRA PAZ NÃO É APENAS O QUE VOCÊ SENTE. É TAMBÉM{" "}
          <span className="gold-gradient-text block sm:inline">
            EM QUEM VOCÊ CONFIA.
          </span>
          &rdquo;
        </blockquote>

        <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#D9AD62] font-semibold">
          <span>Princípio Central do Estudo Bíblico</span>
        </div>
      </div>
    </section>
  );
};
