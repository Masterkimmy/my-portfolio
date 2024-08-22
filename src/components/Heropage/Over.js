import React from 'react'
import Image from 'next/image';

const Over = () => {
  return (
    <div className="bg-[#4831D4] h-[100vh] px-24 py-5 grid grid-cols-2 gap-20 items-center max-sm:px-4 max-sm:grid  max-sm:grid-cols-1 max-sm:gap-12 max-sm:pl-8">
      <div>
        <h1 className="text-[#CCF381] text-[40px] font-extrabold w-[13vw] mb-4 chrismi max-sm:w-[70vw]">Over the years,</h1>
        <div className="text-white  space-y-4">
          <p className=" leading-[30px] chrismi max-sm:w-[82vw]">
            I am a passionate front-end developer with hands-on experience in
            creating dynamic, responsive, and visually appealing user
            interfaces. My technical toolkit includes modern technologies such
            as JavaScript, ReactJS, Next.js, TailwindCSS, and many more,
            enabling me to build applications that are both robust and elegant.
          </p>
          <p className=" leading-[30px] chrismi">
            I had the opportunity to intern at ToshConsult, a software
            development company, where I applied my front-end skills in a
            professional environment. This experience allowed me to further
            refine my ability to translate complex design concepts into
            functional, high-performance code.
          </p>
        </div>
      </div>
      <div className=" max-sm:w-60 ml-12">
        <img src="user.svg" />
      </div>
    </div>
  );
}

export default Over
