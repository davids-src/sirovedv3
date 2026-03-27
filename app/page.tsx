import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Camera, Bell, Flame, Clock, Users, Shield, CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Szolgáltatásaink
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Komplett biztonságtechnikai megoldások minden igényre
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={Camera}
                title="Kamerarendszerek"
                description="Modern CCTV rendszerek telepítése és karbantartása az otthonok és vállalkozások védelme érdekében."
                features={[
                  'HD és 4K felbontású kamerák',
                  'Éjjellátó funkció',
                  'Távoli megfigyelés mobilon',
                  'Felhő alapú tároló',
                ]}
                href="/szolgaltatasok#kamerarendszerek"
              />

              <ServiceCard
                icon={Bell}
                title="Riasztórendszerek"
                description="Intelligens riasztórendszerek, amelyek azonnal értesítenek betörés vagy gyanús tevékenység esetén."
                features={[
                  'Mozgásérzékelők',
                  'Ajtó és ablak érzékelők',
                  'Azonnali értesítések',
                  '24/7 megfigyelés',
                ]}
                href="/szolgaltatasok#riasztórendszerek"
              />

              <ServiceCard
                icon={Flame}
                title="Tűzjelző rendszerek"
                description="Megbízható tűzjelző rendszerek, amelyek életeket menthetnek és értékeket óvhatnak meg."
                features={[
                  'Füstérzékelők',
                  'Hőmérséklet szenzorok',
                  'Automatikus riasztás',
                  'Rendszeres karbantartás',
                ]}
                href="/szolgaltatasok#tuzjelzo"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Miért válassz minket?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A biztonságod számunkra a legfontosabb
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gyors kiszállás
                </h3>
                <p className="text-gray-600">
                  24 órán belül helyszíni felmérés és árajánlat készítés
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Személyre szabott
                </h3>
                <p className="text-gray-600">
                  Minden megoldást az ügyfél egyedi igényeihez igazítunk
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Megbízható működés
                </h3>
                <p className="text-gray-600">
                  Csak minőségi, bevált technológiákat használunk
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Folyamatos támogatás
                </h3>
                <p className="text-gray-600">
                  Telepítés után is számíthat ránk karbantartásban és javításban
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ügyfeleink mondták
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Több mint 500 elégedett ügyfél bízik bennünk
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Kiss Péter"
                role="Kisvállalkozó"
                content="Professzionális munkát végeztek, a kamerarendszer hibátlanul működik. Végre nyugodtan alszom, tudva, hogy az üzletem biztonságban van."
                rating={5}
              />

              <TestimonialCard
                name="Nagy Eszter"
                role="Lakástulajdonos"
                content="Gyors, tiszta munka és nagyon kedves szakemberek. A riasztórendszer telepítése után sokkal biztonságosabbnak érzem magam otthon."
                rating={5}
              />

              <TestimonialCard
                name="Kovács János"
                role="Bolttulajdonos"
                content="Már többször is fordultam hozzájuk, mindig megbízhatóak és pontosak. A karbantartás is gyorsan és szakszerűen történik."
                rating={5}
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Kérj ajánlatot még ma
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Vedd fel velünk a kapcsolatot, és hamarosan elkészítjük számodra a
              személyre szabott ajánlatot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kapcsolat">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 group"
                >
                  Kapcsolatfelvétel
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/szolgaltatasok">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600"
                >
                  Szolgáltatások
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
