"use client";

import { useRef } from "react";
import { Award, UserCheck, Calculator, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function InstitutionalPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Linha conectora dourada superior que se desenha ao entrar na tela
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Revelação em cascata dos 4 pilares institucionais
      const pillarItems = gridRef.current?.querySelectorAll(".pillar-item");
      if (pillarItems && pillarItems.length > 0) {
        gsap.fromTo(
          pillarItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Contador numérico dinâmico ativado pelo scroll
        const counters = gridRef.current ? gridRef.current.querySelectorAll(".metric-counter") : [];
        counters.forEach((el) => {
          const targetValue = parseFloat(el.getAttribute("data-target") || "0");
          const prefix = el.getAttribute("data-prefix") || "";
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = el.getAttribute("data-decimal") === "true";

          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: targetValue,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              const formatted = isDecimal ? counterObj.val.toFixed(1) : Math.round(counterObj.val).toString();
              el.textContent = `${prefix}${formatted}${suffix}`;
            },
          });
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="pilares"
      ref={sectionRef}
      className="w-full border-b border-[var(--border-subtle)]/30 bg-[var(--bg-secondary)]/50 py-10 sm:py-14 relative shadow-2xs overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo (Azul-Marinho / Dourado) */}
      <GeometricLines variant="pillars" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--text-muted)]">
          {/* Linha Dourada / Azul-Marinho desenhada pelo scroll */}
          <div
            ref={lineRef}
            className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#061426] via-[#D99A3A] to-[#17283D] dark:from-[#061426] dark:via-[#D99A3A] dark:to-[#F5F5F3] will-change-transform"
          />
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-heading uppercase text-xs tracking-widest font-bold text-[var(--text-main)]">
              Pilares Institucionais de Atuação
            </span>
          </div>
          <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
            Centro de Curitiba/PR • Atendimento Presencial & Online em Todo o Brasil
          </span>
        </div>

        {/* Grade com os 4 Pilares (Sem métricas proibidas ou anos arbitrários) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/30"
        >
          {/* 1. Formação & Solidez Técnica */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 first:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
              <Award className="w-5 h-5 text-[var(--accent)]" />
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                UP
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Formação em Direito
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Graduado pela Universidade Positivo (UP), com atuação técnica especializada e contínua em causas trabalhistas e previdenciárias.
            </p>
          </div>

          {/* 2. Atendimento Humanizado & Online */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
              <UserCheck className="w-5 h-5 text-[var(--accent)]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="100"
                data-prefix=""
                data-suffix="%"
              >
                100%
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Presencial & Online
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Sede física no Centro de Curitiba/PR e atendimento online completo via WhatsApp para trabalhadores e segurados em qualquer localidade.
            </p>
          </div>

          {/* 3. Cálculos de Alta Precisão */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
              <Calculator className="w-5 h-5 text-[var(--accent)]" />
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                Exatidão
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Cálculos & Auditoria
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Auditoria criteriosa de holerites, cartões-ponto, verbas rescisórias e simulações do CNIS para resguardar cada direito econômico.
            </p>
          </div>

          {/* 4. Confiança no Google Reviews */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
              <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="5.0"
                data-prefix=""
                data-suffix=" ★"
                data-decimal="true"
              >
                5.0 ★
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Google Verificado
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Classificação máxima de 5.0 estrelas pelos clientes atendidos, atestando dedicação profissional, clareza e transparência ética.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}