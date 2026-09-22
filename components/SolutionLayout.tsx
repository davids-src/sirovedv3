import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ACCENT = '#1A6BE8';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SolutionLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  h1: string;
  h1Accent?: string; // highlighted word(s) at end of h1
  intro: string;
  visual: React.ReactNode;
  features: string[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  relatedLinks?: { label: string; href: string }[];
  children?: React.ReactNode;
  structuredData: object[];
}

export default function SolutionLayout({
  breadcrumbs,
  eyebrow,
  h1,
  h1Accent,
  intro,
  visual,
  features,
  ctaPrimary = { label: 'Ingyenes felmérés kérése', href: '/ingyenes-felmeres' },
  ctaSecondary = { label: 'Árkalkulátor', href: '/kalkulator' },
  relatedLinks = [],
  children,
  structuredData,
}: SolutionLayoutProps) {
  return (
    <>
      {structuredData.map((sd, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sd) }} />
      ))}

      <Navbar />
      <main className="pt-24 pb-28 min-h-screen bg-bg text-ink">
        <div className="max-w-site mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-ink transition-colors">{crumb.name}</Link>
                  ) : (
                    <span className="text-ink" aria-current="page">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — copy */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#2A2A35] text-muted mb-6">
                {eyebrow}
              </span>
              <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] mb-6">
                {h1Accent ? (
                  <>
                    {h1}{' '}
                    <span style={{ color: ACCENT }}>{h1Accent}</span>
                  </>
                ) : h1}
              </h1>
              <p className="text-muted text-lg leading-[1.7] mb-8 max-w-xl">{intro}</p>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted leading-[1.7]">
                    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7.25" stroke={ACCENT} strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={ctaPrimary.href}
                  className="inline-flex items-center gap-2 bg-[#1A6BE8] text-white font-semibold rounded px-6 py-3 text-sm hover:scale-[1.02] transition-transform duration-150 ease-out shadow-[0_0_28px_-14px_#1A6BE8] hover:shadow-[0_0_56px_-10px_#1A6BE8]"
                >
                  {ctaPrimary.label}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center gap-2 border border-[#2A2A35] text-ink font-semibold rounded px-6 py-3 text-sm hover:border-[#C0C0D0]/50 transition-colors duration-150"
                >
                  {ctaSecondary.label}
                </Link>
              </div>
            </div>

            {/* Right — visual */}
            <div className="rounded-xl border border-[#2A2A35] bg-[#0D0D12] overflow-hidden p-6 lg:sticky lg:top-24 shadow-[0_0_60px_-20px_#1A6BE820]">
              {visual}
            </div>
          </div>

          {/* Optional extra content (e.g. a contact form row) */}
          {children && <div className="mt-20">{children}</div>}

          {/* Bottom nav */}
          <div className="border-t border-[#2A2A35]/50 mt-16 pt-10 flex flex-wrap gap-6 text-sm">
            <Link href="/megoldasok" className="text-muted hover:text-ink transition-colors">← Összes megoldás</Link>
            <Link href="/" className="text-muted hover:text-ink transition-colors">Főoldal</Link>
            {relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#1A6BE8] hover:underline">{l.label}</Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
