import LayoutSv from '../../components/LayoutSv'

export default function Bokning() {
    return (
        <>
            <LayoutSv>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">

                            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">FÖRHANDSBESTÄLLNINGAR</h2>
                            <p className="mt-6 text-2xl leading-8 text-white">
                                Det rekommenderas att boka taxi på förhand.
                            </p>
                            <p className="text-base mt-7 font-semibold leading-7 text-white">Obs. I en personbil ryms endast fyra passagerare, antalet får inte ens tillfälligt överskridas.</p>
                        </div>
                    </div>
                </div>
            </LayoutSv>
        </>
    )
}
