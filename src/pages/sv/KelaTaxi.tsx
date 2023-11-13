import { CheckCircleIcon } from '@heroicons/react/20/solid'
import LayoutSv from '../../components/LayoutSv'

export default function FPATaxi() {
    return (
        <LayoutSv>
            <div className="bg-gray-900 px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-white">
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Boka en FPA-taxi genom att ringa något av följande nummer</h1>
                    <p className="mt-6 text-xl leading-8">
                        <h3>FPA-taxinummer Österbotten (Keskustaxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 92 446</p>
                        <h3>FPA-taxinummer Österbotten (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 600</p>
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p className='text-xl text-gray-300'>
                            Du kan endast få ersättning för resor som beställts från FPA-taxinumret och betala en maximal självrisk på 25 euro för resan, visa FPA-kortet eller identitetsbeviset i början av resan.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-white">
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>

                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>

                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>

                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>

                                </span>
                            </li>
                        </ul>
                        <h2 className="mt-16 text-3xl font-bold tracking-tight text-white"></h2>
                        <p className="mt-6">

                        </p>
                        <figure className="mt-10 border-l border-teal-500 pl-9">
                            <blockquote className="font-semibold text-sm text-white">
                                <p>

                                </p>
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>
        </LayoutSv>
    )
}
