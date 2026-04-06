import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Camera, Bell, Shield, CheckCircle2, ArrowRight, Home, Store, Building, Warehouse } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Referenciák – Siro Véd Biztonságtechnika',
    description: 'Elvégzett kamera- és riasztórendszer telepítéseink Székesfehérváron és Fejér megyében. Otthonok, üzletek, irodák és raktárak biztonsági megoldásai.',
    keywords: ['kamerarendszer telepítés referencia', 'riasztórendszer telepítés példa', 'biztonságtechnika Székesfehérvár'],
};

const REFERENCES = [
    {
        category: 'Lakóingatlan',
        icon: Home,
        color: 'red',
        title: 'Családi ház – Székesfehérvár',
        summary: '4 kültéri IP kamera + mozgásérzékelős riasztó',
        details: [
            '4 db kültéri HD IP kamera (kapu, terasz, garázs, kert)',
            'NVR rögzítő, 30 napos felvételtárolás',
            'Mobilapp távelérés beállítva',
            'Mozgásérzékelős riasztórendszer, 3 zóna',
            'GSM értesítés beállítva',
        ],
        tag: 'IP kamera · Riasztó',
    },
    {
        category: 'Üzlethelyiség',
        icon: Store,
        color: 'red',
        title: 'Virágüzlet – Székesfehérvár belváros',
        summary: '6 kamerás rendszer + beléptető',
        details: [
            '2 db beltéri + 4 db kültéri kamera',
            'RFID kártyás beléptető az iroda ajtajára',
            'Analóg DVR rögzítő, üzleti igényekre optimalizálva',
            'Meglévő riasztó GSM modullal bővítve',
        ],
        tag: 'Kamera · Beléptető',
    },
    {
        category: 'Iroda',
        icon: Building,
        color: 'red',
        title: 'Ügyvédi iroda – Fejér megye',
        summary: '8 kamera + új riasztórendszer + távfelügyelet',
        details: [
            '8 db IP HD kamera (folyosók, tárgyaló, recepció, bejárat)',
            'Új DSC riasztóközpont, 8 zóna',
            '4 db PIR mozgásérzékelő + 6 db nyitásérzékelő',
            'IP alapú távfelügyelet összekötés',
            'Mobilapp kezelés + kódpanel',
        ],
        tag: 'IP kamera · Riasztó · Távfelügyelet',
    },
    {
        category: 'Raktár / Telephely',
        icon: Warehouse,
        color: 'red',
        title: 'Kis raktárcsarnok – Székesfehérvár ipari negyed',
        summary: 'Gazdaságos analóg rendszer, nagy terület lefedése',
        details: [
            '6 db kültéri analóg kamera + 2 db beltéri forgókamera (PTZ)',
            'DVR rögzítő, 60 napos felvételtárolás',
            'Perimetrikus mozgásérzékelők a bejáratoknál',
            'Hang + fény riasztó, GSM visszaigazolás',
        ],
        tag: 'Analóg · PTZ · Riasztó',
    },
    {
        category: 'Vendéglátás',
        icon: Store,
        color: 'red',
        title: 'Kávézó – Fejér megye',
        summary: 'Meglévő rendszer bővítése + karbantartás',
        details: [
            'Meglévő 4 kamerás rendszer 3 új kamerával bővítve',
            'Rögzítő szoftver és mobil hozzáférés frissítve',
            'Riasztórendszer felülvizsgálat + akkumulátor csere',
            'Képminőség javítás: régi kamerák HD-re cserélve',
        ],
        tag: 'Bővítés · Karbantartás',
    },
    {
        category: 'Egészségügy',
        icon: Bell,
        color: 'red',
        title: 'Magánrendelő – Székesfehérvár',
        summary: 'Diszkrét IP kamerarendszer + beléptető vezérlés',
        details: [
            '5 db diszkrét beltéri IP kamera (folyosó, váróterem, bejárat)',
            'RFID kártyás beléptető a rendelő ajtaján',
            'Titkosított felvételtárolás (GDPR-megfelelő konfig)',
            'Mobilapp hozzáférés az orvos részére',
        ],
        tag: 'IP kamera · Beléptető · GDPR',
    },
];

const COLOR_MAP: Record<string, string> = {
    red: 'bg-red-100 text-red-600',
};

export default function ReferenciaPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero */}
                <section className="bg-gradient-to-br from-gray-900 to-red-900 py-20 text-white text-center">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield className="h-4 w-4" />
                            <span>Elvégzett munkáink</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Referenciáink</h1>
                        <p className="text-xl text-gray-200">
                            Néhány elvégzett projektünk Székesfehérváron és Fejér megyében.
                            Otthontól raktárig, kis munkától komplex rendszerig.
                        </p>
                    </div>
                </section>

                {/* Trust bar */}
                <section className="bg-white border-b border-gray-100 py-6">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                            {[
                                '✓ 500+ elvégzett projekt',
                                '✓ Székesfehérvár és Fejér megye',
                                '✓ Otthontól ipari telephelyig',
                                '✓ Javítást és bővítést is vállalunk',
                            ].map((t) => (
                                <span key={t} className="font-medium">{t}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reference cards */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {REFERENCES.map((ref) => {
                                const Icon = ref.icon;
                                return (
                                    <div
                                        key={ref.title}
                                        className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                                    >
                                        <div className="bg-gradient-to-br from-red-600 to-red-700 p-5 text-white">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="bg-white/20 p-2 rounded-lg">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <span className="text-xs font-semibold text-red-200">{ref.category}</span>
                                            </div>
                                            <h2 className="font-bold text-lg leading-snug">{ref.title}</h2>
                                            <p className="text-red-200 text-sm mt-1">{ref.summary}</p>
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <ul className="space-y-2 flex-1">
                                                {ref.details.map((d) => (
                                                    <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                                                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                        {d}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full font-medium">
                                                    {ref.tag}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Note */}
                <section className="py-10 bg-white">
                    <div className="max-w-2xl mx-auto px-4 text-center">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Ügyfeleinktől kérésre referenciát biztosítunk. Az adatvédelem érdekében a bemutatott projektek részletei anonimizálva szerepelnek.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Szeretne hasonló rendszert?</h2>
                        <p className="text-red-100 mb-8">
                            8 kérdéssel kap egy tájékoztató árat – helyszíni felmérés nélkül.
                        </p>
                        <Link href="/kalkulator">
                            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                                Intelligens díjkalkulátor
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
