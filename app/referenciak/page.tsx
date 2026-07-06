'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Bell, Shield, CheckCircle2, ArrowRight, Home, Store, Building, Warehouse } from 'lucide-react';
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

const REFERENCES = [
  {
    category: 'Lakóingatlan', icon: Home,
    title: 'Családi ház – Székesfehérvár',
    summary: '4 kültéri IP kamera + mozgásérzékelős riasztó',
    details: ['4 db kültéri HD IP kamera (kapu, terasz, garázs, kert)', 'NVR rögzítő, 30 napos felvételtárolás', 'Mobilapp távelérés beállítva', 'Mozgásérzékelős riasztórendszer, 3 zóna', 'GSM értesítés beállítva'],
    tag: 'IP kamera · Riasztó',
  },
  {
    category: 'Üzlethelyiség', icon: Store,
    title: 'Virágüzlet – Székesfehérvár belváros',
    summary: '6 kamerás rendszer + beléptető',
    details: ['2 db beltéri + 4 db kültéri kamera', 'RFID kártyás beléptető az iroda ajtajára', 'Analóg DVR rögzítő, üzleti igényekre optimalizálva', 'Meglévő riasztó GSM modullal bővítve'],
    tag: 'Kamera · Beléptető',
  },
  {
    category: 'Iroda', icon: Building,
    title: 'Ügyvédi iroda – Fejér megye',
    summary: '8 kamera + új riasztórendszer + távfelügyelet',
    details: ['8 db IP HD kamera (folyosók, tárgyaló, recepció, bejárat)', 'Új DSC riasztóközpont, 8 zóna', '4 db PIR mozgásérzékelő + 6 db nyitásérzékelő', 'IP alapú távfelügyelet összekötés', 'Mobilapp kezelés + kódpanel'],
    tag: 'IP kamera · Riasztó · Távfelügyelet',
  },
  {
    category: 'Raktár / Telephely', icon: Warehouse,
    title: 'Kis raktárcsarnok – Székesfehérvár ipari negyed',
    summary: 'Gazdaságos analóg rendszer, nagy terület lefedése',
    details: ['6 db kültéri analóg kamera + 2 db beltéri forgókamera (PTZ)', 'DVR rögzítő, 60 napos felvételtárolás', 'Perimetrikus mozgásérzékelők a bejáratoknál', 'Hang + fény riasztó, GSM visszaigazolás'],
    tag: 'Analóg · PTZ · Riasztó',
  },
  {
    category: 'Vendéglátás', icon: Store,
    title: 'Kávézó – Fejér megye',
    summary: 'Meglévő rendszer bővítése + karbantartás',
    details: ['Meglévő 4 kamerás rendszer 3 új kamerával bővítve', 'Rögzítő szoftver és mobil hozzáférés frissítve', 'Riasztórendszer felülvizsgálat + akkumulátor csere', 'Képminőség javítás: régi kamerák HD-re cserélve'],
    tag: 'Bővítés · Karbantartás',
  },
  {
    category: 'Egészségügy', icon: Bell,
    title: 'Magánrendelő – Székesfehérvár',
    summary: 'Diszkrét IP kamerarendszer + beléptető vezérlés',
    details: ['5 db diszkrét beltéri IP kamera (folyosó, váróterem, bejárat)', 'RFID kártyás beléptető a rendelő ajtaján', 'Titkosított felvételtárolás (GDPR-megfelelő konfig)', 'Mobilapp hozzáférés az orvos részére'],
    tag: 'IP kamera · Beléptető · GDPR',
  },
];

export default function ReferenciaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-bg pt-28 pb-20 overflow-hidden border-b border-[#2A2A35]/50">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none" aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }} />
          <div className="max-w-site mx-auto px-6 relative">
            <motion.span className="eyebrow-chip" initial="hidden" animate="visible" custom={0.05} variants={reveal}>
              Elvégzett munkáink
            </motion.span>
            <motion.h1 className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}>Referenciáink</motion.h1>
            <motion.p className="mt-5 text-lg text-muted leading-[1.7] max-w-2xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}>
              Néhány elvégzett projektünk Székesfehérváron és Fejér megyében.
              Otthontól raktárig, kis munkától komplex rendszerig.
            </motion.p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-8 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="flex flex-wrap gap-6 text-sm text-muted">
              {['500+ elvégzett projekt', 'Székesfehérvár és Fejér megye', 'Otthontól ipari telephelyig', 'Javítást és bővítést is vállalunk'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: ACCENT }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Reference cards */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Projektek</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">Elvégzett projektek</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REFERENCES.map((ref, i) => {
                const Icon = ref.icon;
                return (
                  <motion.div key={ref.title}
                    className="rounded-lg border border-[#2A2A35] bg-surface overflow-hidden flex flex-col"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.06} variants={reveal}
                    whileHover={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 28px -14px ${ACCENT}`, transition: { duration: 0.15 } }}
                  >
                    {/* Card header */}
                    <div className="p-5 border-b border-[#2A2A35]" style={{ background: `${ACCENT}10` }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="rounded p-2" style={{ background: `${ACCENT}20`, border: `1px solid ${ACCENT}40` }}>
                          <Icon size={16} style={{ color: ACCENT }} strokeWidth={1.5} />
                        </div>
                        <span className="label text-muted">{ref.category}</span>
                      </div>
                      <h3 className="font-display font-semibold text-ink text-base leading-snug">{ref.title}</h3>
                      <p className="text-sm mt-1" style={{ color: ACCENT }}>{ref.summary}</p>
                    </div>
                    {/* Card body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <ul className="space-y-2 flex-1">
                        {ref.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-muted">
                            <CheckCircle2 size={14} style={{ color: ACCENT }} className="shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-[#2A2A35]/50">
                        <span className="label" style={{ color: ACCENT }}>{ref.tag}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Anonimizálás note */}
        <section className="py-10 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <p className="font-mono text-xs text-muted text-center leading-[1.6]">
              Ügyfeleinktől kérésre referenciát biztosítunk. Az adatvédelem érdekében a bemutatott projektek részletei anonimizálva szerepelnek.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-bg">
          <div className="max-w-site mx-auto px-6">
            <motion.div
              className="relative overflow-hidden rounded-lg border p-12 lg:p-16"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 80px -20px ${ACCENT}` }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}
            >
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${ACCENT}10 0%, transparent 70%)` }} />
              <div className="relative z-10">
                <span className="eyebrow-chip mb-6 inline-block">Ajánlat</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink tracking-[-0.02em] leading-[1.15] mb-5">
                  Szeretne hasonló rendszert?
                </h2>
                <p className="text-muted text-lg leading-[1.7] mb-9 max-w-xl">
                  8 kérdéssel kap egy tájékoztató árat – helyszíni felmérés nélkül.
                </p>
                <Link href="/kalkulator" className="group">
                  <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                    Intelligens díjkalkulátor
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-150" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
