import React from 'react'
import { motion } from "framer-motion";

interface myItems  {
        name : string
    image : string
    }



function IconGrid({items} : {items : myItems[]} ) {
  return (
    <>
    <section className="py-base container px-6 flex justify-center">
    <motion.div
    initial = {{
      x: 50,
       opacity: 0
    }}
    whileInView={{ x: 0,
      opacity: 1}}

      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    
    className="grid gap-8 grid-cols-3 md:gap-y-16 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-5">

    {items.map((item : myItems): React.ReactNode=>{
        return <div key={item.name} className="relative group cursor-pointer">
            <div
                className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-purple-700  rounded-lg blur opacity-100">
            </div>
            <div
                className="relative  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2">
                <blockquote  
       
       className='bg-slate-100 py-3 px-3 rounded-lg w-[80px] h-[85px] hover:scale-110 transition-all duration-200 ease-in-out '>
       <div    
         id="my-icon"
         aria-hidden="true"
         className="user-select-none  font-bold -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]  flex items-center justify-center"
         style={{
           top: "50%",
           left: "50%",
           transform: "translate(-50%, -50%)",
         }}
       ></div>
       <div className="flex justify-center">
         <img className="h-8 w-8 items-center" src={item.image} />
       </div>
       <div className="relative z-20 mt-4 flex  justify-center">
         <span className="text-xs md:text-sm md:font-bold leading-[1.6] text-gray-800 ">
           {item.name}
         </span>
       </div>
     </blockquote>
                </div>
            </div>
        </div>
        
       
    })}

    </motion.div>
</section>
    </>
  )
}

export default IconGrid