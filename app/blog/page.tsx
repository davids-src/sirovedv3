import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';

export const revalidate = 3600; // 1 hour revalidation for timed scheduled posts

const ACCENT = '#1A6BE8';

export const metadata: Metadata = {
  title: 'Blog | Szakmai Cikkek és Útmutatók | SIRO-VÉD',
  description:
    'Gyakorlati írások vagyonvédelemről, kamera- és riasztórendszerekről — cégeknek és magánszemélyeknek, érthetően.',
  alternates: {
    canonical: 'https://siroved.hu/blog',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Blog | Szakmai Cikkek és Útmutatók | SIRO-VÉD',
    description:
      'Gyakorlati írások vagyonvédelemről, kamera- és riasztórendszerekről — cégeknek és magánszemélyeknek, érthetően.',
    type: 'website',
    locale: 'hu_HU',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      <main className="pt-16 min-h-screen bg-bg">
        {/* Hero Section */}
        <section className="relative bg-bg pt-28 pb-20 overflow-hidden border-b border-[#2A2A35]/50">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
            aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }}
          />

          <div className="max-w-site mx-auto px-6 relative">
            <span className="eyebrow-chip inline-block">Szakmai Tudásbázis</span>
            <h1 className="font-display mt-6 text-4xl sm:text-5xl font-bold text-ink tracking-[-0.04em] leading-[1.05]">
              Blog
            </h1>
            <p className="mt-5 text-lg text-muted leading-[1.7] max-w-2xl">
              Gyakorlati írások vagyonvédelemről, kamera- és riasztórendszerekről — cégeknek és magánszemélyeknek, érthetően.
            </p>
          </div>
        </section>

        {/* Posts Grid Section */}
        <section className="py-20 bg-bg">
          <div className="max-w-site mx-auto px-6">
            {posts.length === 0 ? (
              <div className="text-center py-16 rounded-xl border border-[#2A2A35] bg-surface p-8">
                <BookOpen size={40} className="mx-auto mb-4 text-muted opacity-50" />
                <h2 className="text-xl font-bold text-ink mb-2">Hamarosan érkeznek az új cikkek!</h2>
                <p className="text-muted text-sm max-w-md mx-auto">
                  Szerkesztőségünk folyamatosan készíti a friss szakmai anyagokat. Látogasson vissza később!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-xl border border-[#2A2A35] bg-surface p-7 flex flex-col justify-between hover:border-[#1A6BE8]/40 transition-all duration-200 group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-[#1A6BE8] bg-[#1A6BE8]/10 px-3 py-1 rounded-full border border-[#1A6BE8]/20">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                          <Clock size={13} />
                          <span>{post.readingTime} perc olvasás</span>
                        </div>
                      </div>

                      <h2 className="font-display text-xl font-bold text-ink group-hover:text-[#1A6BE8] transition-colors leading-[1.3]">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-muted text-sm leading-[1.6] line-clamp-3">{post.excerpt}</p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#2A2A35]/50 flex items-center justify-between font-mono text-xs text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar size={13} style={{ color: ACCENT }} />
                        <span>{post.publishedAt}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-[#1A6BE8] font-semibold hover:translate-x-1 transition-transform"
                      >
                        <span>Elolvasom</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
