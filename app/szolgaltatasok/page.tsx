import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Camera, Bell, Flame, CircleCheck as CheckCircle, Phone, Shield, Eye, Lock, Zap } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biztonságtechnikai Szolgáltatások Székesfehérváron – Siro Véd',
  description: 'Kamerarendszerek, riasztórendszerek és tűzjelző rendszerek telepítése, javítása és karbantartása Székesfehérváron és Fejér megyében. Ingyenes konzultáció, gyors kiszállás.',
  keywords: ['kamerarendszer Székesfehérvár', 'riasztórendszer Fejér megye', 'biztonságtechnika', 'kamerarendszer telepítés', 'riasztórendszer javítás'],
};

export default function Szolgaltatasok() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Szolgáltatásaink
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Komplett biztonságtechnikai megoldások otthonok, üzletek és irodák számára
                Székesfehérváron és Fejér megyében. Minden szolgáltatásunk magában foglalja
                a telepítést, beüzemelést és a folyamatos támogatást.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Ingyenes, kötelezettségmentes konzultáció</span>
                </span>
                <span className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Gyors kiszállás</span>
                </span>
                <span className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  <CheckCircle className="h-4 w-4" />
                  <span>Javítást is vállalunk</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="kamerarendszerek" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Camera className="h-4 w-4" />
                  <span>Megfigyelés</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Kamerarendszerek
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Modern CCTV kamerarendszerek telepítése és karbantartása. Akár otthonra, akár vállalkozásra van szükséged,
                  mi megtaláljuk a legmegfelelőbb megoldást.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">HD és 4K felbontás</h3>
                      <p className="text-gray-600">Kristálytiszta képminőség minden körülmények között</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Éjjellátó funkció</h3>
                      <p className="text-gray-600">Infravörös technológia a sötétben is tiszta képért</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Távoli hozzáférés</h3>
                      <p className="text-gray-600">Mobil app segítségével bárhonnan követhető a felvétel</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Felhő tároló</h3>
                      <p className="text-gray-600">Biztonságos adattárolás és visszanézés lehetősége</p>
                    </div>
                  </div>
                </div>

                <Link href="/szolgaltatasok/kamerarendszerek">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    További információk
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Eye className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">360° látószög</h4>
                    <p className="text-sm text-red-100">Teljes körű megfigyelés</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Shield className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">IP67 védelem</h4>
                    <p className="text-sm text-red-100">Időjárásálló kivitel</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Zap className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">Gyors telepítés</h4>
                    <p className="text-sm text-red-100">1-2 nap alatt kész</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Camera className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">Smart AI</h4>
                    <p className="text-sm text-red-100">Intelligens mozgásérzékelés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="riasztórendszerek" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Lock className="h-10 w-10 mb-4 text-red-400" />
                    <h4 className="font-semibold mb-2">Automatikus riasztás</h4>
                    <p className="text-sm text-gray-300">Azonnali értesítés</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Shield className="h-10 w-10 mb-4 text-red-400" />
                    <h4 className="font-semibold mb-2">Multi-szenzor</h4>
                    <p className="text-sm text-gray-300">Több érzékelő típus</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Bell className="h-10 w-10 mb-4 text-red-400" />
                    <h4 className="font-semibold mb-2">Hang riasztás</h4>
                    <p className="text-sm text-gray-300">120dB hangerő</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Phone className="h-10 w-10 mb-4 text-red-400" />
                    <h4 className="font-semibold mb-2">24/7 monitoring</h4>
                    <p className="text-sm text-gray-300">Non-stop védelem</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Bell className="h-4 w-4" />
                  <span>Riasztás</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Riasztórendszerek
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Intelligens riasztórendszerek, amelyek azonnal értesítenek betörés vagy gyanús tevékenység esetén.
                  Otthonod vagy vállalkozásod védelme garantált.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Mozgásérzékelők</h3>
                      <p className="text-gray-600">Precíz PIR szenzorok hamis riasztások nélkül</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Ajtó és ablak érzékelők</h3>
                      <p className="text-gray-600">Mágneses kapcsolók a nyílászárók védelmére</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Mobilapp értesítések</h3>
                      <p className="text-gray-600">Azonnali push üzenetek esemény esetén</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Központi vezérlés</h3>
                      <p className="text-gray-600">Egyszerű be- és kikapcsolás mobilról vagy távirányítóval</p>
                    </div>
                  </div>
                </div>

                <Link href="/szolgaltatasok/riasztorendszerek">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    További információk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="tuzjelzo" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Flame className="h-4 w-4" />
                  <span>Tűzvédelem</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Tűzjelző rendszerek
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Megbízható tűzjelző rendszerek, amelyek életeket menthetnek és értékeket óvhatnak meg.
                  Megfelelünk minden biztonsági előírásnak.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Füstérzékelők</h3>
                      <p className="text-gray-600">Korai füst- és füstgázérzékelés optikai technológiával</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hőmérséklet szenzorok</h3>
                      <p className="text-gray-600">Hirtelen hőmérséklet-emelkedés azonnali észlelése</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Automatikus riasztás</h3>
                      <p className="text-gray-600">Hang és fény riasztás a jelzés után azonnal</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Karbantartási csomag</h3>
                      <p className="text-gray-600">Rendszeres karbantartás és ellenőrzés</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                  <p className="text-sm text-yellow-800">
                    <strong>Hamarosan elérhető!</strong> Jelenleg folyamatban van a szolgáltatás bevezetése.
                    Kérjen előzetes ajánlatot!
                  </p>
                </div>

                <Link href="/szolgaltatasok/tuzjelzo-rendszerek">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    További információk
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Flame className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">Korai észlelés</h4>
                    <p className="text-sm text-orange-100">Másodpercek számítanak</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Shield className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">EN 54 szabvány</h4>
                    <p className="text-sm text-orange-100">Teljes megfelelőség</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <Bell className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">90dB riasztás</h4>
                    <p className="text-sm text-orange-100">Mindenkit ébreszti</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <CheckCircle className="h-10 w-10 mb-4 text-white" />
                    <h4 className="font-semibold mb-2">10 év garancia</h4>
                    <p className="text-sm text-orange-100">Minőségi eszközök</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Van kérdésed a szolgáltatásokkal kapcsolatban?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Lépj velünk kapcsolatba, és segítünk kiválasztani a számodra legmegfelelőbb rendszert!
            </p>
            <Link href="/kapcsolat">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Ingyenes konzultáció
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
