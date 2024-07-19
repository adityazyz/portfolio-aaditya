"use client";
import React from "react";
import { motion } from "framer-motion";

function AboutMe() {

  const words =
    "I am a seasoned full-stack web developer from New Delhi, India. With expertise in the MERN stack (MongoDB, Express, React, Node.js), I craft stunning, high-performance websites that exceed expectations. Whether you're looking to build a new website or enhance an existing one, I bring creativity, precision, and dedication to every project. Let's collaborate to create something extraordinary!";
  return (
    <div className="bg-[#18181B] h-auto md:h-[100vh]  pt-10">
      <div className="w-full h-auto md:h-[100vh] py-12 md:py-0  bg-gray-100 px-6">
        <div className="h-auto md:md:h-[100vh] w-full justify-start py-20 md:px-16 px-4 flex md:flex-row flex-col gap-4  items-center pb-14 pt-4">
          <div className="w-1/2 md:w-1/3  flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                className="rounded-full mb-6 w-[60%] md:h-[90%] md:w-[90%] lg:h-[70%]  lg:w-[70%]"
                src="/picture.jpeg"
                alt="My Image"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
    
            className=" w-full md:w-2/3 flex flex-col justify-start gap-4 text-gray-800 md:mt-0 sm:mt-8 xs:mt-4 text-center md:text-left  md:px-0 ml-0 sm:ml-5"
          >
            <h1 className="md:text-4xl flex items-center md:items-start flex-col  justify-center flex-wrap text-3xl  font-semibold font-serif">
              <span className="text-blue-500 ">Behind the Code:</span>{" "}
              <span className=" bg-yellow-300">Aaditya Dagar.</span>
            </h1>

             <div className="mt-4 sm:mt-0 text-left"> {words}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
