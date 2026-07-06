'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Camera, Bell, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

const featureCards = [
  { icon: Camera, label: 'Kamerarendszer' },
  { icon: Bell, label: 'Riasztórendszer' },
  { icon: Flame, label: 'Tűzjelző rendszer' },
  { icon: Shield, label: 'Intelligens kalkulátor' },
];

export default function Hero() {
  return (
    <section className="relative bg-bg pt-36 sm:pt-44 pb-28 overflow-hidden">
      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute left-1/4 top-1/3 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse at center, ${ACCENT}18 0%, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-site mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow-chip">
                Megbízható biztonság – Székesfehérvár
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.05] tracking-[-0.04em]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Biztonság, amire{' '}
              <span style={{ color: ACCENT }}>számíthat</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-5 text-lg text-muted leading-[1.7]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Kamerarendszer, riasztó és tűzjelző telepítés, javítás, karbantartás
              Székesfehérváron és Fejér megyében.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="mt-9 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/kalkulator" className="group">
                <button
                  className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8] w-full sm:w-auto justify-center"
                >
                  Intelligens díjkalkulátor
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                </button>
              </Link>
              <Link href="/szolgaltatasok">
                <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150 w-full sm:w-auto justify-center">
                  Szolgáltatások
                </button>
              </Link>
            </motion.div>

            {/* Checkmarks */}
            <motion.div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex items-center gap-1.5">
                <span style={{ color: ACCENT }}>✓</span> Ingyenes, kötelezettségmentes konzultáció
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: ACCENT }}>✓</span> Gyors kiszállás
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: ACCENT }}>✓</span> Meglévő rendszerek javítását is vállaljuk
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-10 pt-8 grid grid-cols-2 gap-8 border-t border-[#2A2A35]/50"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>&lt;24h</p>
                <p className="label mt-1 text-muted">kiszállás</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold" style={{ color: ACCENT }}>24/7</p>
                <p className="label mt-1 text-muted">ügyfélszolgálat</p>
              </div>
            </motion.div>
          </div>

          {/* Right — feature card strip */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Display icon */}
            <motion.div
              className="col-span-2 flex items-center justify-center rounded-lg border bg-surface p-8"
              style={{
                borderColor: `${ACCENT}40`,
                boxShadow: `0 0 56px -14px ${ACCENT}`,
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, boxShadow: `0 0 80px -10px ${ACCENT}` }}
            >
              <Shield
                size={84}
                strokeWidth={1.25}
                style={{ color: ACCENT }}
              />
            </motion.div>

            {/* Feature cards */}
            {featureCards.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                className="rounded-lg border bg-surface p-5 flex items-center gap-3"
                style={{ borderColor: `${ACCENT}40` }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + index * 0.06, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 28px -14px ${ACCENT}`,
                  borderColor: `${ACCENT}70`,
                  transition: { duration: 0.15, ease: 'easeOut' },
                }}
              >
                <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                <span className="text-sm font-semibold text-ink">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
