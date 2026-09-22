import type { Metadata } from 'next';
import SolutionLayout from '@/components/SolutionLayout';

const SLUG = 'raktar-csarnok-biztonsag';
const BASE = 'https://siroved.hu';

export const metadata: Metadata = {
  title: 'Raktár és csarnok biztonságtechnikája | SIRO-VÉD',
  description:
    'Nagy terület, átgondolt lefedettség — rakodókapuk, kültér, belső közlekedők és kritikus pontok kamera- és beléptetési kialakítása raktárakhoz és csarnokokhoz.',
  alternates: { canonical: `${BASE}/megoldasok/${SLUG}` },
  openGraph: {
    title: 'Raktár és csarnok biztonságtechnikája | SIRO-VÉD',
    description: 'Rakodókapuk, kültér, belső zónák — nagy terület, átgondolt lefedettség raktárhoz és csarnokhoz.',
    url: `${BASE}/megoldasok/${SLUG}`,
    type: 'website',
    locale: 'hu_HU',
  },
};

const ACCENT = '#1A6BE8';

const breadcrumbs = [
  { name: 'Főoldal', href: '/' },
  { name: 'Megoldások', href: '/megoldasok' },
  { name: 'Raktár és csarnok biztonság', href: `/megoldasok/${SLUG}` },
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
    name: 'Raktár és csarnok biztonságtechnika',
    provider: { '@type': 'LocalBusiness', name: 'SIRO-VÉD (SIROTECH Kft.)', url: BASE },
    serviceType: 'Ipari biztonságtechnika',
    areaServed: 'Fejér megye, Budapest, Közép-Dunántúl',
    description: 'Rakodókapuk, kültér, belső közlekedők és kritikus pontok kamera- és beléptetési kialakítása.',
    url: `${BASE}/megoldasok/${SLUG}`,
  },
];

const Visual = () => (
  <div aria-label="Raktár felülnézeti diagram polcsorokkal és rakodókapukkal">
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* Outer wall */}
      <rect x="10" y="10" width="260" height="180" rx="3" stroke="#2A2A35" strokeWidth="1.5" fill="#0A0A0C"/>
      {/* Shelf rows */}
      {[45, 72, 99, 126].map((y) => (
        <rect key={y} x="40" y={y} width="160" height="14" rx="1" stroke="#2A2A35" strokeWidth="0.8" fill="#111116"/>
      ))}
      {/* Aisle labels */}
      <text x="208" y="56" fontSize="7" fill="#8888A0">Folyosó</text>
      <text x="208" y="83" fontSize="7" fill="#8888A0">Folyosó</text>
      <text x="208" y="110" fontSize="7" fill="#8888A0">Folyosó</text>

      {/* Loading docks — right side */}
      <rect x="248" y="40" width="22" height="28" rx="1" stroke={ACCENT} strokeWidth="1.2" fill="none"/>
      <text x="249" y="52" fontSize="6" fill={ACCENT}>Dok1</text>
      <rect x="248" y="78" width="22" height="28" rx="1" stroke={ACCENT} strokeWidth="1.2" fill="none"/>
      <text x="249" y="90" fontSize="6" fill={ACCENT}>Dok2</text>
      <rect x="248" y="116" width="22" height="28" rx="1" stroke={ACCENT} strokeWidth="1.2" fill="none"/>
      <text x="249" y="128" fontSize="6" fill={ACCENT}>Dok3</text>

      {/* Office area */}
      <rect x="18" y="148" width="60" height="34" rx="2" stroke="#2A2A35" strokeWidth="1" fill="#111116"/>
      <text x="35" y="168" fontSize="7" fill="#8888A0">Iroda</text>

      {/* Cameras */}
      <circle cx="10" cy="10" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M10 10 L38 34 L20 45 Z" fill={ACCENT} opacity="0.07"/>
      <circle cx="270" cy="10" r="5" fill={ACCENT} opacity="0.9"/>
      <path d="M270 10 L242 34 L260 45 Z" fill={ACCENT} opacity="0.07"/>
      <circle cx="10" cy="190" r="5" fill={ACCENT} opacity="0.7"/>
      <circle cx="270" cy="190" r="5" fill={ACCENT} opacity="0.7"/>
      {/* Internal aisle cameras */}
      <circle cx="210" cy="45" r="3" fill={ACCENT} opacity="0.6"/>
      <circle cx="210" cy="100" r="3" fill={ACCENT} opacity="0.6"/>
      <circle cx="210" cy="155" r="3" fill={ACCENT} opacity="0.6"/>

      {/* Entry point */}
      <rect x="10" y="60" width="14" height="22" rx="1" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeWidth="0.8"/>
      <circle cx="17" cy="71" r="2" fill={ACCENT} opacity="0.7"/>

      {/* Legend */}
      <circle cx="18" cy="196" r="3" fill={ACCENT}/>
      <text x="25" y="199" fontSize="7" fill="#8888A0">Kamera</text>
      <rect x="85" y="193" width="14" height="6" rx="1" stroke={ACCENT} strokeWidth="0.8" fill="none"/>
      <text x="103" y="199" fontSize="7" fill="#8888A0">Rakodókapu</text>
    </svg>
    <p className="text-center text-xs text-muted mt-3">Felülnézeti diagram — polcsorok, közlekedők, rakodókapuk és bejárat</p>
  </div>
);

export default function RaktarCsarnokPage() {
  return (
    <SolutionLayout
      breadcrumbs={breadcrumbs}
      eyebrow="B2B — Raktár / Csarnok"
      h1="Raktár és csarnok:"
      h1Accent="nagy terület, átgondolt lefedettség"
      intro="Rakodókapuk, kültér, belső közlekedők és kritikus pontok kamera- és beléptetési kialakítása. Nagyméretű tereinél is egységes képet kap a rendszer."
      visual={<Visual />}
      features={[
        'Kültéri és rakodókapu kamerafedezet',
        'Belső folyosók és kritikus pontok megfigyelése',
        'PTZ (forgó-dönthető-zoomolható) kamerák nagy területhez',
        'Éjjellátó és hőkamerás megoldások',
        'Beléptetési rendszer az iroda és raktártér szétválasztáshoz',
        'Mozgásérzékelős riasztó zárt üzemelési időre',
      ]}
      ctaPrimary={{ label: 'Raktár felmérés kérése', href: '/ingyenes-felmeres?request_type=uj-rendszer&property_type=raktar' }}
      ctaSecondary={{ label: 'Árkalkulátor', href: '/kalkulator' }}
      relatedLinks={[
        { label: 'Telephely biztonság →', href: '/megoldasok/telephely-biztonsag' },
        { label: 'Kamerarendszerek →', href: '/szolgaltatasok/kamerarendszerek' },
        { label: 'B2B partnerség →', href: '/partneri-egyuttmukodes' },
      ]}
      structuredData={structuredData}
    />
  );
}
