"use client";
import React, { useState } from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [send, setSend] = useState("");

    async function submitForm(e){
        e.preventDefault()
         if (!name || !email || !message) {
           return toast.warn("pls fill all credentials");
         }
        const baseUrl = "https://forms-io.onrender.com/submit-form/edade92c-c996-4c9c-b8a2-0b652f3cda9f";

       
        setSend(true)
        try {
            const response = await fetch(baseUrl,{
                method:'POST',
                headers: { "Content-type": "apllication/json" },
                body: JSON.stringify({name, email, message})
            })
            .then((res) =>res.json())
            if(response){
                   console.log(response);
                toast.success("the form was submitted sucessfully")
                setSend(false)
             
                
            }
        } catch (error) {
            // console.log(error)
            toast.error("unable to send form, please check your internet connection")
        }
    }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-16 p-8 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#4831D4] font-extrabold text-[50px] max-sm:text-[40px] max-sm:pl-7 chrismi">
          Send me a message!
        </h1>
        <h3 className="text-[#3D155F] font-semibold w-[23vw] text-center max-sm:w-[73vw] max-sm:text-start max-sm:pl-2 chrismi ">
          Got a question or proposal, or just want to say hello? Go ahead.
        </h3>
      </div>
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-16 items-center max-sm:gap-8 max-sm:pr-6"
      >
        <div className="flex gap-[10vw] max-sm:flex-col ">
          <div className="flex  flex-col gap-2 ">
            <h3 className="text-[#D5ADCC] font-light chrismi">your Name</h3>
            <input
              //   required
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="font-light outline-none"
            />
            <div className="w-[25vw] h-[2px] bg-[#9B87AC] max-sm:w-[65vw]"></div>
          </div>
          <div className="flex  flex-col gap-2">
            <h3 className="text-[#D5ADCC] font-light chrismi">Email Address</h3>
            <input
              //   required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
              className="font-light outline-none "
            />
            <div className="w-[25vw] h-[2px] bg-[#9B87AC] max-sm:w-[65vw]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#D5ADCC] font-light chrismi">your message</h3>
          <textarea
            // required
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none border-none w-[47vw] font-light outline-none max-sm:w-[50vw]"
            typeof=""
            placeholder="Hi i think we need a design system for our produt at company x. How soon can you hop on to discuss this"
          />
          <div className="w-[60vw] h-[2px] bg-[#9B87AC] max-sm:w-[65vw]"></div>
        </div>
        <div className="border-[2px] border-blue-700 w-[15vw] flex items-center justify-center max-sm:w-[50vw]">
          <button className=" w-[0vw]  hover:w-[15vw]  transition-all duration-300 overflow-visible flex items-center justify-center gap-2 bg-blue-700 max-sm:hover:w-[50vw]">
            <div className="flex items-center justify-center text-blue-700 p-[10px] hover:text-white gap-3 ">
              {send ? (
                "SENDING ..."
              ) : (
                <div className="flex items-center gap-6 chrismi">SHOOT <HiArrowLongRight /></div> )}<ToastContainer /></div>
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact
