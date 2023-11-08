import './App.css'
import {
  ArrowPathIcon,
  FaceSmileIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Kompetenta Chaufförer',
    icon: FaceSmileIcon,
  },
  {
    name: 'Förnybar energi',
    icon: ArrowPathIcon,
  },
  {
    name: 'Säkra resor',
    icon: ShieldCheckIcon,
  }
]


function Home() {

  return (
    <main>
      <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Säkra resor</span>
                  <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                    i hela Finland
                  </span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  Vi är ett familjeägt taxi- och bussbolag beläget i Oravais som har kunden i fokus
                </p>
                <div className="mt-10 sm:mt-12">
                </div>
              </div>
            </div>
            <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full rounded lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/vito.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section with screenshot */}
      <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Miljötänk.
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Vi använder förnybara bränslen och utvidgar vår bilpark till att möta aktuella miljöbestämmelser. Här är en av våra elbilar.
            </p>
          </div>
          <div className="flex items-center -mb-10 mt-12 sm:-mb-24 lg:-mb-80 justify-center">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="/id3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Feature section with grid */}
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Allt du vill ha från en taxi i ett paket.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">

                          <feature.icon className="h-12 w-12 text-white" aria-hidden="true" />

                        </span>
                      </div>
                      <h3 className="mt-8 text-2xl font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
              <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-xl shadow-xl sm:aspect-h-7 sm:aspect-w-16 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="/invataxi.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div className='flex items-center'>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    Invataxi för rullstol och bår.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gray-900">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/flottan.jpg"
            alt=""
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-md px-6 py-12 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Vi finns här för Dig!</p>
            <p className="mt-3 text-lg text-gray-300">
              Vi erbjuder all form av persontrafik med fordon anpassade för dina behov.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
