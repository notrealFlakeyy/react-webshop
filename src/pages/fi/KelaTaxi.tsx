import LayoutFi from '../../components/LayoutFi'

export default function KelaTaxi() {
    return (
        <LayoutFi>
            <div className="bg-gray-900 px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-white">
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">Tilaa Kela-taksi soittamalla johonkin seuraavista numeroista</h1>
                    <p className="mt-6 text-xl leading-8">
                        <h3>Kela-taksinumero Pohjanmaa (Keskustaxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 92 444</p>
                        <h3>Kela-taksinunmero Pohjanmaa (Vasa Ulataxi)</h3>
                        <p className='text-2xl text-cyan-300'>0800 500 500</p>
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p className='text-xl text-gray-300'>
                            Voit saada korvausta vain Kelan taksinumerosta tilatuista matkoista ja maksaa matkasta enintään 25 euron omavastuun, näytä Kela-korttisi tai henkilökorttisi matkan alussa.
                        </p>
                    </div>
                </div>
            </div>
        </LayoutFi>
    )
}
