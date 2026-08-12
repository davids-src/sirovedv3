import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import { SITE } from '@/lib/config';

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SIRO-VÉD - Biztonságtechnika, Kamerarendszer, Riasztórendszer, Tűzvédelem',
  description: 'Kamerarendszerek és riasztórendszerek szakszerű telepítése, javítása és karbantartása Fejér megyében, Budapesten és a Közép-Dunántúlon. Ingyenes helyszíni állapotfelmérés cégeknek és magánszemélyeknek. Kérjen ajánlatot 1 munkanapon belül!',
  keywords: ['kamerarendszer telepítés', 'riasztórendszer telepítés', 'biztonságtechnika', 'megfigyelőrendszer', 'Székesfehérvár', 'Fejér megye', 'Budapest', 'Közép-Dunántúl', 'kamerarendszer javítás', 'riasztórendszer javítás'],
  openGraph: {
    title: 'SIRO-VÉD - Biztonságtechnika, Kamerarendszer, Riasztórendszer, Tűzvédelem',
    description: 'Kamerarendszerek és riasztórendszerek telepítése, javítása és karbantartása Fejér megyében, Budapesten és a Közép-Dunántúlon. Ingyenes állapotfelmérés.',
    type: 'website',
    locale: 'hu_HU',
  },
  icons: {
    icon: '/siroved_logo.png',
    apple: '/siroved_logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body className="font-body bg-bg text-ink">
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SecurityService",
              "name": `${SITE.company} (SIRO-VÉD)`,
              "url": "https://siroved.hu",
              "logo": "https://siroved.hu/siroved_logo.png",
              "image": "https://siroved.hu/siroved_logo.png",
              "description": "Kamerarendszerek, riasztórendszerek és tűzjelző rendszerek telepítése, javítása és karbantartása Fejér megyében, Budapesten és a Közép-Dunántúlon.",
              "telephone": SITE.phone,
              "email": SITE.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lövölde utca 24 4/15",
                "addressLocality": "Székesfehérvár",
                "postalCode": "8000",
                "addressRegion": "Fejér megye",
                "addressCountry": "HU"
              },
              "areaServed": "Fejér megye, Budapest, Közép-Dunántúl",
              "priceRange": "$$"
            })
          }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
