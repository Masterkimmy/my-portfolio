import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const Stuff = () => {
  return (
    <div className="flex justify-around h-[100vh] items-center bg-[#F9F9F9] w-[100%]">
      <div className="flex gap-36 bg-white h-[80vh] w-[90vw] items-center justify-center max-sm:flex-col max-sm:gap-10 max-sm:h-[95vh] p-6">
        <div className="flex flex-col gap-12 pl-10">
          <div>
            <h1 className="text-[#4831D4] font-extrabold text-[50px] w-[23vw] max-sm:w-[65vw] max-sm:text-[40px]">
              I build & design stuff
            </h1>
            <h3 className="text-[#3D155F] font-normal w-[15vw] text-[20px] max-sm:w-[78vw]">
              Open source projects, web apps and experimentals.
            </h3>
          </div>
          <button className="text-[#4831D4] font-normal items-center border-2 border-blue-700 w-[17vw] h-[8vh] flex justify-center gap-4 max-sm:w-[67vw] max-sm:h-[6vh]">
           SEE MY WORK <HiArrowLongRight /> </button>
        </div>
        <div className="border-[#C8C1F2] border-2 h-[38vw] max-sm:hidden"></div>
        <div className="border-[#C8C1F2] border-2 w-[90vw] hidden"></div>
        <div className="flex flex-col gap-12 max-sm:pl-20">
          <div>
            <h1 className="text-[#4831D4] font-extrabold text-[50px] w-[23vw] max-sm:w-[88vw] max-sm:text-[40px]">
              I write, sometimes
            </h1>
            <h3 className="text-[#3D155F] font-normal w-[12vw] text-[20px] max-sm:w-[78vw]">
              About design, frontend dev, learning and life.
            </h3>
          </div>
          <button className="text-[#4831D4] font-normal items-center border-2 border-blue-700 w-[17vw] h-[8vh] flex justify-center gap-4 hover:text-white hover:bg-blue-700  transition-all duration-300 overflow-visible max-sm:h-[6vh] max-sm:w-[67vw]">
            READ MY ARTICLES <HiArrowLongRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stuff
