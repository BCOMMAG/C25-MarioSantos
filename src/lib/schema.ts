import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mariosantos.pages.dev";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description:
      "Advocacia especializada em Direito do Trabalho e Direito Previdenciário com sede física no Centro de Curitiba/PR (R. Mariano Torres, 573) e atendimento online para todo o Brasil. Atuação ética em conformidade com o Provimento 205/2021 do CFOAB.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.whatsapp}`,
    priceRange: "$$",
    image: `${siteUrl}/og-image_optimized_300.jpg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Mariano Torres, 573",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80060-120",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4328,
      longitude: -49.2625,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.instagramUrl,
      OFFICE_INFO.linkedinUrl,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.graduation}`,
      },
    ],
  };
}