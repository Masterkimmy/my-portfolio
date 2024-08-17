import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="flex h-[100vh] relative max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:h-[130vh]  max-sm:overflow-hidden">
        <div className="bg-[#4831D4] justify-center p-32 gap-20 flex flex-col w-[65vw] max-sm:w-full max-sm:h-[100vh] max-sm:p-0 max-sm:items-center max-sm:gap-10 ">
          <div className="mt-44 max-sm:mt-28">
            <h1 className="text-[#CCF381] font-extrabold text-[50px] w-4 ">
              Frontend Developer.
            </h1>
            <p className="text-[#F6F4FD] w-[28vw] font-semibold max-sm:w-[66vw]">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
          </div>
          <div className="flex gap-9 max-sm:items-center max-sm:justify-center ">
            <p className="text-[#CCF381] w-[18vw] font-normal max-sm:w-[40vw]">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
            <p className="text-[#CCF381] w-[20vw] font-normal max-sm:w-[40vw]  ">
              Proven experience building successful products for clients across
              several countries.
            </p>
          </div>
        </div>
        <div className="absolute top-[130px] right-[300px]">
          <div className="flex gap-1 relative right-[4vw] flex-col ">
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-white"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-white"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-white"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-white"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-white"></div>
          </div>
          <div className="relative z-40 h-[300px] w-[320px]  border border-white max-sm:top-[125vw] max-sm:left-[60vw] max-sm:h-[250px] max-sm:w-[240px]">
            <img src="/Profile.JPG"className="h-[300px] w-[320px] absolute z-50 right-6 bottom-6 max-sm:h-[250px]"/>
          </div>
          <div className="bottom-7 flex flex-col gap-1  relative left-[25vw]">
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-[#4831D4]"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-[#4831D4]"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-[#4831D4]"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-[#4831D4]"></div>
            <div className="h-2 w-2 rounded-full bg-transparent border-solid border-2 border-[#4831D4]"></div>
          </div>
        </div>
        <div className="bg-[#CCF381] w-[35vw] max-sm:h-[60vh] max-sm:w-full "></div>
      </div>
    </div>
  );
}

export default Hero
