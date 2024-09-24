import { Link } from "react-router-dom";
import React from "react";

const Homereact = () => {
  return (
    <>
      <div className="dark:bg-[#0f1013]  bg-[#7b787814] ">
        <div className="w-[100%] sm:w-[90%] lg:w-[80%] pb-[50px] px-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[50%]">
          <h1 className=" py-6 mx-[22vw] sm:mx-[30vw] border-b-2 border-b-[red] rounded-[10px]">
            <p className=" text-[1.2rem] mx-[5px] px-[5px] uppercase font-bold dark:text-white text-center">
              react projects
            </p>
          </h1>
          <div className="flex flex-wrap justify-center items-center py-6">
            <div
              className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-2 md:mx-4  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <h2 className="uppercase text-center text-sm sm:text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                password generater
              </h2>
             
              <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                This is a random password generator in which you can create
                complex passwords by setting the length and number.useState hook
                is used in this project
              </p>
              <div className="px-2 m-4 flex justify-center">
                <Link
                  to="Password-generater"
                  className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  preview
                </Link>
              </div>
            </div>
            <div
              className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-2 md:mx-4  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <h2 className="uppercase text-center text-sm sm:text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                Currency converter
              </h2>
              
              <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                This is a currency converter,with this we can convert any
                currency to our local currencyand. In this i have used API
                management,async function,fetch method etc.
              </p>
              <div className="px-2 m-4 flex justify-center">
                <Link
                  to="Currency-converter"
                  className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  preview
                </Link>
              </div>
            </div>
           <div
              className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-2 md:mx-4  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <h2 className="uppercase text-center text-sm sm:text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                Weather
              </h2>
            
              <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                This is a small weather project in which we can see the weather of the world. this project to basic info in weather.this project used in  3 APIs, Destracting etc.
              </p>
              <div className="px-2 m-4 flex justify-center">
                <Link
                  to="Whether"
                  className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  preview
                </Link>
              </div>
            </div>

            <div
              className="w-[95%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-2 md:mx-4  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <h2 className="uppercase text-center text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                Todo list
              </h2>
             
              <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                This is a todolist in which we manage many todos and save this data in the local storge so that there is on data loss on refreshing page.
              </p>
              <div className="px-2 m-4 flex justify-center">
                <Link
                  to="Todolist"
                  className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  preview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homereact;
