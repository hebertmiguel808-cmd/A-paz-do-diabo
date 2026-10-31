import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative py-24 md:py-32 bg-[#08090B]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#D9AD62] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D9AD62]" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4EF] leading-tight mb-6">
            DÚVIDAS SOBRE <span className="gold-gradient-text">O ESTUDO</span>
          </h2>

          <p className="text-base text-[#A5A7AD] font-light leading-relaxed">
            Confira as principais informações sobre o livro digital, o formato e
            a liberação de acesso.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-[24px] border border-[#191B21] bg-[#111318] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-base sm:text-lg font-bold text-[#F7F4EF] group-hover:text-[#F0C77C] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-[#08090B] border border-[#191B21] text-[#D9AD62] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#191B21]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#A5A7AD] leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
