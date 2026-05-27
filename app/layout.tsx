import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://esso-hazke.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Esso Tankstelle Bad Wildungen – Tanken, Shop & frische Brötchen",
    template: "%s | Esso Bad Wildungen",
  },
  description:
    "Ihre Esso Tankstelle in Bad Wildungen. Shop Mo–So 06:00–24:00 Uhr, Zapfsäulen 24/7. Firmentanken mit monatlicher Abrechnung, frische Sonntagsbrötchen vom lokalen Bäcker.",
  keywords: [
    "Esso Tankstelle Bad Wildungen",
    "Tanken Bad Wildungen",
    "Firmentanken Bad Wildungen",
    "Tankstelle auf Rechnung",
    "Brötchen Sonntag Bad Wildungen",
    "Diesel Super E10 E5",
    "Tankstelle Shop",
    "Esso Hazke",
  ],
  authors: [{ name: "Esso Tankstelle Bad Wildungen" }],
  creator: "Esso Tankstelle Bad Wildungen",
  publisher: "Esso Tankstelle Bad Wildungen",
  category: "Tankstelle",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Esso Tankstelle Bad Wildungen",
    title: "Esso Tankstelle Bad Wildungen – Tanken, Shop & frische Brötchen",
    description:
      "Tanken, Shop, Firmentanken und frische Sonntagsbrötchen – Ihre Esso Tankstelle im Herzen von Bad Wildungen. Shop Mo–So 06:00–24:00, Zapfsäulen 24/7.",
    images: [
      {
        url: "/Esso_hero.webp",
        width: 1200,
        height: 675,
        alt: "Esso Tankstelle in Bad Wildungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esso Tankstelle Bad Wildungen",
    description:
      "Tanken, Shop, Firmentanken und frische Sonntagsbrötchen in Bad Wildungen.",
    images: ["/Esso_hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d31f2b",
};

// JSON-LD: LocalBusiness (GasStation) — gives search engines + AI assistants
// the structured facts they need to cite the business in answers.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GasStation",
  "@id": `${SITE_URL}/#business`,
  name: "Esso Tankstelle Bad Wildungen",
  alternateName: "Esso Hazke",
  description:
    "Esso Tankstelle in Bad Wildungen mit Shop, Firmentanken auf Rechnung und frischen Sonntagsbrötchen vom lokalen Bäcker.",
  url: SITE_URL,
  telephone: "+49-15227164926",
  email: "info@esso-hazke.de",
  image: `${SITE_URL}/Esso_hero.webp`,
  logo: `${SITE_URL}/Esso_logo.png`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bad Wildungen",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "City",
    name: "Bad Wildungen",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "24:00",
      description: "Shop-Öffnungszeiten – Zapfsäulen 24/7 verfügbar",
    },
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Diesel",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Super E10",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Super E5",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Firmentanken auf Rechnung",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Frische Brötchen (Sonntag)",
      value: true,
    },
  ],
  paymentAccepted: "Bar, EC-Karte, Kreditkarte, Rechnung (Firmenkunden)",
  currenciesAccepted: "EUR",
  sameAs: ["https://www.instagram.com/esso_badwildungen"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kann ich als Firma auf Rechnung tanken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja – sowohl Privatpersonen als auch Unternehmen können bei der Esso Tankstelle Bad Wildungen auf Rechnung tanken. Die Abrechnung erfolgt monatlich, übersichtlich und ohne versteckte Gebühren.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es sonntags frische Brötchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. In Kooperation mit einem lokalen Bäcker aus dem Nachbardorf bietet die Esso Tankstelle Bad Wildungen sonntags frische Brötchen an. An Feiertagen kann die Lieferung abweichen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie sind die Öffnungszeiten an Feiertagen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Öffnungszeiten an Feiertagen werden vom Inhaber individuell angepasst und rechtzeitig auf der Website angekündigt. Die Zapfsäulen sind grundsätzlich rund um die Uhr (24/7) verfügbar.",
      },
    },
    {
      "@type": "Question",
      name: "Werden offene Stellen ausgeschrieben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aktuelle Stellenangebote werden auf der Website veröffentlicht. Bewerbungen sind per Online-Formular mit Datei-Upload möglich und gehen direkt an den Inhaber.",
      },
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Esso Tankstelle Bad Wildungen",
  url: SITE_URL,
  logo: `${SITE_URL}/Esso_logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-15227164926",
    contactType: "customer service",
    areaServed: "DE",
    availableLanguage: ["German", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set .js-on synchronously before paint so SSR/no-JS users see content. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js-on');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
