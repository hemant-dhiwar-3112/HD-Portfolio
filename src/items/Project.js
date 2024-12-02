import React from "react";
import ecomm from "../image/ecomm.png";
import react from "../image/react.png";
import movie from "../image/movie.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="dark:bg-[#0f1013]  bg-[#7b787814]">
        <div className="w-[100%] sm:w-[90%] lg:w-[80%]  py-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[50%]">
          <h1 className=" my-6 mx-[22vw] sm:mx-[30vw] border-b-2 border-b-[red] rounded-[10px]">
            <p className=" text-[1.2rem] mx-[5px] px-[5px] uppercase font-bold dark:text-white text-center">
              projects
            </p>
          </h1>
          <div className="flex flex-wrap justify-center items-center py-10">
            <div
              className="w-[85%] sm:w-[60%] lg:w-[37%] mx-2 md:mx-6  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <img src={ecomm} alt="" className="rounded-3xl w-[90%] h-[60%]  m-auto" />
              <h2 className="uppercase text-center text-sm sm:text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                E-commerce webside
                 <samp className="m-0 text-sm rounded-3xl px-2 py-[2px] mx-1 bg-[#008000ca] text-[#ffffffe2]">
                  live
                </samp>
              </h2>
              <div className=" text-sm font-medium m-3 flex flex-wrap dark:text-[#64FFDA]">
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">HTML</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">CSS</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">JAVASCRIPT</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">PHP</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">JQURY</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">BOOTSTRAP</p>
              </div>
              <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                This is a small ecommerce website which is built with these
                technologies, this website works responsively. You can see
                shopping demo on the side. this webside maintenance data in
                mysql database
              </p>
              <div className="px-2 m-4 flex justify-between">
                <a
                  href=""
                  // target="_balnk"
                  className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  Preview
                </a>
                <a
                  href="https://github.com/hemant-dhiwar-3112/e-comm"
                  target="_blank"
                  className="  dark:text-[#64FFDA] text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  Code
                </a>
              </div>
            </div>
            <div
              className="w-[85%] sm:w-[60%] lg:w-[38%]  mx-2 md:mx-4  bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <img src={movie} alt="" className="rounded-3xl w-[100%]  m-auto" />
              <h2 className="uppercase text-center text-sm sm:text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                Movie Ticket Booking
                <samp className="m-0 text-sm  rounded-3xl px-2 py-[2px] mx-1 bg-[#008000ca] text-[#ffffffe2]">
                  live
                </samp>
              </h2>
              <div className=" text-sm font-medium m-3 flex flex-wrap dark:text-[#64FFDA]">
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">HTML</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">CSS</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">JAVASCRIPT</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">PHP</p>
              </div>
              <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                This is a small movie ticket site made with these technologies
                this website not works responsively. In this we can book tickets
                and watch movie tailers. this webside maintenance data in mysql
                database
              </p>
              <div className="px-2 m-4 flex justify-between">
                <a
                  href=""
                  // target="_balnk"
                  className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  Preview
                </a>
                <a
                  href="https://github.com/hemant-dhiwar-3112/hd-movie-ticket"
                  target="_balnk"
                  className="  dark:text-[#64FFDA] text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  Code
                </a>
              </div>
            </div>
            <div
              className="w-[85%] sm:w-[60%] lg:w-[38%]  mx-2 md:mx-6 bg-[#61575742] py-8 my-10 px-5 rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <img src={react} alt="" className="rounded-3xl w-[90%]  m-auto" />
              <h2 className="uppercase text-center text-sm sm:text-[16px] font-bold my-3 dark:text-[#64FFDA]">
                react projects
                <samp className="m-0 text-sm  rounded-3xl px-2 py-[2px] mx-1 bg-[#008000ca] text-[#ffffffe2]">live
                </samp>
              </h2>
              <div className=" text-sm font-medium m-3 flex flex-wrap dark:text-[#64FFDA]">
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">REACT</p>
                <p className="px-2 m-2 rounded-xl bg-[#9c9c9cc2]">TAILWIND</p>
              </div>
              <p className="dark:text-[#868e96] px-2 m-2 text-justify">
                In this, there are small projects of all React js which I have
                made while practices, due to which my React has become stronger.
              </p>
              <div className="px-2 m-4 flex justify-center">
                <Link
                  to="React-Project"
                  className="  dark:text-[#64FFDA]  text-white bg-[#9c9c9cc2] px-4 py-3 rounded-3xl hover:bg-[#585757c2]"
                >
                  view projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
