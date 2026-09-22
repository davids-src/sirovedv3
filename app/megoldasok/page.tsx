import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldPlus, Expand, Building2, Home, Warehouse, Store } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Biztonságtechnikai megoldások helyzet és ingatlan szerint | SIRO-VÉD',
  description:
    'Új biztonságtechnikai rendszer, meglévő bővítése, hibajavítás vagy karbantartás — válassza az Önnek megfelelő megoldást lakóingatlanra és vállalkozásra egyaránt.',
  alternates: { canonical: 'https://siroved.hu/megoldasok' },
  openGraph: {
    title: 'Biztonságtechnikai megoldások helyzet és ingatlan szerint | SIRO-VÉD',
    description:
      'Új rendszer, bővítés, javítás vagy karbantartás — válassza azt, ahol most tart. Lakóingatlan és vállalkozás egyaránt.',
    url: 'https://siroved.hu/megoldasok',
    type: 'website',
    locale: 'hu_HU',
  },
};

const ACCENT = '#1A6BE8';

const SOLUTION_CARDS = [
  {
    href: '/megoldasok/uj-biztonsagtechnikai-rendszer',
    Icon: ShieldPlus,
    title: 'Új biztonságtechnikai rendszer',
    desc: 'Tervezés és kivitelezés nulláról — kamera, riasztó, beléptetés összehangoltan.',
    id: 'megoldasok-uj',
  },
  {
    href: '/megoldasok/rendszerbovites',
    Icon: Expand,
    title: 'Meglévő rendszer bővítése',
    desc: 'Új kamerák, érzékelők, zónák — a meglévő rendszer lehetőségeihez igazítva.',
    id: 'megoldasok-bovites',
  },
  {
    href: '/megoldasok/telephely-biztonsag',
    Icon: Building2,
    title: 'Telephely biztonság',
    desc: 'Belépéstől a kültéri lefedettségig — üzleti telephelyek átfogó védelme.',
    id: 'megoldasok-telephely',
  },
  {
    href: '/megoldasok/csaladi-haz-biztonsag',
    Icon: Home,
    title: 'Családi ház biztonság',
    desc: 'Kültéri és beltéri kamera, riasztó, kapu — egyszerűen kezelhető rendszer.',
    id: 'megoldasok-csaladi-haz',
  },
  {
    href: '/megoldasok/raktar-csarnok-biztonsag',
    Icon: Warehouse,
    title: 'Raktár és csarnok',
    desc: 'Nagy terület, átgondolt lefedettség — rakodókapuk, kültér, belső zónák.',
    id: 'megoldasok-raktar',
  },
  {
    href: '/megoldasok/uzlet-rendelo-biztonsag',
    Icon: Store,
    title: 'Üzlet és rendelő',
    desc: 'Bejárat, ügyféltér, személyzeti területek és zárás utáni védelem összehangoltan.',
    id: 'megoldasok-uzlet',
  },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Főoldal', item: 'https://siroved.hu' },
    { '@type': 'ListItem', position: 2, name: 'Megoldások', item: 'https://siroved.hu/megoldasok' },
  ],
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Biztonságtechnikai megoldások',
  provider: { '@type': 'LocalBusiness', name: 'SIRO-VÉD (SIROTECH Kft.)', url: 'https://siroved.hu' },
  areaServed: 'Fejér megye, Budapest, Közép-Dunántúl',
  description: 'Új rendszer telepítés, meglévő bővítés, hibajavítás és karbantartás lakóingatlanoknak és vállalkozásoknak.',
};

export default function MegoldasokPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <main className="pt-24 pb-28 min-h-screen bg-bg text-ink">
        <div className="max-w-site mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-muted">
              <li><Link href="/" className="hover:text-ink transition-colors">Főoldal</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-ink" aria-current="page">Megoldások</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#2A2A35] text-muted mb-6">
              Megoldásközpont
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
              Biztonságtechnikai megoldások<br className="hidden lg:block" />
              <span style={{ color: ACCENT }}> helyzet és ingatlan szerint</span>
            </h1>
            <p className="text-muted text-xl leading-[1.7] max-w-2xl">
              Új rendszer, bővítés, javítás vagy hosszú távú karbantartás — válassza azt, ahol most tart.
            </p>
          </div>

          {/* Solution cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {SOLUTION_CARDS.map(({ href, Icon, title, desc, id }) => (
              <Link
                key={id}
                href={href}
                id={id}
                className="group flex flex-col p-7 rounded-xl border border-[#2A2A35] bg-[#111116] hover:border-[#1A6BE8]/60 hover:shadow-[0_0_28px_-8px_#1A6BE8] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#1A6BE8]/15 transition-colors duration-300"
                  style={{ background: `${ACCENT}10` }}
                >
                  <Icon size={22} strokeWidth={1.5} style={{ color: ACCENT }} />
                </div>
                <h2 className="font-display text-base font-semibold text-ink mb-2 leading-snug">{title}</h2>
                <p className="text-sm text-muted leading-[1.7] flex-1 mb-5">{desc}</p>
                <div
                  className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200"
                  style={{ color: ACCENT }}
                >
                  Részletek <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>

          {/* Internal links */}
          <div className="border-t border-[#2A2A35]/50 pt-10 flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-muted hover:text-ink transition-colors">← Vissza a főoldalra</Link>
            <Link href="/kalkulator" className="text-[#1A6BE8] hover:underline">Árkalkulátor →</Link>
            <Link href="/ingyenes-felmeres" className="text-[#1A6BE8] hover:underline">Ingyenes felmérés →</Link>
            <Link href="/kapcsolat" className="text-muted hover:text-ink transition-colors">Kapcsolat</Link>
          </div>
        </div>
      </main>
    </>
  );
}
