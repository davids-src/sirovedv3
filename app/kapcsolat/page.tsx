'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
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

export default function Kapcsolat() {
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
              Lépjen velünk kapcsolatba
            </motion.span>
            <motion.h1 className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]"
              initial="hidden" animate="visible" custom={0.1} variants={reveal}>
              Kapcsolat
            </motion.h1>
            <motion.p className="mt-5 text-lg text-muted leading-[1.7] max-w-xl"
              initial="hidden" animate="visible" custom={0.15} variants={reveal}>
              Kérdése van vagy ajánlatot szeretne kérni? Vegye fel velünk a kapcsolatot az alábbi módokon, és 1 munkanapon belül válaszolunk!
            </motion.p>
          </div>
        </section>

        {/* Form + contact */}
        <section className="py-28 bg-bg border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
                <h2 className="font-display text-2xl font-semibold text-ink tracking-[-0.02em] mb-8">Küldjön üzenetet</h2>
                <ContactForm />
              </motion.div>

              {/* Contact info */}
              <div className="space-y-5">
                <motion.h2 className="font-display text-2xl font-semibold text-ink tracking-[-0.02em] mb-8"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.05} variants={reveal}>
                  Elérhetőségek
                </motion.h2>

                {[
                  { icon: Phone, label: 'Telefonszám', value: SITE.phone, href: SITE.phoneTel, sub: 'Visszahívást is kérhet — munkanapokon elérhetőek vagyunk' },
                  { icon: Mail, label: 'Email cím', value: SITE.email, href: SITE.emailHref, sub: 'Válaszolunk 1 munkanapon belül' },
                  { icon: MapPin, label: 'Helyszíni lefedettség', value: SITE.region, href: undefined, sub: 'Fejér megye, Budapest és a Közép-Dunántúl egész területén' },
                ].map(({ icon: Icon, label, value, href, sub }, i) => (
                  <motion.div key={label}
                    className="flex items-start gap-4 rounded-lg border border-[#2A2A35] bg-surface p-6"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.07} variants={reveal}
                    whileHover={{ borderColor: `${ACCENT}40`, transition: { duration: 0.15 } }}
                  >
                    <div className="rounded-lg p-3 flex-shrink-0" style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}30` }}>
                      <Icon size={20} style={{ color: ACCENT }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="label text-muted mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-base font-semibold text-ink hover:text-[#1A6BE8] transition-colors duration-150">{value}</a>
                      ) : (
                        <p className="text-base font-semibold text-ink">{value}</p>
                      )}
                      <p className="text-sm text-muted mt-1 leading-[1.6]">{sub}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Ingyenes felmérés kártya */}
                <motion.div
                  className="rounded-lg border p-8 mt-6"
                  style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08`, boxShadow: `0 0 40px -20px ${ACCENT}` }}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.21} variants={reveal}
                >
                  <h3 className="font-display text-lg font-semibold text-ink mb-3">Ingyenes helyszíni felmérés</h3>
                  <p className="text-muted text-sm leading-[1.7] mb-5">
                    Kérjen ingyenes helyszíni felmérést, ahol személyesen megbeszéljük az igényeit
                    és elkészítjük a személyre szabott ajánlatot!
                  </p>
                  <ul className="space-y-2.5">
                    {['1 munkanapon belüli válaszidő', 'Részletes árajánlat', 'Szakmai tanácsadás', 'Kötelezettség nélkül'].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                        <CheckCircle size={15} strokeWidth={1.5} style={{ color: ACCENT }} className="shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 bg-[#111116]/50 border-b border-[#2A2A35]/50">
          <div className="max-w-site mx-auto px-6">
            <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0} variants={reveal}>
              <span className="eyebrow-chip">Kérdések</span>
              <h2 className="font-display mt-6 text-3xl lg:text-4xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
                Gyakran Ismételt Kérdések
              </h2>
              <p className="mt-5 text-muted text-lg leading-[1.7]">A leggyakrabban felmerülő kérdések és válaszok</p>
            </motion.div>

            <div className="max-w-3xl space-y-4">
              {[
                { q: 'Mennyi idő alatt tudnak kiszállni?', a: '1 munkanapon belül reagálunk a megkeresésekre, és rugalmasan egyeztetünk időpontot a helyszíni felmérésre.' },
                { q: 'Mennyibe kerül egy átlagos kamerarendszer?', a: 'Az ár a kamerák számától, típusától és a helyszín adottságaitól függ. Egyedi igényekre szabott pontos ajánlatot a felmérést követően adunk.' },
                { q: 'Van garancia a telepített rendszerre?', a: 'Igen, a telepített eszközökre a gyártó által biztosított garancia érvényes, a kivitelezési munkára pedig 1 év garanciát vállalunk.' },
                { q: 'Tudom mobilról is megfigyelni a kamerákat?', a: 'Igen, az általunk telepített rendszerek támogatják a távoli hozzáférést mobilalkalmazáson keresztül, így bárhonnan biztonságosan megtekintheti a felvételeket.' },
                { q: 'Kérhető rendszeres karbantartás?', a: 'Igen, vállaljuk a meglévő és az általunk telepített rendszerek rendszeres műszaki felülvizsgálatát és karbantartását.' },
              ].map(({ q, a }, i) => (
                <motion.div key={q}
                  className="rounded-lg border border-[#2A2A35] bg-surface p-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={i * 0.06} variants={reveal}
                  whileHover={{ borderColor: `${ACCENT}40`, transition: { duration: 0.15 } }}
                >
                  <h3 className="font-display font-semibold text-ink mb-3">{q}</h3>
                  <p className="text-muted text-sm leading-[1.7]">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
