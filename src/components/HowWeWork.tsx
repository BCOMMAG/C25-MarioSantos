"use client";

import { useState, useRef } from "react";
import { WORK_STEPS, OFFICE_INFO } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
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

      // 2. Barra de progresso da trilha desenhada com scrub
      if (progressBarRef.current && trackRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.8,
            },
          }
        );
      }

      // 3. Revelação dos 4 passos em cascata
      if (trackRef.current) {
        const stepItems = trackRef.current.querySelectorAll(".step-card-item");
        if (stepItems.length > 0) {
          gsap.fromTo(
            stepItems,
            { y: 40, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: trackRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 4. CTA inferior
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="como-atuamos"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="methodology" />

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
                03 / Clareza & Metodologia
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Como Funciona Nosso Atendimento
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Uma metodologia ágil, acolhedora e orientada a cálculos precisos, garantindo segurança jurídica do primeiro contato à resolução do seu caso.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): Trilha Conectora Progressiva com Scrub             */}
        {/* ========================================================================= */}
        <div ref={trackRef} className="hidden md:block relative pt-6 pb-2">
          {/* Linha guia de fundo */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-[var(--border-subtle)]/25 -z-10" />

          {/* Linha de progresso conectora Dourada */}
          <div
            ref={progressBarRef}
            className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-[#D99A3A]/20 via-[#D99A3A] to-[#D99A3A]/20 -z-10 will-change-transform"
          />

          {/* 4 Passos Estruturados em Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {WORK_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="step-card-item h-full p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between relative group hover:border-[#D99A3A] hover:shadow-md hover-lift transition-all duration-300 will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center border border-[var(--border-subtle)] group-hover:bg-[#061426] group-hover:text-white dark:group-hover:bg-[#D99A3A] dark:group-hover:text-[#061426] transition-all duration-300 shadow-2xs">
                      <span className="font-heading text-xl font-bold text-[var(--accent)] group-hover:text-white dark:group-hover:text-[#061426] transition-colors">
                        {step.number}
                      </span>
                    </div>
                    {idx < WORK_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-[var(--border-subtle)]/60 group-hover:translate-x-1 group-hover:text-[var(--accent)] transition-all" />
                    )}
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE: Navegação Interativa Passo a Passo (Estilo C24)            */}
        {/* ========================================================================= */}
        <MobileHowWeWork />

        {/* Botão de Contato Central */}
        <div ref={ctaRef} className="mt-10 sm:mt-12 text-center will-change-transform">
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white gap-2.5 py-3 px-6 sm:px-8 text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover-lift transition-all inline-flex items-center cursor-pointer group"
          >
            <WhatsAppIcon className="w-5 h-5 text-white flex-shrink-0 transition-transform group-hover:scale-110" />
            <span>Iniciar atendimento com um advogado no WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-0.5 text-white/90 group-hover:text-white transition-all group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function MobileHowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const stepLabels = [
    { num: "01", label: "Contato" },
    { num: "02", label: "Auditoria" },
    { num: "03", label: "Estratégia" },
    { num: "04", label: "Acompanhamento" },
  ];

  const currentStep = WORK_STEPS[activeStep];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        setActiveStep((prev) => (prev + 1) % WORK_STEPS.length);
      } else {
        setActiveStep((prev) => (prev - 1 + WORK_STEPS.length) % WORK_STEPS.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="md:hidden">
      {/* Seletor de Etapas Interativo (4 passos) */}
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {stepLabels.map((item, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`py-2 px-1 rounded-xl text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-center border ${
                isActive
                  ? "bg-[#D99A3A] text-[#061426] border-[#D99A3A] shadow-xs"
                  : isPassed
                  ? "bg-[var(--bg-secondary)]/60 text-[var(--text-main)] border-[var(--border-subtle)]"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)]/40 hover:border-[#D99A3A]/40"
              }`}
            >
              <span
                className={`font-heading text-xs font-bold block ${
                  isActive ? "text-[#061426]" : isPassed ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                }`}
              >
                {item.num}
              </span>
              <span className="text-[0.625rem] font-heading font-semibold truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Linha de Progresso Conectora */}
      <div className="w-full bg-[var(--border-subtle)]/30 h-1 rounded-full mb-6 overflow-hidden">
        <div
          className="bg-[#D99A3A] h-full transition-all duration-500 rounded-full"
          style={{ width: `${((activeStep + 1) / WORK_STEPS.length) * 100}%` }}
        />
      </div>

      {/* Conteúdo Aberto da Etapa (Estilo Editorial - Sem Card) */}
      <div
        className="relative select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={activeStep}
          className="flex flex-col items-start py-2 px-1 animate-fade-in-down will-change-transform"
        >
          {/* Número e Título */}
          <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
            <span className="font-heading text-2xl font-bold tracking-tight text-[var(--accent)]">
              {currentStep.number}.
            </span>
            <span className="font-heading text-xl font-bold tracking-tight text-[var(--text-main)] leading-snug">
              {currentStep.title}
            </span>
          </div>

          {/* Subtítulo */}
          <h3 className="font-heading text-sm font-semibold text-[var(--accent)] mb-2 leading-snug">
            {currentStep.subtitle}
          </h3>

          {/* Descrição Detalhada */}
          <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-6">
            {currentStep.description}
          </p>

          {/* Barra de Navegação Rápida entre Etapas */}
          <div className="w-full flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]/25 gap-3">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`text-xs font-heading font-semibold py-2 px-3 rounded-lg transition-all ${
                activeStep === 0
                  ? "opacity-30 cursor-not-allowed text-[var(--text-muted)]"
                  : "text-[var(--text-main)] hover:text-[var(--accent)] cursor-pointer"
              }`}
            >
              ← Anterior
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {WORK_STEPS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Etapa ${i + 1}`}
                  onClick={() => setActiveStep(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeStep
                      ? "bg-[#D99A3A] scale-125"
                      : "bg-[var(--border-subtle)] opacity-60"
                  }`}
                />
              ))}
            </div>

            {activeStep < WORK_STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.min(WORK_STEPS.length - 1, prev + 1))}
                className="text-xs font-heading font-bold py-2 px-3 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-main)] hover:bg-[#D99A3A] hover:text-[#061426] transition-all cursor-pointer flex items-center gap-1"
              >
                <span>Próximo</span>
                <span>→</span>
              </button>
            ) : (
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-heading font-bold py-2 px-3 rounded-lg bg-[#D99A3A] text-[#061426] transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
              >
                <span>Concluir</span>
                <span>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}