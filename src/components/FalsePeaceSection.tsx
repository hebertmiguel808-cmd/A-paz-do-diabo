import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { IMAGES } from "../data";

const TIER_ONE_IMAGES = [
  {
    src: IMAGES.bookCover,
    alt: "Capa Oficial — A Paz do Diabo",
    title: "A Paz do Diabo — Estudo Bíblico Completo",
  },
  {
    src: "/images/bonus_1_cover.png",
    alt: "Com Cristo Nunca Mais Eu Pequei em Paz",
    title: "A Luta Contra as Quedas Silenciosas",
  },
  {
    src: IMAGES.bible,
    alt: "Páginas das Escrituras Abertas",
    title: "O Crivo Cirúrgico da Palavra de Deus",
  },
  {
    src: "/images/bonus_2_cover.png",
    alt: "Por Onde Começar a Ler a Bíblia",
    title: "Guia Prático de Leitura e Discernimento",
  },
  {
    src: IMAGES.falsePeace,
    alt: "Diagnóstico da Falsa Paz",
    title: "O Alerta Contra a Acomodação Espiritual",
  },
];

const TIER_TWO_IMAGES = [
  {
    src: "/images/bonus_3_cover.png",
    alt: "O Silêncio de Deus & As Batalhas Secretas",
    title: "Como Perseverar na Oração",
  },
  {
    src: IMAGES.chains,
    alt: "Quebrando as Amarras da Culpa",
    title: "A Verdadeira Liberdade em Cristo",
  },
  {
    src: "/images/bonus_4_cover.png",
    alt: "7 Dias Para Desarmar a Falsa Paz",
    title: "Plano Devocional de Autoexame",
  },
  {
    src: IMAGES.walkingLight,
    alt: "Caminhada em Direção à Luz",
    title: "A Paz Soberana que Vem do Senhor",
  },
  {
    src: "/images/bonus_5_cover.png",
    alt: "Caderno de Autoexame & Discernimento",
    title: "Perguntas Guiadas Diante de Deus",
  },
];

export const FalsePeaceSection: React.FC = () => {
  return (
    <section id="estudo" className="relative py-24 md:py-36 bg-[#08090B] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D9AD62]/5 blur-[200px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#D9AD62] mb-4">
            <Sparkles className="w-4 h-4 text-[#D9AD62]" />
            <span>Por Dentro do Conteúdo</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F4EF] leading-tight">
            PÁGINAS E MATERIAIS{" "}
            <span className="gold-gradient-text block sm:inline">
              DO ESTUDO DIGITAL
            </span>
          </h2>
        </div>

      </div>

      {/* Two-Tier Continuous Infinite Image Marquee */}
      <div className="relative w-full space-y-5 sm:space-y-6 overflow-hidden select-none">
        
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#08090B] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#08090B] to-transparent z-20" />

        {/* Tier 1 (Andar Superior): Images Right to Left */}
        <div className="animate-marquee-left flex gap-5 sm:gap-6">
          {[...TIER_ONE_IMAGES, ...TIER_ONE_IMAGES, ...TIER_ONE_IMAGES].map((item, idx) => (
            <div
              key={`t1-${idx}`}
              className="w-[220px] sm:w-[260px] md:w-[290px] aspect-[3/4] shrink-0 rounded-[24px] overflow-hidden border border-[#D9AD62]/35 bg-[#111318] shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:border-[#D9AD62] hover:shadow-[0_15px_45px_rgba(217,173,98,0.25)] transition-all duration-300 relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/90 via-[#08090B]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <span className="text-[11px] sm:text-xs font-editorial font-bold text-[#F7F4EF] block leading-snug line-clamp-2">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tier 2 (Andar Inferior): Images Right to Left (Offset Speed) */}
        <div className="animate-marquee-left-fast flex gap-5 sm:gap-6">
          {[...TIER_TWO_IMAGES, ...TIER_TWO_IMAGES, ...TIER_TWO_IMAGES].map((item, idx) => (
            <div
              key={`t2-${idx}`}
              className="w-[220px] sm:w-[260px] md:w-[290px] aspect-[3/4] shrink-0 rounded-[24px] overflow-hidden border border-[#D9AD62]/35 bg-[#111318] shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:border-[#D9AD62] hover:shadow-[0_15px_45px_rgba(217,173,98,0.25)] transition-all duration-300 relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/90 via-[#08090B]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <span className="text-[11px] sm:text-xs font-editorial font-bold text-[#F7F4EF] block leading-snug line-clamp-2">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Texto Único e Estático Abaixo do Carrossel sobre a Importância do Livro */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-16 sm:mt-24 relative z-10">
        <div className="relative rounded-[32px] p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-[#13151D] via-[#101217] to-[#0A0C0F] border border-[#D9AD62]/30 shadow-2xl text-center">
          
          {/* Subtle Ambient Top Glow inside card */}
          <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#D9AD62]/10 rounded-full blur-[70px]" />

          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#D9AD62] mb-5">
            <ShieldCheck className="w-4 h-4 text-[#D9AD62]" />
            <span>A Importância Deste Livro</span>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4EF] leading-tight mb-6">
            UM ESTUDO ESSENCIAL PARA QUEM SE RECUSA A VIVER UMA FÉ{" "}
            <span className="gold-gradient-text">ANESTESIADA</span>
          </h3>

          <div className="space-y-5 text-sm sm:text-base text-[#A5A7AD] font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              Em um tempo onde sentimentos passageiros são facilmente confundidos com a voz de Deus
              e onde a ausência de conflitos imediatos é chamada precipitadamente de paz, este livro
              surge como um espelho bíblico indispensável para a sua caminhada.
            </p>
            <p>
              Ele não entrega fórmulas mágicas ou motivações passageiras. O que você encontrará em
              cada página é uma exposição bíblica profunda e direta, desenhada para desarmar as
              armadilhas da acomodação espiritual, confrontar os combates secretos da mente e
              reensinar o seu coração a discernir entre a falsa segurança do mundo e a paz soberana
              que só Cristo concede.
            </p>
            <p className="font-medium text-[#F7F4EF] pt-2">
              Ler este estudo é um chamado de despertamento: uma oportunidade de reconstruir suas
              convicções na Rocha e experimentar a verdadeira tranquilidade da alma — aquela que
              permanece inabalável mesmo quando o deserto chega.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
