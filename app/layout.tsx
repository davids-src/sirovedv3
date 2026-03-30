import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siro Véd – Biztonságtechnika Székesfehérváron',
  description: 'Kamerarendszerek, riasztórendszerek és tűzjelző rendszerek telepítése, javítása és karbantartása Székesfehérváron és Fejér megyében. Ingyenes konzultáció, gyors kiszállás.',
  keywords: ['kamerarendszer telepítés', 'riasztórendszer telepítés', 'biztonságtechnika', 'megfigyelőrendszer', 'Székesfehérvár', 'Fejér megye', 'kamerarendszer javítás', 'riasztórendszer javítás'],
  openGraph: {
    title: 'Siro Véd – Biztonságtechnika Székesfehérváron',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
