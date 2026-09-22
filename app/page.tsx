'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import KalkulatorBemutato from '@/components/KalkulatorBemutato';
import {
  Camera,
  Bell,
  Flame,
  Clock,
  Users,
  Shield,
  CircleCheck as CheckCircle,
  ArrowRight,
  ShieldPlus,
  Expand,
  Wrench,
  RefreshCw,
  Building2,
  Home as HomeIcon,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import FreeSecurityAssessmentSection from '@/components/FreeSecurityAssessmentSection';
import PartnerBrandsSection from '@/components/PartnerBrandsSection';
import { trackCtaClick, trackRequestTypeSelect, type RequestType } from '@/lib/analytics';

const ACCENT = '#1A6BE8';

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

// ── Intent cards data ──────────────────────────────────────────────────────────

const INTENT_CARDS = [
  {
    Icon: ShieldPlus,
    title: 'Új rendszert szeretnék',
    text: 'Tervezés és kivitelezés nulláról.',
    href: '/megoldasok/uj-biztonsagtechnikai-rendszer',
    requestType: 'uj-rendszer' as RequestType,
    id: 'intent-uj-rendszer',
  },
  {
    Icon: Expand,
    title: 'Bővíteném a meglévőt',
    text: 'Új kamerák, érzékelők, zónák vagy beléptetési pontok.',
    href: '/megoldasok/rendszerbovites',
    requestType: 'bovites' as RequestType,
    id: 'intent-bovites',
  },
  {
    Icon: Wrench,
    title: 'Hibát szeretnék javítani',
    text: 'Felmérés, hibaelhárítás és helyreállítás.',
    href: '/ingyenes-felmeres?request_type=javitas',
    requestType: 'javitas' as RequestType,
    id: 'intent-javitas',
  },
  {
    Icon: RefreshCw,
    title: 'Karbantartást keresek',
    text: 'Rendszeres ellenőrzés és hosszú távú támogatás.',
    href: '/kapcsolat?request_type=karbantartas',
    requestType: 'karbantartas' as RequestType,
    id: 'intent-karbantartas',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* ── Milyen helyzetben van? — 4 egyenrangú útvonal ── */}
        <section className="py-20 bg-bg border-t border-[#2A2A35]/50" aria-label="Milyen helyzetben van?">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              variants={revealVariants}
            >
              <span className="eyebrow-chip">Miben segíthetünk?</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Milyen helyzetben van?
              </h2>
              <p className="mt-4 text-muted text-lg leading-[1.7] max-w-xl mx-auto">
                Válassza ki az igényéhez legjobban illő útvonalat — mindegyik egyforma súllyal indul.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INTENT_CARDS.map(({ Icon, title, text, href, requestType, id }, index) => (
                <motion.div
                  key={id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={index * 0.08}
                  variants={revealVariants}
                >
                  <Link
                    href={href}
                    id={id}
                    onClick={() => {
                      trackCtaClick({
                        cta_label: title,
                        cta_location: 'hero_intent_grid',
                        cta_type: 'intent_card',
                        page_type: 'home',
                      });
                      trackRequestTypeSelect(requestType);
                    }}
                    className="group flex flex-col h-full p-7 rounded-xl border border-[#2A2A35] bg-surface transition-all duration-300 hover:border-[#1A6BE8]/60 hover:shadow-[0_0_28px_-8px_#1A6BE8] hover:bg-[#111116]"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#1A6BE8]/15"
                      style={{ background: `${ACCENT}10` }}
                    >
                      <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-ink mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-muted leading-[1.7] mb-6 flex-1">{text}</p>
                    <div
                      className="flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: ACCENT }}
                    >
                      Tovább
                      <ArrowRight size={15} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Otthonra és üzleti környezetbe — B2B / B2C split ── */}
        <section className="py-20 bg-[#111116]/60 border-t border-[#2A2A35]/50" aria-label="Magáningatlan és vállalkozás">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              variants={revealVariants}
            >
              <span className="eyebrow-chip">Kinek ajánljuk?</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Otthonra és üzleti környezetbe
              </h2>
              <p className="mt-4 text-muted text-lg leading-[1.7] max-w-xl mx-auto">
                Mindkét szegmensben személyre szabott megoldással dolgozunk — egyforma odafigyeléssel.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* B2C – Magáningatlan */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={0.05}
                variants={revealVariants}
              >
                <Link
                  href="/megoldasok/csaladi-haz-biztonsag"
                  id="b2c-block"
                  className="group flex flex-col h-full p-8 rounded-xl border border-[#2A2A35] bg-surface hover:border-[#1A6BE8]/50 hover:shadow-[0_0_40px_-16px_#1A6BE8] transition-all duration-300"
                  onClick={() =>
                    trackCtaClick({
                      cta_label: 'Magáningatlan',
                      cta_location: 'audience_split',
                      cta_type: 'audience_card',
                      page_type: 'home',
                    })
                  }
                >
                  {/* Inline SVG — ház alaprajz */}
                  <div className="w-full h-36 mb-6 rounded-lg overflow-hidden bg-[#0D0D12] flex items-center justify-center border border-[#2A2A35]/60">
                    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-4" aria-hidden="true">
                      {/* house outline */}
                      <rect x="40" y="50" width="120" height="60" rx="2" stroke="#2A2A35" strokeWidth="1.5" fill="#111116"/>
                      {/* roof */}
                      <polyline points="30,52 100,12 170,52" stroke="#1A6BE8" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                      {/* door */}
                      <rect x="88" y="80" width="24" height="30" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
                      {/* windows */}
                      <rect x="50" y="60" width="22" height="18" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
                      <rect x="128" y="60" width="22" height="18" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
                      {/* camera icons */}
                      <circle cx="40" cy="52" r="4" fill="#1A6BE8" opacity="0.85"/>
                      <circle cx="160" cy="52" r="4" fill="#1A6BE8" opacity="0.85"/>
                      <circle cx="100" cy="110" r="3" fill="#1A6BE8" opacity="0.6"/>
                      {/* zone dashes */}
                      <path d="M35,50 Q35,30 100,10 Q165,30 165,50" stroke="#1A6BE8" strokeWidth="0.6" strokeDasharray="3 3" fill="none" opacity="0.3"/>
                    </svg>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}12` }}>
                      <HomeIcon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink">Magáningatlan</h3>
                  </div>
                  <p className="text-muted leading-[1.7] mb-6 flex-1">
                    Családi ház, nyaraló, kapu, udvar, melléképület — átlátható, bővíthető védelem. A rendszer a mindennapokban is kényelmes maradjon.
                  </p>
                  <div className="space-y-2 mb-6">
                    {['Kültéri és beltéri kamerarendszer', 'Kapu- és bejárati riasztó', 'Okostelefonos értesítés', 'Bővíthető rendszer'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle size={14} style={{ color: ACCENT }} className="shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200" style={{ color: ACCENT }}>
                    Megoldások magáningatlannakra <ArrowRight size={15} />
                  </div>
                </Link>
              </motion.div>

              {/* B2B – Vállalkozás */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={0.12}
                variants={revealVariants}
              >
                <Link
                  href="/megoldasok/telephely-biztonsag"
                  id="b2b-block"
                  className="group flex flex-col h-full p-8 rounded-xl border border-[#2A2A35] bg-surface hover:border-[#1A6BE8]/50 hover:shadow-[0_0_40px_-16px_#1A6BE8] transition-all duration-300"
                  onClick={() =>
                    trackCtaClick({
                      cta_label: 'Vállalkozás',
                      cta_location: 'audience_split',
                      cta_type: 'audience_card',
                      page_type: 'home',
                    })
                  }
                >
                  {/* Inline SVG — telephely alaprajz */}
                  <div className="w-full h-36 mb-6 rounded-lg overflow-hidden bg-[#0D0D12] flex items-center justify-center border border-[#2A2A35]/60">
                    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-4" aria-hidden="true">
                      {/* main building */}
                      <rect x="10" y="30" width="110" height="80" rx="2" stroke="#2A2A35" strokeWidth="1.5" fill="#111116"/>
                      {/* warehouse wing */}
                      <rect x="120" y="50" width="70" height="60" rx="2" stroke="#2A2A35" strokeWidth="1.5" fill="#111116"/>
                      {/* gate */}
                      <rect x="10" y="80" width="28" height="30" stroke="#1A6BE8" strokeWidth="1" fill="none" strokeDasharray="3 2"/>
                      {/* windows */}
                      <rect x="50" y="40" width="20" height="14" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
                      <rect x="80" y="40" width="20" height="14" rx="1" stroke="#2A2A35" strokeWidth="1" fill="#0D0D12"/>
                      {/* zone labels */}
                      <circle cx="10" cy="30" r="4" fill="#1A6BE8" opacity="0.9"/>
                      <circle cx="120" cy="50" r="4" fill="#1A6BE8" opacity="0.9"/>
                      <circle cx="190" cy="50" r="3" fill="#1A6BE8" opacity="0.7"/>
                      <circle cx="10" cy="110" r="3" fill="#1A6BE8" opacity="0.6"/>
                      {/* zone line */}
                      <rect x="130" y="60" width="50" height="6" rx="1" fill="#1A6BE8" opacity="0.08"/>
                      <rect x="130" y="74" width="50" height="6" rx="1" fill="#1A6BE8" opacity="0.08"/>
                      {/* parking area */}
                      <rect x="15" y="15" width="90" height="12" rx="1" stroke="#2A2A35" strokeWidth="0.8" strokeDasharray="4 3" fill="none" opacity="0.5"/>
                    </svg>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}12` }}>
                      <Building2 size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink">Vállalkozás</h3>
                  </div>
                  <p className="text-muted leading-[1.7] mb-6 flex-1">
                    Iroda, üzlet, raktár, csarnok és telephely — több belépési ponttal, dokumentált rendszerrel. Hosszú távú üzemeltetésre tervezve.
                  </p>
                  <div className="space-y-2 mb-6">
                    {['Kültéri parkoló és kerítésvédelem', 'Beléptetési rendszer', 'Több épület, egy rendszer', 'Dokumentált, auditálható kialakítás'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle size={14} style={{ color: ACCENT }} className="shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200" style={{ color: ACCENT }}>
                    Megoldások vállalkozásoknak <ArrowRight size={15} />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Ingyenes Vagyonvédelmi Állapotfelmérés Kampány Szekció ── */}
        <FreeSecurityAssessmentSection variant="full" />

        <KalkulatorBemutato />

        {/* ── Szolgáltatások ── */}
        <section className="py-28 bg-bg border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
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
                { nev: 'SIROVILL', szoveg: 'Villanyszerelés, kábelezés', href: 'https://sirovill.hu', szin: '#F5B81C' },
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
                    className="group flex flex-col h-full p-8 rounded-lg border border-[#2A2A35] bg-surface transition-all duration-300 hover:[border-color:var(--card-color)] hover:[box-shadow:0_0_32px_-12px_var(--card-color)]"
                    style={{ '--card-color': card.szin } as React.CSSProperties}
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'outbound_division_click', {
                          destination_brand: card.nev,
                          context: 'cegcsoport_szekcio',
                          cta_location: 'group_section',
                        });
                      }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: card.szin }} />
                      <h3 className="font-mono text-sm tracking-widest text-ink font-bold uppercase">{card.nev}</h3>
                    </div>
                    <p className="text-muted text-sm leading-[1.7] mb-8">{card.szoveg}</p>
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

        {/* ── Technológiai Partnerek / Márkák ── */}
        <PartnerBrandsSection />

        {/* ── B2B utalás ── */}
        <section className="py-6 bg-bg border-t border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <p className="text-sm text-muted text-center">
              Generálkivitelező vagy szakági cég?{' '}
              <Link href="/partneri-egyuttmukodes" className="text-[#1A6BE8] hover:underline">
                Alvállalkozóként is dolgozunk — részletek a B2B együttműködésről
              </Link>
              .
            </p>
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
                  <Link href="/ingyenes-felmeres" className="group" id="cta-banner-felmeres">
                    <button
                      className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]"
                      onClick={() =>
                        trackCtaClick({
                          cta_label: 'Kérjen ingyenes felmérést',
                          cta_location: 'cta_banner',
                          cta_type: 'primary',
                          page_type: 'home',
                        })
                      }
                    >
                      Kérjen ingyenes felmérést
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </button>
                  </Link>
                  <Link href="/megoldasok" id="cta-banner-megoldasok">
                    <button
                      className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150"
                      onClick={() =>
                        trackCtaClick({
                          cta_label: 'Megoldások',
                          cta_location: 'cta_banner',
                          cta_type: 'secondary',
                          page_type: 'home',
                        })
                      }
                    >
                      Megoldások
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
