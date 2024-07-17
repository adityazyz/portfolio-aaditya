"use client";
import React from "react";
import { GlareCard } from "./ui/GlareCard";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const myArr = [
    {
      link: "https://rare-consultancy.vercel.app/",
      image: "/rare.jpeg",
      title: "Rare Consultancy",
      description:
        "Connect talent with top recruiters seamlessly on this innovative platform, offering personalized job matches, career advice, and a streamlined hiring process for employers and candidates alike.",
    },
    {
      link: "https://www.sakshitravels.in/",
      image: "/sakshi.jpeg",
      title: "Sakshi Travels",
      description:
        "Discover and book diverse tour packages effortlessly on this travel agency website, offering customized trips, seamless booking, and endless destinations for your perfect adventure.",
    },

    {
      link: "https://www.parasmanieducation.com/",
      image: "/parasmani.jpg",
      title: "Parasmani Education",
      description:
        "Discover top-notch tech courses for everyone on Parasmani Education, offering expertly designed programs, personalized learning paths, and a seamless educational experience to advance your skills.",
    },
  ];

  const descriptionTop =
    "I have worked on many live projects, like the ones displayed below. In collaboration with cross-functional teams, I demonstrated effective teamwork, communication, and problem-solving skills in a dynamic development environment.";
  const descriptionBottom =
    "Additionally, I have built several MERN stack and Next.js projects, including an e-commerce website, a news website, quiz game show software, and an appointment booking website.";

  return (
    <div className="bg-black  w-full h-fit py-20 md:py-44 pb-20 md:pb-32">
      <div>
        <motion.div
          className="w-full bg-gradient-to-r from-pink-300 to-indigo-600 bg-clip-text text-transparent font-semibold tracking-wide text-3xl sm:text-5xl md:text-6xl flex mb-0 md:mb-20 py-2 justify-center px-6 "
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
          }}
        >
          My Experience
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 2.5,
          }}
          viewport={{ once: true }}
          className="w-full text-center text-white font-light tracking-wide text-sm md:text-lg flex mb-24 justify-center mt-12 md:mt-24 px-6 md:px-16"
        >
          {descriptionTop}
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 mt-5 mx-auto"
          >
            {myArr.map((item, index) => {
              return (
                <Link href={item.link} target="_blank" key={`glare-${index}`}>
                  <GlareCard>
                    <div className="bg-white rounded-lg  ">
                      <div className="relative overflow-hidden">
                        <img
                          className="object-cover w-full h-[17vh] sm:h-[29vh] "
                          src={item.image}
                          alt="Product"
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-white text-gray-900 py-2 px-6 rounded-full  text-xs sm:text-sm  font-bold hover:bg-gray-300 ">
                            View Website
                          </button>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-4 px-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 px-4">
                        {item.description}
                      </p>
                    </div>
                  </GlareCard>
                </Link>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
          className="w-full text-center text-white font-light tracking-wide  text-sm md:text-lg flex mb-16 justify-center mt-4 md:mt-20 px-6 md:px-16"
        >
          {descriptionBottom}
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
