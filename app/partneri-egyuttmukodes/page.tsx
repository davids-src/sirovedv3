import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, Camera, Bell, Flame, Key, Wrench, Check, ExternalLink, ChevronDown } from 'lucide-react';

// ─────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Biztonságtechnikai alvállalkozó | B2B partner — SIRO-VÉD',
  description:
    'Gyengeáramú és biztonságtechnikai szakági alvállalkozás generálkivitelezőknek, villanyszerelő és biztonságtechnikai cégeknek. Kamera, riasztó, tűzjelző kivitelezés Fejér megyében, Budapesten és a Közép-Dunántúlon.',
  keywords: [
    'biztonságtechnikai alvállalkozó',
    'gyengeáramú alvállalkozó',
    'szakági alvállalkozó',
    'alvállalkozó generálkivitelezőnek',
    'gyengeáramú kivitelezés alvállalkozásban',
    'kamerarendszer kivitelezés alvállalkozó',
    'tűzjelző kivitelezés alvállalkozó',
    'beléptetőrendszer alvállalkozó',
    'biztonságtechnikai kapacitásbővítés',
    'gyengeáramú szakág generálkivitelezéshez',
    'kamerarendszer szerelő kapacitás',
    'biztonságtechnikai partnercég',
    'white label biztonságtechnika',
    'biztonságtechnikai alvállalkozó Fejér megye',
    'gyengeáramú alvállalkozó Budapest',
    'szakági partner Közép-Dunántúl',
    'riasztórendszer kivitelezés alvállalkozó',
    'strukturált kábelezés alvállalkozó',
    'nyomvonal kivitelezés gyengeáram',
    'biztonságtechnikai szerelő bérbeadás',
  ],
  alternates: {
    canonical: 'https://siroved.hu/partneri-egyuttmukodes',
  },
  openGraph: {
    title: 'Biztonságtechnikai szakági partner — SIRO-VÉD',
    description:
      'Gyengeáramú kivitelezés alvállalkozóként generálkivitelezőknek és szakági cégeknek.',
    type: 'website',
    locale: 'hu_HU',
  },
};

// ─────────────────────────────────────────────
// Adatok
// ─────────────────────────────────────────────

const ACCENT = '#1A6BE8';

// Referencia tömb — jelenleg üres, feltételes megjelenítés
const references: {
  partner: string;
  egyuttmukodes: string;
  idezet?: string;
}[] = [];

// GYIK adatok
const faqs = [
  {
    kerdes: 'Milyen területen vállalnak alvállalkozói munkát?',
    valasz:
      'Fejér megyében, Budapesten és a Közép-Dunántúlon vállalunk helyszíni kivitelezést. Nagyobb projekt esetén ettől távolabb is egyeztethető.',
  },
  {
    kerdes: 'Mi történik, ha a projekt több embert igényel, mint amennyi a csapatuk?',
    valasz:
      'Felkészültünk a kapacitásbővítésre. Ha egy feladat több szerelőt kíván, bevont szakemberekkel bővítünk — a vállalt határidő ettől nem csúszik.',
  },
  {
    kerdes: 'Vállalják a csövezést is, vagy csak a kábelhúzást?',
    valasz:
      'Mindkettőt. A SIROVILL divíziónk végzi a villamos kivitelezést, így a nyomvonal kialakítása és a gyengeáramú behúzás ugyanannál a cégnél van.',
  },
  {
    kerdes: 'Dolgoznak a megrendelő arculatában?',
    valasz:
      'Igen, ha erre van szükség — az Önök logós munkaruhájában, az Önök csapataként jelenünk meg a helyszínen.',
  },
  {
    kerdes: 'Megkeresik később a mi megrendelőnket?',
    valasz: 'Nem. Az Önök megrendelője az Önöké marad.',
  },
  {
    kerdes: 'Milyen dokumentációt adnak át?',
    valasz:
      'Nyomvonalrajzot, eszközlistát, beállításokat és átadási jegyzőkönyvet — olyan formában, amit Önök továbbadhatnak a megrendelőnek.',
  },
];

// JSON-LD sémák
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.kerdes,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.valasz,
    },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Biztonságtechnikai alvállalkozói kivitelezés',
  serviceType: 'Biztonságtechnikai alvállalkozói kivitelezés',
  provider: {
    '@type': 'Organization',
    name: 'SIROTECH Informatikai és Biztonságtechnikai Kft.',
    url: 'https://siroved.hu',
    telephone: '+36702735532',
    email: 'skoda.david@sironic.hu',
  },
  areaServed: ['Fejér megye', 'Budapest', 'Közép-Dunántúl'],
  audience: {
    '@type': 'BusinessAudience',
    audienceType:
      'generálkivitelezők, villanyszerelő cégek, biztonságtechnikai cégek, ingatlanüzemeltetők',
  },
  description:
    'Kamera-, riasztó- és tűzjelző rendszerek kivitelezése alvállalkozóként — gyengeáramú szakágként egy nagyobb projektben, vagy kapacitáskiegészítésként.',
};

// ─────────────────────────────────────────────
// Kisegítő komponensek
// ─────────────────────────────────────────────

function EyebrowChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-[2px] px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] leading-[1.4]"
      style={{
        border: `1px solid ${ACCENT}40`,
        background: `${ACCENT}12`,
        color: ACCENT,
      }}
    >
      {children}
    </span>
  );
}

function SectionWrapper({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-24 border-t border-[#2A2A35]/50 ${className}`}
    >
      <div className="max-w-site mx-auto px-6">{children}</div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Oldal
// ─────────────────────────────────────────────

export default function PartneriEgyuttmukodes() {
  return (
    <>
      {/* JSON-LD strukturált adatok */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar />

      <main className="pt-16">

        {/* ══════════════════════════════════════
            1. HERO
        ══════════════════════════════════════ */}
        <section className="relative py-28 bg-bg overflow-hidden">
          {/* Grid overlay */}
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${ACCENT}14 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10 max-w-site mx-auto px-6">
            <EyebrowChip>B2B EGYÜTTMŰKÖDÉS</EyebrowChip>

            <h1 className="font-display mt-6 text-4xl lg:text-5xl font-semibold text-ink tracking-[-0.02em] leading-[1.1] max-w-3xl">
              Szakági partner generálkivitelezőknek, villanyszerelőknek és biztonságtechnikai
              cégeknek
            </h1>

            <p className="mt-6 text-muted text-lg leading-[1.75] max-w-2xl">
              Kamera-, riasztó- és tűzjelző rendszerek kivitelezését vállaljuk alvállalkozóként —
              gyengeáramú szakágként egy nagyobb projektben, vagy kapacitáskiegészítésként, amikor
              az Önök csapata tele van.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#kapcsolat"
                className="inline-flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]"
              >
                Beszéljünk egy projektről
              </Link>
              <Link
                href="#amit-vallalunk"
                className="inline-flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150"
              >
                Mit vállalunk
              </Link>
            </div>

            {/* Statisztika sáv */}
            <div className="mt-16 flex flex-col sm:flex-row gap-8 sm:gap-16">
              {[
                { ertek: 'Erős- és gyengeáram', cimke: 'EGY KÉZBEN' },
                { ertek: 'Fejér m. · Budapest', cimke: 'KÖZÉP-DUNÁNTÚL' },
                { ertek: '1 munkanap', cimke: 'VÁLASZIDŐ MEGKERESÉSRE' },
              ].map((stat) => (
                <div key={stat.cimke}>
                  <p className="font-display text-xl font-semibold text-ink">{stat.ertek}</p>
                  <p className="font-mono text-[11px] font-semibold tracking-widest text-muted uppercase mt-1">
                    {stat.cimke}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. KIKKEL DOLGOZUNK EGYÜTT
        ══════════════════════════════════════ */}
        <SectionWrapper className="bg-[#111116]/50">
          <EyebrowChip>KIKKEL DOLGOZUNK</EyebrowChip>
          <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
            Nem mindenki ugyanazért keres minket
          </h2>
          <p className="text-muted text-lg leading-[1.7] max-w-2xl mb-12">
            Más kell egy generálkivitelezőnek, mint egy villanyszerelő cégnek vagy egy nagyobb
            biztonságtechnikai vállalkozásnak. Az alábbi négy helyzetben dolgozunk a leggyakrabban.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                cim: 'Generálkivitelezők',
                szoveg:
                  'Gyengeáramú szakágként kapcsolódunk be a projektbe. Ha a villamos munka is nálunk van, akkor a csövezés és a behúzás között nincs kivel vitatkozni — mindkettőt mi csináljuk.',
              },
              {
                cim: 'Villanyszerelő cégek',
                szoveg:
                  'Ha a megrendelő kamerát, riasztót vagy beléptetést is kér, de erre nincs emberük. Megcsináljuk a gyengeáramú részt, Önök viszik a projektet.',
              },
              {
                cim: 'Biztonságtechnikai cégek',
                szoveg:
                  'Szerelő kapacitás túlterhelt időszakban, vagy olyan területen, ahova Önöknek távoli a kiszállás. Ismerjük a rendszereket, nem kell betanítani minket.',
              },
              {
                cim: 'Ingatlanüzemeltetők, facility cégek',
                szoveg:
                  'Több telephely karbantartása egy partnerrel. Meglévő rendszerek javítását és bővítését is vállaljuk, nem csak új kiépítést.',
              },
            ].map((kartya) => (
              <div
                key={kartya.cim}
                className="rounded-lg border border-[#2A2A35] bg-surface p-8 hover:border-[#C0C0D0]/30 transition-colors duration-150"
              >
                <h3 className="font-display text-base font-semibold text-ink mb-3">
                  {kartya.cim}
                </h3>
                <p className="text-sm text-muted leading-[1.75]">{kartya.szoveg}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* ══════════════════════════════════════
            3. AMIT VÁLLALUNK
        ══════════════════════════════════════ */}
        <SectionWrapper id="amit-vallalunk" className="bg-bg">
          <EyebrowChip>SZAKÁGI TARTALOM</EyebrowChip>
          <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
            Amit vállalunk
          </h2>
          <p className="text-muted text-lg leading-[1.7] max-w-2xl mb-12">
            A nyomvonaltól a beüzemelésig, vagy annak bármelyik szakasza külön.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cim: 'Kamerarendszerek',
                icon: Camera,
                elemek: [
                  'IP kamerarendszerek tervezése és kivitelezése',
                  'NVR-es rögzítők telepítése, konfigurálása',
                  'Meglévő rendszer bővítése, korszerűsítése',
                  'Éjjellátó és hőkamerás megoldások',
                ],
              },
              {
                cim: 'Riasztó és beléptetés',
                icon: Bell,
                elemek: [
                  'Behatolásjelző rendszerek kiépítése',
                  'Nyitás- és mozgásérzékelők telepítése',
                  'Beléptetőrendszerek, kaputelefon',
                  'Távfelügyeletre való felkészítés',
                ],
              },
              {
                cim: 'Tűzjelző',
                icon: Flame,
                elemek: [
                  'Beépített tűzjelző rendszerek kiépítése',
                  'MSZ EN 54 szerinti kivitelezés',
                  'Rendszeres karbantartás, felülvizsgálati előkészítés',
                ],
              },
              {
                cim: 'Kivitelezési munka',
                icon: Wrench,
                elemek: [
                  'Nyomvonalkialakítás, gégecsövezés, kötődobozok',
                  'Kábelhúzás, szerelvényezés',
                  'Rack-szerelés, patch panel bekötés',
                  'Beüzemelés, átadási dokumentáció',
                ],
              },
            ].map((csoport) => {
              const Icon = csoport.icon;
              return (
                <div
                  key={csoport.cim}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-7 hover:border-[#C0C0D0]/30 transition-colors duration-150"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: `${ACCENT}12` }}
                  >
                    <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-ink mb-4">{csoport.cim}</h3>
                  <ul className="space-y-2">
                    {csoport.elemek.map((elem) => (
                      <li key={elem} className="flex items-start gap-2">
                        <Check
                          size={13}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: ACCENT }}
                        />
                        <span className="text-xs text-muted leading-[1.7]">{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* ══════════════════════════════════════
            4. EGY KÉZBŐL
        ══════════════════════════════════════ */}
        <SectionWrapper className="bg-[#111116]/50">
          <EyebrowChip>AMIBEN MÁSOK VAGYUNK</EyebrowChip>
          <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
            Nem kell két szakágat összehangolnia
          </h2>
          <p className="text-muted text-lg leading-[1.7] max-w-2xl mb-8">
            A gyengeáramú kivitelezés klasszikus vitája, hogy ki hibázott a csövezésnél: az
            erősáramos vagy a biztonságtechnikus. Ezek a viták órákat visznek el a kooperációkon,
            és a generálkivitelezőnek kell eldöntenie, kinek van igaza.
          </p>

          {/* Kiemelt mondat */}
          <div
            className="rounded-lg border p-6 mb-12 max-w-2xl"
            style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}
          >
            <p className="font-display text-lg font-semibold text-ink leading-[1.5]">
              Nálunk ez a vita fel sem merül, mert a csövet és a kábelt is mi húzzuk.
            </p>
          </div>

          {/* Entitás-megnevezés az AI-crawlereknek */}
          <p className="text-muted text-sm mb-10 leading-[1.7]">
            A SIRO-VÉD a SIROTECH Informatikai és Biztonságtechnikai Kft. biztonságtechnikai
            divíziója. Egy szerződés, egy ütemezés, egy kapcsolattartó — akkor is, ha a projektben
            mindhárom szakág szerepel.
          </p>

          {/* Három divízió */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                nev: 'SIRO-VÉD',
                szin: '#1A6BE8',
                terulet: 'Gyengeáram, biztonságtechnika',
                leiras: 'Kamera, riasztó, tűzjelző, beléptetés',
                href: null,
              },
              {
                nev: 'SIROVILL',
                szin: '#F5B81C',
                terulet: 'Erősáram, villanyszerelés',
                leiras: 'Nyomvonal, csövezés, épületvillamosság',
                href: 'https://sirovill.hu',
              },
              {
                nev: 'SIRONIC',
                szin: '#E8271A',
                terulet: 'Informatika, hálózat',
                leiras: 'Strukturált kábelezés, rack, aktív eszközök',
                href: 'https://sironic.eu',
              },
            ].map((div) => {
              const inner = (
                <div
                  className="rounded-lg border border-[#2A2A35] bg-surface p-7 h-full transition-all duration-300 hover:[border-color:var(--d-color)] hover:[box-shadow:0_0_28px_-12px_var(--d-color)]"
                  style={{ '--d-color': div.szin } as React.CSSProperties}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: div.szin }}
                    />
                    <span
                      className="font-mono text-sm tracking-widest font-bold uppercase"
                      style={{ color: div.szin }}
                    >
                      {div.nev}
                    </span>
                  </div>
                  <p className="font-display text-sm font-semibold text-ink mb-1">{div.terulet}</p>
                  <p className="text-xs text-muted leading-[1.7]">{div.leiras}</p>
                  {div.href && (
                    <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: div.szin }}>
                      <ExternalLink size={12} />
                      {div.href.replace('https://', '')}
                    </div>
                  )}
                </div>
              );

              return div.href ? (
                <a
                  key={div.nev}
                  href={div.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {inner}
                </a>
              ) : (
                <div key={div.nev} className="h-full">
                  {inner}
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* ══════════════════════════════════════
            5. AHOGYAN EGYÜTT DOLGOZUNK
        ══════════════════════════════════════ */}
        <SectionWrapper className="bg-bg">
          <EyebrowChip>MŰKÖDÉS</EyebrowChip>
          <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15] mb-12">
            Ahogyan együtt dolgozunk
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
            {[
              {
                cim: 'Az Önök ütemezéséhez igazodunk',
                szoveg:
                  'A kooperációkon részt veszünk, és a munkát a projekt ütemtervéhez igazítjuk. Nem mi mondjuk meg, mikor érünk rá.',
              },
              {
                cim: 'Időben szólunk, ha gond van',
                szoveg:
                  'Ha bármi veszélyezteti a határidőt vagy a műszaki tartalmat, azt azonnal jelezzük — nem az átadás előtti napon derül ki.',
              },
              {
                cim: 'Felkészültünk a kapacitásbővítésre',
                szoveg:
                  'Ha egy projekt több embert kíván, mint amennyit a saját csapatunk ad, bevont szakemberekkel bővítünk. A vállalt határidő ettől nem csúszik.',
              },
              {
                cim: 'Dokumentált átadás',
                szoveg:
                  'Nyomvonalrajz, eszközlista, beállítások, átadási jegyzőkönyv. Amit Önök továbbadhatnak a megrendelőnek.',
              },
              {
                cim: 'Az Önök partnereként jelenünk meg',
                szoveg:
                  'A helyszínen nem külön cégként mutatkozunk be a megrendelő előtt, hanem az Önök projektjének részeként.',
              },
              {
                cim: 'Ha az Önök arculatában kell dolgoznunk',
                szoveg:
                  'Van, aki azt kéri, hogy a helyszínen az ő nevében és arculatában jelenjünk meg — saját logós munkaruhában, az ő csapataként. Ezt is vállaljuk, ha erre van szükség.',
              },
            ].map((pont, i) => (
              <div key={pont.cim} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded flex items-center justify-center font-mono text-xs font-semibold mt-0.5"
                  style={{ background: `${ACCENT}15`, color: ACCENT }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink mb-1.5">{pont.cim}</h3>
                  <p className="text-sm text-muted leading-[1.75]">{pont.szoveg}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* ══════════════════════════════════════
            6. ENGEDÉLYEK ÉS BIZTOSÍTÁS
        ══════════════════════════════════════ */}
        <SectionWrapper className="bg-[#111116]/50">
          <EyebrowChip>HÁTTÉR</EyebrowChip>
          <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
            Engedélyek és biztosítás
          </h2>
          <p className="text-muted text-lg leading-[1.7] max-w-2xl mb-10">
            Alvállalkozóként az Önök felelőssége is, hogy kit visznek a helyszínre. Ezért ezeket
            előre kiírjuk.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                cimke: 'Rendőrhatósági biztonságtechnikai engedély',
                ertek: '07010-822/7987/2026. SZv.',
              },
              {
                cimke: 'Építőipari nyilvántartási szám',
                ertek: '17C03049',
              },
              {
                cimke: 'Felelősségbiztosítás',
                ertek: 'Rendelkezünk',
              },
              {
                cimke: 'Cégjegyzékszám',
                ertek: '07-09-037603',
              },
            ].map((elem) => (
              <div
                key={elem.cimke}
                className="rounded-lg border border-[#2A2A35] bg-surface p-6"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted mb-2">
                  {elem.cimke}
                </p>
                <p className="font-display text-sm font-semibold text-ink leading-[1.5]">
                  {elem.ertek}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* ══════════════════════════════════════
            7. REFERENCIA — feltételes megjelenítés
        ══════════════════════════════════════ */}
        {references.length > 0 && (
          <SectionWrapper className="bg-bg">
            <EyebrowChip>EGYÜTTMŰKÖDÉSEINK</EyebrowChip>
            <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15] mb-12">
              Akikkel már dolgozunk
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {references.map((ref, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-7"
                >
                  <p className="font-display text-sm font-semibold text-ink mb-2">{ref.partner}</p>
                  <p className="text-xs text-muted leading-[1.7] mb-4">{ref.egyuttmukodes}</p>
                  {ref.idezet && (
                    <blockquote className="border-l-2 pl-4 italic text-xs text-muted/80 leading-[1.7]" style={{ borderColor: ACCENT }}>
                      &bdquo;{ref.idezet}&rdquo;
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </SectionWrapper>
        )}

        {/* ══════════════════════════════════════
            8. ÜGYFÉLVÉDELEM (egy sor, CTA fölött)
            + 9. ZÁRÓ CTA + KAPCSOLAT
        ══════════════════════════════════════ */}
        <SectionWrapper id="kapcsolat" className="bg-bg">
          {/* Ügyfélvédelem — visszafogott, egy sor */}
          <p className="text-center text-sm text-muted mb-12 italic">
            És ami talán a legfontosabb: az Önök megrendelője az Önöké marad. Nem keressük meg,
            nem ajánlkozunk náluk.
          </p>

          {/* Záró CTA keret */}
          <div
            className="relative overflow-hidden rounded-lg border p-12 lg:p-16 text-center"
            style={{
              borderColor: `${ACCENT}40`,
              boxShadow: `0 0 80px -20px ${ACCENT}`,
            }}
          >
            {/* Ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${ACCENT}10 0%, transparent 70%)`,
              }}
            />

            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                Beszéljünk
              </h2>
              <p className="text-muted text-lg leading-[1.7] mb-10">
                Akkor is, ha most nincs aktuális feladat. Egy bejáratott alvállalkozói kapcsolat
                általában akkor ér a legtöbbet, amikor már megvan, mielőtt szükség lenne rá.
              </p>

              {/* Közvetlen elérhetőség — nincs űrlap */}
              <div className="inline-flex flex-col items-center gap-4">
                <div>
                  <p className="font-display text-base font-semibold text-ink">Skoda Dávid</p>
                  <p className="text-sm text-muted mt-0.5">ügyvezető, SIROTECH Kft.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="mailto:skoda.david@sironic.hu"
                    className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]"
                  >
                    <Mail size={16} />
                    skoda.david@sironic.hu
                  </a>
                  <a
                    href="tel:+36702735532"
                    className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150"
                  >
                    <Phone size={16} />
                    +36 70 273 5532
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ══════════════════════════════════════
            10. GYIK
        ══════════════════════════════════════ */}
        <SectionWrapper className="bg-[#111116]/50">
          <EyebrowChip>GYIK</EyebrowChip>
          <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15] mb-12">
            Gyakori kérdések
          </h2>

          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-[#2A2A35] bg-surface overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#18181F] transition-colors duration-150">
                  <span className="font-display text-sm font-semibold text-ink leading-[1.5]">
                    {faq.kerdes}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-sm text-muted leading-[1.75]">{faq.valasz}</p>
                </div>
              </details>
            ))}
          </div>
        </SectionWrapper>

      </main>

      <Footer />
    </>
  );
}
