import React from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'


function Navbar() {
    return (
        <div className='h-20 w-full  flex fixed backdrop-blur-sm z-30'>
            <div className='h-full w-2/5 flex items-center px-10 gap-4'>
                
                <div className='h-14 w-14 bg-[#8a4bf7] rounded-[50px] flex justify-center items-center  pb-4' id='start-bg'>
                    <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 2, repeat: Infinity }} id='four--star' className='mt-4 h-8 w-8 bg-white rounded-tl-2xl rounded-br-2xl'></motion.div>
                    
                </div>
                <h1 className='text-white text-sm' id='email'>sumandassumandas473@gmail.com</h1>

            </div>
            <div className='h-full w-3/5 px-10 flex  items-center justify-end gap-10 text-white' id='nav-element'>
                <h1 className='px-6 py-2 duration-[0.8s] rounded-full hover:bg-[#7d19e7]'>Service</h1>
                <h1 className='px-6 py-2 duration-[0.8s] rounded-full hover:bg-[#7c19e7]'>Work</h1>
                <h1 className='px-6 py-2 duration-[0.8s] rounded-full hover:bg-[#7c19e7]'>Resume</h1>
                <h1 className='px-6 py-2 duration-[0.8s] rounded-full hover:bg-[#7c19e7]'>Skills</h1>
                <h1 className='px-6 py-2 duration-[0.8s] rounded-full hover:bg-[#7c19e7]'>Contact</h1>
                <h1 className='px-6 py-2 text-white bg-gradient-to-r from-[#c697ed] to-[#390066] rounded-3xl hover:bg-[#991df8] ' id='hireme'>Hire Me!</h1>

            </div>

        </div>
    )
}

export default Navbar