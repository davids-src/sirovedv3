import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siro Véd - Biztonságtechnikai megoldások',
  description: 'Kamerarendszerek és riasztórendszerek telepítése és karbantartása. Válaszd a Siro Véd megbízható szolgáltatásait!',
  keywords: ['kamerarendszer telepítés', 'riasztórendszer telepítés', 'biztonságtechnika', 'megfigyelőrendszer'],
  openGraph: {
    title: 'Siro Véd - Biztonságtechnikai megoldások',
    description: 'Kamerarendszerek és riasztórendszerek telepítése és karbantartása.',
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
