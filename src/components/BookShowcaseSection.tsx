import React from "react";
import { ArrowRight, BookOpen, Check, Shield, Compass, HeartHandshake } from "lucide-react";
import { CHECKOUT_URL, IMAGES, BENEFITS } from "../data";

export const BookShowcaseSection: React.FC = () => {
  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#D9AD62]" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-[#F0C77C]" />;
      case 2:
        return <Shield className="w-5 h-5 text-[#D9AD62]" />;
      case 3:
        return <HeartHandshake className="w-5 h-5 text-[#F0C77C]" />;
      default:
        return <Check className="w-5 h-5 text-[#D9AD62]" />;
    }
  };

  return (
    <section id="livro" className="relative py-24 md:py-36 bg-[#08090B] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#D9AD62]/10 blur-[170px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#D9AD62] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9AD62]" />
            <span>O Livro & Estudo Digital</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EF] leading-tight mb-6">
            CONHEÇA <span className="gold-gradient-text">A PAZ DO DIABO</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A7AD] font-light leading-relaxed">
            Um estudo bíblico para quem deseja ir além das aparências e
            compreender as batalhas da alma.
          </p>
        </div>

        {/* Product Grid: 3D Book on Left, Benefits on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Floating Book Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group perspective-1000 py-6">
              
              {/* Radial Golden Halo behind Book */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[480px] rounded-full bg-radial from-[#F0C77C]/25 via-[#D9AD62]/10 to-transparent blur-[70px] pointer-events-none" />

              {/* 3D Book Container */}
              <div className="relative transform-style-3d rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-[-4deg] hover:rotate-x-[2deg] transition-transform duration-700 ease-out cursor-pointer">
                
                {/* Book Front & Spine Assembly */}
                <div className="relative w-[280px] sm:w-[320px] rounded-[16px] overflow-hidden shadow-[25px_30px_70px_rgba(0,0,0,0.95)] border border-[#D9AD62]/30 bg-[#111318]">
                  
                  {/* Front Cover Image */}
                  <img
                    src={IMAGES.bookCover}
                    alt="Capa tridimensional do livro A Paz do Diabo com detalhes em dourado envelhecido"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />

                  {/* Surface Sheen & Bevel Reflections */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                  
                  {/* Subtle Spine shadow simulation on left edge */}
                  <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
                </div>

                {/* 3D Page Depth on the right side */}
                <div
                  className="absolute top-[8px] bottom-[8px] right-[-14px] w-[16px] bg-gradient-to-r from-[#e3dac9] via-[#c4b59b] to-[#111318] rounded-r-sm opacity-90 shadow-md pointer-events-none"
                  style={{
                    transform: "rotateY(75deg) translateZ(-6px)",
                  }}
                />

                {/* Ground Reflection & Soft Shadow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/80 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Subtle pill indicator */}
              <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[#A5A7AD]/80">
                <span className="w-2 h-2 rounded-full bg-[#D9AD62]" />
                <span>Edição Digital Oficial · Alta Resolução</span>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F7F4EF] mb-3">
              O que você vai desenvolver nesta leitura:
            </h3>
            <p className="text-sm sm:text-base text-[#A5A7AD] mb-8 font-light">
              Uma imersão cuidadosa estruturada para edificar sua vida espiritual
              sem fórmulas artificiais ou promessas vazias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[24px] bg-[#111318] border border-[#191B21] hover:border-[#D9AD62]/40 transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(217,173,98,0.06)] group"
                >
                  <div className="p-3 rounded-xl bg-[#08090B] border border-[#191B21] group-hover:border-[#D9AD62]/30 w-fit mb-4 transition-colors">
                    {getBenefitIcon(idx)}
                  </div>
                  <h4 className="font-editorial text-lg font-bold text-[#F7F4EF] group-hover:text-[#F0C77C] transition-colors mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A5A7AD] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D9AD62] via-[#F0C77C] to-[#D9AD62] px-8 py-4 text-base font-bold text-[#08090B] tracking-wide shadow-[0_10px_35px_rgba(217,173,98,0.35)] hover:shadow-[0_15px_45px_rgba(240,199,124,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>QUERO LER A PAZ DO DIABO</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <span className="text-xs text-[#A5A7AD]/70">
                Acesso imediato no seu e-mail
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
