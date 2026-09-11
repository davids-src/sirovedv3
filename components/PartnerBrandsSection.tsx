/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

interface BrandItem {
  name: string;
  logo: string;
  alt: string;
  url: string;
}

interface BrandGroup {
  title: string;
  internalLink?: string;
  brands: BrandItem[];
  text: string;
}

const BRAND_GROUPS: BrandGroup[] = [
  {
    title: 'Kamerarendszerek',
    internalLink: '/szolgaltatasok/kamerarendszerek',
    brands: [
      {
        name: 'Hikvision',
        logo: '/logos/Hikvision-logo.png',
        alt: 'Hikvision kamerarendszer telepítés Székesfehérváron - SIRO-VÉD',
        url: 'https://www.hikvision.com',
      },
      {
        name: 'Dahua',
        logo: '/logos/Dahua_Technology_logo.svg',
        alt: 'Dahua biztonsági kamera telepítés Fejér megyében - SIRO-VÉD',
        url: 'https://www.dahuasecurity.com',
      },
      {
        name: 'Uniview',
        logo: '/logos/Uniview(logo).png',
        alt: 'Uniview megfigyelő rendszer kiépítés - SIRO-VÉD',
        url: 'https://www.uniview.com',
      },
      {
        name: 'Videosec',
        logo: '/logos/videosec-logo.png',
        alt: 'Videosec kamerarendszer szerviz Székesfehérváron - SIRO-VÉD',
        url: 'https://videosec.com',
      },
    ],
    text: 'Hikvision, Dahua, Uniview és Videosec kamerarendszereket telepítünk és szervizelünk Székesfehérváron, Fejér megyében és a Közép-Dunántúlon — beltéri és kültéri IP kamerák, NVR-es rögzítők, éjjellátó és mozgásérzékelős megoldások.',
  },
  {
    title: 'Riasztástechnika',
    internalLink: '/szolgaltatasok/riasztorendszerek',
    brands: [
      {
        name: 'Paradox',
        logo: '/logos/paradox logo.svg',
        alt: 'Paradox riasztórendszer telepítés Székesfehérváron - SIRO-VÉD',
        url: 'https://www.paradox.com',
      },
    ],
    text: 'Paradox riasztó- és behatolásjelző rendszereket telepítünk, mozgásérzékelővel, nyitásérzékelővel és mobilos értesítéssel — otthonokba és telephelyekre egyaránt.',
  },
  {
    title: 'Hálózat és energiaellátás',
    brands: [
      {
        name: 'Ruijie-Reyee',
        logo: '/logos/ruijie-reyee logo.svg',
        alt: 'Ruijie-Reyee hálózati eszközök biztonságtechnikai rendszerekhez',
        url: 'https://www.ruijienetworks.com',
      },
      {
        name: 'Mean Well',
        logo: '/logos/mean-well-logo.png',
        alt: 'Mean Well tápegység biztonságtechnikai kiépítéshez',
        url: 'https://www.meanwell.com',
      },
      {
        name: 'Tracon',
        logo: '/logos/tracon logo.png',
        alt: 'Tracon elektromos szerelési anyagok',
        url: 'https://traconelectric.com',
      },
      {
        name: 'nJoy',
        logo: '/logos/njoy logo.png',
        alt: 'nJoy kábelezési kiegészítők',
        url: 'https://www.njoy.global',
      },
    ],
    text: 'A kamera- és riasztórendszerek hátterét Ruijie-Reyee hálózati eszközökkel, Mean Well és Tracon tápegységekkel, valamint nJoy kábelezési kiegészítőkkel építjük ki — stabil, megbízható háttérrel.',
  },
  {
    title: 'Adattárolás',
    brands: [
      {
        name: 'Seagate',
        logo: '/logos/seagate_logo.png',
        alt: 'Seagate megfigyelő rendszerhez tervezett merevlemez',
        url: 'https://www.seagate.com',
      },
      {
        name: 'Western Digital',
        logo: '/logos/western-digital-logo.png',
        alt: 'Western Digital biztonsági kamera rögzítő merevlemez',
        url: 'https://www.westerndigital.com',
      },
    ],
    text: 'A rögzített felvételek tárolásához kifejezetten megfigyelő rendszerekhez tervezett Seagate és Western Digital merevlemezeket használunk — hosszú élettartammal, folyamatos íráshoz optimalizálva.',
  },
];

export default function PartnerBrandsSection() {
  return (
    <section className="py-20 bg-bg border-t border-[#2A2A35]/50">
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          custom={0}
          variants={revealVariants}
        >
          <span className="eyebrow-chip">Partnereink</span>
          <h2 className="font-display mt-4 text-2xl lg:text-3xl font-semibold text-ink tracking-[-0.02em] leading-[1.15]">
            Amivel dolgozunk
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base leading-[1.6] max-w-2xl">
            Bevált, megbízható gyártók — hogy a rendszer évekig számítható maradjon.
          </p>
        </motion.div>

        {/* 4 Category Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              className="rounded-lg border border-[#2A2A35] bg-surface p-6 flex flex-col justify-between hover:border-[#2A2A35]/80 transition-colors duration-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={groupIdx * 0.08}
              variants={revealVariants}
            >
              <div>
                {/* Category Title with optional internal link */}
                <div className="mb-5">
                  {group.internalLink ? (
                    <Link
                      href={group.internalLink}
                      className="font-display font-semibold text-base text-ink hover:text-[#1A6BE8] transition-colors duration-150 flex items-center justify-between group/link"
                    >
                      <span>{group.title}</span>
                      <span className="text-xs text-muted group-hover/link:text-[#1A6BE8] transition-colors duration-150">
                        &rarr;
                      </span>
                    </Link>
                  ) : (
                    <h3 className="font-display font-semibold text-base text-ink">{group.title}</h3>
                  )}
                </div>

                {/* Logo grid / row */}
                <div className="flex flex-wrap items-center gap-4 mb-5 pb-4 border-b border-[#2A2A35]/50 min-h-[54px]">
                  {group.brands.map((brand) => (
                    <a
                      key={brand.name}
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/brand relative inline-flex items-center justify-center p-1.5 rounded hover:bg-[#111116] transition-colors duration-150"
                      title={`${brand.name} - Hivatalos weboldal`}
                    >
                      <div className="relative h-8 max-w-[110px] flex items-center justify-center">
                        <img
                          src={brand.logo}
                          alt={brand.alt}
                          className="max-h-8 w-auto object-contain filter grayscale opacity-75 group-hover/brand:grayscale-0 group-hover/brand:opacity-100 transition-all duration-200 ease-out"
                          loading="lazy"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* SEO Context Text */}
              <p className="text-xs text-muted leading-[1.65] font-normal">{group.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
