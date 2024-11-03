import React from "react";
import AccessTicket from "./components/AccessTicket";
import GeneralTicket from "./components/GeneralTicket";
import Cuisine from "./components/Cuisine";
import Experience from "./components/Experience";

const Main = () => {
  return (
    <div className="px-12 mt-20">
      <AccessTicket />
      <GeneralTicket />
      <Cuisine />
      <Experience />
    </div>
  );
};

export default Main;
