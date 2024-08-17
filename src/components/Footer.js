'use client'
import React,{useState} from 'react'


const Footer = () => {
    const [date] = useState(new Date().getFullYear())
  return (
    <div>
      <div className="bg-[#3D155F] h-[100vh] flex flex-col  justify-center gap-20 p-32">
        <div className="flex gap-20">
          <div className="flex gap-3 flex-col cursor-pointer">
            <h3 className="text-[#7A6398] font-bold">Say Hello</h3>
            <h3 className="text-[#B3D175] font-bold">
              <a href="mailto:hakeemkolawole62@gmail.com">hello@Kimmy.dev</a>{" "}
            </h3>
            <h3 className="text-[#B3D175] font-bold">
              <a href="https://t.me/arrabenjamin">t.me/kimmy</a>
            </h3>
          </div>
          <div className="flex gap-3 flex-col mt-8 cursor-pointer">
            <h3 className="text-[#B3D175] font-bold">My Work</h3>
            <h3 className="text-[#B3D175] font-bold">My Shelf</h3>
            <h3 className="text-[#B3D175] font-bold">My Résumé</h3>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#B3D175]"></div>
        <div className="flex justify-between">
          <h1 className="text-[#B3D175] font-bold">© Master kimmy {date}</h1>
          <div className="flex gap-4 cursor-pointer">
            <h1 className="text-[#B3D175] font-bold">
              <a href="https://twitter.com/@kolawole60867">TW</a>
            </h1>
            <h1 className="font-bold text-primary">
              C<a href="https://github.com/Masterkimmy">GH</a>{" "}
            </h1>
            <h1 className="text-primary font-bold">
              <a href="https://www.linkedin.com/in/abdulkareem-abdulhakeem-025282306/">
                LN
              </a>
            </h1>
            <h1 className="text-primary font-bold">
              <a href="https://youtube.com/@hakeemkolawole7459"></a>YT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
