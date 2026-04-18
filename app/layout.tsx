import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import StickyKalkulatorCTA from '@/components/StickyKalkulatorCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SIRO-VÉD – Biztonságtechnika Székesfehérváron',
  description: 'Kamerarendszerek, riasztórendszerek és tűzjelző rendszerek telepítése, javítása és karbantartása Székesfehérváron és Fejér megyében. Ingyenes konzultáció, gyors kiszállás.',
  keywords: ['kamerarendszer telepítés', 'riasztórendszer telepítés', 'biztonságtechnika', 'megfigyelőrendszer', 'Székesfehérvár', 'Fejér megye', 'kamerarendszer javítás', 'riasztórendszer javítás'],
  openGraph: {
    title: 'SIRO-VÉD – Biztonságtechnika Székesfehérváron',
    description: 'Kamerarendszerek és riasztórendszerek telepítése, javítása Székesfehérváron és Fejér megyében.',
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
    <html lang="hu">
      <body className={inter.className}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SecurityService",
              "name": "SIRO-VÉD",
              "url": "https://siroved.hu",
              "logo": "https://siroved.hu/siroved_logo.png",
              "image": "https://siroved.hu/siroved_logo.png",
              "description": "Kamerarendszerek, riasztórendszerek és tűzjelző rendszerek telepítése, javítása és karbantartása Székesfehérváron és Fejér megyében.",
              "telephone": "+36 70 273 5532",
              "email": "hello@sironic.hu",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lövölde utca 24",
                "addressLocality": "Székesfehérvár",
                "postalCode": "8000",
                "addressRegion": "Fejér megye",
                "addressCountry": "HU"
              },
              "areaServed": "Fejér megye",
              "priceRange": "$$"
            })
          }}
        />
        {children}
        <CookieBanner />
        <StickyKalkulatorCTA />
      </body>
    </html>
  );
}
