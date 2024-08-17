import React from 'react'

const Design = () => {
  return (
    <div>
      <div className="h-[100vh] flex gap-44 justify-center max-sm:flex-col max-sm:items-center max-sm:gap-20 ">
        <div className=" relative top-24 max-sm:top-0">
          <h1 className="text-[#4831D4] font-extrabold text-[50px]">Design</h1>
          <p className="text-[#3D155F] w-[37vw] max-sm:w-[80vw]">
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
          <div className="flex relative gap-2 top-44 left-52 max-sm:hidden">
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent"></div>
          </div>
        </div>
        <div className="relative top-80 max-sm:top-0 ">
          <div className="flex relative bottom-40 left-10 gap-2 max-sm:hidden">
            <div className="w-2 h-2 rounded-full bg-[#4831D4] bg-transparent border-solid border-2 border-[#4831D4] "></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent "></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent "></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent "></div>
            <div className="w-2 h-2 rounded-full bg-[#4831D4] border-solid border-2 border-[#4831D4] bg-transparent "></div>
          </div>
          <h1 className="text-[#4831D4] font-extrabold text-[50px]">
            Engineering
          </h1>
          <p className=" text-[#3D155F] w-[35vw] max-sm:w-[80vw]">
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Design
