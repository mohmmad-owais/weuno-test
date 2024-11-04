import Image from "next/image";
import React from "react";

import Cuisine01 from "@/assets/imgs/cuisine01.png";
import Cuisine02 from "@/assets/imgs/cuisine02.png";
import Cuisine03 from "@/assets/imgs/cuisine03.png";
import Cuisine04 from "@/assets/imgs/cuisine04.png";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Cuisine = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl md:text-7xl">
        Experience the Finest Cuisine
      </h2>
      <p className="hidden md:block text-center text-sm md:text-base w-3/4 mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500sLorem Ipsum has been the industrys standard dummy text
        ever since the 1500 since the 1500sLorem Ipsum has be since the
        1500sLorem Ipsum has be
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 p-4 ">
        <div className="bg-card rounded-2xl overflow-hidden p-4 pb-10 relative">
          <Image
            src={Cuisine01}
            alt={""}
            width={500}
            height={300}
            className="object-cover rounded-t-lg"
          />
          <div className="flex mt-4 justify-between items-center">
            <span>
              <h3 className="text-white text-lg">Vida Vera</h3>
              <Button className="rounded-full mt-3 text-sm bg-customColorPrimary hover:bg-yellow-600 py-1 text-white">
                100 SR per Guest
              </Button>
            </span>
            <span>
              <IoArrowForward className="md:w-10 md:h-10 size-7 cursor-pointer text-white/50" />
            </span>
          </div>
        </div>
        <div className="bg-card rounded-2xl overflow-hidden p-4 pb-10 relative">
          <Image
            src={Cuisine02}
            alt={""}
            width={500}
            height={300}
            className="object-cover rounded-t-lg"
          />
          <div className="flex mt-4 justify-between items-center">
            <span>
              <h3 className="text-white text-lg ">Zama Zulu</h3>
              <Button className="rounded-full mt-3 text-sm bg-customColorPrimary hover:bg-yellow-600 py-1 text-white">
                100 SR per Guest
              </Button>
            </span>
            <span>
              <IoArrowForward className="w-10 h-10 cursor-pointer text-white/50" />
            </span>
          </div>
        </div>
        <div className="bg-card rounded-2xl overflow-hidden p-4 pb-10 relative">
          <Image
            src={Cuisine03}
            alt={""}
            width={500}
            height={300}
            className="object-cover rounded-t-lg"
          />
          <div className="flex mt-4 justify-between items-center">
            <span>
              <h3 className="text-white text-lg ">Khawaja Yanni</h3>
              <Button className="rounded-full mt-3 text-sm bg-customColorPrimary hover:bg-yellow-600 py-1 text-white">
                100 SR per Guest
              </Button>
            </span>
            <span>
              <IoArrowForward className="w-10 h-10 cursor-pointer text-white/50" />
            </span>
          </div>
        </div>
        <div className="bg-card rounded-2xl overflow-hidden p-4 pb-10 relative">
          <Image
            src={Cuisine04}
            alt={""}
            width={500}
            height={300}
            className="object-cover rounded-t-lg"
          />
          <div className="flex mt-4 justify-between items-center">
            <span>
              <h3 className="text-white ">Yamagata</h3>
              <Button className="rounded-full mt-3 text-sm bg-customColorPrimary hover:bg-yellow-600 py-1 text-white">
                100 SR per Guest
              </Button>
            </span>
            <span>
              <IoArrowForward className="w-10 h-10 cursor-pointer text-white/50" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
