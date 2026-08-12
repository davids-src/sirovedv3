'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Főoldal' },
    { href: '/szolgaltatasok', label: 'Szolgáltatások' },
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
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
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
