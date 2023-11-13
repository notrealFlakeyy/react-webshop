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
                            <p className="text-base mt-7 font-semibold leading-7 text-white">Note. A passenger car can accommodate only four passengers, the number must not be exceeded even temporarily.</p>
                        </div>
                    </div>
                </div><div className="bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">PRE-ORDERS</h1>
                            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
                                <div>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">It is recommended to book a taxi in advance, especially for upcoming night flights.</p>
                                    <p>
                                        On morning departure by plane or train. Save enough time especially when the weather is bad. If the taxi is not there on time, contact the taxi center immediately.

                                        Pre-orders must be made no later than half an hour before collection. For pre-orders, the driver is entitled to a pre-order fee of €5.00.
                                    </p>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">Nämn även...</p>
                                    <p className="mt-8">
                                        ..if you need a wagon car, if you have e.g. bicycle or pets with, if you need a Swedish/English-speaking driver, are going on a longer taxi journey or if you have other special requests that you want us to take into account.

                                        We can also send a car that is equipped with a child car seat.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl m-4 font-bold leading-7 text-gray-400">Additional charges</p>
                                    <p>
                                        Please note that there is an additional fee of €3.50 for the transport of bicycles and pets. Guide and service dogs travel free of charge.

                                        Trips that require a child car seat in the car should be booked well in advance. An additional fee is charged for collecting the child car seat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutEn>
        </>
    )
}
