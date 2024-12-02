import React from "react";
import me from "../image/me.png";
// import me2 from "../image/me2.png";
import pdf from "../image/Hemant Dhiwar.pdf";
import logo from "../image/logo2.png";
import { NavLink } from "react-router-dom";
import { BiMap, BiPhone, BiEnvelope, BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare  } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="dark:bg-[#0f1013] bg-[#7b787814]">
        <div className="w-[100%] sm:w-[90%]  lg:w-[80%] py-[15px] px-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[50%]">
          <div className="sm:flex justify-between items-center ">
            <div className=" sm:w-[600px] md:w-[600px] dark:text-white py-8 px-5">
              <h6 className=" uppercase font-normal">this is me</h6>
              <h1 className=" uppercase text-[4vw] xl:text-[3vw] my-5">
                hemant dhiwar
              </h1>
              <p className="text-justify mb-8 sm:w-[50vw]">
                my aspiration is to find a platform where I can learn new skills
                and enhance my abilities and create something wonderful and
                useful for the world
              </p>

              <a
                // href={pdf}
                // download="resume"
                className="bg-[#6d94e8f5] px-[14px] py-[12px] rounded-[15px] text-white my-10 hover:bg-[#0d52e6f5]"
              >
                Download CV
              </a>
            </div>
            <div className=" flex sm:justify-end justify-center pb-8 sm:py-10">
              <img
                loading="lazy"
                src={me}
                alt=""
                className=" w-52  sm:flex  sm:w-[60%] rounded-[30%]"
              />
            </div>
          </div>

          <h1 className=" my-6 mx-[22vw] sm:mx-[30vw] border-b-2 border-b-[red] rounded-[10px]">
            <p className=" text-2xl mx-[5px] px-[5px] uppercase font-bold dark:text-white text-center">
              About me
            </p>
          </h1>
          <div className="sm:flex justify-center items-center ">
            {/* <div className=" flex sm:justify-start justify-center py-10">
              <img
                loading="lazy"
                // src={me2}
                alt=""
                className="w-52 sm:w-[60%] rounded-[30%]"
              />
            </div> */}
            <div className=" sm:w-[600px] md:w-[600px] dark:text-white py-4 px-5">
              <p className="text-justify w-[100%]">
                I am <b>Front-End Web Developer</b> and I have created a few
                project use of front end and back end technology. While making
                the project, I learned many things like solving problems,
                completing the work on time etc. I don't know English a little
                but I know Hindi well. I thought that I should make something
                which can make work easier.and i have created a few project use
                of front end and back end techmology. While making the project,
                I learned many things like solving problems, completing the work
                on time etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#343434] pt-8 md:pt-[50px] text-white">
        <div className="w-[100%] sm:w-[90%] lg:w-[80%] lg:mx-[10%] sm:mx-[5%] m-auto flex-col sm:flex-row flex justify-center  py-[15px] px-[15px]">
          <div className="sm:w-[44%] md:w-[37%] pb-4 flex self-center flex-col">
            <img loading="lazy" src={logo} alt="" className="w-[150px]" />
            <div className="m-2  flex items-center">
            <div className="flex items-center text-sm py-1">
                <BiMap size={18} />
                <samp className="mx-2 font-normal">Birgown Raipur (C.G.) India</samp>{" "}
              </div>             
            </div>
            <div className="m-2 flex items-center">
            <div className="flex items-center text-sm py-1">
                <BiPhone size={18} />
                <samp className="mx-2 font-normal">62677 75295</samp>{" "}
              </div>
            </div>
            <div className="m-2  flex items-center">
              <div className="flex items-center text-sm py-1">
                <BiEnvelope size={18} />
                <samp className="mx-2 font-normal">Hemantdhiwar8085@gmail.com</samp>{" "}
              </div>
            </div>
          </div>
          <nav className="sm:w-[31%] md:w-[33.3%] text-center border-t-2 sm:border-none py-8 sm:p-0">
            <h3 className=" text-2xl mb-4 font-semibold">Quick Links</h3>
            <li className="p-[7px] list-none">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `mx-[10px] px-[10px] uppercase text-xs font-medium ${
                    isActive
                      ? "border-b-2 border-b-[red] text-[#0ea5e9] rounded-[5px]"
                      : ""
                  }
                           hover:border-b-2  hover:text-[#0ea5e9] hover:rounded-[5px] hover:border-b-[red]`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="p-[7px] list-none">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `mx-[10px] px-[10px] uppercase text-xs font-medium ${
                    isActive
                      ? "border-b-2 border-b-[red] text-[#0ea5e9] rounded-[5px]"
                      : ""
                  }
                           hover:border-b-2  hover:text-[#0ea5e9] hover:rounded-[5px] hover:border-b-[red]`
                }
              >
                Project
              </NavLink>
            </li>
            <li className="p-[7px] list-none">
              <NavLink
                to="/skill"
                className={({ isActive }) =>
                  `mx-[10px] px-[10px] uppercase text-xs font-medium ${
                    isActive
                      ? "border-b-2 border-b-[red] text-[#0ea5e9] rounded-[5px]"
                      : ""
                  }
                           hover:border-b-2  hover:text-[#0ea5e9] hover:rounded-[5px] hover:border-b-[red]`
                }
              >
                skill
              </NavLink>
            </li>
            <li className="p-[7px] list-none">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `mx-[10px] px-[10px] uppercase text-xs font-medium ${
                    isActive
                      ? "border-b-2 border-b-[red] text-[#0ea5e9] rounded-[5px]"
                      : ""
                  }
                           hover:border-b-2  hover:text-[#0ea5e9] hover:rounded-[5px] hover:border-b-[red]`
                }
              >
                contact
              </NavLink>
            </li>
          </nav>
          <div className="sm:w-[31%] md:w-[33.3%] text-center border-t-2 sm:border-none py-8 sm:p-0">
            <h3 className=" text-2xl mb-4 font-semibold">Follow US</h3>
            <div className="flex justify-center">
            <a href="https://github.com/hemant-dhiwar-3112" target="_blank">
              <BiLogoGithub className=" text-6xl p-2 hover:text-[#f18930]" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemant-dhiwar-3782ba272/"
              target="_blank"
            >
              <BiLogoLinkedinSquare className=" text-6xl p-2 hover:text-[#f18930]" />
            </a>
            <a href="https://www.facebook.com/hemantdhiwar6" target="_blank">
              <BiLogoFacebookCircle  className="text-6xl p-2 hover:text-[#f18930]" />
            </a>
          </div></div>
        </div>
      </div>
      <div className="bg-[#f18930] py-3">
        <p className=" text-xs sm:text-sm text-center">
          Copyright @2024 ai right reserved by Web techknowledge
        </p>
      </div>
    </>
  );
};

export default Home;
