"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Award, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Efeito de Parallax suave nas imagens de fundo do Hero
      if (imageDesktopRef.current) {
        gsap.to(imageDesktopRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imageMobileRef.current) {
        gsap.to(imageMobileRef.current, {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Animação de entrada dos textos e botões
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 overflow-hidden"
    >
      {/* Imagem de Fundo Desktop (Landscape / >= lg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden lg:block absolute inset-0 -top-10 -bottom-10 will-change-transform">
          <Image
            src="/header_desktop.jpg"
            alt="Advocacia Mario Santos - Direito Trabalhista e Previdenciário em Curitiba"
            fill
            priority
            quality={92}
            className="object-cover object-[center_28%] brightness-[0.85] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile & Tablet Portrait (< lg) */}
        <div ref={imageMobileRef} className="block lg:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpg"
            alt="Advocacia Mario Santos - Escritório Trabalhista e Previdenciário"
            fill
            priority
            quality={92}
            className="object-cover object-[center_25%] sm:object-[center_30%] brightness-[0.84] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays mesclando Azul-Marinho Profundo #061426, Azul Secundário #17283D e Dourado #D99A3A */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/95 via-[#061426]/85 to-[#17283D]/45 lg:from-[#061426]/92 lg:via-[#061426]/65 lg:via-55% lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-transparent to-[#0B1018]/60 lg:from-[#061426]/65 lg:via-transparent lg:to-transparent" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-1 sm:pt-2 max-w-3xl animate-fade-in-down">
          {/* Badge de Autoridade Dourado Institucional */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D99A3A]/40 bg-[#061426]/80 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#F5F5F3] mb-3 sm:mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D99A3A]" />
            <span>Advocacia Mario Santos • Direito Trabalhista e Previdenciário</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.16] sm:leading-[1.14] tracking-tight text-[#F5F5F3] font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Defesa ágil,{" "}
            <span className="text-[#D99A3A] relative font-extrabold">
              estratégica e humanizada
            </span>{" "}
            dos seus direitos trabalhistas e previdenciários.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo Conciso + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-1 sm:pb-2 max-w-3xl mt-auto animate-fade-in-up">
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-4 sm:mb-5 font-normal drop-shadow-sm">
            Rigor técnico, precisão em cálculos rescisórios e benefícios do INSS com atendimento acolhedor na sede física em Curitiba/PR e assessoria online para todo o Brasil.
          </p>

          {/* CTAs com contraste perfeito e linguagem profissional despersonalizada */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#D99A3A] hover:bg-[#C5882B] hover:scale-[1.02] text-[#061426] border-2 border-[#D99A3A] gap-2.5 py-2.5 sm:py-3.5 px-5 sm:px-7 text-xs sm:text-sm font-bold tracking-normal shadow-[0_6px_24px_rgba(217,154,58,0.35)] group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#061426] group-hover:scale-110 transition-transform" />
              <span>Falar com um advogado</span>
            </a>

            <Link
              href="#atuacao"
              className="btn-pill bg-[#061426]/80 backdrop-blur-md text-[#F5F5F3] border border-[#D99A3A]/40 hover:bg-[#17283D] hover:text-white hover:border-[#D99A3A] hover:scale-[1.02] shadow-md gap-2 py-2.5 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <span className="font-semibold">Conhecer Áreas de Atuação</span>
              <ChevronRight className="w-4 h-4 text-[#D99A3A] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-2.5 xl:py-3 border-t border-white/20 mt-4 xl:mt-6 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#D99A3A]" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/90 font-bold">
                Centro • Curitiba / PR • Presencial e Online
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D99A3A]" />
                Universidade Positivo (UP)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D99A3A]" />
                Conformidade Prov. 205/2021 CFOAB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}