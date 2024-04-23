import React from 'react'
import call from '../../assets/Images/call.png'
import Email from '../../assets/Images/Email.png'
import location from '../../assets/Images/location.png'

function Contact() {
  return (
    <div className='w-full h-screen flex items-center justify-around  '>
        <div className="w-[45%] h-full bg-[#27073ca7] text-center items-center pt-40 flex flex-col">
            <h1 className="text-[3rem] font-bold capitalize from-[#823e9f] to-[#fff] bg-gradient-to-r bg-clip-text text-transparent ">lets work together!</h1>
            <h2 className=" capitalize text-sm mt-2 text-white opacity-45">i design and code beautifully simple things and i love what i do. just simple like that.</h2>
            <div className="h-[60%] w-[70%]  mt-20 flex flex-col  justify-evenly gap-2">
                <input type="text" placeholder='Type Your Name...' className='h-20 bg-[#0f0318] border-[1px] border-[#ffffff38] rounded-xl px-6 text-white'/>
                <input type="text" placeholder='Type Your Email...' className='h-20 bg-[#0f0318] border-[1px] border-[#ffffff38] rounded-xl px-6 text-white'/>
                <input type="number" placeholder='Type Your Phone Number...' className='h-20 bg-[#0f0318] border-[1px] border-[#ffffff38] rounded-xl px-6 text-white'/>
                <textarea rows='14' cols='6' placeholder='Message..' className=' bg-[#0f0318] border-[1px] border-[#ffffff38] rounded-xl p-6 text-white'/>
                <h1 className="px-4 py-2 font-semibold w-[30%] bg-gradient-to-r from-[#6515ab] to-[#fff] rounded-3xl hover:scale-110 duration-300 cursor-pointer">Sent Message</h1>
            </div>
        </div>
        <div className="w-[45%] h-full flex flex-col justify-center">
            {/* 1st element  */}
            <div className="h-20 w-96  flex items-center gap-4">
                <div className=" h-14 w-14 bg-gradient-to-r from-[#c697ed] to-[#390066] rounded-[50px]  flex items-center justify-center"><img src={call} alt="" className='h-6'/></div>
                <div className="w-[80%] flex flex-col text-white ">
                    <h2 className="">Phone</h2>
                    <h1 className="text-lg font-bold">+91 6295468394</h1>
                </div>
            </div>

{/* 2nd element  */}
            <div className="h-20 w-96  flex items-center gap-4">
                <div className=" h-14 w-14 bg-gradient-to-r from-[#c697ed] to-[#390066] rounded-[50px] flex items-center justify-center"><img src={Email} alt="" className=' brightness-200 h-8' /></div>
                <div className="w-[80%] flex flex-col text-white ">
                    <h2 className="">Email</h2>
                    <h1 className="text-lg font-bold">sumandassumandas@gmail.com</h1>
                </div>
            </div>

            {/* 3rd element  */}

            <div className="h-20 w-96  flex items-center gap-4">
                <div className=" h-14 w-14 bg-gradient-to-r from-[#c697ed] to-[#390066] rounded-[50px] flex items-center justify-center"><img src={location} alt="" className='h-6' /></div>
                <div className="w-[80%] flex flex-col text-white ">
                    <h2 className="">Address</h2>
                    <h1 className="text-lg font-bold">Mecheda, Purba Medinipur, 721137</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact