import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import KalkulatorBemutato from '@/components/KalkulatorBemutato';
import { Button } from '@/components/ui/button';
import { Camera, Bell, Flame, Clock, Users, Shield, CircleCheck as CheckCircle, ArrowRight, Zap, MapPin, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <KalkulatorBemutato />

        {/* ── Promóciós ajánlat banner ── */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 shadow-2xl">
              {/* Háttér dekor körök */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />
              {/* Finom rács textúra */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12">

                {/* Kamera ikon blokk */}
                <div className="shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-red-600/30 border border-red-500/40 flex items-center justify-center backdrop-blur-sm">
                      <Camera className="h-12 w-12 text-red-400" />
                    </div>
                    {/* Pulzáló gyűrű */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-red-500/30 animate-ping" style={{ animationDuration: '2.5s' }} />
                  </div>
                </div>

                {/* Szöveg blokk */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Ajánlat badge */}
                  <div className="inline-flex items-center gap-2 bg-red-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
                    <Zap className="h-3.5 w-3.5" />
                    Aktuális ajánlat
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                    4 kamerás rendszer{' '}
                    <span className="text-red-400">már nettó 100 000 Ft-tól</span>
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
                    Védd meg otthonod vagy vállalkozásod! Komplett HD kamerarendszer
                    – telepítéssel, beüzemeléssel és mobilos táveléréssel. Profi munka, megfizethető áron.
                  </p>

                  {/* 3 apró jellemző */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4 text-red-400" />
                      </div>
                      <span>Ingyenes helyszíni felmérés</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <CalendarCheck className="h-4 w-4 text-red-400" />
                      </div>
                      <span>Akár 1 nap alatt kész</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-4 w-4 text-red-400" />
                      </div>
                      <span>Garanciával, számlával</span>
                    </div>
                  </div>
                </div>

                {/* CTA jobb oldal */}
                <div className="shrink-0 flex flex-col items-center gap-3 w-full lg:w-auto">
                  <Link href="/kalkulator" className="w-full lg:w-auto">
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-500 text-white font-bold shadow-[0_0_24px_rgba(220,38,38,0.45)] hover:shadow-[0_0_32px_rgba(220,38,38,0.65)] transition-all group w-full lg:w-auto whitespace-nowrap"
                    >
                      Árajánlatot kérek
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-xs text-gray-400 text-center">Kötelezettségmentes · Ingyenes</p>
                </div>

              </div>
            </div>
          </div>
        </section>

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
                href="/szolgaltatasok/kamerarendszerek"
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
                href="/szolgaltatasok/riasztorendszerek"
              />

              <ServiceCard
                icon={Flame}
                title="Tűzjelző rendszerek"
                description="Megbízható tűzjelző rendszerek, amelyek életeket menthetnek és értékeket óvhatnak meg."
                features={[
                  'Füstérzékelők',
                  'Hőmérséklet szenzorok',
                  'Hang- és fényriasztás',
                  'Rendszeres karbantartás',
                ]}
                href="/szolgaltatasok/tuzjelzo-rendszerek"
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

        <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Kérj ajánlatot percek alatt
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Használd az <strong>intelligens díjkalkulátorunkat</strong> – percek alatt pontos árajánlatot kapsz,
              teljesen kötelezettségmentesen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kalkulator">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 group"
                >
                  Árajánlatkérés kalkulátorral
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
