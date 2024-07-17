"use client";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/BgGradientAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/AuroraBackground";

interface MyComponentProps {
  handleAboutScroll: () => void;
  handleContactScroll: () => void;
}

interface SocialData {
  name: string;
  icon: React.ReactNode;
  link: string;
}

function Hero({ handleAboutScroll, handleContactScroll }: MyComponentProps) {
  const iconClass =
    "h-6 w-6 md:h-7 md:w-7 ml-5 text-gray-200 hover:text-white hover:scale-110 transition-all duration-200 ease-in-out";

  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Aaditya",
      className: "text-green-400 dark:text-green-400",
    },
    {
      text: "Dagar",
      className: "text-green-400 dark:text-green-400",
    },
  ];

  const socialData: SocialData[] = [
    {
      name: "linkedin",
      icon: <FaLinkedin className={iconClass} />,
      link: "https://www.linkedin.com/in/aaditya-dagar-7431222a7/",
    },
    {
      name: "github",
      icon: <FaGithub className={iconClass} />,
      link: "https://github.com/adityazyz",
    },
    {
      name: "x",
      icon: <FaXTwitter className={iconClass} />,
      link: "https://x.com/adityazyzz",
    },
  ];

  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center "
        >
          {/* header  */}
          <div className="flex justify-end px-6 py-8 z-50 text-white mt-8 sm:mt-0">
            {socialData.map((item: SocialData): React.ReactNode => {
              return (
                <Link key={item.name} href={item.link}>
                  {item.icon}
                </Link>
              );
            })}

            <button onClick={handleContactScroll}>
              <MdEmail className={iconClass} />
            </button>
          </div>

          {/* content  */}
          <div className=" mt-[13vh] sm:mt-[15vh] md:mt-[20vh] flex-col z-50 inset-0 flex items-center justify-start text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            {/* <img className=" h-28 w-28 md:h-36 md:w-36 mb-6 rounded-full border-2  border-white" src="/photo2.jpg" alt="profile-picture" /> */}
            <div className="bg-clip-text text-3xl md:text-6xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/40">
              <TypewriterEffectSmooth words={words} />
            </div>
            <p className="text-sm md:text-lg tracking-wide font-light text-purple-300 mb-3 ">
              WELCOME TO MY PORTFOLIO
            </p>

            <p className="text-xl md:text-2xl px-[5vw] mt-10 md:mt-6 font-light text-gray-100 ">
              I transform ideas into reality through innovative web solutions.
              Let's build something amazing together!
            </p>

            <button
              className=" text-sm bg-white rounded-full w-fit px-5  hover:scale-110 transition-all duration-300 ease-in-out py-2 mt-16 sm:mt-10 font-normal text-black flex items-center justify-center z-50 pointer-events-auto"
              onClick={handleAboutScroll}
            >
              Explore portfolio
              <IoMdArrowDropdownCircle className="h-7 w-7 ml-2" />
            </button>

            {/* // button  */}
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}

export default Hero;
