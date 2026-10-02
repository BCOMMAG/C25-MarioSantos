"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, ArrowUpRight, Scale, Briefcase, Calculator, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function getAreaIcon(iconName: string) {
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className="w-5 h-5" />;
    case "Scale":
      return <Scale className="w-5 h-5" />;
    case "Calculator":
      return <Calculator className="w-5 h-5" />;
    case "Award":
      return <Award className="w-5 h-5" />;
    default:
      return <Scale className="w-5 h-5" />;
  }
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Refs para modelo Desktop (Efeito de Sobreposição / Stacking Pinned com GSAP)
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Animação bidirecional do cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. DESKTOP: Sobreposição com Pinning — Efeito de Stacking
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (desktopContainerRef.current && row1Ref.current && row2Ref.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: desktopContainerRef.current,
              start: "top 20%",
              end: "+=520",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          // A linha 1 encolhe sutilmente e ganha opacidade suave
          tl.to(
            row1Ref.current,
            {
              scale: 0.94,
              opacity: 0.25,
              ease: "none",
            },
            0
          );

          // A linha 2 entra suavemente por cima, cobrindo a linha 1 perfeitamente
          tl.fromTo(
            row2Ref.current,
            {
              y: 440,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "none",
            },
            0
          );
        }
      });
    },
    { scope: sectionRef }
  );

  const topRowAreas = PRACTICE_AREAS.slice(0, 2);
  const bottomRowAreas = PRACTICE_AREAS.slice(2, 4);

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="areas" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                02 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Áreas de Atuação
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atuação técnica especializada em Direito do Trabalho e Previdenciário. Análise minuciosa de verbas rescisórias, vínculo empregatício e concessão de aposentadorias.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): SOBREPOSIÇÃO PINNADA (STACKING GSAP)               */}
        {/* ========================================================================= */}
        <div ref={desktopContainerRef} className="hidden md:block relative min-h-[520px]">
          {/* Linha 1 (Base - Trabalho & Previdenciário) */}
          <div ref={row1Ref} className="grid md:grid-cols-2 gap-6 sm:gap-8 will-change-transform">
            {topRowAreas.map((area, idx) => (
              <div
                key={area.id}
                className="h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-md flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[var(--accent)]">
                      0{idx + 1}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[#D99A3A] group-hover:text-[#061426] transition-colors duration-300 shadow-2xs">
                      {getAreaIcon(area.iconName)}
                    </div>
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                    {area.highlightText}
                  </span>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {area.shortDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]/20">
                    {area.coverageList.slice(0, 5).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar um advogado sobre ${area.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[var(--accent)] hover:text-[var(--text-main)] transition-colors group/link cursor-pointer"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Linha 2 (Sobrepõe a Linha 1 no mesmo espaço vertical - Cálculos e Planejamento) */}
          <div
            ref={row2Ref}
            className="absolute inset-x-0 top-0 z-20 grid md:grid-cols-2 gap-6 sm:gap-8 will-change-transform pointer-events-auto"
          >
            {bottomRowAreas.map((area, idx) => (
              <div
                key={area.id}
                className="h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border-2 border-[#D99A3A]/30 dark:border-[#D99A3A]/40 shadow-[0_10px_30px_rgba(6,20,38,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[var(--accent)]">
                      0{idx + 3}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[#D99A3A] group-hover:text-[#061426] transition-colors duration-300 shadow-2xs">
                      {getAreaIcon(area.iconName)}
                    </div>
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                    {area.highlightText}
                  </span>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {area.shortDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]/20">
                    {area.coverageList.slice(0, 5).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar um advogado sobre ${area.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[var(--accent)] hover:text-[var(--text-main)] transition-colors group/link cursor-pointer"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE: FILTRO INTERATIVO + DESIGN EDITORIAL (ESTILO C24)          */}
        {/* ========================================================================= */}
        <MobilePracticeAreas />
      </div>
    </section>
  );
}

function MobilePracticeAreas() {
  const [activeTab, setActiveTab] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const filterTabs = [
    { num: "01", label: "Trabalhista" },
    { num: "02", label: "Previdenciário" },
    { num: "03", label: "Cálculos" },
    { num: "04", label: "Planejamento" },
  ];

  const currentArea = PRACTICE_AREAS[activeTab];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        setActiveTab((prev) => (prev + 1) % PRACTICE_AREAS.length);
      } else {
        setActiveTab((prev) => (prev - 1 + PRACTICE_AREAS.length) % PRACTICE_AREAS.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="md:hidden">
      {/* Barra de Filtros Interativos (Grid 2x2 no mobile) */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {filterTabs.map((tab, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-center border ${
                isActive
                  ? "bg-[#D99A3A] text-[#061426] border-[#D99A3A] shadow-xs"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)]/40 hover:border-[#D99A3A]/40"
              }`}
            >
              <span
                className={`text-[0.625rem] font-heading uppercase tracking-wider font-bold block mb-0.5 ${
                  isActive ? "text-[#061426]/75" : "text-[var(--accent)]"
                }`}
              >
                {tab.num}. Especialidade
              </span>
              <span className="font-heading text-xs font-bold truncate">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Conteúdo Editorial Aberto (Estilo Diretrizes & Princípios Norteadores) */}
      <div
        className="relative select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={activeTab}
          className="flex flex-col items-start py-2 px-1 animate-fade-in-down will-change-transform"
        >
          {/* Topo com Ícone e Título */}
          <div className="flex items-center gap-2.5 mb-2 text-[var(--accent)]">
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] shadow-2xs">
              {getAreaIcon(currentArea.iconName)}
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-[var(--text-main)]">
              {currentArea.title}
            </span>
          </div>

          {/* Subtítulo */}
          <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5 leading-snug">
            {currentArea.subtitle}
          </h3>

          {/* Descrição */}
          <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-4">
            {currentArea.description}
          </p>

          {/* Pontos de Atuação */}
          <div className="w-full space-y-2 py-3 border-y border-[var(--border-subtle)]/25 mb-4">
            <span className="font-heading text-[0.6875rem] uppercase tracking-wider text-[var(--accent)] font-bold block mb-1">
              Como podemos te ajudar:
            </span>
            {currentArea.coverageList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Botão de Contato Direto no WhatsApp */}
          <div className="w-full pt-1">
            <a
              href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Olá! Gostaria de consultar um advogado sobre ${currentArea.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill w-full bg-[#D99A3A] hover:bg-[#C5882B] text-[#061426] font-bold text-xs py-3 gap-2 shadow-xs flex items-center justify-center cursor-pointer transition-transform hover-lift"
            >
              <span>Consultar sobre este tema</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Indicadores de Paginação / Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {PRACTICE_AREAS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActiveTab(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeTab
                  ? "bg-[#D99A3A] scale-125"
                  : "bg-[var(--border-subtle)] opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}