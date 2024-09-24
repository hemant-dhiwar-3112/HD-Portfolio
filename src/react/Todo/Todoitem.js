import React, { useState } from "react";
import { BiTrash, BiEdit, BiSave } from "react-icons/bi";

const Todoitem = (props) => {
  const [val, setval] = useState("");
  const [icons, seticons] = useState(
    <BiEdit className=" text-xl mx-3 cursor-pointer" />
  );
  const iconset = (ids) => {
    const box3 = document.getElementById(`box${ids}`);
    const chengeval = document.getElementById(`chengeval${ids}`);
    if (box3.checked == true) {
      seticons(
        <BiSave
          className=" text-xl mx-3 cursor-pointer"
          onClick={() => props.edittodos(ids, chengeval.value)}
        />
      );
      chengeval.removeAttribute("readOnly");
      chengeval.focus();
    }
     else if (box3.checked == false) {
      seticons(<BiEdit className=" text-xl mx-3 cursor-pointer" />);
      chengeval.setAttribute("readOnly", true);
    }    
  };
  
  return (
    <div className="flex w-[87%] md:w-[58%] p-2 my-4 sm:my-2 mx-auto  bg-[#7ea7b7] rounded-xl">
      <input
        type="text"
        className=" w-[85%] bg-[#7ea7b7] p-1 mx-auto sm:m-0 outline-none flex self-center text-[#01030e] text-xl"
        defaultValue={props.title}
        id={`chengeval${props.index}`}
        readOnly
      />
      <div className="flex justify-between items-center">
        <label htmlFor={`box${props.index}`} className="cursor-pointer" >
          <input
            id={`box${props.index}`}
            type="checkbox"
            className=" hidden"
            onClick={()=>iconset(props.index)}
          />
          {icons}
        </label>
        <BiTrash
          className=" text-xl mx-3 cursor-pointer"
          onClick={() => props.deltodo(props.index)}
        />
      </div>
    </div>
  );
};

export default Todoitem;
