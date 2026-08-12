'use client';

import Link from 'next/link';
import { CheckCircle, ClipboardList, Calculator, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

const steps = [
  {
    number: '1',
    icon: ClipboardList,
    title: 'Válaszoljon 8 kérdésre',
    description: 'Ingatlan típusa, mérete és az alapvető igények.',
  },
  {
    number: '2',
    icon: Calculator,
    title: 'Tájékoztató ár',
    description: 'A kalkulátor azonnal megjeleníti a becsült nagyságrendi árat.',
  },
  {
    number: '3',
    icon: Shield,
    title: 'Helyszíni felmérés',
    description: 'Egyeztetett időpontban ingyenes helyszíni felmérést végzünk a pontos ajánlathoz.',
  },
];

const trustBadges = [
  'Ingyenes és kötelezettségmentes',
  'Adatai biztonságban vannak',
  '1 munkanapon belül visszajelzünk',
];

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function KalkulatorBemutato() {
  return (
    <section
      id="dijkalkulator-bemutato"
      aria-label="Díjkalkulátor bemutató szekció"
      className="py-28 bg-[#111116]/50 border-t border-[#2A2A35]/50"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Mennyibe kerül a kamerarendszer telepítése?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Használja ingyenes díjkalkulátorunkat a tájékoztató ár megismeréséhez. A kamerarendszer árajánlat percek alatt elkészül, kötelezettségmentesen.',
                },
              },
              {
                '@type': 'Question',
                name: 'Mennyibe kerül a riasztó telepítés ára?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A riasztó telepítés ára az igényektől függ. Ingyenes kalkulátorunk segítségével percek alatt tájékoztató árat kap.',
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* ── Bal oldal: szöveg + CTA ── */}
          <div className="flex-1">
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              variants={revealVariants}
            >
              <span className="eyebrow-chip">Intelligens díjkalkulátor</span>
            </motion.div>

            <motion.h2
              className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.08}
              variants={revealVariants}
            >
              Nagyságrendi ár{' '}
              <span style={{ color: ACCENT }}>néhány perc alatt</span>
            </motion.h2>

            <motion.p
              className="mt-5 text-muted text-lg leading-[1.7] max-w-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.12}
              variants={revealVariants}
            >
              Nyolc egyszerű kérdésre válaszolva néhány perc alatt tájékoztató árat kap a kamerarendszer vagy a riasztó telepítésére. A pontos ajánlathoz helyszíni felmérés szükséges — azt díjmentesen elvégezzük.
            </motion.p>

            {/* Trust badges */}
            <motion.ul
              className="mt-6 flex flex-col gap-2.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.16}
              variants={revealVariants}
            >
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2.5 text-sm text-muted font-medium"
                >
                  <CheckCircle size={16} strokeWidth={1.5} style={{ color: ACCENT }} className="shrink-0" />
                  {badge}
                </li>
              ))}
            </motion.ul>

            {/* CTA gombok */}
            <motion.div
              className="mt-9 flex flex-col sm:flex-row gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0.2}
              variants={revealVariants}
            >
              <Link href="/kalkulator" className="group">
                <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]">
                  Indítom a kalkulátort
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-150" />
                </button>
              </Link>
              <Link href="/ingyenes-felmeres">
                <button className="flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                  <Shield size={16} className="text-muted" />
                  Inkább felmérést kérek
                </button>
              </Link>
            </motion.div>
          </div>

          {/* ── Jobb oldal: 3 lépéses folyamatábra ── */}
          <motion.div
            className="flex-1 w-full max-w-md lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.1}
            variants={revealVariants}
          >
            <div className="rounded-lg border border-[#2A2A35] bg-surface p-8 space-y-6">
              <span className="label text-muted">Hogyan működik?</span>

              <div className="mt-6 space-y-6">
                {steps.map(({ number, icon: Icon, title, description }, index) => (
                  <div key={number} className="flex items-start gap-5">
                    {/* Ikon */}
                    <div className="relative shrink-0">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}40` }}
                      >
                        <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                      </div>
                      {/* Összekötő vonal */}
                      {index < steps.length - 1 && (
                        <div
                          className="absolute left-1/2 top-11 -translate-x-1/2 w-px h-6"
                          style={{ background: `${ACCENT}30` }}
                        />
                      )}
                    </div>

                    {/* Szöveg */}
                    <div className="pt-1">
                      <span className="label mb-1 block" style={{ color: ACCENT }}>
                        {number}. lépés
                      </span>
                      <h3 className="font-display font-semibold text-ink text-base mb-1">{title}</h3>
                      <p className="text-muted text-sm leading-[1.7]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tipp */}
              <div
                className="mt-4 rounded border p-4"
                style={{ background: `${ACCENT}08`, borderColor: `${ACCENT}30` }}
              >
                <p className="text-sm text-center" style={{ color: ACCENT }}>
                  Átlagos kitöltési idő: <strong>4–5 perc</strong>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
