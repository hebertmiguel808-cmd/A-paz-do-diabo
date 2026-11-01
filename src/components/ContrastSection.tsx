import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

const LEARNING_ITEMS = [
  {
    number: "01",
    text: "Como identificar uma falsa paz espiritual",
  },
  {
    number: "02",
    text: "Por que os “pequenos pecados” podem se tornar grandes prisões",
  },
  {
    number: "03",
    text: "Como parar de olhar apenas para si mesmo e voltar os olhos para Cristo",
  },
  {
    number: "04",
    text: "Como confiar em Deus mesmo nos momentos de solidão e fraqueza",
  },
  {
    number: "05",
    text: "Como desenvolver coragem para obedecer a Deus",
  },
  {
    number: "06",
    text: "Como reconhecer e enfrentar um pecado que está sendo tolerado",
  },
  {
    number: "07",
    text: "E muito mais!!",
  },
];

export const ContrastSection: React.FC = () => {
  return (
    <section id="aprender" className="relative py-24 md:py-36 bg-transparent">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#D9AD62]/6 blur-[190px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#D9AD62] mb-4">
            <Sparkles className="w-4 h-4 text-[#D9AD62]" />
            <span>Conteúdo Programático & Transformação</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F4EF] leading-tight mb-6">
            O QUE VOCÊ VAI{" "}
            <span className="gold-gradient-text">APRENDER</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A7AD] font-light leading-relaxed max-w-2xl mx-auto">
            Uma jornada bíblica estruturada para despertar a sua alma, desarmar armadilhas silenciosas e edificar a verdadeira paz em Cristo.
          </p>
        </div>

        {/* Bloco Único com os 7 Pontos e Números Sobressalentes Livres do Quadradinho */}
        <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-[#13151D]/90 via-[#101217]/90 to-[#0A0C0F]/90 border border-[#191B21] shadow-2xl">
          
          {/* Subtle Ambient Flare inside block */}
          <div className="pointer-events-none absolute top-0 right-10 w-64 h-64 bg-[#D9AD62]/10 rounded-full blur-[90px]" />

          {/* List of 7 points */}
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {LEARNING_ITEMS.map((item) => (
              <div
                key={item.number}
                className="flex items-center gap-5 sm:gap-8 pb-6 sm:pb-7 border-b border-[#191B21]/80 last:border-b-0 last:pb-0 group"
              >
                {/* Número Grande, Sobressalente e Destacado sem quadradinho */}
                <div className="shrink-0 w-14 sm:w-20 text-left">
                  <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-black gold-gradient-text tracking-tighter block select-none drop-shadow-[0_4px_20px_rgba(217,173,98,0.4)] group-hover:scale-110 group-hover:drop-shadow-[0_6px_28px_rgba(240,199,124,0.65)] transition-all duration-300">
                    {item.number}
                  </span>
                </div>

                {/* Texto do Ponto */}
                <div className="flex-1">
                  <p className="font-editorial text-lg sm:text-xl lg:text-2xl font-bold text-[#F7F4EF] group-hover:text-[#F0C77C] transition-colors leading-snug sm:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance footer inside the card */}
          <div className="mt-10 pt-6 border-t border-[#191B21] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A7AD]/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D9AD62]" />
              <span>Estudo bíblico digital completo com acesso vitalício</span>
            </div>
            <span className="font-mono text-[#D9AD62] font-semibold">Liberado Imediatamente</span>
          </div>

        </div>

      </div>
    </section>
  );
};
