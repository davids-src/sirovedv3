import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, ClipboardList, Calculator, PhoneCall } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: ClipboardList,
    title: 'Válaszolj 8 kérdésre',
    description: 'Ingatlan típusa, méret, igények – mindössze 5 perc.',
  },
  {
    number: '2',
    icon: Calculator,
    title: 'Azonnali tájékoztató ár',
    description: 'A kalkulátor azonnal megmutatja a becsült árat.',
  },
  {
    number: '3',
    icon: PhoneCall,
    title: 'Visszahívunk, ha szeretnéd',
    description: 'Kötelezettség nélkül egyeztetünk a részletekről.',
  },
];

const trustBadges = [
  'Ingyenes és kötelezettségmentes',
  'Adataid biztonságban vannak',
  '24 órán belül visszahívunk',
];

export default function KalkulatorBemutato() {
  return (
    <section
      id="dijkalkulator-bemutato"
      aria-label="Díjkalkulátor bemutató szekció"
      className="py-20 bg-gray-50"
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
                  text: 'A riasztó telepítés ára az igényektől függ. Biztonságtechnika Székesfehérváron – ingyenes kalkulátorunk segítségével percek alatt tájékoztató árat kap.',
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* ── Bal oldal: szöveg + CTA ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>✦</span>
              <span>Intelligens díjkalkulátor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Kapj pontos árajánlatot –{' '}
              <span className="text-red-600">helyszíni felmérés nélkül</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Nem kell megvárnod a szakembert. 8 egyszerű kérdésre válaszolva
              percek alatt megkapod a tájékoztató{' '}
              <strong>kamerarendszer árajánlatot</strong> vagy a{' '}
              <strong>riasztó telepítés árát</strong> — teljesen
              kötelezettségmentesen.{' '}
              <span className="text-gray-500">
                Biztonságtechnika Székesfehérváron és Fejér megyében.
              </span>
            </p>

            {/* Trust badges */}
            <ul className="flex flex-col sm:flex-row lg:flex-col xl:flex-row flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 text-sm text-gray-700 font-medium"
                >
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  {badge}
                </li>
              ))}
            </ul>

            {/* CTA gombok */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/kalkulator">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold group w-full sm:w-auto"
                >
                  Indítom a kalkulátort →
                </Button>
              </Link>
              <Link href="tel:+36702735532">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 font-semibold w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Inkább felhívok
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Jobb oldal: 3 lépéses folyamatábra ── */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Hogyan működik?
              </p>

              {steps.map(({ number, icon: Icon, title, description }, index) => (
                <div key={number} className="flex items-start gap-5">
                  {/* Ikon kör */}
                  <div className="relative shrink-0">
                    <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Icon className="h-5 w-5 text-red-600" />
                    </div>
                    {/* Összekötő vonal (kivéve az utolsó elem) */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-12 -translate-x-1/2 w-px h-6 bg-red-200" />
                    )}
                  </div>

                  {/* Szöveg */}
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                        {number}. lépés
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}

              {/* Összesítő tipp */}
              <div className="mt-4 bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="text-sm text-red-700 font-medium text-center">
                  🕐 Átlagos kitöltési idő: <strong>4–5 perc</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
