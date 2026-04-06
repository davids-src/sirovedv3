import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Building2, FileText } from 'lucide-react';
import { SITE } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Siro Véd</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Biztonságtechnikai megoldások otthonok és vállalkozások számára.
              {' '}{SITE.region}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigáció</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Főoldal' },
                { href: '/szolgaltatasok', label: 'Szolgáltatások' },
                { href: '/referenciak', label: 'Referenciák' },
                { href: '/rolunk', label: 'Rólunk' },
                { href: '/kalkulator', label: 'Árajánlat kalkulátor' },
                { href: '/kapcsolat', label: 'Kapcsolat' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Szolgáltatások</h3>
            <ul className="space-y-2">
              {[
                { href: '/szolgaltatasok/kamerarendszerek', label: 'Kamerarendszerek' },
                { href: '/szolgaltatasok/riasztorendszerek', label: 'Riasztórendszerek' },
                { href: '/szolgaltatasok/tuzjelzo-rendszerek', label: 'Tűzjelző rendszerek' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <a href={SITE.phoneTel} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <a href={SITE.emailHref} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">{SITE.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Company legal info */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 text-xs">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                {SITE.company}
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                Adószám: {SITE.taxNumber}
              </span>
              <span>{SITE.address}</span>
            </div>
            <p className="text-gray-500 text-xs">
              &copy; {currentYear} Siro Véd. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
