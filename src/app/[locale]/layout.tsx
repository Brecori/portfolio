import { MouseGlow } from "@/components/MouseGlow";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AppThemeProvider } from "@/contexts/theme-provider";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/global";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brenotosi.dev";
const metadataBase = new URL(siteUrl);

const seoByLocale = {
  "pt-BR": {
    description:
      "Portfólio de Breno Tosi, desenvolvedor frontend focado em interfaces modernas, responsivas, performáticas e visualmente consistentes.",
    locale: "pt_BR",
    title: "Breno Tosi | Desenvolvedor Frontend",
  },
  en: {
    description:
      "Portfolio of Breno Tosi, a frontend developer focused on modern, responsive, performant, and visually consistent interfaces.",
    locale: "en_US",
    title: "Breno Tosi | Frontend Developer",
  },
} as const;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "pt-BR";
  const seo = seoByLocale[currentLocale];
  const pathname = currentLocale === "pt-BR" ? "/pt-BR" : "/en";

  return {
    metadataBase,
    title: {
      default: seo.title,
      template: "%s | Breno Tosi",
    },
    description: seo.description,
    authors: [{ name: "Breno Tosi", url: siteUrl }],
    creator: "Breno Tosi",
    alternates: {
      canonical: pathname,
      languages: {
        "pt-BR": "/pt-BR",
        en: "/en",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pathname,
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
      description: seo.description,
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
    <html lang={locale} className={`${inter.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <AppThemeProvider>
              <GlobalStyles />
              <MouseGlow />
              <Navbar />
              <SmoothScroll>
                <div className="app-shell">{children}</div>
              </SmoothScroll>
            </AppThemeProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
