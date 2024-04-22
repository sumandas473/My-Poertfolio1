import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Service from './Pages/Service/Service'
import Skills from './Pages/Skills/Skills'

function App() {
  return (
    <div className='bg-gradient-to-r from-[#10041c] via-[#2f0f50] to-[#25053d]  w-full'>
      <Navbar />
      <Home />
      <Service />
      <Skills />
    </div>
  )
}

export default App