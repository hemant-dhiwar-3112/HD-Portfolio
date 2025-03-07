import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoligth from "../image/logo1.png";
import logodark from "../image/logo2.png";
import { BiMoon, BiSun, BiX, BiMenu } from "react-icons/bi";

const Header = () => {
  const [ThemeMode, setThemeMode] = useState("dark");
  const [themeicon, setthemeicon] = useState(
    <BiSun className=" text-4xl  md:text-3xl p-[5px] dark:text-white text-center mx-auto" />
  );
  const [logo, setlogo] = useState(logoligth);
  const [icon, seticon] = useState(
    <BiMenu className=" text-4xl cursor-pointer md:text-3xl p-[5px] dark:text-white text-center mx-auto" />
  );
  
    useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(ThemeMode);
    }, [ThemeMode]);
  

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const chengeimg = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus == true) {
      setlogo(logodark);
      darkTheme();
      setthemeicon(
        <BiMoon className="text-4xl  md:text-3xl p-[5px] dark:text-white mx-auto text-center" />
      );
    } else if (darkModeStatus == false) {
      setlogo(logoligth);
      lightTheme();
      setthemeicon(
        <BiSun className=" text-4xl  md:text-3xl p-[5px] dark:text-white text-center mx-auto" />
      );
    }
  };

  const changeicon = () => {
    const box2 = document.getElementById("box2");
    if (box2.checked == true) {
      seticon(
        <BiX className=" text-4xl cursor-pointer  md:text-3xl p-[5px] dark:text-white text-center mx-auto" />
      );
      document
        .getElementById("menu")
        .setAttribute(
          "class",
          "fixed top-0 left-0 md:static md:flex bg-black md:bg-transparent"
        );
    } else if (box2.checked == false) {
      seticon(
        <BiMenu className=" text-4xl cursor-pointer  md:text-3xl p-[5px] dark:text-white text-center mx-auto" />
      );
      document
        .getElementById("menu")
        .setAttribute(
          "class",
          "fixed top-0 left-[-15rem]  md:static md:flex bg-black md:bg-transparent"
        );
    }
  };

  return (
    <>
      <div className="dark:bg-slate-950 bg-white sticky top-0 ">
        <header
          className=" "
          style={{
            boxShadow: "-21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3)",
          }}
        >
          <div className=" w-[100%] sm:w-[90%]  lg:w-[80%] lg:mx-[10%] sm:mx-[5%] mx-0  py-[15px] px-[15px]">
            <div className="flex justify-between mt-">
              <Link to="/">
                <img loading="lazy" src={logo} alt="" className=" w-32" />
              </Link>
              <div className="flex">
                <nav
                  id="menu"
                  className=" absolute md:static top-0 left-[-15rem] md:flex bg-black md:bg-transparent "
                  onClick={(e) => {
                    seticon(
                      <BiMenu className=" text-4xl cursor-pointer  md:text-3xl p-[5px] dark:text-white text-center mx-auto" />
                    );
                    document
                      .getElementById("menu")
                      .setAttribute(
                        "class",
                        "fixed top-0 left-[-15rem]  md:static md:flex bg-black md:bg-transparent"
                      );

                    document.getElementById("box2").checked = false;
                  }}
                >
                  <ul className=" md:flex px-14 py-8 text-white dark:text-white h-[100vh] md:px-0 md:py-0 md:h-0 md:text-black">
                    <li className="my-[10px] py-[10px] md:my-0 md:py-0">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `mx-[10px] px-[10px] uppercase md:text-xs font-medium  ${
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
                    <li className="my-[10px] py-[10px] md:my-0 md:py-0">
                      <NavLink
                        to="/Project"
                        className={({ isActive }) =>
                          `mx-[10px] px-[10px] uppercase md:text-xs font-medium ${
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
                    <li className="my-[10px] py-[10px] md:my-0 md:py-0">
                      <NavLink
                        to="/Skill"
                        className={({ isActive }) =>
                          `mx-[10px] px-[10px] uppercase md:text-xs font-medium ${
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
                    <li className="my-[10px] py-[10px] md:my-0 md:py-0">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          `mx-[10px] px-[10px] uppercase md:text-xs font-medium ${
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
                    <label
                      htmlFor="box1"
                      className="cursor-pointer mx-[10px] px-[10px]"
                    >
                      <input
                        type="checkbox"
                        id="box1"
                        className=" hidden"
                        onChange={chengeimg}
                      />
                      {themeicon}
                    </label>
                  </ul>
                </nav>

                <label
                  htmlFor="box2"
                  className="md:hidden cursor-pointe rounded-[50px] "
                >
                  <input
                    type="checkbox"
                    id="box2"
                    className="hidden"
                    onChange={changeicon}
                  />
                  {icon}
                </label>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
