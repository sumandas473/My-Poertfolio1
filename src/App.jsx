import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Service from './Pages/Service/Service'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import Loading from './Pages/Loading/Loading'
import { useState, useEffect } from 'react';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  

  return (
    <div className='bg-gradient-to-r from-[#10041c] via-[#2f0f50] to-[#25053d]  w-full ' id='app   '>
      
      <Navbar />
      <Home />
      <Service />
      <Skills />
      <Contact />
    </div>
  )
}

export default App