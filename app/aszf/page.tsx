import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Általános Szerződési Feltételek (ÁSZF) | Siro Véd',
    description: 'A siroved.hu weboldal Általános Szerződési Feltételei.',
};

export default function AszfPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20 mt-16 md:mt-24">
            <h1 className="text-3xl md:text-4xl font-bold font-display text-ink mb-2">
                ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK (ÁSZF)
            </h1>
            <p className="text-sm text-muted mb-12 border-b border-border pb-6">
                <strong>Hatályos:</strong> 2026. 07. 11. napjától &nbsp;|&nbsp; <strong>Elérhető:</strong> siroved.hu/aszf
            </p>

            <div className="space-y-10 text-ink/90 leading-[1.8]">
                {/* 1. Bevezető rendelkezések */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">1. Bevezető rendelkezések</h2>
                    <p className="mb-4">
                        Jelen Általános Szerződési Feltételek (a továbbiakban: <strong>ÁSZF</strong>) szabályozzák a siroved.hu
                        weboldalon (a továbbiakban: <strong>Weboldal</strong>) keresztül kezdeményezett kapcsolatfelvétel,
                        árajánlatkérés, valamint az ezt követően esetlegesen létrejövő biztonságtechnikai kivitelezési
                        szerződések általános feltételeit.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
                        <p className="font-semibold text-primary mb-2">Fontos:</p>
                        <p className="text-sm">
                            A Weboldal <strong>nem minősül webáruháznak (webshopnak)</strong>, azon keresztül közvetlen,
                            online fizetést igénylő termék- vagy szolgáltatásvásárlásra nincs lehetőség. A Weboldal
                            elsődleges célja a látogatók tájékoztatása, valamint a kapcsolatfelvétel és az árajánlatkérés
                            lebonyolításának megkönnyítése.
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-bold font-display text-ink mb-4">1.1. Szolgáltató (a Vállalkozás) adatai</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="py-3 pr-4 font-semibold text-ink w-1/3">Adat</th>
                                    <th className="py-3 font-semibold text-ink">Érték</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                <tr>
                                    <td className="py-3 pr-4 text-muted">Cégnév / Vállalkozó neve</td>
                                    <td className="py-3 font-medium">SIROTECH Kft.</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted">Székhely</td>
                                    <td className="py-3">8000 Székesfehérvár, Lövölde utca 24 4/15</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted">Adószám</td>
                                    <td className="py-3 font-mono text-sm">33056151-2-07</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted">Cégjegyzékszám</td>
                                    <td className="py-3 font-mono text-sm">07-09-037603</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted">Képviselő</td>
                                    <td className="py-3">Skoda Dávid András</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted">E-mail cím</td>
                                    <td className="py-3"><a href="mailto:hello@sironic.hu" className="text-primary hover:underline">hello@sironic.hu</a></td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted">Telefonszám</td>
                                    <td className="py-3"><a href="tel:+36702735532" className="text-primary hover:underline">+36 70 273 5532</a></td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted">Weboldal</td>
                                    <td className="py-3">siroved.hu</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 text-muted align-top">Tárhelyszolgáltató</td>
                                    <td className="py-3 leading-relaxed">
                                        SIROTECH Kft.<br />
                                        8000 Székesfehérvár, Lövölde utca 24 4/15
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-muted">(a továbbiakban: <strong>Szolgáltató</strong>)</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold font-display text-ink mb-4">1.2. A Megrendelő</h3>
                    <p>
                        Jelen ÁSZF alkalmazásában Megrendelőnek minősül minden természetes vagy jogi személy, aki a Weboldalon keresztül a Szolgáltatóval kapcsolatba lép, tőle árajánlatot kér, vagy vele szerződéses jogviszonyt létesít (a továbbiakban: <strong>Megrendelő</strong>).
                    </p>
                </section>

                {/* 2. A szolgáltatások köre */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">2. A szolgáltatások köre</h2>
                    <p className="mb-4">
                        A Szolgáltató tevékenységi köre elsődlegesen az alábbi biztonságtechnikai szolgáltatásokra terjed ki:
                    </p>
                    <ul className="list-decimal pl-5 space-y-2 mb-4 text-muted">
                        <li>Kamerarendszerek (CCTV) tervezése, telepítése és karbantartása;</li>
                        <li>Riasztórendszerek tervezése, telepítése és karbantartása;</li>
                        <li>Beléptető rendszerek tervezése, telepítése és karbantartása;</li>
                        <li>A fentiekhez kapcsolódó tanácsadás, felmérés és üzemeltetési támogatás.</li>
                    </ul>
                    <p>
                        A Weboldalon feltüntetett szolgáltatások és az azokhoz kapcsolódó tájékoztató tartalmak (leírások, illusztrációk, díjkalkulátor) kizárólag tájékoztató jellegűek, és nem minősülnek a Szolgáltató részéről tett kötelező erejű ajánlatnak.
                    </p>
                </section>

                {/* 3. A megrendelés menete */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">3. A megrendelés menete</h2>
                    <p className="mb-6">
                        A Szolgáltató és a Megrendelő közötti szerződéses jogviszony létrejötte az alábbi, egymást követő lépéseken keresztül valósul meg:
                    </p>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-2">3.1. Lépés – Árajánlatkérés a Weboldalon</h3>
                            <p className="mb-2">A Megrendelő a Weboldalon található <strong>díjkalkulátoron</strong> (a továbbiakban: <strong>Kalkulátor</strong>) vagy egyéb kapcsolatfelvételi űrlapon keresztül megadja az érintett ingatlanra és az igényelt rendszerre vonatkozó alapadatokat (pl. alapterület, kamerák/érzékelők/beléptetési pontok tervezett száma), valamint elérhetőségi adatait (név, telefonszám, e-mail cím, helyszín/város).</p>
                            <p>Az így megadott adatok a Szolgáltató részére e-mailben automatikusan továbbításra kerülnek, ajánlatadás céljából. Az adatkezelés részleteiről a Weboldalon közzétett <strong>Adatkezelési Tájékoztató</strong> nyújt bővebb információt.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-2">3.2. Lépés – Kapcsolatfelvétel és egyeztetés</h3>
                            <p>Az árajánlatkérés beérkezését követően a Szolgáltató munkatársa a megadott elérhetőségeken felveszi a kapcsolatot a Megrendelővel az igények pontosítása, valamint a helyszíni felmérés időpontjának egyeztetése céljából.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-2">3.3. Lépés – Helyszíni felmérés</h3>
                            <p className="mb-2">A végleges, kötelező erejű árajánlat kiadásának előfeltétele a <strong>helyszíni felmérés</strong> elvégzése, amelynek keretében a Szolgáltató szakembere a helyszínen ellenőrzi és pontosítja az ingatlan adottságait, a tervezett rendszer műszaki paramétereit, valamint az esetleges kiegészítő igényeket (pl. hálózati infrastruktúra, tápellátás, kábelezési lehetőségek).</p>
                            <p>A helyszíni felmérés díjmentes, kivéve, ha a Szolgáltató és a Megrendelő ettől eltérően állapodnak meg (pl. jelentős távolság vagy különösen összetett felmérés esetén).</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-2">3.4. Lépés – Végleges árajánlat és szerződéskötés</h3>
                            <p>A helyszíni felmérés eredménye alapján a Szolgáltató írásbeli, végleges és kötelező erejű árajánlatot készít, amely tartalmazza a beépítendő eszközök, anyagok és munkadíjak részletezését, a teljesítési határidőt, valamint a fizetési feltételeket. A végleges árajánlat elfogadásával, illetve az erről szóló egyedi vállalkozási/kivitelezési szerződés aláírásával jön létre a felek közötti szerződéses jogviszony.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-2">3.5. Lépés – Kivitelezés és átadás</h3>
                            <p>A szerződés létrejöttét követően a Szolgáltató a felek által egyeztetett ütemezés szerint elvégzi a kivitelezési munkálatokat, majd a rendszer átadás-átvételi eljárás keretében kerül átadásra a Megrendelő részére, amelyről jegyzőkönyv készül.</p>
                        </div>
                    </div>
                </section>

                {/* 4. A Kalkulátor */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">4. A Kalkulátor és az online tájékoztatás jogi jellege</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-muted">
                        <li>A Weboldalon elérhető Kalkulátor által megjelenített, illetve a Weboldalon egyéb módon feltüntetett árak, ártartományok és becslések <strong>kizárólag tájékoztató jellegű, előzetes becslések</strong>, amelyek nem minősülnek a Szolgáltató részéről a Polgári Törvénykönyv szerinti kötelező erejű szerződéses ajánlatnak.</li>
                        <li>A Kalkulátor által megjelenített becslés a Megrendelő által önkéntesen megadott, ellenőrizetlen adatokon alapul, ezért attól a végleges árajánlat – a helyszíni felmérés során feltárt tényleges műszaki körülmények, akadályok vagy egyéb, előzetesen nem ismert tényezők miatt – jelentősen eltérhet.</li>
                        <li>A Szolgáltatót a Kalkulátor által megjelenített becsült ár tekintetében <strong>semmilyen kötelezettség nem terheli</strong>, és a becsült ár Megrendelő általi megismerése önmagában semmilyen szerződéses igényt nem keletkeztet a Szolgáltatóval szemben.</li>
                        <li>A felek közötti szerződéses jogviszony kizárólag a jelen ÁSZF 3.4. pontja szerinti végleges árajánlat elfogadásával, illetve az egyedi szerződés aláírásával jön létre.</li>
                    </ol>
                </section>

                {/* 5. Elállás */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">5. Elállás, módosítás, lemondás</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-muted">
                        <li>A Megrendelő az árajánlatkérést, illetve a helyszíni felmérésre vonatkozó időpont-egyeztetést a végleges szerződés megkötéséig bármikor, indokolás nélkül, díjmentesen visszavonhatja.</li>
                        <li>A helyszíni felmérést követően kiadott végleges árajánlat elfogadását megelőzően a Megrendelő nem köteles a szerződés megkötésére; ebben az esetben a felek között szerződéses jogviszony nem jön létre.</li>
                        <li>A végleges szerződés megkötését követő elállás, felmondás és az azzal kapcsolatos jogkövetkezmények (pl. megkezdett munkálatok díjazása, felmerült anyagköltségek) tekintetében az egyedi szerződésben, illetve annak hiányában a Polgári Törvénykönyv vállalkozási szerződésre vonatkozó szabályai (Ptk. 6:238–6:248. §) az irányadóak.</li>
                        <li>Amennyiben a Megrendelő fogyasztónak minősül és a szerződés a fogyasztó és a vállalkozás közötti szerződések részletes szabályairól szóló <strong>45/2014. (II. 26.) Korm. rendelet</strong> hatálya alá tartozó, üzlethelyiségen kívül vagy távollévők között kötött szerződésnek minősül, a Megrendelőt megilletheti a jogszabály szerinti elállási/felmondási jog, amelynek részletes feltételeiről a Szolgáltató a szerződéskötést megelőzően külön tájékoztatást ad.</li>
                    </ol>
                </section>

                {/* 6. Szavatosság */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">6. Szavatosság, jótállás</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-muted">
                        <li>A Szolgáltató a kivitelezett rendszerek és beépített anyagok, eszközök tekintetében a Polgári Törvénykönyv, valamint a vonatkozó jogszabályok (így különösen az egyes tartós fogyasztási cikkekre vonatkozó kötelező jótállásról szóló jogszabályok, amennyiben azok alkalmazandók) szerinti szavatossági és jótállási kötelezettséget vállal.</li>
                        <li>A jótállás és szavatosság pontos terjedelmét, időtartamát és feltételeit a felek között létrejövő egyedi vállalkozási/kivitelezési szerződés tartalmazza.</li>
                        <li>Nem terjed ki a jótállás/szavatosság a Megrendelő általi szakszerűtlen használatból, harmadik fél általi beavatkozásból, illetve a rendszertől független külső okból (pl. áramkimaradás, hálózati hiba, vis maior) eredő hibákra és károkra.</li>
                    </ol>
                </section>

                {/* 7. Felelősség */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">7. Felelősség korlátozása</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-muted">
                        <li>A Szolgáltató nem vállal felelősséget a Weboldal esetleges technikai hibájából, elérhetetlenségéből, vagy a Kalkulátor esetleges pontatlan működéséből eredő közvetett károkért.</li>
                        <li>A Szolgáltató mindent megtesz a Weboldalon feltüntetett információk pontossága és naprakészsége érdekében, azonban nem garantálja, hogy a Weboldal tartalma mindenkor hiánytalan, pontos és a legújabb állapotot tükrözi.</li>
                        <li>A Szolgáltató felelőssége a kivitelezett rendszerek tekintetében a felek közötti egyedi szerződésben, valamint a vonatkozó jogszabályokban foglaltak szerint áll fenn.</li>
                    </ol>
                </section>

                {/* 8. Szellemi tulajdon */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">8. Szellemi tulajdon</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-muted">
                        <li>A Weboldal teljes tartalma – ideértve különösen, de nem kizárólagosan a szövegeket, grafikai elemeket, logókat, fényképeket, illusztrációkat, a Kalkulátor felépítését és működését, valamint a Weboldal forráskódját – a Szolgáltató kizárólagos szellemi tulajdonát képezi, illetve azok tekintetében a Szolgáltató jogosult a felhasználásra.</li>
                        <li>A Weboldal tartalmának bármilyen formában történő másolása, terjesztése, nyilvános megjelenítése, feldolgozása vagy kereskedelmi célú felhasználása kizárólag a Szolgáltató előzetes, írásbeli hozzájárulásával engedélyezett.</li>
                        <li>A jelen pontban foglaltak megsértése esetén a Szolgáltató jogosult a szerzői jogról szóló <strong>1999. évi LXXVI. törvényben</strong>, valamint a Polgári Törvénykönyvben biztosított jogorvoslati eszközök (így különösen kártérítés) igénybevételére.</li>
                    </ol>
                </section>

                {/* 9. Adatvédelem */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">9. Adatvédelem</h2>
                    <p>A Weboldal használata, így különösen a Kalkulátor és a kapcsolatfelvételi űrlapok kitöltése során megadott személyes adatok kezeléséről a Szolgáltató a Weboldalon külön elérhető <strong>Adatkezelési Tájékoztatóban</strong> ad részletes felvilágosítást, amely jelen ÁSZF elválaszthatatlan mellékletét képezi.</p>
                </section>

                {/* 10. Panaszkezelés */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">10. Panaszkezelés</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-muted">
                        <li>A Megrendelő a Szolgáltató tevékenységével, illetve a szolgáltatás nyújtásával kapcsolatos panaszát az 1.1. pontban megjelölt elérhetőségeken (elsősorban a hello@sironic.hu e-mail címen) jelentheti be.</li>
                        <li>A Szolgáltató a beérkezett panaszt kivizsgálja, és arra a vonatkozó jogszabályok (így különösen a fogyasztóvédelemről szóló <strong>1997. évi CLV. törvény</strong>, amennyiben a Megrendelő fogyasztónak minősül) szerinti határidőn belül írásban válaszol.</li>
                        <li>Amennyiben a panasz rendezésére a felek között nem kerül sor, a Megrendelő (fogyasztói minőségben eljáró Megrendelő esetén) jogosult a lakóhelye, illetve tartózkodási helye szerint illetékes <strong>békéltető testülethez</strong> fordulni, vagy igényét bírói úton érvényesíteni.</li>
                    </ol>
                </section>

                {/* 11. Vegyes és záró rendelkezések */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">11. Vegyes és záró rendelkezések</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-muted">
                        <li>Jelen ÁSZF-ben nem szabályozott kérdésekben a magyar jog, így különösen a Polgári Törvénykönyvről szóló <strong>2013. évi V. törvény</strong>, a fogyasztóvédelemről szóló <strong>1997. évi CLV. törvény</strong>, valamint az elektronikus kereskedelmi szolgáltatásokról szóló <strong>2001. évi CVIII. törvény</strong> rendelkezései az irányadóak.</li>
                        <li>A Szolgáltató fenntartja a jogot jelen ÁSZF egyoldalú módosítására. A módosított ÁSZF a Weboldalon történő közzétételtől hatályos, és a közzétételt megelőzően létrejött szerződéses jogviszonyokat nem érinti.</li>
                        <li>Amennyiben jelen ÁSZF valamely rendelkezése érvénytelennek vagy végrehajthatatlannak bizonyulna, az nem érinti a többi rendelkezés érvényességét.</li>
                        <li>A felek a jelen ÁSZF-fel, illetve az annak alapján létrejött szerződéses jogviszonyokkal kapcsolatos jogvitáikat elsősorban békés úton, egyeztetés útján kívánják rendezni; ennek eredménytelensége esetén a jogvita elbírálására a hatáskörrel és illetékességgel rendelkező magyar bíróság jogosult.</li>
                    </ol>
                </section>

                <div className="pt-10 mt-10 border-t border-border text-center">
                    <p className="text-sm text-muted mb-6 italic">Utolsó módosítás dátuma: 2026. 07. 11.</p>
                    <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
                        Vissza a főoldalra
                    </Link>
                </div>
            </div>
        </div>
    );
}
