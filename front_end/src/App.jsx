import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contactus from './Pages/Contactus'
import Footer from './Components/Footer'
// import Contact from './Pages/Contact'


function App() {
  return (
    <>
    <div className='sticky-top py-2'>
      <Navbar/>
    </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact_us' element={<Contactus />} />
      </Routes>
      <div className=''>
        <Footer/>
      </div>
 
    </>
  )
}

export default App
