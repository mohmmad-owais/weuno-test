import React from "react";

import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

import player from "@/assets/imgs/player.png";

const AccessTicket = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-7xl text-center">
        Mall Of: Endless Possibilities
      </h2>
      <p className="text-sm md:text-lg mt-5 text-center md:w-1/2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled.
      </p>
      <span className="mt-10">
        <Image width={904} height={231} src={player} alt="player" />
      </span>
      <div className="p-5 md:w-[904px] md:h-[231px] md:px-5 flex  md:justify-between items-center mt-10 bg-card rounded-2xl ">
        <span className="space-y-5">
          <p>25 SR/Guest</p>
          <h2 className="text-2xl md:text-3xl">
            Get your General Access Ticket
          </h2>
          <p className="md:w-3/4 md:text-base text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s,
          </p>
        </span>
        <span>
          <IoArrowForward className="w-12 h-10 text-white/50" />
        </span>
      </div>
    </div>
  );
};

export default AccessTicket;
