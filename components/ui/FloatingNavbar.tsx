"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import { usePathname } from "next/navigation";
import {type INavItems} from "../../types/NavItems"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: INavItems[];
  className?: string;
}) => {

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 px-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: INavItems, idx: number) => (
          <button
            key={idx}
            className={`text-sm font-medium relative border-white/[0.2] text-gray-300 hover:text-white px-0 py-2 rounded-full group hover:scale-110 transition-all duration-300 ease-in-out ${(navItem.name === "Home") ? "hidden sm:block " : null}`}
            onClick={()=>{
                navItem.func();
            }}
          >
            <span>{navItem.name}</span>
            <span className="absolute inset-x-0 w-2/3 mx-auto -bottom-px h-px group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-blue-500 group-hover:to-transparent mb-1" />

          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
