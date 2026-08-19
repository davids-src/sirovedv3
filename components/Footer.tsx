'use client';

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
        {/* 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
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
                { href: '/ingyenes-felmeres', label: 'Ingyenes Állapotfelmérés' },
                { href: '/szolgaltatasok', label: 'Szolgáltatások' },
                { href: '/referenciak', label: 'Referenciák' },
                { href: '/blog', label: 'Blog' },
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

          {/* SIROTECH GROUP */}
          <div>
            <h3 className="font-display text-sm font-semibold text-ink mb-4">SIROTECH GROUP</h3>
            <ul className="space-y-4">
              {[
                { nev: 'SIRONIC', leiras: 'Hálózatépítés, IT-üzemeltetés', href: 'https://sironic.eu', szin: '#E8271A' },
                { nev: 'SIROSOFT', leiras: 'Egyedi szoftverfejlesztés', href: 'https://sirosoft.hu', szin: '#1AE87B' },
                { nev: 'SIROVILL', leiras: 'Villanyszerelés, kábelezés', href: 'https://sirovill.hu', szin: '#F5B81C', hamarosan: true },
                { nev: 'SIROTECH', leiras: 'Központi oldal', href: 'https://sirotech.hu', szin: '#C0C0D0' },
              ].map((item) => (
                <li key={item.nev}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-start gap-2 transition-opacity duration-150 ${(item as any).hamarosan ? 'opacity-60 hover:opacity-100' : ''}`}
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'outbound_click', {
                          target_site: item.href.replace('https://', ''),
                          location: 'footer'
                        });
                      }
                    }}
                  >
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: item.szin }} />
                    <span className="text-sm text-muted leading-[1.6]">
                      <span className="font-mono tracking-widest text-ink font-bold uppercase transition-colors duration-150 group-hover:[color:var(--hover-color)]" style={{ '--hover-color': item.szin } as React.CSSProperties}>{item.nev}</span>
                      {(item as any).hamarosan && (
                        <span className="ml-2 px-1.5 py-0.5 rounded bg-[#2A2A35]/60 text-[9px] font-semibold text-muted uppercase tracking-wider relative -top-0.5">Hamarosan</span>
                      )}
                      <span className="text-[#2A2A35] mx-1">—</span>
                      {item.leiras}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="border-t border-[#2A2A35]/50 pt-7">
          <div className="flex flex-col gap-4 text-xs text-muted">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono">
              <span className="flex items-center gap-1.5 text-ink/90 font-semibold">
                <Building2 size={13} style={{ color: ACCENT }} />
                {SITE.company}
              </span>
              <span className="text-[#2A2A35]">·</span>
              <span>Cégjegyzékszám: {SITE.registrationNumber}</span>
              <span className="text-[#2A2A35]">·</span>
              <span>Adószám: {SITE.taxNumber}</span>
              <span className="text-[#2A2A35]">·</span>
              <span>Nyilvántartó: {SITE.court}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-muted/90 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5">
                <FileText size={12} style={{ color: ACCENT }} />
                Rendőrhatósági biztonságtechnikai engedély: 07010-822/7987/2026. SZv.
              </span>
              <span className="text-[#2A2A35]">·</span>
              <span>Építőipari nyilvántartási szám: 17C03049</span>
              <span className="text-[#2A2A35]">·</span>
              <span>Felelősségbiztosítással rendelkező kivitelező</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#2A2A35]/30">
              <div className="flex items-center gap-4 font-mono">
                <Link href="/aszf" className="hover:text-ink transition-colors">
                  ÁSZF
                </Link>
                <Link href="/adatvedelem" className="hover:text-ink transition-colors">
                  Adatkezelési Tájékoztató
                </Link>
              </div>
              <p className="font-mono text-[11px]">&copy; {currentYear} {SITE.company}. Minden jog fenntartva.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
