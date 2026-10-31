import React, { useState } from "react";
import { READING_THEMES } from "../data";
import { BookOpen, ScrollText, ChevronRight } from "lucide-react";

export const ReadingExperienceSection: React.FC = () => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const currentTheme = READING_THEMES[selectedThemeIndex];

  return (
    <section id="temas" className="relative py-24 md:py-32 bg-[#08090B]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#D9AD62] mb-4">
            <ScrollText className="w-3.5 h-3.5 text-[#D9AD62]" />
            <span>Estrutura Conceitual</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EF] leading-tight mb-6">
            UMA LEITURA PARA EXAMINAR O CORAÇÃO{" "}
            <span className="gold-gradient-text block sm:inline">
              À LUZ DA PALAVRA
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A7AD] font-light leading-relaxed">
            Uma prévia dos eixos temáticos que conduzirão sua jornada de
            discernimento, autoexame bíblico e edificação da alma.
          </p>
        </div>

        {/* Interactive Editorial Reading Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Theme Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#A5A7AD]/60 font-semibold mb-3 px-2">
              Selecione o eixo de reflexão:
            </p>

            {READING_THEMES.map((theme, idx) => (
              <button
                key={theme.number}
                onClick={() => setSelectedThemeIndex(idx)}
                className={`w-full text-left p-5 rounded-[20px] transition-all duration-200 border flex items-center justify-between group ${
                  selectedThemeIndex === idx
                    ? "bg-[#191B21] border-[#D9AD62] shadow-[0_4px_20px_rgba(217,173,98,0.12)]"
                    : "bg-[#111318]/70 border-[#191B21] hover:border-[#D9AD62]/40 hover:bg-[#191B21]/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                      selectedThemeIndex === idx
                        ? "bg-[#D9AD62] text-[#08090B]"
                        : "bg-[#08090B] text-[#A5A7AD] group-hover:text-[#F7F4EF]"
                    }`}
                  >
                    {theme.number}
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#D9AD62] font-semibold block">
                      {theme.label}
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-[#F7F4EF] group-hover:text-[#F0C77C] transition-colors">
                      {theme.title}
                    </h4>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    selectedThemeIndex === idx
                      ? "text-[#D9AD62] translate-x-1"
                      : "text-[#A5A7AD]/40 group-hover:text-[#A5A7AD]"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Editorial Book Sheet Preview */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] p-8 sm:p-12 bg-gradient-to-b from-[#111318] to-[#0d0e12] border border-[#D9AD62]/25 shadow-2xl overflow-hidden">
              {/* Corner sacred accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D9AD62]/10 rounded-full blur-[70px] pointer-events-none" />

              {/* Sheet header */}
              <div className="flex items-center justify-between pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#D9AD62]" />
                  <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#D9AD62]">
                    Prévia Conceitual · {currentTheme.label}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#A5A7AD]/60">
                  Eixo 0{selectedThemeIndex + 1} de 04
                </span>
              </div>

              {/* Sheet Body */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F7F4EF] mb-4">
                    {currentTheme.title}
                  </h3>
                  <p className="text-base text-[#A5A7AD] leading-relaxed font-light">
                    {currentTheme.summary}
                  </p>
                </div>

                {/* Editorial Quote Box */}
                <div className="p-6 rounded-2xl bg-[#08090B]/80 border border-[#D9AD62]/20 shadow-inner relative my-6">
                  <span className="font-editorial text-4xl text-[#D9AD62]/30 absolute top-2 left-4 select-none">
                    “
                  </span>
                  <p className="font-editorial italic text-base sm:text-lg text-[#F0C77C] relative z-10 pl-6 leading-relaxed">
                    {currentTheme.quote}
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A5A7AD]/70">
                  <span>Conteúdo integral disponível no e-book oficial</span>
                  <span className="text-[#D9AD62] font-semibold">
                    Acesso imediato no checkout
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
