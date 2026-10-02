"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, ChevronDown, ArrowUpRight, ShieldCheck, Scale, Award } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const officeRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (officeRef.current && !officeRef.current.contains(event.target as Node)) {
        setOfficeDropdownOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(event.target as Node)) {
        setAreasDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Travar o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escolhe a logo apropriada de acordo com o fundo/tema
  const currentLogo = !isScrolled
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : theme === "dark"
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : "/logo_sem_fundo_usarnomodoclaro.png";

  const drawerLogo =
    theme === "dark"
      ? "/logo_sem_fundo_usarnomodoescuro.png"
      : "/logo_sem_fundo_usarnomodoclaro.png";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOfficeOpen(false);
    setMobileAreasOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. LOGO MOBILE FIXA SEPARADA - DESCONECTADA DO MENU E ELEVADA (CLIQUE RETORNA AO TOPO DA PÁGINA INICIAL) */}
      <div className="lg:hidden fixed -top-3.5 sm:-top-4 left-2 sm:left-3 z-[45] pointer-events-none">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center group focus:outline-none pointer-events-auto"
          aria-label="Ir para a página inicial da Advocacia Mario Santos"
        >
          <div className="relative h-20 sm:h-22 w-32 sm:w-36 max-w-[36vw] transition-transform duration-300 group-hover:scale-105">
            <Image
              src={currentLogo}
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain object-left drop-shadow-md"
              sizes="(max-width: 640px) 144px, 160px"
            />
          </div>
        </Link>
      </div>

      {/* 2. BARRA DE NAVEGAÇÃO PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)]/30 py-2 sm:py-2.5"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <div className="relative min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Espaçador Mobile para proteger a área da logo sem afetar a altura dos botões */}
            <div className="lg:hidden w-32 sm:w-36 max-w-[36vw] h-6 flex-shrink-0 pointer-events-none" />

            {/* Logo Desktop: Totalmente Desacoplada da altura da barra do menu (+20% no tamanho, clique retorna ao topo) */}
            <div className="hidden lg:flex items-center justify-start relative flex-shrink-0 w-60 xl:w-72 h-10 pointer-events-none">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto">
                <Link
                  href="/"
                  onClick={handleLogoClick}
                  className="flex items-center group focus:outline-none"
                  aria-label="Ir para a página inicial da Advocacia Mario Santos"
                >
                  <div className="relative h-22 xl:h-26 w-60 xl:w-72 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={currentLogo}
                      alt={OFFICE_INFO.name}
                      fill
                      priority
                      className="object-contain object-left drop-shadow-sm"
                      sizes="(min-width: 1280px) 360px, 300px"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav
              className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[0.875rem] font-heading uppercase tracking-wider transition-colors duration-300 ${
                !isScrolled ? "text-white/95" : "text-[var(--text-main)]"
              }`}
            >
              <Link href="#inicio" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Início
              </Link>

              {/* Submenu 1: O Escritório */}
              <div
                ref={officeRef}
                className="relative"
                onMouseEnter={() => setOfficeDropdownOpen(true)}
                onMouseLeave={() => setOfficeDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={officeDropdownOpen}
                >
                  <span className="editorial-link">O Escritório</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      officeDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {officeDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl animate-fade-in-down z-50 text-[var(--text-main)]">
                    <Link
                      href="#sobre"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          O Advogado Titular
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Mario Santos • Universidade Positivo
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#pilares"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Pilares Institucionais
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Sede em Curitiba • Presencial & Online
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#como-atuamos"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Como Atuamos
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          4 etapas seguras do seu atendimento
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Submenu 2: Atuação & Conteúdo */}
              <div
                ref={areasRef}
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={areasDropdownOpen}
                >
                  <span className="editorial-link">Áreas de Atuação</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      areasDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {areasDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl animate-fade-in-down z-50 text-[var(--text-main)]">
                    <Link
                      href="#atuacao"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Especialidades Jurídicas
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Direito do Trabalho & Previdenciário (INSS)
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#educativo"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Conteúdo Educativo
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Artigos e orientações práticas (CFOAB)
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#faq"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Dúvidas Frequentes (FAQ)
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Respostas claras para perguntas do dia a dia
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#avaliacoes" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Avaliações
              </Link>

              <Link href="#contato" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Contato & Sede
              </Link>
            </nav>

            {/* Ações à Direita: Tema + WhatsApp Oficial Verde + Menu Mobile */}
            <div className="relative z-20 flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
              <ThemeToggle />

              {/* Botão de WhatsApp oficial verde #25D366 com texto estritamente "WhatsApp" */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 text-white transition-all duration-300 gap-1.5 sm:gap-2 shadow-sm text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 flex-shrink-0 cursor-pointer font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl border transition-colors flex-shrink-0 cursor-pointer ${
                  !isScrolled
                    ? "border-white/30 bg-black/40 backdrop-blur-md text-white hover:bg-black/60"
                    : "border-[var(--border-subtle)]/40 bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-secondary)]"
                }`}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MENU MOBILE DRAWER (Z-[60] - Sobrepõe 100% da tela e do header) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-md lg:hidden flex justify-end animate-fade-in-up">
          <div className="w-[85vw] max-w-sm h-full bg-[var(--bg-card)] text-[var(--text-main)] flex flex-col justify-between p-6 shadow-2xl border-l border-[var(--border-subtle)]/30 overflow-y-auto">
            <div className="space-y-6">
              
              {/* Topo do Drawer com Logo e Botão Fechar */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/30">
                <Link
                  href="/"
                  onClick={(e) => {
                    handleLogoClick(e);
                    closeMobileMenu();
                  }}
                  className="flex items-center focus:outline-none"
                  aria-label="Ir para o início"
                >
                  <div className="relative h-14 w-44">
                    <Image
                      src={drawerLogo}
                      alt={OFFICE_INFO.name}
                      fill
                      className="object-contain object-left"
                      sizes="180px"
                    />
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="w-9 h-9 rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                  aria-label="Fechar menu lateral"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links do Menu Mobile */}
              <nav className="flex flex-col space-y-2 text-base font-heading font-medium">
                <Link
                  href="#inicio"
                  onClick={closeMobileMenu}
                  className="p-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between"
                >
                  <span>Início</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
                </Link>

                {/* Acordeão Mobile: O Escritório */}
                <div className="border-y border-[var(--border-subtle)]/20 py-1">
                  <button
                    type="button"
                    onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                    className="w-full p-3 rounded-xl hover:bg-[var(--bg-secondary)] flex items-center justify-between cursor-pointer"
                  >
                    <span>O Escritório</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileOfficeOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>

                  {mobileOfficeOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1 text-sm text-[var(--text-muted)] animate-fade-in-down">
                      <Link
                        href="#sobre"
                        onClick={closeMobileMenu}
                        className="block p-2 rounded-lg hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                      >
                        O Advogado Titular
                      </Link>
                      <Link
                        href="#pilares"
                        onClick={closeMobileMenu}
                        className="block p-2 rounded-lg hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                      >
                        Pilares Institucionais
                      </Link>
                      <Link
                        href="#como-atuamos"
                        onClick={closeMobileMenu}
                        className="block p-2 rounded-lg hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                      >
                        Como Atuamos (4 Etapas)
                      </Link>
                    </div>
                  )}
                </div>

                {/* Acordeão Mobile: Áreas de Atuação */}
                <div className="border-b border-[var(--border-subtle)]/20 pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                    className="w-full p-3 rounded-xl hover:bg-[var(--bg-secondary)] flex items-center justify-between cursor-pointer"
                  >
                    <span>Áreas & Conteúdo</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileAreasOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>

                  {mobileAreasOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1 text-sm text-[var(--text-muted)] animate-fade-in-down">
                      <Link
                        href="#atuacao"
                        onClick={closeMobileMenu}
                        className="block p-2 rounded-lg hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                      >
                        Especialidades Jurídicas
                      </Link>
                      <Link
                        href="#educativo"
                        onClick={closeMobileMenu}
                        className="block p-2 rounded-lg hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                      >
                        Conteúdo Educativo
                      </Link>
                      <Link
                        href="#faq"
                        onClick={closeMobileMenu}
                        className="block p-2 rounded-lg hover:bg-[var(--bg-secondary)] hover:text-[var(--text-main)]"
                      >
                        Dúvidas Frequentes (FAQ)
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="#avaliacoes"
                  onClick={closeMobileMenu}
                  className="p-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between"
                >
                  <span>Avaliações no Google</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
                </Link>

                <Link
                  href="#contato"
                  onClick={closeMobileMenu}
                  className="p-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between"
                >
                  <span>Contato & Sede Física</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
                </Link>

                <Link
                  href="/links"
                  onClick={closeMobileMenu}
                  className="p-3 rounded-xl bg-[var(--bg-secondary)]/60 text-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between font-semibold"
                >
                  <span>Central de Links (/links)</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
                </Link>
              </nav>
            </div>

            {/* Rodapé do Menu Drawer */}
            <div className="pt-6 border-t border-[var(--border-subtle)]/30 space-y-3">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3 gap-2 shadow-sm text-sm justify-center cursor-pointer font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              <div className="text-center text-[0.6875rem] text-[var(--text-muted)] font-body">
                <p>{OFFICE_INFO.addressShort}</p>
                <p className="mt-0.5">Atendimento Presencial e Online</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}