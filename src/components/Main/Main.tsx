import React from "react";
import AccessTicket from "./components/AccessTicket";
import GeneralTicket from "./components/GeneralTicket";
import Cuisine from "./components/Cuisine";

const Main = () => {
  return (
    <div className="px-12 mt-20">
      <AccessTicket />
      <GeneralTicket />
      <Cuisine />
    </div>
  );
};

export default Main;
