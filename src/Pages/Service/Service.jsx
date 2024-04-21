import React from 'react'
import './Service.css'
import rightarrow from '../../assets/Images/arrow.png'

function Service() {
  return (
    <div className='w-full py-20 flex flex-col items-center'>
        <div className="w-full h-40 text-center mb-10">
            <h1 className="text-[3rem] font-bold capitalize from-[#6515ab] to-[#fff] bg-gradient-to-r bg-clip-text text-transparent" id='heading'>my quality services</h1>
            <h2 className=" capitalize mx-[35vw] text-white opacity-45" id='sub-heading'>i put your ideas and thus your wishes in the form of a unique project that inspires you and your customers</h2>
        </div>
        {/* 1st div  */}
        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <div className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">01</h1>
                <h1 className="text-[2rem] font-bold text-white">branding design</h1>
            </div>
            <div className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </div>
            <div className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10 '/></div>
        </div>

        {/* 2nd div */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <div className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">02</h1>
                <h1 className="text-[2rem] font-bold text-white">web design</h1>
            </div>
            <div className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </div>
            <div className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10 '/></div>
        </div>

        {/* 3rd div  */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <div className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">03</h1>
                <h1 className="text-[2rem] font-bold text-white">UI/UX design</h1>
            </div>
            <div className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </div>
            <div className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10 '/></div>
        </div>

        {/* 4th div  */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <div className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">04</h1>
                <h1 className="text-[2rem] font-bold text-white">web development</h1>
            </div>
            <div className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </div>
            <div className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10 '/></div>
        </div>

        {/* 4th div  */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <div className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">05</h1>
                <h1 className="text-[2rem] font-bold text-white">App development</h1>
            </div>
            <div className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </div>
            <div className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10 '/></div>
        </div>


    </div>
  )
}

export default Service