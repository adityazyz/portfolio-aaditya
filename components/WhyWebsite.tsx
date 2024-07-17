import React from "react";
import VideoBackground from "./ui/VideoBackground";
import { motion } from "framer-motion";

function WhyWebsite() {
  const content = (
    <div className="relative z-10 flex flex-col items-center justify-center h-fit px-6 md:px-32 text-center py-16 md:py-28">
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
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center mb-3 md:mb-16 text-2xl md:text-4xl"
      >
        <div className="text-white  md:text-5xl font-bold my-1 sm:my-2">
          Why a website is{" "}
        </div>
        <div className="  font-bold px-3 w-fit text-black bg-yellow-300 rounded-sm ml-3 py-1 md:py-2  ">
          Important?
        </div>
      </motion.div>
      <motion.h2
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2.5,
        }}
        className="text-white mt-10  mb-6  text-lg md:text-xl"
      >
        {`In today's digital age, a website is essential for your brand, providing a 24/7 online presence, building credibility, reaching a global audience, and serving as a platform to showcase your work, giving you a competitive advantage. It facilitates easy communication and helps build a strong brand identity. `}
      </motion.h2>
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
          duration: 2.5,
        }}
        className="text-gray-100 text-lg md:text-xl font-semibold mt-4"
      >
        Ready to elevate your brand? Let me create a stunning website for you!
      </motion.div>
    </div>
  );
  return (
    <div className="py-[10vh] sm:py-[20vh] bg-[#000000]">
      <VideoBackground content={content} video={"fast-video.mov"} />
    </div>
  );
}

export default WhyWebsite;
