import React from 'react'

interface myItems  {
        name : string
    image : string
    }


function IconGrid({items} : {items : myItems[]} ) {
  return (
    <>
    <section className="py-base container px-6 flex justify-center">
    <div className="grid gap-8 grid-cols-2 md:gap-y-16 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">

    {items.map((item : myItems): React.ReactNode=>{
        return <blockquote key={item.name} className='bg-slate-100 py-3 px-3 rounded-lg w-[145px] hover:scale-110 transition-all duration-200 ease-in-out'>
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
          <img className="h-12 w-12 items-center" src={item.image} />
        </div>
        <div className="relative z-20 mt-6 flex  justify-center">
          <span className="text-xs md:text-sm md:font-bold leading-[1.6] text-gray-800 ">
            {item.name}
          </span>
        </div>
      </blockquote>
    })}

    </div>
</section>
    </>
  )
}

export default IconGrid