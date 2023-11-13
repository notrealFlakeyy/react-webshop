import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Framsidan from './pages/sv/Index.tsx'
import Kontakt from './pages/sv/Contact.tsx'
import Bokning from './pages/sv/Booking.tsx'
import FPATaxiSv from './pages/sv/KelaTaxi.tsx'

import Etusivu from './pages/fi/Index.tsx'
import Varaus from './pages/fi/Booking.tsx'
import Yhteystiedot from './pages/fi/Contact.tsx'
import KelaTaxiFi from './pages/fi/KelaTaxi.tsx'

import FrontPage from './pages/en/Index.tsx'
import Booking from './pages/en/Booking.tsx'
import Contact from './pages/en/Contact.tsx'
import KelaTaxiEn from './pages/en/KelaTaxi.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/sv" />} />
        <Route path='/sv' element={<Framsidan />} />
        <Route path='/sv/Kontakt' element={<Kontakt />} />
        <Route path='/sv/Bokning' element={<Bokning />} />
        <Route path='/sv/Kelataxi' element={<FPATaxiSv />} />
        <Route path='/fi' element={<Etusivu />} />
        <Route path='/fi/Varaus' element={< Varaus />} />
        <Route path='/fi/Yhteystiedot' element={< Yhteystiedot />} />
        <Route path='/fi/Kelataxi' element={< KelaTaxiFi />} />
        <Route path='/en' element={< FrontPage />} />
        <Route path='/en/Booking' element={< Booking />} />
        <Route path='/en/Contact' element={< Contact />} />'
        <Route path='/en/Kelataxi' element={< KelaTaxiEn />} />
      </Routes>
    </Router>
  </React.StrictMode >,
)