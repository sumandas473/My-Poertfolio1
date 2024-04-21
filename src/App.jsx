import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Service from './Pages/Service/Service'

function App() {
  return (
    <div className='bg-gradient-to-r from-[#10041c] to-[#1d0331]  w-full'>
      <Navbar />
      <Home />
      <Service />
    </div>
  )
}

export default App