import React from "react";
import { CHECKOUT_URL } from "../data";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent py-16 text-xs text-[#A5A7AD]/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
          
          {/* Brand & Proposition */}
          <div className="text-center md:text-left">
            <span className="font-editorial text-lg tracking-[0.2em] uppercase text-[#F7F4EF] font-bold block mb-2">
              A Paz do Diabo
            </span>
            <p className="text-xs text-[#A5A7AD] max-w-md">
              Um estudo bíblico que expõe as batalhas da alma e conduz você da
              falsa paz à confiança real em Deus.
            </p>
          </div>

          {/* Action & Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9AD62] hover:text-[#F0C77C] font-semibold transition-colors"
            >
              Comprar Agora
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#111318] border border-[#191B21] hover:border-[#D9AD62]/40 text-[#F7F4EF] transition-all ml-2"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-[#A5A7AD]/60">
          <p>
            © {new Date().getFullYear()} A Paz do Diabo. Todos os direitos reservados.
            Material digital entregue via Kiwify.
          </p>
          <p>
            Este estudo tem caráter reflexivo e fundamentação bíblica cristã.
          </p>
        </div>
      </div>
    </footer>
  );
};
