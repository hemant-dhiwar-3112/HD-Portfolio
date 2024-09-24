import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import currencyhook from "./Currencyhook";

const Currencycon = () => {
  const [sel1, setsel1] = useState("USD");
  const [sel2, setsel2] = useState("INR");
  let option1 = currencyhook(sel1);
  let option2 = currencyhook(sel2);

  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");

  const in1 = () => {
    input2.value = input1.value * option1[sel2];
  };
  const in2 = () => {
    input1.value = input2.value / option1[sel2];
  };

  return (
    <>
      <div className="dark:bg-[#0f1013]  ">
        <h2 className="uppercase text-center text-[16px]  my-3 dark:text-[#64FFDA]">
          Currency converter
        </h2>

        <div
          className="mx-auto w-[85%] sm:w-[50%] flex flex-col justify-center  rounded-2xl bg-[#c8ced9]"
          style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
        >
          <div className=" w-full px-6 border-b-2 border-[#4c3b3b75] pt-8 pb-10 ">
            <h5 className="text-sm text-gray-600 mb-2 ">Amount</h5>
            <div className=" flex justify-between">
              <input
                type="number"
                id="input1"
                className="w-[60%] outline-none p-2 rounded-md"
                onInput={in1}
                defaultValue={option1[sel1]}
              />

              <select
                className="w-[30%] outline-none rounded-md"
                onChange={(e) => {
                  setsel1(e.target.value);
                  setsel2(sel2);
                }}
              >
                {Object.keys(option1).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className=" w-full px-6  py-6 ">
            <h5 className="text-sm text-gray-600 mb-2 ">Converted Amount</h5>
            <div className=" flex justify-between">
              <input
                type="number"
                id="input2"
                onInput={in2}
                className="w-[60%] outline-none p-2 rounded-md"
                defaultValue={option1[sel2]}
              />
              <select
                name=""
                id=""
                className="w-[30%] outline-none rounded-md"
                onChange={(e) => {
                  setsel2(e.target.value);
                  setsel1(sel1);
                }}
              >
                {Object.keys(option2).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
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
    </>
  );
};

export default Currencycon;
