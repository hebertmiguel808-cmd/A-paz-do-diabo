import React from "react";
import { CHECKOUT_URL } from "../data";
import { ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="relative z-40 w-full bg-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Brand wordmark */}
        <a
          href="#"
          className="font-editorial text-lg tracking-[0.2em] uppercase text-[#F7F4EF] hover:text-[#D9AD62] transition-colors whitespace-nowrap shrink-0"
        >
          A Paz do Diabo
        </a>

        {/* Primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#191B21] border border-[#D9AD62]/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F0C77C] hover:bg-[#D9AD62] hover:text-[#08090B] transition-all duration-200 whitespace-nowrap shrink-0 group shadow-sm hover:shadow-[0_0_20px_rgba(217,173,98,0.25)]"
          >
            <span>Garantir Acesso</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
