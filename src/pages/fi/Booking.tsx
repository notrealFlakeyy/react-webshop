import LayoutFi from '../../components/LayoutFi'

export default function Varaus() {
    return (
        <>
            <LayoutFi>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">

                            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Tilauksen tiedot</h2>
                            <p className="mt-6 text-2xl leading-8 text-white">
                                Ilmoitathan tarkan osoitteen ja porraskäytävän tilauksessa
                            </p>
                            <p className="text-base mt-7 font-semibold leading-7 text-white">HUOM. Autoon mahtuu vain neljä matkustajaa, määrää ei saa ylittää edes väliaikaisesti.
                            </p>
                        </div>
                    </div>
                </div><div className="bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">ENNAKKOTILAUKSET</h1>
                            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
                                <div>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">On suositeltavaa varata taksi etukäteen, etenkin tuleville yölennoille. On suositeltavaa varata taksi etukäteen, etenkin tuleville yölennoille.</p>
                                    <p>
                                        Aamulla lähtö lentokoneella tai junalla. Säästä tarpeeksi aikaa, etenkin huonolla säällä. Jos taksi ei saavu ajoissa, ota välittömästi yhteyttä taksikeskukseen. Ennakkotilaukset on tehtävä viimeistään puoli tuntia ennen noutoa. Ennakkovarauksen yhteydessä kuljettajalla on oikeus 5,00 euron ennakkovarausmaksuun.
                                    </p>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">Muistaa</p>
                                    <p className="mt-8">
                                        Jos tarvitset isomman auton, jos sinulla on esim. polkupyörä tai lemmikkieläin, jos tarvitset ruotsalaista/englantilaista kuljettajaa, jos olet lähdössä pidemmälle taksimatkalle tai jos sinulla on muita erityistoiveita, jotka haluat ottaa huomioon.
                                        Voimme myös lähettää auton, joka on varustettu turvaistuimella.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">Lisämaksut</p>
                                    <p>
                                        Huomaathan, että polkupyörien ja lemmikkieläinten kuljetuksesta peritään 3,50 euron lisämaksu. Opaskoirat ja avustajakoirat matkustavat ilmaiseksi.
                                        Matkat, jotka edellyttävät lastenistuimia autossa, on varattava hyvissä ajoin etukäteen. Turvaistuimen ottamisesta veloitetaan lisämaksu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFi>
        </>
    )
}
