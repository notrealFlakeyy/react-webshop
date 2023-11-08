import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Index.tsx'
import './index.css'
import Layout from './components/Layout.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact.tsx'
import Booking from './pages/Booking.tsx'
import KelaTaxi from './pages/KelaTaxi.tsx'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/Kelataxi' element={<KelaTaxi />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)