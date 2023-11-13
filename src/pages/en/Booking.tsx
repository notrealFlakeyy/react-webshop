import LayoutEn from '../../components/LayoutEn'

export default function Booking() {
    return (
        <>
            <LayoutEn>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">

                            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Order info</h2>
                            <p className="mt-6 text-2xl leading-8 text-white">
                                Mention the exact street address and staircase in the order
                            </p>
                        </div>
                    </div>
                </div>
            </LayoutEn>
        </>
    )
}
