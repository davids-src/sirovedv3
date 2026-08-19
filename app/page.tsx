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
                Miért érdemes minket választani?
              </h2>
              <p className="mt-5 text-muted text-lg leading-[1.7] max-w-2xl">
                Az Ön biztonsága számunkra a legfontosabb
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: 'Gyors kiszállás', desc: '1 munkanapon belüli válaszidő és helyszíni felmérés' },
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

        {/* ── SIROTECH GROUP szekció ── */}
        <section className="py-28 bg-[#111116]/50 border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              variants={revealVariants}
            >
              <span className="eyebrow-chip">SIROTECH GROUP</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Egy fal, három szakma
              </h2>
              <p className="mt-5 text-muted text-lg leading-[1.7] max-w-2xl">
                Egy irodafelújításon ma három szakember dolgozik ugyanabba a falba: villanyszerelő, hálózatépítő, biztonságtechnikus. Ugyanaz a nyomvonal, három külön időpont — és a koordináció az ügyfélé.
              </p>
              <p className="mt-4 text-ink font-semibold">
                Nálunk ez egy csapat, egy ütemezés. Ha valami nem stimmel, nincs kinek mutogatni.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { nev: 'SIRONIC', szoveg: 'Hálózatépítés, IT-üzemeltetés', href: 'https://sironic.eu', szin: '#E8271A' },
                { nev: 'SIROSOFT', szoveg: 'Egyedi szoftverfejlesztés', href: 'https://sirosoft.hu', szin: '#1AE87B' },
                { nev: 'SIROVILL', szoveg: 'Villanyszerelés, kábelezés', href: 'https://sirovill.hu', szin: '#F5B81C', hamarosan: true },
              ].map((card, index) => (
                <motion.div
                  key={card.nev}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={index * 0.07}
                  variants={revealVariants}
                  className="h-full"
                >
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col h-full p-8 rounded-lg border border-[#2A2A35] bg-surface transition-all duration-300 hover:[border-color:var(--card-color)] hover:[box-shadow:0_0_32px_-12px_var(--card-color)] ${(card as any).hamarosan ? 'opacity-60 hover:opacity-100' : ''}`}
                    style={{ '--card-color': card.szin } as React.CSSProperties}
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'outbound_click', {
                          target_site: card.href.replace('https://', ''),
                          location: 'cegcsoport_szekcio'
                        });
                      }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: card.szin }} />
                      <div className="flex items-center gap-2">
                        <h3 className="font-mono text-sm tracking-widest text-ink font-bold uppercase">{card.nev}</h3>
                        {(card as any).hamarosan && (
                          <span className="px-1.5 py-0.5 rounded bg-[#2A2A35]/60 text-[10px] font-semibold text-muted uppercase tracking-wider">Hamarosan</span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted text-sm leading-[1.7] mb-8">
                      {card.szoveg}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold transition-colors duration-300" style={{ color: card.szin }}>
                      Megnyitás
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
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
                <span className="eyebrow-chip mb-6 inline-block">Díjmentes felmérés</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  Kérjen ingyenes helyszíni felmérést
                </h2>
                <p className="text-muted text-lg leading-[1.7] mb-9 max-w-xl">
                  Vegye fel velünk a kapcsolatot – ingyenesen felmérjük az ingatlant, feltérképezzük a gyenge pontokat, és személyre szabott ajánlatot adunk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/ingyenes-felmeres" className="group">
                    <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]">
                      Kérjen ingyenes felmérést
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
