import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import AllRoom from './pages/AllRoom';
import Footer from './components/Footer';
import RoomDetails from './pages/RoomDetails';
import MyBooking from './pages/MyBooking';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRoom />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBooking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App