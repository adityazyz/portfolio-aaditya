"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";
import IconGrid from "./ui/IconGrid";
import { motion } from "framer-motion";

interface IconData {
  image: string;
  name: string;
}

const pcItems1: IconData[] = [
  {
    image: "/html-logo.svg",
    name: "Html5",
  },
  {
    image: "/css.svg",
    name: "Css3",
  },

  {
    image: "/javascript-logo.svg",
    name: "Javascript",
  },
  
  {
    image: "/typescript-logo.svg",
    name: "Typescript",
  },
 

  {
    image: "/react-logo.svg",
    name: "React",
  },
  {
    image: "/redux-logo.svg",
    name: "Redux",
  },
  {
    image: "/next-logo.svg",
    name: "Next.js",
  },

  {
    image: "/node-logo.svg",
    name: "Node.js",
  },
  {
    image: "/express-logo.svg",
    name: "Express",
  },
  {
    image: "/prisma.svg",
    name: "Prisma",
  },
  {
    image: "/zod.svg",
    name: "Zod",
  },
  {
    image: "/python-logo.svg",
    name: "Python",
  },
];

const pcItems2 = [
  {
    image: "/framer-logo.png",
    name: "Framer",
  },
  {
    image: "/wordpress.svg",
    name: "Wordpress",
  },
  {
    image: "/bootstrap-logo.svg",
    name: "Bootstrap",
  },
  {
    image: "/tailwind-logo.svg",
    name: "Tailwind",
  },

  {
    image: "/firebase-logo.svg",
    name: "Firebase",
  },
  {
    image: "/mongo-logo.svg",
    name: "MongoDB",
  },
  {
    image: "/graphql-logo.svg",
    name: "GraphQL",
  },
  {
    image: "/sql-logo.svg",
    name: "SQL",
  },
  {
    image: "/git-logo.svg",
    name: "Git",
  },
  {
    image: "/docker-logo.svg",
    name: "Docker",
  },
  {
    image: "/adobexd-logo.svg",
    name: "XD",
  },
  {
    image: "/figma-logo.svg",
    name: "Figma",
  },
];

function InfiniteMovingCardsDemo() {
  const description = `I specialize in crafting responsive, visually engaging web experiences using HTML, CSS, and JavaScript. My advanced proficiency extends to frameworks like React, Next.js, and GraphQL for efficient data fetching. With strong backend skills in Node.js and Firebase, I manage databases such as MongoDB and SQL. Additionally, I excel in version control with Git, containerization using Docker, and have adept UI/UX design skills with Adobe XD and Figma.`;
  return (
    <div className="bg-[#0a101a]  w-full h-fit pt-16 sm:pt-24 md:pt-36 pb-10 sm:pb-20 ">
      <motion.div
        className="w-full px-4 md:px-16 bg-gradient-to-r from-pink-300 to-indigo-600 bg-clip-text text-transparent font-semibold tracking-wide text-3xl sm:text-5xl md:text-6xl flex mb-0 sm:mb-20 md:mb-24 py-2 justify-center  "
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
        Skills Overview
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
        }}
        className="w-full px-8 md:px-16 text-left text-white font-light tracking-wider text-[15px] md:text-lg   flex mb-12 md:mb-20 justify-center mt-12 md:mt-12  "
      >
        {description}
      </motion.div>

      <div className="h-fit rounded-md flex flex-col antialiased bg-[#0a101a] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pb-16 pt-10">
        {/* // moving logo hidden in mobile screen */}
        <div className="hidden md:block">
          <InfiniteMovingCards
            items={pcItems1}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            className="my-6"
            items={pcItems2}
            direction="left"
            speed="slow"
          />
        </div>

        {/* // static logo hidden in large screen  */}
        <div className="md:hidden">
          <IconGrid items={[...pcItems1, ...pcItems2]} />
        </div>
      </div>
    </div>
  );
}
export default InfiniteMovingCardsDemo;
