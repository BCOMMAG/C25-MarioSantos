"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { LAWYER_PROFILE, OFFICE_INFO } from "@/lib/data";
import { Compass, Eye, ShieldCheck, MessageSquare, ChevronDown, Sparkles, Scale, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const PILLARS = [
  {
    icon: Compass,
    title: "Nossa Missão",
    subtitle: "Defesa Técnica & Concreta",
    text: "Prestar consultoria e defesa jurídica técnica, ética e humanizada, garantindo que trabalhadores e segurados tenham seus direitos trabalhistas e benefícios previdenciários resguardados com a maior precisão de cálculos possível.",
  },
  {
    icon: Eye,
    title: "Nossa Visão",
    subtitle: "Excelência & Solidez",
    text: "Ser referência em resolução ágil de demandas trabalhistas e na concessão de aposentadorias e benefícios do INSS no Paraná e no Brasil, destacando-se pelo atendimento humanizado, proximidade e transparência.",
  },
  {
    icon: ShieldCheck,
    title: "Nossos Valores",
    subtitle: "Compromissos Fundamentais",
    text: "Ética e Transparência Inegociáveis • Escuta Atenta e Empatia • Rigor Técnico nos Cálculos • Atendimento Direto e Pessoal • Foco na Dignidade do Trabalhador e Segurado.",
  },
];

function PillarsCarousel() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % PILLARS.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + PILLARS.length) % PILLARS.length);
  }, []);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) next();
      else prev();
      startAutoplay();
    }
    touchStartX.current = null;
  };

  const pillar = PILLARS[active];
  const Icon = pillar.icon;

  return (
    <div
      className="relative select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        key={active}
        className="about-pillar-item flex flex-col items-start py-5 px-1 animate-fade-in-down will-change-transform"
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-[var(--accent)]" />
          <span className="font-heading text-xl font-bold tracking-tight text-[var(--text-main)]">
            {pillar.title}
          </span>
        </div>
        <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
          {pillar.subtitle}
        </h3>
        <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
          {pillar.text}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        {PILLARS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => { setActive(i); startAutoplay(); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === active
                ? "bg-[#D99A3A] scale-125"
                : "bg-[var(--border-subtle)] opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (photoCardRef.current) {
        gsap.fromTo(
          photoCardRef.current,
          { opacity: 0, scale: 0.92, y: 45 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photoCardRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (textContentRef.current) {
        const textElements = textContentRef.current.querySelectorAll(".about-text-anim");
        if (textElements.length > 0) {
          gsap.fromTo(
            textElements,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: textContentRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      if (cardsRef.current) {
        const items = cardsRef.current.querySelectorAll(".about-pillar-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 88%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  };

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      <GeometricLines variant="about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                01 / Perfil Profissional &amp; Trajetória
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Sobre a Advocacia Mario Santos
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atuação jurídica com foco exclusivo em Direito do Trabalho e Previdenciário. Sede física no Centro de Curitiba/PR e atendimento humanizado para clientes em todo o Brasil.
          </p>
        </div>

        {/* Bloco Principal */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 relative">
          {/* Coluna de Conteúdo */}
          <div ref={textContentRef} className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-start space-y-6">
            <div className="about-text-anim space-y-2">
              <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-heading font-semibold text-[var(--accent)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Advogado Especialista em Direito Trabalhista e Previdenciário • Atendimento Presencial &amp; Online</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] leading-tight">
                Defesa Técnica e Acolhimento na Proteção dos seus Direitos
              </h3>
            </div>

            <div className="about-text-anim p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/30 border-l-4 border-l-[#D99A3A] shadow-2xs">
              <p className="font-heading italic text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
                &ldquo;{OFFICE_INFO.slogan}&rdquo;
              </p>
            </div>

            <div className="hidden md:block about-text-anim space-y-3 font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed font-normal">
              <p>{LAWYER_PROFILE.bio[0]}</p>
            </div>

            <div className="about-text-anim flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleToggleExpand}
                className="btn-pill bg-[var(--bg-card)] text-[var(--text-main)] border-2 border-[var(--border-subtle)] hover:border-[#D99A3A] dark:bg-[#17283D] dark:text-[#F5F5F3] dark:border-[#D99A3A]/40 dark:hover:bg-[#1f344e] gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift transition-all cursor-pointer flex items-center"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Ocultar detalhes" : "Conhecer Trajetória & Experiência"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#061426] hover:bg-[#17283D] text-[#F5F5F3] border-2 border-[#D99A3A] dark:bg-[#D99A3A] dark:hover:bg-[#C5882B] dark:text-[#061426] dark:border-[#D99A3A] gap-2 py-3 px-6 text-xs sm:text-sm font-bold shadow-md hover-lift transition-all flex items-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#D99A3A] dark:text-[#061426]" />
                <span>Falar com um advogado</span>
              </a>
            </div>

            {isExpanded && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]/30 animate-fade-in-down">
                <div className="space-y-3 font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed font-normal">
                  <p className="md:hidden">{LAWYER_PROFILE.bio[0]}</p>
                  <p>{LAWYER_PROFILE.bio[1]}</p>
                  <p>{LAWYER_PROFILE.bio[2]}</p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-xs space-y-3">
                  <h4 className="font-heading text-base font-bold text-[var(--text-main)] flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[var(--accent)]" />
                    <span>Filosofia de Atuação &amp; Compromisso Ético</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)] font-body leading-relaxed">
                    {LAWYER_PROFILE.personalNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="bullet-indicator text-[var(--accent)] mt-1.5" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-base font-bold text-[var(--text-main)] flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                    <span>Destaques Institucionais &amp; Qualificações</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {LAWYER_PROFILE.careerHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-[var(--border-subtle)]/30 bg-[var(--bg-card)] shadow-2xs flex flex-col justify-between"
                      >
                        <p className="font-body text-xs text-[var(--text-main)] leading-relaxed">{hl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Coluna da Foto Oficial - Exclusão de foto incorreta e uso de Foto_perfil.jpg */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div ref={photoCardRef} className="w-full max-w-[360px] sm:max-w-[400px] will-change-transform">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[#D99A3A]/40 shadow-[0_12px_35px_rgba(6,20,38,0.25)] hover-lift group bg-[#061426]">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent z-20 pointer-events-none" />
                <Image
                  src="/Foto_perfil.jpg"
                  alt={LAWYER_PROFILE.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white z-10 pointer-events-none">
                  <span className="text-[0.6875rem] uppercase tracking-widest text-[#D99A3A] font-heading font-bold block mb-1">
                    Advogado Titular
                  </span>
                  <p className="font-heading text-xl sm:text-2xl font-bold leading-tight text-white drop-shadow-sm">
                    {LAWYER_PROFILE.name}
                  </p>
                  <p className="text-xs text-gray-200 font-body mt-1 leading-relaxed">
                    Especialista em Direito Trabalhista e Previdenciário • UP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: Missão, Visão e Valores (Layout C24 com carrossel mobile com swipe/looping e grid desktop) */}
        <div className="pt-8 border-t border-[var(--border-subtle)]/30">
          <div className="relative flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-6 text-[var(--text-muted)]">
            <div className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest font-bold text-[var(--text-main)]">
                Diretrizes &amp; Princípios Norteadores
              </span>
            </div>
            <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
              Compromisso Ético &amp; Foco em Resultados
            </span>
          </div>

          {/* Mobile: carrossel com swipe + autoplay idêntico ao C24 */}
          <div className="md:hidden">
            <PillarsCarousel />
          </div>

          {/* Desktop: grid de 3 colunas */}
          <div
            ref={cardsRef}
            className="hidden md:grid md:grid-cols-3 gap-8 divide-x divide-[var(--border-subtle)]/30"
          >
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="about-pillar-item flex flex-col items-start px-6 first:pl-0 will-change-transform"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                    <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                      {pillar.title}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                    {pillar.subtitle}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}