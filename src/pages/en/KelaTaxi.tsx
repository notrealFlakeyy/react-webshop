import { CheckCircleIcon } from '@heroicons/react/20/solid'
import LayoutEn from '../../components/LayoutEn'

export default function FPATaxi() {

    return (
        <LayoutEn>
            <div className="bg-gray-900 px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-white">
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Book a Kela-Taxi by calling one of the following numbers</h1>
                    <p className="mt-6 text-xl leading-8">
                        <h3>Kela-taxi number Ostrobothnia (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 600</p>
                        <h3>Kela-taxi number in Finnish Ostrobothnia (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 500</p>
                        <h3>Kela-taxi number Southern Ostrobothnia (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 100</p>
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p className='text-xl text-gray-300'>
                            You can only be reimbursed for journeys ordered from the FPA taxi number and pay a maximum deductible of 25 euros for the journey, show the FPA card or identity card at the start of the journey.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-white">
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Order the taxi before 14.00 the day before the trip.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Order the taxi on the same number as well if you need a taxi urgently.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    At one and the same time, you can order all the round trips that you know of for 14 days ahead.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                                <span>
                                    Order the return trip at least 1 hour before you want to be picked up if the time of the return trip is known.
                                </span>
                            </li>
                        </ul>
                        <h2 className="mt-16 text-3xl font-bold tracking-tight text-white">Familiar taxi</h2>
                        <p className="mt-6">
                            Some customer groups have the opportunity to have their own taxi. When you want to find out if you are possibly entitled to your own taxi, call FPA's service number 020 692 204 More information: <a href='https://www.kela.fi/web/sv/taxisesor_bekant-taxi' className='text-gray-600 hover:text-teal-500'>https://www.kela.fi/web/sv/taxisesor_bekant-taxi</a>
                            <br />
                            <br />
                            A condition for transport by familiar taxi to be able to be arranged after 1.1.2022 is that the intermediary company that arranges taxi journeys that FPA reimburses can designate a familiar taxi for the customer.
                        </p>
                        <figure className="mt-10 border-l border-teal-500 pl-9">
                            <blockquote className="font-semibold text-sm text-white">
                                <p>
                                    "The order calls are recorded with quality development in mind. If necessary, FPA can also check the information in the order later. The information you provide in connection with the telephone call is not used for any purpose other than for arranging the trip and for processing the travel compensation at FPA. FPA acts as the data controller referred to in the Personal Data Act.”
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>
        </LayoutEn>
    )
}
