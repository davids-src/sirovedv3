'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Bell, Flame, CircleCheck as CheckCircle, Phone, Shield, Eye, Lock, Zap, ArrowRight } from 'lucide-react';
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

const featureItems = (items: { title: string; desc: string }[]) =>
  items.map(({ title, desc }) => (
    <div key={title} className="flex items-start gap-3">
      <CheckCircle size={18} strokeWidth={1.5} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
      <div>
        <h3 className="font-display font-semibold text-ink text-sm mb-0.5">{title}</h3>
        <p className="text-muted text-sm leading-[1.7]">{desc}</p>
      </div>
    </div>
  ));

export default function Szolgaltatasok() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-bg pt-28 pb-20 overflow-hidden border-b border-[#2A2A35]/50">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none" aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }} />
          <div className="max-w-site mx-auto px-6 relative">
            <motion.span className="eyebrow-chip" initial="hidden" animate="visible" custom={0.05} variants={reveal}>Komplett megoldások</motion.span>
            <motion.h1 className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}>Szolgáltatásaink</motion.h1>
            <motion.p className="mt-5 text-lg text-muted leading-[1.7] max-w-2xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}>
              Komplett biztonságtechnikai megoldások otthonok, üzletek és irodák számára
              Székesfehérváron és Fejér megyében. Minden szolgáltatásunk magában foglalja
              a telepítést, beüzemelést és a folyamatos támogatást.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 mt-8 text-sm" initial="hidden" animate="visible" custom={0.2} variants={reveal}>
              {['Ingyenes, kötelezettségmentes konzultáció', 'Gyors kiszállás', 'Javítást is vállalunk'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-muted">
                  <CheckCircle size={14} style={{ color: ACCENT }} />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Kamerarendszerek */}
        <section id="kamerarendszerek" className="py-28 bg-bg border-b border-[#2A2A35]/50 scroll-mt-16">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
                <span className="eyebrow-chip">Megfigyelés</span>
                <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Kamerarendszerek</h2>
                <p className="mt-5 text-muted text-base leading-[1.7] mb-8">
                  Modern CCTV kamerarendszerek telepítése és karbantartása. Akár otthonra, akár vállalkozásra van szükséged,
                  mi megtaláljuk a legmegfelelőbb megoldást.
                </p>
                <div className="space-y-4 mb-8">
                  {featureItems([
                    { title: 'HD és 4K felbontás', desc: 'Kristálytiszta képminőség minden körülmények között' },
                    { title: 'Éjjellátó funkció', desc: 'Infravörös technológia a sötétben is tiszta képért' },
                    { title: 'Távoli hozzáférés', desc: 'Mobil app segítségével bárhonnan követhető a felvétel' },
                    { title: 'Felhő tároló', desc: 'Biztonságos adattárolás és visszanézés lehetősége' },
                  ])}
                </div>
                <Link href="/szolgaltatasok/kamerarendszerek" className="group">
                  <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                    További információk
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                  </button>
                </Link>
              </motion.div>

              <motion.div
                className="rounded-lg border p-10"
                style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08`, boxShadow: `0 0 56px -14px ${ACCENT}` }}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.1} variants={reveal}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Eye, title: 'Széles látószög', desc: 'HD/4K kép nappal és éjjel' },
                    { icon: Shield, title: 'IP67 védelem', desc: 'Időjárásálló kivitel' },
                    { icon: Zap, title: 'Gyors telepítés', desc: '1-2 nap alatt kész' },
                    { icon: Camera, title: 'Smart AI', desc: 'Intelligens mozgásérzékelés' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="rounded border p-5" style={{ background: `${ACCENT}10`, borderColor: `${ACCENT}30` }}>
                      <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} className="mb-3" />
                      <h4 className="font-display font-semibold text-ink text-sm mb-1">{title}</h4>
                      <p className="text-xs text-muted">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Riasztórendszerek */}
        <section id="riasztórendszerek" className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50 scroll-mt-16">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                className="rounded-lg border p-10 order-2 lg:order-1"
                style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08`, boxShadow: `0 0 56px -14px ${ACCENT}` }}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.1} variants={reveal}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Lock, title: 'Mobilos értesítés', desc: 'Azonnali push üzenet' },
                    { icon: Shield, title: 'Multi-szenzor', desc: 'Több érzékelő típus' },
                    { icon: Bell, title: 'Hang riasztás', desc: '120dB hangerő' },
                    { icon: Phone, title: '24/7 monitoring', desc: 'Non-stop védelem' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="rounded border p-5" style={{ background: `${ACCENT}10`, borderColor: `${ACCENT}30` }}>
                      <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} className="mb-3" />
                      <h4 className="font-display font-semibold text-ink text-sm mb-1">{title}</h4>
                      <p className="text-xs text-muted">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="order-1 lg:order-2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
                <span className="eyebrow-chip">Riasztás</span>
                <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Riasztórendszerek</h2>
                <p className="mt-5 text-muted text-base leading-[1.7] mb-8">
                  Intelligens riasztórendszerek, amelyek azonnal értesítenek betörés vagy gyanús tevékenység esetén.
                  Otthonának vagy vállalkozásának megbízható védelméért.
                </p>
                <div className="space-y-4 mb-8">
                  {featureItems([
                    { title: 'Mozgásérzékelők', desc: 'Precíz PIR szenzorok hamis riasztások nélkül' },
                    { title: 'Ajtó és ablak érzékelők', desc: 'Mágneses kapcsolók a nyílászárók védelmére' },
                    { title: 'Mobilapp értesítések', desc: 'Azonnali push üzenetek esemény esetén' },
                    { title: 'Központi vezérlés', desc: 'Egyszerű be- és kikapcsolás mobilról vagy távirányítóval' },
                  ])}
                </div>
                <Link href="/szolgaltatasok/riasztorendszerek" className="group">
                  <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                    További információk
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tűzjelző */}
        <section id="tuzjelzo" className="py-28 bg-bg border-b border-[#2A2A35]/50 scroll-mt-16">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
                <span className="eyebrow-chip">Tűzvédelem</span>
                <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Tűzjelző rendszerek</h2>
                <p className="mt-5 text-muted text-base leading-[1.7] mb-8">
                  Megbízható tűzjelző rendszerek, amelyek életeket menthetnek és értékeket óvhatnak meg.
                  Megfelelünk minden biztonsági előírásnak.
                </p>
                <div className="space-y-4 mb-8">
                  {featureItems([
                    { title: 'Füstérzékelők', desc: 'Korai füst- és füstgázérzékelés optikai technológiával' },
                    { title: 'Hőmérséklet szenzorok', desc: 'Hirtelen hőmérséklet-emelkedés azonnali észlelése' },
                    { title: 'Hang és fényriasztás', desc: 'Sziréna és villogó a jelzés után azonnal aktiválódik' },
                    { title: 'Karbantartási csomag', desc: 'Rendszeres karbantartás és ellenőrzés' },
                  ])}
                </div>
                <Link href="/szolgaltatasok/tuzjelzo-rendszerek" className="group">
                  <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                    További információk
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                  </button>
                </Link>
              </motion.div>

              <motion.div
                className="rounded-lg border p-10"
                style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08`, boxShadow: `0 0 56px -14px ${ACCENT}` }}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.1} variants={reveal}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Flame, title: 'Korai észlelés', desc: 'Másodpercek számítanak' },
                    { icon: Shield, title: 'EN 54 szabvány', desc: 'Teljes megfelelőség' },
                    { icon: Bell, title: '90dB riasztás', desc: 'Mindenkit ébreszti' },
                    { icon: CheckCircle, title: 'Gyártói garancia', desc: 'Minőségi eszközök' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="rounded border p-5" style={{ background: `${ACCENT}10`, borderColor: `${ACCENT}30` }}>
                      <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} className="mb-3" />
                      <h4 className="font-display font-semibold text-ink text-sm mb-1">{title}</h4>
                      <p className="text-xs text-muted">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                <span className="eyebrow-chip mb-6 inline-block">Kérdése van?</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  Kérdése van szolgáltatásainkkal kapcsolatban?
                </h2>
                <p className="text-muted text-lg leading-[1.7] mb-9 max-w-xl">
                  Lépjen velünk kapcsolatba, és segítünk kiválasztani az Ön számára legmegfelelőbb rendszert!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ingyenes-felmeres" className="group">
                    <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                      Kérjen ingyenes felmérést
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
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
