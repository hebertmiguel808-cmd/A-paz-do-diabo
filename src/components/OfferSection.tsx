import React from "react";
import { ArrowRight, ShieldCheck, Zap, Download, CheckCircle, Lock } from "lucide-react";
import { CHECKOUT_URL, IMAGES } from "../data";

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="relative py-20 md:py-32 bg-transparent">
      {/* Background radial gold aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#D9AD62]/10 blur-[180px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
        

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
            Um estudo bíblico sobre as batalhas da alma, a falsa paz e a confiança verdadeira em Deus.
          </p>
        </div>

        {/* Visual preview strip of what is included */}
        <div className="my-8 p-6 sm:p-8 rounded-[24px] bg-[#111318]/80 border border-[#191B21] flex flex-col sm:flex-row items-center gap-6 text-left max-w-2xl mx-auto shadow-xl">
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

        {/* Giant 3D CTA Button */}
        <div className="space-y-4 max-w-md mx-auto mt-8">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 rounded-full btn-3d-gold px-10 py-5 text-lg sm:text-xl font-black tracking-wide text-[#08090B] group cursor-pointer"
          >
            <span>SIM, QUERO MEU LIVRO AGORA</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1.5" />
          </a>

          <p className="text-xs text-[#A5A7AD]/80">
            Ambiente de pagamento oficial Kiwify · Acesso liberado no seu e-mail
          </p>
        </div>

        {/* Payment & Security Signals */}
        <div className="mt-8 pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A5A7AD]">
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
    </section>
  );
};
