import { motion } from "framer-motion";
import React from "react";
import Reacts from "../../assets/Images/Reacts.png";
import renative from "../../assets/Images/react-native.png";
import html5 from "../../assets/Images/html5.png";
import css3 from "../../assets/Images/css3.png";
import Figma from "../../assets/Images/figma.webp";
import Xd from "../../assets/Images/XD.png";
import photoshop from "../../assets/Images/Photoshop.png";
import "./Skills.css";

function Skills() {
  return (
    <div className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-40 text-center mb-10 "
      >
        <h1
          className="text-[3rem] font-bold capitalize from-[#6515ab] to-[#fff] bg-gradient-to-r bg-clip-text text-transparent "
          id="heading"
        >
          my skills
        </h1>
        <h2
          className=" capitalize mx-[35vw] text-white opacity-45"
          id="sub-heading"
        >
          i put your ideas and thus your wishes in the form of a unique project
          that inspires you and your customers
        </h2>
      </motion.div>
{/* skills  */}
      <div className="h-60 w-full  px-20 flex items-center justify-center gap-2 ">
        {/* 1st element */}
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 6 }}
          className="h-full w-[12%]  flex flex-col items-center justify-around text-white opacity-30 hover:opacity-100 duration-[0.8s] grayscale  hover:grayscale-0"
          id="skill-container"
        >
          <div className="h-[80%] w-[90%] bg-[#ffffff1b] flex flex-col justify-center items-center rounded-3xl shadow-inner hover:shadow-white duration-[0.8s] " id="skill-container-1">
            <img src={Reacts} alt="" className="" />
            <h1>70%</h1>
          </div>
          <h1 className="text-[#c658fd] font-semibold text-xl">React</h1>
        </motion.div>

        {/*2nd element */}
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 5 }}
          className="h-full w-[12%]  flex flex-col items-center justify-around text-white opacity-40 hover:opacity-100 duration-[0.8s] grayscale  hover:grayscale-0"
          id="skill-container"
        >
          <div className="h-[80%] w-[90%] bg-[#ffffff1b] flex flex-col justify-center items-center  rounded-3xl shadow-inner hover:shadow-white duration-[0.8s]" id="skill-container-1">
            <img src={renative} alt="" className="h-28" id="react-native" />
            <h1 className="mt-4">65%</h1>
          </div>
          <h1 className="text-[#c658fd] font-semibold text-xl">React Native</h1>
        </motion.div>
        {/*3rd element */}
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 4 }}
          className="h-full w-[12%]  flex flex-col items-center justify-around text-white opacity-30 hover:opacity-100 duration-[0.8s] grayscale  hover:grayscale-0"
          id="skill-container"
        >
          <div className="h-[80%] w-[90%] bg-[#ffffff1b] flex flex-col justify-center  items-center  rounded-3xl pt-2 shadow-inner hover:shadow-white duration-[0.8s]"  id="skill-container-1">
            <img src={html5} alt="" className=" h-24" />
            <h1 className="mt-6">80%</h1>
          </div>
          <h1 className="text-[#c658fd] font-semibold text-xl">HTML5</h1>
        </motion.div>
        {/*4th element */}
        <motion.div
          initial={{ opacity: 0, x: -700 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 3 }}
          className="h-full w-[12%]  flex flex-col items-center justify-around text-white opacity-50 hover:opacity-100 duration-[0.8s] grayscale  hover:grayscale-0"
          id="skill-container"
        >
          <div className="h-[80%] w-[90%] bg-[#ffffff1b] flex flex-col justify-center  items-center  rounded-3xl pt-2 shadow-inner hover:shadow-white duration-[0.8s]" id="skill-container-1">
            <img src={css3} alt="" className=" h-24" />
            <h1 className="mt-6">80%</h1>
          </div>
          <h1 className="text-[#c658fd] font-semibold text-xl">CSS3</h1>
        </motion.div>

        {/*5th element */}
        <motion.div
          initial={{ opacity: 0, x: -900 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="h-full w-[12%]  flex flex-col items-center justify-around text-white opacity-50 hover:opacity-100 duration-[0.8s] grayscale  hover:grayscale-0"
          id="skill-container"
        >
          <div className="h-[80%] w-[90%] bg-[#ffffff1b] flex flex-col justify-center items-center rounded-3xl shadow-inner hover:shadow-white duration-[0.8s]" id="skill-container-1">
            <img src={Figma} alt="" className=" h-24" />
            <h1 className="mt-8">80%</h1>
          </div>
          <h1 className="text-[#c658fd] font-semibold text-xl">Figma</h1>
        </motion.div>

        {/*6th element */}

        <motion.div
          initial={{ opacity: 0, x: -950 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-full w-[12%]  flex flex-col items-center justify-around text-white opacity-50 hover:opacity-100 duration-[0.8s] grayscale  hover:grayscale-0"
          id="skill-container"
        >
          <div className="h-[80%] w-[90%] bg-[#ffffff1b] flex flex-col justify-center items-center rounded-3xl pb-4 shadow-inner hover:shadow-white duration-[0.8s]" id="skill-container-1">
            <img src={Xd} alt="" className="mb-2" />
            <h1 className="mt-">80%</h1>
          </div>
          <h1 className="text-[#c658fd] font-semibold text-xl">Ad XD</h1>
        </motion.div>
        {/*7th element */}

        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="h-full w-[12%]  flex flex-col items-center justify-around text-white  duration-[0.8s] grayscale  hover:grayscale-0"
          id="skill-container"
        >
          <div className="h-[80%] w-[90%] bg-[#ffffff1b] flex flex-col justify-center items-center rounded-3xl  shadow-inner hover:shadow-white duration-[0.8s]" id="skill-container-1">
            <img src={photoshop} alt="" className=" h-20" />
            <h1 className="mt-8">80%</h1>
          </div>
          <h1 className="text-[#c658fd] font-semibold text-xl">Ad Photoshop</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
