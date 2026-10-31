/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroSection } from "./components/HeroSection";
import { FalsePeaceSection } from "./components/FalsePeaceSection";
import { ContrastSection } from "./components/ContrastSection";
import { ImpactQuoteSection } from "./components/ImpactQuoteSection";
import { BonusSection } from "./components/BonusSection";
import { OfferSection } from "./components/OfferSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F7F4EF] selection:bg-[#D9AD62]/25 selection:text-[#F0C77C] flex flex-col font-sans">
      <ScrollProgress />
      <main className="flex-grow">
        {/* Seção 1 — Hero Cinematográfica */}
        <HeroSection />

        {/* Seção 2 — A Falsa Paz */}
        <FalsePeaceSection />

        {/* Seção 3 — O Contraste Visual */}
        <ContrastSection />

        {/* Frase de Impacto Editorial */}
        <ImpactQuoteSection />

        {/* Bônus Exclusivos — 5 Produtos Intercalados */}
        <BonusSection />

        {/* Seção 8 — Oferta e Conversão */}
        <OfferSection />

        {/* Seção 9 — FAQ */}
        <FaqSection />

        {/* Seção 10 — CTA Final */}
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
