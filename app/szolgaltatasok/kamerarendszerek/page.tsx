'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Camera, Phone, CheckCircle, Eye, Shield, Zap, Home, Store, Building, Warehouse, ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FreeSecurityAssessmentSection from '@/components/FreeSecurityAssessmentSection';

const ACCENT = '#1A6BE8';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const processSteps = [
  { step: '1', title: 'Ingyenes konzultáció', desc: 'Feltérképezzük az igényeket, felmérjük a védendő területeket és a célokat.' },
  { step: '2', title: 'Helyszíni felmérés', desc: 'Személyesen felmérjük a helyszínt, meghatározzuk a kamerák optimális elhelyezését.' },
  { step: '3', title: 'Egyedi ajánlat', desc: 'Személyre szabott ajánlatot készítünk — áttekinthető árazással, meglepetések nélkül.' },
  { step: '4', title: 'Telepítés / javítás', desc: 'Szakszerűen elvégezzük a munkát, bemutatjuk a rendszer használatát és mindent rendben hagyunk.' },
  { step: '5', title: 'Utókövetés és támogatás', desc: 'Telepítés után is elérhetők vagyunk, ha kérdése van vagy segítségre van szüksége.' },
];

const faqs = [
  { q: 'Mennyibe kerül egy kamerarendszer telepítése?', a: 'Az ár az igényektől függ: a kamerák számától, típusától és a helyszín adottságaitól. Általában egy egyszerűbb, 4 kamerás rendszer telepítése 80 000–150 000 Ft körül kezdődik. Pontos árat ingyenes helyszíni felmérés után tudunk adni.' },
  { q: 'Mennyi idő alatt készül el a telepítés?', a: 'Egy tipikus, 4–8 kamerás rendszer telepítése általában 1–2 munkanap alatt elvégezhető. A felmérés és az ajánlat elkészítése 1 munkanapon belül megtörténik.' },
  { q: 'Meglévő kamerarendszert is lehet bővíteni vagy javítani?', a: 'Igen! Nem csak új rendszereket telepítünk — meglévő rendszerek hibáit is megjavítjuk, régi kamerákat cserélünk, és bővítéseket elvégzünk. Ha valami nem működik jól, keressen minket bizalommal.' },
  { q: 'Távolról is figyelhetem a kamerákat?', a: 'Igen. A modern IP kamerarendszerek lehetővé teszik, hogy okostelefonon vagy tableten, bárhonnan valós idejű képet lásson az ingatlanról. Ezt az alkalmazást a telepítés után bemutatjuk és beállítjuk Önnek.' },
  { q: 'Kell-e rendszeres karbantartás?', a: 'Évente egyszer érdemes átvilágítani a rendszert: ellenőrizni a kamerák képminőségét, a rögzítő működését és a szoftver frissítettségét. Mi ezt is vállaljuk.' },
];

export default function KamerarendszerekPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-bg pt-28 pb-20 overflow-hidden border-b border-[#2A2A35]/50">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }} />
          <div className="max-w-site mx-auto px-6 relative">
            <motion.span className="eyebrow-chip" initial="hidden" animate="visible" custom={0.05} variants={reveal}>
              Megfigyelőrendszerek
            </motion.span>
            <motion.h1
              className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}
            >
              Kamerarendszer telepítés<br />
              <span style={{ color: ACCENT }}>Fejér megyében, Budapesten és a Közép-Dunántúlon</span>
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-muted leading-[1.7] max-w-2xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}
            >
              Nem tudja, mi történik otthonában vagy üzletében, amikor nincs jelen? Egy jól megtervezett
              kamerarendszer megadja azt a nyugalmat, hogy mindig látja, mi folyik a környezetében.
            </motion.p>
            <motion.div className="mt-9 flex flex-col sm:flex-row gap-4" initial="hidden" animate="visible" custom={0.2} variants={reveal}>
              <Link href="/ingyenes-felmeres" className="group">
                <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                  Kérjen ingyenes felmérést
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                </button>
              </Link>
              <Link href="tel:+36702735532">
                <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                  <Phone size={16} className="text-muted" /> Hívjon most
                </button>
              </Link>
            </motion.div>
            <motion.p className="mt-5 text-sm text-muted" initial="hidden" animate="visible" custom={0.25} variants={reveal}>
              <span style={{ color: ACCENT }}>✓</span> Ingyenes felmérés &nbsp;·&nbsp;
              <span style={{ color: ACCENT }}>✓</span> Gyors kiszállás &nbsp;·&nbsp;
              <span style={{ color: ACCENT }}>✓</span> Javítást is vállalunk
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
                <span className="eyebrow-chip">Mi ez és miért kell?</span>
                <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                  Mi is az a kamerarendszer, és miért érdemes beszerezni?
                </h2>
                <p className="mt-5 text-muted text-sm leading-[1.7]">
                  A kamerarendszer (más szóval CCTV vagy megfigyelőrendszer) olyan kamerák és rögzítők hálózata,
                  amely folyamatosan felveszi és tárolja az ingatlan körüli, vagy belső terein zajló eseményeket.
                </p>
                <p className="mt-4 text-muted text-sm leading-[1.7]">
                  Az emberek többsége akkor gondol kamerára, amikor már megtörtént a baj — betörés, vandalizmus,
                  lopás. Pedig egy kamerarendszer nemcsak utólag segít, hanem <strong className="text-ink">megelőzi</strong> ezeket az
                  eseteket, hiszen a látható kamera önmagában is visszatartó erő.
                </p>
                <p className="mt-4 text-muted text-sm leading-[1.7]">
                  A mi munkánk az, hogy felmérjük az igényeket, és olyan rendszert tervezzünk, ami valóban
                  hasznára van — nem túl bonyolult, nem túl drága, de hatékony.
                </p>
              </motion.div>

              <motion.div
                className="rounded-lg border p-8"
                style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08`, boxShadow: `0 0 56px -14px ${ACCENT}` }}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.1} variants={reveal}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Eye, title: 'Széles látószög', desc: 'HD/4K, kültéri és beltéri' },
                    { icon: Shield, title: 'IP67 védelem', desc: 'Időjárásálló kivitel' },
                    { icon: Zap, title: 'Gyors telepítés', desc: '1–2 nap alatt kész' },
                    { icon: Camera, title: 'Smart AI', desc: 'Intelligens mozgásérzékelés' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="rounded border p-4" style={{ background: `${ACCENT}10`, borderColor: `${ACCENT}30` }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} className="mb-2" />
                      <h4 className="font-display font-semibold text-ink text-sm mb-0.5">{title}</h4>
                      <p className="text-xs text-muted">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Kinek ajánljuk */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Célcsoportok</span>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Kinek ajánljuk?</h2>
              <p className="mt-5 text-muted leading-[1.7]">Kamerarendszert szinte mindenhova érdemes telepíteni — legyen szó kis vagy nagy helyszínről.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: 'Családi ház', desc: 'Kapubejárat, garázs, kert — megvédjük az otthonát és nyugalmát.' },
                { icon: Store, title: 'Üzlethelyiség', desc: 'Bolt, kávézó, szalon — lássa, mi történik nap közben és zárás után is.' },
                { icon: Building, title: 'Iroda', desc: 'Bejárati ellenőrzés, folyosók, parkoló — teljes rálátás az irodára.' },
                { icon: Warehouse, title: 'Telephely', desc: 'Kisebb raktár vagy udvar — gazdaságos és hatékony megoldás.' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.07} variants={reveal}
                  whileHover={{ scale: 1.02, borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{ background: `${ACCENT}12` }}>
                    <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display font-semibold text-ink mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Előnyök */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Előnyök</span>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Mit nyer egy kamerarendszerrel?</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Biztonságérzet és nyugalom', desc: 'Bármikor, bárhonnan megnézheti, mi történik otthonában vagy üzletében. Ez egy különleges megnyugvás, amit nehéz más módon megszerezni.' },
                { title: 'Megelőzés és visszatartás', desc: 'A látható kamera önmagában visszatartja a betörőket, vandálokat. Statisztikák szerint a kamerával védett ingatlanok célpontul való kiszemelése jelentősen ritkább.' },
                { title: 'Kontroll és átláthatóság', desc: 'Ha valami történt, visszanézheti a felvételeket. Dolgozók, szállítások, látogatók — mindenről pontos képe van, ami vitás esetekben is segít.' },
              ].map(({ title, desc }, i) => (
                <motion.div key={title}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-8"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.08} variants={reveal}
                  whileHover={{ borderColor: `${ACCENT}40`, transition: { duration: 0.15 } }}
                >
                  <CheckCircle size={24} strokeWidth={1.5} style={{ color: ACCENT }} className="mb-5" />
                  <h3 className="font-display text-base font-semibold text-ink mb-3">{title}</h3>
                  <p className="text-muted text-sm leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Folyamat */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Folyamat</span>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Hogyan dolgozunk?</h2>
              <p className="mt-5 text-muted leading-[1.7]">Egyszerű, átlátható folyamat — Ön mindig tudja, mi a következő lépés.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {processSteps.map(({ step, title, desc }, i) => (
                <motion.div key={step}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.07} variants={reveal}
                >
                  <div className="w-9 h-9 rounded flex items-center justify-center mb-4 font-display font-bold text-sm text-white" style={{ background: ACCENT }}>{step}</div>
                  <h3 className="font-display font-semibold text-ink text-sm mb-2">{title}</h3>
                  <p className="text-muted text-xs leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingyenes Állapotfelmérés Banner */}
        <FreeSecurityAssessmentSection variant="compact" />

        {/* Helyi SEO */}
        <section className="py-16 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="max-w-3xl rounded-lg border p-8"
              style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
            >
              <h2 className="font-display text-xl font-semibold text-ink mb-4">Kamerarendszer telepítés Fejér megyében, Budapesten és a Közép-Dunántúlon</h2>
              <p className="text-muted text-sm leading-[1.7] mb-3">
                A SIROTECH Kft. (SIRO-VÉD) csapata Fejér megyében, Budapesten és a Közép-Dunántúl területén dolgozik. Ismerjük a helyi igényeket,
                gyorsan ki tudunk szállni, és személyesen is elérhető maradunk a munka elvégzése után is.
              </p>
              <p className="text-muted text-sm leading-[1.7]">
                Kisebb munkákat és egyedi hibaelhárításokat is rugalmasan vállalunk. Az első konzultáció és felmérés minden esetben ingyenes és kötelezettségmentes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Miért mi */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Miért mi?</span>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Miért érdemes minket választani?</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Gyors reagálás', desc: '1 munkanapon belüli kapcsolatfelvétel és gyors kiszállás.' },
                { title: 'Személyre szabott', desc: 'Nem sablonmegoldásokat adunk — minden helyszínhez egyedi rendszert tervezünk.' },
                { title: 'Javítást is vállalunk', desc: 'Nem csak új telepítést végzünk — meglévő rendszerek hibáit is megjavítjuk.' },
                { title: 'Kisebb javítások is', desc: 'Egyetlen problémás kamera is elegendő ok arra, hogy felvegye velünk a kapcsolatot.' },
              ].map(({ title, desc }, i) => (
                <motion.div key={title}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.07} variants={reveal}
                  whileHover={{ borderColor: `${ACCENT}40`, transition: { duration: 0.15 } }}
                >
                  <CheckCircle size={20} strokeWidth={1.5} style={{ color: ACCENT }} className="mb-4" />
                  <h3 className="font-display font-semibold text-ink mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">GYIK</span>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Gyakori kérdések – Kamerarendszerek</h2>
            </motion.div>
            <div className="max-w-3xl space-y-4">
              {faqs.map(({ q, a }, i) => (
                <motion.div key={q}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.06} variants={reveal}
                  whileHover={{ borderColor: `${ACCENT}40`, transition: { duration: 0.15 } }}
                >
                  <h3 className="font-display font-semibold text-ink mb-3">{q}</h3>
                  <p className="text-muted text-sm leading-[1.7]">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Belső linkek */}
        <section className="py-16 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Más szolgáltatások</span>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { href: '/szolgaltatasok/riasztorendszerek', icon: Shield, title: 'Riasztórendszerek', desc: 'Betörésvédelem és azonnali riasztás' },
                { href: '/szolgaltatasok/tuzjelzo-rendszerek', icon: Zap, title: 'Tűzjelző rendszerek', desc: 'Korai tűzészlelés és riasztás' },
              ].map(({ href, icon: Icon, title, desc }, i) => (
                <motion.div key={href} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.07} variants={reveal}>
                  <Link href={href} className="group flex items-center gap-4 rounded-lg border border-[#2A2A35] bg-surface p-5 hover:border-[#C0C0D0]/40 transition-colors duration-150">
                    <div className="rounded p-2.5 shrink-0" style={{ background: `${ACCENT}12` }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-ink text-sm">{title}</h3>
                      <p className="text-muted text-xs mt-0.5">{desc}</p>
                    </div>
                    <ArrowRight size={16} className="text-muted group-hover:translate-x-1 transition-transform duration-150 shrink-0" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-[#111116]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="relative overflow-hidden rounded-lg border p-12 lg:p-16"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 80px -20px ${ACCENT}` }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
            >
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${ACCENT}10 0%, transparent 70%)` }} />
              <div className="relative z-10">
                <span className="eyebrow-chip mb-6 inline-block">Következő lépés</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">Készen áll a következő lépésre?</h2>
                <p className="text-muted text-lg leading-[1.7] mb-3 max-w-xl">Az első konzultáció minden esetben ingyenes és kötelezettségmentes. Keressen minket bármilyen kérdéssel!</p>
                <p className="text-muted text-sm leading-[1.7] mb-9 max-w-xl">Nem csak teljes rendszerek kiépítésével foglalkozunk — meglévő rendszerek javítását és karbantartását is vállaljuk.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ingyenes-felmeres" className="group">
                    <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                      Kérjen ingyenes felmérést <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </button>
                  </Link>
                  <Link href="/kapcsolat">
                    <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                      Kapcsolatfelvétel
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
