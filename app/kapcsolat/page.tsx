import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Kapcsolat - Siro Véd',
  description: 'Lépj velünk kapcsolatba! Telefonon, emailben vagy űrlap kitöltésével kérhetsz ingyenes ajánlatot.',
};

export default function Kapcsolat() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Kapcsolat
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Van kérdésed vagy szeretnél ajánlatot kérni? Vedd fel velünk a kapcsolatot
                az alábbi módokon, és hamarosan válaszolunk!
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Küldj üzenetet
                </h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Elérhetőségek
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                    <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Telefonszám
                      </h3>
                      <a
                        href={SITE.phoneTel}
                        className="text-lg text-red-600 hover:text-red-700 font-medium"
                      >
                        {SITE.phone}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Visszahívást is kérhetsz – munkanapokon jellemzően délelőtt elérhetők vagyunk
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                    <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Email cím
                      </h3>
                      <a
                        href={SITE.emailHref}
                        className="text-lg text-red-600 hover:text-red-700 font-medium"
                      >
                        {SITE.email}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Válaszolunk 24 órán belül
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                    <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Cím
                      </h3>
                      <p className="text-lg text-gray-700">{SITE.address}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Székesfehérvár, Mór, Bicíkérd, Gárdony, Ercsi, Polgardi, Marton vásár és környékük
                      </p>
                    </div>
                  </div>


                </div>

                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ingyenes helyszíni felmérés
                  </h3>
                  <p className="text-red-100 mb-6 leading-relaxed">
                    Kérj ingyenes helyszíni felmérést, ahol személyesen
                    megbeszéljük az igényeidet és elkészítjük a személyre
                    szabott ajánlatot!
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="bg-white/20 rounded-full p-1">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-red-100">24 órán belül kiszállás</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="bg-white/20 rounded-full p-1">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-red-100">Részletes árajánlat</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="bg-white/20 rounded-full p-1">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-red-100">Szakmai tanácsadás</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="bg-white/20 rounded-full p-1">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-red-100">Kötelezettség nélkül</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gyakran Ismételt Kérdések
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A leggyakrabban felmerülő kérdések és válaszok
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Mennyi idő alatt tudnak kiszállni?
                </h3>
                <p className="text-gray-600">
                  Általában 24 órán belül tudunk helyszíni felmérést végezni, de
                  sürgős esetben akár azonnal is reagálunk.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Mennyibe kerül egy átlagos kamerarendszer?
                </h3>
                <p className="text-gray-600">
                  Az ár a kamerák számától, minőségétől és a helyszín adottságaitól
                  függ. Egy alapvető 4 kamerás rendszer kb. 200.000 Ft-tól elérhető
                  telepítéssel együtt.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Van garancia a telepített rendszerre?
                </h3>
                <p className="text-gray-600">
                  Igen, minden általunk telepített eszközre garanciát vállalunk.
                  Az eszközökre gyártói garancia vonatkozik, a munkára pedig
                  1 év garanciát adunk.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Tudnak mobilról is megfigyelni a kamerákat?
                </h3>
                <p className="text-gray-600">
                  Igen, minden általunk telepített rendszer támogatja a távoli
                  hozzáférést mobil applikáción keresztül, így bárhonnan
                  megtekintheted a felvételeket.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Kell-e karbantartani a rendszert?
                </h3>
                <p className="text-gray-600">
                  Ajánlott évente egyszer karbantartást végezni, amely során
                  ellenőrizzük a rendszer működését, tisztítjuk a kamerákat és
                  frissítjük a szoftvereket.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
