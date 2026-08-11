import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeSecurityAssessmentSection from '@/components/FreeSecurityAssessmentSection';
import Link from 'next/link';
import {
  Shield,
  Camera,
  Bell,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ClipboardCheck,
  MapPin,
  FileSpreadsheet,
  UserCheck,
} from 'lucide-react';

const ACCENT = '#1A6BE8';

export const metadata: Metadata = {
  title: 'Ingyenes Vagyonvédelmi Állapotfelmérés | Kamera és Riasztórendszerek | SIRO-VÉD',
  description:
    'Ingyenes, kötelezettségmentes helyszíni vagyonvédelmi biztonságtechnikai állapotfelmérés. Meglévő kamera- és riasztórendszerének, valamint ingatlanja védtelen pontjainak feltérképezése árazott fejlesztési javaslattal.',
  keywords: [
    'ingyenes vagyonvédelmi felmérés',
    'ingyenes biztonságtechnikai állapotfelmérés',
    'ingyenes kamerarendszer felmérés',
    'ingyenes riasztórendszer felmérés',
    'vagyonvédelmi audit ingyenes',
    'kötelezettségmentes biztonságtechnikai felmérés',
    'betörésvédelem felmérés cégeknek',
    'kamerarendszer állapotfelmérés vállalkozásoknak',
    'riasztórendszer állapotfelmérés',
    'vagyonvédelmi kockázatfelmérés',
    'biztonságtechnikai kockázatelemzés',
    'kamerarendszer telepítés',
    'kamerarendszer telepítés vállalati',
    'IP kamera rendszer',
    'riasztórendszer telepítés',
    'beléptetőrendszer telepítés',
    'biztonságtechnika kis cég',
    'CCTV rendszer kiépítés',
    'vállalati kamerarendszer',
    'riasztó és kamera telepítés',
    'biztonsági kamera rendszer kiépítés',
    'távfelügyelet telepítés',
    'okos riasztórendszer',
    'videomegfigyelő rendszer vállalati',
    'integrált biztonságtechnika',
    'riasztórendszer karbantartás',
    'kamerarendszer bővítés',
    'IP kamerarendszer telepítés',
    'betörésjelző rendszer',
    'okos beléptető rendszer',
    'biztonságtechnika karbantartás',
    'kamerarendszer távfelügyelettel',
    'vállalati biztonságtechnikai audit',
    'vagyonvédelem cégeknek',
    'vagyonvédelem vállalkozásoknak',
    'vagyonvédelem magánszemélyeknek',
    'betörésvédelem otthon',
    'betörésvédelem üzlet',
    'betörésvédelem telephely',
    'biztonságtechnika Budapest',
    'biztonságtechnika Székesfehérvár',
    'biztonságtechnika Debrecen',
    'biztonságtechnika Szeged',
    'biztonságtechnika Pécs',
    'biztonságtechnika Győr',
    'biztonságtechnika Miskolc',
    'biztonságtechnika Fejér megye',
    'biztonságtechnika Pest megye',
    'kamerarendszer telepítés Budapest',
    'kamerarendszer telepítés Székesfehérvár',
    'kamerarendszer telepítés Debrecen',
    'kamerarendszer telepítés Szeged',
    'kamerarendszer telepítés Győr',
    'riasztórendszer telepítés Budapest',
    'riasztórendszer telepítés Székesfehérvár',
    'riasztórendszer telepítés Pest megye',
    'vagyonvédelmi felmérés Budapest',
    'vagyonvédelmi felmérés Székesfehérvár',
    'vagyonvédelmi felmérés Fejér megye',
    'vagyonvédelmi felmérés országosan',
    'ingyenes kamerarendszer felmérés Budapest',
    'ingyenes riasztórendszer felmérés Budapest',
  ],
  openGraph: {
    title: 'Ingyenes Vagyonvédelmi Állapotfelmérés | SIRO-VÉD',
    description:
      'Feltérképezzük meglévő kamera- és riasztórendszerét, valamint az ingatlan védtelen pontjait helyszíni felméréssel.',
    type: 'website',
    locale: 'hu_HU',
  },
};

const processSteps = [
  {
    step: '1. Jelentkezés',
    title: 'Kapcsolatfelvétel & Időpont',
    desc: 'Kitölti a rövid űrlapot, mi pedig 24 órán belül felvesszük Önnel a kapcsolatot a helyszíni időpont-egyeztetésre.',
    icon: ClipboardCheck,
  },
  {
    step: '2. Helyszíni felmérés',
    title: 'Fizikai Ellenőrzés & Átvizsgálás',
    desc: 'Átnézzük a meglévő kamera- és riasztórendszert, valamint az ingatlan fizikai védtelen pontjait és kockázati zónáit.',
    icon: MapPin,
  },
  {
    step: '3. Kiértékelés',
    title: 'Elemzés & Árazott Javaslat',
    desc: 'Elkészítjük a részletes elemzést és a konkrét fejlesztési javaslatot, világos és átlátható becsült költségekkel.',
    icon: FileSpreadsheet,
  },
  {
    step: '4. Döntés Önnél',
    title: 'Kötelezettségmentes Döntés',
    desc: 'Megkapja az eredményt és az ajánlatot — Ön dönti el, kér-e tőlünk további munkát. Nincs nyomás, nincs automatikus szerződés.',
    icon: UserCheck,
  },
];

export default function IngyenesFelmeresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Ingyenes Vagyonvédelmi Biztonságtechnikai Állapotfelmérés',
            provider: {
              '@type': 'SecurityService',
              name: 'SIRO-VÉD',
              url: 'https://siroved.hu',
            },
            serviceType: 'Vagyonvédelmi Biztonságtechnikai Audit',
            description:
              'Ingyenes helyszíni felmérés meglévő kamera- és riasztórendszerek felülvizsgálatára, ingatlanok védtelen pontjainak azonosítására.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'HUF',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      <Navbar />

      <main className="pt-16">
        {/* Főoldali kiemelt felmérés szekció */}
        <FreeSecurityAssessmentSection variant="full" />

        {/* ── Hogyan zajlik ez pontosan? (4 lépéses folyamatleírás) ── */}
        <section className="py-24 bg-[#0E0E12] border-t border-[#2A2A35]/50 relative overflow-hidden">
          <div className="max-w-site mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="eyebrow-chip">Átlátható folyamat</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-[-0.03em]">
                Hogyan zajlik ez pontosan?
              </h2>
              <p className="text-muted text-base sm:text-lg leading-[1.7]">
                A felmérés menetét úgy alakítottuk ki, hogy az Ön számára a legkevesebb időráfordítással járjon, és maximális szakmai értéket nyújtson.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map(({ step, title, desc, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#2A2A35] bg-surface p-7 flex flex-col justify-between hover:border-[#1A6BE8]/40 transition-colors duration-200 relative group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#1A6BE8] bg-[#1A6BE8]/10 px-3 py-1 rounded-full border border-[#1A6BE8]/20">
                        {step}
                      </span>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${ACCENT}12` }}
                      >
                        <Icon size={20} style={{ color: ACCENT }} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-ink group-hover:text-[#1A6BE8] transition-colors duration-150">
                      {title}
                    </h3>

                    <p className="text-muted text-sm leading-[1.7]">{desc}</p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#2A2A35]/50 font-mono text-[11px] text-muted flex items-center gap-1">
                    <CheckCircle2 size={12} style={{ color: ACCENT }} />
                    <span>Lépés {idx + 1} / 4</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Miért kulcsfontosságú a helyszíni felmérés? ── */}
        <section className="py-24 bg-bg border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted text-base leading-[1.75]">
                  Részletesen átvizsgáljuk a kamerák látószögeit, az éjjellátó megvilágítást, a riasztóérzékelők elhelyezését és az épület fizikai védelmi pontjait.
                </p>
                <p className="text-muted text-base leading-[1.75]">
                  Szakembereink a helyszínen ellenőrzik a kábelezést, a rögzítők tárolókapacitását, az akkumulátoros áramkimaradás-védelmet, valamint a biztosítói minimumkövetelmények teljesülését.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { title: 'Kamera vakfolt keresés', sub: 'Látószögek és fényviszonyok' },
                    { title: 'Riasztó érzékelő teszt', sub: 'Mozgás- és nyitásérzékelők' },
                    { title: 'Biztosítói ellenőrzés', sub: 'Minimumkövetelmény teszt' },
                    { title: 'Rendszer felülvizsgálat', sub: 'Kábelek és rögzítési kapacitás' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-surface border border-[#2A2A35] space-y-1"
                    >
                      <h4 className="font-display font-semibold text-sm text-ink">{item.title}</h4>
                      <p className="text-xs text-muted font-mono">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical Overview Box */}
              <div
                className="rounded-xl border bg-surface p-8 space-y-6 relative overflow-hidden"
                style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 60px -20px ${ACCENT}` }}
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#1A6BE8] uppercase tracking-wider">
                    Összegzés & Garancia
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Mit kap kézhez a felmérés után?
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Részletes jegyzőkönyvet a meglévő kamera- és riasztórendszer állapotáról',
                    'Vízszintes és függőleges kockázati zónatérképet a védtelen nyílászárókról',
                    'Két alternatív fejlesztési javaslatot (költséghatékony vs. maximális védelem)',
                    'Konkrét, tételes árajánlatot rejtett költségek nélkül',
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${ACCENT}20` }}
                      >
                        <CheckCircle2 size={14} style={{ color: ACCENT }} />
                      </div>
                      <p className="text-sm text-ink font-medium leading-[1.6]">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#2A2A35]">
                  <Link href="/kapcsolat?forras=ingyenes-felmeres-aloldal" className="group block">
                    <button className="w-full flex items-center justify-center gap-2.5 bg-[#1A6BE8] text-white font-semibold rounded-lg py-3.5 text-sm hover:scale-[1.01] transition-transform shadow-[0_0_28px_-12px_#1A6BE8]">
                      <span>Kérem az ingyenes helyszíni felmérést</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA Section ── */}
        <section className="py-24 bg-[#0E0E12] border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6 text-center">
            <div
              className="max-w-4xl mx-auto rounded-2xl border bg-surface p-10 lg:p-14 relative overflow-hidden space-y-6"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 80px -20px ${ACCENT}` }}
            >
              <span className="eyebrow-chip inline-block">Vegye kézbe ingatlana védelmét</span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-[-0.02em]">
                Ne várja meg, míg egy káresemény rávilágít a védtelen pontokra!
              </h2>

              <p className="text-muted text-base sm:text-lg leading-[1.7] max-w-2xl mx-auto">
                Igényeljen ingyenes vagyonvédelmi biztonságtechnikai állapotfelmérést még ma, kötelezettségek nélkül.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/kapcsolat?forras=ingyenes-felmeres-aloldal" className="group w-full sm:w-auto">
                  <button className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#1A6BE8] text-white font-semibold rounded-lg px-8 py-4 text-base hover:scale-[1.02] transition-transform shadow-[0_0_30px_-10px_#1A6BE8]">
                    <span>Időpontot kérek a felmérésre</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
