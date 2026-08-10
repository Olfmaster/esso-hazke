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
    default:
      "Esso Tankstelle Battenberg (Eder) – Tanken, Shop & frische Brötchen",
    template: "%s | Esso Battenberg",
  },
  description:
    "Ihre Esso Tankstelle in 35088 Battenberg (Eder). Sieben Tage die Woche geöffnet, Tanken nur zu den Öffnungszeiten. Frische Sonntagsbrötchen von der Bäckerei Eckhardt, Waschanlage, Mietwagen und Werkstatt über unsere Partner.",
  keywords: [
    "Esso Tankstelle Battenberg",
    "Tanken Battenberg Eder",
    "Tankstelle 35088",
    "Brötchen Sonntag Battenberg",
    "Waschanlage Battenberg",
    "Mietwagen Battenberg",
    "Diesel Super E10 E5",
    "Esso Card DKV UTA",
    "Esso Hazke",
  ],
  authors: [{ name: "Esso Tankstelle Battenberg (Eder)" }],
  creator: "Esso Tankstelle Battenberg (Eder)",
  publisher: "Esso Tankstelle Battenberg (Eder)",
  category: "Tankstelle",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Esso Tankstelle Battenberg (Eder)",
    title:
      "Esso Tankstelle Battenberg (Eder) – Tanken, Shop & frische Brötchen",
    description:
      "Tanken, Shop und frische Sonntagsbrötchen – Ihre Esso Tankstelle in Battenberg (Eder). Sieben Tage die Woche geöffnet.",
    images: [
      {
        url: "/Esso_hero.webp",
        width: 1200,
        height: 675,
        alt: "Esso Tankstelle in Battenberg (Eder)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esso Tankstelle Battenberg (Eder)",
    description:
      "Tanken, Shop und frische Sonntagsbrötchen in Battenberg (Eder).",
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
  name: "Esso Tankstelle Battenberg (Eder)",
  alternateName: "Esso Hazke",
  description:
    "Esso Tankstelle in Battenberg (Eder) mit Shop und frischen Sonntagsbrötchen von der Bäckerei Eckhardt. Waschanlage, Waschboxen, Mietwagen und Werkstatt über Partner vor Ort.",
  url: SITE_URL,
  telephone: "+49-6452-9291909",
  email: "info@esso-hazke.de",
  image: `${SITE_URL}/Esso_hero.webp`,
  logo: `${SITE_URL}/Esso_logo.png`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    postalCode: "35088",
    addressLocality: "Battenberg (Eder)",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "City",
    name: "Battenberg (Eder)",
  },
  // openingHoursSpecification fehlt bewusst: Die Station hat 7 Tage die Woche
  // geöffnet, die exakten Uhrzeiten liegen aber noch nicht vor. Lieber keine
  // Angabe als eine falsche — Google zeigt strukturierte Zeiten direkt an.
  // TODO: eintragen, sobald die Zeiten da sind.
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
      name: "Frische Brötchen (Sonntag)",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Waschanlage & SB-Waschboxen (Partner)",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Mietwagen (Partner)",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Werkstatt (Partner)",
      value: true,
    },
  ],
  paymentAccepted:
    "Esso Card, Shell, DKV, UTA, Visa, American Express, Google Pay, Esso App",
  currenciesAccepted: "EUR",
  sameAs: [
    "https://www.instagram.com/tankstelle_35088_valeriyahazke",
    "https://www.facebook.com/share/17LNgw5euc/",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kann ich rund um die Uhr tanken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Die Esso Tankstelle Battenberg (Eder) hat sieben Tage die Woche geöffnet, die Zapfsäulen sind aber nur während der Öffnungszeiten in Betrieb. Einen Nachttank-Automaten gibt es nicht.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Karten und Zahlungsmittel werden akzeptiert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Akzeptiert werden die Flottenkarten Esso Card, Shell, DKV und UTA, die Kreditkarten Visa und American Express sowie Google Pay. Über die Esso App kann außerdem direkt mit dem Handy an der Zapfsäule bezahlt werden.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es sonntags frische Brötchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. In Kooperation mit der Bäckerei Eckhardt aus Hatzfeld bietet die Esso Tankstelle Battenberg (Eder) sonntags frische Brötchen an. An Feiertagen kann die Lieferung abweichen.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es eine Waschanlage, Mietwagen oder eine Werkstatt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, über Partner vor Ort. Waschanlage und Waschboxen zur Selbstbedienung sowie Mietwagen (9-Sitzer, Transporter für Umzüge, Wohnmobil) über Michael Bienhaus, Telefon 0152 36107109. Für Reparatur und Wartung: Autoservice Biermann, Battenfelder Str. 6, Telefon 06452 9393773.",
      },
    },
    {
      "@type": "Question",
      name: "Wie sind die Öffnungszeiten an Feiertagen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An hessischen Feiertagen gelten abweichende Zeiten, besonders um Weihnachten und Neujahr. Sie werden rechtzeitig auf der Startseite eingeblendet. Da die Zapfsäulen nur während der Öffnungszeiten laufen, gilt das auch fürs Tanken.",
      },
    },
    {
      "@type": "Question",
      name: "Werden offene Stellen ausgeschrieben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aktuelle Stellenangebote werden auf der Website veröffentlicht. Bewerbungen sind per Online-Formular mit Datei-Upload möglich und gehen direkt an die Inhaberin.",
      },
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Esso Tankstelle Battenberg (Eder)",
  url: SITE_URL,
  logo: `${SITE_URL}/Esso_logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-6452-9291909",
    contactType: "customer service",
    areaServed: "DE",
    availableLanguage: ["German", "English"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "16:00",
    },
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
