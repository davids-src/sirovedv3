'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import KalkulatorBemutato from '@/components/KalkulatorBemutato';
import { Camera, Bell, Flame, Clock, Users, Shield, CircleCheck as CheckCircle, ArrowRight, Zap, MapPin, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import FreeSecurityAssessmentSection from '@/components/FreeSecurityAssessmentSection';

const ACCENT = '#1A6BE8';

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* ── Ingyenes Vagyonvédelmi Állapotfelmérés Kampány Szekció ── */}
        <FreeSecurityAssessmentSection variant="full" />

        <KalkulatorBemutato />

        {/* ── Nyaraló kampány banner ── */}
        <section className="py-12 bg-bg border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="relative overflow-hidden rounded-lg border bg-surface"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 56px -14px ${ACCENT}` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Ambient glow */}
              <div
                className="absolute -top-32 -right-32 w-96 h-96 pointer-events-none"
                aria-hidden="true"
                style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12">
                {/* Ikon */}
                <div className="shrink-0">
                  <div
                    className="w-20 h-20 rounded-lg flex items-center justify-center"
                    style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}40` }}
                  >
                    <Camera size={40} style={{ color: ACCENT }} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Szöveg */}
                <div className="flex-1 text-left">
                  <span className="eyebrow-chip mb-4 inline-flex items-center gap-2">
                    <Zap size={12} />
                    Aktuális kampány
                  </span>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-[1.15] tracking-[-0.02em] mt-4 mb-3">
                    Biztonságban a nyaralód –{' '}
                    <span style={{ color: ACCENT }}>Hikvision kamerarendszer nettó 250 000 Ft, mindent beleértve</span>
                  </h2>
                  <p className="text-muted text-base leading-[1.7] mb-6 max-w-xl">
                    Hónapokig üresen álló nyaraló? Komplett Hikvision rendszer – kamerák, telepítés, beüzemelés, munkadíj –
                    egyetlen, átlátható áron. Semmilyen rejtett költség.
                  </p>

                  {/* 3 jellemző */}
                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: MapPin, text: 'Ingyenes helyszíni felmérés' },
                      { icon: Smartphone, text: 'Élő megfigyelés telefonról' },
                      { icon: CheckCircle, text: 'Telepítéssel, garanciával' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2 text-sm text-muted">
                        <div
                          className="w-7 h-7 rounded flex items-center justify-center shrink-0"
                          style={{ background: `${ACCENT}12` }}
                        >
                          <Icon size={14} style={{ color: ACCENT }} />
                        </div>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="shrink-0 flex flex-col items-center gap-3 w-full lg:w-auto">
                  <Link href="/kapcsolat" className="group w-full lg:w-auto">
                    <button className="flex items-center justify-center gap-2 w-full lg:w-auto bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8] whitespace-nowrap">
                      Érdekel, kérek ajánlatot
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </button>
                  </Link>
                  <Link href="/ajanlat/nyaralo-kamerarendszer" className="group">
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink transition-colors duration-150 mt-1">
                      További információk
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Szolgáltatások ── */}
        <section className="py-28 bg-bg border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            {/* Section header */}
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              variants={revealVariants}
            >
              <span className="eyebrow-chip">Amit kínálunk</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Szolgáltatásaink
              </h2>
              <p className="mt-5 text-muted text-lg leading-[1.7] max-w-2xl">
                Komplett biztonságtechnikai megoldások minden igényre
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  title: 'Kamerarendszerek',
                  description: 'Modern CCTV rendszerek telepítése és karbantartása az otthonok és vállalkozások védelme érdekében.',
                  features: ['HD és 4K felbontású kamerák', 'Éjjellátó funkció', 'Távoli megfigyelés mobilon', 'Felhő alapú tároló'],
                  href: '/szolgaltatasok/kamerarendszerek',
                },
                {
                  icon: Bell,
                  title: 'Riasztórendszerek',
                  description: 'Intelligens riasztórendszerek, amelyek azonnal értesítenek betörés vagy gyanús tevékenység esetén.',
                  features: ['Mozgásérzékelők', 'Ajtó és ablak érzékelők', 'Azonnali értesítések', '24/7 megfigyelés'],
                  href: '/szolgaltatasok/riasztorendszerek',
                },
                {
                  icon: Flame,
                  title: 'Tűzjelző rendszerek',
                  description: 'Megbízható tűzjelző rendszerek, amelyek életeket menthetnek és értékeket óvhatnak meg.',
                  features: ['Füstérzékelők', 'Hőmérséklet szenzorok', 'Hang- és fényriasztás', 'Rendszeres karbantartás'],
                  href: '/szolgaltatasok/tuzjelzo-rendszerek',
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={index * 0.07}
                  variants={revealVariants}
                >
                  <ServiceCard {...card} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Miért válassz minket ── */}
        <section className="py-28 bg-[#111116]/50 border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            {/* Section header */}
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              variants={revealVariants}
            >
              <span className="eyebrow-chip">Miért mi?</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Miért válassz minket?
              </h2>
              <p className="mt-5 text-muted text-lg leading-[1.7] max-w-2xl">
                A biztonságod számunkra a legfontosabb
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: 'Gyors kiszállás', desc: '24 órán belül helyszíni felmérés és árajánlat készítés' },
                { icon: Users, title: 'Személyre szabott', desc: 'Minden megoldást az ügyfél egyedi igényeihez igazítunk' },
                { icon: Shield, title: 'Megbízható működés', desc: 'Csak minőségi, bevált technológiákat használunk' },
                { icon: CheckCircle, title: 'Folyamatos támogatás', desc: 'Telepítés után is számíthat ránk karbantartásban és javításban' },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-8 hover:border-[#C0C0D0]/40 transition-colors duration-150"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={index * 0.07}
                  variants={revealVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                    style={{ background: `${ACCENT}12` }}
                  >
                    <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink mb-3">{title}</h3>
                  <p className="text-sm text-muted leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA banner ── */}
        <section className="py-28 bg-bg border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="relative overflow-hidden rounded-lg border bg-surface p-12 lg:p-16"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 80px -20px ${ACCENT}` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{ background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${ACCENT}10 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                <span className="eyebrow-chip mb-6 inline-block">Ajánlat</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  Kérj ajánlatot percek alatt
                </h2>
                <p className="text-muted text-lg leading-[1.7] mb-9 max-w-xl">
                  Használd az <strong className="text-ink">intelligens díjkalkulátorunkat</strong> – percek alatt pontos árajánlatot kapsz,
                  teljesen kötelezettségmentesen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kalkulator" className="group">
                    <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]">
                      Árajánlatkérés kalkulátorral
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </button>
                  </Link>
                  <Link href="/szolgaltatasok">
                    <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                      Szolgáltatások
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
