import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { CHECKOUT_URL, IMAGES } from "../data";
import { FireSparksEffect } from "./FireSparksEffect";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 bg-transparent">
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
              Descubra se a sua tranquilidade está firmada em Cristo ou em uma falsa sensação de segurança.
            </p>

            {/* Key transformation points */}
            <div className="mt-6 space-y-3 max-w-xl text-left">
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-base" aria-hidden="true">✅</span>
                <p className="text-sm sm:text-base text-[#F7F4EF]/95 font-medium leading-snug">
                  Identifique a falsa paz espiritual e volte seus olhos para Cristo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-base" aria-hidden="true">✅</span>
                <p className="text-sm sm:text-base text-[#F7F4EF]/95 font-medium leading-snug">
                  Reconheça e enfrente pequenos pecados antes que se tornem grandes prisões.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-base" aria-hidden="true">✅</span>
                <p className="text-sm sm:text-base text-[#F7F4EF]/95 font-medium leading-snug">
                  Aprenda a confiar em Deus nos momentos de solidão e fraqueza.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-base" aria-hidden="true">✅</span>
                <p className="text-sm sm:text-base text-[#F7F4EF]/95 font-medium leading-snug">
                  Desenvolva coragem para obedecer a Deus e viver a sua fé.
                </p>
              </div>
            </div>
          </div>

          {/* Right / Visual Carrier with Fire & Sparks */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center">
            {/* Visual Fire & Sparks Effect behind book/figure */}
            <FireSparksEffect />

            <div className="relative z-10 w-full flex justify-center">
              {/* Clean image without borders, frames, or boxes */}
              <img
                src={IMAGES.hero}
                alt="Figura contemplativa iluminada por luz dourada, simbolizando as batalhas interiores da alma"
                referrerPolicy="no-referrer"
                className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Discreet, compact CTA moved directly below the image */}
            <div className="relative z-20 flex flex-col items-center gap-2 mt-6 w-full max-w-sm">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full btn-3d-gold px-7 py-3.5 text-xs sm:text-sm font-black tracking-wide text-[#08090B] group text-center cursor-pointer"
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
