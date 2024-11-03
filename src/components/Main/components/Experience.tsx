import { Button } from "@/components/ui/button";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

import Pic02 from "@/assets/imgs/pic02.png";
import Exp02 from "@/assets/imgs/exp02.png";
import Exp03 from "@/assets/imgs/exp03.png";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex-col md:flex-row flex justify-between mt-20">
      <div>
        <span className="w-1/2">
          <h2 className="text-5xl md:text-7xl">
            Curate your experience <br /> as you like
          </h2>
        </span>
        <Button variant="custom" className="mt-10">
          Book Tickets <IoArrowForward className="ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-2 ">
        <div className=" rounded-lg overflow-hidden col-span-1 mt-20">
          <Image src={Pic02} alt="alt" className="w-full h-auto object-cover" />
          <h2 className="text-center text-lg md:text-2xl text-white mt-4">
            Resturants
          </h2>
        </div>
        <div className="rounded-lg overflow-hidden col-span-2">
          <Image
            src={Exp02}
            alt="alt"
            className="w-full h-auto  object-cover"
          />
          <h2 className="text-center text-lg md:text-2xl text-white mt-4">
            Experiences
          </h2>
        </div>
        <div className="rounded-lg overflow-hidden col-span-1 mt-20">
          <Image src={Exp03} alt="alt" className="w-full h-auto object-cover" />
          <h2 className="text-center text-lg md:text-2xl text-white mt-4">
            Events
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
