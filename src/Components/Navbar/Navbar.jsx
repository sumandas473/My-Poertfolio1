import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='h-20 w-full  flex '>
            <div className='h-full w-2/5 flex items-center px-10 gap-4'>
                
                <div className='h-14 w-14 bg-[#8a4bf7] rounded-[50px] flex justify-center items-center  pb-4' id='start-bg'>
                    <div id='four-pointed-star' className=''></div>
                    
                </div>
                <h1 className='text-white text-sm' id='email'>sumandassumandas473@gmail.com</h1>

            </div>
            <div className='h-full w-3/5 px-10 flex  items-center justify-end gap-10 text-white ' id='nav-element'>
                <h1>Service</h1>
                <h1>Work</h1>
                <h1>Resume</h1>
                <h1>Skills</h1>
                <h1>Contact</h1>
                <h1 className='px-6 py-2 text-white bg-gradient-to-r from-[#9106FF] to-[#390066] rounded-3xl '>Hire Me!</h1>

            </div>

        </div>
    )
}

export default Navbar