'use client';

import { CalculatorAnswers, ExtraType } from '../types';
import { Radio, DoorOpen, CalendarCheck, Flame } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
}

const OPTIONS: { value: ExtraType; label: string; sub: string; icon: React.ReactNode; isFire?: boolean }[] = [
    { value: 'tavfelügyelet', label: 'Távfelügyelet összekötés', sub: 'GSM/IP alapú jelzés küldés beállítása', icon: <Radio className="h-6 w-6" /> },
    { value: 'belepto', label: 'Beléptető rendszer', sub: 'RFID kártyás / kódos ajtónyitás', icon: <DoorOpen className="h-6 w-6" /> },
    { value: 'karb', label: 'Havidíjas karbantartási csomag', sub: 'Éves felülvizsgálat + remote felügyelet', icon: <CalendarCheck className="h-6 w-6" /> },
    { value: 'tuzjelzo', label: 'Tűzjelző rendszer', sub: 'Füstérzékelők, hőérzékelők, EN54 szabványú telepítés', icon: <Flame className="h-6 w-6" /> },
];

export default function Q7ExtraIgnyek({ answers, onAnswer }: Props) {
    function toggle(value: ExtraType) {
        const current = answers.q7;
        const next = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
        onAnswer({ q7: next });
    }

    return (
        <div>
            <p className="text-sm text-gray-400 mb-6">Több is kiválasztható. Ha egyik sem releváns, lépjen tovább.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OPTIONS.map((opt) => {
                    const selected = answers.q7.includes(opt.value);
                    return (
                        <button
                            key={opt.value}
                            onClick={() => toggle(opt.value)}
                            className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${selected
                                    ? 'border-[#1A6BE8] bg-[#1A6BE8]/10'
                                    : 'border-white/10 bg-[#12121A] hover:border-[#1A6BE8]/40 hover:bg-[#1A6BE8]/05'
                                }`}
                        >
                            <div className={`p-2 rounded-lg flex-shrink-0 ${selected ? 'bg-[#1A6BE8] text-white' : 'bg-white/10 text-gray-400'}`}>
                                {opt.icon}
                            </div>
                            <div>
                                <p className={`font-semibold text-sm ${selected ? 'text-[#1A6BE8]' : 'text-white'}`}>
                                    {opt.label}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{opt.sub}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
