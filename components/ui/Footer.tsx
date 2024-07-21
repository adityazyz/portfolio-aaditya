import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { type INavItems } from "../../types/NavItems";
import { type SocialData } from "../../types/SocialData";
import { motion } from "framer-motion";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function Footer({ NavItems }: { NavItems: INavItems[] }) {
  const MobileNumber = "+91 844 833 5264";
  const Email = "tuskersadi@gmail.com";
  const iconClass =
    "h-6 w-6 md:h-7 ml-2 md:w-7 mr-5 text-gray-200 hover:text-white hover:scale-110 transition-all duration-200 ease-in-out text-sm md:text-lg";

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
    <footer
      className="footer pt-2 sm:pt-0 h-fit bg-black  pb-16 sm:pb-10 footer-center bg-base-200  text-base-content  px-10" 
      
    >
     <motion.div
     initial={{ opacity: 0.0, y: 40 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{
       duration: 2,
       ease: "easeInOut",
     }}
     >
     <nav className="flex flex-row justify-center ">
        {NavItems.map((navItem: INavItems, idx: number) => {
          if (navItem.name === "Contact") {
            // avoiding contact link
            return null;
          } else {
            return (
              <button
                key={idx}
                className={`text-sm mx-4 font-medium relative border-white/[0.2] text-gray-300 hover:text-white px-0 py-2 rounded-full group hover:scale-110 transition-all duration-300 ease-in-out ${
                  navItem.name === "Home" ? "hidden sm:block " : null
                }`}
                onClick={() => {
                  navItem.func();
                }}
              >
                <span className=" underline">{navItem.name}</span>
              </button>
            );
          }
        })}
      </nav>

      <div className="flex pr-1 justify-center items-center h-fit pt-4 pb-8  flex-wrap px-6 py-2 z-50 text-white  sm:mt-0">
          {socialData.map((item: SocialData): React.ReactNode => {
            return (
              <Link key={item.name} href={item.link}>
                {item.icon}
              </Link>
            );
          })}
        </div>
      

        <div className="flex text-gray-100 text-sm justify-center mb-4 sm:mb-3">
        <p>Powered by Aaditya Dagar</p>
      </div>

      <div className="flex text-gray-100  text-sm justify-center items-center flex-col sm:flex-row">
        <div className="flex  items-center mb-1 sm:mb-0 sm:mr-5 justify-center">
        <IoIosCall/>
        <p className="ml-2">{MobileNumber}</p>
        </div>
        <div className="flex items-center justify-center">
        <MdOutlineMarkEmailUnread/>
        <p className="ml-2">{Email}</p>
        </div>
      </div>

     </motion.div>
      
    </footer>
  );
}

export default Footer;
