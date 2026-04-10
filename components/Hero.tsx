import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Megbízható biztonság – Székesfehérvár</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Biztonság, amire{' '}
              <span className="text-red-600">számíthat</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Kamerarendszer, riasztó és tűzjelző telepítés, javítás, karbantartás
              Székesfehérváron és Fejér megyében.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kalkulator">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 shadow-[0_0_14px_rgba(220,38,38,0.4)] group w-full sm:w-auto">
                  Intelligens díjkalkulátor
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/szolgaltatasok">
                <Button size="lg" variant="outline" className="border-2 w-full sm:w-auto">
                  Szolgáltatások
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
              <span>✓ Ingyenes, kötelezettségmentes konzultáció</span>
              <span>✓ Gyors kiszállás</span>
              <span>✓ Meglévő rendszerek javítását is vállaljuk</span>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-red-600">&lt;24h</p>
                <p className="text-sm text-gray-600 mt-1">kiszállás</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600">24/7</p>
                <p className="text-sm text-gray-600 mt-1">ügyfélszolgálat</p>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-10 gap-6">
                {/* Top icon */}
                <div className="bg-red-600 rounded-2xl p-6 shadow-lg">
                  <Shield className="h-20 w-20 text-white" />
                </div>
                {/* Feature tiles */}
                <div className="grid grid-cols-2 gap-4 w-full mt-2">
                  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-.553.89L15 14m0 0V10m0 4H9m0 0V6a1 1 0 00-1-1H5a1 1 0 00-1 1v13a1 1 0 001 1h3a1 1 0 001-1v-4z" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Kamerarendszer</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Riasztórendszer</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Tűzjelző rendszer</span>
                  </div>
                  <div className="bg-red-600 rounded-xl p-4 shadow-md flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-white">Intelligens kalkulátor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
