import React from "react";

const Skillper = (props) => {
  return (
    <>
      <div className="m-5">
        <div className=" flex justify-between">
          <h3>{props.name}</h3>
          <h3>{props.per}</h3>
        </div>
        <span className="my-2 block overflow-hidden bg-black rounded-md h-1">
          <span className={props.cash} id={props.id}>
          </span>
          </span>
      </div>
    </>
  );
};

export default Skillper;
