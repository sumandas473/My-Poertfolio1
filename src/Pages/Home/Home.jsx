import React from 'react'
import './Home.css'
import Twitter from '../../assets/Images/twitter.webp'
import Linkdin from '../../assets/Images/linkedin.png'
import Git from '../../assets/Images/Git1.png'
import Profile from '../../assets/Images/Human.jpeg'
function Home() {
    return (
        <div className='h-screen w-full '>
            <div className='h-screen w-full  flex justify-end items-center px-60' id='main-container'>
                <h1 className='text-[25em] text-white  font-bold  pb-28' id='hi'>HI</h1>
                <div className=' h-[25vw] w-[22vw] border-2  rotate-6 rounded-[40px] overflow-hidden' id='bg-photo'><img src={Profile} alt=""  className='h-full w-full object-cover'/></div>

                <div className='h-full w-[50%] absolute left-0 py-32 pl-20 'id='left-sec'>
                    <h1 className='text-[3.5em] font-semibold  text-white' id='text-title'>I am Suman</h1>
                    <h1 className='text-[6em]  capitalize font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent  ' id='text-subtitle'>web developer +</h1>
                    <h1 className='text-[6em]  capitalize font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent ' id='text-subtitle'>UI/UX designer</h1>
                    <p className=' text-lg  capitalize  text-white my-4 opacity-50 ' id='text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam numquam quas, quae optio facere tempora beatae nam ex error illum asperiores, pariatur enim culpa perspiciatis dignissimos ducimus. Enim numquam ad deleniti facere! Reprehenderit quae doloremque placeat illo magnam autem!</p>
                    <div className='  py-10 flex justify-around w-[50%]'  id='text-bg'>
                        <h1 className='px-8 py-3 text-white rounded-[50px] bg-[#540185]  hover:bg-[#9b3ad3]' id='text'>Download CV</h1>
                        <div className='w-12 h-12  rounded-[50px] border-[2px] border-[#540185] hover:bg-[#b243f3fe]'><img src={Twitter} alt="" /></div>
                        <div className='w-12 h-12  rounded-[50px] border-[2px] border-[#540185] hover:bg-[#b243f3fe] flex justify-center items-center'><img src={Linkdin} alt="" className='h-6 w-6'/></div>
                        <div className='w-12 h-12  rounded-[50px] border-[2px] border-[#540185] hover:bg-[#c373f2] flex justify-center items-center'><img src={Git} alt="" className='h-8 w-8'/></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home