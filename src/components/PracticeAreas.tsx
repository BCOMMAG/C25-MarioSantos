"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, ArrowUpRight, Scale, Briefcase, Calculator, Award, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Refs para modelo Desktop (Efeito de Sobreposição / Stacking Pinned com GSAP)
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Estado para acordeão no modelo Mobile
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

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

      // 2. DESKTOP: Sobreposição com Pinning — Efeito de Stacking idêntico ao C12
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

  const getAreaIcon = (iconName: string) => {
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
  };

  const topRowAreas = PRACTICE_AREAS.slice(0, 2);
  const bottomRowAreas = PRACTICE_AREAS.slice(2, 4);

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo (Azul-Marinho / Dourado) */}
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
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atuação técnica especializada em Direito do Trabalho e Previdenciário. Análise minuciosa de verbas rescisórias, vínculo empregatício e concessão de aposentadorias.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): SOBREPOSIÇÃO PINNADA (STACKING GSAP)               */}
        {/* ========================================================================= */}
        <div ref={desktopContainerRef} className="hidden md:block relative min-h-[520px]">
          {/* Linha 1 (Base - Direito Trabalhista e Previdenciário) */}
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
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#061426] transition-colors duration-300 shadow-2xs">
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
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20advogado%20sobre%20${encodeURIComponent(area.title)}.`}
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
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#061426] transition-colors duration-300 shadow-2xs">
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
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20advogado%20sobre%20${encodeURIComponent(area.title)}.`}
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
        {/* MODELO MOBILE (< MD): CARDS COMPACTOS COM ACORDEÃO EXPANSÍVEL            */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-4">
          {PRACTICE_AREAS.map((area, idx) => {
            const isExpanded = expandedMobileId === area.id;

            return (
              <div
                key={area.id}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs overflow-hidden transition-all duration-300"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-sm font-bold text-[var(--accent)]">
                      0{idx + 1}.
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] shadow-2xs">
                      {getAreaIcon(area.iconName)}
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-1 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                    {area.shortDesc}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)]/20">
                    <button
                      type="button"
                      onClick={() => toggleMobileExpand(area.id)}
                      className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-[var(--accent)] hover:underline cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Ocultar detalhes" : "Ver tópicos atendidos"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <a
                      href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20advogado%20sobre%20${encodeURIComponent(area.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#D99A3A] text-[#061426] text-xs font-heading font-bold shadow-xs cursor-pointer"
                    >
                      <span>Consultar</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[var(--border-subtle)]/20 animate-fade-in-down space-y-2 bg-[var(--bg-secondary)]/30">
                    <span className="font-heading text-[0.6875rem] uppercase tracking-wider text-[var(--text-muted)] font-semibold block pt-2">
                      Demandas Frequentes:
                    </span>
                    {area.coverageList.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Geral Inferior com Contraste Marcante */}
        <div className="mt-12 text-center">
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#061426] hover:bg-[#17283D] text-[#F5F5F3] border-2 border-[#D99A3A] dark:bg-[#D99A3A] dark:hover:bg-[#C5882B] dark:text-[#061426] dark:border-[#D99A3A] gap-2 py-3 px-8 text-sm font-bold shadow-md hover-lift transition-all inline-flex items-center cursor-pointer"
          >
            <span>Buscar Orientação Jurídica</span>
            <ArrowUpRight className="w-4 h-4 text-[#D99A3A] dark:text-[#061426]" />
          </a>
        </div>
      </div>
    </section>
  );
}