"use client";

import { useState, useRef } from "react";
import { EDUCATIONAL_TOPICS, OFFICE_INFO } from "@/lib/data";
import { BookOpen, Clock, ChevronRight, ShieldAlert, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EducationalSection() {
  const [selectedId, setSelectedId] = useState(EDUCATIONAL_TOPICS[0].id);
  const activeTopic = EDUCATIONAL_TOPICS.find((t) => t.id === selectedId) || EDUCATIONAL_TOPICS[0];

  // Estado para acordeão mobile condensado
  const [expandedMobileTopicId, setExpandedMobileTopicId] = useState<string | null>(null);

  const toggleMobileTopic = (id: string) => {
    setExpandedMobileTopicId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho com animação bidirecional
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

      // 2. Coluna esquerda
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Coluna direita
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const getWhatsAppMessageUrl = (topicTitle: string) => {
    const text = `Olá! Li o conteúdo educativo sobre "${topicTitle}" no site e gostaria de tirar dúvidas com um advogado sobre o meu caso.`;
    return `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="educativo"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/35 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo (Azul-Marinho / Dourado) */}
      <GeometricLines variant="educational" />

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
                05 / Conteúdo Jurídico Educativo
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Conheça Seus Direitos
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Orientações e esclarecimentos práticos elaborados com finalidade didática e pedagógica, em estrita conformidade com o Provimento 205/2021 do CFOAB.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): PAINEL LATERAL + LEITOR DE ARTIGO                   */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
          {/* Coluna da Esquerda: Lista de Artigos */}
          <div ref={leftColRef} className="md:col-span-5 space-y-3 will-change-transform">
            <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block px-2 mb-2">
              Artigos e Guias Didáticos
            </span>
            {EDUCATIONAL_TOPICS.map((topic) => {
              const isSelected = topic.id === selectedId;

              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[var(--bg-card)] border-[#D99A3A] shadow-md -translate-x-1"
                      : "bg-[var(--bg-card)]/70 border-[var(--border-subtle)]/30 hover:border-[#D99A3A]/50 hover:bg-[var(--bg-card)] shadow-2xs"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="space-y-1.5 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-xs font-bold text-[var(--accent)]">
                        {topic.number}
                      </span>
                      <span className="text-[0.6875rem] font-heading uppercase tracking-wider px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-muted)]">
                        {topic.category}
                      </span>
                    </div>
                    <h3
                      className={`font-heading text-sm sm:text-base font-bold transition-colors line-clamp-2 ${
                        isSelected ? "text-[var(--text-main)]" : "text-[var(--text-muted)] group-hover:text-[var(--text-main)]"
                      }`}
                    >
                      {topic.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 mt-1 ${
                      isSelected
                        ? "text-[var(--accent)] translate-x-1"
                        : "text-[var(--text-muted)]/50 group-hover:text-[var(--accent)]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Coluna da Direita: Leitor do Artigo Selecionado */}
          <div ref={rightColRef} className="md:col-span-7 will-change-transform">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-6">
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-body">
                  <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{activeTopic.readTime}</span>
                </div>
                <span className="text-xs font-heading font-semibold text-[var(--accent)] bg-[var(--bg-secondary)] px-2.5 py-1 rounded-full">
                  {activeTopic.category}
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-main)] mb-4 leading-snug">
                {activeTopic.title}
              </h3>

              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/50 border-l-4 border-l-[#D99A3A] mb-6">
                <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-medium leading-relaxed">
                  {activeTopic.summary}
                </p>
              </div>

              <div className="space-y-4 font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pb-6 border-b border-[var(--border-subtle)]/25">
                {activeTopic.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Rodapé Ético + Botão CTA */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-2 max-w-sm">
                  <ShieldAlert className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                  <p className="text-[0.6875rem] text-[var(--text-muted)] font-body leading-tight">
                    {activeTopic.oabDisclaimer}
                  </p>
                </div>

                <a
                  href={getWhatsAppMessageUrl(activeTopic.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#D99A3A] hover:bg-[#C5882B] text-[#061426] gap-2 py-2.5 px-5 text-xs font-heading font-bold shadow-sm hover-lift transition-all cursor-pointer flex items-center justify-center flex-shrink-0"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#061426]" />
                  <span>Esclarecer Dúvidas</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE (< MD): ACORDEÃO DIDÁTICO CONDENSADO                        */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-3.5">
          {EDUCATIONAL_TOPICS.map((topic) => {
            const isExpanded = expandedMobileTopicId === topic.id;

            return (
              <div
                key={topic.id}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileTopic(topic.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-xs font-bold text-[var(--accent)]">
                        {topic.number}
                      </span>
                      <span className="text-[0.625rem] font-heading uppercase tracking-wider px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-muted)]">
                        {topic.category}
                      </span>
                      <span className="text-[0.625rem] font-body text-[var(--text-muted)] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[var(--accent)]" />
                        {topic.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                      {topic.title}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isExpanded
                        ? "bg-[#061426] text-white rotate-180 dark:bg-[#D99A3A] dark:text-[#061426]"
                        : "bg-[var(--bg-secondary)] text-[var(--accent)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-0 border-t border-[var(--border-subtle)]/20 animate-fade-in-down space-y-3">
                    <div className="p-3 rounded-xl bg-[var(--bg-secondary)]/50 border-l-3 border-l-[#D99A3A] mt-3">
                      <p className="font-body text-xs text-[var(--text-main)] font-medium leading-relaxed">
                        {topic.summary}
                      </p>
                    </div>

                    <div className="space-y-2.5 font-body text-xs text-[var(--text-muted)] leading-relaxed pt-1">
                      {topic.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[var(--border-subtle)]/20 space-y-3">
                      <p className="text-[0.625rem] text-[var(--text-muted)] font-body italic leading-tight">
                        {topic.oabDisclaimer}
                      </p>

                      <a
                        href={getWhatsAppMessageUrl(topic.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-pill bg-[#D99A3A] text-[#061426] py-2.5 px-4 text-xs font-heading font-bold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-[#061426]" />
                        <span>Tirar dúvidas sobre este artigo</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}