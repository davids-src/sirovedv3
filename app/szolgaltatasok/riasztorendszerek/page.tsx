'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bell, Phone, CheckCircle, Lock, Shield, Zap, Home, Store, Building, Warehouse, ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const steps = [
  { n: '1', title: 'Ingyenes konzultáció', desc: 'Megbeszéljük az igényeidet: milyen területet kell védeni és mit vársz a rendszertől.' },
  { n: '2', title: 'Helyszíni felmérés', desc: 'Kimegyünk és felmérjük a területet: ajtók, ablakok, belső terek — mindent figyelembe veszünk.' },
  { n: '3', title: 'Egyedi ajánlat', desc: 'Személyre szabott ajánlatot készítünk részletes árazással és magyarázattal.' },
  { n: '4', title: 'Telepítés / javítás', desc: 'Elvégezzük a munkát, beállítjuk a rendszert és megtanítjuk a kezelését.' },
  { n: '5', title: 'Utókövetés', desc: 'Ha problémád van vagy bővítenéd a rendszert, elérhetők vagyunk.' },
];

const faqs = [
  { q: 'Mennyibe kerül egy riasztórendszer telepítése?', a: 'Az ár a védendő terület és az érzékelők számától függ. Egy egyszerűbb, 3–5 érzékelős rendszer 60 000–120 000 Ft körül kezdődik. Ingyenes felmérésen pontos árat adunk.' },
  { q: 'Milyen típusú riasztórendszereket telepítetek?', a: 'Mozgásérzékelőket, ajtó- és ablakérzékelőket, hang- és fényriasztókat, valamint mobilos értesítési rendszereket. Minden igényre megtaláljuk a megfelelő megoldást.' },
  { q: 'Meglévő riasztórendszert is lehet javítani vagy bővíteni?', a: 'Igen, abszolút. Ha a riasztód nem működik megfelelően, hibás egy érzékelő, vagy bővíteni szeretnéd a rendszert, azt is szívesen elvégezzük.' },
  { q: 'Kapok értesítést, ha beindul a riasztó?', a: 'Igen. A modern rendszerek mobilos push értesítést, SMS-t vagy telefonhívást küldenek. Beállíthatod, ki kapja az értesítést.' },
  { q: 'Kell-e karbantartás a riasztórendszernek?', a: 'Éves ellenőrzés ajánlott: akkumulátorok, érzékelők és a vezérlő állapotának vizsgálata. Ezt is vállaljuk.' },
];

export default function RiasztorendszerekPage() {
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
            <motion.span className="eyebrow-chip" initial="hidden" animate="visible" custom={0.05} variants={reveal}>Betörésvédelem</motion.span>
            <motion.h1 className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}>
              Riasztórendszer telepítés<br />
              <span style={{ color: ACCENT }}>Székesfehérváron és környékén</span>
            </motion.h1>
            <motion.p className="mt-5 text-lg text-muted leading-[1.7] max-w-2xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}>
              Aggódsz, mi történik az otthonodban vagy az üzletedben, ha nem vagy ott?
              Egy jól megtervezett riasztórendszer azonnal értesít, ha valami nincs rendben.
            </motion.p>
            <motion.div className="mt-9 flex flex-col sm:flex-row gap-4" initial="hidden" animate="visible" custom={0.2} variants={reveal}>
              <Link href="/kalkulator" className="group">
                <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                  Kérj ingyenes konzultációt <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                </button>
              </Link>
              <Link href="tel:+36702735532">
                <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                  <Phone size={16} className="text-muted" /> Hívj most
                </button>
              </Link>
            </motion.div>
            <motion.p className="mt-5 text-sm text-muted" initial="hidden" animate="visible" custom={0.25} variants={reveal}>
              <span style={{ color: ACCENT }}>✓</span> Ingyenes konzultáció &nbsp;·&nbsp;
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
                <span className="eyebrow-chip">Miért fontos?</span>
                <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Miért érdemes riasztórendszert szereltetni?</h2>
                <p className="mt-5 text-muted text-sm leading-[1.7]">
                  A riasztórendszer célja egyszerű: ha valaki illetéktelenül próbál bejutni az ingatlanodba,
                  azonnal jelez — hangosan és neked mobilon is. Ez nemcsak utólag segít, hanem <strong className="text-ink">elriasztja</strong> a betörőket, mielőtt még megpróbálkoznának.
                </p>
                <p className="mt-4 text-muted text-sm leading-[1.7]">
                  A modern rendszerek okostelefonra is küldenek értesítést — bárhol is légy, azonnal tudni fogod, ha valami nem stimmel.
                </p>
                <p className="mt-4 text-muted text-sm leading-[1.7]">
                  Akkor is keress minket, ha csak egy kisebb problémát szeretnél megoldani — például egy érzékelő
                  nem működik, vagy bővítenéd a meglévő rendszert.
                </p>
              </motion.div>

              <motion.div
                className="rounded-lg border p-8"
                style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08`, boxShadow: `0 0 56px -14px ${ACCENT}` }}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.1} variants={reveal}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Lock, title: 'Mobilos jelzés', desc: 'Azonnali push értesítés' },
                    { icon: Shield, title: 'Multi-szenzor', desc: 'Több érzékelő típus' },
                    { icon: Bell, title: 'Hang riasztás', desc: '120dB hangerő' },
                    { icon: Phone, title: '24/7 értesítés', desc: 'Mobilos push üzenet' },
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
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: 'Családi ház', desc: 'Ajtók, ablakok, garázs — komplex védelem minden bejáratra.' },
                { icon: Store, title: 'Üzlethelyiség', desc: 'Éjszakai védelem, zárás utáni biztonság, azonnali jelzés betörésnél.' },
                { icon: Building, title: 'Iroda', desc: 'Mozgásérzékelés, beléptetés vezérlése — teljes irodavédelem.' },
                { icon: Warehouse, title: 'Telephely', desc: 'Perimétervédelem, raktárvédelem, kerítésérzékelők.' },
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
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">A riasztórendszer előnyei</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Biztonságérzet és védelem', desc: 'Tudod, hogy az ingatlanod védett — és ha valami történne, azonnal jelzést kapsz. Ez a nyugalom felbecsülhetetlen.' },
                { title: 'Megelőzés és visszatartás', desc: 'A látható riasztórendszer önmagában elrettenti a lehetséges betörőket. A védett ingatlanokat ritkábban választják célpontul.' },
                { title: 'Azonnali kontroll', desc: 'Mobilos értesítéssel azonnal tudni fogod, mi történt — és dönteni tudsz arról, mit tegyél. Mindig kézben tartod a helyzetet.' },
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
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map(({ n, title, desc }, i) => (
                <motion.div key={n}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.07} variants={reveal}
                >
                  <div className="w-9 h-9 rounded flex items-center justify-center mb-4 font-display font-bold text-sm text-white" style={{ background: ACCENT }}>{n}</div>
                  <h3 className="font-display font-semibold text-ink text-sm mb-2">{title}</h3>
                  <p className="text-muted text-xs leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Helyi SEO */}
        <section className="py-16 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="max-w-3xl rounded-lg border p-8" style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">Riasztórendszer telepítés Székesfehérváron és Fejér megyében</h2>
              <p className="text-muted text-sm leading-[1.7] mb-3">Székesfehérváron és Fejér megye területén dolgozunk — gyorsan, megbízhatóan, személyesen. Ismerjük a helyi igényeket és gyorsan ki tudunk szállni.</p>
              <p className="text-muted text-sm leading-[1.7]">Vállalunk kis munkákat is: egyetlen érzékelő cseréje, meglévő riasztó beállítása is elegendő indok arra, hogy keress minket. Az első konzultáció mindig ingyenes.</p>
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
                { title: 'Gyors reagálás', desc: 'Kiszállás általában 24–48 órán belül Székesfehérvár és környéke területén.' },
                { title: 'Személyre szabott', desc: 'Minden helyszínhez egyedi rendszert tervezünk, nem sablonmegoldásokat.' },
                { title: 'Javítást is vállalunk', desc: 'Meglévő rendszerek hibáit is megjavítjuk — nem kell mindent lecserélni.' },
                { title: 'Kis munkák is kellenek', desc: 'Egyetlen problémás érzékelő is elegendő ok arra, hogy felhívj.' },
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
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Gyakori kérdések – Riasztórendszerek</h2>
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
                { href: '/szolgaltatasok/kamerarendszerek', icon: Camera, title: 'Kamerarendszerek', desc: 'HD és 4K megfigyelőrendszerek' },
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
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">Készen állsz a következő lépésre?</h2>
                <p className="text-muted text-lg leading-[1.7] mb-9 max-w-xl">Az első konzultáció minden esetben ingyenes és kötelezettségmentes. Akkor is keress minket, ha csak egy kisebb problémát szeretnél megoldani.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kalkulator" className="group">
                    <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                      Kérj ajánlatot <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </button>
                  </Link>
                  <Link href="/kalkulator">
                    <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                      Ingyenes konzultáció
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
