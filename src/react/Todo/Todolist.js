import React, { useCallback, useEffect, useState } from "react";
import Todoitem from "./Todoitem";
import { Link } from "react-router-dom";

const Todolist = () => {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const locval = JSON.parse(localStorage.getItem("todolist"));
    if (locval && locval.length > 0) {
      settodos(locval);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  // settodo
  const settodolist = (e) => {
    const val = document.getElementById("getval");
    e.preventDefault();
    if (val.value.length > 0) {
      settodos([...todos, { id: Date.now(), todo: val.value }]);
      localStorage.setItem("todolist", JSON.stringify(todos));
    }

    val.value = "";
  };

  // edit todos
  const edittodo = (id, text) => {
    settodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: text } : todo))
    );
  };

  // delete todo
  const deltodos = (id) => settodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      <div className="dark:bg-[rgb(15,16,19)] bg-[#7b787814] h-screen">
        <div className="w-full sm:w-[90%] lg:w-[80%]  sm:px-[15px]  lg:mx-[10%] sm:mx-[5%] mx-0 h-[50%]">
          <div className=" flex flex-wrap justify-center items-center ">
            <div
              className="w-[95%] sm:w-[85%] md:mx-4 bg-slate-600  pb-8 my-10 sm:mt-20 sm:mb-8  rounded-3xl"
              style={{ boxShadow: "0px 0px 5px 5px #796e6eba" }}
            >
              <h2 className="uppercase text-center text-white text-[16px]  my-5 dark:text-[#64FFDA]">
                Todo list
              </h2>
              <form className=" sm:flex justify-center" onSubmit={settodolist}>
                <input
                  type="text"
                  className=" w-[85%] sm:w-[75%] md:w-[50%]  p-3 mx-auto sm:m-0 outline-none flex self-center rounded-xl sm:rounded-r-none"
                  id="getval"
                />
                <button
                  type="submit"
                  className=" mx-auto flex sm:flex-none  self-center py-3 rounded-xl sm:rounded-l-none text-white font-normal bg-blue-500 px-[20%] sm:px-4 my-8  sm:m-0 sm:ml-[-10px] text-center"
                >
                  ADD
                </button>
              </form>
              <div className="sm:flex justify-center flex-col mt-8 mx-auto">
                {todos.map((item) => (
                  <Todoitem
                    key={item.id}
                    title={item.todo}
                    index={item.id}
                    edittodos={edittodo}
                    deltodo={deltodos}
                  />
                ))}
              </div>
            </div>
            <Link
              to="/project/react-project"
              className="text-white mt-10 p-3 bg-sky-600 hover:bg-sky-800 rounded-2xl mx-auto justify-center w-[60%] sm:w-[40%] md:w-[20%] flex self-center"
            >
              {/* {localStorage.removeItem("todolist")} */}
              <p className="text-sm">View All React Project</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
