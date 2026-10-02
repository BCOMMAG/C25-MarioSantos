"use client";

import { useRef } from "react";
import { Award, UserCheck, Scale, ShieldCheck } from "lucide-react";
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
      className="w-full border-b border-[var(--border-subtle)]/30 bg-[var(--bg-secondary)]/50 py-5 sm:py-14 relative shadow-2xs overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="pillars" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="relative flex items-center justify-between pb-2.5 sm:pb-4 border-b border-[var(--border-subtle)]/25 mb-4 sm:mb-8 text-[var(--text-muted)]">
          {/* Linha Dourada desenhada pelo scroll */}
          <div
            ref={lineRef}
            className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#D99A3A] via-white to-[#D99A3A] dark:from-[#D99A3A] dark:via-[#17283D] dark:to-[#D99A3A] will-change-transform"
          />
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent)]" />
            <span className="font-heading uppercase text-[0.6875rem] sm:text-xs tracking-widest font-bold text-[var(--text-main)]">
              Pilares Institucionais de Atuação
            </span>
          </div>
          <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
            Sede no Centro de Curitiba/PR (R. Mariano Torres, 573) & Atendimento Online
          </span>
        </div>

        {/* Grade com os 4 Pilares: No Mobile ficam em UMA ÚNICA LINHA (grid-cols-4), estilo C24 */}
        <div
          ref={gridRef}
          className="grid grid-cols-4 gap-1 sm:gap-8 divide-x divide-[var(--border-subtle)]/30"
        >
          {/* 1. Atendimento Personalizado */}
          <div className="pillar-item flex flex-col items-center text-center sm:items-start sm:text-left px-1 sm:px-6 will-change-transform">
            <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 mb-1 sm:mb-2 text-[var(--accent)]">
              <UserCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--accent)] flex-shrink-0" />
              <span
                className="metric-counter font-heading text-xs sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-main)] truncate"
                data-target="100"
                data-prefix=""
                data-suffix="%"
              >
                100%
              </span>
            </div>
            <h3 className="font-heading text-[0.625rem] sm:text-base font-semibold text-[var(--text-main)] leading-tight mb-0 sm:mb-1.5">
              Atendimento Humanizado
            </h3>
            <p className="hidden sm:block font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Contato direto e acessível via WhatsApp e presencial, garantindo escuta empática e acompanhamento em cada fase da sua demanda.
            </p>
          </div>

          {/* 2. Confiança no Google Reviews */}
          <div className="pillar-item flex flex-col items-center text-center sm:items-start sm:text-left px-1 sm:px-6 will-change-transform">
            <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 mb-1 sm:mb-2 text-[var(--accent)]">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--accent)] flex-shrink-0" />
              <span
                className="metric-counter font-heading text-xs sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-main)] truncate"
                data-target="5.0"
                data-prefix=""
                data-suffix=" ★"
                data-decimal="true"
              >
                5.0 ★
              </span>
            </div>
            <h3 className="font-heading text-[0.625rem] sm:text-base font-semibold text-[var(--text-main)] leading-tight mb-0 sm:mb-1.5">
              Google Verificado
            </h3>
            <p className="hidden sm:block font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Reconhecimento comprovado pelos clientes atendidos pela dedicação, clareza nas orientações e agilidade na resolução dos casos.
            </p>
          </div>

          {/* 3. Formação UP & Rigor Técnico */}
          <div className="pillar-item flex flex-col items-center text-center sm:items-start sm:text-left px-1 sm:px-6 will-change-transform">
            <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 mb-1 sm:mb-2 text-[var(--accent)]">
              <Award className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--accent)] flex-shrink-0" />
              <span className="font-heading text-[0.625rem] sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-main)] truncate">
                UP
              </span>
            </div>
            <h3 className="font-heading text-[0.625rem] sm:text-base font-semibold text-[var(--text-main)] leading-tight mb-0 sm:mb-1.5">
              Formação em Direito
            </h3>
            <p className="hidden sm:block font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Graduação pela Universidade Positivo (UP), com atuação técnica especializada em Direito do Trabalho e Direito Previdenciário.
            </p>
          </div>

          {/* 4. Rigor Ético & CFOAB */}
          <div className="pillar-item flex flex-col items-center text-center sm:items-start sm:text-left px-1 sm:px-6 will-change-transform">
            <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 mb-1 sm:mb-2 text-[var(--accent)]">
              <Scale className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[var(--accent)] flex-shrink-0" />
              <span className="font-heading text-xs sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-main)] truncate">
                CFOAB
              </span>
            </div>
            <h3 className="font-heading text-[0.625rem] sm:text-base font-semibold text-[var(--text-main)] leading-tight mb-0 sm:mb-1.5">
              Conformidade Ética
            </h3>
            <p className="hidden sm:block font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Atuação estritamente pautada no Provimento nº 205/2021 do Conselho Federal da OAB e no Código de Ética e Disciplina da Advocacia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}