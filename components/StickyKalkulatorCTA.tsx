'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, X } from 'lucide-react';

export default function StickyKalkulatorCTA() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        const handleScroll = () => {
            // Show after scrolling 400px
            setVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dismissed]);

    if (dismissed || !visible) return null;

    return (
        <div className="fixed bottom-24 right-4 sm:bottom-8 sm:right-6 z-40 animate-in slide-in-from-bottom-4 duration-300">
            <div className="bg-red-600 text-white rounded-2xl shadow-2xl shadow-red-900/30 p-4 flex items-center gap-3 max-w-xs">
                <div className="flex-1">
                    <p className="text-xs font-semibold text-red-200 mb-0.5">Mennyi lenne az ára?</p>
                    <Link
                        href="/kalkulator"
                        className="flex items-center gap-1.5 text-sm font-bold hover:text-red-100 transition-colors"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        Intelligens díjkalkulátor
                    </Link>
                </div>
                <button
                    onClick={() => setDismissed(true)}
                    aria-label="Bezárás"
                    className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
