import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Building2, FileText } from 'lucide-react';
import { SITE } from '@/lib/config';

const ACCENT = '#1A6BE8';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2A35]/50 bg-[#111116]/40 py-16">
      <div className="max-w-site mx-auto px-6">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/siroved_logo.png"
                alt="SIRO-VÉD Logo"
                width={160}
                height={48}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted leading-[1.7]">
              Biztonságtechnikai megoldások otthonok és vállalkozások számára.{' '}
              {SITE.region}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink mb-4">Navigáció</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Főoldal' },
                { href: '/szolgaltatasok', label: 'Szolgáltatások' },
                { href: '/rolunk', label: 'Rólunk' },
                { href: '/kalkulator', label: 'Árajánlat kalkulátor' },
                { href: '/kapcsolat', label: 'Kapcsolat' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted hover:text-ink transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink mb-4">Szolgáltatások</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/szolgaltatasok/kamerarendszerek', label: 'Kamerarendszerek' },
                { href: '/szolgaltatasok/riasztorendszerek', label: 'Riasztórendszerek' },
                { href: '/szolgaltatasok/tuzjelzo-rendszerek', label: 'Tűzjelző rendszerek' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted hover:text-ink transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink mb-4">Kapcsolat</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={14} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <a
                  href={SITE.phoneTel}
                  className="text-sm text-muted hover:text-ink transition-colors duration-150"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <a
                  href={SITE.emailHref}
                  className="text-sm text-muted hover:text-ink transition-colors duration-150"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <p className="text-sm text-muted">{SITE.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="border-t border-[#2A2A35]/50 pt-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 font-mono text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <Building2 size={12} />
                {SITE.company}
              </span>
              <span className="flex items-center gap-1.5">
                <FileText size={12} />
                Adószám: {SITE.taxNumber}
              </span>
              <span className="flex items-center gap-1.5">
                <FileText size={12} />
                Hat. Biz.: 07010-822/7987/2026. SZv.
              </span>
              <span className="flex items-center gap-1.5">
                <FileText size={12} />
                Épít. nyilv.: 17C03049
              </span>
              <span>{SITE.address}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
              <Link href="/aszf" className="hover:text-ink transition-colors">
                ÁSZF
              </Link>
              <Link href="/adatvedelem" className="hover:text-ink transition-colors">
                Adatkezelési Tájékoztató
              </Link>
              <span>&copy; {currentYear} SIRO-VÉD. Minden jog fenntartva.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
