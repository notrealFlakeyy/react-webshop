import LayoutSv from '../../components/LayoutSv'

export default function Bokning() {
    return (
        <>
            <LayoutSv>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">

                            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Beställningsinfo</h2>
                            <p className="mt-6 text-2xl leading-8 text-white">
                                Nämn den exakta gatuadressen och trappuppgången i beställningen
                            </p>
                            <p className="text-base mt-7 font-semibold leading-7 text-white">Obs. I en personbil ryms endast fyra passagerare, antalet får inte ens tillfälligt överskridas.</p>
                        </div>
                    </div>
                </div><div className="bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">FÖRHANDSBESTÄLLNINGAR</h1>
                            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
                                <div>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">Det rekommenderas att boka taxi på förhand, särskilt till kommande nattflyg.</p>
                                    <p>

                                        Vid morgonavgång med flyg eller tåg. Spara tillräckligt med tid speciellt då det är dåligt väder. Om taxin inte är på plats i tid, tag genast kontakt till taxicentralen.

                                        Förhandsbeställningar skall göras senast en halvtimme före upphämtning. Vid förhandsbeställningar har chauffören rätt att en förhandsbeställningsavgift på 5,00€.

                                    </p>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">Nämn även...</p>
                                    <p className="mt-8">
                                        ..om ni behöver en farmarbil, om ni har t.ex. cykel eller husdjur med, om ni behöver en svensk/engelskspråkig chaufför, ska åka en längre taxiresa eller om ni har andra specialönskningar som ni vill att vi tar i beaktande.

                                        Vi kan även skicka en bil som är utrustad med barnbilstol.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">Tilläggsavgifter</p>
                                    <p>
                                        Observera, att det uppbärs en tilläggsavgift på 3,50€ för transport av cykel och husdjur. Ledar- och hjälphundar åker kostnadsfritt.

                                        Resor som kräver barnbilstol i bilen bör bokas i god tid. Det debiteras en extra avgift för hämtning av barnbilstolen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutSv>
        </>
    )
}
