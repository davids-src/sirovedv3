import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Adatkezelési Tájékoztató | Siro Véd',
    description: 'A siroved.hu weboldal Adatkezelési Tájékoztatója.',
};

export default function AdatvedelemPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20 mt-16 md:mt-24">
            <h1 className="text-3xl md:text-4xl font-bold font-display text-ink mb-2">
                ADATKEZELÉSI TÁJÉKOZTATÓ
            </h1>
            <p className="text-sm text-muted mb-12 border-b border-border pb-6">
                <strong>Hatályos:</strong> 2026. 07. 11. napjától &nbsp;|&nbsp; <strong>Elérhető:</strong> siroved.hu/adatvedelem
            </p>

            <div className="space-y-10 text-ink/90 leading-[1.8]">
                {/* 1. Bevezetés */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">1. Bevezetés, az Adatkezelő adatai</h2>
                    <p className="mb-4">
                        Jelen Adatkezelési Tájékoztató (a továbbiakban: <strong>Tájékoztató</strong>) célja, hogy a siroved.hu weboldal (és aldomainjei, a továbbiakban: <strong>Weboldal</strong>) látogatói és a Weboldalon keresztül kapcsolatba lépő érdeklődők (a továbbiakban: <strong>Érintett</strong>) számára átlátható, közérthető tájékoztatást nyújtson a személyes adataik kezeléséről, az Európai Parlament és a Tanács (EU) 2016/679 rendelete (a továbbiakban: <strong>GDPR</strong>), valamint az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (a továbbiakban: <strong>Infotv.</strong>) rendelkezéseivel összhangban.
                    </p>
                    
                    <p className="font-semibold text-ink mt-6 mb-2">Adatkezelő megnevezése és elérhetőségei:</p>
                    <div className="overflow-x-auto mb-6">
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
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-muted mb-4">(a továbbiakban: <strong>Adatkezelő</strong>)</p>
                    <p>
                        Az Adatkezelő fenntartja a jogot jelen Tájékoztató egyoldalú módosítására, amelyről a Weboldalon történő közzététel útján tájékoztatja az Érintetteket. A módosítás nem érinti a már megadott adatok kezelésének jogszerűségét.
                    </p>
                </section>

                {/* 2. Fogalommeghatározások */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">2. Fogalommeghatározások</h2>
                    <p className="mb-4">
                        A Tájékoztatóban használt fogalmak a GDPR 4. cikkében meghatározottakkal egyeznek meg, ezek közül a legfontosabbak:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted">
                        <li><strong>Személyes adat:</strong> azonosított vagy azonosítható természetes személyre („Érintett&quot;) vonatkozó bármely információ.</li>
                        <li><strong>Adatkezelés:</strong> a személyes adatokon végzett bármely művelet (gyűjtés, rögzítés, tárolás, továbbítás, törlés stb.).</li>
                        <li><strong>Adatkezelő:</strong> aki az adatkezelés céljait és eszközeit meghatározza.</li>
                        <li><strong>Adatfeldolgozó:</strong> aki az Adatkezelő nevében, annak megbízásából kezel személyes adatokat (pl. tárhelyszolgáltató).</li>
                        <li><strong>Hozzájárulás:</strong> az Érintett önkéntes, konkrét, tájékozott és egyértelmű akaratnyilatkozata.</li>
                    </ul>
                </section>

                {/* 3. Alapelvek */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">3. Az adatkezelés alapelvei</h2>
                    <p>
                        Az Adatkezelő a személyes adatokat jogszerűen, tisztességesen és átlátható módon, célhoz kötötten, az adattakarékosság elvét szem előtt tartva, pontosan, korlátozott ideig, valamint megfelelő biztonsági intézkedések mellett kezeli, a GDPR 5. cikkében foglalt alapelveknek megfelelően.
                    </p>
                </section>

                {/* 4. Az adatkezelés egyes esetei */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">4. Az adatkezelés egyes esetei</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-3">4.1. Díjkalkulátor és ajánlatkérő űrlap használata</h3>
                            <p className="mb-3">A Weboldalon elérhető, több lépéses díjkalkulátor (a továbbiakban: <strong>Kalkulátor</strong>) segítségével az Érintett tájékoztató jellegű árbecslést kérhet, amelynek keretében az alábbi adatokat adja meg:</p>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-white/5 border border-border rounded-xl p-4">
                                    <p className="font-semibold text-sm mb-2 text-ink">a) Az ingatlanra/projektre vonatkozó adatok:</p>
                                    <ul className="list-disc pl-4 text-sm text-muted space-y-1">
                                        <li>Ingatlan alapterülete</li>
                                        <li>Kamerák, érzékelők, beléptető pontok tervezett száma</li>
                                        <li>Egyéb, a rendszer jellegére vonatkozó paraméterek</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-border rounded-xl p-4">
                                    <p className="font-semibold text-sm mb-2 text-ink">b) Személyes adatok:</p>
                                    <ul className="list-disc pl-4 text-sm text-muted space-y-1">
                                        <li>Név</li>
                                        <li>Telefonszám</li>
                                        <li>E-mail cím</li>
                                        <li>Helyszín / Város</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse border border-border">
                                    <tbody className="divide-y divide-border/50">
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 w-1/3 border-r border-border/50">Az adatkezelés célja</td>
                                            <td className="py-3 px-4 text-muted">Egyedi árajánlat összeállítása és megküldése, az Érintettel történő kapcsolatfelvétel, a szolgáltatás igénybevételének előkészítése.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Az adatkezelés jogalapja</td>
                                            <td className="py-3 px-4 text-muted">A GDPR 6. cikk (1) bekezdés <strong>b) pontja</strong> – szerződés megkötését megelőzően az Érintett kérésére történő lépések megtétele. Amennyiben az adatkezelés nem sorolható be egyértelműen ide, úgy a jogalap a GDPR 6. cikk (1) bekezdés <strong>a) pontja</strong> szerinti önkéntes hozzájárulás.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Adattovábbítás módja</td>
                                            <td className="py-3 px-4 text-muted">A Kalkulátorban megadott adatokat a rendszer automatikusan, e-mail útján továbbítja az Adatkezelő részére.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Adatkezelés időtartama</td>
                                            <td className="py-3 px-4 text-muted">Szerződéskötés hiányában az ajánlatkérés beérkezésétől számított <strong>legfeljebb 90 napig</strong>, ezt követően törlésre kerül (kivéve hozzájárulás esetén). Szerződéskötés esetén a jogviszony és az elévülési/számviteli kötelezettségek végéig.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Címzettek</td>
                                            <td className="py-3 px-4 text-muted">Az Adatkezelő feljogosított munkatársai, valamint a Weboldal technikai üzemeltetését végző Adatfeldolgozó (tárhelyszolgáltató).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-3">4.2. Kapcsolatfelvétel (telefon, e-mail, űrlap)</h3>
                            <p className="mb-3">Amennyiben az Érintett közvetlenül, telefonon, e-mailben vagy egyéb kapcsolatfelvételi űrlapon keresztül lép kapcsolatba az Adatkezelővel:</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse border border-border">
                                    <tbody className="divide-y divide-border/50">
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 w-1/3 border-r border-border/50">Az adatkezelés célja</td>
                                            <td className="py-3 px-4 text-muted">A megkeresés megválaszolása, kapcsolattartás.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Az adatkezelés jogalapja</td>
                                            <td className="py-3 px-4 text-muted">GDPR 6. cikk (1) bekezdés <strong>a) pontja</strong> – az Érintett önkéntes hozzájárulása.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Adatkezelés időtartama</td>
                                            <td className="py-3 px-4 text-muted">A megkeresés megválaszolásáig, illetve az azt követő <strong>30 napig</strong>, amennyiben nem jön létre további üzleti kapcsolat.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-3">4.3. Szerződéskötés, számlázás (megrendelt szolgáltatás esetén)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse border border-border">
                                    <tbody className="divide-y divide-border/50">
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 w-1/3 border-r border-border/50">Az adatkezelés célja</td>
                                            <td className="py-3 px-4 text-muted">Szerződés teljesítése, számlázás, garanciális és jogszabályi kötelezettségek teljesítése.</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Az adatkezelés jogalapja</td>
                                            <td className="py-3 px-4 text-muted">GDPR 6. cikk (1) bekezdés <strong>b) pontja</strong> (szerződés teljesítése), valamint <strong>c) pontja</strong> (jogi kötelezettség teljesítése).</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4 font-semibold text-ink bg-white/5 border-r border-border/50">Adatkezelés időtartama</td>
                                            <td className="py-3 px-4 text-muted">Számviteli bizonylatok (számlák) esetében a számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése alapján <strong>8 év</strong>. Egyéb dokumentumok a szerződésből eredő igények elévüléséig (általános esetben 5 év).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold font-display text-ink mb-3">4.4. Sütik (cookie-k) kezelése</h3>
                            <p className="mb-2">A Weboldal működése során ún. sütiket (cookie-kat) alkalmaz.</p>
                            
                            <p className="font-semibold text-ink mt-4">a) Feltétlenül szükséges (technikai) sütik</p>
                            <p className="text-sm text-muted mb-4">Ezek a sütik a Weboldal alapvető működéséhez (pl. munkamenet fenntartása, Kalkulátor lépéseinek megjegyzése) elengedhetetlenül szükségesek, elhelyezésükhez nem szükséges az Érintett előzetes hozzájárulása. Jogalapjuk az Adatkezelő jogos érdeke (GDPR 6. cikk (1) bek. f) pont).</p>

                            <p className="font-semibold text-ink mt-4">b) Statisztikai / elemző sütik (pl. Google Analytics)</p>
                            <p className="text-sm text-muted mb-4">A Weboldal a látogatottság elemzése céljából anonimizált adatgyűjtő eszközt alkalmazhat. Ezen sütik elhelyezése kizárólag az Érintett előzetes, önkéntes hozzájárulása esetén történik.</p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse border border-border">
                                    <thead>
                                        <tr className="bg-white/5 border-b border-border">
                                            <th className="py-2 px-3 font-semibold text-ink border-r border-border/50">Süti típusa</th>
                                            <th className="py-2 px-3 font-semibold text-ink border-r border-border/50">Cél</th>
                                            <th className="py-2 px-3 font-semibold text-ink border-r border-border/50">Jogalap</th>
                                            <th className="py-2 px-3 font-semibold text-ink">Időtartam</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50 text-muted">
                                        <tr>
                                            <td className="py-2 px-3 border-r border-border/50">Munkamenet / technikai</td>
                                            <td className="py-2 px-3 border-r border-border/50">A Weboldal működésének biztosítása</td>
                                            <td className="py-2 px-3 border-r border-border/50">Jogos érdek / jogszabály</td>
                                            <td className="py-2 px-3">Böngésző bezárásáig / max. 1 év</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 border-r border-border/50">Google Analytics</td>
                                            <td className="py-2 px-3 border-r border-border/50">Látogatottsági statisztika</td>
                                            <td className="py-2 px-3 border-r border-border/50">Hozzájárulás</td>
                                            <td className="py-2 px-3">Google szabályzata szerint (max 14-26 hónap)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Adatfeldolgozók */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">5. Adatfeldolgozók és egyéb adattovábbítás</h2>
                    <p className="mb-4">Az Adatkezelő a következő Adatfeldolgozókat veszi igénybe:</p>
                    <div className="overflow-x-auto mb-4">
                        <table className="w-full text-left text-sm border-collapse border border-border">
                            <thead>
                                <tr className="bg-white/5 border-b border-border">
                                    <th className="py-2 px-3 font-semibold text-ink border-r border-border/50">Tevékenység</th>
                                    <th className="py-2 px-3 font-semibold text-ink border-r border-border/50">Név</th>
                                    <th className="py-2 px-3 font-semibold text-ink">Székhely</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50 text-muted">
                                <tr>
                                    <td className="py-2 px-3 border-r border-border/50">Tárhelyszolgáltatás, weboldal üzemeltetés</td>
                                    <td className="py-2 px-3 border-r border-border/50">SIROTECH Kft.</td>
                                    <td className="py-2 px-3">8000 Székesfehérvár, Lövölde utca 24 4/15</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-3 border-r border-border/50">Statisztikai szolgáltatás</td>
                                    <td className="py-2 px-3 border-r border-border/50">Google Ireland Limited</td>
                                    <td className="py-2 px-3">Gordon House, Barrow Street, Dublin 4, Írország</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-3 border-r border-border/50">Könyvelés, számlázás</td>
                                    <td className="py-2 px-3 border-r border-border/50">Kinevezett könyvelő / számlázó</td>
                                    <td className="py-2 px-3">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-muted">Az Adatkezelő az adatok továbbítását harmadik fél részére kizárólag jogszabály vagy hozzájárulás alapján végzi. EGT-n kívüli adattovábbítás kizárólag a Google Analytics esetében történhet a Google adatvédelmi elvei alapján.</p>
                </section>

                {/* 6. Érintettek jogai */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">6. Az Érintettek jogai</h2>
                    <p className="mb-4">Az Érintett a GDPR alapján az alábbi jogokkal élhet, amelyeket az Adatkezelő elérhetőségein (<a href="mailto:hello@sironic.hu" className="text-primary hover:underline">hello@sironic.hu</a>) gyakorolhat:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-muted">
                        <li><strong>Tájékoztatáshoz és hozzáféréshez való jog:</strong> tájékoztatást kérhet az adatkezelés tényéről és részleteiről.</li>
                        <li><strong>Helyesbítéshez való jog:</strong> kérheti a pontatlan adatok javítását.</li>
                        <li><strong>Törléshez való jog:</strong> kérheti adatai törlését, ha az adatkezelés célja megszűnt vagy visszavonta hozzájárulását.</li>
                        <li><strong>Az adatkezelés korlátozásához való jog.</strong></li>
                        <li><strong>Adathordozhatósághoz való jog:</strong> kérheti adatai géppel olvasható formátumban történő kiadását.</li>
                        <li><strong>Tiltakozáshoz való jog:</strong> jogos érdeken alapuló adatkezelés esetén.</li>
                        <li><strong>Hozzájárulás visszavonásának joga:</strong> bármikor visszavonhatja a hozzájárulást.</li>
                    </ol>
                    <p className="mt-4 text-sm">Az Adatkezelő a kérelmeket indokolatlan késedelem nélkül, de legkésőbb a beérkezéstől számított <strong>egy hónapon belül</strong> teljesíti.</p>
                </section>

                {/* 7. Jogorvoslat */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">7. Jogorvoslati lehetőségek</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-ink mb-2">a) Panasz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):</h3>
                            <div className="bg-white/5 rounded-xl p-4 text-sm text-muted">
                                <p><strong>Székhely:</strong> 1055 Budapest, Falk Miksa utca 9–11.</p>
                                <p><strong>Postacím:</strong> 1363 Budapest, Pf. 9.</p>
                                <p><strong>Telefon:</strong> +36 (1) 391-1400</p>
                                <p><strong>E-mail:</strong> ugyfelszolgalat@naih.hu</p>
                                <p><strong>Weboldal:</strong> <a href="https://naih.hu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.naih.hu</a></p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-ink mb-2">b) Bírósági jogorvoslat:</h3>
                            <p className="text-sm text-muted">Az Érintett jogosult a jogainak megsértése esetén bírósághoz fordulni. A per a törvényszék hatáskörébe tartozik, az Érintett választása szerint a lakóhelye szerinti törvényszék előtt is megindítható.</p>
                        </div>
                    </div>
                </section>

                {/* 8-9. Záró */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">8. Adatbiztonsági intézkedések</h2>
                    <p className="text-muted">Az Adatkezelő megfelelő technikai és szervezési intézkedésekkel gondoskodik a kezelt személyes adatok biztonságáról, védi azokat a jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés, megsemmisítés, valamint a véletlen megsemmisülés és sérülés ellen. Az Adatkezelő rendszereit és a Weboldalt üzemeltető tárhelyszolgáltató infrastruktúráját megfelelő fizikai, logikai és adminisztratív védelmi intézkedésekkel látja el.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-display text-ink mb-4">9. Záró rendelkezések</h2>
                    <p className="text-muted">Jelen Tájékoztatóra a magyar jog, elsősorban a GDPR és az Infotv. rendelkezései az irányadóak. Az Adatkezelő fenntartja a jogot, hogy jelen Tájékoztatót egyoldalúan, a Weboldalon történő közzététellel módosítsa.</p>
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
