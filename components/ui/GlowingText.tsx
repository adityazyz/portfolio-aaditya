import React from 'react'

interface IGlowText {
    text : string
    colorClasses? : string
}

function GlowingText({text, colorClasses = "bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500"} : IGlowText) {
  return (
    <div className="flex h-fit  w-full md:justify-start items-center justify-center text-3xl md:text-5xl">
    <span className={`absolute mx-auto py-4 flex border w-fit blur-xl  ${colorClasses} bg-clip-text  box-content font-extrabold text-transparent text-center select-none`}>
    {text}
  </span>
    <h1
        className={`relative top-0 w-fit h-auto py-4 justify-center flex ${colorClasses} items-center  bg-clip-text  font-extrabold text-transparent text-center select-auto`}>
        {text}
    </h1>
</div>
  )
}

export default GlowingText