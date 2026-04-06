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
    { value: 'tuzjelzo', label: 'Tűzjelző rendszer', sub: 'Hamarosan elérhető – jelzem előre az érdeklődésem', icon: <Flame className="h-6 w-6" />, isFire: true },
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
            <p className="text-sm text-gray-500 mb-6">Több is kiválasztható. Ha egyik sem releváns, lépjen tovább.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OPTIONS.map((opt) => {
                    const selected = answers.q7.includes(opt.value);
                    return (
                        <button
                            key={opt.value}
                            onClick={() => toggle(opt.value)}
                            className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${selected
                                    ? 'border-red-600 bg-red-50'
                                    : 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50/30'
                                } ${opt.isFire ? 'opacity-75' : ''}`}
                        >
                            <div className={`p-2 rounded-lg flex-shrink-0 ${selected ? (opt.isFire ? 'bg-orange-500 text-white' : 'bg-red-600 text-white') : 'bg-gray-100 text-gray-500'}`}>
                                {opt.icon}
                            </div>
                            <div>
                                <p className={`font-semibold text-sm ${selected ? 'text-red-700' : 'text-gray-900'}`}>
                                    {opt.label}
                                    {opt.isFire && <span className="ml-2 text-xs font-normal bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Hamarosan</span>}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">{opt.sub}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
