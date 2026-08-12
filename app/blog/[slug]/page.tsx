import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { SITE } from '@/lib/config';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const revalidate = 3600; // 1 hour revalidation

const ACCENT = '#1A6BE8';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'A cikk nem található | SIRO-VÉD',
    };
  }

  return {
    title: `${post.title} | Blog | SIRO-VÉD`,
    description: post.excerpt,
    alternates: {
      canonical: `https://siroved.hu/blog/${post.slug}`,
    },
    robots: 'index, follow',
    openGraph: {
      title: `${post.title} | SIRO-VÉD Blog`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      locale: 'hu_HU',
    },
  };
}

function renderSimpleMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let keyIndex = 0;

  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${keyIndex++}`} className="space-y-2 my-4 pl-5 list-disc text-muted leading-[1.75]">
          {currentList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={`h1-${keyIndex++}`} className="font-display text-3xl sm:text-4xl font-bold text-ink mt-8 mb-4">
          {trimmed.replace(/^#\s+/, '')}
        </h1>
      );
    } else if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${keyIndex++}`} className="font-display text-2xl font-bold text-ink mt-8 mb-4">
          {trimmed.replace(/^##\s+/, '')}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${keyIndex++}`} className="font-display text-xl font-bold text-ink mt-6 mb-3">
          {trimmed.replace(/^###\s+/, '')}
        </h3>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      currentList.push(trimmed.replace(/^[-*]\s+/, ''));
    } else if (trimmed.length > 0) {
      flushList();
      elements.push(
        <p key={`p-${keyIndex++}`} className="text-muted text-base sm:text-lg leading-[1.8] my-4">
          {trimmed}
        </p>
      );
    }
  });

  flushList();
  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: {
              '@type': 'Organization',
              name: post.author || 'SIROTECH Kft.',
            },
            publisher: {
              '@type': 'Organization',
              name: 'SIROTECH Kft.',
              url: 'https://siroved.hu',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://siroved.hu/blog/${post.slug}`,
            },
          }),
        }}
      />

      <Navbar />

      <main className="pt-16 bg-bg min-h-screen">
        {/* Article Header */}
        <section className="relative bg-bg pt-20 pb-16 border-b border-[#2A2A35]/50 overflow-hidden">
          <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
            aria-hidden="true"
            style={{ background: `radial-gradient(ellipse at center, ${ACCENT}12 0%, transparent 70%)` }}
          />

          <div className="max-w-3xl mx-auto px-6 relative">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              <span>Vissza a blog cikkekhez</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs font-semibold text-[#1A6BE8] bg-[#1A6BE8]/10 px-3 py-1 rounded-full border border-[#1A6BE8]/20">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                <Calendar size={13} style={{ color: ACCENT }} />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                <Clock size={13} />
                <span>{post.readingTime} perc olvasás</span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-[-0.03em] leading-[1.15]">
              {post.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted leading-[1.7] font-medium border-l-2 border-[#1A6BE8] pl-4">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 bg-bg">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-invert max-w-none space-y-2">
              {renderSimpleMarkdown(post.content)}
            </div>

            {/* Closing CTA Box */}
            <div
              className="mt-16 rounded-2xl border bg-surface p-8 sm:p-10 relative overflow-hidden space-y-6"
              style={{ borderColor: `${ACCENT}40`, boxShadow: `0 0 60px -20px ${ACCENT}` }}
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#1A6BE8]">
                <ShieldCheck size={16} />
                <span>Ingyenes Vagyonvédelmi Felmérés</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Nem tudja, mennyire védett az ingatlana?
              </h2>

              <p className="text-muted text-base leading-[1.7]">
                Ingyenes helyszíni felmérést készítünk a meglévő kamera- és riasztórendszerről. Egy héten belül írásos összefoglalót és árazott javaslatot kap.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link href="/ingyenes-felmeres" className="group w-full sm:w-auto">
                  <button className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#1A6BE8] text-white font-semibold rounded-lg px-7 py-3.5 text-sm hover:scale-[1.02] transition-transform shadow-[0_0_28px_-12px_#1A6BE8]">
                    <span>Kérem az ingyenes felmérést</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
