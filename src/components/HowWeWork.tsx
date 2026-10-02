"use client";

import { useRef } from "react";
import { WORK_STEPS, OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ArrowRight } from "lucide-react";
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
      {/* Linhas Geométricas Sutis de Fundo (Azul-Marinho / Dourado) */}
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
            Uma metodologia transparente, técnica e orientada à defesa integral dos seus direitos, desde a análise preliminar até o êxito final.
          </p>
        </div>

        {/* Container com Trilha Conectora Progressiva */}
        <div ref={trackRef} className="relative pt-6 pb-2">
          {/* Linha guia de fundo */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-[var(--border-subtle)]/25 -z-10" />

          {/* Linha de progresso conectora Dourada / Azul-Marinho */}
          <div
            ref={progressBarRef}
            className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-[#061426] via-[#D99A3A] to-[#17283D] dark:from-[#061426] dark:via-[#D99A3A] dark:to-[#F5F5F3] -z-10 will-change-transform"
          />

          {/* 4 Passos Estruturados */}
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

        {/* CTA com estilo e cor diferenciados */}
        <div ref={ctaRef} className="mt-12 text-center will-change-transform">
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#061426] hover:bg-[#17283D] text-[#F5F5F3] border border-[#D99A3A]/60 dark:bg-[#D99A3A] dark:hover:bg-[#C5882B] dark:text-[#061426] dark:border-[#D99A3A] gap-2 py-3 px-8 text-sm font-bold shadow-[0_4px_20px_rgba(6,20,38,0.25)] hover-lift transition-all inline-flex items-center cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#D99A3A] dark:text-[#061426]" />
            <span>Solicitar Atendimento</span>
          </a>
        </div>
      </div>
    </section>
  );
}