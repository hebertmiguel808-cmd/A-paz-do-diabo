import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { CHECKOUT_URL, IMAGES } from "../data";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 lg:pt-24 lg:pb-36 bg-[#08090B]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#D9AD62]/10 blur-[140px] opacity-70" />
      <div className="pointer-events-none absolute -top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#521F2B]/20 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F4EF] leading-[1.12] mb-6 max-w-2xl">
              NEM TODA PAZ{" "}
              <span className="gold-gradient-text block sm:inline">
                VEM DE DEUS!
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#A5A7AD] font-light leading-relaxed max-w-xl">
              Descubra por que nem toda tranquilidade é sinal de paz verdadeira —
              e aprofunde sua compreensão sobre as batalhas da alma e a
              confiança em Deus.
            </p>
          </div>

          {/* Right / Visual Carrier */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center">
            {/* Golden radiance halo behind character */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-radial from-[#F0C77C]/25 via-[#D9AD62]/10 to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 w-full flex justify-center">
              {/* Clean image without borders, frames, or boxes */}
              <img
                src={IMAGES.hero}
                alt="Figura contemplativa iluminada por luz dourada, simbolizando as batalhas interiores da alma"
                referrerPolicy="no-referrer"
                className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Discreet, compact CTA moved directly below the image */}
            <div className="relative z-20 flex flex-col items-center gap-2 mt-6 w-full max-w-sm">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D9AD62] via-[#F0C77C] to-[#D9AD62] px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#08090B] tracking-wide shadow-sm hover:shadow-[0_4px_20px_rgba(217,173,98,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 group text-center"
              >
                <span>Quero descobrir a paz que vem de Deus.</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Text below button */}
              <div className="flex flex-col items-center text-center gap-1 mt-1">
                <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#F7F4EF]/90 font-medium">
                  <BookOpen className="w-3.5 h-3.5 text-[#D9AD62] shrink-0" />
                  <span>Acesso vitalício, imediato no seu e-mail e fácil de imprimir.</span>
                </div>
                <span className="text-[10.5px] sm:text-[11px] text-[#A5A7AD]/70">
                  Acesse através do celular, computador ou tablet!
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
