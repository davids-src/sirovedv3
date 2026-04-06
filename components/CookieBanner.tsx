'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const STORAGE_KEY = 'siroved_cookie_consent';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            // Delay slightly so it doesn't flash on first paint
            const t = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(t);
        }
    }, []);

    function accept() {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        setVisible(false);
    }

    function decline() {
        localStorage.setItem(STORAGE_KEY, 'declined');
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="bg-red-100 p-2.5 rounded-full">
                        <Cookie className="h-5 w-5 text-red-600" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 mb-1">🍪 Sütiket használunk</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        A weboldal Google Analytics-et használ a látogatói statisztikákhoz. Az adatok névtelenül kerülnek feldolgozásra. Részletek az{' '}
                        <a href="/adatvedelmi-tajekoztato" className="underline hover:text-red-600">adatvédelmi tájékoztatóban</a>.
                    </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                    <button
                        onClick={decline}
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <X className="h-3.5 w-3.5" />
                        Csak szükségesek
                    </button>
                    <button
                        onClick={accept}
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        <Check className="h-3.5 w-3.5" />
                        Elfogadom
                    </button>
                </div>
            </div>
        </div>
    );
}
