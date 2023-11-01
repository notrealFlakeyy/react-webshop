import React from 'react'
import Header from './Header'
import Footer from './Footer'


interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='text-inherit font-medium bg-slate-100'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}