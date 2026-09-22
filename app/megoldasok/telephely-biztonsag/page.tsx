import type { Metadata } from 'next';
import SolutionLayout from '@/components/SolutionLayout';

const SLUG = 'telephely-biztonsag';
const BASE = 'https://siroved.hu';

export const metadata: Metadata = {
  title: 'Telephelybiztonság: kamera, riasztó és beléptetés | SIRO-VÉD',
  description:
    'Üzleti telephelyek átfogó biztonságtechnikai védelme — kaputól a kültéren át a raktárig. Kamera, riasztó és beléptetési rendszer egy összehangolt kialakításban.',
  alternates: { canonical: `${BASE}/megoldasok/${SLUG}` },
  openGraph: {
    title: 'Telephelybiztonság: kamera, riasztó és beléptetés | SIRO-VÉD',
    description: 'Belépéstől a kültéri lefedettségig — üzleti telephelyek átfogó védelme egy rendszerként.',
    url: `${BASE}/megoldasok/${SLUG}`,
    type: 'website',
    locale: 'hu_HU',
  },
};

const ACCENT = '#1A6BE8';

const breadcrumbs = [
  { name: 'Főoldal', href: '/' },
  { name: 'Megoldások', href: '/megoldasok' },
  { name: 'Telephely biztonság', href: `/megoldasok/${SLUG}` },
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
    name: 'Telephelybiztonság',
    provider: { '@type': 'LocalBusiness', name: 'SIRO-VÉD (SIROTECH Kft.)', url: BASE },
    serviceType: 'Üzleti biztonságtechnika',
    areaServed: 'Fejér megye, Budapest, Közép-Dunántúl',
    description: 'Kamera, riasztó és beléptetés üzleti telephelyekhez, egy rendszerként átgondolva.',
    url: `${BASE}/megoldasok/${SLUG}`,
  },
];

const Visual = () => (
  <div aria-label="Telephely alaprajz 5 védelmi zónával">
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* Outer fence/perimeter */}
      <rect x="10" y="10" width="260" height="180" rx="3" stroke="#2A2A35" strokeWidth="1" strokeDasharray="5 3" fill="none"/>
      {/* Main building */}
      <rect x="50" y="40" width="130" height="90" rx="2" stroke="#2A2A35" strokeWidth="1.5" fill="#111116"/>
      {/* Warehouse */}
      <rect x="195" y="60" width="60" height="70" rx="2" stroke="#2A2A35" strokeWidth="1.5" fill="#111116"/>
      {/* Parking area */}
      <rect x="50" y="145" width="205" height="30" rx="2" stroke="#2A2A35" strokeWidth="0.8" strokeDasharray="4 2" fill="none" opacity="0.5"/>
      <text x="128" y="163" fontSize="7" fill="#8888A0" textAnchor="middle">Parkoló</text>
      {/* Gate */}
      <rect x="10" y="85" width="20" height="30" rx="1" stroke={ACCENT} strokeWidth="1.2" fill="none"/>
      <line x1="20" y1="85" x2="20" y2="115" stroke={ACCENT} strokeWidth="1" opacity="0.5"/>

      {/* Zone labels */}
      {[
        { x: 15, y: 18, label: '① Kerítés' },
        { x: 14, y: 82, label: '② Kapu' },
        { x: 90, y: 75, label: '③ Épület' },
        { x: 200, y: 75, label: '④ Raktár' },
        { x: 90, y: 158, label: '⑤ Parkoló' },
      ].map((z) => (
        <text key={z.label} x={z.x} y={z.y} fontSize="7" fill={ACCENT} opacity="0.8">{z.label}</text>
      ))}

      {/* Cameras */}
      <circle cx="10" cy="10" r="5" fill={ACCENT} opacity="0.9"/>
      <circle cx="270" cy="10" r="5" fill={ACCENT} opacity="0.9"/>
      <circle cx="10" cy="190" r="5" fill={ACCENT} opacity="0.9"/>
      <circle cx="270" cy="190" r="5" fill={ACCENT} opacity="0.9"/>
      <circle cx="255" cy="60" r="4" fill={ACCENT} opacity="0.7"/>
      <circle cx="50" cy="40" r="4" fill={ACCENT} opacity="0.7"/>
      <circle cx="180" cy="40" r="4" fill={ACCENT} opacity="0.7"/>

      {/* Beléptetés */}
      <rect x="28" y="92" width="10" height="16" rx="1" fill={ACCENT} fillOpacity="0.15" stroke={ACCENT} strokeWidth="0.8"/>
      <circle cx="33" cy="100" r="2" fill={ACCENT} opacity="0.7"/>

      {/* Legend */}
      <circle cx="18" cy="196" r="3" fill={ACCENT}/>
      <text x="25" y="199" fontSize="7" fill="#8888A0">Kamera</text>
      <rect x="75" y="193" width="8" height="6" rx="1" fill={ACCENT} fillOpacity="0.3" stroke={ACCENT} strokeWidth="0.6"/>
      <text x="87" y="199" fontSize="7" fill="#8888A0">Beléptetés</text>
    </svg>
    <p className="text-center text-xs text-muted mt-3">Telephely kapu, parkoló, épület, raktár — 5 számozott védelmi zóna</p>
  </div>
);

export default function TelephelyBiztonsagPage() {
  return (
    <SolutionLayout
      breadcrumbs={breadcrumbs}
      eyebrow="B2B — Telephely"
      h1="Telephelybiztonság:"
      h1Accent="belépéstől a kültéri lefedettségig"
      intro="Kamera, riasztó és beléptetés üzleti telephelyekhez, egy rendszerként átgondolva. Kapu, parkoló, épület és raktár — összehangolt védelmi zónákban."
      visual={<Visual />}
      features={[
        'Kültéri parkoló és kerítés kamerafedezete',
        'Automatizálható kapu és beléptetési rendszer',
        'Raktár és rakodókapu mozgásérzékelős védelme',
        'Személyzeti területek elkülönített zónakezelése',
        'Éjjellátó és IR kamerák rossz látási viszonyokhoz',
        'Dokumentált, auditálható rendszerkialakítás',
      ]}
      ctaPrimary={{ label: 'Telephely felmérés kérése', href: '/ingyenes-felmeres?request_type=uj-rendszer&property_type=telephely' }}
      ctaSecondary={{ label: 'Árkalkulátor', href: '/kalkulator' }}
      relatedLinks={[
        { label: 'Raktár és csarnok megoldás →', href: '/megoldasok/raktar-csarnok-biztonsag' },
        { label: 'B2B partnerség →', href: '/partneri-egyuttmukodes' },
        { label: 'Kamerarendszerek →', href: '/szolgaltatasok/kamerarendszerek' },
      ]}
      structuredData={structuredData}
    />
  );
}
