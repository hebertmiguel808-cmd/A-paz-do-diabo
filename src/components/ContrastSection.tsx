import React from "react";
import { CONTRASTS } from "../data";
import { AlertCircle, CheckCircle2, ArrowRightLeft } from "lucide-react";

export const ContrastSection: React.FC = () => {
  return (
    <section id="contraste" className="relative py-24 md:py-32 bg-[#08090B] overflow-hidden">
      {/* Background visual duality: Subtle ambient warmth, fully seamless with page */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#521F2B]/10 blur-[180px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#D9AD62]/8 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#D9AD62] mb-4">
            <ArrowRightLeft className="w-3.5 h-3.5 text-[#D9AD62]" />
            <span>O Crivo do Discernimento</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EF] leading-tight mb-6">
            DUAS FORMAS DE ENTENDER A PAZ.{" "}
            <span className="gold-gradient-text block mt-1">
              UMA REFLEXÃO QUE PODE MUDAR SUA PERSPECTIVA.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A7AD] font-light leading-relaxed">
            Aprenda a distinguir a calmaria frágil produzida pela acomodação
            humana da paz soberana gerada pelo Espírito Santo.
          </p>
        </div>

        {/* Dual Atmosphere Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: A FALSA PAZ */}
          <div className="rounded-[32px] p-8 sm:p-10 border border-[#521F2B]/40 bg-gradient-to-b from-[#111318] to-[#0D0F14] shadow-2xl relative overflow-hidden">
            {/* Top ambient wine glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#521F2B]/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6 pb-2">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A5A7AD]/70 block mb-1">
                    Atmosfera Fria & Superficial
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F7F4EF]">
                    A FALSA PAZ
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-[#08090B] border border-[#521F2B]/50 text-[#F7F4EF]">
                  <AlertCircle className="w-6 h-6 text-[#A5A7AD]" />
                </div>
              </div>

              <p className="text-sm text-[#A5A7AD] leading-relaxed mb-8">
                Uma sensação efêmera de tranquilidade que anestesia o discernimento
                e foge de qualquer autoexame diante da soberania divina.
              </p>

              <div className="space-y-6">
                {CONTRASTS.falsePeace.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#08090B]/60 border border-[#191B21] hover:border-[#521F2B]/60 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[#A5A7AD] mt-1 shrink-0 font-mono text-xs">
                        ✕
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-[#F7F4EF] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#A5A7AD] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: A PAZ EM DEUS */}
          <div className="rounded-[32px] p-8 sm:p-10 border border-[#D9AD62]/35 bg-gradient-to-b from-[#161820] to-[#111318] shadow-[0_15px_40px_rgba(217,173,98,0.08)] relative overflow-hidden">
            {/* Top ambient gold glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#D9AD62]/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6 pb-2">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D9AD62] block mb-1">
                    Atmosfera Luminosa & Firme
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F0C77C]">
                    A PAZ EM DEUS
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-[#08090B] border border-[#D9AD62]/40 text-[#D9AD62]">
                  <CheckCircle2 className="w-6 h-6 text-[#D9AD62]" />
                </div>
              </div>

              <p className="text-sm text-[#F7F4EF]/80 leading-relaxed mb-8">
                Um descanso firme gerado pela submissão à verdade e pela convicção
                profunda de que nada escapa ao governo de Deus.
              </p>

              <div className="space-y-6">
                {CONTRASTS.godPeace.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#08090B]/80 border border-[#D9AD62]/20 hover:border-[#D9AD62]/50 transition-colors shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[#D9AD62] mt-1 shrink-0 font-bold text-sm">
                        ✓
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-[#F7F4EF] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#A5A7AD] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
