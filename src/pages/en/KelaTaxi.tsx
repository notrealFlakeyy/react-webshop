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
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p className='text-xl text-gray-300'>
                            You can only be reimbursed for journeys ordered from the FPA taxi number and pay a maximum deductible of 25 euros for the journey, show the FPA card or identity card at the start of the journey.
                        </p>
                    </div>
                </div>
            </div>
        </LayoutEn>
    )
}
