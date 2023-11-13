import { CheckCircleIcon } from '@heroicons/react/20/solid'
import LayoutFi from '../../components/LayoutFi'

export default function KelaTaxi() {
    return (
        <LayoutFi>
            <div className="bg-gray-900 px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-white">
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Tilaa Kela-taksi soittamalla johonkin seuraavista numeroista</h1>
                    <p className="mt-6 text-xl leading-8">
                        <h3>FPA-taxinummer Österbotten (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 600</p>
                        <h3>FPA-taxinummer på finska Österbotten (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 500</p>
                        <h3>FPA-taxinummer Södra Österbotten (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 100</p>
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p className='text-xl text-gray-300'>
                            Voit saada korvausta vain Kelan taksinumerosta tilatuista matkoista ja maksaa matkasta enintään 25 euron omavastuun, näytä Kela-korttisi tai henkilökorttisi matkan alussa.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-white">
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Tilaa taksisi ennen klo 14.00 matkaa edeltävänä päivänä.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Voit myös tilata taksin samasta numerosta, jos tarvitset taksia kiireellisesti.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Samalla voit varata kaikki tiedossasi olevat paluumatkat seuraavalle 14 päivälle.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Jos paluumatkan aika on tiedossa, varaa paluumatka vähintään 1 tunti ennen kuin haluat tulla noudetuksi.
                                </span>
                            </li>
                        </ul>
                        <h2 className="mt-16 text-3xl font-bold tracking-tight text-white">Vakiotaksiasiakkuus</h2>
                        <p className="mt-6">
                            Tietyillä asiakasryhmillä on mahdollisuus saada vakiotaksiasiakkuus. Kun haluat selvittää, voisiko sinulla olla oikeus vakiotaksin käyttöön, soita KELAN palvelunumeroon 020 692 204 Lisätietoa: <a href='https://www.kela.fi/vakiotaksiasiakkuus' className='text-gray-600 hover:text-teal-500'>https://www.kela.fi/vakiotaksiasiakkuus</a>
                            <br />
                            <br />
                            Edellytyksenä vakiotaksiasiakkuuden järjestymiselle 1.1.2022 jälkeen on, että KELAN korvaamia taksikuljetuksia järjestävä tilausvälitysyhtiö pystyy osoittamaan asiakkaalle vakiotaksin.
                        </p>
                        <figure className="mt-10 border-l border-teal-500 pl-9">
                            <blockquote className="font-semibold text-sm text-white">
                                <p>
                                    "Tilauspuhelut nauhoitetaan palvelun laadun kehittämiseksi. Tarvittaessa KELA voi myös tarkistaa jälkikäteen tilauksen tietoja. Puhelun yhteydessä antamiasi tietoja ei käytetä muuhun kuin matkan järjestämiseen ja matkakorvauksen käsittelyyn Kelassa. Henkilötietolaissa tarkoitettu tietojen rekisterinpitäjä on KELA."
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>
        </LayoutFi>
    )
}
