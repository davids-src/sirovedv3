import type { Metadata } from 'next';
import SolutionLayout from '@/components/SolutionLayout';

const SLUG = 'csaladi-haz-biztonsag';
const BASE = 'https://siroved.hu';

export const metadata: Metadata = {
  title: 'Családi ház biztonság — kamera, riasztó, kapu | SIRO-VÉD',
  description:
    'Kültéri és beltéri kamera, riasztó, kapu és távoli elérés családi házhoz — egyszerűen kezelhető rendszer, amely a mindennapokban is kényelmes marad.',
  alternates: { canonical: `${BASE}/megoldasok/${SLUG}` },
  openGraph: {
    title: 'Családi ház biztonság — kamera, riasztó, kapu | SIRO-VÉD',
    description: 'Bővíthető, egyszerűen kezelhető biztonságtechnikai rendszer otthonra — kamera, riasztó, kapu, okostelefon.',
    url: `${BASE}/megoldasok/${SLUG}`,
    type: 'website',
    locale: 'hu_HU',
  },
};

const ACCENT = '#1A6BE8';

const breadcrumbs = [
  { name: 'Főoldal', href: '/' },
  { name: 'Megoldások', href: '/megoldasok' },
  { name: 'Családi ház biztonság', href: `/megoldasok/${SLUG}` },
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
    name: 'Családi ház biztonságtechnika',
    provider: { '@type': 'LocalBusiness', name: 'SIRO-VÉD (SIROTECH Kft.)', url: BASE },
    serviceType: 'Otthoni biztonságtechnika',
    areaServed: 'Fejér megye, Budapest, Közép-Dunántúl',
    description: 'Kültéri és beltéri kamera, riasztó, kapu és távoli elérés — egyszerűen kezelhető otthoni rendszer.',
    url: `${BASE}/megoldasok/${SLUG}`,
  },
];

const Visual = () => (
  <div aria-label="Családi ház alaprajz 4 védelmi zónával">
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* Kerítés / telek határ */}
      <rect x="12" y="12" width="256" height="176" rx="3" stroke="#2A2A35" strokeWidth="1" strokeDasharray="4 3" fill="none"/>
      {/* Ház */}
      <rect x="70" y="50" width="140" height="100" rx="2" stroke="#2A2A35" strokeWidth="1.5" fill="#111116"/>
      {/* Tető */}
      <polyline points="60,52 140,16 220,52" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeLinejoin="round" opacity="0.6"/>
      {/* Bejárati ajtó */}
      <rect x="128" y="120" width="24" height="30" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
      {/* Ablakok */}
      <rect x="82" y="65" width="28" height="20" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
      <rect x="170" y="65" width="28" height="20" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
      {/* Garázs */}
      <rect x="70" y="130" width="46" height="40" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
      <line x1="70" y1="148" x2="116" y2="148" stroke="#2A2A35" strokeWidth="0.6"/>
      {/* Kapu */}
      <rect x="12" y="155" width="22" height="18" rx="1" stroke={ACCENT} strokeWidth="1.2" fill="none"/>
      <text x="15" y="167" fontSize="6" fill={ACCENT}>Kapu</text>

      {/* Zone numbers */}
      <text x="16" y="22" fontSize="7" fill={ACCENT} opacity="0.8">① Kerítés / udvar</text>
      <text x="75" y="62" fontSize="7" fill={ACCENT} opacity="0.8">② Bejárat</text>
      <text x="95" y="100" fontSize="7" fill="#8888A0">③ Belső terek</text>
      <text x="75" y="145" fontSize="7" fill={ACCENT} opacity="0.8">④ Garázs</text>

      {/* Cameras */}
      <circle cx="12" cy="12" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M12 12 L40 38 L22 50 Z" fill={ACCENT} opacity="0.07"/>
      <circle cx="268" cy="12" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M268 12 L240 38 L258 50 Z" fill={ACCENT} opacity="0.07"/>
      <circle cx="12" cy="188" r="5" fill={ACCENT} opacity="0.7"/>

      {/* Sensor */}
      <circle cx="140" cy="118" r="3" fill="#F5B81C" opacity="0.8"/>
      <circle cx="86" cy="118" r="3" fill="#F5B81C" opacity="0.6"/>
      <circle cx="194" cy="118" r="3" fill="#F5B81C" opacity="0.6"/>

      {/* Legend */}
      <circle cx="18" cy="196" r="3" fill={ACCENT}/>
      <text x="25" y="199" fontSize="7" fill="#8888A0">Kamera</text>
      <circle cx="85" cy="196" r="3" fill="#F5B81C" opacity="0.8"/>
      <text x="92" y="199" fontSize="7" fill="#8888A0">Érzékelő</text>
    </svg>
    <p className="text-center text-xs text-muted mt-3">Ház + udvar + kapu — 4 védelmi zóna, bővíthető kialakítással</p>
  </div>
);

export default function CsaladiHazPage() {
  return (
    <SolutionLayout
      breadcrumbs={breadcrumbs}
      eyebrow="B2C — Magáningatlan"
      h1="Családi ház biztonsága"
      h1Accent="egyszerűen kezelhető rendszerrel"
      intro="Kültéri és beltéri kamera, riasztó, kapu és távoli elérés úgy, hogy a rendszer a mindennapokban is kényelmes maradjon. Bővíthető, ha az igények változnak."
      visual={<Visual />}
      features={[
        'Kültéri kamera: bejárat, kapu, garázs, udvar',
        'Beltéri kamera: folyosó, nappali (igény szerint)',
        'Mozgásérzékelős riasztó és nyitásérzékelők',
        'Kapu- és ajtózár vezérlés okostelefonról',
        'Éjjellátó kamerák sötétben is',
        'Mobilos értesítés minden gyanús eseményről',
      ]}
      ctaPrimary={{ label: 'Ingyenes otthoni felmérés', href: '/ingyenes-felmeres?request_type=uj-rendszer&property_type=csaladi-haz' }}
      ctaSecondary={{ label: 'Árkalkulátor', href: '/kalkulator' }}
      relatedLinks={[
        { label: 'Kamerarendszerek →', href: '/szolgaltatasok/kamerarendszerek' },
        { label: 'Riasztórendszerek →', href: '/szolgaltatasok/riasztorendszerek' },
        { label: 'Nyaraló / ajánlat →', href: '/ajanlat/nyaralo-kamerarendszer' },
      ]}
      structuredData={structuredData}
    />
  );
}
