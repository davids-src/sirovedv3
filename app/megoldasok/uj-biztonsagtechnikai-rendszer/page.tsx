import type { Metadata } from 'next';
import SolutionLayout from '@/components/SolutionLayout';

const SLUG = 'uj-biztonsagtechnikai-rendszer';
const BASE = 'https://siroved.hu';

export const metadata: Metadata = {
  title: 'Új biztonságtechnikai rendszer telepítése | SIRO-VÉD',
  description:
    'Kamerák, riasztó, beléptetés és szükséges kábelezés összehangolt kialakítása lakó- és üzleti ingatlanokhoz. Tervezéstől kivitelezésig.',
  alternates: { canonical: `${BASE}/megoldasok/${SLUG}` },
  openGraph: {
    title: 'Új biztonságtechnikai rendszer telepítése | SIRO-VÉD',
    description: 'Összehangolt kamera, riasztó és beléptetési rendszer tervezése és kivitelezése — nulláról.',
    url: `${BASE}/megoldasok/${SLUG}`,
    type: 'website',
    locale: 'hu_HU',
  },
};

const ACCENT = '#1A6BE8';

const breadcrumbs = [
  { name: 'Főoldal', href: '/' },
  { name: 'Megoldások', href: '/megoldasok' },
  { name: 'Új biztonságtechnikai rendszer', href: `/megoldasok/${SLUG}` },
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
    name: 'Új biztonságtechnikai rendszer telepítése',
    provider: { '@type': 'LocalBusiness', name: 'SIRO-VÉD (SIROTECH Kft.)', url: BASE },
    serviceType: 'Biztonságtechnikai telepítés',
    areaServed: 'Fejér megye, Budapest, Közép-Dunántúl',
    description: 'Kamerák, riasztó, beléptetés és szükséges kábelezés összehangolt kialakítása lakó- és üzleti ingatlanokhoz.',
    url: `${BASE}/megoldasok/${SLUG}`,
  },
];

const Visual = () => (
  <div aria-label="Alaprajz kamerakúpokkal és beléptetési ponttal">
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" role="img" aria-hidden="true">
      {/* outer walls */}
      <rect x="20" y="30" width="240" height="150" rx="3" stroke="#2A2A35" strokeWidth="1.5" fill="#0A0A0C"/>
      {/* rooms */}
      <line x1="140" y1="30" x2="140" y2="180" stroke="#2A2A35" strokeWidth="1"/>
      <line x1="20" y1="110" x2="140" y2="110" stroke="#2A2A35" strokeWidth="1"/>
      {/* door */}
      <rect x="128" y="170" width="24" height="10" rx="1" stroke={ACCENT} strokeWidth="1" fill="none"/>
      <path d="M128 175 Q128 165 140 165" stroke={ACCENT} strokeWidth="0.8" fill="none" strokeDasharray="2 1"/>
      {/* camera cones — top-left */}
      <circle cx="20" cy="30" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M20 30 L55 55 L30 70 Z" fill={ACCENT} opacity="0.08"/>
      {/* camera cone — top-right */}
      <circle cx="260" cy="30" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M260 30 L225 55 L250 70 Z" fill={ACCENT} opacity="0.08"/>
      {/* camera cone — bottom-right */}
      <circle cx="260" cy="180" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M260 180 L225 155 L250 140 Z" fill={ACCENT} opacity="0.08"/>
      {/* entry point */}
      <rect x="8" y="90" width="14" height="20" rx="1" fill={ACCENT} opacity="0.15" stroke={ACCENT} strokeWidth="1"/>
      <circle cx="15" cy="100" r="2.5" fill={ACCENT} opacity="0.7"/>
      {/* sensor dots */}
      <circle cx="75" cy="65" r="3" fill="#F5B81C" opacity="0.7"/>
      <circle cx="190" cy="65" r="3" fill="#F5B81C" opacity="0.7"/>
      <circle cx="75" cy="145" r="3" fill="#F5B81C" opacity="0.7"/>
      {/* legend */}
      <circle cx="30" cy="195" r="3" fill={ACCENT}/>
      <text x="38" y="198" fontSize="8" fill="#8888A0">Kamera</text>
      <circle cx="90" cy="195" r="3" fill="#F5B81C" opacity="0.7"/>
      <text x="98" y="198" fontSize="8" fill="#8888A0">Érzékelő</text>
      <rect x="148" y="192" width="8" height="6" rx="1" fill={ACCENT} opacity="0.4" stroke={ACCENT} strokeWidth="0.8"/>
      <text x="160" y="198" fontSize="8" fill="#8888A0">Beléptetés</text>
    </svg>
    <p className="text-center text-xs text-muted mt-3">Szemléltető alaprajz — valódi kialakítás helyszíni felmérés alapján készül</p>
  </div>
);

export default function UjRendszerPage() {
  return (
    <SolutionLayout
      breadcrumbs={breadcrumbs}
      eyebrow="Új rendszer telepítése"
      h1="Új biztonságtechnikai rendszer,"
      h1Accent="már a tervezéstől"
      intro="Kamerák, riasztó, beléptetés és szükséges kábelezés összehangolt kialakítása lakó- és üzleti ingatlanokhoz. Egy vállalkozó, egy ütemezés, egy garancia."
      visual={<Visual />}
      features={[
        'Ingyenes helyszíni igényfelmérés és rendszertervezés',
        'IP és analóg kamerarendszer — HD/4K felbontással',
        'Riasztó zónakialakítás és mozgásérzékelők',
        'Beléptetési pontok kulcskártyával vagy kóddal',
        'Szükséges kábelezés és dobozolás a SIROVILL csapatával',
        'Okostelefonos elérés és távfelügyeleti lehetőség',
      ]}
      ctaPrimary={{ label: 'Ingyenes tervezési felmérés', href: '/ingyenes-felmeres?request_type=uj-rendszer' }}
      ctaSecondary={{ label: 'Árkalkulátor', href: '/kalkulator' }}
      relatedLinks={[
        { label: 'Kamerarendszerek →', href: '/szolgaltatasok/kamerarendszerek' },
        { label: 'Riasztórendszerek →', href: '/szolgaltatasok/riasztorendszerek' },
      ]}
      structuredData={structuredData}
    />
  );
}
