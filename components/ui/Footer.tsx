import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import {type INavItems} from "../../types/NavItems"
import {type SocialData} from "../../types/SocialData"
import { motion } from "framer-motion";

function Footer({NavItems} : {NavItems : INavItems[]}) { 

  const iconClass = "h-6 w-6 md:h-7 ml-2 md:w-7 mr-5 text-gray-200 hover:text-white hover:scale-110 transition-all duration-200 ease-in-out text-sm md:text-lg"


  const socialData : SocialData[]  = [
    {
      name : "linkedin" ,
      icon : <FaLinkedin className={iconClass} />,
      link : "https://www.linkedin.com/in/aaditya-dagar-7431222a7/"
    },
    {
      name : "github",
      icon : <FaGithub className={iconClass} />,
      link : "https://github.com/adityazyz"
    },
    {
      name : "x",
      icon : <FaXTwitter className={iconClass} />,
      link : "https://x.com/adityazyzz"
    }
  ]

  return (
    <motion.footer className="footer h-fit bg-black bg-opacity-5 backdrop-blur pb-24 sm:pb-10 footer-center bg-base-200  text-base-content  p-10"
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 2,
      ease: "easeInOut",
    }}
    >
  <nav className="flex flex-row justify-center ">
  {NavItems.map((navItem: INavItems, idx: number) => {
    if(navItem.name === "Contact"){ // avoiding contact link
      return null
    }else {
      return (
        <button
          key={idx}
          className={`text-sm mx-4 font-medium relative border-white/[0.2] text-gray-300 hover:text-white px-0 py-2 rounded-full group hover:scale-110 transition-all duration-300 ease-in-out ${(navItem.name === "Home") ? "hidden sm:block " : null}`}
          onClick={()=>{
              navItem.func();
          }}
        >
          <span>{navItem.name}</span>
        </button>
      )
    }
  }
        )}
    
  </nav>
  <nav>
    {/* header  */}
    <div className="flex pr-1 justify-center items-center h-fit pt-4 pb-8  flex-wrap px-6 py-2 z-50 text-white  sm:mt-0">
            {socialData.map((item: SocialData) : React.ReactNode=>{
              return <Link key={item.name} href={item.link}>
              {item.icon}
            </Link>
            })}
          </div>
  </nav>
  <div className='flex text-sm justify-center'>
    <p>Powered by Aaditya Dagar</p>
  </div>
</motion.footer>
  )
}

export default Footer