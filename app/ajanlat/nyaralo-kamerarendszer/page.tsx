'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Camera,
  CircleCheck as CheckCircle,
  ArrowRight,
  Smartphone,
  Zap,
  MapPin,
  BadgePercent,
  Shield,
  AlertTriangle,
  Home,
  Lock,
  Eye,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const INCLUDED = [
  { icon: Camera, title: 'Hikvision kamerák', desc: 'Bevált, profi minőségű kamerarendszer – HD felbontással, éjjellátóval és időjárásállóan.' },
  { icon: Zap, title: 'Telepítés és beüzemelés', desc: 'A teljes kiépítési munkát elvégezzük: szerelés, kábelezés, konfigurálás – minden benne van az árban.' },
  { icon: Smartphone, title: 'Mobilos távelérés', desc: 'Bárhonnan figyelheted élőben a kamerákat a telefonodról. Azonnali mozgásérzékelési értesítés.' },
  { icon: MapPin, title: 'Ingyenes helyszíni felmérés', desc: 'Nem sablon-megoldást adunk. Feltérképezzük az ingatlan valódi gyenge pontjait, és arra méretezett rendszert tervezünk.' },
  { icon: Shield, title: 'Garancia', desc: 'Az eszközökre és a munkára is garanciát vállalunk. Telepítés után sem maradunk magadra.' },
  { icon: BadgePercent, title: 'Biztosítói kedvezmény', desc: 'Sok biztosító jelentős díjkedvezményt nyújt kamerarendszerrel védett ingatlanra – a rendszer akár önmagát fizeti.' },
];

const WHY_US = [
  { q: 'Nem csak "felrakunk valamit"', a: 'Ingyenes helyszíni felmérés keretében pontosan megvizsgáljuk az ingatlan elrendezését, a holt szögeket és a tényleges kockázatokat. Olyan rendszert tervezünk, ami valóban véd.' },
  { q: 'Átlátható, fix nettó ár', a: 'A nettó 250 000 Ft tartalmaz mindent: kamerákat, rögzítőt, kábelezést, telepítést, beüzemelést és a mobilos hozzáférés beállítását. Utólag nem jönnek meglepetések.' },
  { q: 'Profi eszközök, nem olcsó "dobozos" termék', a: 'Kizárólag Hikvision rendszereket telepítünk – ez az iparági standard, amelyet a biztosítók és a hatóságok is elfogadnak bizonyítékként.' },
  { q: 'Gyors kiszállás', a: 'Rövid várakozási idővel, rugalmasan időzítünk a megrendelőhöz igazodva. Egy nap alatt a rendszer éles.' },
];

export default function NyaraloKamerarendszerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="relative bg-bg pt-28 pb-20 overflow-hidden border-b border-[#2A2A35]/50">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none"
            aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}14 0%, transparent 70%)` }}
          />
          <div className="max-w-site mx-auto px-6 relative">
            <motion.span
              className="eyebrow-chip"
              initial="hidden" animate="visible" custom={0.05} variants={reveal}
            >
              Aktuális kampány
            </motion.span>

            <motion.h1
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-[-0.04em] leading-[1.05] max-w-3xl"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}
            >
              Biztonságban a nyaralód –{' '}
              <span style={{ color: ACCENT }}>kamerarendszer, mindent beleértve</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted leading-[1.7] max-w-2xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}
            >
              Komplett Hikvision kamerarendszer balatoni nyaralókhoz – kamerák, telepítés, beüzemelés, munkadíj egy átlátható áron.{' '}
              <strong className="text-ink">Nettó 250 000 Ft, rejtett költségek nélkül.</strong>
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial="hidden" animate="visible" custom={0.2} variants={reveal}
            >
              <Link href="/kapcsolat" className="group">
                <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-7 py-3.5 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]">
                  Ingyenes felmérést kérek
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                </button>
              </Link>
              <Link href="/kalkulator">
                <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-7 py-3.5 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                  Árajánlatkérés kalkulátorral
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── A probléma ── */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
              >
                <span className="eyebrow-chip">A valóság</span>
                <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                  Mikor nyugodtál meg utoljára igazán, hogy a nyaralód biztonságban van?
                </h2>
                <p className="mt-5 text-muted text-base leading-[1.7]">
                  Bezárod a kaput, indulsz haza, és már félúton ott motoszkál a kérdés:
                  <em className="text-ink not-italic font-medium"> „Biztos, hogy mindent bezártam?&quot;</em>
                </p>
                <p className="mt-4 text-muted text-base leading-[1.7]">
                  A Balaton környéki nyaralók nagy része hónapokon keresztül üresen áll. Ez pontosan az az időszak, amikor a legkiszolgáltatottabbak vagyunk a betörésekkel szemben.
                </p>
                <p className="mt-4 text-muted text-base leading-[1.7]">
                  Egy feltört nyaraló helyreállítása, az ellopott gépek, bútorok és csónakmotor pótlása{' '}
                  <strong className="text-ink">gyakran több millió forintos kárt jelent.</strong>
                </p>
              </motion.div>

              {/* Kockák */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: AlertTriangle, title: 'Feltörés kockázata', desc: 'Az üresen álló nyaralók kiemelt célpontjai a betörőknek, különösen a szezonon kívüli időszakban.' },
                  { icon: Home, title: 'Milliós kár', desc: 'Gépek, berendezések, bútorok, csónakmotorok – egy betörés akár több milliós veszteséget is okozhat.' },
                  { icon: Eye, title: 'Nincs rálátás', desc: 'Távolból nem tudhatod, mi történik az ingatlannal. Egy kamerarendszer azonnal láthatóvá teszi a történéseket.' },
                  { icon: Lock, title: 'Biztosítói nehézségek', desc: 'Biztosítók gyakran nehezen fizetnek, ha nincs megfelelő vagyonvédelmi rendszer. Egy professzionális telepítés jelentősen javítja a helyzetet.' },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                    custom={i * 0.07} variants={reveal}
                    whileHover={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${ACCENT}12` }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-ink mb-2">{title}</h3>
                    <p className="text-xs text-muted leading-[1.7]">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mit tartalmaz az ajánlat ── */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="mb-14"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
            >
              <span className="eyebrow-chip">Az ajánlat tartalma</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Nettó 250 000 Ft – és ez mindent tartalmaz
              </h2>
              <p className="mt-5 text-muted text-lg leading-[1.7] max-w-2xl">
                Nem egy &ldquo;alap csomag&rdquo;, amit aztán feltornáznak. A teljes megoldásé – semmilyen rejtett díj, semmilyen meglepetés.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INCLUDED.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-8"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                  custom={i * 0.07} variants={reveal}
                  whileHover={{ scale: 1.02, borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ background: `${ACCENT}12` }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink mb-3">{title}</h3>
                  <p className="text-sm text-muted leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Miért minket? ── */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="mb-14"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
            >
              <span className="eyebrow-chip">Miért minket válassz?</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Nem csak felrakunk valamit
              </h2>
              <p className="mt-5 text-muted text-lg leading-[1.7] max-w-2xl">
                Megértjük az ingatlanod elrendezését, és olyan rendszert tervezünk, ami valóban véd – nem csak mutatja magát.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {WHY_US.map(({ q, a }, i) => (
                <motion.div
                  key={q}
                  className="flex items-start gap-5 rounded-lg border border-[#2A2A35] bg-surface p-7"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                  custom={(i % 2) * 0.08} variants={reveal}
                  whileHover={{ borderColor: `${ACCENT}40`, transition: { duration: 0.15 } }}
                >
                  <CheckCircle size={20} strokeWidth={1.5} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-ink mb-2">{q}</h3>
                    <p className="text-sm text-muted leading-[1.7]">{a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Számok / proof ── */}
        <section className="py-20 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: 'Nettó 250 000 Ft', label: 'Fix, mindent tartalmazó ár', sub: 'Rejtett költség nélkül' },
                { stat: '< 24 h', label: 'Helyszíni felmérés', sub: 'Gyorsan reagálunk' },
                { stat: '1 nap', label: 'Telepítési idő', sub: 'Akár egy nap alatt kész' },
              ].map(({ stat, label, sub }, i) => (
                <motion.div
                  key={label}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-8 text-center"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                  custom={i * 0.08} variants={reveal}
                  whileHover={{ scale: 1.02, borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                >
                  <p className="font-display text-3xl font-bold mb-2" style={{ color: ACCENT }}>{stat}</p>
                  <p className="font-semibold text-ink text-sm mb-1">{label}</p>
                  <p className="label text-muted">{sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Végső CTA ── */}
        <section className="py-28 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="relative overflow-hidden rounded-lg border p-12 lg:p-16"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 80px -20px ${ACCENT}` }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{ background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${ACCENT}10 0%, transparent 70%)` }}
              />
              <div className="relative z-10 max-w-2xl">
                <span className="eyebrow-chip mb-6 inline-block">Következő lépés</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  Kérj ingyenes helyszíni felmérést
                </h2>
                <p className="text-muted text-lg leading-[1.7] mb-9">
                  Vedd fel velünk a kapcsolatot – ingyenesen felmérjük az ingatlant, feltérképezzük a gyenge pontokat, és konkrét ajánlatot adunk.{' '}
                  <strong className="text-ink">Kötelezettségmentesen.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kapcsolat" className="group">
                    <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-7 py-3.5 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]">
                      Kapcsolatfelvétel
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </button>
                  </Link>
                  <Link href="/kalkulator">
                    <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-7 py-3.5 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                      Gyors árajánlat kalkulátorral
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
