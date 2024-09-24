import Header from "./items/Header";
import { Outlet } from "react-router-dom";

const Rootbox = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Rootbox;
