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
              <span>Megbízható biztonság</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Biztonság, amire{' '}
              <span className="text-red-600">számíthat</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Komplett biztonságtechnikai megoldások otthonok és vállalkozások számára.
              Szakértő telepítés, karbantartás és folyamatos támogatás.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kapcsolat">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 group">
                  Kérj ajánlatot
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/szolgaltatasok">
                <Button size="lg" variant="outline" className="border-2">
                  Szolgáltatások
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-red-600">10+</p>
                <p className="text-sm text-gray-600 mt-1">Év tapasztalat</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600">500+</p>
                <p className="text-sm text-gray-600 mt-1">Elégedett ügyfél</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600">24/7</p>
                <p className="text-sm text-gray-600 mt-1">Ügyfélszolgálat</p>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-64 w-64 text-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
