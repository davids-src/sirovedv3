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
        {children}
        <CookieBanner />
        <StickyKalkulatorCTA />
      </body>
    </html>
  );
}
