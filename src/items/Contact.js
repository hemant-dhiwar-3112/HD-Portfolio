import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="bg-[#7b787814] dark:bg-[#0f1013] h-full sm:h-[90vh]">
      <div className="w-[100%] sm:w-[90%]  lg:w-[80%]  pt-[9px] px-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[100%]">
        <h1 className=" my-6 mx-[22vw] sm:mx-[30vw] border-b-2 border-b-[red] rounded-[10px]">
          <p className=" text-[1.2rem] mx-[5px] px-[5px] uppercase font-bold dark:text-white text-center">
            Contact us
          </p>
        </h1>

        <div className="sm:flex justify-center items-center ">
          <div className=" sm:w-[600px] md:w-[65%] py-8 px-5">
            <form className="flex flex-col">
              <div className="md:flex">
                <input
                  type="text"
                  className="in1 px-6 w-[100%] my-4 md:mx-4 py-2 rounded-lg border-2 focus:outline-none "
                  placeholder="Enter Full Name"
                />
                <input
                  type="email"
                  className="in1 border-2 px-6 w-[100%] my-4 md:mx-4 py-2 rounded-lg"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="md:flex">
                <input
                  type="number"
                  className="in1 border-2 px-6 w-[100%] my-4 md:mx-4 py-2 rounded-lg"
                  placeholder="Enter Phone Number"
                />
                <input
                  type="text"
                  className="in1 border-2 px-6 w-[100%] my-4 md:mx-4 py-2 rounded-lg"
                  placeholder="Enter Subject"
                />
              </div>
              <textarea
                className=" in1 border-2 px-6 my-4 md:mx-4 py-2 w-[100%] md:w-[94%] h-40 rounded-lg"
                placeholder="Enter Your Message"
              ></textarea>
              <button
                // onClick={send}
                className=" bg-sky-600 hover:bg-sky-800 p-2 text-white w-40 flex self-center rounded-3xl justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
