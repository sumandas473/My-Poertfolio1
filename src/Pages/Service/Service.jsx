import React from 'react'
import './Service.css'
import rightarrow from '../../assets/Images/arrow.png'
import { motion } from "framer-motion"

function Service() {
  return (
    <div className='w-full py-20 flex flex-col items-center' id='main-container1'>
        <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1}}  className="w-full h-40 text-center mb-10 ">
            <h1  className="text-[3rem] font-bold capitalize from-[#6515ab] to-[#fff] bg-gradient-to-r bg-clip-text text-transparent " id='heading'>my quality services</h1>
            <h2 className=" capitalize mx-[35vw] text-white opacity-45" id='sub-heading'>i put your ideas and thus your wishes in the form of a unique project that inspires you and your customers</h2>
        </motion.div>
        {/* 1st div  */}
        <div  className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:1}}  className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">01</h1>
                <h1 className="text-[2rem] font-bold text-white">branding design</h1>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:1}}  className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:1}} className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10  hover:scale-110 duration-200'/></motion.div>
        </div>

        {/* 2nd div */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:1.5}} className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">02</h1>
                <h1 className="text-[2rem] font-bold text-white">web design</h1>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:1.5}} className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:1.5}} className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10  hover:scale-110 duration-200'/></motion.div>
        </div>

        {/* 3rd div  */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:2}} className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">03</h1>
                <h1 className="text-[2rem] font-bold text-white">UI/UX design</h1>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:2}} className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:2}} className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10  hover:scale-110 duration-200'/></motion.div>
        </div>

        {/* 4th div  */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:2.5}} className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">04</h1>
                <h1 className="text-[2rem] font-bold text-white">web development</h1>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:2.5}} className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:1,delay:2.5}} className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10  hover:scale-110 duration-200'/></motion.div>
        </div>

        {/* 4th div  */}

        <div className="h-32 w-[90%]  flex  hover:bg-[#692b9f] duration-500">
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:0.8,delay:3}} className="h-full w-[35%]  flex items-center pl-10 pb-12 gap-4 capitalize">
                <h1 className="text-[1.5rem] font-semibold text-[#d092ff]">05</h1>
                <h1 className="text-[2rem] font-bold text-white">App development</h1>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:0.8,delay:3}} className="h-full w-[45%] pt-6">
                <h2 className="text-center text-white capitalize mx-24 ">i break down complex user experience problem to create integrity focussed solution that connect billions of people</h2>
            </motion.div>
            <motion.div initial={{opacity:0, y:75}} whileInView={{opacity:1, y:0}} transition={{duration:0.8,delay:3}} className="h-full w-[20%]  flex items-center justify-center pb-12"><img src={rightarrow} alt="" className='h-10 w-10  hover:scale-110 duration-200'/></motion.div>
        </div>


    </div>
  )
}

export default Service