import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Camera,
  Phone,
  CheckCircle,
  Eye,
  Shield,
  Zap,
  Home,
  Store,
  Building,
  Warehouse,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kamerarendszer Telepítés Székesfehérváron – Siro Véd',
  description:
    'Professzionális kamerarendszer telepítés, javítás és karbantartás Székesfehérváron és Fejér megyében. Ingyenes, kötelezettségmentes konzultáció. Családi házaktól üzletekig.',
  keywords: [
    'kamerarendszer telepítés Székesfehérvár',
    'CCTV kamera Fejér megye',
    'kamera felszerelés',
    'megfigyelőrendszer',
    'IP kamera telepítés',
    'kamerarendszer javítás',
  ],
};

const processSteps = [
  { step: '1', title: 'Ingyenes konzultáció', desc: 'Feltérképezzük az igényeidet, kérdéseket teszünk fel és megértjük, mit szeretnél megvédeni.' },
  { step: '2', title: 'Helyszíni felmérés', desc: 'Kimegyünk hozzád és felmérjük a területet, meghatározzuk a kamerák optimális elhelyezését.' },
  { step: '3', title: 'Egyedi ajánlat', desc: 'Személyre szabott ajánlatot készítünk — áttekinthető árazással, meglepetések nélkül.' },
  { step: '4', title: 'Telepítés / javítás', desc: 'Szakszerűen elvégezzük a munkát, bemutjuk a rendszer használatát és mindent rendben hagyunk.' },
  { step: '5', title: 'Utókövetés és támogatás', desc: 'Telepítés után is elérhetők vagyunk, ha kérdésed van vagy valami nem működik megfelelően.' },
];

const faqs = [
  {
    q: 'Mennyibe kerül egy kamerarendszer telepítése?',
    a: 'Az ár az igényektől függ: a kamerák számától, típusától és a helyszín adottságaitól. Általában egy egyszerűbb, 4 kamerás rendszer telepítése 80 000–150 000 Ft körül kezdődik. Pontos árat ingyenes helyszíni felmérés után tudunk adni.',
  },
  {
    q: 'Mennyi idő alatt készül el a telepítés?',
    a: 'Egy tipikus, 4–8 kamerás rendszer telepítése általában 1–2 munkanap alatt elvégezhető. A felmérés és az ajánlat elkészítése általában 24 órán belül megtörténik.',
  },
  {
    q: 'Meglévő kamerarendszert is lehet bővíteni vagy javítani?',
    a: 'Igen! Nem csak új rendszereket telepítünk — meglévő rendszerek hibáit is megjavítjuk, régi kamerákat cserélünk, és bővítéseket elvégzünk. Ha valami nem működik jól, hívj minket.',
  },
  {
    q: 'Távolról is figyelhetem a kamerákat?',
    a: 'Igen. A modern IP kamerarendszerek lehetővé teszik, hogy okostelefonon vagy tableten, bárhonnan valós idejű képet láss az ingatlanodról. Ezt az alkalmazást a telepítés után bemutatjuk és beállítjuk neked.',
  },
  {
    q: 'Kell-e rendszeres karbantartás?',
    a: 'Évente egyszer érdemes átvilágítani a rendszert: ellenőrizni a kamerák képminőségét, a rögzítő működését és a szoftver frissítettségét. Mi ezt is vállaljuk.',
  },
];

export default function KamerarendszerekPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 to-red-900 py-24 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Camera className="h-4 w-4" />
              <span>Megfigyelőrendszerek</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Kamerarendszer telepítés<br />
              <span className="text-red-300">Székesfehérváron és környékén</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Nem tudod, mi történik otthon vagy az üzletedben, amikor nem vagy ott? Egy jól megtervezett
              kamerarendszer megadja azt a nyugalmat, hogy mindig látod, mi folyik körülötted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kalkulator">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 group">
                  Kérj ingyenes konzultációt
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="tel:+36702735532">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Phone className="mr-2 h-5 w-5" />
                  Hívj most
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-300">✓ Ingyenes konzultáció · ✓ Gyors kiszállás · ✓ Javítást is vállalunk</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Mi is az a kamerarendszer, és miért érdemes beszerezni?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A kamerarendszer (más szóval CCTV vagy megfigyelőrendszer) olyan kamerák és rögzítők hálózata,
                  amely folyamatosan felveszi és tárolja az ingatlanod körüli, vagy belső terein zajló eseményeket.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Az emberek többsége akkor gondol kamerára, amikor már megtörtént a baj — betörés, vandalizmus,
                  lopás. Pedig egy kamerarendszer nemcsak utólag segít, hanem <strong>megelőzi</strong> ezeket az
                  eseteket, hiszen a látható kamera önmagában is visszatartó erő.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A mi munkánk az, hogy felmérjük az igényeidet, és olyan rendszert tervezzünk, ami valóban
                  hasznodra van — nem túl bonyolult, nem túl drága, de hatékony.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { icon: Eye, title: '360° látószög', desc: 'Teljes körű megfigyelés' },
                    { icon: Shield, title: 'IP67 védelem', desc: 'Időjárásálló kivitel' },
                    { icon: Zap, title: 'Gyors telepítés', desc: '1–2 nap alatt kész' },
                    { icon: Camera, title: 'Smart AI', desc: 'Intelligens mozgásérzékelés' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-white">
                      <Icon className="h-8 w-8 mb-3" />
                      <h4 className="font-semibold mb-1 text-sm">{title}</h4>
                      <p className="text-xs text-red-100">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kinek ajánljuk?</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Kamerarendszert szinte mindenhova érdemes telepíteni — legyen szó kis vagy nagy helyszínről.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: 'Családi ház', desc: 'Kapubejárat, garázs, kert — megvédjük az otthonod és a nyugalmad.' },
                { icon: Store, title: 'Üzlethelyiség', desc: 'Bolt, kávézó, szalon — lássad, mi történik nap közben és zárás után is.' },
                { icon: Building, title: 'Iroda', desc: 'Bejárati ellenőrzés, folyosók, parkoló — teljes rálátás az irodára.' },
                { icon: Warehouse, title: 'Telephely', desc: 'Kisebb raktár vagy udvar — gazdaságos és hatékony megoldás.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mit nyersz egy kamerarendszerrel?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Biztonságérzet és nyugalom',
                  desc: 'Bármikor, bárhonnan megnézheted, mi történik az otthonodban vagy az üzletedben. Ez egy különleges megnyugvás, amit nehéz más módon megszerezni.',
                },
                {
                  title: 'Megelőzés és visszatartás',
                  desc: 'A látható kamera önmagában visszatartja a betörőket, vandálokat. Statisztikák szerint a kamerával védett ingatlanok célpontul való kiszemelése jelentősen ritkább.',
                },
                {
                  title: 'Kontroll és átláthatóság',
                  desc: 'Ha valami történt, visszanézheted a felvételeket. Dolgozók, szállítások, látogatók — mindenről pontos képed van, ami vitás esetekben is segít.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-8">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hogyan dolgozunk?</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Egyszerű, átlátható folyamat — te mindig tudod, mi a következő lépés.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map(({ step, title, desc }) => (
                <div key={step} className="bg-white rounded-2xl p-6 shadow-md text-center relative">
                  <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kamerarendszer telepítés Székesfehérváron és Fejér megyében
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Siro Véd csapata Székesfehérváron és a Fejér megye területén dolgozik. Ismerjük a helyi igényeket,
                gyorsan ki tudunk szállni, és személyesen is elérhető maradunk a munka elvégzése után is.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nem nagy cég vagyunk — éppen ezért tudunk rugalmasak lenni. Ha kisebb munkát szeretnél elvégeztetni,
                vagy csak egy kamera nem működik, azt is szívesen vállaljuk. Az első konzultáció mindig ingyenes
                és kötelezettségmentes.
              </p>
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Miért érdemes minket választani?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Gyors reagálás', desc: 'Kiszállás általában 24–48 órán belül — Székesfehérvár és környéke.' },
                { title: 'Személyre szabott', desc: 'Nem skaláris megoldásokat adunk — minden helyszínhez egyedi rendszert tervezünk.' },
                { title: 'Javítást is vállalunk', desc: 'Nem csak új telepítést végzünk — meglévő rendszerek hibáit is megjavítjuk.' },
                { title: 'Kis munkák is kellenek', desc: 'Egyetlen problémás kamera is elegendő ok arra, hogy felhívj minket.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Gyakori kérdések – Kamerarendszerek
            </h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{q}</h3>
                  <p className="text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Más szolgáltatásaink</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/szolgaltatasok/riasztorendszerek">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Riasztórendszerek</h3>
                    <p className="text-gray-500 text-sm">Betörésvédelem és azonnali riasztás</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </Link>
              <Link href="/szolgaltatasok/tuzjelzo-rendszerek">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Tűzjelző rendszerek</h3>
                    <p className="text-gray-500 text-sm">Korai tűzészlelés és riasztás</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Készen állsz a következő lépésre?</h2>
            <p className="text-xl mb-4 text-red-100">
              Az első konzultáció minden esetben ingyenes és kötelezettségmentes.
              Keress minket bármilyen kérdéssel!
            </p>
            <p className="text-red-200 mb-8 text-sm">
              Nem csak teljes rendszerek kiépítésével foglalkozunk — meglévő rendszerek javítását és karbantartását is vállaljuk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kalkulator">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Kérj ajánlatot
                </Button>
              </Link>
              <Link href="/kalkulator">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600">
                  Ingyenes konzultáció
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
