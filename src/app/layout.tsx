import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mariosantos.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Advocacia Mario Santos | Direito Trabalhista e Previdenciário - Curitiba PR",
    template: "%s | Advocacia Mario Santos",
  },
  description:
    "Defesa ágil, estratégica e humanizada dos seus direitos trabalhistas e previdenciários. Sede física no Centro de Curitiba/PR (R. Mariano Torres, 573) e consultoria jurídica online em todo o Brasil.",
  keywords: [
    "advogado trabalhista curitiba",
    "advocacia mario santos",
    "mario santos advogado",
    "advogado direito do trabalho curitiba centro",
    "advogado previdenciario curitiba",
    "auxilio doenca inss curitiba",
    "calculos rescisorios horas extras",
    "planejamento previdenciario curitiba",
    "reversao justa causa pejotizacao",
  ],
  authors: [{ name: "Mario Santos" }],
  creator: "Mario Santos",
  publisher: "Advocacia Mario Santos",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Advocacia Mario Santos | Direito Trabalhista e Previdenciário - Curitiba PR",
    description:
      "Defesa ágil, estratégica e humanizada dos seus direitos trabalhistas e previdenciários. Atendimento presencial em Curitiba/PR e online em todo o Brasil.",
    siteName: "Advocacia Mario Santos",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Advocacia Mario Santos - Direito Trabalhista e Previdenciário",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocacia Mario Santos | Direito Trabalhista e Previdenciário",
    description:
      "Defesa ágil, estratégica e humanizada dos seus direitos trabalhistas e previdenciários. Sede no Centro de Curitiba/PR e atendimento online.",
    images: ["/og-image_optimized_300.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/Favicon-apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[#D99A3A]/20 selection:text-[#061426] dark:selection:text-[#F5F5F3]">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}