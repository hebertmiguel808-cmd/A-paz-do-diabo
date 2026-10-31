import React from "react";
import { Check, Sparkles } from "lucide-react";
import { AUDIENCE_CHECKS, IMAGES } from "../data";

export const AudienceSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#08090B] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-20 top-1/4 w-[600px] h-[600px] rounded-full bg-[#D9AD62]/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#D9AD62] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D9AD62]" />
            <span>Público & Identificação</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EF] leading-tight mb-6">
            ESTE ESTUDO É <span className="gold-gradient-text">PARA VOCÊ QUE...</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A7AD] font-light leading-relaxed">
            Se você se identifica com uma ou mais destas inquietações sinceras,
            este material foi escrito para o seu momento de fé.
          </p>
        </div>

        {/* Content split: chains imagery on left, checkmark cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Symbolic image of chains breaking into golden light */}
          <div className="lg:col-span-5 relative rounded-[32px] overflow-hidden border border-[#191B21] bg-[#111318] p-6 shadow-2xl group">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
              <img
                src={IMAGES.chains}
                alt="Correntes se desfazendo em partículas douradas simbolizando o rompimento com falsas seguranças"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-6 p-2 text-center lg:text-left">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D9AD62] block mb-1">
                Ruptura com o Engano
              </span>
              <p className="font-editorial text-lg text-[#F7F4EF] font-bold">
                Desfazendo as âncoras da falsa segurança
              </p>
              <p className="text-xs text-[#A5A7AD] mt-1.5 leading-relaxed">
                Descubra a liberdade de não precisar fingir que tudo está bem quando sua alma anseia por Deus.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Cards with golden checkmarks */}
          <div className="lg:col-span-7 space-y-4">
            {AUDIENCE_CHECKS.map((text, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-5 p-5 sm:p-6 rounded-[24px] bg-[#111318]/90 border border-[#191B21] hover:border-[#D9AD62]/40 hover:bg-[#191B21]/90 transition-all duration-300 shadow-sm hover:shadow-[0_6px_20px_rgba(217,173,98,0.06)]"
              >
                <div className="w-8 h-8 rounded-full bg-[#08090B] border border-[#D9AD62]/40 group-hover:border-[#F0C77C] group-hover:bg-[#D9AD62]/10 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                  <Check className="w-4 h-4 text-[#D9AD62] group-hover:text-[#F0C77C]" />
                </div>

                <div className="flex-1">
                  <p className="text-base sm:text-lg text-[#F7F4EF] font-medium leading-relaxed group-hover:text-[#FDF7EA] transition-colors">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
