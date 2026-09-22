import type { Metadata } from 'next';
import SolutionLayout from '@/components/SolutionLayout';

const SLUG = 'rendszerbovites';
const BASE = 'https://siroved.hu';

export const metadata: Metadata = {
  title: 'Meglévő biztonságtechnikai rendszer bővítése | SIRO-VÉD',
  description:
    'Új kamerák, érzékelők, zónák, távoli elérés és rögzítési kapacitás hozzáadása a meglévő rendszer lehetőségeihez igazítva, bontás nélkül ahol lehet.',
  alternates: { canonical: `${BASE}/megoldasok/${SLUG}` },
  openGraph: {
    title: 'Meglévő biztonságtechnikai rendszer bővítése | SIRO-VÉD',
    description: 'Új kamerák, érzékelők, zónák a meglévő rendszerhez igazítva — bontás nélkül, ahol lehet.',
    url: `${BASE}/megoldasok/${SLUG}`,
    type: 'website',
    locale: 'hu_HU',
  },
};

const ACCENT = '#1A6BE8';

const breadcrumbs = [
  { name: 'Főoldal', href: '/' },
  { name: 'Megoldások', href: '/megoldasok' },
  { name: 'Rendszerbővítés', href: `/megoldasok/${SLUG}` },
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
    name: 'Meglévő biztonságtechnikai rendszer bővítése',
    provider: { '@type': 'LocalBusiness', name: 'SIRO-VÉD (SIROTECH Kft.)', url: BASE },
    serviceType: 'Biztonságtechnikai bővítés',
    areaServed: 'Fejér megye, Budapest, Közép-Dunántúl',
    description: 'Új kamerák, érzékelők, zónák, távoli elérés és rögzítési kapacitás a meglévő rendszer lehetőségeihez igazítva.',
    url: `${BASE}/megoldasok/${SLUG}`,
  },
];

const Visual = () => (
  <div aria-label="Meglévő és új elemek diagramja">
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* outer walls */}
      <rect x="20" y="20" width="240" height="160" rx="3" stroke="#2A2A35" strokeWidth="1.5" fill="#0A0A0C"/>
      <line x1="20" y1="100" x2="260" y2="100" stroke="#2A2A35" strokeWidth="1"/>
      <line x1="140" y1="20" x2="140" y2="180" stroke="#2A2A35" strokeWidth="1"/>

      {/* Existing nodes — grey */}
      <circle cx="20" cy="20" r="6" fill="#4A4A5A"/>
      <text x="30" y="16" fontSize="7" fill="#8888A0">Meglévő</text>
      <circle cx="260" cy="20" r="6" fill="#4A4A5A"/>
      <circle cx="20" cy="180" r="6" fill="#4A4A5A"/>

      {/* Existing camera cones — grey */}
      <path d="M20 20 L50 45 L30 60 Z" fill="#4A4A5A" opacity="0.12"/>
      <path d="M260 20 L230 45 L250 60 Z" fill="#4A4A5A" opacity="0.12"/>

      {/* New nodes — blue */}
      <circle cx="260" cy="180" r="6" fill={ACCENT} opacity="0.9"/>
      <circle cx="140" cy="20" r="6" fill={ACCENT} opacity="0.9"/>
      <circle cx="140" cy="100" r="5" fill={ACCENT} opacity="0.6"/>
      <text x="148" y="16" fontSize="7" fill={ACCENT}>Új</text>

      {/* New camera cones — blue */}
      <path d="M260 180 L230 155 L250 140 Z" fill={ACCENT} opacity="0.1"/>
      <path d="M140 20 L115 50 L165 50 Z" fill={ACCENT} opacity="0.08"/>

      {/* Compatibility check marks */}
      <rect x="125" y="88" width="30" height="24" rx="2" stroke={ACCENT} strokeWidth="0.8" fill={ACCENT} fillOpacity="0.04"/>
      <path d="M131 100 l4 4 8-8" stroke={ACCENT} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="128" y="120" fontSize="6" fill={ACCENT}>Kompatibilis</text>

      {/* NVR/DVR box */}
      <rect x="55" y="128" width="50" height="28" rx="2" stroke="#2A2A35" strokeWidth="1" fill="#111116"/>
      <text x="65" y="146" fontSize="7" fill="#8888A0">NVR / DVR</text>

      {/* Legend */}
      <circle cx="30" cy="196" r="4" fill="#4A4A5A"/>
      <text x="38" y="199" fontSize="8" fill="#8888A0">Meglévő elem</text>
      <circle cx="130" cy="196" r="4" fill={ACCENT} opacity="0.9"/>
      <text x="138" y="199" fontSize="8" fill="#8888A0">Új elem</text>
    </svg>
    <p className="text-center text-xs text-muted mt-3">Meglévő elemek szürkén, új elemek kékkel — helyszíni kompatibilitás-ellenőrzés alapján</p>
  </div>
);

export default function RendszerbovitesPage() {
  return (
    <SolutionLayout
      breadcrumbs={breadcrumbs}
      eyebrow="Rendszerbővítés"
      h1="Meglévő rendszer bővítése"
      h1Accent="bontás nélkül, ahol lehet"
      intro="Új kamerák, érzékelők, zónák, távoli elérés és rögzítési kapacitás a meglévő rendszer lehetőségeihez igazítva. Nem mindig kell nulláról kezdeni."
      visual={<Visual />}
      features={[
        'Meglévő rendszer kompatibilitásának ellenőrzése',
        'Új kamerák integrálása IP és analóg rendszerbe',
        'Rögzítési kapacitás (NVR/DVR) bővítése',
        'Új mozgásérzékelős zónák és riasztókörök',
        'Mobilos távoli elérés hozzáadása régebbi rendszerhez',
        'Beléptetési pontok bővítése meglévő rendszerre',
      ]}
      ctaPrimary={{ label: 'Bővítési felmérés kérése', href: '/ingyenes-felmeres?request_type=bovites' }}
      ctaSecondary={{ label: 'Árkalkulátor', href: '/kalkulator' }}
      relatedLinks={[
        { label: 'Kamerarendszerek →', href: '/szolgaltatasok/kamerarendszerek' },
        { label: 'Riasztórendszerek →', href: '/szolgaltatasok/riasztorendszerek' },
        { label: 'Új rendszer telepítés →', href: '/megoldasok/uj-biztonsagtechnikai-rendszer' },
      ]}
      structuredData={structuredData}
    />
  );
}
