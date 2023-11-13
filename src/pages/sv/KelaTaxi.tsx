import { CheckCircleIcon } from '@heroicons/react/20/solid'
import LayoutSv from '../../components/LayoutSv'

export default function FPATaxi() {
    return (
        <LayoutSv>
            <div className="bg-gray-900 px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-white">
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Boka en FPA-taxi genom att ringa något av följande nummer</h1>
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
                            Du kan endast få ersättning för resor som beställts från FPA-taxinumret och betala en maximal självrisk på 25 euro för resan, visa FPA-kortet eller identitetsbeviset i början av resan.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-white">
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Beställ taxin före kl. 14.00 dagen före resan.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Beställ taxin på samma nummer också om du behöver taxi akut.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    På en och samma gång kan du beställa alla de tur- och returresor som du känner till för 14 dygn framåt.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Beställ returresan minst 1 timme innan du vill bli avhämtad om tidpunkten för returresan är känd.
                                </span>
                            </li>
                        </ul>
                        <h2 className="mt-16 text-3xl font-bold tracking-tight text-white">Bekant taxi</h2>
                        <p className="mt-6">
                            Vissa kundgrupper har möjlighet att få rätt till egen taxi. När du vill reda ut om du möjligtvis har rätt till egen taxi, ring FPA:s servicenummer 020 692 204 Mer information: <a href='https://www.kela.fi/web/sv/taxiresor_bekant-taxi' className='text-gray-600 hover:text-teal-500'>https://www.kela.fi/web/sv/taxiresor_bekant-taxi</a>
                            <br />
                            <br />
                            En förutsättning för att transport med bekant taxi ska kunna ordnas efter 1.1.2022 är att det förmedlingsföretag som ordnar taxiresor som FPA ersätter kan anvisa en bekant taxi för kunden.
                        </p>
                        <figure className="mt-10 border-l border-teal-500 pl-9">
                            <blockquote className="font-semibold text-sm text-white">
                                <p>
                                    “Beställningssamtalen spelas in med tanke på kvalitetsutveckling. Vid behov kan FPA också i efterskott kontrollera uppgifterna i beställningen. De uppgifter som du lämnar i samband med telefonsamtalet används inte för något annat ändamål än för ordnande av resan och för handläggning av reseersättningen vid FPA. FPA fungerar som den registeransvariga som avses i personuppgiftslagen.”
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>
        </LayoutSv>
    )
}
