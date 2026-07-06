'use client';

import { type LucideIcon, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT = '#1A6BE8';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group rounded-lg border border-[#2A2A35] bg-surface p-8"
      whileHover={{
        borderColor: `${ACCENT}40`,
        scale: 1.02,
        boxShadow: `0 0 28px -14px ${ACCENT}`,
        transition: { duration: 0.15, ease: 'easeOut' },
      }}
      initial={{ borderColor: '#2A2A35' }}
    >
      {/* Icon */}
      <div className="mb-6">
        <Icon size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-ink mb-4">{title}</h3>

      {/* Description */}
      <p className="text-muted text-sm leading-[1.7] mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle
              size={16}
              strokeWidth={1.5}
              className="flex-shrink-0 mt-0.5"
              style={{ color: ACCENT }}
            />
            <span className="text-sm text-muted">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {href && (
        <Link href={href} className="group/link">
          <button className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink transition-colors duration-150">
            Tudj meg többet
            <ArrowRight
              size={16}
              className="group-hover/link:translate-x-1 transition-transform duration-150"
            />
          </button>
        </Link>
      )}
    </motion.div>
  );
}
