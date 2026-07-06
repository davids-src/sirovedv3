'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KalkulatorWizard from '@/components/calculator/KalkulatorWizard';
import { CheckCircle2, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/config';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

const TRUST_POINTS = [
  { icon: ShieldCheck, title: 'Ingyenes helyszíni felmérés', desc: 'A kalkulátor után kollégánk személyesen is felméri az ingatlant – díjmentesen, kötelezettség nélkül.' },
  { icon: CheckCircle2, title: 'Megbízható márkák, garanciával', desc: 'Csak bevált, minőségi eszközöket telepítünk – gyártói garanciával és 1 év munkadíj garanciával.' },
  { icon: Phone, title: 'Gyors reagálás', desc: '1 munkanapon belül visszahívjuk – Székesfehérváron általában 24–48 órán belül ki tudunk szállni.' },
];

export default function KalkulatorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-bg pt-28 pb-20 overflow-hidden border-b border-[#2A2A35]/50">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }} />
          <div className="max-w-site mx-auto px-6 relative">
            <motion.span className="eyebrow-chip" initial="hidden" animate="visible" custom={0.05} variants={reveal}>
              Ingyenes, kötelezettségmentes
            </motion.span>
            <motion.h1 className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}>
              Ingyenes árajánlat kalkulátor
            </motion.h1>
            <motion.p className="mt-5 text-lg text-muted leading-[1.7] max-w-xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}>
              8 kérdés, 5 perc – azonnal kap egy tájékoztató árat. Helyszíni felmérés nélkül.
            </motion.p>
            <motion.p className="mt-3 font-mono text-sm text-muted/70"
              initial="hidden" animate="visible" custom={0.2} variants={reveal}>
              Minden adat bizalmasan kezelt. Kötelezettség nélküli tájékoztatás.
            </motion.p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-2xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <KalkulatorWizard />
            </motion.div>
          </div>
        </section>

        {/* Trust section */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Miért mi?</span>
              <h2 className="font-display mt-6 text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Miért érdemes nálunk ajánlatot kérni?
              </h2>
              <p className="mt-5 text-muted leading-[1.7]">Gyors, átlátható és kötelezettségmentes ajánlatkérés.</p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {TRUST_POINTS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.08} variants={reveal}
                  whileHover={{ scale: 1.02, borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}30` }}>
                    <Icon size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display font-semibold text-ink text-sm mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-[1.7]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact fallback */}
        <section className="py-16 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="max-w-xl mx-auto text-center"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
            >
              <p className="text-ink font-semibold mb-6">Inkább személyesen kérdezne?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={SITE.phoneTel} className="group flex items-center justify-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                  <Phone size={16} />
                  {SITE.phone}
                </a>
                <a href={SITE.emailHref} className="flex items-center justify-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150">
                  <Mail size={16} className="text-muted" />
                  {SITE.email}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
