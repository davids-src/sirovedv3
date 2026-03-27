import Link from 'next/link';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Siro Véd</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Biztonságtechnikai megoldások otthonok és vállalkozások számára.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigáció</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Főoldal
                </Link>
              </li>
              <li>
                <Link
                  href="/szolgaltatasok"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Szolgáltatások
                </Link>
              </li>
              <li>
                <Link
                  href="/rolunk"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rólunk
                </Link>
              </li>
              <li>
                <Link
                  href="/kapcsolat"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Szolgáltatások</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Kamerarendszerek</li>
              <li className="text-gray-400">Riasztórendszerek</li>
              <li className="text-gray-400">Tűzjelző rendszerek</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">+36 XX XXX XXXX</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">info@siroved.hu</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Budapest, Magyarország
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Siro Véd. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
