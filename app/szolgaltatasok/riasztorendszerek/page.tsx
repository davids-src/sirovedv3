import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Bell, Phone, CheckCircle, Lock, Shield, Zap, Home, Store, Building, Warehouse, ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Riasztórendszer Telepítés Székesfehérváron – Siro Véd',
  description: 'Intelligens betörőriasztó rendszerek telepítése, javítása és karbantartása Székesfehérváron és Fejér megyében. Ingyenes helyszíni felmérés, gyors kiszállás.',
  keywords: ['riasztórendszer telepítés Székesfehérvár', 'betörőriasztó Fejér megye', 'mozgásérzékelő telepítés', 'riasztórendszer javítás'],
};

const steps = [
  { n: '1', title: 'Ingyenes konzultáció', desc: 'Megbeszéljük az igényeidet: milyen területet kell védeni és mit vársz a rendszertől.' },
  { n: '2', title: 'Helyszíni felmérés', desc: 'Kimegyünk és felmérjük a területet: ajtók, ablakok, belső terek — mindent figyelembe veszünk.' },
  { n: '3', title: 'Egyedi ajánlat', desc: 'Személyre szabott ajánlatot készítünk részletes árazással és magyarázattal.' },
  { n: '4', title: 'Telepítés / javítás', desc: 'Elvégezzük a munkát, beállítjuk a rendszert és megtanítjuk a kezelését.' },
  { n: '5', title: 'Utókövetés', desc: 'Ha problémád van vagy bővítenéd a rendszert, elérhetők vagyunk.' },
];

const faqs = [
  { q: 'Mennyibe kerül egy riasztórendszer telepítése?', a: 'Az ár a védendő terület és az érzékelők számától függ. Egy egyszerűbb, 3–5 érzékelős rendszer 60 000–120 000 Ft körül kezdődik. Ingyenes felmérésen pontos árat adunk.' },
  { q: 'Milyen típusú riasztórendszereket telepítetek?', a: 'Mozgásérzékelőket, ajtó- és ablakérzékelőket, hang- és fényriasztókat, valamint mobilos értesítési rendszereket. Minden igényre megtaláljuk a megfelelő megoldást.' },
  { q: 'Meglévő riasztórendszert is lehet javítani vagy bővíteni?', a: 'Igen, abszolút. Ha a riasztód nem működik megfelelően, hibás egy érzékelő, vagy bővíteni szeretnéd a rendszert, azt is szívesen elvégezzük.' },
  { q: 'Kapok értesítést, ha beindul a riasztó?', a: 'Igen. A modern rendszerek mobilos push értesítést, SMS-t vagy telefonhívást küldenek. Beállíthatod, ki kapja az értesítést.' },
  { q: 'Kell-e karbantartás a riasztórendszernek?', a: 'Éves ellenőrzés ajánlott: akkumulátorok, érzékelők és a vezérlő állapotának vizsgálata. Ezt is vállaljuk.' },
];

export default function RiasztórendszerekPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bell className="h-4 w-4" />
              <span>Betörésvédelem</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Riasztórendszer telepítés<br />
              <span className="text-red-300">Székesfehérváron és környékén</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Aggódsz, mi történik az otthonodban vagy az üzletedben, ha nem vagy ott?
              Egy jól megtervezett riasztórendszer azonnal értesít, ha valami nincs rendben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kalkulator">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 group">
                  Kérj ingyenes konzultációt
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="tel:+36XXXXXXXXX">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Miért érdemes riasztórendszert szereltetni?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A riasztórendszer célja egyszerű: ha valaki illetéktelenül próbál bejutni az ingatlanodba,
                  azonnal jelez — hangosan és neked mobilon is. Ez nemcsak utólag segít, hanem <strong>elriasztja</strong> a betörőket, mielőtt még megpróbálkoznának.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A modern rendszerek okostelefonra is küldenek értesítést — bárhol is légy, azonnal tudni fogod, ha valami nem stimmel.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Akkor is keress minket, ha csak egy kisebb problémát szeretnél megoldani — például egy érzékelő
                  nem működik, vagy bővítenéd a meglévő rendszert.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { icon: Lock, title: 'Automatikus riasztás', desc: 'Azonnali értesítés' },
                    { icon: Shield, title: 'Multi-szenzor', desc: 'Több érzékelő típus' },
                    { icon: Bell, title: 'Hang riasztás', desc: '120dB hangerő' },
                    { icon: Phone, title: '24/7 értesítés', desc: 'Mobilos push üzenet' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-white">
                      <Icon className="h-8 w-8 mb-3 text-red-400" />
                      <h4 className="font-semibold mb-1 text-sm">{title}</h4>
                      <p className="text-xs text-gray-300">{desc}</p>
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
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: 'Családi ház', desc: 'Ajtók, ablakok, garázs — komplex védelem minden bejáratra.' },
                { icon: Store, title: 'Üzlethelyiség', desc: 'Éjszakai védelem, zárás utáni biztonság, azonnali jelzés betörésnél.' },
                { icon: Building, title: 'Iroda', desc: 'Mozgásérzékelés, beléptetés vezérlése — teljes irodavédelem.' },
                { icon: Warehouse, title: 'Telephely', desc: 'Perimétervédelem, raktárvédelem, kerítésérzékelők.' },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">A riasztórendszer előnyei</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Biztonságérzet és védelem', desc: 'Tudod, hogy az ingatlanod védett — és ha valami történne, azonnal jelzést kapsz. Ez a nyugalom felbecsülhetetlen.' },
                { title: 'Megelőzés és visszatartás', desc: 'A látható riasztórendszer önmagában elrettenti a lehetséges betörőket. A védett ingatlanokat ritkábban választják célpontul.' },
                { title: 'Azonnali kontroll', desc: 'Mobilos értesítéssel azonnal tudni fogod, mi történt — és dönteni tudsz arról, mit tegyél. Mindig kézben tartod a helyzetet.' },
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
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map(({ n, title, desc }) => (
                <div key={n} className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">{n}</div>
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
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Riasztórendszer telepítés Székesfehérváron és Fejér megyében</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Székesfehérváron és Fejér megye területén dolgozunk — gyorsan, megbízhatóan, személyesen.
                Ismerjük a helyi igényeket és gyorsan ki tudunk szállni.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vállalunk kis munkákat is: egyetlen érzékelő cseréje, meglévő riasztó beállítása is elegendő
                indok arra, hogy keress minket. Az első konzultáció mindig ingyenes.
              </p>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Miért érdemes minket választani?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Gyors reagálás', desc: 'Kiszállás általában 24–48 órán belül Székesfehérvár és környéke területén.' },
                { title: 'Személyre szabott', desc: 'Minden helyszínhez egyedi rendszert tervezünk, nem sablonmegoldásokat.' },
                { title: 'Javítást is vállalunk', desc: 'Meglévő rendszerek hibáit is megjavítjuk — nem kell mindent lecserélni.' },
                { title: 'Kis munkák is kellenek', desc: 'Egyetlen problémás érzékelő is elegendő ok arra, hogy felhívj.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Gyakori kérdések – Riasztórendszerek</h2>
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
              <Link href="/szolgaltatasok/tuzjelzo-rendszerek">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg"><Zap className="h-6 w-6 text-orange-600" /></div>
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
            <p className="text-xl mb-4 text-red-100">Az első konzultáció minden esetben ingyenes és kötelezettségmentes.</p>
            <p className="text-red-200 mb-8 text-sm">Akkor is keress minket, ha csak egy kisebb problémát szeretnél megoldani.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kalkulator">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />Kérj ajánlatot
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
