'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Shield, Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/kapcsolat', label: 'Kapcsolat' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-red-600 p-2 rounded-lg group-hover:bg-red-700 transition-colors">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Siro Véd</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kalkulator">
              <Button className="relative bg-red-600 hover:bg-red-700 shadow-[0_0_12px_rgba(220,38,38,0.45)] hover:shadow-[0_0_18px_rgba(220,38,38,0.65)] transition-shadow">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 opacity-90" />
                Intelligens díjkalkulátor
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kalkulator" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-red-600 hover:bg-red-700 shadow-[0_0_12px_rgba(220,38,38,0.35)]">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 opacity-90" />
                Intelligens díjkalkulátor
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
