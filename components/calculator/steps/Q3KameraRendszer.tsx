'use client';

import { CalculatorAnswers, KameraType } from '../types';
import { Wifi, Tv2, HelpCircle, CameraOff } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
}

const OPTIONS: { value: KameraType; label: string; sub: string; icon: React.ReactNode }[] = [
    { value: 'nincs', label: 'Nem kérek kamerákat', sub: 'Csak riasztórendszert kérek', icon: <CameraOff className="h-6 w-6" /> },
    { value: 'ip', label: 'IP kamerarendszer', sub: 'HD/4K, kábeles vagy Wi-Fi, mobilapp vezérlés', icon: <Wifi className="h-6 w-6" /> },
    { value: 'analog', label: 'Analóg kamerarendszer', sub: 'Koax kábeles, DVR rögzítő, megbízható klasszikus', icon: <Tv2 className="h-6 w-6" /> },
    { value: 'nemtudom', label: 'Nem tudom, ajánljanak', sub: 'Kollégánk segít választani a helyszíni felmérésen', icon: <HelpCircle className="h-6 w-6" /> },
];

export default function Q3KameraRendszer({ answers, onAnswer }: Props) {
    return (
        <div>
            <p className="text-sm text-gray-500 mb-1">Ha nem biztos benne: az IP rendszer a mai standard.</p>
            <p className="text-xs text-gray-400 mb-6">Jobb képminőség (HD/4K), mobilos távelérés, rugalmasabb bővíthetőség.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OPTIONS.map((opt) => {
                    const selected = answers.q3 === opt.value;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => onAnswer({ q3: opt.value })}
                            className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${selected
                                    ? 'border-red-600 bg-red-50'
                                    : 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50/30'
                                }`}
                        >
                            <div className={`p-2 rounded-lg flex-shrink-0 ${selected ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                {opt.icon}
                            </div>
                            <div>
                                <p className={`font-semibold text-sm ${selected ? 'text-red-700' : 'text-gray-900'}`}>{opt.label}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{opt.sub}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
