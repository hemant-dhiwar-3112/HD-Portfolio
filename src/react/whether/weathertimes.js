import React from "react";

const weathertimes = (props) => {
  return (
    <>
      <div className="mx-1 w-[70px] my-[8px] flex-wrap flex-col text-sm text-center justify-center flex">
        <h3>{props.time}</h3>
        <img src={props.logo} className=" w-[40px] flex self-center" />
        <h3>{props.temp}&#176;</h3>
      </div>
    </>
  );
};

export default weathertimes;
