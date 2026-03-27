import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Target, Heart, Users, Award, Clock, CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rólunk - Siro Véd',
  description: 'Ismerd meg a Siro Véd csapatát és értékeinket. Több mint 10 év tapasztalat a biztonságtechnika területén.',
};

export default function Rolunk() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Rólunk
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A Siro Véd célja, hogy ügyfeleink számára valódi biztonságot nyújtson,
                nem csak eszközöket. Tapasztalatunkkal segítünk a megfelelő rendszer
                kiválasztásában és hosszú távú üzemeltetésében.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">10+</h3>
                <p className="text-gray-600">Év tapasztalat</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">500+</h3>
                <p className="text-gray-600">Elégedett ügyfél</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">24/7</h3>
                <p className="text-gray-600">Ügyfélszolgálat</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Küldetésünk
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A Siro Véd 2013 óta működik a biztonságtechnikai piacon. Kezdetben
                  kisebb otthoni rendszerek telepítésével foglalkoztunk, mára pedig
                  komplett vállalati megoldásokat is nyújtunk.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Hiszünk abban, hogy a biztonság nem luxus, hanem alapvető szükséglet.
                  Célunk, hogy mindenki számára elérhető és megbízható megoldásokat
                  kínáljunk, legyen szó otthonról, üzletről vagy irodáról.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Csapatunk tapasztalt szakemberekből áll, akik folyamatosan képzik
                  magukat, hogy mindig a legújabb technológiákat tudjuk ajánlani
                  ügyfeleinknek.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-12 text-white">
                <Shield className="h-24 w-24 mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-4">
                  Több mint 10 év tapasztalat
                </h3>
                <p className="text-red-100 leading-relaxed">
                  A biztonságtechnika területén szerzett évtizedes tapasztalatunk
                  garancia arra, hogy minden projektet a legmagasabb színvonalon
                  valósítunk meg. Ügyfeleinktől kapott folyamatos pozitív
                  visszajelzések motiválnak minket.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Értékeink
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ezek az alapelvek vezérelnek minket minden nap
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Megbízhatóság
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Minden ígéretünket betartjuk. Pontosak vagyunk, és mindig
                  elérhetők az ügyfeleknek. A telepített rendszerek hosszú távú
                  működését garantáljuk.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Precizitás
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Minden telepítés gondosan megtervezett és precízen kivitelezett.
                  Figyelünk a részletekre, hogy a rendszer tökéletesen működjön
                  minden körülmények között.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ügyfélközpontúság
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Az ügyfelek igényei az elsők. Minden megoldást az egyéni
                  szükségletekhez igazítunk, és folyamatos támogatást nyújtunk
                  a telepítés után is.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Miért dolgozz velünk?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nem csak technológiát adunk, hanem biztonságot és nyugalmat
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ingyenes helyszíni felmérés
                  </h3>
                  <p className="text-gray-600">
                    Minden projektünk konzultációval kezdődik, ahol felmérjük az igényeket
                    és a helyszíni adottságokat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Átlátható árazás
                  </h3>
                  <p className="text-gray-600">
                    Minden költséget előre megbeszélünk, nincsenek rejtett díjak vagy
                    meglepetések.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Garancia és karbantartás
                  </h3>
                  <p className="text-gray-600">
                    Minden eszközre garanciát vállalunk, és rendszeres karbantartási
                    csomagokat kínálunk.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gyors hibaelhárítás
                  </h3>
                  <p className="text-gray-600">
                    Probléma esetén azonnal reagálunk, és gyorsan megoldjuk a
                    felmerült hibákat.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Minőségi eszközök
                  </h3>
                  <p className="text-gray-600">
                    Csak bevált, megbízható márkákkal dolgozunk, amelyek hosszú távon
                    is jól teljesítenek.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Személyre szabott megoldások
                  </h3>
                  <p className="text-gray-600">
                    Minden projekt egyedi, így minden megoldásunk is az. Nincs két
                    egyforma telepítésünk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Készen állsz a következő lépésre?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Vedd fel velünk a kapcsolatot, és beszéljük meg, hogyan tehetjük
              biztonságosabbá otthonod vagy vállalkozásod!
            </p>
            <Link href="/kapcsolat">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 group">
                Kapcsolatfelvétel
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
