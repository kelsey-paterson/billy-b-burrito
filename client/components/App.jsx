import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Import custom components
import Nav from './common/Nav.jsx'
import Home from './home/Home.jsx'
import Login from './authentication/Login.jsx'
import Order from './orders/Order'

function App() {
  return (
    <>
      <Nav />
      <div className="bg-[#FDFCDC] text-black h-screen flex justify-center">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App
