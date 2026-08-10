import { MouseGlow } from "@/components/MouseGlow";
import { PageReadyGate } from "@/components/PageReadyGate";
import { Navbar } from "@/templates/shared/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/global";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { siteUrl } from "@/constants/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const metadataBase = new URL(siteUrl);

const seoByLocale = {
  "pt-BR": {
    description:
      "Conheça o portfólio de Breno Tosi, desenvolvedor frontend especializado em React, Next.js e interfaces responsivas, performáticas e acessíveis.",
    keywords: [
      "Breno Tosi",
      "desenvolvedor frontend",
      "desenvolvedor React",
      "desenvolvedor Next.js",
      "portfólio frontend",
      "React",
      "Next.js",
      "TypeScript",
      "interfaces responsivas",
      "acessibilidade web",
    ],
    shareDescription:
      "Portfólio de Breno Tosi, desenvolvedor frontend focado em React, Next.js e interfaces responsivas e acessíveis.",
    locale: "pt_BR",
    title: "Breno Tosi | Desenvolvedor Frontend",
  },
  en: {
    description:
      "Explore Breno Tosi's portfolio, a frontend developer specializing in React, Next.js, and responsive, high-performance, accessible interfaces.",
    keywords: [
      "Breno Tosi",
      "frontend developer",
      "React developer",
      "Next.js developer",
      "frontend portfolio",
      "React",
      "Next.js",
      "TypeScript",
      "responsive interfaces",
      "web accessibility",
    ],
    shareDescription:
      "Breno Tosi's frontend portfolio, featuring React, Next.js and responsive, accessible interfaces.",
    locale: "en_US",
    title: "Breno Tosi | Frontend Developer",
  },
} as const;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "pt-BR";
  const seo = seoByLocale[currentLocale];
  const pathname = currentLocale === "pt-BR" ? "/pt-BR" : "/en";
  const canonicalUrl = new URL(pathname, siteUrl).toString();
  const ptBrUrl = new URL("/pt-BR", siteUrl).toString();
  const enUrl = new URL("/en", siteUrl).toString();

  return {
    metadataBase,
    title: {
      default: seo.title,
      template: "%s | Breno Tosi",
    },

    description: seo.description,
    keywords: [...seo.keywords],
    authors: [{ name: "Breno Tosi", url: siteUrl }],
    creator: "Breno Tosi",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "pt-BR": ptBrUrl,
        en: enUrl,
        "x-default": siteUrl,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.shareDescription,
      url: canonicalUrl,
      siteName: "Breno Tosi Portfolio",
      images: [
        {
          url: "/imgs/og/share.png",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: seo.locale,
      alternateLocale: currentLocale === "pt-BR" ? ["en_US"] : ["pt_BR"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.shareDescription,
      images: ["/imgs/og/share.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.variable} ${bebasNeue.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <GlobalStyles />
            <PageReadyGate>
              <MouseGlow />
              <Navbar />
              <SmoothScroll>
                <div className="app-shell">{children}</div>
              </SmoothScroll>
            </PageReadyGate>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
