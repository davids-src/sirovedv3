'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

export default function Hero() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

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
                Fejér megye · Budapest · Közép-Dunántúl
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.05] tracking-[-0.04em]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Kamera- és riasztórendszerek{' '}
              <span style={{ color: ACCENT }}>telepítése, javítása és karbantartása</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              className="mt-5 text-lg text-muted leading-[1.7] font-normal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Megbízható vagyonvédelmi megoldások Fejér megyében, Budapesten és a Közép-Dunántúlon.
            </motion.h2>

            {/* CTA buttons */}
            <motion.div
              className="mt-9 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/ingyenes-felmeres" className="group">
                <button
                  className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8] w-full sm:w-auto justify-center"
                >
                  Ingyenes állapotfelmérés
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                </button>
              </Link>
              <Link href="/kalkulator">
                <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150 w-full sm:w-auto justify-center">
                  Díjkalkulátor
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
                <span style={{ color: ACCENT }}>✓</span> Ingyenes, kötelezettségmentes helyszíni felmérés
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: ACCENT }}>✓</span> 1 munkanapon belüli válaszidő
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: ACCENT }}>✓</span> Meglévő rendszerek javítása és karbantartása
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-10 pt-8 grid grid-cols-3 gap-4 border-t border-[#2A2A35]/50"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold" style={{ color: ACCENT }}>Fejér m. · Budapest</p>
                <p className="label mt-1 text-muted uppercase">HELYSZÍNI LEFEDETTSÉG</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold" style={{ color: ACCENT }}>1 munkanap</p>
                <p className="label mt-1 text-muted uppercase">VÁLASZIDŐ MEGKERESÉSRE</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold" style={{ color: ACCENT }}>24/7</p>
                <p className="label mt-1 text-muted uppercase">SZERZŐDÉSES ÜGYELET</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Inspection Points Card with SVG Floorplan */}
          <motion.div
            className="rounded-xl border bg-surface p-6 sm:p-7 relative overflow-hidden"
            style={{
              borderColor: `${ACCENT}40`,
              boxShadow: `0 0 56px -14px ${ACCENT}`,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#1A6BE8] bg-[#1A6BE8]/10 px-3 py-1 rounded-full border border-[#1A6BE8]/20">
                  Helyszíni felmérés
                </span>
                <span className="font-mono text-xs text-muted">5 vizsgálati zóna</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-3">
                Mit vizsgálunk a helyszínen?
              </h3>
              <p className="text-xs font-mono text-muted mt-1">
                Illusztráció — a felmérés tipikus vizsgálati pontjai
              </p>
            </div>

            {/* SVG Floor Plan Illustration */}
            <div className="relative bg-[#0D0D12] rounded-lg p-3 sm:p-4 border border-[#2A2A35]/60 mb-4 overflow-hidden">
              <svg
                viewBox="0 0 400 200"
                className="w-full h-auto text-muted/40 select-none"
              >
                {/* Background grid */}
                <defs>
                  <pattern id="hero-grid-pat" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2A2A35" strokeWidth="0.5" opacity="0.4" />
                  </pattern>
                </defs>
                <rect width="400" height="200" fill="url(#hero-grid-pat)" />

                {/* Property boundary line */}
                <rect x="15" y="15" width="370" height="170" rx="8" fill="none" stroke="#2A2A35" strokeWidth="1" strokeDasharray="4 4" />
                <text x="25" y="30" fill="#666677" fontSize="9" fontFamily="monospace">TELEKHATÁR</text>

                {/* Main Building Structure */}
                <rect x="70" y="45" width="210" height="115" rx="4" fill="#14141A" stroke="#3A3A4A" strokeWidth="1.5" />

                {/* Internal Walls */}
                <line x1="165" y1="45" x2="165" y2="160" stroke="#3A3A4A" strokeWidth="1.5" />
                <line x1="165" y1="102" x2="280" y2="102" stroke="#3A3A4A" strokeWidth="1.5" />
                <line x1="70" y1="102" x2="165" y2="102" stroke="#3A3A4A" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Room Labels */}
                <text x="80" y="75" fill="#555566" fontSize="9" fontFamily="monospace">Technikai helyiség</text>
                <text x="85" y="135" fill="#555566" fontSize="9" fontFamily="monospace">Előtér / Bejárat</text>
                <text x="180" y="75" fill="#555566" fontSize="9" fontFamily="monospace">Belső terek</text>
                <text x="180" y="135" fill="#555566" fontSize="9" fontFamily="monospace">Iroda / Élettér</text>
                <text x="305" y="102" fill="#555566" fontSize="9" fontFamily="monospace">Udvar / Kültér</text>

                {/* Door / Window Accent Lines */}
                <line x1="105" y1="160" x2="135" y2="160" stroke={ACCENT} strokeWidth="2.5" />
                <line x1="215" y1="45" x2="245" y2="45" stroke={ACCENT} strokeWidth="2.5" />
                <line x1="280" y1="120" x2="280" y2="140" stroke={ACCENT} strokeWidth="2.5" />

                {/* Visual Dotted Arcs */}
                <path d="M 120 160 A 25 25 0 0 1 95 180" fill="none" stroke={ACCENT} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                <path d="M 220 125 L 195 150 M 220 125 L 245 150" stroke={ACCENT} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                <path d="M 325 120 L 360 95 M 325 120 L 365 145" stroke={ACCENT} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

                {/* Numbered Marker Nodes */}
                {[
                  { id: 1, cx: 120, cy: 160 },
                  { id: 2, cx: 230, cy: 45 },
                  { id: 3, cx: 220, cy: 125 },
                  { id: 4, cx: 325, cy: 120 },
                  { id: 5, cx: 110, cy: 85 },
                ].map(({ id, cx, cy }) => {
                  const isActive = activePoint === id;
                  return (
                    <g
                      key={id}
                      className="cursor-pointer transition-transform duration-200"
                      onMouseEnter={() => setActivePoint(id)}
                      onMouseLeave={() => setActivePoint(null)}
                      style={{ transformOrigin: `${cx}px ${cy}px`, transform: isActive ? 'scale(1.25)' : 'scale(1)' }}
                    >
                      {isActive && (
                        <circle cx={cx} cy={cy} r="16" fill={`${ACCENT}30`} stroke={ACCENT} strokeWidth="1" />
                      )}
                      <circle
                        cx={cx}
                        cy={cy}
                        r="11"
                        fill={isActive ? ACCENT : '#181822'}
                        stroke={ACCENT}
                        strokeWidth="1.5"
                      />
                      <text
                        x={cx}
                        y={cy + 3.5}
                        fill={isActive ? '#FFFFFF' : ACCENT}
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {id}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Inspection Points List */}
            <div className="space-y-1.5">
              {[
                { id: 1, title: 'Főbejárat', desc: 'Nyitásérzékelés és kamerakép a belépési ponton' },
                { id: 2, title: 'Nyílászárók', desc: 'Ajtók és ablakok érzékelővel való ellátottsága' },
                { id: 3, title: 'Belső terek', desc: 'Mozgásérzékelők lefedettsége és elhelyezése' },
                { id: 4, title: 'Kültér, udvar', desc: 'Kamerák látószöge és éjszakai láthatóság' },
                { id: 5, title: 'Vezérlés', desc: 'Riasztóközpont, tápellátás és jelzésátvitel' },
              ].map(({ id, title, desc }) => {
                const isActive = activePoint === id;
                return (
                  <div
                    key={id}
                    className={`p-2.5 rounded-lg border text-xs transition-all duration-150 cursor-pointer flex items-start gap-3 ${
                      isActive
                        ? 'border-[#1A6BE8] bg-[#1A6BE8]/10 shadow-[0_0_15px_-5px_#1A6BE8]'
                        : 'border-[#2A2A35]/60 bg-[#111116]/60 hover:border-[#1A6BE8]/40'
                    }`}
                    onMouseEnter={() => setActivePoint(id)}
                    onMouseLeave={() => setActivePoint(null)}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                        isActive ? 'bg-[#1A6BE8] text-white' : 'bg-[#1A6BE8]/15 text-[#1A6BE8] border border-[#1A6BE8]/30'
                      }`}
                    >
                      {id}
                    </span>
                    <div>
                      <span className="font-semibold text-ink text-xs">{title}</span>
                      <span className="text-muted text-[11px] block leading-tight mt-0.5">{desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer note */}
            <p className="text-[11px] text-muted mt-3.5 pt-3 border-t border-[#2A2A35]/50 leading-relaxed font-mono">
              A felmérés során az Ön ingatlanára szabva nézzük át ezeket a pontokat.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

