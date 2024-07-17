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
    name: "Html 5",
  },
  {
    image: "/css.svg",
    name: "Css 3",
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
    image: "/python-logo.svg",
    name: "Python",
  },

  {
    image: "/react-logo.svg",
    name: "React.js",
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
    name: "Express.js",
  },
];

const pcItems2 = [
  {
    image: "/framer-logo.png",
    name: "Framer Motion",
  },
  {
    image: "/bootstrap-logo.svg",
    name: "Bootstrap",
  },
  {
    image: "/tailwind-logo.svg",
    name: "Tailwind css",
  },

  {
    image: "/firebase-logo.svg",
    name: "Firebase",
  },
  {
    image: "/mongo-logo.svg",
    name: "Mongo DB",
  },
  {
    image: "/graphql-logo.svg",
    name: "Graph QL",
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
    name: "Adobe XD",
  },
  {
    image: "/figma-logo.svg",
    name: "Figma",
  },
];

function InfiniteMovingCardsDemo() {
  const background = "bg-[#0a101a]";
  const description = `I specialize in crafting responsive, visually engaging web experiences using HTML, CSS, and JavaScript. My advanced proficiency extends to frameworks like React, Next.js, and GraphQL for efficient data fetching. With strong backend skills in Node.js and Firebase, I manage databases such as MongoDB and SQL. Additionally, I excel in version control with Git, containerization using Docker, and have adept UI/UX design skills with Adobe XD and Figma.`;
  return (
    <div className="bg-[#0a101a]  w-full h-fit pt-24 md:pt-36 pb-16 sm:pb-0 ">
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
        Skills Overview
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 10,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="w-full text-center text-white font-light tracking-wide text-sm md:text-lg   flex mb-12 lg:mb-16 justify-center mt-12 px-10 md:mt-12  md:px-16"
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
