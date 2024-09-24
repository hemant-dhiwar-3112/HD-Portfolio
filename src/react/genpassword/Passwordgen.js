import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Passwordgen = () => {
  // const [val, setval] = useState("");
  const [len, setlen] = useState(8);
  const [numallowed, setnumallwoed] = useState(false);
  const [charallowed, setcharallwoed] = useState(false);
  const [val, setval] = useState("");

  const genpassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstwvxuyzABCDEFGHIJKLMNOPQRSUTVWVXYZ";
    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*(){}[]?`~";

    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setval(pass);
  }, [len, charallowed, numallowed]);

  useEffect(() => {
    genpassword();
  }, [len, charallowed, numallowed, genpassword]);

  const passval = useRef("");

  const passelecte = useCallback(() => {
    passval.current?.select();
    passval.current?.setSelectionRange(0, 99);
    navigator.clipboard.writeText(val);
  }, [val]);

  return (
    <div className="dark:bg-[#0f1013] bg-[#7b787814] h-screen sm:h-[90vh]">
      <div className="w-[100%] sm:w-[90%] lg:w-[80%]  px-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[50%]">
        <div className=" flex flex-wrap justify-center items-center ">
          <div
            className="w-[95%] sm:w-[80%] mx-2 md:mx-4 bg-slate-600  pb-8 my-10 sm:my-20 px-5 rounded-3xl"
            style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
          >
            <h2 className="uppercase text-center text-white text-[16px]  my-5 dark:text-[#64FFDA]">
              password generater
            </h2>
            <div className=" sm:flex justify-center">
              <input
                type="text"
                className=" w-[70%] p-3 mx-auto sm:m-0 outline-none flex self-center rounded-xl sm:rounded-r-none"
                readOnly
                value={val}
                ref={passval}
              />
              <button
                onClick={passelecte}
                className=" mx-auto flex sm:flex-none  self-center py-3 rounded-xl sm:rounded-l-none text-white bg-blue-500 px-[32%] sm:px-4 my-8  sm:m-0 sm:ml-[-10px] text-center"
              >
                Copy
              </button>
            </div>
            <div className="md:flex flex-wrap items-center  justify-start mt-8 mx-6 md:mx-16 text-sky-400">
              <div className="lg:w-[40%]">
                <input
                  type="range"
                  className="mr-2 w-[43%] md:w-[47%] sm:w-[30%]"
                  min="8"
                  max="50"
                  Value={len}
                  id="range"
                  onChange={(e) => {
                    setlen(e.target.value);
                  }}
                />
                <label htmlFor="range" className="text-xl md:mr-8 lg:mr-0">
                  Lenght {len}
                </label>
              </div>
              <div className="md:w-[50%] lg:w-[24%]">
                <input
                  type="checkbox"
                  defaultChecked={charallowed}
                  id="num"
                  className="mx-1"
                  onChange={() => {
                    setnumallwoed((prev) => !prev);
                  }}
                />
                <label htmlFor="num" className="text-xl mr-8 md:mr-0">
                  Number
                </label>
              </div>
              <div className="md:w-[50%] lg:w-[35%]">
                <input
                  type="checkbox"
                  defaultChecked={charallowed}
                  id="char"
                  className="mx-1"
                  onChange={() => {
                    setcharallwoed((prev) => !prev);
                  }}
                />
                <label htmlFor="char" className="text-xl mr-8 md:mr-0">
                  Characters
                </label>
              </div>
            </div>
          </div>

          <Link
            to="/project/react-project"
            className="text-white mt-10 p-3 bg-sky-600 hover:bg-sky-800 rounded-2xl mx-auto justify-center w-[60%] sm:w-[40%] md:w-[20%] flex self-center"
          >
            <p className="text-sm">View All React Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Passwordgen;
