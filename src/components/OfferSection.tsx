import React from "react";
import { ArrowRight, ShieldCheck, Zap, Download, CheckCircle, Lock } from "lucide-react";
import { CHECKOUT_URL, IMAGES } from "../data";

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="relative py-24 md:py-36 bg-[#08090B]">
      {/* Background radial gold aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#D9AD62]/15 blur-[180px]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        
        {/* Main Offer Card */}
        <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#14161E] via-[#111318] to-[#0A0B0E] border-2 border-[#D9AD62]/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
          
          {/* Ambient Corner Flare */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F0C77C]/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#521F2B]/30 blur-[120px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#D9AD62] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D9AD62]" />
              <span>Acesso Imediato & Seguro</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F4EF] leading-tight mb-4">
              COMECE SUA JORNADA DE REFLEXÃO
            </h2>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F0C77C] font-editorial tracking-wide">
                A Paz do Diabo — Livro Digital
              </h3>
              <p className="text-sm sm:text-base text-[#A5A7AD] mt-2 max-w-xl mx-auto font-light leading-relaxed">
                Um estudo bíblico sobre as batalhas da alma, a falsa paz e a
                confiança verdadeira em Deus.
              </p>
            </div>

            {/* Visual preview strip of what is included */}
            <div className="my-10 p-6 sm:p-8 rounded-[24px] bg-[#08090B]/80 border border-[#191B21] flex flex-col sm:flex-row items-center gap-6 text-left">
              <div className="w-28 sm:w-32 shrink-0 rounded-xl overflow-hidden shadow-xl border border-[#D9AD62]/30">
                <img
                  src={IMAGES.bookCover}
                  alt="A Paz do Diabo Livro Digital"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex-1 space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#F7F4EF]">
                  <CheckCircle className="w-4 h-4 text-[#D9AD62] shrink-0" />
                  <span>Livro digital completo com fundamentação bíblica rigorosa</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#F0C77C]">
                  <CheckCircle className="w-4 h-4 text-[#E5A823] shrink-0" />
                  <span>Todos os 5 Bônus Exclusivos inclusos gratuitamente</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#A5A7AD]">
                  <Download className="w-4 h-4 text-[#D9AD62] shrink-0" />
                  <span>Download imediato e leitura em celular, tablet ou computador</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#A5A7AD]">
                  <Zap className="w-4 h-4 text-[#D9AD62] shrink-0" />
                  <span>Entrega automática por e-mail após a confirmação do pagamento</span>
                </div>
              </div>
            </div>

            {/* Giant High-Contrast CTA Button */}
            <div className="space-y-4 max-w-md mx-auto">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D9AD62] via-[#F0C77C] to-[#D9AD62] px-10 py-5 text-lg sm:text-xl font-extrabold text-[#08090B] tracking-wide shadow-[0_12px_45px_rgba(217,173,98,0.45)] hover:shadow-[0_16px_55px_rgba(240,199,124,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>SIM, QUERO MEU LIVRO AGORA</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>

              <p className="text-xs text-[#A5A7AD]/80">
                Ambiente de pagamento oficial Kiwify · Acesso liberado no seu e-mail
              </p>
            </div>

            {/* Payment & Security Signals */}
            <div className="mt-10 pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A5A7AD]">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#D9AD62]" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D9AD62]" />
                <span>Criptografia SSL de 256 bits</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D9AD62]" />
                <span>Acesso Imediato</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
