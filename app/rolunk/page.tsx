'use client';
// metadata exportot a szülő layout.tsx kezeli, itt nincs szükség rá

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Target, Heart, Users, Award, Clock, CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};


export default function Rolunk() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-bg pt-28 pb-20 overflow-hidden border-b border-[#2A2A35]/50">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none" aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }} />
          <div className="max-w-site mx-auto px-6 relative">
            <motion.span className="eyebrow-chip" initial="hidden" animate="visible" custom={0.05} variants={reveal}>A csapatunkról</motion.span>
            <motion.h1 className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}>Rólunk</motion.h1>
            <motion.p className="mt-5 text-lg text-muted leading-[1.7] max-w-2xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}>
              A SIRO-VÉD célja, hogy ügyféleink számára valódi biztonságot nyújtson,
              nem csak eszközöket. Segítünk a megfelelő rendszer kiválasztásában és hosszú távú üzemeltetésében.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Award, stat: 'Fejér m.', label: 'helyi lefedettség' },
                { icon: Users, stat: '<24h', label: 'kiszállás' },
                { icon: Clock, stat: '24/7', label: 'Ügyfélszolgálat' },
              ].map(({ icon: Icon, stat, label }, i) => (
                <motion.div key={label}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-8 text-center"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.08} variants={reveal}
                  whileHover={{ scale: 1.02, borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-5" style={{ background: `${ACCENT}12` }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </div>
                  <p className="font-display text-3xl font-bold mb-1" style={{ color: ACCENT }}>{stat}</p>
                  <p className="label text-muted">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Küldetés */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
                <span className="eyebrow-chip">Küldetésünk</span>
                <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Küldetésünk</h2>
                <p className="mt-5 text-muted text-base leading-[1.7]">
                  A SIRO-VÉD Székesfehérváron és Fejér megyében nyújtunk megbízható
                  biztonságtechnikai megoldásokat magánosoknak és vállalkozásoknak.
                </p>
                <p className="mt-4 text-muted text-base leading-[1.7]">
                  Hiszünk abban, hogy a biztonság nem luxus, hanem alapvető szükséglet.
                  Célunk, hogy mindenki számára elérhető és megbízható megoldásokat
                  kínáljunk, legyen szó otthonról, üzletről vagy irodáról.
                </p>
                <p className="mt-4 text-muted text-base leading-[1.7]">
                  Csapatunk tapasztalt szakemberekből áll, akik folyamatosan képzik
                  magukat, hogy mindig a legújabb technológiákat tudjuk ajánlani ügyfeleinknek.
                </p>
              </motion.div>

              <motion.div
                className="rounded-lg border p-10"
                style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08`, boxShadow: `0 0 56px -14px ${ACCENT}` }}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.1} variants={reveal}
              >
                <Shield size={84} strokeWidth={1.25} style={{ color: ACCENT }} className="mb-6" />
                <h3 className="font-display text-xl font-semibold text-ink mb-4">Friss szemlélet, modern technológia</h3>
                <p className="text-muted text-sm leading-[1.7]">
                  A legmodernebb biztonságtechnikai megoldásokat hozzuk Fejér megyébe.
                  Nincs felesleges bürokrácia – csak gyors, pontos és korrekt munkavégzés.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Értékek */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Alapelveink</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Értékeink</h2>
              <p className="mt-5 text-muted text-lg leading-[1.7]">Ezek az alapelvek vezérelnek minket minden nap</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Megbízhatóság', desc: 'Minden ígéretünket betartjuk. Pontosak vagyunk, és mindig elérhetők az ügyfeleknek. A telepített rendszerek hosszú távú működését garantáljuk.' },
                { icon: Target, title: 'Precizitás', desc: 'Minden telepítés gondosan megtervezett és precízen kivitelezett. Figyelünk a részletekre, hogy a rendszer tökéletesen működjön minden körülmények között.' },
                { icon: Heart, title: 'Ügyfélközpontúság', desc: 'Az ügyfelek igényei az elsők. Minden megoldást az egyéni szükségletekhez igazítunk, és folyamatos támogatást nyújtunk a telepítés után is.' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-8"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.08} variants={reveal}
                  whileHover={{ scale: 1.02, borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ background: `${ACCENT}12` }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">{title}</h3>
                  <p className="text-muted text-sm leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Miért dolgozz velünk */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Miért mi?</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Miért dolgozz velünk?</h2>
              <p className="mt-5 text-muted text-lg leading-[1.7]">Nem csak technológiát adunk, hanem biztonságot és nyugalmat</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Ingyenes helyszíni felmérés', desc: 'Minden projektünk konzultációval kezdődik, ahol felmérjük az igényeket és a helyszíni adottságokat.' },
                { title: 'Átlátható árazás', desc: 'Minden költséget előre megbeszélünk, nincsenek rejtett díjak vagy meglepetések.' },
                { title: 'Garancia és karbantartás', desc: 'Minden eszközre garanciát vállalunk, és rendszeres karbantartási csomagokat kínálunk.' },
                { title: 'Gyors hibaelhárítás', desc: 'Probléma esetén azonnal reagálunk, és gyorsan megoldjuk a felmerült hibákat.' },
                { title: 'Minőségi eszközök', desc: 'Csak bevált, megbízható márkákkal dolgozunk, amelyek hosszú távon is jól teljesítenek.' },
                { title: 'Személyre szabott megoldások', desc: 'Minden projekt egyedi, így minden megoldásunk is az. Nincs két egyforma telepítésünk.' },
              ].map(({ title, desc }, i) => (
                <motion.div key={title}
                  className="flex items-start gap-4 rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={(i % 2) * 0.07} variants={reveal}
                  whileHover={{ borderColor: `${ACCENT}40`, transition: { duration: 0.15 } }}
                >
                  <CheckCircle size={20} strokeWidth={1.5} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-ink mb-1">{title}</h3>
                    <p className="text-muted text-sm leading-[1.7]">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-bg">
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
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  Készen állsz a következő lépésre?
                </h2>
                <p className="text-muted text-lg leading-[1.7] mb-9 max-w-xl">
                  Vedd fel velünk a kapcsolatot, és beszéljük meg, hogyan tehetjük
                  biztonságosabbá otthonod vagy vállalkozásod!
                </p>
                <Link href="/kapcsolat" className="group">
                  <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                    Kapcsolatfelvétel
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
