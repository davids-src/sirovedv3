'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Calculator, ChevronDown } from 'lucide-react';

const MEGOLDASOK_ITEMS = [
  { href: '/megoldasok', label: 'Összes megoldás', desc: 'Helyzet szerint választható' },
  { href: '/megoldasok/uj-biztonsagtechnikai-rendszer', label: 'Új rendszer', desc: 'Telepítés nulláról' },
  { href: '/megoldasok/rendszerbovites', label: 'Rendszerbővítés', desc: 'Meglévő rendszer kibővítése' },
  { href: '/megoldasok/telephely-biztonsag', label: 'Telephely', desc: 'Üzleti telephelyek védelme' },
  { href: '/megoldasok/csaladi-haz-biztonsag', label: 'Családi ház', desc: 'Otthoni kényelmes rendszer' },
  { href: '/megoldasok/raktar-csarnok-biztonsag', label: 'Raktár / Csarnok', desc: 'Nagy terület, átgondoltan' },
  { href: '/megoldasok/uzlet-rendelo-biztonsag', label: 'Üzlet / Rendelő', desc: 'Kereskedelmi kialakítás' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegoldasokOpen, setIsMegoldasokOpen] = useState(false);
  const [isMobileMegoldasokOpen, setIsMobileMegoldasokOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsMegoldasokOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/', label: 'Főoldal' },
    { href: '/szolgaltatasok', label: 'Szolgáltatások' },
    { href: '/partneri-egyuttmukodes', label: 'B2B partner' },
    { href: '/referenciak', label: 'Referenciák' },
    { href: '/blog', label: 'Blog' },
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/kapcsolat', label: 'Kapcsolat' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b border-[#2A2A35]/60 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0C]/95 backdrop-blur-xl'
          : 'bg-[#0A0A0C]/80 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-site mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/siroved_logo.png"
              alt="SIRO-VÉD Logo"
              width={160}
              height={48}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}

            {/* Megoldások dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMegoldasokOpen((v) => !v)}
                aria-expanded={isMegoldasokOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors duration-150"
              >
                Megoldások
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isMegoldasokOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMegoldasokOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl border border-[#2A2A35] bg-[#111116]/95 backdrop-blur-xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8)] overflow-hidden z-50">
                  {MEGOLDASOK_ITEMS.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMegoldasokOpen(false)}
                      className={`flex flex-col px-4 py-3 hover:bg-[#1A6BE8]/10 transition-colors duration-150 ${
                        i === 0 ? 'border-b border-[#2A2A35]' : ''
                      }`}
                    >
                      <span className={`text-sm font-medium ${i === 0 ? 'text-[#1A6BE8]' : 'text-ink'}`}>
                        {item.label}
                      </span>
                      <span className="text-xs text-muted mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/ingyenes-felmeres">
              <button className="flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-2.5 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]">
                <Calculator size={16} />
                Ingyenes felmérés
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-[#111116] transition-colors duration-150"
            aria-label={isMobileMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-ink" />
            ) : (
              <Menu size={24} className="text-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#18181F] border-t border-[#2A2A35]">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-muted hover:text-ink transition-colors duration-150 py-3 border-b border-[#2A2A35]/50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Megoldások accordion */}
            <div className="border-b border-[#2A2A35]/50">
              <button
                onClick={() => setIsMobileMegoldasokOpen((v) => !v)}
                className="flex items-center justify-between w-full text-sm text-muted hover:text-ink transition-colors duration-150 py-3"
              >
                Megoldások
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isMobileMegoldasokOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isMobileMegoldasokOpen && (
                <div className="pb-2 space-y-1">
                  {MEGOLDASOK_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-muted hover:text-ink transition-colors duration-150 py-2 pl-4 border-l-2 border-[#1A6BE8]/30 hover:border-[#1A6BE8]"
                      onClick={() => { setIsMobileMenuOpen(false); setIsMobileMegoldasokOpen(false); }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link href="/ingyenes-felmeres" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="flex items-center justify-center gap-2 w-full bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8]">
                  <Calculator size={16} />
                  Ingyenes felmérés
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
