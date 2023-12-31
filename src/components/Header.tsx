import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    PhoneIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'


const navigation = [
    { name: 'Framsidan', href: '/sv' },
    { name: 'Kontakt', href: '/sv/Kontakt' },
    { name: 'Hur bokar man taxi', href: '/sv/Bokning' },
    { name: 'FPA-Taxi', href: '/sv/Kelataxi' },
    { name: 'FI', href: '/fi' },
    { name: 'SV', href: '/sv' },
    { name: 'EN', href: '/en' },
]

export default function Example() {
    return (

        <Popover as="header" className="sticky top-0 z-30 bg-gray-900">
            <div className="bg-gray-900 p-6">
                <nav className="mx-auto flex max-w-9xl items-center justify-between px-6" aria-label="Global">
                    <div className="flex flex-1 items-center">
                        <div className="flex w-20 items-center justify-between md:w-auto">
                            <a href="/">
                                <span className="sr-only">Oravais Servicetrafik</span>
                                <img
                                    className="h-12 w-auto sm:h-10"
                                    src="/bslogo1.png"
                                    alt=""
                                />
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="hidden space-x-8 md:ml-10 md:flex sticky">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-white hover:text-gray-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:flex md:items-center p-5">
                        <a href='tel:063834106' className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded text-white hover:text-gray-300 md:p-2">
                            <PhoneIcon className='w-6'>063834106</PhoneIcon>
                        </a>
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between px-5 pt-4">
                            <div>
                                <img
                                    className="h-12 w-auto"
                                    src="/bslogo1.png"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="pb-6 pt-5">
                            <div className="space-y-1 px-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
