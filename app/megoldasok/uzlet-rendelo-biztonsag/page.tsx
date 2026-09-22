import type { Metadata } from 'next';
import SolutionLayout from '@/components/SolutionLayout';

const SLUG = 'uzlet-rendelo-biztonsag';
const BASE = 'https://siroved.hu';

export const metadata: Metadata = {
  title: 'Üzlet és rendelő biztonságtechnikája | SIRO-VÉD',
  description:
    'Bejárat, ügyféltér, személyzeti területek és zárás utáni védelem összehangolt rendszerben — üzleteknek, rendelőknek és irodáknak.',
  alternates: { canonical: `${BASE}/megoldasok/${SLUG}` },
  openGraph: {
    title: 'Üzlet és rendelő biztonságtechnikája | SIRO-VÉD',
    description: 'Bejárat, ügyféltér, személyzeti területek és zárás utáni védelem — üzletekre és rendelőkre szabva.',
    url: `${BASE}/megoldasok/${SLUG}`,
    type: 'website',
    locale: 'hu_HU',
  },
};

const ACCENT = '#1A6BE8';

const breadcrumbs = [
  { name: 'Főoldal', href: '/' },
  { name: 'Megoldások', href: '/megoldasok' },
  { name: 'Üzlet és rendelő biztonság', href: `/megoldasok/${SLUG}` },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c.name, item: `${BASE}${c.href}`,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Üzlet és rendelő biztonságtechnika',
    provider: { '@type': 'LocalBusiness', name: 'SIRO-VÉD (SIROTECH Kft.)', url: BASE },
    serviceType: 'Kereskedelmi biztonságtechnika',
    areaServed: 'Fejér megye, Budapest, Közép-Dunántúl',
    description: 'Bejárat, ügyféltér, személyzeti területek és zárás utáni védelem összehangolt rendszerben.',
    url: `${BASE}/megoldasok/${SLUG}`,
  },
];

const Visual = () => (
  <div aria-label="Üzlet vagy rendelő alaprajz zónákkal">
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* Outer wall */}
      <rect x="15" y="15" width="250" height="170" rx="3" stroke="#2A2A35" strokeWidth="1.5" fill="#0A0A0C"/>
      {/* Counter / reception */}
      <rect x="50" y="80" width="110" height="22" rx="2" stroke="#2A2A35" strokeWidth="1" fill="#111116"/>
      <text x="75" y="95" fontSize="7" fill="#8888A0">Pult / recepció</text>
      {/* Waiting area */}
      <rect x="170" y="50" width="75" height="90" rx="2" stroke="#2A2A35" strokeWidth="0.8" strokeDasharray="3 2" fill="none" opacity="0.6"/>
      <text x="178" y="90" fontSize="7" fill="#8888A0">Váró / ügyféltér</text>
      {/* Back office */}
      <rect x="15" y="130" width="130" height="55" rx="2" stroke="#2A2A35" strokeWidth="1" fill="#111116"/>
      <text x="50" y="160" fontSize="7" fill="#8888A0">Személyzeti terület</text>
      {/* Entry */}
      <rect x="120" y="170" width="40" height="15" rx="1" stroke={ACCENT} strokeWidth="1.2" fill="none"/>
      <text x="126" y="180" fontSize="6" fill={ACCENT}>Bejárat</text>
      {/* Storage */}
      <rect x="155" y="130" width="110" height="55" rx="2" stroke="#2A2A35" strokeWidth="0.8" fill="#111116"/>
      <text x="175" y="160" fontSize="7" fill="#8888A0">Raktár / háttér</text>

      {/* Cameras */}
      <circle cx="15" cy="15" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M15 15 L42 40 L25 55 Z" fill={ACCENT} opacity="0.07"/>
      <circle cx="265" cy="15" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M265 15 L238 40 L255 55 Z" fill={ACCENT} opacity="0.07"/>
      <circle cx="140" cy="15" r="4" fill={ACCENT} opacity="0.7"/>
      {/* Back area camera */}
      <circle cx="265" cy="185" r="4" fill={ACCENT} opacity="0.7"/>
      <circle cx="15" cy="185" r="4" fill={ACCENT} opacity="0.7"/>

      {/* Sensors */}
      <circle cx="80" cy="50" r="3" fill="#F5B81C" opacity="0.8"/>
      <circle cx="200" cy="50" r="3" fill="#F5B81C" opacity="0.8"/>
      <circle cx="140" cy="145" r="3" fill="#F5B81C" opacity="0.6"/>

      {/* Access control at back door */}
      <rect x="150" y="168" width="10" height="14" rx="1" fill={ACCENT} fillOpacity="0.15" stroke={ACCENT} strokeWidth="0.8"/>
      <circle cx="155" cy="175" r="2" fill={ACCENT} opacity="0.6"/>

      {/* Zone areas shaded */}
      <rect x="170" y="50" width="75" height="90" rx="2" fill={ACCENT} fillOpacity="0.03"/>
      <rect x="15" y="130" width="130" height="55" rx="2" fill="#F5B81C" fillOpacity="0.02"/>

      {/* Legend */}
      <circle cx="18" cy="196" r="3" fill={ACCENT}/>
      <text x="25" y="199" fontSize="7" fill="#8888A0">Kamera</text>
      <circle cx="80" cy="196" r="3" fill="#F5B81C" opacity="0.8"/>
      <text x="87" y="199" fontSize="7" fill="#8888A0">Érzékelő</text>
      <rect x="140" y="193" width="8" height="6" rx="1" fill={ACCENT} fillOpacity="0.3" stroke={ACCENT} strokeWidth="0.6"/>
      <text x="152" y="199" fontSize="7" fill="#8888A0">Beléptetés</text>
    </svg>
    <p className="text-center text-xs text-muted mt-3">Üzlet / rendelő — bejárat, ügyféltér, személyzeti és raktározási zónák</p>
  </div>
);

export default function UzletRendeloPage() {
  return (
    <SolutionLayout
      breadcrumbs={breadcrumbs}
      eyebrow="B2B — Üzlet / Rendelő"
      h1="Üzlet és rendelő biztonságtechnikája"
      h1Accent="a működéshez igazítva"
      intro="Bejárat, ügyféltér, személyzeti területek és zárás utáni védelem összehangolt rendszerben. A rendszer nem zavarja a mindennapi forgalmat, de zárás után teljes védelmet nyújt."
      visual={<Visual />}
      features={[
        'Bejárat és kirakatvonal kamerafedezet',
        'Ügyféltér megfigyelése diszkrét elhelyezéssel',
        'Személyzeti és raktárterület elkülönített zónával',
        'Zárás utáni mozgásérzékelős riasztó',
        'Beléptetési rendszer hátsó ajtóhoz és raktárhoz',
        'Pánik- vagy segélyhívó gomb recepciónál',
      ]}
      ctaPrimary={{ label: 'Üzlet / rendelő felmérés', href: '/ingyenes-felmeres?request_type=uj-rendszer&property_type=uzlet' }}
      ctaSecondary={{ label: 'Árkalkulátor', href: '/kalkulator' }}
      relatedLinks={[
        { label: 'Telephely biztonság →', href: '/megoldasok/telephely-biztonsag' },
        { label: 'Riasztórendszerek →', href: '/szolgaltatasok/riasztorendszerek' },
        { label: 'B2B partnerség →', href: '/partneri-egyuttmukodes' },
      ]}
      structuredData={structuredData}
    />
  );
}
