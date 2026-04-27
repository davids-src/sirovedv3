import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Flame, Phone, CheckCircle, Shield, Bell, Zap, Home, Store, Building, Warehouse, ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tűzjelző Rendszer Telepítés Székesfehérváron – Siro Véd',
  description: 'Megbízható tűzjelző rendszerek telepítése, javítása és karbantartása Székesfehérváron és Fejér megyében. Füstérzékelők, hőérzékelők. Ingyenes konzultáció.',
  keywords: [
    'tűzjelző rendszer',
    'füstérzékelő telepítés',
    'tűzvédelmi rendszer',
    'tűzjelző karbantartás',
    'EN 54 szabványú tűzjelző',
    'automatikus tűzjelző',
    'intelligens tűzjelző rendszer',
    'hőérzékelő telepítés',
    'füstjelző rendszer',
    'irodai tűzjelző rendszer',
    'ipari tűzjelző rendszer',
    'tűzjelző szerviz',
    'tűzjelző javítás',
    'tűzvédelmi karbantartás',
    'tűzjelző felülvizsgálat',
    'tűzjelző rendszer audit',
    'hatósági megfelelés tűzjelző rendszer',
    'füstérzékelő rendszer vállalkozásnak',
    'tűzjelző telepítés iroda számára',
    'automatikus tűzriasztó rendszer',
    'tűzjelző Székesfehérvár',
    'tűzjelző rendszer Fejér megye',
    'biztonságtechnika Székesfehérvár',
    'ipari tűzjelző rendszer telepítése',
    'irodai tűzjelző rendszer karbantartása',
    'füstérzékelő telepítés társasházba',
    'EN54 szabvány szerinti tűzjelző rendszer',
    'automatikus tűzjelző rendszer cégeknek',
    'biztonságtechnika árajánlat',
    'tűzjelző rendszer ár Magyarország',
    'helyszíni felmérés ingyen',
    'ingyenes árajánlat biztonsági rendszer',
    'ingyenes helyszíni felmérés Székesfehérvár',
  ],
};

const steps = [
  { n: '1', title: 'Ingyenes konzultáció', desc: 'Átbeszéljük az igényeket, a helyszín adottságait és a vonatkozó szabványokat.' },
  { n: '2', title: 'Helyszíni felmérés', desc: 'Felmérjük az épületet: alapterület, mennyezetmagasság, kockázati zónák.' },
  { n: '3', title: 'Egyedi ajánlat', desc: 'Szabványoknak megfelelő, részletes ajánlatot készítünk áttekinthető árazással.' },
  { n: '4', title: 'Telepítés / javítás', desc: 'Elvégezzük a munkát, beüzemeljük a rendszert és átadjuk a kezelési útmutatót.' },
  { n: '5', title: 'Utókövetés', desc: 'Karbantartást, éves ellenőrzést és hibajavítást is vállalunk.' },
];

const faqs = [
  { q: 'Mire jó a tűzjelző rendszer?', a: 'A tűzjelző rendszer korai füst- és hőészleléssel ad riasztást, mielőtt a tűz nagy területre terjedne. Ezzel időt nyernek a menekülésre és a beavatkozásra — másodpercek életeket menthetnek.' },
  { q: 'Kötelező-e tűzjelző rendszer?', a: 'Bizonyos épülettípusoknál (irodaházak, vendéglátóhelyek, raktárak) jogszabály írja elő. De otthonba is érdemes — egy egyszerű füstérzékelő is sokat számíthat.' },
  { q: 'Mennyibe kerül a telepítés?', a: 'Egy kisebb, 3–5 érzékelős rendszer 50 000–100 000 Ft körül kezdődik. Összetettebb kereskedelmi rendszereknél az ár az épület méretétől függ. Ingyenes felmérésen pontos árat adunk.' },
  { q: 'Meglévő tűzjelző rendszert is lehet javítani?', a: 'Igen. Ha az érzékelők nem működnek megfelelően, vagy a vezérlő hibás, azt is megjavítjuk. Nem kell az egész rendszert lecserélni.' },
  { q: 'Kell-e rendszeres karbantartás?', a: 'Igen, az EN 54 szabvány és a tűzvédelmi előírások évente legalább egyszer kötelező ellenőrzést írnak elő. Ezt a karbantartást mi is elvégezzük.' },
];

export default function TuzjelzoRendszerekPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-orange-800 to-red-900 py-24 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Flame className="h-4 w-4" />
              <span>Tűzvédelem</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Tűzjelző rendszer telepítés<br />
              <span className="text-orange-300">Székesfehérváron és környékén</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Egy tűz másodpercek alatt óriási károkat okozhat. A korai észlelés életeket ment és csökkenti a
              vagyoni kárt. Megbízható tűzjelző rendszereket telepítünk, javítunk és karbantartunk.
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

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Miért fontos a tűzjelző rendszer?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A tűz az egyik legpusztítóbb veszély, ami egy ingatlant érhet. Az esetek nagy részében
                  az épület károsodik, mire a tűzoltók megérkeznek — de ha van tűzjelző rendszer, már az első
                  füstfelhőnél riasztást ad.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Egy korszerű tűzjelző rendszer füstérzékelőkből, hőérzékelőkből és egy vezérlőegységből áll.
                  Riasztás esetén hangos szirena szól, és értesítési rendszeren keresztül te is azonnal értesülsz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Fontos:</strong> a tűzjelző rendszer telepítése és karbantartása néhány épülettípusnál
                  jogszabályi kötelezettség. Ha bizonytalan vagy ebben, mi is segítünk tájékozódni.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { icon: Flame, title: 'Korai észlelés', desc: 'Másodpercek számítanak' },
                    { icon: Shield, title: 'EN 54 szabvány', desc: 'Teljes megfelelőség' },
                    { icon: Bell, title: '90dB riasztás', desc: 'Mindenkit ébreszti' },
                    { icon: CheckCircle, title: '10 év garancia', desc: 'Minőségi eszközök' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-white">
                      <Icon className="h-8 w-8 mb-3" />
                      <h4 className="font-semibold mb-1 text-sm">{title}</h4>
                      <p className="text-xs text-orange-100">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kinek ajánljuk?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: 'Családi ház', desc: 'Konyha, kazánház, garázs — a legkockázatosabb helyekre füstérzékelőket telepítünk.' },
                { icon: Store, title: 'Üzlethelyiség', desc: 'Vendéglátóhelyek, szalonok, kiskereskedelmi egységek — kötelező és/vagy ajánlott.' },
                { icon: Building, title: 'Iroda', desc: 'Szerver szoba, irányítóközpont — a legfontosabb területek védelme.' },
                { icon: Warehouse, title: 'Telephely', desc: 'Raktárak, gyárcsarnokok — nagy alapterületű tereink is védhetők.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">A tűzjelző rendszer előnyei</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Életek védelme', desc: 'A korai riasztás lehetőséget ad a biztonságos menekülésre, mielőtt a tűz veszélyes méreteket ölt. Ez a legfontosabb érv a tűzjelző mellett.' },
                { title: 'Vagyonvédelem', desc: 'Korai beavatkozással a keletkező kár töredékekre csökkenthető. A tűzoltók hamarabb tudnak érkezni és még megmenthető a vagyon.' },
                { title: 'Jogszabályi megfelelőség', desc: 'Több épülettípusnál kötelező a tűzjelző rendszer. Mi segítünk megérteni a vonatkozó előírásokat és megfelelő rendszert telepíteni.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-8">
                  <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Flame className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hogyan dolgozunk?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map(({ n, title, desc }) => (
                <div key={n} className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">{n}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tűzjelző rendszer telepítés Székesfehérváron és Fejér megyében</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Siro Véd csapata Székesfehérváron és Fejér megye területén végez tűzjelző rendszer telepítést,
                javítást és karbantartást. Ismerjük a helyi igényeket és gyorsan ki tudunk szállni.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ha már van tűzjelző rendszered, de nem működik megbízhatóan, vagy lejárt a karbantartása,
                azt is elvégezzük. Nem kell az egészet lecserélni — sokszor egy-egy érzékelő cseréje elegendő.
                Az első konzultáció mindig ingyenes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Miért érdemes minket választani?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Gyors reagálás', desc: 'Kiszállás általában 24–48 órán belül Székesfehérvár és környéke területén.' },
                { title: 'Személyre szabott', desc: 'Minden épülethez egyedi rendszert tervezünk a szabványok szerint.' },
                { title: 'Javítást is vállalunk', desc: 'Meglévő rendszerek hibáit megjavítjuk — nem kell mindent lecserélni.' },
                { title: 'Kis munkák is kellenek', desc: 'Egyetlen érzékelő cseréje vagy karbantartás is elegendő ok arra, hogy keress minket.' },
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

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Gyakori kérdések – Tűzjelző rendszerek</h2>
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

        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Más szolgáltatásaink</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/szolgaltatasok/kamerarendszerek">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg"><Camera className="h-6 w-6 text-red-600" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Kamerarendszerek</h3>
                    <p className="text-gray-500 text-sm">HD és 4K megfigyelőrendszerek</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </Link>
              <Link href="/szolgaltatasok/riasztorendszerek">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg"><Shield className="h-6 w-6 text-gray-600" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Riasztórendszerek</h3>
                    <p className="text-gray-500 text-sm">Betörésvédelem és azonnali riasztás</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Készen állsz a következő lépésre?</h2>
            <p className="text-xl mb-4 text-orange-100">Az első konzultáció minden esetben ingyenes és kötelezettségmentes.</p>
            <p className="text-orange-200 mb-8 text-sm">Nem csak teljes rendszerek kiépítésével foglalkozunk — meglévő rendszerek javítását és karbantartását is vállaljuk.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kalkulator">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />Kérj ajánlatot
                </Button>
              </Link>
              <Link href="/kalkulator">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600">
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