"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import {
  MessageSquare,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  FileCheck2,
  MapPin,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento no WhatsApp",
      subtitle: "Conversar diretamente com advogado",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Institucional",
      subtitle: "Conheça nossas áreas de atuação e sede",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "trabalhista",
      title: "Consultoria em Direito do Trabalho",
      subtitle: "Rescisão, horas extras, verbas e pejotização",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20advogado%20sobre%20direitos%20trabalhistas.`,
      icon: Briefcase,
      highlight: false,
    },
    {
      id: "previdenciario",
      title: "Benefícios do INSS & Planejamento",
      subtitle: "Aposentadorias, auxílio-doença e BPC/LOAS",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20com%20advogado%20sobre%20benef%C3%ADcios%20do%20INSS.`,
      icon: FileCheck2,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Oficial",
      subtitle: "@advocaciamariosantos • Informativos jurídicos",
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "linkedin",
      title: "LinkedIn Institucional",
      subtitle: "Conexões profissionais e publicações",
      href: OFFICE_INFO.linkedinUrl,
      icon: LinkedinIcon,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito do Trabalho",
    "Direito Previdenciário",
    "Cálculos Rescisórios",
    "Planejamento INSS",
    "Atendimento Presencial e Online",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#061426]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll - Estilo C08-Sloane) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Azul-Marinho Profundo com Logo DOBRADA e Identidade Visual */}
        <div className="relative bg-[#061426] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#D99A3A]/25">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D99A3A" strokeWidth="0.5" />
                  <circle cx="0" cy="0" r="1.5" fill="#D99A3A" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D99A3A]/30 bg-[#17283D]/80 backdrop-blur-md text-xs font-heading tracking-wider text-[#F5F5F3]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D99A3A]" />
              <span>Direito Trabalhista e Previdenciário</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#D99A3A]">
              Centro • Curitiba/PR
            </span>
          </div>

          {/* Logo Dobrada no Lado Esquerdo (Clique volta para a Home) */}
          <div className="relative z-10 my-auto py-2 flex flex-col items-center text-center w-full">
            <Link
              href="/"
              className="w-full max-w-[560px] xl:max-w-[650px] block mx-auto cursor-pointer group focus:outline-none mb-4"
              aria-label="Ir para a página inicial da Advocacia Mario Santos"
            >
              <div className="relative w-full h-60 xl:h-72 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-md"
                  sizes="(min-width: 1280px) 650px, 560px"
                />
              </div>
            </Link>

            <div className="h-0.5 w-16 bg-[#D99A3A]/50 mb-4" />

            <h1 className="font-heading text-xl xl:text-2xl font-semibold max-w-md leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-sm mt-3 leading-relaxed">
              Defesa qualificada de trabalhadores e segurados do INSS. Sede física no Centro de Curitiba e consultoria online em todo o Brasil.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 font-body pt-3 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#D99A3A]">Provimento 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Logo + Canais de Atendimento (Réplica C08-Sloane) */}
        <div className="bg-[#FFFFFF] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center my-auto space-y-3 xl:space-y-3.5 py-4">
            
            {/* Header com Logo no Lado Direito (Clique volta para a Home) */}
            <div className="flex flex-col items-center text-center w-full">
              <Link
                href="/"
                className="w-full max-w-[440px] xl:max-w-[500px] block mx-auto cursor-pointer group focus:outline-none mb-2"
                aria-label="Ir para a página inicial da Advocacia Mario Santos"
              >
                <div className="relative w-full h-36 xl:h-44 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo_sem_fundo_usarnomodoclaro.png"
                    alt={OFFICE_INFO.name}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-xs"
                    sizes="(min-width: 1280px) 500px, 440px"
                  />
                </div>
              </Link>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#D99A3A] block mb-0.5 font-bold">
                Acesso Imediato
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#061426]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-500 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com o escritório.
              </p>
            </div>

            {/* Lista de Links */}
            <div className="space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3 xl:p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#061426] text-[#F5F5F3] border-2 border-[#D99A3A] hover:bg-[#17283D] shadow-sm hover:shadow-md"
                    : "bg-[#FFFFFF] text-[#061426] border-[#061426]/15 hover:border-[#D99A3A] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-[#D99A3A] text-[#061426]" : "bg-[#F5F5F3] text-[#061426]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm font-bold block leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block ${
                            item.highlight ? "text-gray-200" : "text-[#475569]"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-[#D99A3A]" : "text-[#475569] group-hover:text-[#D99A3A]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Caixa de Especialidades (igual ao projeto C08-Sloane) */}
            <div className="p-3.5 rounded-xl border border-[#D99A3A]/40 bg-[#F5F5F3]">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#061426] font-bold mb-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#D99A3A]" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-white text-[#061426] border border-[#061426]/15 font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.address} • © {new Date().getFullYear()} {OFFICE_INFO.name}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Logo Dobrada Centralizada) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-3 sm:py-4 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F3] to-[#EBEBE8]">
        {/* Linhas Geométricas em Dourado e Azul-Marinho de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="goldGeomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D99A3A" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#061426" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#D99A3A" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <line x1="-15%" y1="12%" x2="115%" y2="38%" stroke="url(#goldGeomGrad1)" strokeWidth="0.75" />
            <line x1="-15%" y1="78%" x2="115%" y2="58%" stroke="url(#goldGeomGrad1)" strokeWidth="0.75" />
            <line x1="18%" y1="-10%" x2="82%" y2="110%" stroke="url(#goldGeomGrad1)" strokeWidth="0.5" strokeDasharray="5 5" />
            <circle cx="88%" cy="16%" r="80" fill="none" stroke="#D99A3A" strokeWidth="0.75" strokeOpacity="0.25" />
            <circle cx="12%" cy="84%" r="90" fill="none" stroke="#D99A3A" strokeWidth="0.75" strokeOpacity="0.25" />
          </svg>
        </div>

        {/* Topo Mobile - Logo Dobrada Centralizada (Clique volta para a Home) + Linha Pequena de Áreas de Atuação */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-2 pb-1">
          <Link
            href="/"
            className="w-[92vw] max-w-[360px] block mx-auto cursor-pointer group focus:outline-none mb-1.5"
            aria-label="Ir para a página inicial da Advocacia Mario Santos"
          >
            <div className="relative w-full h-32 sm:h-36 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo_sem_fundo_usarnomodoclaro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain object-center drop-shadow-xs"
                sizes="(max-width: 768px) 360px, 300px"
              />
            </div>
          </Link>

          {/* Áreas de Atuação em uma Linha Pequena Compacta */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 max-w-sm mx-auto px-1">
            {specialties.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[#EBEBE8] text-[#061426] font-body border border-[#D99A3A]/40 font-semibold shadow-2xs"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Links Mobile - Distribuídos harmoniosamente ocupando o espaço */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between py-2 max-w-md mx-auto">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                  item.highlight
                    ? "bg-[#061426] text-white border-2 border-[#D99A3A] shadow-[0_4px_14px_rgba(6,20,38,0.25)]"
                    : "bg-white/95 backdrop-blur-xs hover:bg-white border-[#061426]/12 text-[#061426] shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-[#D99A3A] text-[#061426]" : "bg-[#F5F5F3] border border-[#061426]/10 text-[#061426]"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight truncate">{item.title}</h2>
                    <p
                      className={`text-[0.6875rem] font-body truncate mt-0.5 ${
                        item.highlight ? "text-gray-200" : "text-[#475569]"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-current flex-shrink-0 ml-2" />
              </a>
            );
          })}
        </div>

        {/* Rodapé Mobile Compacto */}
        <div className="relative z-10 text-center text-[0.625rem] sm:text-[0.6875rem] text-[#475569] font-body pt-1 pb-1">
          <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
        </div>
      </div>
    </main>
  );
}