"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, MessageSquare } from "lucide-react";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#061426] text-[#F5F5F3] border-t border-[#D99A3A]/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="block focus:outline-none group cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <div className="relative h-20 sm:h-24 w-72 sm:w-80 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="320px"
                />
              </div>
            </Link>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Atuação especializada e personalizada em Direito do Trabalho e Direito Previdenciário. Sede física no Centro de Curitiba/PR e atendimento online em todo o Brasil.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D99A3A]/30 bg-[#17283D] text-xs font-heading text-[#F5F5F3]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D99A3A]" />
              <span>{OFFICE_INFO.name} • Especialista Trabalhista e Previdenciário</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#D99A3A] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300">
              <li>
                <Link href="#inicio" className="hover:text-[#D99A3A] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#D99A3A] transition-colors">O Advogado</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-[#D99A3A] transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-[#D99A3A] transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-[#D99A3A] transition-colors">Como Atuamos</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-[#D99A3A] transition-colors">Avaliações no Google</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-[#D99A3A] transition-colors">Conteúdo Informativo</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#D99A3A] transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#D99A3A] transition-colors">Contato & Localização</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#D99A3A] hover:text-white hover:underline font-semibold">Central de Links (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#D99A3A] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading">Endereço:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Expediente:</strong> {OFFICE_INFO.schedule.weekdays}</p>
              <p><strong className="text-white font-heading">Finais de Semana:</strong> {OFFICE_INFO.schedule.saturday}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Advocacia Mario Santos"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#17283D] hover:border hover:border-[#D99A3A]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Advocacia Mario Santos"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#17283D] hover:border hover:border-[#D99A3A]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Advocacia Mario Santos"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="font-body text-center md:text-left">
            © {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="font-body text-center md:text-right text-[0.6875rem] text-gray-500">
            Conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e Código de Ética e Disciplina.
          </p>
        </div>

      </div>
    </footer>
  );
}