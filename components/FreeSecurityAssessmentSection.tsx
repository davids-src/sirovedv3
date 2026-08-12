'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Camera,
  Bell,
  Lock,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

const ACCENT = '#1A6BE8';

interface FreeSecurityAssessmentSectionProps {
  variant?: 'full' | 'compact';
}

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function FreeSecurityAssessmentSection({
  variant = 'full',
}: FreeSecurityAssessmentSectionProps) {
  const isCompact = variant === 'compact';

  if (isCompact) {
    return (
      <section className="py-16 bg-[#0E0E12] border-t border-[#2A2A35]/50 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          aria-hidden="true"
          style={{ background: `radial-gradient(ellipse at center, ${ACCENT}15 0%, transparent 70%)` }}
        />

        <div className="max-w-site mx-auto px-6 relative z-10">
          <div
            className="rounded-lg border bg-surface p-8 lg:p-10 relative overflow-hidden"
            style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 48px -16px ${ACCENT}` }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl text-left">
                <span className="eyebrow-chip inline-flex items-center gap-1.5">
                  <ShieldAlert size={13} style={{ color: ACCENT }} />
                  Ingyenes Vagyonvédelmi Állapotfelmérés
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-ink tracking-[-0.02em] leading-[1.2]">
                  Tudja pontosan, mennyire védett az ingatlana és a vagyona?
                </h3>
                <p className="text-muted text-sm sm:text-base leading-[1.7]">
                  Feltérképezzük meglévő kamera- és riasztórendszerét, valamint az ingatlan védelmi pontjait helyszíni felméréssel — konkrét fejlesztési javaslattal és tételes árajánlattal a felmérést követő egy héten belül.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted pt-1">
                  <span className="flex items-center gap-1.5 text-ink font-medium">
                    <CheckCircle2 size={14} style={{ color: ACCENT }} /> Helyszíni fizikai ellenőrzés
                  </span>
                  <span className="flex items-center gap-1.5 text-ink font-medium">
                    <CheckCircle2 size={14} style={{ color: ACCENT }} /> Kötelezettségmentes árazott javaslat
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
                <Link href="/kapcsolat?forras=ingyenes-felmeres" className="group w-full lg:w-auto">
                  <button className="relative flex items-center justify-center gap-2.5 w-full lg:w-auto bg-[#1A6BE8] text-white font-semibold rounded px-7 py-3.5 text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out shadow-[0_0_28px_-12px_#1A6BE8] hover:shadow-[0_0_40px_-6px_#1A6BE8]">
                    <span className="relative z-10 flex items-center gap-2">
                      Kérem az ingyenes felmérést
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                    </span>
                    {/* Subtle pulse border animation */}
                    <span className="absolute inset-0 rounded border border-white/30 animate-ping opacity-25 pointer-events-none" />
                  </button>
                </Link>
                <Link
                  href="/ingyenes-felmeres"
                  className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-ink transition-colors duration-150"
                >
                  Hogyan zajlik ez pontosan?
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-bg border-t border-[#2A2A35]/50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute -top-40 right-10 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: `radial-gradient(ellipse at center, ${ACCENT}10 0%, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{ background: `radial-gradient(ellipse at center, ${ACCENT}08 0%, transparent 70%)` }}
      />

      <div className="max-w-site mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Content Column (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
            variants={revealVariants}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow-chip inline-flex items-center gap-2">
                <Shield size={13} style={{ color: ACCENT }} />
                Elsődleges Vagyonvédelmi Ajánlat
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-[-0.03em] leading-[1.12]">
              Tudja pontosan, mennyire védett az ingatlana és a vagyona?
            </h2>

            <p className="text-muted text-base sm:text-lg leading-[1.75]">
              Ingyenes, kötelezettségmentes vagyonvédelmi biztonságtechnikai állapotfelmérést készítünk — meglévő kamera- és riasztórendszerének, valamint az ingatlan védelmi pontjainak feltérképezése, konkrét fejlesztési javaslattal és tételes árajánlattal a felmérést követő egy héten belül.
            </p>

            {/* Bullets with custom icons */}
            <div className="space-y-3.5 pt-2 pb-2">
              {[
                {
                  icon: Camera,
                  text: 'Meglévő kamera- és riasztórendszer állapotának felmérése',
                },
                {
                  icon: AlertTriangle,
                  text: 'Védelmi pontok és kockázati zónák azonosítása az ingatlanon',
                },
                {
                  icon: Shield,
                  text: 'Biztosítói és vagyonvédelmi minimumkövetelmények áttekintése',
                },
                {
                  icon: Bell,
                  text: 'Konkrét fejlesztési javaslat és tételes árajánlat egy héten belül',
                },
                {
                  icon: Shield,
                  text: 'Átlátható állapotfelmérési összefoglaló és egyedi javaslat',
                },
              ].map(({ icon: Icon, text }, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-150"
                    style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}35` }}
                  >
                    <Icon size={16} style={{ color: ACCENT }} strokeWidth={1.75} />
                  </div>
                  <span className="text-sm sm:text-base text-ink font-medium leading-[1.6]">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Line */}
            <div className="p-4 rounded-lg bg-[#14141B] border border-[#2A2A35] flex items-center gap-3 text-sm text-muted">
              <div
                className="w-3 h-3 rounded-full shrink-0 animate-pulse"
                style={{ background: ACCENT }}
              />
              <p className="font-mono text-xs sm:text-sm text-muted">
                Személyre szabott vagyonvédelmi felmérés vállalkozásoknak és magánszemélyeknek egyaránt.
              </p>
            </div>

            {/* CTA Section */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="/kapcsolat?forras=ingyenes-felmeres" className="group flex-1 sm:flex-none">
                  <button className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1A6BE8] text-white font-semibold rounded-lg px-8 py-4 text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out shadow-[0_0_35px_-10px_#1A6BE8] hover:shadow-[0_0_50px_-5px_#1A6BE8]">
                    <span>Kérem az ingyenes felmérést</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-150" />
                    <span className="absolute inset-0 rounded-lg border border-white/30 animate-ping opacity-20 pointer-events-none" />
                  </button>
                </Link>

                <Link
                  href="/ingyenes-felmeres"
                  className="group inline-flex items-center justify-center gap-2 font-mono text-sm text-muted hover:text-ink transition-colors duration-150 py-3 px-4 rounded border border-[#2A2A35] hover:border-[#404055]"
                >
                  <span>Hogyan zajlik ez pontosan?</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </div>

              {/* Microcopy below CTA */}
              <p className="text-xs text-muted leading-[1.6] max-w-xl">
                A felmérés kötelezettségmentes.
              </p>
            </div>
          </motion.div>

          {/* Right Graphics Column (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.15}
            variants={revealVariants}
          >
            {/* 1. Floating Status Card Mockup */}
            <div
              className="rounded-xl border bg-surface p-6 relative overflow-hidden shadow-2xl"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 60px -20px ${ACCENT}` }}
            >
              <div className="pb-4 mb-4 border-b border-[#2A2A35]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                    style={{ background: `${ACCENT}15` }}
                  >
                    <Shield size={18} style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-ink">
                      Vagyonvédelmi Ellenőrzési Lista
                    </h3>
                    <p className="font-mono text-[11px] text-muted">Amit a helyszínen átvizsgálunk</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: '1. Kamerarendszer lefedettsége és látószögei',
                    detail: 'Megfelelő kameraszám, vakfoltok elkerülése, éjszakai látótávolság',
                  },
                  {
                    title: '2. Riasztó érzékelők elhelyezése és állapota',
                    detail: 'Mozgás- és nyitásérzékelők elhelyezése, akkumulátorok állapota',
                  },
                  {
                    title: '3. Behatolási pontok és nyílászárók védelme',
                    detail: 'Kritikus behatolási útvonalak és nyílászárók biztonsági szintje',
                  },
                  {
                    title: '4. Biztosítói minimumkövetelmények teljesülése',
                    detail: 'Vagyonvédelmi előírásoknak való megfelelőség vizsgálata',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#111116] border border-[#2A2A35] text-xs"
                  >
                    <p className="font-medium text-ink text-xs">{item.title}</p>
                    <p className="text-[11px] text-muted mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Risk Zone / Visual Element */}
            <div className="rounded-xl border border-[#2A2A35] bg-surface p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="eyebrow-chip text-[11px] py-0.5 px-2">
                  TIPIKUSAN VIZSGÁLT ZÓNÁK
                </span>
                <span className="font-mono text-xs text-muted">Ingatlan fizikai ellenőrzése</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Főbejárat & Kapu', state: 'Ajtónyitás és belépési pontok', color: 'border-[#1A6BE8]/30 bg-[#1A6BE8]/5 text-ink' },
                  { label: 'Raktár & Értéktár', state: 'Belső terek és tárolók', color: 'border-[#1A6BE8]/30 bg-[#1A6BE8]/5 text-ink' },
                  { label: 'Udvar & Parkoló', state: 'Külső kerület és megközelítés', color: 'border-[#1A6BE8]/30 bg-[#1A6BE8]/5 text-ink' },
                ].map((zone, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border text-left ${zone.color} space-y-1`}
                  >
                    <p className="font-display font-semibold text-xs text-ink">{zone.label}</p>
                    <p className="font-mono text-[10px] text-muted">{zone.state}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
